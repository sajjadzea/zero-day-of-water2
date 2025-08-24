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

  window.waterKernel.onReady('graph', () => {
    const cy = window.__cy;
    if (!cy || !cy.nodes || cy.nodes().length === 0) return;
    const el = document.getElementById('cy');
    if (el && 'ResizeObserver' in window){
      const ro = new ResizeObserver(() => safeLayout(cy));
      ro.observe(el);
    }
    console.log('[kernel-adapter] cy ready, running layout');
    safeLayout(cy);
  });
})();

