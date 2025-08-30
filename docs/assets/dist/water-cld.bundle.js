(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // docs/assets/water-cld.runtime-guards.js
  var require_water_cld_runtime_guards = __commonJS({
    "docs/assets/water-cld.runtime-guards.js"() {
      (function() {
        if (window.__CLD_RT_GUARD__) return;
        window.__CLD_RT_GUARD__ = true;
        if (!window.onCyReady) {
          window.__CLD_READY__ = false;
          window.onCyReady = function(run) {
            const tryRun = /* @__PURE__ */ __name((cy) => {
              if (cy && typeof run === "function") {
                try {
                  run(cy);
                } catch (_) {
                }
              }
            }, "tryRun");
            const c0 = getCy();
            if (c0 && typeof c0.on === "function") {
              tryRun(c0);
              return;
            }
            if (!window.__CLD_READY__) {
              window.__CLD_READY__ = true;
              document.addEventListener("cy:ready", (e) => tryRun(e && e.detail && e.detail.cy || getCy()), { once: true });
              if (window.whenModelReady) window.whenModelReady(() => tryRun(getCy()));
              if (document.readyState !== "loading") setTimeout(() => tryRun(getCy()), 0);
              else document.addEventListener("DOMContentLoaded", () => tryRun(getCy()), { once: true });
            }
          };
        }
        if (!window.__cldDebounce) {
          window.__cldDebounce = function(fn, ms = 60) {
            let t = 0;
            return function() {
              const a = arguments;
              clearTimeout(t);
              t = setTimeout(() => fn.apply(this, a), ms);
            };
          };
        }
        if (!window.__cldSafeFit) {
          window.__cldSafeFit = function(cy) {
            try {
              const els = cy == null ? void 0 : cy.elements();
              if (!els || els.length === 0) return;
              cy.fit(els, 40);
            } catch (_) {
            }
          };
        }
      })();
    }
  });

  // docs/assets/water-cld.cy-alias.js
  var require_water_cld_cy_alias = __commonJS({
    "docs/assets/water-cld.cy-alias.js"() {
      (function() {
        if (window.__CY_ALIAS__) return;
        window.__CY_ALIAS__ = true;
        function define() {
          try {
            Object.defineProperty(window, "c", {
              configurable: true,
              get: /* @__PURE__ */ __name(function() {
                return getCy();
              }, "get"),
              // به‌جای set روی window.cy (که قبلاً باعث TypeError می‌شد)،
              // فقط نمونه را در متغیرهای داخلی نگه می‌داریم و سیگنال cy:ready می‌فرستیم.
              set: /* @__PURE__ */ __name(function(v) {
                try {
                  window.CLD_SAFE = window.CLD_SAFE || {};
                  window.CLD_SAFE.cy = v;
                  window.__cy = v;
                  window.lastCy = v;
                  if (!window._cyDom) window.cy = v;
                  document.dispatchEvent(new CustomEvent("cy:ready", { detail: { cy: v } }));
                  document.dispatchEvent(new CustomEvent("cld:ready", { detail: { cy: v } }));
                } catch (_) {
                }
              }, "set")
            });
          } catch (_) {
            window.c = getCy();
          }
        }
        __name(define, "define");
        define();
        document.addEventListener("cy:ready", define);
        document.addEventListener("cld:ready", define);
        setTimeout(function() {
          try {
            const c = getCy();
            if (c && typeof c.add === "function") {
              document.dispatchEvent(new CustomEvent("cy:ready", { detail: { cy: c } }));
              document.dispatchEvent(new CustomEvent("cld:ready", { detail: { cy: c } }));
            }
          } catch (_) {
          }
        }, 0);
      })();
    }
  });

  // docs/assets/water-cld.js
  var require_water_cld = __commonJS({
    "docs/assets/water-cld.js"() {
      window.__WATER_CLD_READY__ = new Promise(function(resolve) {
        window.__WATER_CLD_RESOLVE__ = resolve;
      });
      var getCy2 = /* @__PURE__ */ __name(() => window.CLD_SAFE && window.CLD_SAFE.cy, "getCy");
      window.__CLD_READY__ = window.__CLD_READY__ || false;
      window.onCyReady = window.onCyReady || function(run) {
        const c0 = getCy2();
        if (c0 && typeof c0.on === "function") {
          try {
            run(c0);
          } catch (e) {
          }
          return;
        }
        if (!window.__CLD_READY__) {
          window.__CLD_READY__ = true;
          document.addEventListener("cy:ready", (e) => {
            var _a;
            const c = ((_a = e.detail) == null ? void 0 : _a.cy) || getCy2();
            if (c && typeof run === "function") try {
              run(c);
            } catch (e2) {
            }
          }, { once: true });
          if (window.whenModelReady) {
            window.whenModelReady(() => {
              const c = getCy2();
              if (c && typeof run === "function") try {
                run(c);
              } catch (e) {
              }
            });
          } else {
            document.addEventListener("DOMContentLoaded", () => {
              const c = getCy2();
              if (c && typeof run === "function") try {
                run(c);
              } catch (e) {
              }
            }, { once: true });
          }
        }
      };
      window.__cldDebounce = window.__cldDebounce || function(fn, ms = 50) {
        let t = 0;
        return (...a) => {
          clearTimeout(t);
          t = setTimeout(() => fn(...a), ms);
        };
      };
      window.__cldSafeFit = window.__cldSafeFit || function(cy) {
        if (!cy || cy.elements().length === 0) return;
        try {
          cy.fit(cy.elements(), 40);
        } catch (e) {
        }
      };
      (function() {
        if (!window.__cld_cy_init) {
          let buildCy2 = function() {
            if (window.__cy && typeof window.__cy.startBatch === "function") {
              return window.__cy;
            }
            const el = document.getElementById("cy");
            if (!el) {
              console.warn("[CLD init] #cy missing");
              return null;
            }
            if (!window.cytoscape) {
              console.warn("[CLD init] cytoscape not loaded");
              return null;
            }
            try {
              if (window.cy && window.cy.tagName) {
                window._cyDom = window.cy;
                window.cy = void 0;
              }
            } catch (e) {
            }
            const cy = cytoscape({ container: el, elements: [] });
            window.__cy = cy;
            window.lastCy = cy;
            window.CLD_SAFE = window.CLD_SAFE || {};
            window.CLD_SAFE.cy = cy;
            if (!window._cyDom) window.cy = cy;
            document.dispatchEvent(new CustomEvent("cy:ready", { detail: { cy } }));
            document.dispatchEvent(new CustomEvent("cld:ready", { detail: { cy } }));
            console.log("[CLD init] cy built", true);
            return cy;
          };
          var buildCy = buildCy2;
          __name(buildCy2, "buildCy");
          window.__cld_cy_init = true;
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", buildCy2, { once: true });
          } else {
            buildCy2();
          }
        }
      })();
      function cldGetCy() {
        const C = window.CLD_SAFE && window.CLD_SAFE.cy || window.__cy || window.lastCy || window.cy || null;
        return C && typeof C.startBatch === "function" ? C : null;
      }
      __name(cldGetCy, "cldGetCy");
      function sanitizeGraph(graph) {
        var _a;
        const g = graph || {};
        const nodes = Array.isArray(g.nodes) ? g.nodes : [];
        const edges = Array.isArray(g.edges) ? g.edges : [];
        const meta = g.meta || {};
        const syn = meta.synonymToId instanceof Map ? meta.synonymToId : null;
        const seenNodes = /* @__PURE__ */ new Set();
        const nodeSet = /* @__PURE__ */ new Set();
        const cleanNodes = [];
        for (const n of nodes) {
          const id = String((n == null ? void 0 : n.id) || "").trim();
          if (!id || seenNodes.has(id)) continue;
          seenNodes.add(id);
          nodeSet.add(id);
          cleanNodes.push({ data: { id, label: (_a = n == null ? void 0 : n.label) != null ? _a : id, group: (n == null ? void 0 : n.group) || "" }, classes: (n == null ? void 0 : n.classes) || "" });
        }
        const seenEdges = /* @__PURE__ */ new Set();
        const cleanEdges = [];
        for (const e of edges) {
          let s = String((e == null ? void 0 : e.source) || "").trim();
          let t = String((e == null ? void 0 : e.target) || "").trim();
          if (syn) {
            s = String(syn.get(s) || s);
            t = String(syn.get(t) || t);
          }
          if (!s || !t || !nodeSet.has(s) || !nodeSet.has(t)) continue;
          const p = (e == null ? void 0 : e.polarity) === "-" || (e == null ? void 0 : e.polarity) === "+" ? e.polarity : (e == null ? void 0 : e.p) || (e == null ? void 0 : e.sign) || "";
          const key = `${s}->${t}:${p}`;
          if (seenEdges.has(key)) continue;
          seenEdges.add(key);
          cleanEdges.push({ data: { id: (e == null ? void 0 : e.id) || key, source: s, target: t, polarity: p, weight: +(e == null ? void 0 : e.weight) || 0 }, classes: (e == null ? void 0 : e.classes) || "" });
        }
        return { nodes: cleanNodes, edges: cleanEdges, meta };
      }
      __name(sanitizeGraph, "sanitizeGraph");
      function whenCyReady(run) {
        const C = cldGetCy();
        if (C && typeof run === "function") {
          try {
            run(C);
          } catch (_) {
          }
          return;
        }
        document.addEventListener("cy:ready", (ev) => {
          const cy = ev && ev.detail && ev.detail.cy || cldGetCy();
          if (cy && typeof run === "function") try {
            run(cy);
          } catch (_) {
          }
        }, { once: true });
      }
      __name(whenCyReady, "whenCyReady");
      function findSynonyms(id) {
        var _a, _b, _c;
        const meta = (_c = (_b = (_a = getCy2()) == null ? void 0 : _a.graph) == null ? void 0 : _b.meta) != null ? _c : { synonymToId: /* @__PURE__ */ new Map(), nodes: /* @__PURE__ */ new Map(), edges: /* @__PURE__ */ new Map() };
        const syn = meta.synonymToId instanceof Map ? meta.synonymToId : /* @__PURE__ */ new Map();
        return (syn.get(id) || []).map(function(x) {
          return x;
        }).filter(Boolean);
      }
      __name(findSynonyms, "findSynonyms");
      function findSynonymNodes(id) {
        var _a, _b, _c;
        const meta = (_c = (_b = (_a = getCy2()) == null ? void 0 : _a.graph) == null ? void 0 : _b.meta) != null ? _c : { synonymToId: /* @__PURE__ */ new Map(), nodes: /* @__PURE__ */ new Map(), edges: /* @__PURE__ */ new Map() };
        const syn = meta.synonymToId instanceof Map ? meta.synonymToId : /* @__PURE__ */ new Map();
        return (syn.get(id) || []).map(function(x) {
          var _a2, _b2;
          return (_b2 = (_a2 = meta.nodes) == null ? void 0 : _a2.get) == null ? void 0 : _b2.call(_a2, x);
        }).filter(Boolean);
      }
      __name(findSynonymNodes, "findSynonymNodes");
      window.findSynonyms = findSynonyms;
      window.findSynonymNodes = findSynonymNodes;
      function toCyElements(raw) {
        const nodesSrc = Array.isArray(raw) ? raw : (raw == null ? void 0 : raw.nodes) || (raw == null ? void 0 : raw.vertices) || [];
        const linksSrc = Array.isArray(raw) ? [] : (raw == null ? void 0 : raw.edges) || (raw == null ? void 0 : raw.links) || (raw == null ? void 0 : raw.connections) || [];
        const clean = sanitizeGraph({ nodes: nodesSrc, edges: linksSrc, meta: (raw == null ? void 0 : raw.meta) || {} });
        const nodes = clean.nodes.map((n) => ({ group: "nodes", data: n.data, classes: n.classes }));
        const edges = clean.edges.map((e) => ({ group: "edges", data: e.data, classes: e.classes }));
        return { nodes, edges, meta: clean.meta, graph: clean, rawNodes: nodesSrc, rawEdges: linksSrc };
      }
      __name(toCyElements, "toCyElements");
      (function() {
        const Parser = window.exprEval && window.exprEval.Parser || function() {
          this.parse = function() {
            return { evaluate: /* @__PURE__ */ __name(function() {
              return 0;
            }, "evaluate"), variables: /* @__PURE__ */ __name(function() {
              return [];
            }, "variables") };
          };
        };
        var __modelReady = false;
        var __chartReady = false;
        var __modelReadyQueue = [];
        function whenModelReady(fn) {
          if (__modelReady) {
            try {
              fn();
            } catch (e) {
              console.error(e);
            }
          } else {
            __modelReadyQueue.push(fn);
          }
        }
        __name(whenModelReady, "whenModelReady");
        function markModelReady() {
          __modelReady = true;
          for (var i = 0; i < __modelReadyQueue.length; i++) {
            try {
              __modelReadyQueue[i]();
            } catch (e) {
              console.error(e);
            }
          }
          __modelReadyQueue = [];
        }
        __name(markModelReady, "markModelReady");
        window.whenModelReady = whenModelReady;
        function setVhVar() {
          const vh = window.innerHeight * 0.01;
          document.documentElement.style.setProperty("--vh", `${vh}px`);
        }
        __name(setVhVar, "setVhVar");
        setVhVar();
        window.addEventListener("resize", setVhVar);
        window.addEventListener("orientationchange", () => {
          setTimeout(setVhVar, 100);
        });
        let model;
        let modelData;
        let simParams = {};
        const SC_KEY = "cld-scenarios";
        function getScenarios() {
          try {
            return JSON.parse(localStorage.getItem(SC_KEY)) || {};
          } catch (e) {
            return {};
          }
        }
        __name(getScenarios, "getScenarios");
        function setScenarios(obj) {
          localStorage.setItem(SC_KEY, JSON.stringify(obj));
        }
        __name(setScenarios, "setScenarios");
        function parseModel(json) {
          const parser = new Parser();
          model = { nodes: {}, edges: [], order: [], initials: {} };
          (json.nodes || []).forEach((n) => {
            const node = { ...n, deps: [] };
            if (n.expr) {
              try {
                node.fn = parser.parse(n.expr);
              } catch (e) {
                console.error("node parse", n.id, e);
              }
            }
            if (n.type === "init") {
              node.value = node.fn ? node.fn.evaluate({}) : parseFloat(n.expr) || 0;
              model.initials[n.id] = node.value;
            }
            if (typeof n.init !== "undefined") model.initials[n.id] = n.init;
            model.nodes[n.id] = node;
          });
          (json.edges || []).forEach((e) => {
            const edge = { ...e };
            if (e.expr) {
              try {
                edge.fn = parser.parse(e.expr);
              } catch (err) {
                console.error("edge parse", e.source, e.target, err);
              }
            }
            model.edges.push(edge);
          });
          Object.values(model.nodes).forEach((n) => {
            if (n.type === "expr" && n.fn) {
              n.deps = n.fn.variables().filter((v) => model.nodes[v]);
            }
          });
          const inDeg = {};
          Object.keys(model.nodes).forEach((id) => inDeg[id] = 0);
          Object.values(model.nodes).forEach((n) => n.deps.forEach((d) => inDeg[n.id]++));
          const q = [];
          Object.keys(inDeg).forEach((id) => {
            if (inDeg[id] === 0) q.push(id);
          });
          const order = [];
          while (q.length) {
            const id = q.shift();
            order.push(id);
            Object.values(model.nodes).forEach((n) => {
              if (n.deps.includes(id)) {
                inDeg[n.id]--;
                if (inDeg[n.id] === 0) q.push(n.id);
              }
            });
          }
          Object.keys(model.nodes).forEach((id) => {
            if (!order.includes(id)) order.push(id);
          });
          model.order = order;
          return model;
        }
        __name(parseModel, "parseModel");
        function simulateStep(state, t) {
          const initials = model && model.initials ? model.initials : {};
          const prev = state[t - 1] || {};
          const cur = {};
          const tol = 1e-6, maxIter = 8;
          let iter = 0, changed = true;
          while (changed && iter < maxIter) {
            changed = false;
            for (const id of model.order) {
              const n = model.nodes[id];
              if (n.type === "init") {
                cur[id] = model.initials[id];
                continue;
              }
              const ctx = Object.assign({}, simParams, prev, cur, {
                delay: /* @__PURE__ */ __name(function(name, d) {
                  d = typeof d === "number" ? d : 1;
                  const tt = t - d;
                  if (tt < 0) return initials[name] || 0;
                  const st = state[tt];
                  return st && st[name] != null ? st[name] : initials[name] || 0;
                }, "delay")
              });
              let val = 0;
              try {
                val = n.fn ? n.fn.evaluate(ctx) : 0;
              } catch (e) {
                console.error("eval", id, e);
              }
              if (cur[id] === void 0 || Math.abs(cur[id] - val) > tol) {
                cur[id] = val;
                changed = true;
              }
            }
            iter++;
          }
          return cur;
        }
        __name(simulateStep, "simulateStep");
        function simulate(params) {
          if (!model || !model.initials) {
            throw new Error("model not ready");
          }
          params = params || {};
          simParams = params;
          const years = params.years || 30;
          const initials = model.initials || {};
          const state = [Object.assign({}, initials)];
          for (var t = 1; t <= years; t++) {
            state[t] = simulateStep(state, t);
          }
          return {
            years: Array.from({ length: years + 1 }, function(_, i) {
              return i;
            }),
            series: state.map(function(s) {
              return s.gw_stock;
            })
          };
        }
        __name(simulate, "simulate");
        function createTextMeasurer(fontSizePx) {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");
          return {
            setFont: /* @__PURE__ */ __name(function(fontFamily) {
              ctx.font = fontSizePx + "px " + fontFamily;
            }, "setFont"),
            measure: /* @__PURE__ */ __name(function(text) {
              return ctx && typeof ctx.measureText === "function" ? ctx.measureText(text).width : 0;
            }, "measure"),
            wrapLines: /* @__PURE__ */ __name(function(text, maxWidth) {
              if (!text) return [""];
              const words = text.split(/\s+/);
              const lines = [];
              let line = words[0] || "";
              for (let i = 1; i < words.length; i++) {
                const word = words[i];
                const test = line + " " + word;
                if (this.measure(test) <= maxWidth) {
                  line = test;
                } else {
                  lines.push(line);
                  line = word;
                }
              }
              lines.push(line);
              return lines;
            }, "wrapLines")
          };
        }
        __name(createTextMeasurer, "createTextMeasurer");
        function measureAndResizeNodes(cy2, opts = {}) {
          const fontSize = opts.fontSize || 15;
          const padding = typeof opts.padding === "number" ? opts.padding : 18;
          const maxTextWidth = opts.maxWidth || opts.maxTextWidth || 260;
          const minWidth = opts.minWidth || 100;
          const minHeight = opts.minHeight || 48;
          const container = cy2.container();
          const comp = window.getComputedStyle(container);
          const fontFamily = comp && comp.fontFamily ? comp.fontFamily : "sans-serif";
          const measurer = createTextMeasurer(fontSize);
          measurer.setFont(fontFamily);
          cy2.batch(() => {
            cy2.nodes().forEach((node) => {
              if (node.isParent && node.isParent()) return;
              const rawLabel = node.data("label") !== void 0 ? String(node.data("label")) : node.id() || "";
              const normalized = rawLabel.replace(/\s+/g, " ").trim();
              const lines = measurer.wrapLines(normalized, maxTextWidth);
              let maxLineWidth = 0;
              lines.forEach((ln) => {
                const w = measurer.measure(ln);
                if (w > maxLineWidth) maxLineWidth = w;
              });
              const lineHeight = Math.ceil(fontSize * 1.3);
              const textHeight = lines.length * lineHeight;
              const newWidth = Math.max(minWidth, Math.ceil(maxLineWidth + padding * 2));
              const newHeight = Math.max(minHeight, Math.ceil(textHeight + padding * 2));
              const multiLabel = lines.join("\n");
              node.data("label", multiLabel);
              node.style({
                "width": newWidth + "px",
                "height": newHeight + "px",
                "text-valign": "center",
                "text-halign": "center"
              });
            });
          });
        }
        __name(measureAndResizeNodes, "measureAndResizeNodes");
        window.measureAndResizeNodes = measureAndResizeNodes;
        let cy;
        let simChart;
        let baseSim;
        function initSimChart() {
          try {
            const el = document.getElementById("sim-chart");
            if (!el) return console.warn("sim-chart not found");
            if (!window.Chart) return console.warn("Chart.js not loaded");
            const ctx = el.getContext("2d");
            if (!window.__wesh_sim_chart) {
              Chart.defaults.font.family = "Vazirmatn, sans-serif";
              window.__wesh_sim_chart = new Chart(ctx, {
                type: "line",
                data: { labels: [], datasets: [{ label: "\u067E\u0627\u06CC\u0647", data: [], borderWidth: 2, fill: false }] },
                options: { responsive: true, maintainAspectRatio: false }
              });
            }
            simChart = window.__wesh_sim_chart;
            __chartReady = true;
            whenModelReady(initBaselineIfPossible);
          } catch (e) {
            console.error("initSimChart failed", e);
          }
        }
        __name(initSimChart, "initSimChart");
        document.addEventListener("DOMContentLoaded", initSimChart);
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(initSimChart).catch(function() {
            initSimChart();
          });
        }
        function initBaselineIfPossible() {
          if (!window.__wesh_sim_chart) return;
          try {
            if (typeof simulate === "function" && model && model.initials) {
              var out = simulate({ eff: 0, dem: 0, delay: 0, years: 30 });
              var labels = out.years || (out.baseline ? out.baseline.map(function(_, i) {
                return i;
              }) : []);
              baseSim = { years: labels, baseline: out.baseline || out.series || [] };
              updateChartFromSim(baseSim);
            } else if (!window.__wesh_sim_chart.data.labels.length) {
              baseSim = {
                years: Array.from({ length: 30 }, function(_, i) {
                  return i;
                }),
                baseline: Array.from({ length: 30 }, function() {
                  return 100;
                })
              };
              updateChartFromSim(baseSim);
            }
          } catch (e) {
            console.error("baseline init failed", e);
          }
        }
        __name(initBaselineIfPossible, "initBaselineIfPossible");
        function updateChartFromSim(out) {
          if (!window.__wesh_sim_chart || !out) return;
          const labels = out.years || Array.from({ length: out.baseline ? out.baseline.length : out.series ? out.series.length : 0 }, (_, i) => i);
          window.__wesh_sim_chart.data.labels = labels;
          const datasets = [{
            label: "\u067E\u0627\u06CC\u0647",
            data: out.baseline || out.series || [],
            borderWidth: 2,
            borderColor: "#0ea5e9",
            backgroundColor: "rgba(14,165,233,0.1)",
            fill: false
          }];
          if (out.scenario) datasets.push({
            label: "\u0633\u0646\u0627\u0631\u06CC\u0648",
            data: out.scenario,
            borderWidth: 2,
            borderColor: "rgb(220,38,38)",
            backgroundColor: "rgba(220,38,38,0.1)",
            fill: false
          });
          window.__wesh_sim_chart.data.datasets = datasets;
          window.__wesh_sim_chart.update();
        }
        __name(updateChartFromSim, "updateChartFromSim");
        function seedByGroup(cy2) {
          var groups2 = {};
          cy2.nodes().forEach(function(n) {
            var g = n.data("group") || "_";
            (groups2[g] = groups2[g] || []).push(n);
          });
          var gNames = Object.keys(groups2);
          var cols = Math.ceil(Math.sqrt(gNames.length));
          var gx = 0, gy = 0, gi = 0;
          gNames.forEach(function(g) {
            var baseX = gi % cols * 800 + 200;
            var baseY = Math.floor(gi / cols) * 600 + 200;
            var arr = groups2[g];
            arr.forEach(function(n, j) {
              var col = j % 3, row = Math.floor(j / 3);
              var nx = baseX + col * 260 + (Math.random() * 20 - 10);
              var ny = baseY + row * 220 + (Math.random() * 20 - 10);
              n.position({ x: nx, y: ny });
            });
            gi++;
          });
        }
        __name(seedByGroup, "seedByGroup");
        function normalizeModel(m) {
          const nodes = (m.nodes || []).map(function(n, i) {
            const id = n.id || n.data && n.data.id || "n_" + i;
            return { data: { id, label: n.label, group: n.group, unit: n.unit, desc: n.desc } };
          });
          const edges = (m.edges || []).map(function(e, i) {
            const id = e.id || e.data && e.data.id || (e.source + "__" + e.target + "__" + (e.sign || "") || "e_" + i);
            return { data: { id, source: e.source, target: e.target, sign: e.sign, label: e.label || (e.sign === "-" ? "\u2212" : "+"), weight: typeof e.weight === "number" ? e.weight : void 0, delayYears: typeof e.delayYears === "number" ? e.delayYears : 0 } };
          });
          return { nodes, edges };
        }
        __name(normalizeModel, "normalizeModel");
        async function loadModelFromUrl(url) {
          var _a;
          const res = await fetch(url, { cache: "no-store" }).catch((e) => {
            console.error("[CLD] fetch failed", e);
          });
          if (!res || !res.ok) {
            console.error("[CLD] fetch bad status", res && res.status);
            return;
          }
          let model2;
          try {
            model2 = await res.json();
          } catch (e) {
            console.error("[CLD] invalid model JSON", e);
            return;
          }
          const mapped = toCyElements(model2);
          console.table({ rawNodes: mapped.rawNodes.length, rawEdges: mapped.rawEdges.length });
          console.log("first raw node", mapped.rawNodes[0]);
          const graph = mapped.graph;
          if ((_a = window.graphStore) == null ? void 0 : _a.setGraph) window.graphStore.setGraph(graph);
          else {
            window.graphStore = window.graphStore || {};
            window.graphStore.graph = graph;
          }
          window.kernel = window.kernel || {};
          window.kernel.graph = graph;
          modelData = model2;
          if (typeof parseModel === "function") {
            try {
              parseModel(model2);
            } catch (e) {
              console.error("[CLD] parse model", e);
            }
          }
          if (typeof markModelReady === "function") markModelReady();
          if (__chartReady && typeof initBaselineIfPossible === "function") initBaselineIfPossible();
          const els = { nodes: mapped.nodes, edges: mapped.edges };
          window.__lastElementsForCy = els;
          const inject = /* @__PURE__ */ __name(() => {
            var _a2, _b, _c, _d, _e, _f, _g, _h;
            console.debug("[CLD] to-cy arrays", { nNodes: els.nodes.length, nEdges: els.edges.length, sampleNode: els.nodes[0] });
            if (!els || !Array.isArray(els.nodes)) {
              console.warn("[CLD] invalid els");
            }
            try {
              if ((_a2 = window.graphStore) == null ? void 0 : _a2.restore) {
                window.graphStore.restore({ elements: { nodes: els.nodes, edges: els.edges } });
              } else {
                const C = cldGetCy();
                if (!C) return;
                if (C.startBatch) C.startBatch();
                try {
                  if (typeof C.json === "function") {
                    C.elements().remove();
                    C.json({ elements: { nodes: els.nodes, edges: els.edges } });
                  } else {
                    C.add(els.nodes.concat(els.edges));
                  }
                } finally {
                  if (C.endBatch) try {
                    C.endBatch();
                  } catch (_) {
                  }
                }
              }
            } catch (err) {
              console.error("[CLD] inject failed", err);
              return;
            }
            const cy2 = cldGetCy();
            const nn = ((_b = cy2 == null ? void 0 : cy2.nodes()) == null ? void 0 : _b.length) || 0;
            const ne = ((_c = cy2 == null ? void 0 : cy2.edges()) == null ? void 0 : _c.length) || 0;
            console.log("[CLD] added to cy", { cyNodes: nn, cyEdges: ne });
            try {
              const algo = (window == null ? void 0 : window.cldLayoutName) || "dagre";
              const layout = cy2.layout({ name: algo, rankDir: "LR", fit: true });
              layout.run();
              cy2.once("layoutstop", () => {
                var _a3, _b2, _c2, _d2, _e2;
                try {
                  cy2.fit();
                } catch (_) {
                }
                (_b2 = (_a3 = window.waterKernel) == null ? void 0 : _a3.emit) == null ? void 0 : _b2.call(_a3, "MODEL_LOADED", graph);
                (_d2 = (_c2 = window.waterKernel) == null ? void 0 : _c2.emit) == null ? void 0 : _d2.call(_c2, "GRAPH_READY", graph);
                (_e2 = window.__WATER_CLD_RESOLVE__) == null ? void 0 : _e2.call(window);
              });
            } catch (e) {
              console.warn("[CLD] layout/fit error", e);
              (_e = (_d = window.waterKernel) == null ? void 0 : _d.emit) == null ? void 0 : _e.call(_d, "MODEL_LOADED", graph);
              (_g = (_f = window.waterKernel) == null ? void 0 : _f.emit) == null ? void 0 : _g.call(_f, "GRAPH_READY", graph);
              (_h = window.__WATER_CLD_RESOLVE__) == null ? void 0 : _h.call(window);
            }
          }, "inject");
          const doInject = /* @__PURE__ */ __name(() => inject(), "doInject");
          if (window.graphStore && typeof window.graphStore.ready === "function") {
            window.graphStore.ready().then(() => doInject()).catch(() => whenCyReady(() => doInject()));
          } else {
            whenCyReady(() => doInject());
          }
        }
        __name(loadModelFromUrl, "loadModelFromUrl");
        window.loadModelFromUrl = loadModelFromUrl;
        function resetScenario() {
          if (!baseSim) return;
          updateChartFromSim(baseSim);
          const effInput = document.getElementById("p-eff");
          const demInput = document.getElementById("p-dem");
          const delayInput = document.getElementById("p-delay");
          if (effInput) {
            effInput.value = 0;
            effInput.dispatchEvent(new Event("input"));
          }
          if (demInput) {
            demInput.value = 0;
            demInput.dispatchEvent(new Event("input"));
          }
          if (delayInput) {
            delayInput.value = 0;
            delayInput.dispatchEvent(new Event("input"));
          }
        }
        __name(resetScenario, "resetScenario");
        document.addEventListener("DOMContentLoaded", async function() {
          const container = document.getElementById("cy");
          if (!container) {
            console.warn("cy container not found");
            return;
          }
          if (typeof window.cytoscape === "undefined") {
            console.warn("cytoscape not loaded");
            return;
          }
          const cy2 = cldGetCy();
          if (!cy2) {
            console.warn("[CLD init] cy missing");
            return;
          }
          if (window.tippy) {
            tippy(".hint", { allowHTML: true, theme: "light", delay: [80, 0], placement: "bottom", maxWidth: 320, interactive: true });
          }
          const rootStyle = getComputedStyle(document.documentElement);
          const colorPos = rootStyle.getPropertyValue("--pos").trim() || "#16a34a";
          const colorNeg = rootStyle.getPropertyValue("--neg").trim() || "#dc2626";
          const colorAccent = rootStyle.getPropertyValue("--accent").trim() || "#58a79a";
          const colorLine = rootStyle.getPropertyValue("--line").trim() || "#2f6158";
          const colorText = rootStyle.getPropertyValue("--text").trim() || "#e6f1ef";
          const baseStyle = [
            { selector: "node", style: { "background-color": "#f8faf9", "border-width": 2 } },
            { selector: "node[label][!isGroup]", style: { "label": "data(label)", "font-family": "Vazirmatn, sans-serif", "text-wrap": "wrap", "text-max-width": 260, "font-size": 15, "font-weight": 500, "color": "#0a0f0e", "text-valign": "center", "text-halign": "center", "text-margin-y": 0, "text-outline-width": 0, "background-color": "#eaf3f1", "shape": "round-rectangle", "padding": "12px 18px", "border-width": 3, "border-color": "#ffffff", "min-zoomed-font-size": 8 } },
            { selector: "node.compound", style: { "shape": "round-rectangle", "background-color": "#ffffff", "background-opacity": 0.12, "border-color": "#2b3c39", "border-width": 1.5, "label": "data(label)", "text-valign": "top", "text-halign": "center", "font-size": 12, "color": "#cfe7e2", "padding": 24, "font-family": "Vazirmatn, sans-serif" } },
            { selector: "edge", style: { "curve-style": "bezier", "width": /* @__PURE__ */ __name((ele) => 2 + (ele.data("weight") || 0), "width"), "line-style": /* @__PURE__ */ __name((ele) => ele.data("delayYears") > 0 ? "dashed" : "solid", "line-style"), "line-dash-pattern": /* @__PURE__ */ __name((ele) => ele.data("delayYears") > 0 ? [8, 6] : [0], "line-dash-pattern"), "target-arrow-shape": "triangle", "arrow-scale": 1.2, "line-color": colorLine, "target-arrow-color": colorLine, "source-arrow-color": colorLine, "label": "data(label)", "text-rotation": "autorotate", "text-background-color": "rgba(0,0,0,0.35)", "text-background-opacity": 1, "text-background-padding": 1, "text-wrap": "wrap", "text-max-width": 100, "font-family": "Vazirmatn, sans-serif", "font-size": 12, "color": colorText } },
            { selector: "edge.pos", style: { "line-color": colorPos, "target-arrow-color": colorPos, "source-arrow-color": colorPos } },
            { selector: "edge.neg", style: { "line-color": colorNeg, "target-arrow-color": colorNeg, "source-arrow-color": colorNeg } },
            { selector: ".hidden", style: { "display": "none" } },
            { selector: ".faded", style: { "opacity": 0.1 } },
            { selector: ".highlighted", style: { "border-color": "#facc15", "border-width": 3 } },
            { selector: ".highlight", style: { "border-color": colorAccent, "border-width": 3 } },
            { selector: "edge.highlight", style: { "line-color": colorAccent, "target-arrow-color": colorAccent, "source-arrow-color": colorAccent, "width": 4 } }
          ];
          cy2.style().fromJson(baseStyle).update();
          cy2.layout({ name: "grid" }).run();
          (function() {
            var showAt = 1;
            function syncEdgeLabels() {
              var z = cy2.zoom();
              cy2.batch(function() {
                cy2.edges().forEach(function(e) {
                  e.style("label", z >= showAt ? e.data("label") : "");
                });
              });
            }
            __name(syncEdgeLabels, "syncEdgeLabels");
            window.__WATER_CLD_READY__.then(function() {
              cy2.on("zoom", syncEdgeLabels);
              syncEdgeLabels();
            });
          })();
          (function() {
            var dim = 0.15;
            window.__WATER_CLD_READY__.then(function() {
              cy2.on("mouseover", "node", function(evt) {
                var n = evt.target;
                var hood = n.closedNeighborhood();
                cy2.batch(function() {
                  var _a;
                  const others = cy2.elements().difference(hood);
                  if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                    CLD_SAFE.safeAddClass(others, "faded");
                  } else {
                    console.warn("CLD_SAFE.safeAddClass missing");
                    if (others == null ? void 0 : others.forEach) {
                      others.forEach((el) => {
                        var _a2;
                        return (_a2 = el.classList) == null ? void 0 : _a2.add("faded");
                      });
                    } else {
                      (_a = others == null ? void 0 : others.classList) == null ? void 0 : _a.add("faded");
                    }
                  }
                  hood.removeClass("faded");
                });
              });
              cy2.on("mouseout", "node", function() {
                cy2.elements().removeClass("faded");
              });
              cy2.style().selector(".faded").style({ "opacity": dim }).update();
            });
          })();
          window.__WATER_CLD_READY__.then(function() {
            cy2.style().selector("node").style({
              "width": "label",
              "height": "label",
              "text-wrap": "wrap",
              "text-max-width": 240,
              "padding": "16px",
              "font-size": 15,
              "font-weight": 600,
              "color": "#0a0f0e",
              "background-color": "#f8fafc",
              // NOTE: Cytoscape از CSS var پشتیبانی مستقیم ندارد
              "border-color": "#94a3b8",
              "border-width": 1,
              "shape": "round-rectangle"
            }).selector("node.compound").style({ "width": "auto", "height": "auto" }).selector("edge").style({
              "curve-style": "bezier",
              "width": "mapData(weight, 0, 1.2, 2, 6)",
              "target-arrow-shape": "triangle",
              "line-cap": "round",
              "label": "data(label)",
              "text-rotation": "autorotate",
              "font-size": 11,
              "text-background-color": "rgba(11,18,32,.65)",
              "text-background-opacity": 1,
              "text-background-shape": "roundrectangle",
              "text-background-padding": 3,
              "color": "#e6f1ff"
            }).selector('edge[sign = "+"]').style({ "line-color": "#16a34a", "target-arrow-color": "#16a34a" }).selector('edge[sign = "-"]').style({ "line-color": "#dc2626", "target-arrow-color": "#dc2626" }).selector("edge[delayYears > 0]").style({ "line-style": "dashed", "line-dash-pattern": [8, 6] }).update();
            cy2.on("layoutstop", function() {
              if (window.measureAndResizeNodes) window.measureAndResizeNodes(cy2, { maxWidth: 240, padding: 16 });
            });
            if (document.fonts && document.fonts.ready) {
              document.fonts.ready.then(function() {
                if (window.measureAndResizeNodes) window.measureAndResizeNodes(cy2, { maxWidth: 240, padding: 16 });
              });
            }
            cy2.on("ready", () => setTimeout(() => window.__cldSafeFit(cy2), 0));
            window.addEventListener("resize", () => requestAnimationFrame(() => window.__cldSafeFit(cy2)));
            window.addEventListener("orientationchange", () => setTimeout(() => window.__cldSafeFit(cy2), 150));
            if (document.fonts && document.fonts.ready) {
              document.fonts.ready.then(() => setTimeout(() => window.__cldSafeFit(cy2), 60));
            }
          });
          (function() {
            if (!window.tippy) return;
            function esc(s) {
              return s == null ? "" : String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m]);
            }
            __name(esc, "esc");
            function makeClientRectFn(ele, cy3) {
              return /* @__PURE__ */ __name(function getClientRect() {
                const bb = ele.renderedBoundingBox({ includeLabels: true });
                const rect = cy3.container().getBoundingClientRect();
                const w = Math.max(10, bb.w || bb.x2 - bb.x1);
                const h = Math.max(10, bb.h || bb.y2 - bb.y1);
                const left = rect.left + (bb.x1 || 0);
                const top = rect.top + (bb.y1 || 0);
                return {
                  width: w,
                  height: h,
                  top,
                  left,
                  right: left + w,
                  bottom: top + h
                };
              }, "getClientRect");
            }
            __name(makeClientRectFn, "makeClientRectFn");
            function buildContent(ele) {
              const d = ele.data() || {};
              const box = document.createElement("div");
              box.dir = "rtl";
              box.style.whiteSpace = "normal";
              box.style.maxWidth = "260px";
              const parts = [];
              if (ele.isNode && ele.isNode()) {
                parts.push(`<div style="font-weight:600;margin-bottom:4px">${esc(d.label || d.id || "")}</div>`);
                if (d.desc) parts.push(`<div>${esc(d.desc)}</div>`);
                const meta = [];
                if (d.unit) meta.push(`\u0648\u0627\u062D\u062F: ${esc(d.unit)}`);
                if (d.group) meta.push(`\u06AF\u0631\u0648\u0647: ${esc(d.group)}`);
                if (meta.length) parts.push(`<div style="opacity:.8;margin-top:4px">${meta.join(" \u2022 ")}</div>`);
              } else {
                parts.push(`<div style="font-weight:600;margin-bottom:4px">${esc(d.label || "")}</div>`);
                const meta = [];
                if (d.sign) meta.push(`\u0642\u0637\u0628\u06CC\u062A: ${d.sign === "+" ? "\u0645\u062B\u0628\u062A (+)" : "\u0645\u0646\u0641\u06CC (\u2212)"}`);
                if (typeof d.weight === "number") meta.push(`\u0648\u0632\u0646: ${d.weight}`);
                if (typeof d.delayYears === "number") meta.push(`\u062A\u0623\u062E\u06CC\u0631: ${d.delayYears} \u0633\u0627\u0644`);
                if (meta.length) parts.push(`<div>${meta.join(" \u2022 ")}</div>`);
              }
              box.innerHTML = parts.join("");
              return box;
            }
            __name(buildContent, "buildContent");
            function createTip(ele, cy3) {
              const tip = tippy(document.body, {
                trigger: "manual",
                appendTo: /* @__PURE__ */ __name(() => cy3.container(), "appendTo"),
                allowHTML: true,
                interactive: false,
                arrow: true,
                placement: "top",
                getReferenceClientRect: makeClientRectFn(ele, cy3),
                content: buildContent(ele),
                theme: "light",
                hideOnClick: false
              });
              return tip;
            }
            __name(createTip, "createTip");
            function bindCyTooltips(cy3) {
              cy3.on("mouseover", "node, edge", function(evt) {
                const ele = evt.target;
                if (ele.scratch("_tippy")) return;
                const tip = createTip(ele, cy3);
                ele.scratch("_tippy", tip);
                tip.show();
              });
              cy3.on("mouseout tap", "node, edge", function(evt) {
                const tip = evt.target.scratch("_tippy");
                if (tip) {
                  tip.destroy();
                  evt.target.scratch("_tippy", null);
                }
              });
              const refreshVisible = /* @__PURE__ */ __name(() => {
                cy3.$("node, edge").forEach((ele) => {
                  const tip = ele.scratch("_tippy");
                  if (tip) {
                    tip.setProps({ getReferenceClientRect: makeClientRectFn(ele, cy3) });
                    if (tip.popperInstance && tip.popperInstance.update) tip.popperInstance.update();
                  }
                });
              }, "refreshVisible");
              cy3.on("pan zoom drag position", refreshVisible);
              cy3.on("layoutstop", refreshVisible);
              cy3.on("remove", "node, edge", function(evt) {
                const tip = evt.target.scratch("_tippy");
                if (tip) tip.destroy();
              });
            }
            __name(bindCyTooltips, "bindCyTooltips");
            window.__WATER_CLD_READY__.then(function() {
              bindCyTooltips(cy2);
            });
          })();
          window.__WATER_CLD_READY__.then(function() {
            cy2.on("dbltap", "node", (n) => {
              var _a;
              if (n.target.locked()) {
                n.target.unlock().removeClass("highlight");
              } else {
                const t = n.target.lock();
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(t, "highlight");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  (_a = t == null ? void 0 : t.classList) == null ? void 0 : _a.add("highlight");
                }
              }
            });
          });
          const layoutSel = document.getElementById("layout");
          const layoutPresetSel = document.getElementById("layout-preset");
          if (layoutPresetSel) layoutPresetSel.addEventListener("change", () => {
            const val = layoutPresetSel.value;
            if (!val) {
              if (layoutSel) runLayout(layoutSel.value);
              return;
            }
            if (window.getLayoutPreset) {
              const opt = window.getLayoutPreset(val);
              if (opt) {
                try {
                  cy2.layout(opt).run();
                } catch (e) {
                  console.error("layout preset", e);
                }
              }
            }
          });
          const fPos = document.getElementById("f-pos");
          const fNeg = document.getElementById("f-neg");
          const fGroup = document.getElementById("f-group");
          const fDelay = document.getElementById("f-delay");
          const qInput = document.getElementById("q");
          const loopsList = document.getElementById("loops-list");
          const loopsBtn = document.getElementById("btn-loops");
          const loopsPanel = document.getElementById("panel-loops");
          const wMin = document.getElementById("flt-weight-min");
          const dMax = document.getElementById("flt-delay-max");
          const wMinOut = document.getElementById("flt-weight-min-val");
          const dMaxOut = document.getElementById("flt-delay-max-val");
          function applyFilters() {
            cy2.elements().removeClass("hidden");
            const showPos = !(fPos && fPos.classList.contains("off"));
            const showNeg = !(fNeg && fNeg.classList.contains("off"));
            const groupVal = fGroup ? fGroup.value : "";
            const delayOnly = fDelay ? fDelay.checked : false;
            cy2.edges().forEach((e) => {
              var _a;
              const signOk = e.data("sign") === "+" ? showPos : showNeg;
              const groupOk = !groupVal || e.source().data("parent") === groupVal && e.target().data("parent") === groupVal;
              const delayOk = !delayOnly || e.data("delayYears") > 0;
              if (!(signOk && groupOk && delayOk)) {
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(e, "hidden");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  (_a = e == null ? void 0 : e.classList) == null ? void 0 : _a.add("hidden");
                }
              }
            });
            cy2.nodes().forEach((n) => {
              var _a;
              if (groupVal && n.data("parent") !== groupVal && n.id() !== groupVal) {
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(n, "hidden");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  (_a = n == null ? void 0 : n.classList) == null ? void 0 : _a.add("hidden");
                }
              }
            });
            window.__cldSafeFit(cy2);
          }
          __name(applyFilters, "applyFilters");
          function bindOut(inp, out) {
            if (inp && out) {
              out.textContent = String(inp.value);
              inp.addEventListener("input", () => {
                out.textContent = String(inp.value);
              });
            }
          }
          __name(bindOut, "bindOut");
          bindOut(wMin, wMinOut);
          bindOut(dMax, dMaxOut);
          function applyEdgeFilters() {
            cy2.edges().removeClass("hidden");
            const w = wMin ? Number(wMin.value) : 0;
            const d = dMax ? Number(dMax.value) : 0;
            cy2.edges().forEach((e) => {
              var _a;
              if (e.data("weight") < w || e.data("delayYears") > d) {
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(e, "hidden");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  (_a = e == null ? void 0 : e.classList) == null ? void 0 : _a.add("hidden");
                }
              }
            });
            window.__cldSafeFit(cy2);
          }
          __name(applyEdgeFilters, "applyEdgeFilters");
          if (wMin) wMin.addEventListener("input", applyEdgeFilters, { passive: true });
          if (dMax) dMax.addEventListener("input", applyEdgeFilters, { passive: true });
          if (fPos) fPos.addEventListener("click", () => {
            fPos.classList.toggle("off");
            applyFilters();
          });
          if (fNeg) fNeg.addEventListener("click", () => {
            fNeg.classList.toggle("off");
            applyFilters();
          });
          if (fGroup) fGroup.addEventListener("change", applyFilters);
          if (fDelay) fDelay.addEventListener("change", applyFilters);
          applyFilters();
          applyEdgeFilters();
          if (qInput) {
            qInput.addEventListener("input", () => {
              var _a, _b, _c;
              cy2.elements().removeClass("faded");
              cy2.nodes().removeClass("highlighted");
              const val = qInput.value.trim();
              if (val) {
                let re;
                try {
                  re = new RegExp(val, "i");
                } catch (err) {
                  return;
                }
                const nodesAll = cy2.nodes();
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(nodesAll, "faded");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  if (nodesAll == null ? void 0 : nodesAll.forEach) {
                    nodesAll.forEach((el) => {
                      var _a2;
                      return (_a2 = el.classList) == null ? void 0 : _a2.add("faded");
                    });
                  } else {
                    (_a = nodesAll == null ? void 0 : nodesAll.classList) == null ? void 0 : _a.add("faded");
                  }
                }
                const edgesAll = cy2.edges();
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(edgesAll, "faded");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  if (edgesAll == null ? void 0 : edgesAll.forEach) {
                    edgesAll.forEach((el) => {
                      var _a2;
                      return (_a2 = el.classList) == null ? void 0 : _a2.add("faded");
                    });
                  } else {
                    (_b = edgesAll == null ? void 0 : edgesAll.classList) == null ? void 0 : _b.add("faded");
                  }
                }
                const matches = cy2.nodes().filter((n) => re.test(n.data("label")));
                matches.removeClass("faded");
                if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                  CLD_SAFE.safeAddClass(matches, "highlighted");
                } else {
                  console.warn("CLD_SAFE.safeAddClass missing");
                  if (matches == null ? void 0 : matches.forEach) {
                    matches.forEach((el) => {
                      var _a2;
                      return (_a2 = el.classList) == null ? void 0 : _a2.add("highlighted");
                    });
                  } else {
                    (_c = matches == null ? void 0 : matches.classList) == null ? void 0 : _c.add("highlighted");
                  }
                }
                matches.connectedEdges().removeClass("faded");
              }
            });
          }
          if (loopsBtn) loopsBtn.addEventListener("click", () => {
            populateLoops();
            if (loopsPanel) loopsPanel.open = true;
          });
          function populateLoops() {
            if (!loopsList || !window.cydetectLoops) return;
            loopsList.innerHTML = "";
            const cycles = window.cydetectLoops(cy2) || [];
            cycles.forEach((cycle) => {
              const li = document.createElement("li");
              const labels = (cycle.nodeIds || []).map((id) => cy2.getElementById(id).data("label") || id);
              const negCount = (cycle.edgeIds || []).filter((id) => cy2.getElementById(id).data("sign") === "-").length;
              const sign = negCount % 2 === 0 ? "+" : "-";
              li.textContent = `${sign}: ${labels.join(" \u2192 ")}`;
              li.style.cursor = "pointer";
              li.addEventListener("click", () => {
                cy2.elements().removeClass("highlight");
                const col = cy2.collection();
                (cycle.nodeIds || []).forEach((id) => {
                  var _a;
                  const n = cy2.getElementById(id);
                  if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                    CLD_SAFE.safeAddClass(n, "highlight");
                  } else {
                    console.warn("CLD_SAFE.safeAddClass missing");
                    (_a = n == null ? void 0 : n.classList) == null ? void 0 : _a.add("highlight");
                  }
                  col.merge(n);
                });
                (cycle.edgeIds || []).forEach((id) => {
                  var _a;
                  const e = cy2.getElementById(id);
                  if (CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass) {
                    CLD_SAFE.safeAddClass(e, "highlight");
                  } else {
                    console.warn("CLD_SAFE.safeAddClass missing");
                    (_a = e == null ? void 0 : e.classList) == null ? void 0 : _a.add("highlight");
                  }
                  col.merge(e);
                });
                cy2.fit(col, 50);
              });
              loopsList.appendChild(li);
            });
          }
          __name(populateLoops, "populateLoops");
          const importInput = document.getElementById("import-json");
          if (importInput) {
            importInput.addEventListener("change", (e) => {
              const file = e.target.files[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = (ev) => {
                try {
                  const data = JSON.parse(ev.target.result);
                  const groups2 = data.groups || [];
                  if (groupSelect) {
                    groupSelect.innerHTML = '<option value="">\u0647\u0645\u0647 \u06AF\u0631\u0648\u0647\u200C\u0647\u0627</option>';
                    groups2.forEach((g) => {
                      const opt = document.createElement("option");
                      opt.value = g.id;
                      opt.textContent = g.id;
                      groupSelect.appendChild(opt);
                    });
                  }
                  const els = [];
                  groups2.forEach((g) => els.push({ data: { id: g.id, color: g.color, isGroup: true }, classes: "compound group" }));
                  (data.nodes || []).forEach((n) => els.push({ data: { id: n.id, label: n.label, parent: n.group, desc: n.desc, unit: n.unit } }));
                  (data.edges || []).forEach((e2, idx) => els.push({
                    data: {
                      id: `e${idx}`,
                      source: e2.source,
                      target: e2.target,
                      label: e2.label,
                      sign: e2.sign,
                      weight: e2.weight || 0,
                      delayYears: e2.delayYears || 0
                    },
                    classes: e2.sign === "-" ? "neg" : "pos"
                  }));
                  cy2.elements().remove();
                  cy2.add(els);
                  runLayout("elk");
                  updateSignFilter();
                } catch (err) {
                  console.error("Import JSON failed", err);
                }
              };
              reader.readAsText(file);
            });
          }
          const legend = document.getElementById("legend");
          if (legend) {
            const items = [
              '<span class="badge pos"><i class="dot" style="background:var(--pos)"></i>\u0645\u062B\u0628\u062A</span>',
              '<span class="badge neg"><i class="dot" style="background:var(--neg)"></i>\u0645\u0646\u0641\u06CC</span>',
              '<span class="badge dashed"><i class="dot" style="border:2px dashed #cbd5e1"></i>\u062A\u0627\u062E\u06CC\u0631\u062F\u0627\u0631/\u063A\u06CC\u0631\u0645\u0633\u062A\u0642\u06CC\u0645</span>'
            ];
            groups.forEach((g) => items.push(`<span class="badge" style="border-color:${g.color}"><i class="dot" style="background:${g.color}"></i>${g.id}</span>`));
            legend.innerHTML = items.join("");
          }
          const effInput = document.getElementById("p-eff");
          const demInput = document.getElementById("p-dem");
          const delayInput = document.getElementById("p-delay");
          const runBtn = document.getElementById("btn-run");
          const resetBtn = document.getElementById("btn-reset");
          const exportBtn = document.getElementById("btn-export-csv");
          const scNew = document.getElementById("sc-new");
          const scSave = document.getElementById("sc-save");
          const scLoad = document.getElementById("sc-load");
          const scDelete = document.getElementById("sc-delete");
          const scTable = document.getElementById("sc-table");
          const sensParam = document.getElementById("sens-param");
          const sensMin = document.getElementById("sens-min");
          const sensMax = document.getElementById("sens-max");
          const sensStep = document.getElementById("sens-step");
          const sensRun = document.getElementById("sens-run");
          const sensProgress = document.getElementById("sens-progress");
          let selectedScenario = null;
          let lastSensitivity = null;
          const worker = new Worker("/assets/sim-worker.js");
          worker.postMessage({ cmd: "init" });
          const effVal = document.getElementById("val-eff");
          const demVal = document.getElementById("val-dem");
          const delayVal = document.getElementById("val-delay");
          function bindSlider(input, output) {
            if (input && output) {
              output.textContent = input.value;
              input.addEventListener("input", () => {
                output.textContent = input.value;
              });
            }
          }
          __name(bindSlider, "bindSlider");
          bindSlider(effInput, effVal);
          bindSlider(demInput, demVal);
          bindSlider(delayInput, delayVal);
          const scTbody = scTable ? scTable.querySelector("tbody") : null;
          function refreshScenarioTable() {
            if (!scTbody) return;
            scTbody.innerHTML = "";
            const scs = getScenarios();
            Object.entries(scs).forEach(([name, p]) => {
              const tr = document.createElement("tr");
              tr.innerHTML = `<td>${name}</td><td>${p.eff}</td><td>${p.dem}</td><td>${p.delay}</td>`;
              tr.addEventListener("click", () => {
                selectedScenario = name;
                Array.from(scTbody.children).forEach((r) => r.classList.remove("selected"));
                CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass(tr, "selected");
              });
              scTbody.appendChild(tr);
            });
          }
          __name(refreshScenarioTable, "refreshScenarioTable");
          refreshScenarioTable();
          if (scNew) scNew.addEventListener("click", () => {
            selectedScenario = null;
            resetScenario();
            if (scTbody) Array.from(scTbody.children).forEach((r) => r.classList.remove("selected"));
          });
          if (scSave) scSave.addEventListener("click", () => {
            const name = prompt("Scenario name", selectedScenario || "");
            if (!name) return;
            const scs = getScenarios();
            scs[name] = {
              eff: parseFloat(effInput.value),
              dem: parseFloat(demInput.value),
              delay: parseInt(delayInput.value)
            };
            setScenarios(scs);
            selectedScenario = name;
            refreshScenarioTable();
          });
          if (scLoad) scLoad.addEventListener("click", () => {
            const scs = getScenarios();
            if (!selectedScenario || !scs[selectedScenario]) return;
            const p = scs[selectedScenario];
            effInput.value = p.eff;
            demInput.value = p.dem;
            delayInput.value = p.delay;
            effInput.dispatchEvent(new Event("input"));
            demInput.dispatchEvent(new Event("input"));
            delayInput.dispatchEvent(new Event("input"));
            runBtn.click();
          });
          if (scDelete) scDelete.addEventListener("click", () => {
            const scs = getScenarios();
            if (selectedScenario && scs[selectedScenario]) {
              delete scs[selectedScenario];
              setScenarios(scs);
              selectedScenario = null;
              refreshScenarioTable();
            }
          });
          if (exportBtn) exportBtn.addEventListener("click", () => {
            if (!simChart) return;
            const years = simChart.data.labels || [];
            const ds = simChart.data.datasets || [];
            let csv = "year,baseline,scenario\n";
            for (let i = 0; i < years.length; i++) {
              const row = [years[i]];
              row.push(ds[0] && ds[0].data ? ds[0].data[i] : "");
              row.push(ds[1] && ds[1].data ? ds[1].data[i] : "");
              csv += row.join(",") + "\n";
            }
            const blob = new Blob([csv], { type: "text/csv" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "results.csv";
            a.click();
            URL.revokeObjectURL(url);
          });
          worker.onmessage = (e) => {
            if (e.data.type === "progress") {
              if (sensProgress) sensProgress.textContent = Math.round(e.data.value * 100) + "%";
            } else if (e.data.type === "complete") {
              if (sensProgress) sensProgress.textContent = "";
              const { years, p10, p50, p90 } = e.data;
              while (simChart.data.datasets.length > 1) simChart.data.datasets.pop();
              simChart.data.labels = years;
              simChart.data.datasets.push({
                label: "p90",
                data: p90,
                borderColor: "rgba(0,0,0,0)",
                fill: false
              });
              simChart.data.datasets.push({
                label: "p10",
                data: p10,
                borderColor: "rgba(0,0,0,0)",
                backgroundColor: "rgba(99,102,241,0.2)",
                fill: "-1"
              });
              simChart.data.datasets.push({
                label: "p50",
                data: p50,
                borderColor: "#f97316",
                backgroundColor: "rgba(249,115,22,0.1)",
                fill: false
              });
              simChart.update();
              lastSensitivity = { years, p10, p50, p90 };
            }
          };
          if (sensRun) sensRun.addEventListener("click", (e) => {
            e.preventDefault();
            const param = sensParam.value;
            const range = { min: parseFloat(sensMin.value), max: parseFloat(sensMax.value), step: parseFloat(sensStep.value) };
            const base = {
              eff: parseFloat(effInput.value),
              dem: parseFloat(demInput.value),
              delay: parseInt(delayInput.value)
            };
            if (sensProgress) sensProgress.textContent = "0%";
            worker.postMessage({ cmd: "runBatch", param, range, base });
          });
          const tabParam = document.getElementById("tab-param");
          const tabFormula = document.getElementById("tab-formula");
          const panelParam = document.getElementById("panel-param");
          const panelFormula = document.getElementById("panel-formula");
          if (tabParam && tabFormula && panelParam && panelFormula) {
            tabParam.addEventListener("click", () => {
              CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass(tabParam, "active");
              tabFormula.classList.remove("active");
              panelParam.style.display = "block";
              panelFormula.style.display = "none";
            });
            tabFormula.addEventListener("click", () => {
              CLD_SAFE == null ? void 0 : CLD_SAFE.safeAddClass(tabFormula, "active");
              tabParam.classList.remove("active");
              panelParam.style.display = "none";
              panelFormula.style.display = "block";
            });
          }
          const formulaNode = document.getElementById("formula-node");
          const formulaExpr = document.getElementById("formula-expr");
          const formulaMsg = document.getElementById("formula-msg");
          if (formulaNode && formulaExpr) {
            (modelData.nodes || []).forEach((n) => {
              const opt = document.createElement("option");
              opt.value = n.id;
              opt.textContent = n.label || n.id;
              formulaNode.appendChild(opt);
            });
            formulaNode.addEventListener("change", () => {
              const n = modelData.nodes.find((nd) => nd.id === formulaNode.value);
              formulaExpr.value = n && n.expr ? n.expr : "";
              if (formulaMsg) formulaMsg.textContent = "";
            });
            formulaNode.dispatchEvent(new Event("change"));
          }
          const validateBtn = document.getElementById("btn-validate");
          if (validateBtn) validateBtn.addEventListener("click", () => {
            try {
              new Parser().parse(formulaExpr.value);
              if (formulaMsg) formulaMsg.textContent = "\u2705";
            } catch (err) {
              if (formulaMsg) formulaMsg.textContent = err.message;
            }
          });
          const saveBtn = document.getElementById("btn-save");
          if (saveBtn) saveBtn.addEventListener("click", function() {
            try {
              new Parser().parse(formulaExpr.value);
              var n = modelData.nodes.find(function(nd) {
                return nd.id === formulaNode.value;
              });
              if (n) n.expr = formulaExpr.value;
              parseModel(modelData);
              markModelReady();
              if (__chartReady) initBaselineIfPossible();
              whenModelReady(function() {
                try {
                  var baseRes = simulate({ eff: 0, dem: 0, delay: 0, years: 30 });
                  baseSim = { years: baseRes.years, baseline: baseRes.series };
                  updateChartFromSim(baseSim);
                  if (formulaMsg) formulaMsg.textContent = "Saved";
                } catch (e) {
                  if (formulaMsg) formulaMsg.textContent = e.message;
                }
              });
            } catch (err) {
              if (formulaMsg) formulaMsg.textContent = err.message;
            }
          });
          if (runBtn) {
            runBtn.addEventListener("click", function() {
              whenModelReady(function() {
                try {
                  var params = {
                    eff: parseFloat(effInput.value),
                    dem: parseFloat(demInput.value),
                    delay: parseInt(delayInput.value, 10),
                    years: baseSim && baseSim.years ? baseSim.years.length - 1 : 30
                  };
                  var res = simulate(params);
                  updateChartFromSim({ years: res.years, baseline: baseSim ? baseSim.baseline : [], scenario: res.series });
                  if (window.__wesh_sim_chart) window.__wesh_sim_chart.update();
                } catch (e) {
                  console.error("simulate failed", e);
                }
              });
            });
          }
          (function() {
            var LS_KEY = "waterCLD.ui.v1";
            function loadState() {
              try {
                return JSON.parse(localStorage.getItem(LS_KEY) || "{}");
              } catch (e) {
                return {};
              }
            }
            __name(loadState, "loadState");
            function saveState(patch) {
              var s = loadState();
              for (var k in patch) s[k] = patch[k];
              localStorage.setItem(LS_KEY, JSON.stringify(s));
            }
            __name(saveState, "saveState");
            function ensureLayoutDirControl() {
              var layoutSel2 = document.getElementById("layout");
              if (!layoutSel2) return null;
              var exists = document.getElementById("layout-dir");
              if (exists) return exists;
              var dirSel = document.createElement("select");
              dirSel.id = "layout-dir";
              dirSel.setAttribute("aria-label", "\u062C\u0647\u062A \u0686\u06CC\u062F\u0645\u0627\u0646");
              var optLR = document.createElement("option");
              optLR.value = "LR";
              optLR.textContent = "\u0686\u067E\u2192\u0631\u0627\u0633\u062A";
              var optTB = document.createElement("option");
              optTB.value = "TB";
              optTB.textContent = "\u0628\u0627\u0644\u0627\u2192\u067E\u0627\u06CC\u06CC\u0646";
              dirSel.appendChild(optLR);
              dirSel.appendChild(optTB);
              layoutSel2.insertAdjacentElement("afterend", dirSel);
              dirSel.addEventListener("change", function() {
                var algo = (document.getElementById("layout") || {}).value || "elk";
                saveState({ dir: dirSel.value, layout: algo });
                if (window.runLayout) window.runLayout(algo, dirSel.value);
              });
              layoutSel2.addEventListener("change", function() {
                var algo = layoutSel2.value;
                var dir = (document.getElementById("layout-dir") || {}).value || "LR";
                saveState({ dir, layout: algo });
                if (window.runLayout) window.runLayout(algo, dir);
              });
              return dirSel;
            }
            __name(ensureLayoutDirControl, "ensureLayoutDirControl");
            function loadScriptOnce(src, id) {
              return new Promise(function(res, rej) {
                if (document.getElementById(id) || document.querySelector('script[src="' + src + '"]')) return res();
                var s = document.createElement("script");
                s.id = id;
                s.src = src;
                s.defer = true;
                s.onload = res;
                s.onerror = rej;
                document.head.appendChild(s);
              });
            }
            __name(loadScriptOnce, "loadScriptOnce");
            async function ensureLayoutLib(name) {
              if (name === "elk") {
                await loadScriptOnce("/assets/vendor/elk.bundled.js", "elk-lib");
                await loadScriptOnce("/assets/vendor/cytoscape-elk.js", "cy-elk");
              } else {
                await loadScriptOnce("/assets/vendor/dagre.min.js", "dagre-lib");
                await loadScriptOnce("/assets/vendor/cytoscape-dagre.js", "cy-dagre");
              }
            }
            __name(ensureLayoutLib, "ensureLayoutLib");
            (function() {
              var runLayoutOrig = window.runLayout;
              window.runLayout = async function(name, dir) {
                var cy3 = getCy2();
                if (!cy3) return;
                name = (name || "elk").toLowerCase();
                dir = dir || (document.getElementById("layout-dir") ? document.getElementById("layout-dir").value : "LR");
                await ensureLayoutLib(name);
                var opts;
                if (name === "elk") {
                  var elkDir = dir === "TB" ? "DOWN" : "RIGHT";
                  opts = {
                    name: "elk",
                    nodeDimensionsIncludeLabels: true,
                    fit: false,
                    animate: "end",
                    animationDuration: 300,
                    elk: {
                      algorithm: "layered",
                      "elk.direction": elkDir,
                      "elk.layered.spacing.nodeNodeBetweenLayers": 140,
                      "elk.spacing.nodeNode": 100,
                      "elk.layered.considerModelOrder.strategy": "NODES_AND_EDGES",
                      "elk.edgeRouting": "POLYLINE"
                    }
                  };
                } else {
                  var rankDir = dir === "TB" ? "TB" : "LR";
                  opts = {
                    name: "dagre",
                    rankDir,
                    nodeSep: 120,
                    rankSep: 140,
                    fit: false,
                    animate: "end",
                    animationDuration: 300
                  };
                }
                cy3.layout(opts).run();
                cy3.once("layoutstop", function() {
                  if (window.measureAndResizeNodes) window.measureAndResizeNodes(cy3, { maxWidth: 240, padding: 16 });
                  requestAnimationFrame(() => window.__cldSafeFit(cy3));
                });
              };
            })();
            function bindPersistence() {
              var st = loadState();
              var layoutSel2 = document.getElementById("layout");
              var dirSel = document.getElementById("layout-dir") || ensureLayoutDirControl();
              var wMin2 = document.getElementById("flt-weight-min");
              var dMax2 = document.getElementById("flt-delay-max");
              var q = document.getElementById("q");
              var fGroup2 = document.getElementById("f-group");
              var posCbs = document.querySelectorAll("input[type=checkbox].pos");
              var negCbs = document.querySelectorAll("input[type=checkbox].neg");
              var posBtn = document.getElementById("f-pos");
              var negBtn = document.getElementById("f-neg");
              if (st.layout && layoutSel2) layoutSel2.value = st.layout;
              if (st.dir && dirSel) dirSel.value = st.dir;
              if (st.flt) {
                if (wMin2 && typeof st.flt.weightMin !== "undefined") wMin2.value = st.flt.weightMin;
                if (dMax2 && typeof st.flt.delayMax !== "undefined") dMax2.value = st.flt.delayMax;
                if (typeof st.flt.pos === "boolean") {
                  if (posCbs.length) posCbs.forEach(function(cb) {
                    cb.checked = st.flt.pos;
                  });
                  if (posBtn) posBtn.classList.toggle("off", !st.flt.pos);
                }
                if (typeof st.flt.neg === "boolean") {
                  if (negCbs.length) negCbs.forEach(function(cb) {
                    cb.checked = st.flt.neg;
                  });
                  if (negBtn) negBtn.classList.toggle("off", !st.flt.neg);
                }
                if (fGroup2 && typeof st.flt.group !== "undefined") fGroup2.value = st.flt.group;
                if (posBtn || negBtn) applyFilters();
              }
              if (q && typeof st.q === "string") q.value = st.q;
              ["change", "input"].forEach(function(ev) {
                if (wMin2) wMin2.dispatchEvent(new Event(ev));
                if (dMax2) dMax2.dispatchEvent(new Event(ev));
                if (q) q.dispatchEvent(new Event(ev));
                if (fGroup2) fGroup2.dispatchEvent(new Event(ev));
                if (layoutSel2) layoutSel2.dispatchEvent(new Event("change"));
                if (dirSel) dirSel.dispatchEvent(new Event("change"));
                posCbs.forEach(function(cb) {
                  cb.dispatchEvent(new Event("change"));
                });
                negCbs.forEach(function(cb) {
                  cb.dispatchEvent(new Event("change"));
                });
              });
              function syncFilters() {
                saveState({
                  flt: {
                    weightMin: wMin2 ? Number(wMin2.value) : void 0,
                    delayMax: dMax2 ? Number(dMax2.value) : void 0,
                    pos: posCbs.length ? posCbs[0].checked : !(posBtn && posBtn.classList.contains("off")),
                    neg: negCbs.length ? negCbs[0].checked : !(negBtn && negBtn.classList.contains("off")),
                    group: fGroup2 ? fGroup2.value : ""
                  }
                });
              }
              __name(syncFilters, "syncFilters");
              if (wMin2) wMin2.addEventListener("input", syncFilters);
              if (dMax2) dMax2.addEventListener("input", syncFilters);
              posCbs.forEach(function(cb) {
                cb.addEventListener("change", syncFilters);
              });
              negCbs.forEach(function(cb) {
                cb.addEventListener("change", syncFilters);
              });
              if (posBtn) posBtn.addEventListener("click", syncFilters);
              if (negBtn) negBtn.addEventListener("click", syncFilters);
              if (fGroup2) fGroup2.addEventListener("change", syncFilters);
              if (q) q.addEventListener("input", function() {
                saveState({ q: q.value });
              });
              if (layoutSel2) layoutSel2.addEventListener("change", function() {
                saveState({ layout: layoutSel2.value });
              });
              if (dirSel) dirSel.addEventListener("change", function() {
                saveState({ dir: dirSel.value });
              });
              window.__WATER_CLD_READY__.then(function() {
                var saveViewThrottled;
                function commitView() {
                  var z = cy2.zoom();
                  var p = cy2.pan();
                  saveState({ zoom: z, pan: { x: p.x, y: p.y } });
                  saveViewThrottled = null;
                }
                __name(commitView, "commitView");
                function scheduleSave() {
                  if (saveViewThrottled) return;
                  saveViewThrottled = setTimeout(commitView, 200);
                }
                __name(scheduleSave, "scheduleSave");
                cy2.on("zoom pan", scheduleSave);
              });
            }
            __name(bindPersistence, "bindPersistence");
            if (document.readyState === "loading") {
              document.addEventListener("DOMContentLoaded", function() {
                ensureLayoutDirControl();
                bindPersistence();
              });
            } else {
              ensureLayoutDirControl();
              bindPersistence();
            }
          })();
          const resetBtnEl = resetBtn;
          if (resetBtnEl) {
            resetBtnEl.addEventListener("click", function() {
              whenModelReady(function() {
                try {
                  resetScenario();
                  if (window.__wesh_sim_chart) window.__wesh_sim_chart.update();
                } catch (e) {
                  console.error(e);
                }
              });
            });
          }
        });
        (function() {
          function initSwitcher() {
            var sw = document.getElementById("model-switch");
            if (!sw) return;
            try {
              var last = localStorage.getItem("waterCLD.activeModel");
              if (last) sw.value = last;
            } catch (e) {
            }
            sw.addEventListener("change", function() {
              window.loadModelFromUrl(sw.value);
            });
            if (sw.value) window.loadModelFromUrl(sw.value);
          }
          __name(initSwitcher, "initSwitcher");
          if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initSwitcher);
          } else {
            initSwitcher();
          }
        })();
        window.CLDSim = { simulate, runLayout: /* @__PURE__ */ __name(function(name, dir) {
          return window.runLayout(name, dir);
        }, "runLayout"), resetScenario, parseModel, simulateStep };
      })();
    }
  });

  // docs/assets/js/watercld.entry.js
  var require_watercld_entry = __commonJS({
    "docs/assets/js/watercld.entry.js"() {
      var import_water_cld_runtime_guards = __toESM(require_water_cld_runtime_guards());
      var import_water_cld_cy_alias = __toESM(require_water_cld_cy_alias());
      var import_water_cld = __toESM(require_water_cld());
      try {
        if (window.cy && window.cy.tagName) window.cy = void 0;
      } catch (_) {
      }
      (/* @__PURE__ */ __name(function syncCy() {
        var _a;
        const cy = ((_a = window.CLD_SAFE) == null ? void 0 : _a.cy) || window.cy;
        if (cy && typeof cy.nodes === "function") {
          window.CLD_SAFE = window.CLD_SAFE || {};
          window.CLD_SAFE.cy = cy;
          document.dispatchEvent(new CustomEvent("cld:ready", { detail: { cy } }));
          return;
        }
        requestAnimationFrame(syncCy);
      }, "syncCy"))();
    }
  });
  require_watercld_entry();
})();
//# sourceMappingURL=water-cld.bundle.js.map
