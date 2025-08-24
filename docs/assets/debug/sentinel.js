(function(){
  const g = window; g.CLD_SAFE = g.CLD_SAFE || {};
  let warnCount = 0;
  g.CLD_SAFE.safeAddClass = function(target, cls){
    try{
      if (!target) throw new Error('null target');
      if (typeof target.addClass === 'function') return target.addClass(cls);
      if (target.classList?.add) return target.classList.add(cls);
      if (Array.isArray(target) || (target.length >= 0 && typeof target !== 'string')) {
        for (let i=0;i<target.length;i++) g.CLD_SAFE.safeAddClass(target[i], cls);
        return;
      }
      throw new Error('unsupported target');
    }catch(e){
      if (++warnCount % 10 === 1) console.debug('[CLD_SAFE] safeAddClass fallback:', e.message);
    }
  };
})();

