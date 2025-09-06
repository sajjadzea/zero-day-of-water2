(function () {
  function once(el, key) {
    const k = `__wired_${key}`; if (el[k]) return false; el[k] = true; return true;
  }
  function ready(fn) {
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn);
    else fn();
  }
  function findMapAndGroups() {
    const map = window.__AMA_MAP || (window.AMA && window.AMA.map) || null;
    const G   = (window.AMA && window.AMA.G) || {};
    return { map, G };
  }
  function normalizeKey(k) { return String(k || '').toLowerCase().replace(/[_\-\s]/g, ''); }

  function resolveGroup(G, rawKey) {
    const want = normalizeKey(rawKey);
    if (G[rawKey]) return G[rawKey];
    // exact key-insensitive
    for (const k of Object.keys(G)) if (normalizeKey(k) === want) return G[k];
    // synonyms
    const synonyms = {
      wind: ['wind', 'windsites', 'wind_sites', 'sitebadi', 'باد'],
      solar: ['solar', 'solarsites', 'solar_sites', 'sitekhorshidi', 'خورشیدی'],
      dams: ['dams', 'dam', 'reservoir', 'سد', 'سدها'],
      counties: ['counties', 'county', 'shahrestan', 'شهرستان'],
      province: ['province', 'ostan', 'استان'],
    };
    for (const k of Object.keys(synonyms)) {
      if (synonyms[k].some(s => normalizeKey(s) === want)) {
        // find best actual key inside G for this bucket
        const candidates = [k, `${k}_sites`, k.replace('sites',''), k.replace('_','')];
        for (const c of Object.keys(G)) {
          const cn = normalizeKey(c);
          if (candidates.some(x => normalizeKey(x) === cn)) return G[c];
        }
      }
    }
    return null;
  }

  function setUiState(el, on) {
    if (el.matches('input[type="checkbox"]')) el.checked = !!on;
    el.classList.toggle('muted', !on);
    if (el.hasAttribute('aria-pressed')) el.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function wireElement(el, key, map, G) {
    const grp = resolveGroup(G, key); if (!grp) return;
    if (!once(el, 'listener')) return;
    // حالت اولیه: اگر لایه روی نقشه نیست، روشنش کن تا UX آغازین هماهنگ باشد
    if (!map.hasLayer(grp)) map.addLayer(grp);
    setUiState(el, map.hasLayer(grp));
    el.addEventListener('click', () => {
      const on = map.hasLayer(grp);
      if (on) map.removeLayer(grp); else map.addLayer(grp);
      setUiState(el, map.hasLayer(grp));
    });
  }

  function autowireByLabels(root) {
    // اگر data-layer-toggle ست نشده بود، بر اساس متن لیبل‌ها وصل می‌کنیم
    const labelMap = [
      { test: /باد/i, key: 'wind' },
      { test: /خورشیدی/i, key: 'solar' },
      { test: /سد/i, key: 'dams' },
      { test: /شهرستان/i, key: 'counties' },
      { test: /استان/i, key: 'province' },
    ];
    // label + input[type=checkbox]
    root.querySelectorAll('label').forEach(lbl => {
      const txt = (lbl.textContent || '').trim();
      const hit = labelMap.find(m => m.test.test(txt));
      if (!hit) return;
      // پیدا کردن input مربوط به این label
      const forId = lbl.getAttribute('for');
      const input = forId ? root.querySelector(`#${CSS.escape(forId)}`) :
                    lbl.querySelector('input[type="checkbox"]');
      const target = input || lbl;
      if (target && !target.dataset.layerToggle) target.dataset.layerToggle = hit.key;
    });
  }

  function scanAndWire() {
    const { map, G } = findMapAndGroups();
    if (!map || !G) return false;
    // 1) المنت‌هایی که صراحتاً data-layer-toggle دارند
    document.querySelectorAll('[data-layer-toggle]').forEach(el => {
      const key = el.dataset.layerToggle;
      wireElement(el, key, map, G);
    });
    // 2) اگر پنل جدید data-attr ندارد، از روی متن لیبل‌ها وصل کن (فقط داخل کارت/پنل‌های کنترل)
    document.querySelectorAll('.card, .panel, aside, .control, .controls').forEach(container => {
      autowireByLabels(container);
    });
    // 3) یک بار دیگر المنت‌های تازه‌نشانه‌گذاری‌شده را وایر کن
    document.querySelectorAll('[data-layer-toggle]').forEach(el => {
      const key = el.dataset.layerToggle;
      wireElement(el, key, map, G);
    });
    return true;
  }

  ready(function loop() {
    if (!scanAndWire()) return setTimeout(loop, 250);
  });
})();
