(function(){
  if (!window.waterKernel) return;

  // run layout safely (debounced)
  function safeLayout(cy){
    if (!cy) return;
    if (safeLayout._running) return;
    safeLayout._running = true;
    requestAnimationFrame(() => {
      try {
        const el = cy.container && cy.container();
        if (el && el.offsetWidth > 0 && el.offsetHeight > 0){
          cy.resize();
          cy.fit();
          cy.layout({
            name: 'dagre',
            nodeSep: 40,
            edgeSep: 20,
            rankSep: 60,
            animate: false
          }).run();
        }
      } catch(e){
        console.warn('[kernel-adapter] layout error', e);
      } finally {
        safeLayout._running = false;
      }
    });
  }

  // when CY_READY -> initial layout
  window.waterKernel.onceReady('cy', (cy) => {
    console.log('[kernel-adapter] cy ready, running initial layout');
    safeLayout(cy);

    // if container resizes -> layout again
    const el = document.getElementById('cy');
    if (el && 'ResizeObserver' in window){
      const ro = new ResizeObserver(() => safeLayout(cy));
      ro.observe(el);
    }

    // later when graph complete -> layout again
    window.waterKernel.onceReady('graph', (graph) => {
      if (!graph?.nodes?.length) {
        console.warn('[kernel-adapter] empty graph, injecting dummy node');
        graph.nodes.push({ data: { id: 'dummy' } });
      }
      console.log('[kernel-adapter] graph ready, re-run layout');
      safeLayout(cy);
    });
  });
})();

