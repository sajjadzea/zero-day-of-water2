(function(){
  if (window.__CY_STUB__) return; window.__CY_STUB__ = true;

  function noop(){}
  function col(){ return { length:0, forEach:noop, map:()=>[], filter:()=>col() }; }

  const stub = {
    nodes:()=>col(),
    elements:()=>col(),
    on:noop, off:noop,
    startBatch:noop, endBatch:noop,
    batch:function(fn){ try{ typeof fn==='function' && fn.call(this); }catch(_){} },
    fit:noop, addClass:noop, removeClass:noop, style:noop
  };

  var realCy = null;
  try{
    Object.defineProperty(window, 'cy', {
      configurable:true,
      get(){ return realCy || stub; },
      set(v){ realCy = v; }
    });
  }catch(_){ window.cy = window.cy || stub; }

  document.addEventListener('cy:ready', function(e){
    const c = e && e.detail && e.detail.cy;
    if (c) try{ realCy = c; }catch(_){ }
  });
})();

