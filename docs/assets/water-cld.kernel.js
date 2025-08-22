(function(){
  if (window.__WATER_KERNEL__) return; window.__WATER_KERNEL__ = true; 'use strict';
  function E(){ this._=Object.create(null); }
  E.prototype.on=function(k,fn){ (this._[k]||(this._[k]=[])).push(fn); return fn; };
  E.prototype.off=function(k,fn){ var a=this._[k]; if(!a) return; var i=a.indexOf(fn); if(i>-1) a.splice(i,1); };
  E.prototype.emit=function(k,p){ var a=this._[k]||[]; for(var i=0;i<a.length;i++){ try{ a[i](p); }catch(_){ } } };

  var PH = ['BOOT','VENDORS_READY','CY_READY','MODEL_LOADED','GRAPH_READY'];
  var IDX = {}; PH.forEach(function(s,i){ IDX[s]=i; });
  var MAP = { vendors:'VENDORS_READY', cy:'CY_READY', model:'MODEL_LOADED', graph:'GRAPH_READY' };

  var ev  = new E(), st='BOOT';
  var q   = { vendors:[], cy:[], model:[], graph:[] };
  function canAdvance(to){ return IDX[to] > IDX[st]; }
  function reached(phase){ return IDX[MAP[phase]||phase] <= IDX[st]; }
  function _drain(phase){ var arr=q[phase]||[]; if(!arr.length) return; var copy=arr.splice(0,arr.length); for(var i=0;i<copy.length;i++){ try{ copy[i](); }catch(_){ } } }
  function emit(next, payload){
    var target = MAP[next] || next; if (!IDX[target]) return;
    if (!canAdvance(target)){ ev.emit(target, payload); return; }
    st = target; ev.emit(st, payload);
    if (st==='VENDORS_READY') _drain('vendors');
    if (IDX[st] >= IDX['CY_READY'])     _drain('cy');
    if (IDX[st] >= IDX['MODEL_LOADED']) _drain('model');
    if (IDX[st] >= IDX['GRAPH_READY'])  _drain('graph');
  }
  function onReady(phase, fn){ var s=MAP[phase]||phase; if (reached(phase)){ try{ fn(); }catch(_){ } return fn; } return ev.on(s, fn); }
  function queue(phase, fn){ (q[phase]||(q[phase]=[])).push(fn); }
  function state(){ return st; }

  function onDomReady(){ emit('VENDORS_READY'); }
  if (document.readyState==='loading') document.addEventListener('DOMContentLoaded', onDomReady, {once:true}); else onDomReady();
  document.addEventListener('cy:ready', function(e){ emit('CY_READY', e && e.detail && e.detail.cy); });

  window.waterKernel = window.waterKernel || { state, emit, onReady, queue };
})();
