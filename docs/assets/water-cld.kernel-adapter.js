(function(){
  if (window.__WATER_KERNEL_ADAPTER__) return; window.__WATER_KERNEL_ADAPTER__ = true;
  'use strict';

  var K = window.waterKernel;

  if (!K){ // fail-safe
    console && console.warn && console.warn('[kernel-adapter] kernel missing');
    return;
  }

  // 1) MODEL_LOADED: از رویدادهای موجود پروژه استفاده کن (model-bridge)
  // هم‌اکنون پروژه شما از `model:updated` استفاده می‌کند.
  var modelSeen = false;
  function handleModelUpdated(e){
    if (modelSeen) return;
    modelSeen = true;
    try{ K.emit('MODEL_LOADED', e && e.detail || {}); }catch(_){ }
  }
  document.addEventListener('model:updated', handleModelUpdated, { once:true });

  // برای سازگاری اگر پروژه «model:loaded» داشته باشد:
  document.addEventListener('model:loaded', handleModelUpdated, { once:true });

  // 2) GRAPH_READY: پس از CY_READY، وقتی اولین المان‌ها وجود داشتند
  K.onReady('cy', function(){
    try{
      var cy = window.cy; // alias/guards already in place
      if (!cy) return;

      function fireWhenReady(){
        try{
          if (cy && cy.elements && cy.elements().length > 0){
            K.emit('GRAPH_READY', { count: cy.elements().length });
            return true;
          }
        }catch(_){ }
        return false;
      }

      if (fireWhenReady()) return;

      // یک‌بار پس از add یا layoutstop
      var done = false;
      function tryEmit(){ if (!done && fireWhenReady()) { done=true; cleanup(); } }
      function cleanup(){
        try{ cy.off('add', tryEmit); }catch(_){ }
        try{ cy.off('layoutstop', tryEmit); }catch(_){ }
      }
      try{ cy.on('add', tryEmit); }catch(_){ }
      try{ cy.on('layoutstop', tryEmit); }catch(_){ }

      // fallback: چند تیک کوتاه
      var ticks = 8;
      (function tick(){
        if (done) return;
        if (tryEmit()) return;
        if (--ticks <= 0) return;
        setTimeout(tick, 50);
      })();
    }catch(_){ }
  });

    // 3) API کمکی برای ماژول‌ها: اجرای امن بر اساس فاز
    // مثال استفاده: waterKernel.queue('graph', () => CLD_SAFE.safeAddClass(cy.$('#x'), 'on'));
  // (در کنار graphStore.run نیز قابل استفاده است)
})();
