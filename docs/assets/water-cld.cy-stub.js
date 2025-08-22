(function(){
  if (window.__CY_STUB__) return; window.__CY_STUB__ = true;

  // ---- utilities ----
  const noop  = function(){};
  const toArr = (a)=> Array.prototype.slice.call(a || []);

  // Queue ops done before real cy exists
  const queue = [];
  function enqueue(type, method, args, selector){
    queue.push({ type, method, args: toArr(args), selector: selector ?? null });
  }
  function flush(real){
    if (!real) return;
    try{
      for (const op of queue){
        if (op.type === 'cy'){
          const fn = real[op.method];
          if (typeof fn === 'function') fn.apply(real, op.args);
        } else if (op.type === 'collection'){
          const coll = real.elements(op.selector || undefined);
          if (!coll) continue;
          const fn = coll[op.method];
          if (typeof fn === 'function') fn.apply(coll, op.args);
        }
      }
    }catch(_){ /* swallow */ }
    queue.length = 0;
  }

  // ---- collection proxy so cy.elements(...).remove().addClass() doesn't throw ----
  function makeCollectionProxy(selector){
    const api = {};
    // chainable ops (return proxy itself to allow chaining)
    const chain = [
      'remove','add','addClass','removeClass','toggleClass',
      'style','data','animate','layout','merge','difference','union'
    ];
    chain.forEach(m=>{
      api[m] = function(){ enqueue('collection', m, arguments, selector); return api; };
    });
    // read-only helpers (no-ops)
    api.forEach = noop;
    api.map     = function(){ return []; };
    api.filter  = function(){ return makeCollectionProxy(selector); };
    Object.defineProperty(api, 'length', { get: ()=>0 });
    return api;
  }

  // ---- stub cy object ----
  let realCy = null;
  const cyStub = {
    elements(sel){ return makeCollectionProxy(sel); },
    nodes(sel){ return makeCollectionProxy(sel); },
    edges(sel){ return makeCollectionProxy(sel); },

    on: noop, off: noop,
    startBatch: noop, endBatch: noop,
    batch(fn){ try{ typeof fn === 'function' && fn.call(this); } catch(_){ } },

    fit(){    enqueue('cy','fit',    arguments); },
    add(){    enqueue('cy','add',    arguments); },
    remove(){ enqueue('cy','remove', arguments); },
    addClass(){    enqueue('cy','addClass',    arguments); },
    removeClass(){ enqueue('cy','removeClass', arguments); },
    style(){      enqueue('cy','style',      arguments); },
    reset(){      enqueue('cy','reset',      arguments); },
    layout(){     enqueue('cy','layout',     arguments); }
  };

  // Expose window.cy via getter/setter; flush queued ops when real instance is set
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

  // If a 'cy:ready' is dispatched later, capture and flush
  document.addEventListener('cy:ready', function(e){
    const inst = e && e.detail && e.detail.cy;
    if (inst){ try { realCy = inst; flush(realCy); } catch(_){ } }
  });
})();
