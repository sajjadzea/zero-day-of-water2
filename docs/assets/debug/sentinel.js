(function(){
  function safeAddClass(node, cls){
    try{
      if (node && node.classList && cls){ node.classList.add(cls); return true; }
    }catch(_){ }
    return false;
  }
  function mark(cls){
    var el = (document && (document.documentElement || document.body));
    if (el) safeAddClass(el, cls);
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
})();
