#!/usr/bin/env python3
"""
Erzeugt verkleinerte Bildfassungen für schnelleres Laden auf dem Handy:

    images/<name>.jpg  →  images/w480/<name>.jpg  (Vorschaubilder, kleine Karten)
                       →  images/w960/<name>.jpg  (Karten auf Retina-Handys)

Die Seiten binden sie per srcset ein; das Original bleibt für große Bildschirme.
Nach jedem neuen oder ausgetauschten Bild erneut ausführen:

    python3 _scripts/make_thumbs.py          # nur fehlende oder veraltete
    python3 _scripts/make_thumbs.py --all    # alle neu

Braucht Pillow (pip install pillow).
"""
import glob, os, sys
from PIL import Image

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMAGES = os.path.join(ROOT, "images")
SIZES = (480, 960)
ALL = "--all" in sys.argv

done = 0
for src in sorted(glob.glob(os.path.join(IMAGES, "*.jpg"))):
    name = os.path.basename(src)
    for width in SIZES:
        out = os.path.join(IMAGES, f"w{width}", name)
        if not ALL and os.path.exists(out) and os.path.getmtime(out) >= os.path.getmtime(src):
            continue
        os.makedirs(os.path.dirname(out), exist_ok=True)
        im = Image.open(src).convert("RGB")
        w, h = im.size
        if w > width:
            im = im.resize((width, round(h * width / w)), Image.LANCZOS)
        im.save(out, "JPEG", quality=78, optimize=True, progressive=True)
        done += 1
print(f"{done} Fassungen geschrieben.")
