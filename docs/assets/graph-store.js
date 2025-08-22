(function(){
  if (window.__GRAPH_STORE__) return; window.__GRAPH_STORE__ = true; 'use strict';
  var cy=null, q=[], rdy=[];
  function hasBatch(){ return cy && typeof cy.startBatch==='function' && typeof cy.endBatch==='function'; }
  function safeRun(fn, opt){ if(cy){ if(opt&&opt.batch&&hasBatch()) try{ cy.startBatch(); }catch(_){ }
      var out; try{ out=fn(cy);}catch(_){ }
      if(opt&&opt.batch&&hasBatch()) try{ cy.endBatch(); }catch(_){ }
      return out; } q.push({fn:fn,opt:opt||{}}); }
  function flush(){ if(!cy) return; for(var i=0;i<q.length;i++){ var t=q[i]; try{ safeRun(t.fn,t.opt);}catch(_){}} q.length=0; while(rdy.length){ try{ rdy.shift()(cy);}catch(_){}}
  function adopt(inst){ if(!inst || inst===cy) return; cy=inst;
    try{ document.dispatchEvent(new CustomEvent('cy:ready',{detail:{cy:inst}})); }catch(_){ }
    if (window.waterKernel && typeof window.waterKernel.emit==='function'){ try{ window.waterKernel.emit('CY_READY', inst); }catch(_){ } }
    flush();
  }
  function watchFactory(){ if(!window.cytoscape || window.cytoscape.__GRAPH_STORE_WRAPPED__) return;
    var factory=window.cytoscape; window.cytoscape=function(){ var inst=factory.apply(this,arguments); try{ adopt(inst);}catch(_){ } return inst; }; window.cytoscape.__GRAPH_STORE_WRAPPED__=true; }
  var api={ init:function(opts){ if(cy && opts && opts.container){ try{ cy.destroy(); }catch(_){ } cy=null; }
      if(!cy && typeof window.cytoscape==='function' && opts && opts.container){ try{ adopt(window.cytoscape(opts)); }catch(_){ } }
      return this; },
    destroy:function(){ if(!cy) return this; try{ cy.destroy(); }catch(_){ } cy=null; return this; },
    restore:function(json){ if(!json) return this; return safeRun(function(c){
        if(c.json && json.elements){ try{ if(hasBatch()) c.startBatch(); c.elements().remove(); c.json({elements:json.elements}); }
            finally{ if(hasBatch()) try{ c.endBatch(); }catch(_){ } } }
        else if(Array.isArray(json)){ if(hasBatch()) c.startBatch(); try{ c.add(json);} finally{ if(hasBatch()) try{ c.endBatch(); }catch(_){ } } }
        try{ if (window.waterKernel && typeof window.waterKernel.emit==='function'){
          if(c.elements && c.elements().length>0){ window.waterKernel.emit('GRAPH_READY', {count:c.elements().length}); }
        } }catch(_){ }
      }, {batch:false}), this; },
    run:function(fn,opt){ return safeRun(fn,opt); },
    get:function(){ return cy; },
    ready:function(){ return new Promise(function(res){ if(cy) res(cy); else rdy.push(res); }); }
  };
  window.graphStore = window.graphStore || api;
  if (window.cy) adopt(window.cy);
  document.addEventListener('cy:ready', function(e){ try{ adopt(e && e.detail && e.detail.cy);}catch(_){ } });
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', watchFactory, {once:true}); else watchFactory();
})();
