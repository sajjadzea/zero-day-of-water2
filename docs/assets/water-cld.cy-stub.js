(function(){
  if (window.__CY_STUB__) return; window.__CY_STUB__ = true;

  // ---- utils ----
  const noop  = function(){};
  const toArr = (a)=> Array.prototype.slice.call(a || []);

  // صف عملیات قبل از آماده‌شدن cy واقعی
  const queue = [];
  function enqueue(kind, method, args, selectorRef){
    queue.push({ kind, method, args: toArr(args), selectorRef: selectorRef || null });
  }

  // ساخت یک reference برای انتخاب، با قابلیت نگه‌داری زنجیرهٔ فیلترها
  function makeSelectorRef(base){
    // base: { type:'elements'|'id'|'query', value:any }
    return { type: base.type, value: base.value, ops: [] }; // ops: [{method:'filter', args:[...]}]
  }

  function resolveBase(real, ref){
    if (!ref) return real.elements();
    if (ref.type === 'id')    return real.getElementById(String(ref.value));
    if (ref.type === 'query') return real.$(String(ref.value));
    return real.elements(ref.value);
  }

  function applyOps(coll, ops){
    let cur = coll;
    for (const op of (ops || [])){
      if (typeof cur?.[op.method] === 'function'){
        cur = cur[op.method].apply(cur, toArr(op.args));
      }
    }
    return cur;
  }

  function flush(real){
    if (!real || !queue.length) return;
    try{
      for (const op of queue){
        if (op.kind === 'cy'){
          const fn = real[op.method];
          if (typeof fn === 'function') fn.apply(real, op.args);
        } else if (op.kind === 'collection'){
          const base = resolveBase(real, op.selectorRef);
          const coll = applyOps(base, op.selectorRef?.ops);
          const fn = coll && coll[op.method];
          if (typeof fn === 'function') fn.apply(coll, op.args);
        }
      }
    }catch(_){ }
    queue.length = 0;
  }

  // ---- کالکشن پروکسی: متدهای زنجیره‌ای و عملیاتی ----
  function makeCollectionProxy(selectorRef){
    const api = {};
    // متدهای زنجیره‌ای که مجموعه را تغییر می‌دهند و باید در ops ذخیره شوند
    const chainOps = ['filter']; // درصورت نیاز می‌شود 'union','difference','merge' را هم افزود
    chainOps.forEach(m=>{
      api[m] = function(){
        selectorRef.ops.push({ method: m, args: arguments });
        return api;
      };
    });

    // متدهای عملیاتی که باید در صف اعمال روی کالکشن ثبت شوند
    const actionOps = [
      'add','remove',
      'addClass','removeClass','toggleClass',
      'style','data','animate','layout','move' // ← move اضافه شد
    ];
    actionOps.forEach(m=>{
      api[m] = function(){ enqueue('collection', m, arguments, selectorRef); return api; };
    });

    // کمکی‌های فقط‌خواندنی
    api.forEach = noop;
    api.map     = function(){ return []; };
    api.filter  = api.filter; // از بالا
    Object.defineProperty(api,'length',{ get: ()=>0 });
 codex/replace-content-of-water-cld.cy-stub.js-omfag6
    api[0] = api; // allow nodes(...)[0].addClass(...) without throwing
    try{
      Object.defineProperty(api,1,{ get: ()=>api });
      Object.defineProperty(api,2,{ get: ()=>api });
    }catch(_){ }

 main
    return api;
  }

  // ---- شیء استاب cy ----
  let realCy = null;
  const cyStub = {
    // selectors
    elements(sel){ return makeCollectionProxy(makeSelectorRef({ type:'elements', value: sel })); },
    nodes(sel){    return makeCollectionProxy(makeSelectorRef({ type:'elements', value: sel })); },
    edges(sel){    return makeCollectionProxy(makeSelectorRef({ type:'elements', value: sel })); },
    getElementById(id){ return makeCollectionProxy(makeSelectorRef({ type:'id', value: String(id) })); },
    $ (query){        return makeCollectionProxy(makeSelectorRef({ type:'query', value: String(query) })); },

    // events & batching
    on: noop, off: noop,
    startBatch: noop, endBatch: noop,
    batch(fn){ try{ typeof fn === 'function' && fn.call(this); } catch(_){ } },

    // cy-level ops (queued)
    fit(){       enqueue('cy','fit',       arguments); },
    add(){       enqueue('cy','add',       arguments); },
    remove(){    enqueue('cy','remove',    arguments); },
    addClass(){  enqueue('cy','addClass',  arguments); },
    removeClass(){ enqueue('cy','removeClass', arguments); },
    style(){     enqueue('cy','style',     arguments); },
    reset(){     enqueue('cy','reset',     arguments); },
    layout(){    enqueue('cy','layout',    arguments); }
  };

  // Getter/Setter روی window.cy + flush
  try{
    Object.defineProperty(window, 'cy', {
      configurable: true,
      get(){ return realCy || cyStub; },
      set(v){ realCy = v; flush(realCy); }
    });
  }catch(_){
    window.cy = window.cy || cyStub;
  }

  // گرفتن instance از رویداد
  document.addEventListener('cy:ready', function(e){
    const inst = e && e.detail && e.detail.cy;
    if (inst){ try{ realCy = inst; flush(realCy); }catch(_){ } }
  });

  // Late flush fallback
  setTimeout(function(){
    try{ if (window.cy && window.cy !== cyStub) flush(window.cy); }catch(_){ }
  }, 200);
})();
