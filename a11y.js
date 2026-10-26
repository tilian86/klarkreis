// a11y.js
// Material Symbols arbeiten mit Wörtern als Ligaturen („arrow_forward"). Screenreader
// lesen diese Wörter sonst mit vor. Darum:
//   - Icon mit title  → role="img" + aria-label (z. B. Format-Symbole auf den Karten)
//   - sonst           → aria-hidden="true"
//   - reiner Icon-Knopf ohne Namen, aber mit title → aria-label aus dem title
// Läuft auch für später eingefügte Inhalte (Themenkarten, Abend-Stationen, Modals).
(function () {
  const SEL = '.material-symbols-outlined:not([data-a11y])';

  function label(el) {
    el.setAttribute('data-a11y', '');
    const t = el.getAttribute('title');
    if (t) {
      el.setAttribute('role', 'img');
      el.setAttribute('aria-label', t);
      return;
    }
    const ctl = el.closest('button, a, summary');
    if (ctl && !ctl.hasAttribute('aria-label')) {
      const clone = ctl.cloneNode(true);
      clone.querySelectorAll('.material-symbols-outlined').forEach(x => x.remove());
      if (!clone.textContent.trim()) {
        const name = ctl.getAttribute('title');
        if (!name) return;          // kein Name vorhanden: Ligatur lieber hörbar lassen
        ctl.setAttribute('aria-label', name);
      }
    }
    el.setAttribute('aria-hidden', 'true');
  }

  function scan(root) {
    if (root.matches && root.matches(SEL)) label(root);
    if (root.querySelectorAll) root.querySelectorAll(SEL).forEach(label);
  }

  let queued = false;
  const pending = new Set();
  function flush() {
    queued = false;
    pending.forEach(scan);
    pending.clear();
  }

  function start() {
    scan(document.body);
    new MutationObserver(list => {
      list.forEach(m => m.addedNodes.forEach(n => { if (n.nodeType === 1) pending.add(n); }));
      if (pending.size && !queued) { queued = true; requestAnimationFrame(flush); }
    }).observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
