// docs/assets/water-cld.kernel-shim.js
(function () {
  // Ensure a minimal kernel object exists before any CLD code runs
  if (!window.kernel) {
    window.kernel = { ready: false, nodes: [], edges: [], config: {} };
  }
})();
