;(function () {
  function ready(fn){ if (document.readyState !== 'loading') fn(); else document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    const map = window.__AMA_MAP;
    const G = window.AMA?.G || {};
    if (!map) { console.warn('[AMA-wire] map missing'); return; }

    // init state of checkboxes (unchecked by default)
    document.querySelectorAll('[data-layer-toggle]').forEach(el => {
      const key = el.getAttribute('data-layer-toggle')?.trim();
      if (!key) return;

      // reflect current visibility
      const grp = G[key];
      el.checked = !!(grp && map.hasLayer(grp));

      el.addEventListener('change', () => {
        const grp2 = (window.AMA?.G || {})[key];
        if (!grp2) { console.warn('[AMA-wire] group not found:', key, Object.keys(window.AMA?.G || {})); return; }
        if (el.checked) grp2.addTo(map);
        else map.removeLayer(grp2);
      });
    });
  });
})();
