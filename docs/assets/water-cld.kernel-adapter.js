(function(){
  if (window.__WATER_KERNEL_ADAPTER__) return; window.__WATER_KERNEL_ADAPTER__ = true; 'use strict';
  var K = window.waterKernel; if (!K) return;
  var seenModel=false;
  function handleModel(e){ if(seenModel) return; seenModel=true; try{ K.emit('MODEL_LOADED', e && e.detail || {}); }catch(_){} }
  document.addEventListener('model:updated', handleModel, {once:true});
  document.addEventListener('model:loaded',  handleModel, {once:true});
  K.onReady('cy', function(){
    try{
      var cy = window.cy; if(!cy) return;
      function tryGraph(){
        try{ if (cy.elements && cy.elements().length>0){ K.emit('GRAPH_READY', {count: cy.elements().length}); return true; } }catch(_){ }
        return false;
      }
      if (tryGraph()) return;
      var done=false, onEvt=function(){ if(!done && tryGraph()){ done=true; cleanup(); } }, cleanup=function(){ try{ cy.off('add', onEvt); cy.off('layoutstop', onEvt); }catch(_){ } };
      try{ cy.on('add', onEvt); cy.on('layoutstop', onEvt); }catch(_){ }
      var ticks=8;(function tick(){ if(done) return; if(tryGraph()) return; if(--ticks<=0) return; setTimeout(tick,50);}());
    }catch(_){ }
  });
})();
