(function(){
  if (window.__CY_ALIAS__) return; window.__CY_ALIAS__ = true;

  function define(){
    try{
      Object.defineProperty(window, 'c', {
        configurable: true,
        get: function(){ return window.cy; },
        set: function(v){ try{ window.cy = v; }catch(_){ } }
      });
    }catch(_){ window.c = window.cy; }
  }

  define();
  // اگر cy بعداً آماده شد دوباره alias را مطمئن کن
  document.addEventListener('cy:ready', define);

  // یک microtask/tick برای فلش کردن صف‌های آماده
  setTimeout(function(){
    try{
      if (window.cy && typeof window.cy.add === 'function'){
        document.dispatchEvent(new CustomEvent('cy:ready', { detail:{ cy: window.cy } }));
      }
    }catch(_){ }
  }, 0);
})();
