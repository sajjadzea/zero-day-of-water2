/* singleton */
(function(){
  if (window.__CY_BATCH_GUARD__) return; window.__CY_BATCH_GUARD__ = true;

  function patch(){
    if (!window.cytoscape || !window.cytoscape.Core) return;
    const P = window.cytoscape.Core.prototype;

    // Provide startBatch/endBatch if missing; prefer .batch(fn)
    if (typeof P.startBatch !== 'function' || typeof P.endBatch !== 'function'){
      if (typeof P.batch === 'function'){
        if (typeof P.startBatch !== 'function'){ P.startBatch = function(){ this.___batched = true; }; }
        if (typeof P.endBatch   !== 'function'){ P.endBatch   = function(){ this.___batched = false; }; }
      } else {
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
