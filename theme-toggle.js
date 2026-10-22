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

    // Mobil: Knopf in der Kopfleiste, direkt neben dem Burger. (Ein schwebender
    // Knopf unten rechts verdeckte beim Lesen Text, z.B. die Zeile
    // "Zu zweit · 2 Personen (Paar oder Freundschaft)" auf der Kursseite.)
    if (nav && nav.parentElement) {
      const parent = nav.parentElement;
      if (!document.getElementById('kk-theme-toggle-css')) {
        const st = document.createElement('style');
        st.id = 'kk-theme-toggle-css';
        // Ab 880 px zeigt die volle Leiste den eigenen Knopf (siehe mobile-nav.js).
        st.textContent = '.kk-theme-toggle-m{margin-left:auto;margin-right:.15rem;width:2.5rem;height:2.5rem;'
          + 'display:inline-flex;align-items:center;justify-content:center;border-radius:6px;flex:none}'
          + '@media (min-width:880px){.kk-theme-toggle-m{display:none !important}}';
        document.head.appendChild(st);
      }
      const mbtn = document.createElement('button');
      mbtn.className = 'kk-theme-toggle kk-theme-toggle-m text-[#1B1C19]/60 hover:text-secondary transition-colors duration-300';
      mbtn.title = 'Dunkelmodus umschalten'; mbtn.setAttribute('aria-label','Dunkelmodus umschalten');
      mbtn.innerHTML = '<span class="material-symbols-outlined text-[22px]">' + iconName() + '</span>';
      mbtn.addEventListener('click', toggle);
      // Der Burger wird von mobile-nav.js ans Ende der Leiste gehängt — davor einsortieren.
      const burger = parent.querySelector('.kk-burger');
      if (burger) parent.insertBefore(mbtn, burger); else parent.appendChild(mbtn);
      return;
    }

    // Fallback (Seiten ohne Kopfleiste): dezenter schwebender Button unten rechts
    const fab = document.createElement('button');
    fab.className = 'kk-theme-toggle lg:hidden fixed bottom-5 right-5 z-40 w-11 h-11 rounded-full bg-surface-container shadow-lg border border-outline-variant/30 flex items-center justify-center text-on-surface-variant';
    fab.title = 'Dunkelmodus umschalten';
    fab.innerHTML = '<span class="material-symbols-outlined text-[20px]">' + iconName() + '</span>';
    fab.addEventListener('click', toggle);
    document.body.appendChild(fab);
  });
})();
