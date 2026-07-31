#!/usr/bin/env python3
"""
Baut den lokalen Zwischenspeicher der ausgelagerten Bezahlinhalte.

Seit protect_paid.py stehen in themes.js bei allen Bezahlabenden nur noch
`stations: null` — der Inhalt liegt in Supabase. Die Vertonungs-Skripte lesen
aber aus themes.js und finden deshalb nichts mehr.

Dieses Skript holt die Stationen aus der Git-Historie zurueck (aus dem letzten
Commit, in dem sie noch vollstaendig drinstanden) und legt sie unter
_scripts/paid_cache/<theme_id>.json ab. `_scripts/` ist von Git ausgeschlossen,
die Inhalte landen also nicht im oeffentlichen Repo.

    python3 _scripts/paid_cache_rebuild.py

Nach jedem neuen Bezahlabend erneut ausfuehren (oder protect_paid.py schreibt
den Cache gleich mit — siehe dort).
"""
import json, os, subprocess, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = ROOT / "_scripts" / "paid_cache"
NODE = os.path.expanduser("~/.local/node/bin")
MAX_COMMITS = 40


def node_json(js):
    env = dict(os.environ)
    env["PATH"] = NODE + ":" + env.get("PATH", "")
    r = subprocess.run(["node", "-e", js], capture_output=True, text=True,
                       env=env, timeout=60, cwd=str(ROOT))
    if r.returncode != 0 or not r.stdout.strip():
        return None
    try:
        return json.loads(r.stdout)
    except json.JSONDecodeError:
        return None


def themes_from_source(path_expr):
    """Laedt eine themes.js-Fassung und liefert {id: formats} fuer alles mit Stationen."""
    js = """
    var fs=require('fs'), vm=require('vm');
    var src=fs.readFileSync(%s,'utf8');
    var ctx={window:{},console:console,module:{},require:require};
    vm.createContext(ctx);
    try{ vm.runInContext(src,ctx,{timeout:20000}); }catch(e){ process.exit(1); }
    var T=ctx.window.THEMES||{}, out={};
    for (var id of Object.keys(T)){
      var f=T[id].formats||{}, keep={};
      for (var fk of Object.keys(f)){
        if (f[fk] && f[fk].stations && f[fk].stations.length) keep[fk]=f[fk];
      }
      if (Object.keys(keep).length) out[id]=keep;
    }
    process.stdout.write(JSON.stringify(out));
    """ % path_expr
    return node_json(js) or {}


def protected_ids():
    js = """
    global.window={};require('./themes.js');var T=global.window.THEMES,out=[];
    for (var id of Object.keys(T)){var f=T[id].formats||{};
      if (Object.keys(f).some(k=>!f[k]||f[k].stations===null)) out.push(id);}
    process.stdout.write(JSON.stringify(out));
    """
    return node_json(js) or []


def main():
    CACHE.mkdir(parents=True, exist_ok=True)
    need = set(protected_ids())
    have = {p.stem for p in CACHE.glob("*.json")}
    todo = sorted(need - have)
    print(f"{len(need)} ausgelagerte Abende, {len(have)} bereits im Cache, {len(todo)} zu holen")
    if not todo:
        return

    commits = subprocess.run(
        ["git", "rev-list", f"-{MAX_COMMITS}", "HEAD", "--", "themes.js"],
        capture_output=True, text=True, cwd=str(ROOT)).stdout.split()

    written = 0
    tmp = ROOT / "_scripts" / ".themes_probe.js"
    for c in commits:
        if not todo:
            break
        blob = subprocess.run(["git", "show", f"{c}:themes.js"],
                              capture_output=True, text=True, cwd=str(ROOT)).stdout
        if not blob:
            continue
        tmp.write_text(blob, encoding="utf-8")
        found = themes_from_source(f"'{tmp}'")
        hits = [i for i in todo if i in found]
        for i in hits:
            (CACHE / f"{i}.json").write_text(
                json.dumps(found[i], ensure_ascii=False), encoding="utf-8")
            written += 1
            todo.remove(i)
        if hits:
            print(f"  {c[:8]}: {len(hits)} geholt ({', '.join(hits)})")
    tmp.unlink(missing_ok=True)

    print(f"\n{written} in den Cache geschrieben.")
    if todo:
        print("  NICHT gefunden (nie unentkernt committet):", ", ".join(todo))
        print("  Diese muessen aus Supabase oder der Quelle nachgelegt werden.")


if __name__ == "__main__":
    main()
