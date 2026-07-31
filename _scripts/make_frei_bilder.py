#!/usr/bin/env python3
"""
Erzeugt die Strich-Bilder der Frei-Reise programmatisch.

Gleiche Bildsprache wie die generierten: Rostrote Tuschestriche auf cremefarbenem
Papier, 4:5, Striche im unteren Drittel, von duenn-zaghaft nach dick-selbstsicher.
Strichzahl = Abendnummer.

    python3 _scripts/make_frei_bilder.py

Schreibt images/frei-reise-1.jpg … -10.jpg und images/frei-reise.jpg (Cover).
Ersetzbar: sobald echte Bilder da sind, import_frei_bilder.py drueberlaufen lassen.
"""
import math, random
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
IMAGES = ROOT / "images"
W, H = 1200, 1500
PAPER = (247, 244, 235)
INK_LIGHT = (196, 132, 106)     # erster Strich: duenn, blass
INK_DARK = (166, 58, 38)        # letzter Strich: satt


def paper(seed):
    rnd = random.Random(seed)
    base = Image.new("RGB", (W, H), PAPER)
    # weiche Wolkigkeit: Rauschen klein erzeugen und hochskalieren
    small = Image.effect_noise((W // 5, H // 5), 22).convert("L")
    small = small.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(9))
    base = Image.composite(Image.new("RGB", (W, H), (252, 250, 243)), base, small.point(lambda v: 255 if v > 140 else 0))
    base = Image.blend(base, Image.new("RGB", (W, H), PAPER), 0.55)
    # feine Faser
    grain = Image.effect_noise((W, H), 7).convert("L").point(lambda v: 255 if v > 168 else 0)
    base = Image.composite(Image.new("RGB", (W, H), (243, 240, 231)), base, grain)
    return base


def stroke(px, x0, y0, y1, width, color, dryness, rnd):
    """Ein Strich mit leichtem Wackeln und koerniger Kante."""
    span = y1 - y0
    ph1, ph2 = rnd.uniform(0, 6.28), rnd.uniform(0, 6.28)
    amp = rnd.uniform(1.4, 3.6)
    for y in range(y0, y1):
        t = (y - y0) / span
        xc = x0 + amp * math.sin(t * 3.1 + ph1) + amp * 0.5 * math.sin(t * 7.7 + ph2)
        # Enden leicht auslaufen lassen
        taper = min(1.0, t / 0.04, (1 - t) / 0.05)
        hw = width * 0.5 * (0.75 + 0.25 * taper)
        lo, hi = int(xc - hw) - 1, int(xc + hw) + 2
        for x in range(lo, hi):
            d = abs(x - xc) / max(hw, 0.6)
            if d > 1.15:
                continue
            cov = 1.0 if d < 0.62 else max(0.0, (1.15 - d) / 0.53)
            cov *= taper * 0.35 + 0.65
            if rnd.random() < dryness * (0.35 + 0.65 * d):
                continue                      # Trockenpinsel-Luecke
            if 0 <= x < W and 0 <= y < H:
                r, g, b = px[x, y]
                px[x, y] = (
                    int(r + (color[0] - r) * cov),
                    int(g + (color[1] - g) * cov),
                    int(b + (color[2] - b) * cov),
                )


def make(n, path, seed, crescendo=1.0):
    rnd = random.Random(seed)
    img = paper(seed)
    px = img.load()

    narrow = n <= 5
    left = W * (0.13 if narrow else 0.11)
    right = W * ((0.13 + 0.075 * n) if narrow else 0.90)
    y0, y1 = int(H * 0.585), int(H * 0.855)

    for i in range(n):
        t = i / max(1, n - 1) if n > 1 else 0.0
        x = left + (right - left) * t if n > 1 else left
        x += rnd.uniform(-4, 4)
        width = (3.2 + (5.0 + 7.0 * crescendo) * t) * (1.0 + rnd.uniform(-.07, .07))
        col = tuple(int(INK_LIGHT[k] + (INK_DARK[k] - INK_LIGHT[k]) * t) for k in range(3))
        dryness = 0.34 * (1 - t) + 0.04       # helle Striche koerniger
        yy0 = y0 + int(rnd.uniform(-10, 10))
        yy1 = y1 + int(rnd.uniform(-12, 12))
        stroke(px, x, yy0, yy1, width, col, dryness, rnd)

    img = img.filter(ImageFilter.GaussianBlur(0.4))
    for q in (90, 86, 82, 76):
        img.save(path, "JPEG", quality=q, optimize=True, progressive=True)
        if path.stat().st_size <= 500 * 1024:
            break
    return path.stat().st_size


def main():
    IMAGES.mkdir(exist_ok=True)
    total = 0
    for n in range(1, 11):
        p = IMAGES / f"frei-reise-{n}.jpg"
        size = make(n, p, seed=1000 + n, crescendo=0.9)
        total += size
        print(f"  {p.name:<22} {n:>2} Striche   {size//1024:>3} KB")
    p = IMAGES / "frei-reise.jpg"
    size = make(10, p, seed=4242, crescendo=2.3)      # Cover: starke Steigerung
    print(f"  {p.name:<22} 10 Striche   {size//1024:>3} KB   (Cover)")
    print(f"\n11 Bilder, zusammen {(total+size)//1024} KB")


if __name__ == "__main__":
    main()
