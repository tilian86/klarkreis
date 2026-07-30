/* KlarKreis — Zugang zu bezahlten Abenden.
 *
 * Die Stationen bezahlter Abende liegen NICHT in themes.js, sondern in der
 * Supabase-Tabelle paid_content. Row-Level-Security gibt sie nur heraus, wenn
 * für den eingeloggten Account eine gültige Berechtigung existiert. Es gibt
 * daher kein Passwort und keinen Freischalt-Parameter mehr, den man erraten
 * könnte — die Prüfung passiert auf dem Server.
 *
 * Nutzung:
 *   const res = await KlarKreisPaid.ensure(themeId, theme);
 *   res.ok      → theme.formats enthält jetzt die Stationen
 *   res.reason  → 'login'  (nicht eingeloggt)
 *                 'buy'    (eingeloggt, aber nicht gekauft)
 *                 'error'  (Netz/Server)
 */
(function () {
  const PRODUCT_LABEL = {
    werte_reise: 'Werte-Reise',
    wir_reise:   'Wir-Reise',
    frei_reise:  'Frei-Reise',
    date:        'Erstes Date',
  };

  const Paid = {
    // Ist dieser Abend kostenpflichtig? Quelle ist das paid-Flag aus themes.js.
    productOf(themeId) {
      const t = (window.THEMES || {})[themeId];
      return (t && t.paid) || null;
    },
    label(product) { return PRODUCT_LABEL[product] || product; },

    async ensure(themeId, theme) {
      const product = (theme && theme.paid) || this.productOf(themeId);
      if (!product) return { ok: true };

      const auth = window.KLARKREIS_AUTH;
      if (!auth || !auth.enabled) return { ok: false, reason: 'login', product };

      try {
        await auth._ensure();      // lädt das SDK bei Bedarf nachträglich
        await auth.ready;
      } catch (e) {
        return { ok: false, reason: 'error', product };
      }
      if (!auth.user()) return { ok: false, reason: 'login', product };

      let formats = null;
      try {
        formats = await auth.loadPaidFormats(themeId);
      } catch (e) {
        return { ok: false, reason: 'error', product };
      }
      if (!formats) return { ok: false, reason: 'buy', product };

      // Serverinhalt in das öffentliche Metadaten-Gerüst einsetzen
      Object.keys(formats).forEach(f => {
        theme.formats[f] = Object.assign({}, theme.formats[f], formats[f]);
      });
      return { ok: true, product };
    },

    // Dezenter Lizenz-Hinweis mit der Käufer-Adresse. Wirkt gegen Weitergabe,
    // ohne die Nutzung im eigenen Kreis (genau dafür ist das Produkt ja) zu behindern.
    watermark() {
      const auth = window.KLARKREIS_AUTH;
      const u = auth && auth.user && auth.user();
      const mail = u && u.email;
      if (!mail) return '';
      return 'Lizenz für ' + mail + ' — für den eigenen Kreis. Bitte nicht weitergeben.';
    },
  };

  window.KlarKreisPaid = Paid;
})();
