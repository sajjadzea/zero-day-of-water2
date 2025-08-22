(function(){ if(window.__CY_BATCH_GUARD__)return; window.__CY_BATCH_GUARD__=true;
  function patch(){ if(!window.cytoscape||!window.cytoscape.Core) return;
    const P=window.cytoscape.Core.prototype;
    if(typeof P.startBatch!=='function') P.startBatch=function(){};
    if(typeof P.endBatch!=='function')   P.endBatch=function(){};
  }
  (document.readyState==='loading')?document.addEventListener('DOMContentLoaded',patch,{once:true}):patch();
})();
