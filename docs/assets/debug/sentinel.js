(function(g){
  g = g || (typeof window !== 'undefined' ? window : globalThis);
  g.CLD_SAFE = g.CLD_SAFE || {};
  g.CLD_SAFE.safeAddClass = g.CLD_SAFE.safeAddClass || function(node, cls, direct){
    try{
      if (typeof direct === 'function'){ direct.call(node, cls); return true; }
      if (node?.addClass){ node.addClass(cls); return true; }
      if (node?.classList?.add){ node.classList.add(cls); return true; }
    }catch(_){ }
    var c = g.CLD_SAFE._acCnt = (g.CLD_SAFE._acCnt || 0) + 1;
    if (c === 1 || c >= 10){
      var ctx = node ? (node.constructor && node.constructor.name || typeof node) : typeof node;
      console.debug('CLD_SAFE.safeAddClass fallback', ctx);
      if (c >= 10) g.CLD_SAFE._acCnt = 0;
    }
    return false;
  };
  function mark(cls){
    var el = (document && (document.documentElement || document.body));
    if (el) g.CLD_SAFE.safeAddClass(el, cls);
  }
  function detect(){
    if (!document || !document.createElement){ return; }
    var ok = !!(window.cytoscape && window.elk && window.dagre && window.Chart && window.exprEval && window.tippy && window.Popper);
    mark(ok ? 'vendor-ok' : 'vendor-missing');
  }
  function logState(){
    try{
      var cyEl = document.getElementById('cy');
      var info = {
        kernel: !!g.kernel,
        nodes: g.kernel?.graph?.nodes?.length || 0,
        storeGraph: !!(g.graphStore && g.graphStore.graph),
        cy: !!cyEl,
        width: cyEl?.offsetWidth || 0,
        height: cyEl?.offsetHeight || 0
      };
      console.table(info);
      if (cyEl && (info.width === 0 || info.height === 0)) {
        g.CLD_SAFE.safeAddClass(cyEl, 'cy-force-size');
      }
    }catch(e){ console.warn('[sentinel] logState', e); }
  }
  if (g.kernelReady && typeof g.kernelReady.then === 'function'){
    g.kernelReady.then(logState);
  }
  if (typeof document === 'undefined'){ return; }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', detect, { once:true });
  } else {
    detect();
  }
})(typeof window !== 'undefined' ? window : globalThis);
