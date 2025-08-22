/* singleton */
(function(){
  if (window.__CHART_GUARD__) return; window.__CHART_GUARD__ = true;

  function safeDestroy(idOrCtx){
    try{
      if (!window.Chart) return;
      // Chart v3/v4 compatibility
      const inst = Chart.getChart(idOrCtx) ||
        (Chart.instances && Object.values(Chart.instances)
          .find(ch => ch && ch.canvas && (ch.canvas.id === idOrCtx)));
      if (inst && typeof inst.destroy === 'function') inst.destroy();
    }catch(e){}
  }

  function dedupeCanvas(id){
    try{
      const nodes = document.querySelectorAll('#'+CSS.escape(id));
      if (nodes.length > 1){
        // keep the first, remove extras to avoid double-locks
        for (let i=1;i<nodes.length;i++) nodes[i].parentNode?.removeChild(nodes[i]);
      }
    }catch(e){}
  }

  // Public helper if needed elsewhere
  window.__ensureSimChart = function(cfgOrOptions){
    const id = (cfgOrOptions && cfgOrOptions.canvasId) || 'sim-chart';
    const cv = document.getElementById(id);
    if (!cv) return null;

    dedupeCanvas(id);
    safeDestroy(id);

    const ctx = cv.getContext('2d');
    safeDestroy(ctx);

    const options = cfgOrOptions?.options || cfgOrOptions;
    return new Chart(ctx, options);
  };

  // If app has a global initSimChart, wrap it to guarantee destroy-before-create
  const patchInit = function(){
    if (typeof window.initSimChart === 'function' && !window.__CHART_INIT_PATCHED__){
      const orig = window.initSimChart;
      window.initSimChart = function(...args){
        safeDestroy('sim-chart');
        // also destroy by context if any
        const cv = document.getElementById('sim-chart');
        if (cv) safeDestroy(cv.getContext('2d'));
        return orig.apply(this, args);
      };
      window.__CHART_INIT_PATCHED__ = true;
    }
  };

  // Run now and also after scripts signal readiness
  patchInit();
  document.addEventListener('model:updated', patchInit, { once:true });

  // Prevent repeated re-inits from multiple listeners
  if (!window.__SIM_CHART_LISTENER__){
    window.__SIM_CHART_LISTENER__ = true;
    document.addEventListener('model:updated', () => {
      const cv = document.getElementById('sim-chart');
      if (cv) cv.dataset.modelUpdated = '1';
    }, { once:true });
  }
})();
