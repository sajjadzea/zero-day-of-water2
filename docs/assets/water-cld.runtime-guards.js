(function(){
  // گِیت آماده‌سازی Cytoscape (اگر از قبل نبود)
  if (!window.onCyReady) {
    window.__CLD_READY__ = false;
    window.onCyReady = function(run){
      if (window.cy && typeof window.cy.on === 'function') { try { run(window.cy); } catch(_){} return; }
      if (!window.__CLD_READY__) {
        window.__CLD_READY__ = true;
        document.addEventListener('cy:ready', e => { const c = e.detail?.cy || window.cy; if (c) try{ run(c); }catch(_){} }, { once:true });
        if (window.whenModelReady) window.whenModelReady(() => { if (window.cy) try{ run(window.cy); }catch(_){} });
        if (document.readyState !== 'loading') { setTimeout(()=>{ if (window.cy) try{ run(window.cy); }catch(_){} }, 0); }
        else document.addEventListener('DOMContentLoaded', ()=>{ if (window.cy) try{ run(window.cy); }catch(_){} }, { once:true });
      }
    };
  }

  // دی‌بونس عمومی سبک
  if (!window.__cldDebounce) {
    window.__cldDebounce = function(fn, ms=60){ let t=0; return (...a)=>{ clearTimeout(t); t=setTimeout(()=>fn(...a), ms); }; };
  }

  // fit ایمن (اگر صفر المنت بود، کاری نکن)
  if (!window.__cldSafeFit) {
    window.__cldSafeFit = function(cy){ if (!cy || cy.elements().length===0) return; try{ cy.fit(cy.elements(), 40); }catch(_){} };
  }
})();
