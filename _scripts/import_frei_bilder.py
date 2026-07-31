#!/usr/bin/env python3
"""
Importiert die Strich-Bilder der Frei-Reise.

Nimmt einen Ordner mit beliebig benannten Bildern, zählt bei jedem die
Tuschestriche, benennt danach korrekt, bringt alles auf 4:5 und unter
500 KB und legt es in images/ ab.

    python3 _scripts/import_frei_bilder.py ~/Desktop/striche          # Probelauf
    python3 _scripts/import_frei_bilder.py ~/Desktop/striche --apply  # schreibt

Zuordnung: Strichzahl N -> images/frei-reise-N.jpg
Zwei Bilder mit 10 Strichen: das mit der staerkeren Steigerung (letzter
Strich deutlich massiver als der erste) wird das Reise-Cover
images/frei-reise.jpg, das gleichmaessigere wird Abend 10.
"""
import sys, os, glob
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "images"
APPLY = "--apply" in sys.argv
MAX_BYTES = 500 * 1024
TARGET_W, TARGET_H = 1200, 1500          # 4:5


def ink_columns(img):
    """Spalten, die Tusche enthalten. Papier ist creme, Tusche rostrot."""
    im = img.convert("RGB")
    w, h = im.size
    px = im.load()
    step = max(1, h // 400)               # vertikal ausduennen, reicht voellig
    cols = []
    for x in range(w):
        hits = 0
        for y in range(0, h, step):
            r, g, b = px[x, y]
            if r - g > 28 and r - b > 28 and r < 245:
                hits += 1
        cols.append(hits)
    return cols


def count_strokes(img, min_gap=4):
    """Zusammenhaengende Tusche-Spalten = ein Strich. Liefert (Anzahl, Massen)."""
    cols = ink_columns(img)
    thresh = max(2, max(cols) * 0.12) if max(cols) else 1
    runs, cur = [], None
    gap = 0
    for x, v in enumerate(cols):
        if v >= thresh:
            if cur is None:
                cur = [x, x, 0]
            cur[1] = x
            cur[2] += v
            gap = 0
        elif cur is not None:
            gap += 1
            if gap >= min_gap:
                runs.append(cur); cur = None
    if cur is not None:
        runs.append(cur)
    runs = [r for r in runs if r[1] - r[0] >= 1]
    masses = [r[2] for r in runs]
    return len(runs), masses


def to_4x5(img):
    """Auf 4:5 bringen. Zu hoch -> oben wegschneiden (dort ist leeres Papier)."""
    w, h = img.size
    want = w * 5 / 4
    if h > want + 1:
        img = img.crop((0, int(h - want), w, h))
    elif h < want - 1:
        want_w = int(h * 4 / 5)
        off = (w - want_w) // 2
        img = img.crop((off, 0, off + want_w, h))
    return img.resize((TARGET_W, TARGET_H), Image.LANCZOS)


def save_under_limit(img, path):
    for q in (88, 84, 80, 74, 68, 60):
        img.save(path, "JPEG", quality=q, optimize=True, progressive=True)
        if path.stat().st_size <= MAX_BYTES:
            return q, path.stat().st_size
    return q, path.stat().st_size


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    if not args:
        sys.exit("Bitte den Ordner mit den Bildern angeben.")
    src = Path(os.path.expanduser(args[0]))
    files = sorted(f for ext in ("jpg", "jpeg", "png", "webp", "JPG", "PNG")
                   for f in glob.glob(str(src / f"*.{ext}")))
    if not files:
        sys.exit(f"Keine Bilder in {src}")

    found = []
    for f in files:
        img = Image.open(f)
        n, masses = count_strokes(img)
        ratio = (masses[-1] / masses[0]) if masses and masses[0] else 0
        found.append({"file": f, "n": n, "ratio": ratio, "size": img.size})
        print(f"  {Path(f).name:<34} {n:>2} Striche   "
              f"Steigerung {ratio:>4.1f}x   {img.size[0]}x{img.size[1]}")

    # Zwei Zehner: der mit der staerkeren Steigerung wird das Cover
    tens = [e for e in found if e["n"] == 10]
    cover = max(tens, key=lambda e: e["ratio"]) if len(tens) > 1 else None

    plan = []
    for e in found:
        if e is cover:
            plan.append((e, IMAGES / "frei-reise.jpg", "Reise-Cover"))
        elif 1 <= e["n"] <= 10:
            plan.append((e, IMAGES / f"frei-reise-{e['n']}.jpg", f"Abend {e['n']}"))
        else:
            plan.append((e, None, f"?? {e['n']} Striche — bitte pruefen"))

    print("\nPlan:")
    for e, dest, label in plan:
        print(f"  {Path(e['file']).name:<34} -> {label:<14} "
              f"{dest.name if dest else '(uebersprungen)'}")

    have = {p[2] for p in plan if p[1]}
    fehlt = [f"Abend {i}" for i in range(1, 11) if f"Abend {i}" not in have]
    if fehlt:
        print("\n  Es fehlen noch:", ", ".join(fehlt))
    if not cover and len(tens) == 1:
        print("  Kein separates Cover — nehme frei-reise-10.jpg auch als Cover.")

    if not APPLY:
        print("\nProbelauf. Zum Schreiben: --apply")
        return

    IMAGES.mkdir(exist_ok=True)
    written = 0
    for e, dest, label in plan:
        if not dest:
            continue
        img = to_4x5(Image.open(e["file"]).convert("RGB"))
        q, size = save_under_limit(img, dest)
        print(f"  geschrieben {dest.name:<22} {size//1024:>3} KB (q{q})")
        written += 1
    if not cover and len(tens) == 1:
        import shutil
        shutil.copyfile(IMAGES / "frei-reise-10.jpg", IMAGES / "frei-reise.jpg")
        print("  geschrieben frei-reise.jpg          (Kopie von Abend 10)")
    print(f"\n{written} Bilder in images/ abgelegt.")


if __name__ == "__main__":
    main()
