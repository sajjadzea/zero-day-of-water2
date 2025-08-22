(function(){
  if (window.__CY_SAFE_ADD__) return; window.__CY_SAFE_ADD__ = true;
  'use strict';

  function install(cy){
    if (!cy || cy.__SAFE_ADD_INSTALLED__) return;

    const orig = {
      add:  cy.add.bind(cy),
      json: cy.json.bind(cy),
      $:    cy.$.bind(cy),
      id:   (id)=> cy.getElementById ? cy.getElementById(id) : cy.$('#'+id)
    };

    // Edge queue for unresolved endpoints
    const pendingEdges = []; // { data, scratch, classes }

    function existsNode(id){
      if (!id && id !== 0) return false;
      const col = orig.id(String(id));
      return !!(col && col.length && col.length > 0);
    }

    function isNode(el){ return el && (el.group === 'nodes' || el.data?.id && !el.data?.source && !el.data?.target); }
    function isEdge(el){ return el && (el.group === 'edges' || (el.data?.source && el.data?.target)); }

    function normalize(input){
      // return {nodes:[], edges:[], passthrough:null}
      if (typeof input === 'string') return { passthrough: input };
      if (Array.isArray(input))      return splitArray(input);
      if (input && input.elements)   return splitArray(input.elements);
      if (input && (isNode(input) || isEdge(input))) return splitArray([input]);
      return { passthrough: input };
    }

    function splitArray(arr){
      const nodes = [], edges = [];
      for (const el of arr || []){
        if (isEdge(el)) edges.push(clean(el));
        else if (isNode(el)) nodes.push(clean(el));
      }
      return { nodes, edges };
    }

    function clean(el){
      // minimal deep clone without functions
      try{ return JSON.parse(JSON.stringify(el)); }catch(_){ return el; }
    }

    function dedupe(list){
      const out = [], seen = new Set();
      for (const el of list){
        const id = el?.data?.id;
        if (id && !seen.has(id)){
          seen.add(id); out.push(el);
        }
      }
      return out;
    }

    function addNodes(nodes){
      if (!nodes || !nodes.length) return cy.collection();
      // skip if already exist
      const fresh = nodes.filter(n => !existsNode(n?.data?.id));
      if (!fresh.length) return cy.collection();
      try{ cy.startBatch && cy.startBatch(); }catch(_){ }
      const out = orig.add(fresh);
      try{ cy.endBatch && cy.endBatch(); }catch(_){ }
      if (pendingEdges.length){
        setTimeout(function(){
          if (!pendingEdges.length) return;
          tryAddEdges(pendingEdges.splice(0, pendingEdges.length));
        }, 0);
      }
      return out;
    }

    function tryAddEdges(edges){
      if (!edges || !edges.length) return cy.collection();
      const ready = [], wait = [];
      for (const e of edges){
        const s = e?.data?.source, t = e?.data?.target;
        (existsNode(s) && existsNode(t)) ? ready.push(e) : wait.push(e);
      }
      let added = cy.collection();
      if (ready.length){
        try{ cy.startBatch && cy.startBatch(); }catch(_){ }
        added = orig.add(ready);
        try{ cy.endBatch && cy.endBatch(); }catch(_){ }
      }
      if (wait.length){
        pendingEdges.push.apply(pendingEdges, wait);
        // یک tick کوتاه برای تلاش مجدد، حتی اگر رویداد add نیاید
        setTimeout(function(){
          if (!pendingEdges.length) return;
          tryAddEdges(pendingEdges.splice(0, pendingEdges.length));
        }, 0);
      }
      return added;
    }

    // replay pending edges when nodes land
    function attachReplayOnce(){
      if (cy.__SAFE_ADD_REPLAY__) return;
      cy.on('add', 'node', function(){
        if (!pendingEdges.length) return;
        tryAddEdges(pendingEdges.splice(0, pendingEdges.length));
      });
      cy.__SAFE_ADD_REPLAY__ = true;
    }

    // Wrapped cy.add
    cy.add = function(input){
      const pack = normalize(input);
      if (pack.passthrough !== undefined) {
        // fall back for selectors/unknown structures
        return orig.add(pack.passthrough);
      }
      const nodes = dedupe(pack.nodes);
      const edges = dedupe(pack.edges);
      const col1  = addNodes(nodes);
      const col2  = tryAddEdges(edges);
      attachReplayOnce();
      return col1.union(col2);
    };

    // Wrapped cy.json: if elements exist, apply through safe add
    cy.json = function(obj){
      if (obj && obj.elements){
        const pack = normalize(obj);
        const nodes = dedupe(pack.nodes);
        const edges = dedupe(pack.edges);
        cy.elements().remove(); // reset current
        addNodes(nodes);
        tryAddEdges(edges);
        attachReplayOnce();
        return orig.json({ elements: cy.elements().jsons() });
      }
      return orig.json(obj);
    };

    cy.__SAFE_ADD_INSTALLED__ = true;
  }

  function tryInstall(){
    try{
      if (window.cy) install(window.cy);
      // also wrap future instances
      if (window.cytoscape && !window.cytoscape.__SAFE_ADD_WRAP__){
        const factory = window.cytoscape;
        window.cytoscape = function(){
          const inst = factory.apply(this, arguments);
          try{ install(inst); }catch(_){ }
          return inst;
        };
        window.cytoscape.__SAFE_ADD_WRAP__ = true;
      }
    }catch(_){ }
  }

  if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', tryInstall, { once:true });
  } else {
    tryInstall();
  }
  document.addEventListener('cy:ready', function(e){ try{ install(e && e.detail && e.detail.cy); }catch(_){ } });
})();
