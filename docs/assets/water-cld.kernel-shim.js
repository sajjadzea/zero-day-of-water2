// Ensures a stable kernel object and a readiness promise without inline scripts.
(function () {
  const g = (typeof window !== 'undefined') ? window : globalThis;
  g.kernel = g.kernel || {};
  function readyContext() {
    try {
      const kg = g.kernel && g.kernel.graph;
      const gs = g.graphStore && g.graphStore.graph;
      const graph = kg || gs;
      const cy = document.querySelector('#cy');
      const cyOk = cy && cy.offsetWidth > 0 && cy.offsetHeight > 0;
      if (graph && Array.isArray(graph.nodes) && cyOk) {
        g.kernel.graph = graph;
        return { kernel: g.kernel, graph, cy };
      }
    } catch (_) {}
    return null;
  }
  if (!g.kernelReady) {
    g.kernelReady = new Promise((resolve, reject) => {
      const start = Date.now();
      let warned = false;
      const iv = setInterval(() => {
        const ctx = readyContext();
        if (ctx) {
          clearInterval(iv); resolve(ctx.kernel);
        } else if (Date.now() - start > 5000) {
          clearInterval(iv);
          const cy = document.querySelector('#cy');
          console.error('[kernel-shim] kernelReady timeout', {
            kernel: !!g.kernel,
            graph: g.kernel?.graph || g.graphStore?.graph,
            cy: cy ? { w: cy.offsetWidth, h: cy.offsetHeight } : null
          });
          reject(new Error('kernelReady timeout'));
        } else if (!warned && Date.now() - start > 1000) {
          warned = true;
          console.warn('[kernel-shim] waiting for kernel/graph/#cy...');
        }
      }, 50);
    });
  }
})();
