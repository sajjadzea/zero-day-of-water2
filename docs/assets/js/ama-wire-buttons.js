;(function () {
  const STEP = 250, MAX_MS = 10000;
  function norm(s){ return String(s||'').toLowerCase().replace(/[_\-\s]/g,''); }
  function resolve(G, rawKey){
    if (!rawKey || !G) return null;
    if (G[rawKey]) return G[rawKey];
    const want = norm(rawKey);
    for (const k of Object.keys(G)) if (norm(k)===want) return G[k];
    const syn = { wind:['wind','باد'], solar:['solar','خورشیدی'], dams:['dams','سد'], counties:['counties','شهرستان'], province:['province','استان'] };
    for (const k in syn){ if (syn[k].some(x=>norm(x)===want)) return G[k] || G[k+'_sites'] || null; }
    return null;
  }
  function setUi(el, on){
    if (el.matches('input[type="checkbox"]')) el.checked = !!on;
    el.classList.toggle('muted', !on);
    if (el.hasAttribute('aria-pressed')) el.setAttribute('aria-pressed', on?'true':'false');
  }
  function wireAll(){
    const map = window.__AMA_MAP || (window.AMA && window.AMA.map) || null;
    const G = (window.AMA && window.AMA.G) || {};
    if (!map) return 'map-missing';
    const nodes = Array.from(document.querySelectorAll('[data-layer-toggle]'));
    if (!nodes.length) return 'no-toggles';
    nodes.forEach(el=>{
      const key = (el.getAttribute('data-layer-toggle')||'').trim();
      const grp = resolve(G, key);
      if (!grp) { console.warn('[AMA-wire] group not found for key:', key, 'available:', Object.keys(G)); return; }
      // وضعیت اولیه
      if (!map.hasLayer(grp)) grp.addTo(map); // یا اگر باید خاموش شروع شود، این خط را بردار
      setUi(el, map.hasLayer(grp));
      // لیسنرها
      const handler = ()=>{ const on = map.hasLayer(grp); on ? map.removeLayer(grp) : map.addLayer(grp); setUi(el, map.hasLayer(grp)); };
      el.addEventListener('change', handler);
      el.addEventListener('click', handler);
    });
    console.info('[AMA-wire] wired:', nodes.length);
    return 'wired';
  }
  // لوپ انتظار
  (function wait(){
    const t0 = performance.now();
    const res = wireAll();
    if (res==='wired') return;
    if (performance.now() - t0 > MAX_MS) { console.warn('[AMA-wire] timeout:', res); return; }
    setTimeout(wait, STEP);
  })();
})();
