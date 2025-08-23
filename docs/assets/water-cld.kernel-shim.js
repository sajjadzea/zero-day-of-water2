// Ensures a stable kernel object and a readiness promise without inline scripts.
(function () {
  const g = (typeof window !== 'undefined') ? window : globalThis;
  g.kernel = g.kernel || {};
  // normalized spot to check graph readiness
  function hasGraph() {
    try {
      const kg = g.kernel && g.kernel.graph;
      if (kg && Array.isArray(kg.nodes)) return true;
      // fallback: some builds expose graph via graphStore/state
      const gs = g.graphStore && (g.graphStore.graph || g.graphStore.state);
      if (gs && Array.isArray(gs.nodes)) {
        g.kernel.graph = gs; // normalize
        return true;
      }
    } catch {}
    return false;
  }
  // a single promise anyone can await
  if (!g.kernelReady) {
    g.kernelReady = new Promise((resolve) => {
      const start = Date.now();
      const iv = setInterval(() => {
        if (hasGraph()) { clearInterval(iv); resolve(g.kernel); }
        // hard fallback after 6s: let the app continue anyway
        if (Date.now() - start > 6000) { clearInterval(iv); resolve(g.kernel || {}); }
      }, 40);
    });
  }
})();
