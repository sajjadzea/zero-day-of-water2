(function(){
  if (!window.waterKernel) return;

  let graphReady = false;
  function safeLayout(cy){
    cy = cy || window.__cy || window.cy;
    if (!cy || !graphReady || cy.nodes().length === 0) return;
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
    if (el && 'ResizeObserver' in window){
      const ro = new ResizeObserver(() => safeLayout(cy));
      ro.observe(el);
    }
    window.waterKernel.onReady('GRAPH_READY', () => { graphReady = true; safeLayout(cy); });
  });
})();

