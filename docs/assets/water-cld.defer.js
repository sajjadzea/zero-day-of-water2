// Loads the CLD bundle only when kernel graph is ready (no inline, CSP-safe).
(async function () {
  function whenDomReady() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', resolve, { once: true });
    });
  }
  function loadBundle() {
    if (document.getElementById('cld-bundle-loader')) return;
    const s = document.createElement('script');
    s.src = '/assets/dist/water-cld.bundle.js';
    s.defer = true;
    s.id = 'cld-bundle-loader';
    document.head.appendChild(s);
  }
  const g = (typeof window !== 'undefined') ? window : globalThis;
  await whenDomReady();
  if (g.CLD_SAFE && typeof g.CLD_SAFE.domGateReady === 'function') {
    try { g.CLD_SAFE.domGateReady(); } catch (_) {}
  }
  if (g.kernelReady && typeof g.kernelReady.then === 'function') {
    await g.kernelReady;
    loadBundle();
  } else {
    // very defensive fallback
    const iv = setInterval(() => {
      if (g.kernel && g.kernel.graph && Array.isArray(g.kernel.graph.nodes)) {
        clearInterval(iv); loadBundle();
      }
    }, 50);
    setTimeout(() => { clearInterval(iv); loadBundle(); }, 6000);
  }
})();
