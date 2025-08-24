(function(g){
  g = g || (typeof window !== 'undefined' ? window : globalThis);
  g.CLD_SAFE = g.CLD_SAFE || {};
  g.CLD_SAFE.safeAddClass = g.CLD_SAFE.safeAddClass || function(node, cls){
    try{
      if (node?.addClass){ node.addClass(cls); return true; }
      if (node?.classList?.add){ node.classList.add(cls); return true; }
    }catch(_){ }
    console.warn('CLD_SAFE.safeAddClass fallback');
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
  if (typeof document === 'undefined'){ return; }
  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', detect, { once:true });
  } else {
    detect();
  }
})(typeof window !== 'undefined' ? window : globalThis);
