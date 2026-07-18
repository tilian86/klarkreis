// ============================================================
// KlarKreis Dunkelmodus-Toggle — site-weit.
// Gleicher Speicher-Key wie der Abendmodus in abend.html
// ('klarkreis:abendmodus'), damit Website und Abend-Flow
// synchron bleiben. Wird als synchrones Script im <head>
// geladen, damit die Seite nicht hell aufblitzt.
// ============================================================
(function () {
  const KEY = 'klarkreis:abendmodus';

  function wantsDark() {
    const saved = localStorage.getItem(KEY);
    if (saved !== null) return saved === '1';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  if (wantsDark()) document.documentElement.classList.add('dark');

  function isDark() { return document.documentElement.classList.contains('dark'); }

  function updateMeta() {
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', isDark() ? '#15160f' : '#FBF9F4');
  }

  function iconName() { return isDark() ? 'light_mode' : 'dark_mode'; }

  function toggle() {
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(KEY, dark ? '1' : '0');
    updateMeta();
    document.querySelectorAll('.kk-theme-toggle .material-symbols-outlined')
      .forEach(el => { el.textContent = iconName(); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    updateMeta();

    // Desktop: Button ans Ende der Header-Navigation.
    // Die Landing nutzt <nav> statt <header>, daher beide Varianten.
    const nav = document.querySelector('header .lg\\:flex, nav .lg\\:flex');
    if (nav) {
      const btn = document.createElement('button');
      btn.className = 'kk-theme-toggle inline-flex items-center text-[#1B1C19]/60 hover:text-secondary transition-colors duration-300';
      btn.title = 'Dunkelmodus umschalten'; btn.setAttribute('aria-label','Dunkelmodus umschalten');
      btn.innerHTML = '<span class="material-symbols-outlined text-[18px]">' + iconName() + '</span>';
      btn.addEventListener('click', toggle);
      nav.appendChild(btn);
    }

    // Mobil: dezenter schwebender Button unten rechts
    const fab = document.createElement('button');
    fab.className = 'kk-theme-toggle lg:hidden fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-surface-container shadow-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant';
    fab.title = 'Dunkelmodus umschalten';
    fab.innerHTML = '<span class="material-symbols-outlined text-[20px]">' + iconName() + '</span>';
    fab.addEventListener('click', toggle);
    document.body.appendChild(fab);
  });
})();
