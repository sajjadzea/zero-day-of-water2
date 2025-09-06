;(function(){
  // ساده: هر 300ms تا 10s صبر می‌کنیم تا map و G آماده شوند، بعد گزارش را چاپ می‌کنیم
  const MAX_MS = 10000, STEP = 300;
  function collect() {
    const map = window.__AMA_MAP || (window.AMA && window.AMA.map) || null;
    const G = (window.AMA && window.AMA.G) || {};
    const keys = Object.keys(G||{});
    const toggles = Array.from(document.querySelectorAll('[data-layer-toggle]'));
    // وضعیت هر لایه
    const groups = keys.map(k=>{
      const grp = G[k]; let size = 0;
      if (grp && typeof grp.getLayers==='function') { try{ size = grp.getLayers().length } catch(e){ size = -1 } }
      const on = map && grp ? map.hasLayer(grp) : false;
      return { key:k, layers:size, visible:on };
    });
    // وضعیت هر دکمه
    const ui = toggles.map(el=>{
      const key = (el.getAttribute('data-layer-toggle')||'').trim();
      const hasListener = getEventListeners ? Object.keys(getEventListeners(el)||{}).length>0 : undefined;
      const wired = !!(G[key]);
      return { el: el.tagName.toLowerCase()+'#'+(el.id||''), key, wired, checked: !!el.checked, hasListener };
    });
    return { mapReady: !!map, gKeys: keys, groups, ui };
  }
  function logReport(tag, data){
    const header = `[AMA-DIAG] ${tag}`;
    try { console.groupCollapsed(header); } catch {}
    console.log('mapReady:', data.mapReady);
    console.log('G keys:', data.gKeys);
    console.table(data.groups);
    console.table(data.ui);
    console.log('help:', 'Call window.__amaDiag() anytime to re-run diagnostics.');
    try { console.groupEnd(); } catch {}
  }
  function runDiag(){ const d = collect(); logReport('panel wiring status', d); return d; }
  window.__amaDiag = runDiag;

  // منتظر آماده شدن map/G می‌مانیم سپس گزارش می‌گیریم
  const t0 = Date.now();
  (function loop(){
    const d = collect();
    if (d.mapReady && d.gKeys.length) { logReport('ready', d); return; }
    if (Date.now()-t0 > MAX_MS) { logReport('timeout', d); return; }
    setTimeout(loop, STEP);
  })();

  // شورتکات UI: با Ctrl+Alt+D گزارش را دوباره چاپ کن
  document.addEventListener('keydown', (e)=>{ if ((e.ctrlKey||e.metaKey)&&e.altKey && e.key.toLowerCase()==='d') window.__amaDiag(); });
})();
