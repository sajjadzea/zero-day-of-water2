(function(){
  if (window.__CLD_RT_GUARD__) return; window.__CLD_RT_GUARD__=true;

  // onCyReady: run callback once Cytoscape instance is ready
  if (!window.onCyReady) {
    window.__CLD_READY__ = false;
    window.onCyReady = function(run){
      const tryRun = (cy) => { if (cy && typeof run==='function') { try{ run(cy); }catch(_){}} };
      if (window.cy && typeof window.cy.on==='function') { tryRun(window.cy); return; }
      if (!window.__CLD_READY__){
        window.__CLD_READY__ = true;
        document.addEventListener('cy:ready', (e)=> tryRun((e && e.detail && e.detail.cy) || window.cy), { once:true });
        if (window.whenModelReady) window.whenModelReady(()=> tryRun(window.cy));
        if (document.readyState !== 'loading') setTimeout(()=> tryRun(window.cy), 0);
        else document.addEventListener('DOMContentLoaded', ()=> tryRun(window.cy), { once:true });
      }
    };
  }

  // lightweight debounce (global helper)
  if (!window.__cldDebounce) {
    window.__cldDebounce = function(fn, ms=60){
      let t=0; return function(...a){ clearTimeout(t); t=setTimeout(()=>fn.apply(this,a), ms); };
    };
  }

  // safe fit (if there are no elements, do nothing)
  if (!window.__cldSafeFit) {
    window.__cldSafeFit = function(cy){
      try{
        if (!cy) return;
        const els = cy.elements();
        if (!els || els.length===0) return;
        cy.fit(els, 40);
      }catch(_){}
    };
  }
})();
