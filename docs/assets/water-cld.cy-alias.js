(function(){
  if (window.__CY_ALIAS__) return; window.__CY_ALIAS__ = true;

  function define(){
    try{
      Object.defineProperty(window, 'c', {
        configurable: true,
        get: function(){ return window.cy; },
        // به‌جای set روی window.cy (که قبلاً باعث TypeError می‌شد)،
        // فقط نمونه را در متغیرهای داخلی نگه می‌داریم و سیگنال cy:ready می‌فرستیم.
        set: function(v){
          try{
            window.__cy = v;
            window.lastCy = v;
            document.dispatchEvent(new CustomEvent('cy:ready', { detail:{ cy: v } }));
          }catch(_){}}
      });
    }catch(_){ window.c = window.cy; }
  }

  define();
  document.addEventListener('cy:ready', define);

  // microtask/tick: اگر cy آماده است، رویداد را یک‌بار دیگر پخش کن
  setTimeout(function(){
    try{
      if (window.cy && typeof window.cy.add === 'function') {
        document.dispatchEvent(new CustomEvent('cy:ready', { detail:{ cy: window.cy } }));
      }
    }catch(_){}
  }, 0);
})();
