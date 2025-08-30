import '../vendor/cytoscape.min.js';
import '../debug/sentinel.js';
import '../graph-store.js';
import '../water-cld.cy-stub.js';
import '../water-cld.cy-addclass-patch.js';
import '../water-cld.cy-batch-guard.js';
import '../water-cld.cy-collection-guard.js';
import '../water-cld.cy-safe-add.js';
import '../water-cld.runtime-guards.js';
import '../water-cld.cy-alias.js';
import '../water-cld.js';

(async () => {
  await (window.__WATER_CLD_READY__ || Promise.resolve());
  const cy = (window.CLD_SAFE && window.CLD_SAFE.cy) || window.cy;
  window.CLD_SAFE = window.CLD_SAFE || {};
  window.CLD_SAFE.cy = cy;
  if (!window._cyDom) window.cy = cy;
  document.dispatchEvent(new CustomEvent('cld:ready', { detail: { cy } }));
})();
