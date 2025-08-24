(function(){
  if (!window.waterKernel) return;

  function safeLayout(cy){
    if (!cy) return;
    if (safeLayout._inflight) return;
    safeLayout._inflight = true;
    requestAnimationFrame(() => {
      try {
        cy.resize();
        cy.fit();
        cy.layout({ name:'dagre', nodeSep:40, edgeSep:20, rankSep:60, animate:false }).run();
      } finally {
        safeLayout._inflight = false;
      }
    });
  }

  window.waterKernel.onceReady('cy', (cy) => {
    const el = document.getElementById('cy');
    let ro;
    window.waterKernel.onReady('GRAPH_READY', () => {
      if (el && 'ResizeObserver' in window && !ro){
        ro = new ResizeObserver(() => safeLayout(cy));
        ro.observe(el);
      }
      console.log('[kernel-adapter] cy ready, running layout');
      safeLayout(cy);
    });
  });
})();

