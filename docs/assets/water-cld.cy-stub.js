(function(){
  if (window.__CY_STUB__) return; window.__CY_STUB__ = true;

  // ---- utils ----
  const noop  = function(){};
  const toArr = (a)=> Array.prototype.slice.call(a || []);

  // Queue operations called before real cy exists
  const queue = [];
  function enqueue(kind, method, args, selector){
    queue.push({ kind, method, args: toArr(args), selector: selector ?? null });
  }
  function flush(real){
    if (!real) return;
    try{
      for (const op of queue){
        if (op.kind === 'cy'){
          const fn = real[op.method];
          if (typeof fn === 'function') fn.apply(real, op.args);
        } else if (op.kind === 'collection'){
          // Resolve selector on the real instance
          let coll = null;
          if (op.selector && op.selector.__type === 'id'){
            coll = real.getElementById(op.selector.value);
          } else if (op.selector && op.selector.__type === 'query'){
            coll = real.$(op.selector.value);
          } else {
            coll = real.elements(op.selector || undefined);
          }
          const fn = coll && coll[op.method];
          if (typeof fn === 'function') fn.apply(coll, op.args);
        }
      }
    }catch(_){ }
    queue.length = 0;
  }

  // ---- collection proxy so cy.elements(...).remove().data() doesn't throw ----
  function makeCollectionProxy(selector){
    const api = {};
    const chain = [
      'add','remove',
      'addClass','removeClass','toggleClass',
      'style','data','animate','layout','merge','difference','union'
    ];
    chain.forEach(m=>{
      api[m] = function(){ enqueue('collection', m, arguments, selector); return api; };
    });
    // readonly helpers
    api.forEach = noop;
    api.map     = function(){ return []; };
    api.filter  = function(){ return makeCollectionProxy(selector); };
    Object.defineProperty(api,'length',{ get: ()=>0 });
    return api;
  }

  // ---- stub cy object ----
  let realCy = null;
  const cyStub = {
    // selectors
    elements(sel){ return makeCollectionProxy(sel); },
    nodes(sel){ return makeCollectionProxy(sel); },
    edges(sel){ return makeCollectionProxy(sel); },
    getElementById(id){ return makeCollectionProxy({ __type:'id', value:String(id) }); },
    $ (query){ return makeCollectionProxy({ __type:'query', value:String(query) }); },

    // events & batching
    on: noop, off: noop,
    startBatch: noop, endBatch: noop,
    batch(fn){ try{ typeof fn === 'function' && fn.call(this); } catch(_){ } },

    // cy-level mutations (queued)
    fit(){       enqueue('cy','fit',       arguments); },
    add(){       enqueue('cy','add',       arguments); },
    remove(){    enqueue('cy','remove',    arguments); },
    addClass(){  enqueue('cy','addClass',  arguments); },
    removeClass(){ enqueue('cy','removeClass', arguments); },
    style(){     enqueue('cy','style',     arguments); },
    reset(){     enqueue('cy','reset',     arguments); },
    layout(){    enqueue('cy','layout',    arguments); }
  };

  // Expose window.cy with getter/setter; flush when real instance is set
  try{
    Object.defineProperty(window, 'cy', {
      configurable: true,
      get(){ return realCy || cyStub; },
      set(v){ realCy = v; flush(realCy); }
    });
  }catch(_){
    window.cy = window.cy || cyStub;
  }

  // Capture via event too
  document.addEventListener('cy:ready', function(e){
    const inst = e && e.detail && e.detail.cy;
    if (inst){ try{ realCy = inst; flush(realCy); }catch(_){ } }
  });
})();

