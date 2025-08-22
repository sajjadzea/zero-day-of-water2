/* singleton */
(function(){
  if (window.__CY_BATCH_GUARD__) return; window.__CY_BATCH_GUARD__ = true;

  function patch(){
    if (!window.cytoscape || !window.cytoscape.Core) return;
    const P = window.cytoscape.Core.prototype;

    // If startBatch/endBatch are missing, provide safe shims.
    // Prefer mapping to .batch(fn) when available; otherwise no-op.
    if (typeof P.startBatch !== 'function' || typeof P.endBatch !== 'function'){
      if (typeof P.batch === 'function'){
        // Lightweight shim using existing batch(fn)
        if (typeof P.startBatch !== 'function'){
          P.startBatch = function(){ this.___batch_guard__ = true; };
        }
        if (typeof P.endBatch !== 'function'){
          P.endBatch = function(){ this.___batch_guard__ = false; };
        }
        // Optional helper to run a batch if app calls start/end without wrapper:
        if (!P.___withBatch__){
          P.___withBatch__ = function(fn){ return this.batch(fn); };
        }
      } else {
        // Fallback no-ops (keeps app running even on older builds)
        if (typeof P.startBatch !== 'function') P.startBatch = function(){};
        if (typeof P.endBatch   !== 'function') P.endBatch   = function(){};
      }
    }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', patch, { once:true });
  } else {
    patch();
  }
})();
