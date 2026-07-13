#!/usr/bin/env python3
"""Erzeugt ein liebevoll gestaltetes Abend-Handout (PDF) aus themes.js-Daten.
Rendert HTML → PDF via Headless-Chrome. Aufruf: make_pdf.py <theme_id>"""
import os, sys, json, subprocess, html
from pathlib import Path
REPO=Path("/Users/florian/Projects/websites/klarkreis")
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
OUTDIR=REPO/"pdf"; OUTDIR.mkdir(exist_ok=True)
tid=sys.argv[1] if len(sys.argv)>1 else "wir_reise_1"

def get_theme(tid):
    js=r"""
    global.window={}; require('%s/themes.js');
    var t=global.window.THEMES['%s'];
    var f=t.formats.pair||t.formats.group;
    process.stdout.write(JSON.stringify({title:t.title,subtitle:t.subtitle||'',lead:t.lead,
      reise:t.reise||null,
      stations:f.stations.filter(s=>s.type!=='feedback').map(s=>({name:s.name,title:s.title,
        quote:s.quote||null,description:s.description||'',items:s.items||[],question:s.question||''}))}));
    """ % (str(REPO),tid)
    env=dict(os.environ); env["PATH"]=os.path.expanduser("~/.local/node/bin")+":"+env.get("PATH","")
    return json.loads(subprocess.run([os.path.expanduser("~/.local/node/bin/node"),"-e",js],capture_output=True,text=True,env=env).stdout)

def esc(s): return html.escape(str(s))

t=get_theme(tid)
# Kuratieren: Kern-Zitat, Modell-Stationen (mit items), Reflexions-Prompts
quote=next((s['quote'] for s in t['stations'] if s.get('quote')),None)
models=[s for s in t['stations'] if s.get('items') and len(s['items'])>=3][:3]
# Reflexion: Stationen die nach Schritt/Wort/Frage aussehen mit question
prompts=[s for s in t['stations'] if s.get('question') and any(k in s['name'].lower() for k in ('schritt','wort','wandel','pakt','vertrag','geste','segen','dank'))][:3]
if not prompts:
    prompts=[s for s in t['stations'] if s.get('question')][-2:]

reise_label = (t['reise']['titel'] if t.get('reise') else 'KlarKreis')
nr = t['reise']['nr'] if t.get('reise') else ''
total = t['reise']['total'] if t.get('reise') else ''

logo='''<svg width="30" height="30" viewBox="0 0 64 64"><circle cx="32" cy="32" r="28" fill="none" stroke="#1B3022" stroke-width="3"/><circle cx="32" cy="32" r="18" fill="none" stroke="#1B3022" stroke-width="2" opacity="0.5"/><circle cx="32" cy="32" r="3.2" fill="#924C00"/></svg>'''

def model_html(s):
    items="".join(f'''<div class="item"><span class="acc">{esc(it.get("accent",""))}</span>
      <div><b>{esc(it.get("label",""))}</b> {esc(it.get("text",""))}</div></div>''' for it in s['items'])
    desc=f'<p class="mdesc">{esc(s["description"])}</p>' if s.get('description') else ''
    return f'<section class="model"><h3>{esc(s["title"])}</h3>{desc}<div class="items">{items}</div></section>'

def prompt_html(s):
    return f'''<div class="prompt"><p class="q">{esc(s['question'])}</p>
      <div class="line"></div><div class="line"></div></div>'''

body=f'''
<div class="page">
  <header>
    <div class="brand">{logo}<span>KlarKreis</span></div>
    <div class="reise">{esc(reise_label)}{f" · Abend {nr} von {total}" if nr else ""}</div>
  </header>
  <h1>{esc(t['title'])}</h1>
  <p class="sub">{esc(t['subtitle'])}</p>
  <p class="lead">{esc(t['lead'])}</p>
  {f'<blockquote>{esc(quote["text"])}<cite>— {esc(quote.get("author",""))}</cite></blockquote>' if quote else ''}
  <h2>Das Wesentliche</h2>
  {"".join(model_html(m) for m in models)}
  <h2>Was ihr mitnehmt</h2>
  <p class="rnote">Zum Ausfüllen — für euch, in den Tagen nach dem Abend.</p>
  {"".join(prompt_html(p) for p in prompts)}
  <footer>klarkreis.de · Ein Abend der {esc(reise_label)}</footer>
</div>
'''

css='''
@page { size: A4; margin: 0; }
* { box-sizing: border-box; margin:0; padding:0; }
body { font-family: 'Helvetica Neue', Arial, sans-serif; color:#1B1C19; background:#FBF9F4; }
.page { padding: 22mm 20mm 16mm; min-height:297mm; background:#FBF9F4;
  background-image: radial-gradient(circle at 92% 6%, rgba(146,76,0,0.05), transparent 40%); }
header { display:flex; justify-content:space-between; align-items:center; padding-bottom:10px; border-bottom:1px solid #e4e2dd; margin-bottom:26px; }
.brand { display:flex; align-items:center; gap:8px; }
.brand span { font-family:Georgia,serif; font-style:italic; font-size:20px; color:#1B3022; }
.reise { font-size:10px; text-transform:uppercase; letter-spacing:.18em; color:#924C00; font-weight:600; }
h1 { font-family:Georgia,serif; font-size:34px; line-height:1.1; color:#1B3022; margin-bottom:6px; }
.sub { font-family:Georgia,serif; font-style:italic; color:#737973; font-size:15px; margin-bottom:18px; }
.lead { font-size:12.5px; line-height:1.6; color:#434843; margin-bottom:22px; }
blockquote { border-left:3px solid #924C00; padding:12px 18px; margin:0 0 26px; background:#f5f3ee; border-radius:0 6px 6px 0;
  font-family:Georgia,serif; font-style:italic; font-size:15px; color:#1B3022; line-height:1.5; }
blockquote cite { display:block; margin-top:8px; font-style:normal; font-size:10px; text-transform:uppercase; letter-spacing:.15em; color:#924C00; }
h2 { font-family:Georgia,serif; font-size:19px; color:#1B3022; margin:24px 0 12px; padding-bottom:5px; border-bottom:1px solid #e4e2dd; }
.model { margin-bottom:16px; break-inside:avoid; }
.model h3 { font-family:Georgia,serif; font-size:15px; color:#924C00; margin-bottom:6px; }
.mdesc { font-size:11px; line-height:1.5; color:#434843; margin-bottom:8px; }
.items { display:flex; flex-direction:column; gap:6px; }
.item { display:flex; gap:9px; font-size:11.5px; line-height:1.45; color:#1B1C19; padding:7px 10px; background:#fff; border:1px solid #ece9e3; border-radius:5px; }
.item .acc { color:#924C00; font-weight:700; min-width:16px; }
.item b { color:#1B3022; }
.rnote { font-size:10.5px; color:#737973; font-style:italic; margin-bottom:12px; }
.prompt { margin-bottom:16px; break-inside:avoid; }
.prompt .q { font-family:Georgia,serif; font-size:13px; color:#1B3022; margin-bottom:10px; }
.line { border-bottom:1px dotted #b9b6ae; height:20px; }
footer { margin-top:26px; padding-top:10px; border-top:1px solid #e4e2dd; font-size:9.5px; text-transform:uppercase; letter-spacing:.15em; color:#a8a49b; text-align:center; }
'''

htmldoc=f'<!doctype html><html><head><meta charset="utf-8"><style>{css}</style></head><body>{body}</body></html>'
htmlpath=Path(f"/tmp/klarkreis/{tid}_handout.html"); htmlpath.write_text(htmldoc,encoding='utf-8')
pdfpath=OUTDIR/f"{tid}.pdf"
subprocess.run([CHROME,"--headless","--disable-gpu","--no-pdf-header-footer",
  f"--print-to-pdf={pdfpath}", f"file://{htmlpath}"],capture_output=True,timeout=60)
print(f"✓ {pdfpath}  ({pdfpath.stat().st_size//1024} KB)" if pdfpath.exists() else "✗ PDF nicht erzeugt")
