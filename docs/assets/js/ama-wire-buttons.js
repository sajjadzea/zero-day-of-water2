(function () {
  function once(el, key) { const k = `__wired_${key}`; if (el[k]) return false; el[k] = true; return true; }
  function ready(fn){ if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',fn); else fn(); }
  function findMapAndGroups(){ const map = window.__AMA_MAP || (window.AMA && window.AMA.map) || null;
    const G = (window.AMA && window.AMA.G) || {}; return { map, G }; }
  function norm(s){ return String(s||'').toLowerCase().replace(/[_\-\s]/g,''); }
  function resolveGroup(G, raw){
    if (!raw) return null;
    if (G[raw]) return G[raw];
    const want = norm(raw);
    for (const k of Object.keys(G)) if (norm(k)===want) return G[k];
    const syn = { wind:['wind','windsites','wind_sites','sitebadi','باد'],
                  solar:['solar','solarsites','solar_sites','sitekhorshidi','خورشیدی'],
                  dams:['dams','dam','reservoir','سد','سدها'],
                  counties:['counties','county','shahrestan','شهرستان'],
                  province:['province','ostan','استان'] };
    for (const k in syn) {
      if (syn[k].some(x=>norm(x)===want)) {
        const cands=[k,`${k}_sites`,k.replace('sites',''),k.replace('_','')];
        for (const g of Object.keys(G)) if (cands.some(x=>norm(x)===norm(g))) return G[g];
      }
    }
    return null;
  }
  function setUiState(el, on){
    if (el.matches('input[type="checkbox"]')) el.checked = !!on;
    el.classList.toggle('muted', !on);
    if (el.hasAttribute('aria-pressed')) el.setAttribute('aria-pressed', on?'true':'false');
  }
  function wire(el, key, map, G){
    const grp = resolveGroup(G, key); if (!grp) return;
    if (!once(el,'listener')) return;
    if (!map.hasLayer(grp)) map.addLayer(grp); // حالت اولیه روشن
    setUiState(el, map.hasLayer(grp));
    const handler = () => { const on = map.hasLayer(grp); on ? map.removeLayer(grp) : map.addLayer(grp); setUiState(el, map.hasLayer(grp)); };
    el.addEventListener('change', handler);
    el.addEventListener('click',  handler);
  }
  function autolabel(root){
    const map = [
      { rx:/باد/i, key:'wind' }, { rx:/خورشیدی/i, key:'solar' },
      { rx:/سد/i, key:'dams' },   { rx:/شهرستان/i, key:'counties' },
      { rx:/استان/i, key:'province' },
    ];
    root.querySelectorAll('label').forEach(lbl=>{
      const txt=(lbl.textContent||'').trim();
      const hit=map.find(m=>m.rx.test(txt)); if(!hit) return;
      const forId = lbl.getAttribute('for');
      const input = forId ? root.querySelector(`#${CSS.escape(forId)}`) : lbl.querySelector('input[type="checkbox"]');
      const target = input || lbl;
      if (target && !target.dataset.layerToggle) target.dataset.layerToggle = hit.key;
    });
  }
  function scan(){
    const { map, G } = findMapAndGroups(); if(!map || !G || typeof map.hasLayer!=='function') return false;
    // اگر پنل جدید data-attr نداشت، از روی لیبل‌ها نشانه‌گذاری کن
    document.querySelectorAll('.card, .panel, aside, .control, .controls').forEach(autolabel);
    // المان‌های نشانه‌گذاری‌شده را وایر کن
    document.querySelectorAll('[data-layer-toggle]').forEach(el => wire(el, el.dataset.layerToggle, map, G));
    return true;
  }
  ready(function loop(){ if(!scan()) setTimeout(loop,250); });
})();
