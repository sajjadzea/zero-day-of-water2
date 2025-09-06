;(function(){
  const STEP=250, MAX=8000, NEW_SCOPE='#ama-layer-dock';
  const idMap = { wind:'#chk-wind-sites', solar:'#chk-solar-sites', dams:'#chk-dam-sites' };
  const rxMap = { wind:/باد/i, solar:/خورشیدی/i, dams:/سد/i };

  function inNewScope(el){ return !!el && !!el.closest(NEW_SCOPE); }
  function findNewToggles(){
    const root = document.querySelector(NEW_SCOPE);
    if(!root) return [];
    return Array.from(root.querySelectorAll('[data-layer-toggle]'))
      .map(el=>({ el, key:(el.dataset.layerToggle||'').trim().toLowerCase() }))
      .filter(x=>x.key);
  }
  function findLegacyByKey(key){
    // 1) تلاش با ID معروف، ولی خارج از پنل جدید
    const byId = document.querySelector(idMap[key]);
    if (byId && !inNewScope(byId)) return byId;
    // 2) fallback: بر اساس متن لیبل‌ها خارج از پنل جدید
    const rx = rxMap[key]; if(!rx) return null;
    const labels = Array.from(document.querySelectorAll(`label`))
      .filter(l=>!inNewScope(l));
    for (const lbl of labels){
      const txt=(lbl.textContent||'').trim();
      if (!rx.test(txt)) continue;
      const forId = lbl.getAttribute('for');
      const input = forId ? document.getElementById(forId) : lbl.querySelector('input[type="checkbox"]');
      if (input && !inNewScope(input)) return input;
    }
    return null;
  }
  function syncPair(newEl, legacy){
    newEl.checked = !!legacy.checked;
    const onNew = ()=>{ legacy.click(); newEl.checked = legacy.checked; };
    newEl.addEventListener('change', onNew);
    newEl.addEventListener('click',  onNew);
    legacy.addEventListener('change', ()=>{ newEl.checked = legacy.checked; });
  }
  function tryBind(){
    const toggles = findNewToggles();
    if (!toggles.length) return 'no-new';
    let bound=0;
    toggles.forEach(({el,key})=>{
      if (el.__bridged) return;
      const legacy = findLegacyByKey(key);
      if (!legacy){ console.warn('[AMA-bridge] legacy control not found for', key); return; }
      syncPair(el, legacy);
      el.__bridged = true;
      bound++;
    });
    if (bound>0) console.info('[AMA-bridge] bridged:', bound);
    return bound>0 ? 'ok' : 'pending';
  }
  (function wait(t0=performance.now()){
    const res = tryBind();
    if (res==='ok') return;
    if (performance.now()-t0 > MAX) { console.warn('[AMA-bridge] timeout:', res); return; }
    setTimeout(()=>wait(t0), STEP);
  })();
})();
