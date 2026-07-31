#!/usr/bin/env python3
"""
Sichert bezahlte Themenabende ab: lädt ihre Stationen nach Supabase (paid_content)
und entkernt sie in themes.js, sodass im öffentlichen Repo nur Verkaufs-Metadaten
zurückbleiben. Wiederholbar — nach jedem neuen Bezahlabend erneut ausführen:

    python3 _scripts/protect_paid.py            # zeigt nur, was passieren würde
    python3 _scripts/protect_paid.py --apply    # macht es wirklich

Voraussetzung: Import-Geheimnis im Schlüsselbund
    security add-generic-password -s klarkreis-import-secret -a klarkreis -w '<geheim>'
Die Row-Level-Security lässt Schreiben nur mit diesem Header zu; Lesen bleibt
immer an eine gültige Berechtigung (Tabelle entitlements) gebunden.
"""
import json, os, re, subprocess, sys, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
THEMES = os.path.join(ROOT, "themes.js")
SUPA = "https://liqnavdghqhhavgkhgpx.supabase.co"
ANON = "sb_publishable_5lEVXLCtoG6yvY1w-Q5Xcw_Y9V46rjy"
APPLY = "--apply" in sys.argv

# Welche Theme-ID gehört zu welchem Produkt. Neue Reisen hier ergänzen.
PRODUCT_OF = [
    (re.compile(r"^werte_reise_[2-9]\d*$"), "werte_reise"),
    (re.compile(r"^wir_reise_[2-9]\d*$"),   "wir_reise"),
    (re.compile(r"^frei_reise_\d+$"),       "frei_reise"),
    (re.compile(r"^date$"),                 "date"),
]

def product_for(tid):
    for rx, p in PRODUCT_OF:
        if rx.match(tid):
            return p
    return None

def secret():
    r = subprocess.run(["security", "find-generic-password", "-s",
                        "klarkreis-import-secret", "-w"], capture_output=True, text=True)
    if r.returncode != 0 or not r.stdout.strip():
        sys.exit("Import-Geheimnis fehlt im Schlüsselbund — siehe Kopf dieser Datei.")
    return r.stdout.strip()

def load_themes():
    node = os.path.expanduser("~/.local/node/bin/node")
    node = node if os.path.exists(node) else "node"
    code = ("global.window={};require(%r);"
            "console.log(JSON.stringify(global.window.THEMES));" % THEMES)
    r = subprocess.run([node, "-e", code], capture_output=True, text=True)
    if r.returncode != 0:
        sys.exit("themes.js nicht lesbar:\n" + r.stderr[:400])
    return json.loads(r.stdout)

def find_formats_span(text, tid):
    """Grenzen des formats-Blocks eines Themes per Klammerzählung."""
    m = re.search(r"^  " + re.escape(tid) + r": \{", text, re.M)
    if not m:
        return None
    depth = 0
    for j in range(m.end() - 1, len(text)):
        if text[j] == "{": depth += 1
        elif text[j] == "}":
            depth -= 1
            if depth == 0:
                theme_end = j
                break
    block = text[m.start():theme_end + 1]
    fm = re.search(r"\n    formats: \{", block)
    if not fm:
        return None
    depth = 0
    for j in range(fm.end() - 1, len(block)):
        if block[j] == "{": depth += 1
        elif block[j] == "}":
            depth -= 1
            if depth == 0:
                return m.start() + fm.start() + 5, m.start() + j + 1
    return None

def js(s):
    return "'" + str(s).replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n") + "'"

def stub(t, product):
    out = [f"paid: {js(product)},", "    formats: {"]
    for f, fmt in t["formats"].items():
        cnt = len([s for s in fmt["stations"] if s.get("type") != "feedback"])
        out += [f"      {f}: {{",
                f"        label: {js(fmt.get('label',''))},",
                f"        duration: {js(fmt.get('duration',''))},",
                f"        people: {js(fmt.get('people',''))},",
                f"        stationCount: {cnt},",
                f"        totalMinutes: {fmt.get('totalMinutes', 0)},",
                f"        stations: null,   // Inhalt serverseitig (paid_content)",
                f"      }},"]
    out.append("    }")
    return "\n    ".join(out[:1]) + "\n    " + "\n".join(out[1:])

def main():
    T = load_themes()
    todo = []
    for tid, t in T.items():
        p = product_for(tid)
        if not p:
            continue
        if any(f.get("stations") for f in t["formats"].values()):
            todo.append((tid, p, t))

    if not todo:
        print("Nichts zu tun — alle bezahlten Abende sind bereits geschützt.")
        return

    print(f"{len(todo)} bezahlte Abende noch ungeschützt im Repo:")
    for tid, p, t in todo:
        n = sum(len(f["stations"]) for f in t["formats"].values())
        print(f"  {tid:16} {p:12} {n} Stationen")
    if not APPLY:
        print("\nProbelauf. Zum Ausführen: --apply")
        return

    rows = [{"theme_id": tid, "product": p, "payload": t["formats"]} for tid, p, t in todo]
    req = urllib.request.Request(
        SUPA + "/rest/v1/paid_content",
        data=json.dumps(rows).encode(),
        headers={"apikey": ANON, "Authorization": "Bearer " + ANON,
                 "Content-Type": "application/json",
                 "x-import-secret": secret(),
                 "Prefer": "resolution=merge-duplicates"},
        method="POST")
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            print(f"→ hochgeladen (HTTP {r.status})")
    except urllib.error.HTTPError as e:
        sys.exit(f"Upload fehlgeschlagen (HTTP {e.code}): {e.read()[:300].decode()}")

    # Lokale Kopie fuer die Vertonung. Die Vertonungs-Skripte lesen sonst aus
    # themes.js und finden dort nach dem Entkernen nichts mehr. _scripts/ ist
    # von Git ausgeschlossen, die Inhalte verlassen den Rechner also nicht.
    cache = os.path.join(ROOT, "_scripts", "paid_cache")
    os.makedirs(cache, exist_ok=True)
    for tid, p, t in todo:
        with open(os.path.join(cache, tid + ".json"), "w", encoding="utf-8") as fh:
            json.dump(t["formats"], fh, ensure_ascii=False)
    print(f"→ lokale Vertonungs-Kopie abgelegt ({len(todo)} Abende)")

    src = open(THEMES, encoding="utf-8").read()
    for tid, p, t in todo:
        span = find_formats_span(src, tid)
        if not span:
            sys.exit("formats-Block nicht gefunden: " + tid)
        a, b = span
        src = src[:a] + stub(t, p) + src[b:]
    open(THEMES, "w", encoding="utf-8").write(src)
    print(f"→ themes.js entkernt ({os.path.getsize(THEMES)//1024} KB)")
    print("Bitte anschließend committen + pushen.")

if __name__ == "__main__":
    main()
