(function(){
  if (window.__CY_STUB__) return; window.__CY_STUB__ = true;

  // ---- minimal utilities ----
  const noop = function(){};
  const toArr = (a)=> Array.prototype.slice.call(a||[]);

  // Queue of ops performed before real cy exists
  const q = [];
  function enqueue(type, method, args, selector){
    q.push({ type, method, args: toArr(args), selector: selector || null });
  }
  function flush(real){
    if (!real) return;
    try{
      for (const op of q){
        if (op.type === 'cy'){
          const fn = real[op.method];
          if (typeof fn === 'function') fn.apply(real, op.args);
        } else if (op.type === 'collection'){
          const coll = real.elements(op.selector||undefined);
          const fn = coll && coll[op.method];
          if (typeof fn === 'function') fn.apply(coll, op.args);
        }
      }
    }catch(_){ }
    q.length = 0;
  }

  // ---- collection proxy for calls like cy.elements('x').remove().addClass() ----
  function makeCollectionProxy(selector){
    const api = {};
    // chainable operations (return the proxy itself)
    const chain = ['remove','addClass','removeClass','style','data','animate','layout'];
    chain.forEach(m=>{
      api[m] = function(){ enqueue('collection', m, arguments, selector); return api; };
    });
    // read-only helpers
    api.forEach = noop;
    api.map     = function(){ return []; };
    api.filter  = function(){ return makeCollectionProxy(selector); };
    Object.defineProperty(api,'length',{ get: ()=>0 });
    return api;
  }

  // ---- the stub cy object ----
  let realCy = null;
  const cyStub = {
    elements: function(sel){ return makeCollectionProxy(sel); },
    nodes:    function(sel){ return makeCollectionProxy(sel||undefined); },
    edges:    function(sel){ return makeCollectionProxy(sel||undefined); },
    on: noop, off: noop,
    startBatch: noop, endBatch: noop,
    batch: function(fn){ try{ typeof fn==='function' && fn.call(this); }catch(_){ } },
    fit:   function(){ enqueue('cy','fit', arguments); },
    add:   function(){ enqueue('cy','add', arguments); },
    remove:function(){ enqueue('cy','remove', arguments); },
    addClass:    function(){ enqueue('cy','addClass', arguments); },
    removeClass: function(){ enqueue('cy','removeClass', arguments); },
    style:       function(){ enqueue('cy','style', arguments); }
  };

  // Expose cy with getter/setter; when set, flush queued ops
  try{
    Object.defineProperty(window, 'cy', {
      configurable: true,
      get(){ return realCy || cyStub; },
      set(v){ realCy = v; flush(realCy); }
    });
  }catch(_){
    // fallback
    window.cy = window.cy || cyStub;
  }

  // If someone dispatches cy:ready later, capture and flush
  document.addEventListener('cy:ready', function(e){
    const inst = e && e.detail && e.detail.cy;
    if (inst){ try { realCy = inst; flush(realCy); } catch(_){ } }
  });
})();
