const assert = require('assert');

function sanitizeGraph(graph){
  const g = graph || {};
  const nodes = Array.isArray(g.nodes) ? g.nodes : [];
  const edges = Array.isArray(g.edges) ? g.edges : [];
  const cleanNodes = nodes.map(n => ({ data:{ id:String(n.id), label:n.label||String(n.id) }, classes:n.classes||'' }));
  const cleanEdges = edges.map(e => ({ data:{ id:(e.id||`${e.source}-${e.target}`), source:String(e.source), target:String(e.target), polarity:e.polarity||'' }, classes:e.classes||'' }));
  return { nodes: cleanNodes, edges: cleanEdges, meta: g.meta || {} };
}
function toCyElements(raw){
  const nodesSrc = Array.isArray(raw) ? raw : (raw.nodes || raw.vertices || []);
  const linksSrc = Array.isArray(raw) ? [] : (raw.edges || raw.links || raw.connections || []);
  const clean = sanitizeGraph({ nodes: nodesSrc, edges: linksSrc, meta: raw.meta || {} });
  const nodes = clean.nodes.map(n => ({ group:'nodes', data:n.data, classes:n.classes }));
  const edges = clean.edges.map(e => ({ group:'edges', data:e.data, classes:e.classes }));
  return { nodes, edges, graph: clean };
}

// test mapping nodes/links
const raw = { nodes:[{id:1,label:'a'}], links:[{source:1,target:1}] };
const out = toCyElements(raw);
assert.equal(out.nodes.length, 1);
assert.equal(out.edges.length, 1);
assert.equal(out.nodes[0].data.id, '1');
assert.equal(out.edges[0].data.source, '1');

console.log('mapper.test passed');
