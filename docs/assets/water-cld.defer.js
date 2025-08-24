// Loads the CLD bundle only when kernel graph is ready (no inline, CSP-safe).
(async function () {
  function whenDomReady() {
    if (document.readyState !== 'loading') return Promise.resolve();
    return new Promise((resolve) => {
      document.addEventListener('DOMContentLoaded', () => {
        console.debug('[CLD defer] DOMContentLoaded');
        resolve();
      }, { once: true });
    });
  }
  function loadBundle() {
    if (document.getElementById('cld-bundle-loader')) {
      console.debug('[CLD defer] bundle already injected');
      return;
    }
    const s = document.createElement('script');
    s.src = '/assets/dist/water-cld.bundle.js';
    s.defer = true;
    s.id = 'cld-bundle-loader';
    s.addEventListener('load', () => console.debug('[CLD defer] bundle loaded'));
    document.head.appendChild(s);
    console.debug('[CLD defer] bundle injected');
  }
  const g = (typeof window !== 'undefined') ? window : globalThis;
  await whenDomReady();
  if (g.CLD_SAFE && typeof g.CLD_SAFE.domGateReady === 'function') {
    try { g.CLD_SAFE.domGateReady(); } catch (_) {}
  }
  if (g.kernelReady && typeof g.kernelReady.then === 'function') {
    await g.kernelReady;
    console.debug('[CLD defer] kernelReady resolved');
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
