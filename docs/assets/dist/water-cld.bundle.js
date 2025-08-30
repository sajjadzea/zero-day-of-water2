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

  // docs/assets/vendor/cytoscape.min.js
  var require_cytoscape_min = __commonJS({
    "docs/assets/vendor/cytoscape.min.js"(exports, module) {
      !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).cytoscape = t();
      }(exports, function() {
        "use strict";
        function e(e2, t2) {
          (null == t2 || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
          return r2;
        }
        __name(e, "e");
        function t(e2, t2) {
          if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
        }
        __name(t, "t");
        function n(e2, t2, n2) {
          return t2 && function(e3, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r2 = t3[n3];
              r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e3, s(r2.key), r2);
            }
          }(e2.prototype, t2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
        }
        __name(n, "n");
        function r(e2, t2) {
          var n2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
          if (!n2) {
            if (Array.isArray(e2) || (n2 = u(e2)) || t2) {
              n2 && (e2 = n2);
              var r2 = 0, a2 = /* @__PURE__ */ __name(function() {
              }, "a");
              return { s: a2, n: /* @__PURE__ */ __name(function() {
                return r2 >= e2.length ? { done: true } : { done: false, value: e2[r2++] };
              }, "n"), e: /* @__PURE__ */ __name(function(e3) {
                throw e3;
              }, "e"), f: a2 };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var i2, o2 = true, s2 = false;
          return { s: /* @__PURE__ */ __name(function() {
            n2 = n2.call(e2);
          }, "s"), n: /* @__PURE__ */ __name(function() {
            var e3 = n2.next();
            return o2 = e3.done, e3;
          }, "n"), e: /* @__PURE__ */ __name(function(e3) {
            s2 = true, i2 = e3;
          }, "e"), f: /* @__PURE__ */ __name(function() {
            try {
              o2 || null == n2.return || n2.return();
            } finally {
              if (s2) throw i2;
            }
          }, "f") };
        }
        __name(r, "r");
        function a(e2, t2, n2) {
          return (t2 = s(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
        }
        __name(a, "a");
        function i(e2, t2) {
          return function(e3) {
            if (Array.isArray(e3)) return e3;
          }(e2) || function(e3, t3) {
            var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
            if (null != n2) {
              var r2, a2, i2, o2, s2 = [], l2 = true, u2 = false;
              try {
                if (i2 = (n2 = n2.call(e3)).next, 0 === t3) {
                  if (Object(n2) !== n2) return;
                  l2 = false;
                } else for (; !(l2 = (r2 = i2.call(n2)).done) && (s2.push(r2.value), s2.length !== t3); l2 = true) ;
              } catch (e4) {
                u2 = true, a2 = e4;
              } finally {
                try {
                  if (!l2 && null != n2.return && (o2 = n2.return(), Object(o2) !== o2)) return;
                } finally {
                  if (u2) throw a2;
                }
              }
              return s2;
            }
          }(e2, t2) || u(e2, t2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        __name(i, "i");
        function o(t2) {
          return function(t3) {
            if (Array.isArray(t3)) return e(t3);
          }(t2) || function(e2) {
            if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"]) return Array.from(e2);
          }(t2) || u(t2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        __name(o, "o");
        function s(e2) {
          var t2 = function(e3, t3) {
            if ("object" != typeof e3 || !e3) return e3;
            var n2 = e3[Symbol.toPrimitive];
            if (void 0 !== n2) {
              var r2 = n2.call(e3, t3);
              if ("object" != typeof r2) return r2;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e3);
          }(e2, "string");
          return "symbol" == typeof t2 ? t2 : t2 + "";
        }
        __name(s, "s");
        function l(e2) {
          return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          }, l(e2);
        }
        __name(l, "l");
        function u(t2, n2) {
          if (t2) {
            if ("string" == typeof t2) return e(t2, n2);
            var r2 = {}.toString.call(t2).slice(8, -1);
            return "Object" === r2 && t2.constructor && (r2 = t2.constructor.name), "Map" === r2 || "Set" === r2 ? Array.from(t2) : "Arguments" === r2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r2) ? e(t2, n2) : void 0;
          }
        }
        __name(u, "u");
        var c = "undefined" == typeof window ? null : window, d = c ? c.navigator : null;
        c && c.document;
        var h, f, p, v, g, y, m, b, x, w, E, k, T, C, P, S, B, D, _, A, M, R, I, N, L, z, O, V, F = l(""), X = l({}), j = l(function() {
        }), Y = "undefined" == typeof HTMLElement ? "undefined" : l(HTMLElement), q = /* @__PURE__ */ __name(function(e2) {
          return e2 && e2.instanceString && U(e2.instanceString) ? e2.instanceString() : null;
        }, "q"), W = /* @__PURE__ */ __name(function(e2) {
          return null != e2 && l(e2) == F;
        }, "W"), U = /* @__PURE__ */ __name(function(e2) {
          return null != e2 && l(e2) === j;
        }, "U"), H = /* @__PURE__ */ __name(function(e2) {
          return !$(e2) && (Array.isArray ? Array.isArray(e2) : null != e2 && e2 instanceof Array);
        }, "H"), K = /* @__PURE__ */ __name(function(e2) {
          return null != e2 && l(e2) === X && !H(e2) && e2.constructor === Object;
        }, "K"), G = /* @__PURE__ */ __name(function(e2) {
          return null != e2 && l(e2) === l(1) && !isNaN(e2);
        }, "G"), Z = /* @__PURE__ */ __name(function(e2) {
          return "undefined" === Y ? void 0 : null != e2 && e2 instanceof HTMLElement;
        }, "Z"), $ = /* @__PURE__ */ __name(function(e2) {
          return Q(e2) || J(e2);
        }, "$"), Q = /* @__PURE__ */ __name(function(e2) {
          return "collection" === q(e2) && e2._private.single;
        }, "Q"), J = /* @__PURE__ */ __name(function(e2) {
          return "collection" === q(e2) && !e2._private.single;
        }, "J"), ee = /* @__PURE__ */ __name(function(e2) {
          return "core" === q(e2);
        }, "ee"), te = /* @__PURE__ */ __name(function(e2) {
          return "stylesheet" === q(e2);
        }, "te"), ne = /* @__PURE__ */ __name(function(e2) {
          return null == e2 || !("" !== e2 && !e2.match(/^\s+$/));
        }, "ne"), re = /* @__PURE__ */ __name(function(e2) {
          return function(e3) {
            return null != e3 && l(e3) === X;
          }(e2) && U(e2.then);
        }, "re"), ae = /* @__PURE__ */ __name(function(e2, t2) {
          t2 || (t2 = /* @__PURE__ */ __name(function() {
            if (1 === arguments.length) return arguments[0];
            if (0 === arguments.length) return "undefined";
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3.push(arguments[t3]);
            return e3.join("$");
          }, "t"));
          var n2 = /* @__PURE__ */ __name(function() {
            var r2, a2 = arguments, i2 = t2.apply(this, a2), o2 = n2.cache;
            return (r2 = o2[i2]) || (r2 = o2[i2] = e2.apply(this, a2)), r2;
          }, "n");
          return n2.cache = {}, n2;
        }, "ae"), ie = ae(function(e2) {
          return e2.replace(/([A-Z])/g, function(e3) {
            return "-" + e3.toLowerCase();
          });
        }), oe = ae(function(e2) {
          return e2.replace(/(-\w)/g, function(e3) {
            return e3[1].toUpperCase();
          });
        }), se = ae(function(e2, t2) {
          return e2 + t2[0].toUpperCase() + t2.substring(1);
        }, function(e2, t2) {
          return e2 + "$" + t2;
        }), le = /* @__PURE__ */ __name(function(e2) {
          return ne(e2) ? e2 : e2.charAt(0).toUpperCase() + e2.substring(1);
        }, "le"), ue = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.slice(-1 * t2.length) === t2;
        }, "ue"), ce = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", de = "rgb[a]?\\((" + ce + "[%]?)\\s*,\\s*(" + ce + "[%]?)\\s*,\\s*(" + ce + "[%]?)(?:\\s*,\\s*(" + ce + "))?\\)", he = "rgb[a]?\\((?:" + ce + "[%]?)\\s*,\\s*(?:" + ce + "[%]?)\\s*,\\s*(?:" + ce + "[%]?)(?:\\s*,\\s*(?:" + ce + "))?\\)", fe = "hsl[a]?\\((" + ce + ")\\s*,\\s*(" + ce + "[%])\\s*,\\s*(" + ce + "[%])(?:\\s*,\\s*(" + ce + "))?\\)", pe = "hsl[a]?\\((?:" + ce + ")\\s*,\\s*(?:" + ce + "[%])\\s*,\\s*(?:" + ce + "[%])(?:\\s*,\\s*(?:" + ce + "))?\\)", ve = /* @__PURE__ */ __name(function(e2, t2) {
          return e2 < t2 ? -1 : e2 > t2 ? 1 : 0;
        }, "ve"), ge = null != Object.assign ? Object.assign.bind(Object) : function(e2) {
          for (var t2 = arguments, n2 = 1; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            if (null != r2) for (var a2 = Object.keys(r2), i2 = 0; i2 < a2.length; i2++) {
              var o2 = a2[i2];
              e2[o2] = r2[o2];
            }
          }
          return e2;
        }, ye = /* @__PURE__ */ __name(function(e2) {
          return (H(e2) ? e2 : null) || function(e3) {
            return me[e3.toLowerCase()];
          }(e2) || function(e3) {
            if ((4 === e3.length || 7 === e3.length) && "#" === e3[0]) {
              var t2, n2, r2, a2 = 16;
              return 4 === e3.length ? (t2 = parseInt(e3[1] + e3[1], a2), n2 = parseInt(e3[2] + e3[2], a2), r2 = parseInt(e3[3] + e3[3], a2)) : (t2 = parseInt(e3[1] + e3[2], a2), n2 = parseInt(e3[3] + e3[4], a2), r2 = parseInt(e3[5] + e3[6], a2)), [t2, n2, r2];
            }
          }(e2) || function(e3) {
            var t2, n2 = new RegExp("^" + de + "$").exec(e3);
            if (n2) {
              t2 = [];
              for (var r2 = [], a2 = 1; a2 <= 3; a2++) {
                var i2 = n2[a2];
                if ("%" === i2[i2.length - 1] && (r2[a2] = true), i2 = parseFloat(i2), r2[a2] && (i2 = i2 / 100 * 255), i2 < 0 || i2 > 255) return;
                t2.push(Math.floor(i2));
              }
              var o2 = r2[1] || r2[2] || r2[3], s2 = r2[1] && r2[2] && r2[3];
              if (o2 && !s2) return;
              var l2 = n2[4];
              if (void 0 !== l2) {
                if ((l2 = parseFloat(l2)) < 0 || l2 > 1) return;
                t2.push(l2);
              }
            }
            return t2;
          }(e2) || function(e3) {
            var t2, n2, r2, a2, i2, o2, s2, l2;
            function u2(e4, t3, n3) {
              return n3 < 0 && (n3 += 1), n3 > 1 && (n3 -= 1), n3 < 1 / 6 ? e4 + 6 * (t3 - e4) * n3 : n3 < 0.5 ? t3 : n3 < 2 / 3 ? e4 + (t3 - e4) * (2 / 3 - n3) * 6 : e4;
            }
            __name(u2, "u");
            var c2 = new RegExp("^" + fe + "$").exec(e3);
            if (c2) {
              if ((n2 = parseInt(c2[1])) < 0 ? n2 = (360 - -1 * n2 % 360) % 360 : n2 > 360 && (n2 %= 360), n2 /= 360, (r2 = parseFloat(c2[2])) < 0 || r2 > 100) return;
              if (r2 /= 100, (a2 = parseFloat(c2[3])) < 0 || a2 > 100) return;
              if (a2 /= 100, void 0 !== (i2 = c2[4]) && ((i2 = parseFloat(i2)) < 0 || i2 > 1)) return;
              if (0 === r2) o2 = s2 = l2 = Math.round(255 * a2);
              else {
                var d2 = a2 < 0.5 ? a2 * (1 + r2) : a2 + r2 - a2 * r2, h2 = 2 * a2 - d2;
                o2 = Math.round(255 * u2(h2, d2, n2 + 1 / 3)), s2 = Math.round(255 * u2(h2, d2, n2)), l2 = Math.round(255 * u2(h2, d2, n2 - 1 / 3));
              }
              t2 = [o2, s2, l2, i2];
            }
            return t2;
          }(e2);
        }, "ye"), me = { transparent: [0, 0, 0, 0], aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], grey: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, be = /* @__PURE__ */ __name(function(e2) {
          for (var t2 = e2.map, n2 = e2.keys, r2 = n2.length, a2 = 0; a2 < r2; a2++) {
            var i2 = n2[a2];
            if (K(i2)) throw Error("Tried to set map with object key");
            a2 < n2.length - 1 ? (null == t2[i2] && (t2[i2] = {}), t2 = t2[i2]) : t2[i2] = e2.value;
          }
        }, "be"), xe = /* @__PURE__ */ __name(function(e2) {
          for (var t2 = e2.map, n2 = e2.keys, r2 = n2.length, a2 = 0; a2 < r2; a2++) {
            var i2 = n2[a2];
            if (K(i2)) throw Error("Tried to get map with object key");
            if (null == (t2 = t2[i2])) return t2;
          }
          return t2;
        }, "xe"), we = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
        function Ee(e2) {
          return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
        }
        __name(Ee, "Ee");
        function ke() {
          if (f) return h;
          return f = 1, h = /* @__PURE__ */ __name(function(e2) {
            var t2 = typeof e2;
            return null != e2 && ("object" == t2 || "function" == t2);
          }, "h");
        }
        __name(ke, "ke");
        function Te() {
          if (y) return g;
          y = 1;
          var e2 = function() {
            if (v) return p;
            v = 1;
            var e3 = "object" == typeof we && we && we.Object === Object && we;
            return p = e3;
          }(), t2 = "object" == typeof self && self && self.Object === Object && self, n2 = e2 || t2 || Function("return this")();
          return g = n2;
        }
        __name(Te, "Te");
        function Ce() {
          if (k) return E;
          k = 1;
          var e2 = function() {
            if (w) return x;
            w = 1;
            var e3 = /\s/;
            return x = /* @__PURE__ */ __name(function(t3) {
              for (var n2 = t3.length; n2-- && e3.test(t3.charAt(n2)); ) ;
              return n2;
            }, "x"), x;
          }(), t2 = /^\s+/;
          return E = /* @__PURE__ */ __name(function(n2) {
            return n2 ? n2.slice(0, e2(n2) + 1).replace(t2, "") : n2;
          }, "E"), E;
        }
        __name(Ce, "Ce");
        function Pe() {
          if (C) return T;
          C = 1;
          var e2 = Te().Symbol;
          return T = e2;
        }
        __name(Pe, "Pe");
        function Se() {
          if (A) return _;
          A = 1;
          var e2 = Pe(), t2 = function() {
            if (S) return P;
            S = 1;
            var e3 = Pe(), t3 = Object.prototype, n3 = t3.hasOwnProperty, r3 = t3.toString, a2 = e3 ? e3.toStringTag : void 0;
            return P = /* @__PURE__ */ __name(function(e4) {
              var t4 = n3.call(e4, a2), i2 = e4[a2];
              try {
                e4[a2] = void 0;
                var o2 = true;
              } catch (e5) {
              }
              var s2 = r3.call(e4);
              return o2 && (t4 ? e4[a2] = i2 : delete e4[a2]), s2;
            }, "P");
          }(), n2 = function() {
            if (D) return B;
            D = 1;
            var e3 = Object.prototype.toString;
            return B = /* @__PURE__ */ __name(function(t3) {
              return e3.call(t3);
            }, "B");
          }(), r2 = e2 ? e2.toStringTag : void 0;
          return _ = /* @__PURE__ */ __name(function(e3) {
            return null == e3 ? void 0 === e3 ? "[object Undefined]" : "[object Null]" : r2 && r2 in Object(e3) ? t2(e3) : n2(e3);
          }, "_");
        }
        __name(Se, "Se");
        function Be() {
          if (N) return I;
          N = 1;
          var e2 = Se(), t2 = R ? M : (R = 1, M = /* @__PURE__ */ __name(function(e3) {
            return null != e3 && "object" == typeof e3;
          }, "M"));
          return I = /* @__PURE__ */ __name(function(n2) {
            return "symbol" == typeof n2 || t2(n2) && "[object Symbol]" == e2(n2);
          }, "I");
        }
        __name(Be, "Be");
        var De = function() {
          if (V) return O;
          V = 1;
          var e2 = ke(), t2 = function() {
            if (b) return m;
            b = 1;
            var e3 = Te();
            return m = /* @__PURE__ */ __name(function() {
              return e3.Date.now();
            }, "m");
          }(), n2 = function() {
            if (z) return L;
            z = 1;
            var e3 = Ce(), t3 = ke(), n3 = Be(), r3 = /^[-+]0x[0-9a-f]+$/i, a3 = /^0b[01]+$/i, i2 = /^0o[0-7]+$/i, o2 = parseInt;
            return L = /* @__PURE__ */ __name(function(s2) {
              if ("number" == typeof s2) return s2;
              if (n3(s2)) return NaN;
              if (t3(s2)) {
                var l2 = "function" == typeof s2.valueOf ? s2.valueOf() : s2;
                s2 = t3(l2) ? l2 + "" : l2;
              }
              if ("string" != typeof s2) return 0 === s2 ? s2 : +s2;
              s2 = e3(s2);
              var u2 = a3.test(s2);
              return u2 || i2.test(s2) ? o2(s2.slice(2), u2 ? 2 : 8) : r3.test(s2) ? NaN : +s2;
            }, "L");
          }(), r2 = Math.max, a2 = Math.min;
          return O = /* @__PURE__ */ __name(function(i2, o2, s2) {
            var l2, u2, c2, d2, h2, f2, p2 = 0, v2 = false, g2 = false, y2 = true;
            if ("function" != typeof i2) throw new TypeError("Expected a function");
            function m2(e3) {
              var t3 = l2, n3 = u2;
              return l2 = u2 = void 0, p2 = e3, d2 = i2.apply(n3, t3);
            }
            __name(m2, "m");
            function b2(e3) {
              var t3 = e3 - f2;
              return void 0 === f2 || t3 >= o2 || t3 < 0 || g2 && e3 - p2 >= c2;
            }
            __name(b2, "b");
            function x2() {
              var e3 = t2();
              if (b2(e3)) return w2(e3);
              h2 = setTimeout(x2, function(e4) {
                var t3 = o2 - (e4 - f2);
                return g2 ? a2(t3, c2 - (e4 - p2)) : t3;
              }(e3));
            }
            __name(x2, "x");
            function w2(e3) {
              return h2 = void 0, y2 && l2 ? m2(e3) : (l2 = u2 = void 0, d2);
            }
            __name(w2, "w");
            function E2() {
              var e3 = t2(), n3 = b2(e3);
              if (l2 = arguments, u2 = this, f2 = e3, n3) {
                if (void 0 === h2) return function(e4) {
                  return p2 = e4, h2 = setTimeout(x2, o2), v2 ? m2(e4) : d2;
                }(f2);
                if (g2) return clearTimeout(h2), h2 = setTimeout(x2, o2), m2(f2);
              }
              return void 0 === h2 && (h2 = setTimeout(x2, o2)), d2;
            }
            __name(E2, "E");
            return o2 = n2(o2) || 0, e2(s2) && (v2 = !!s2.leading, c2 = (g2 = "maxWait" in s2) ? r2(n2(s2.maxWait) || 0, o2) : c2, y2 = "trailing" in s2 ? !!s2.trailing : y2), E2.cancel = function() {
              void 0 !== h2 && clearTimeout(h2), p2 = 0, l2 = f2 = u2 = h2 = void 0;
            }, E2.flush = function() {
              return void 0 === h2 ? d2 : w2(t2());
            }, E2;
          }, "O"), O;
        }(), _e = Ee(De), Ae = c ? c.performance : null, Me = Ae && Ae.now ? function() {
          return Ae.now();
        } : function() {
          return Date.now();
        }, Re = function() {
          if (c) {
            if (c.requestAnimationFrame) return function(e2) {
              c.requestAnimationFrame(e2);
            };
            if (c.mozRequestAnimationFrame) return function(e2) {
              c.mozRequestAnimationFrame(e2);
            };
            if (c.webkitRequestAnimationFrame) return function(e2) {
              c.webkitRequestAnimationFrame(e2);
            };
            if (c.msRequestAnimationFrame) return function(e2) {
              c.msRequestAnimationFrame(e2);
            };
          }
          return function(e2) {
            e2 && setTimeout(function() {
              e2(Me());
            }, 1e3 / 60);
          };
        }(), Ie = /* @__PURE__ */ __name(function(e2) {
          return Re(e2);
        }, "Ie"), Ne = Me, Le = 9261, ze = 5381, Oe = /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Le; !(t2 = e2.next()).done; ) n2 = 65599 * n2 + t2.value | 0;
          return n2;
        }, "Oe"), Ve = /* @__PURE__ */ __name(function(e2) {
          return 65599 * (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Le) + e2 | 0;
        }, "Ve"), Fe = /* @__PURE__ */ __name(function(e2) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ze;
          return (t2 << 5) + t2 + e2 | 0;
        }, "Fe"), Xe = /* @__PURE__ */ __name(function(e2) {
          return 2097152 * e2[0] + e2[1];
        }, "Xe"), je = /* @__PURE__ */ __name(function(e2, t2) {
          return [Ve(e2[0], t2[0]), Fe(e2[1], t2[1])];
        }, "je"), Ye = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = { value: 0, done: false }, r2 = 0, a2 = e2.length;
          return Oe({ next: /* @__PURE__ */ __name(function() {
            return r2 < a2 ? n2.value = e2[r2++] : n2.done = true, n2;
          }, "next") }, t2);
        }, "Ye"), qe = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = { value: 0, done: false }, r2 = 0, a2 = e2.length;
          return Oe({ next: /* @__PURE__ */ __name(function() {
            return r2 < a2 ? n2.value = e2.charCodeAt(r2++) : n2.done = true, n2;
          }, "next") }, t2);
        }, "qe"), We = /* @__PURE__ */ __name(function() {
          return Ue(arguments);
        }, "We"), Ue = /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            t2 = 0 === n2 ? qe(r2) : qe(r2, t2);
          }
          return t2;
        }, "Ue");
        function He(e2, t2, n2) {
          if (0 === n2) return e2;
          var r2 = (t2.x1 + t2.x2) / 2, a2 = (t2.y1 + t2.y2) / 2, i2 = t2.w / t2.h, o2 = 1 / i2, s2 = function(e3, t3, n3, r3, a3) {
            var i3 = a3 * Math.PI / 180;
            return { x: Math.cos(i3) * (e3 - n3) - Math.sin(i3) * (t3 - r3) + n3, y: Math.sin(i3) * (e3 - n3) + Math.cos(i3) * (t3 - r3) + r3 };
          }(e2.x, e2.y, r2, a2, n2), l2 = function(e3, t3, n3, r3, a3, i3) {
            return { x: (e3 - n3) * a3 + n3, y: (t3 - r3) * i3 + r3 };
          }(s2.x, s2.y, r2, a2, i2, o2);
          return { x: l2.x, y: l2.y };
        }
        __name(He, "He");
        var Ke = true, Ge = null != console.warn, Ze = null != console.trace, $e = Number.MAX_SAFE_INTEGER || 9007199254740991, Qe = /* @__PURE__ */ __name(function() {
          return true;
        }, "Qe"), Je = /* @__PURE__ */ __name(function() {
          return false;
        }, "Je"), et = /* @__PURE__ */ __name(function() {
          return 0;
        }, "et"), tt = /* @__PURE__ */ __name(function() {
        }, "tt"), nt = /* @__PURE__ */ __name(function(e2) {
          throw new Error(e2);
        }, "nt"), rt = /* @__PURE__ */ __name(function(e2) {
          if (void 0 === e2) return Ke;
          Ke = !!e2;
        }, "rt"), at = /* @__PURE__ */ __name(function(e2) {
          rt() && (Ge ? console.warn(e2) : (console.log(e2), Ze && console.trace()));
        }, "at"), it = /* @__PURE__ */ __name(function(e2) {
          return null == e2 ? e2 : H(e2) ? e2.slice() : K(e2) ? function(e3) {
            return ge({}, e3);
          }(e2) : e2;
        }, "it"), ot = /* @__PURE__ */ __name(function(e2, t2) {
          for (t2 = e2 = ""; e2++ < 36; t2 += 51 * e2 & 52 ? (15 ^ e2 ? 8 ^ Math.random() * (20 ^ e2 ? 16 : 4) : 4).toString(16) : "-") ;
          return t2;
        }, "ot"), st = {}, lt = /* @__PURE__ */ __name(function() {
          return st;
        }, "lt"), ut = /* @__PURE__ */ __name(function(e2) {
          var t2 = Object.keys(e2);
          return function(n2) {
            for (var r2 = {}, a2 = 0; a2 < t2.length; a2++) {
              var i2 = t2[a2], o2 = null == n2 ? void 0 : n2[i2];
              r2[i2] = void 0 === o2 ? e2[i2] : o2;
            }
            return r2;
          };
        }, "ut"), ct = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = e2.length - 1; r2 >= 0; r2--) e2[r2] === t2 && e2.splice(r2, 1);
        }, "ct"), dt = /* @__PURE__ */ __name(function(e2) {
          e2.splice(0, e2.length);
        }, "dt"), ht = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return n2 && (t2 = se(n2, t2)), e2[t2];
        }, "ht"), ft = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          n2 && (t2 = se(n2, t2)), e2[t2] = r2;
        }, "ft"), pt = "undefined" != typeof Map ? Map : function() {
          return n(/* @__PURE__ */ __name(function e2() {
            t(this, e2), this._obj = {};
          }, "e"), [{ key: "set", value: /* @__PURE__ */ __name(function(e2, t2) {
            return this._obj[e2] = t2, this;
          }, "value") }, { key: "delete", value: /* @__PURE__ */ __name(function(e2) {
            return this._obj[e2] = void 0, this;
          }, "value") }, { key: "clear", value: /* @__PURE__ */ __name(function() {
            this._obj = {};
          }, "value") }, { key: "has", value: /* @__PURE__ */ __name(function(e2) {
            return void 0 !== this._obj[e2];
          }, "value") }, { key: "get", value: /* @__PURE__ */ __name(function(e2) {
            return this._obj[e2];
          }, "value") }]);
        }(), vt = function() {
          return n(/* @__PURE__ */ __name(function e2(n2) {
            if (t(this, e2), this._obj = /* @__PURE__ */ Object.create(null), this.size = 0, null != n2) {
              var r2;
              r2 = null != n2.instanceString && n2.instanceString() === this.instanceString() ? n2.toArray() : n2;
              for (var a2 = 0; a2 < r2.length; a2++) this.add(r2[a2]);
            }
          }, "e"), [{ key: "instanceString", value: /* @__PURE__ */ __name(function() {
            return "set";
          }, "value") }, { key: "add", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = this._obj;
            1 !== t2[e2] && (t2[e2] = 1, this.size++);
          }, "value") }, { key: "delete", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = this._obj;
            1 === t2[e2] && (t2[e2] = 0, this.size--);
          }, "value") }, { key: "clear", value: /* @__PURE__ */ __name(function() {
            this._obj = /* @__PURE__ */ Object.create(null);
          }, "value") }, { key: "has", value: /* @__PURE__ */ __name(function(e2) {
            return 1 === this._obj[e2];
          }, "value") }, { key: "toArray", value: /* @__PURE__ */ __name(function() {
            var e2 = this;
            return Object.keys(this._obj).filter(function(t2) {
              return e2.has(t2);
            });
          }, "value") }, { key: "forEach", value: /* @__PURE__ */ __name(function(e2, t2) {
            return this.toArray().forEach(e2, t2);
          }, "value") }]);
        }(), gt = "undefined" !== ("undefined" == typeof Set ? "undefined" : l(Set)) ? Set : vt, yt = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          if (void 0 !== e2 && void 0 !== t2 && ee(e2)) {
            var r2 = t2.group;
            if (null == r2 && (r2 = t2.data && null != t2.data.source && null != t2.data.target ? "edges" : "nodes"), "nodes" === r2 || "edges" === r2) {
              this.length = 1, this[0] = this;
              var a2 = this._private = { cy: e2, single: true, data: t2.data || {}, position: t2.position || { x: 0, y: 0 }, autoWidth: void 0, autoHeight: void 0, autoPadding: void 0, compoundBoundsClean: false, listeners: [], group: r2, style: {}, rstyle: {}, styleCxts: [], styleKeys: {}, removed: true, selected: !!t2.selected, selectable: void 0 === t2.selectable || !!t2.selectable, locked: !!t2.locked, grabbed: false, grabbable: void 0 === t2.grabbable || !!t2.grabbable, pannable: void 0 === t2.pannable ? "edges" === r2 : !!t2.pannable, active: false, classes: new gt(), animation: { current: [], queue: [] }, rscratch: {}, scratch: t2.scratch || {}, edges: [], children: [], parent: t2.parent && t2.parent.isNode() ? t2.parent : null, traversalCache: {}, backgrounding: false, bbCache: null, bbCacheShift: { x: 0, y: 0 }, bodyBounds: null, overlayBounds: null, labelBounds: { all: null, source: null, target: null, main: null }, arrowBounds: { source: null, target: null, "mid-source": null, "mid-target": null } };
              if (null == a2.position.x && (a2.position.x = 0), null == a2.position.y && (a2.position.y = 0), t2.renderedPosition) {
                var i2 = t2.renderedPosition, o2 = e2.pan(), s2 = e2.zoom();
                a2.position = { x: (i2.x - o2.x) / s2, y: (i2.y - o2.y) / s2 };
              }
              var l2 = [];
              H(t2.classes) ? l2 = t2.classes : W(t2.classes) && (l2 = t2.classes.split(/\s+/));
              for (var u2 = 0, c2 = l2.length; u2 < c2; u2++) {
                var d2 = l2[u2];
                d2 && "" !== d2 && a2.classes.add(d2);
              }
              this.createEmitter(), (void 0 === n2 || n2) && this.restore();
              var h2 = t2.style || t2.css;
              h2 && (at("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h2));
            } else nt("An element must be of type `nodes` or `edges`; you specified `" + r2 + "`");
          } else nt("An element must have a core reference and parameters set");
        }, "yt"), mt = /* @__PURE__ */ __name(function(e2) {
          return e2 = { bfs: e2.bfs || !e2.dfs, dfs: e2.dfs || !e2.bfs }, function(t2, n2, r2) {
            var a2;
            K(t2) && !$(t2) && (t2 = (a2 = t2).roots || a2.root, n2 = a2.visit, r2 = a2.directed), r2 = 2 !== arguments.length || U(n2) ? r2 : n2, n2 = U(n2) ? n2 : function() {
            };
            for (var i2, o2 = this._private.cy, s2 = t2 = W(t2) ? this.filter(t2) : t2, l2 = [], u2 = [], c2 = {}, d2 = {}, h2 = {}, f2 = 0, p2 = this.byGroup(), v2 = p2.nodes, g2 = p2.edges, y2 = 0; y2 < s2.length; y2++) {
              var m2 = s2[y2], b2 = m2.id();
              m2.isNode() && (l2.unshift(m2), e2.bfs && (h2[b2] = true, u2.push(m2)), d2[b2] = 0);
            }
            for (var x2, w2 = function() {
              var t3 = e2.bfs ? l2.shift() : l2.pop(), a3 = t3.id();
              if (e2.dfs) {
                if (h2[a3]) return 0;
                h2[a3] = true, u2.push(t3);
              }
              var o3, s3 = d2[a3], p3 = c2[a3], y3 = null != p3 ? p3.source() : null, m3 = null != p3 ? p3.target() : null, b3 = null == p3 ? void 0 : t3.same(y3) ? m3[0] : y3[0];
              if (true === (o3 = n2(t3, p3, b3, f2++, s3))) return i2 = t3, 1;
              if (false === o3) return 1;
              for (var x3 = t3.connectedEdges().filter(function(e3) {
                return (!r2 || e3.source().same(t3)) && g2.has(e3);
              }), w3 = 0; w3 < x3.length; w3++) {
                var E3 = x3[w3], k3 = E3.connectedNodes().filter(function(e3) {
                  return !e3.same(t3) && v2.has(e3);
                }), T3 = k3.id();
                0 === k3.length || h2[T3] || (k3 = k3[0], l2.push(k3), e2.bfs && (h2[T3] = true, u2.push(k3)), c2[T3] = E3, d2[T3] = d2[a3] + 1);
              }
            }; 0 !== l2.length && (0 === (x2 = w2()) || 1 !== x2); ) ;
            for (var E2 = o2.collection(), k2 = 0; k2 < u2.length; k2++) {
              var T2 = u2[k2], C2 = c2[T2.id()];
              null != C2 && E2.push(C2), E2.push(T2);
            }
            return { path: o2.collection(E2), found: o2.collection(i2) };
          };
        }, "mt"), bt = { breadthFirstSearch: mt({ bfs: true }), depthFirstSearch: mt({ dfs: true }) };
        bt.bfs = bt.breadthFirstSearch, bt.dfs = bt.depthFirstSearch;
        var xt, wt, Et, kt = { exports: {} }, Tt = kt.exports;
        function Ct() {
          return xt || (xt = 1, function(e2) {
            (function() {
              var t2, n2, r2, a2, i2, o2, s2, l2, u2, c2, d2, h2, f2, p2, v2;
              r2 = Math.floor, c2 = Math.min, n2 = /* @__PURE__ */ __name(function(e3, t3) {
                return e3 < t3 ? -1 : e3 > t3 ? 1 : 0;
              }, "n"), u2 = /* @__PURE__ */ __name(function(e3, t3, a3, i3, o3) {
                var s3;
                if (null == a3 && (a3 = 0), null == o3 && (o3 = n2), a3 < 0) throw new Error("lo must be non-negative");
                for (null == i3 && (i3 = e3.length); a3 < i3; ) o3(t3, e3[s3 = r2((a3 + i3) / 2)]) < 0 ? i3 = s3 : a3 = s3 + 1;
                return [].splice.apply(e3, [a3, a3 - a3].concat(t3)), t3;
              }, "u"), o2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                return null == r3 && (r3 = n2), e3.push(t3), p2(e3, 0, e3.length - 1, r3);
              }, "o"), i2 = /* @__PURE__ */ __name(function(e3, t3) {
                var r3, a3;
                return null == t3 && (t3 = n2), r3 = e3.pop(), e3.length ? (a3 = e3[0], e3[0] = r3, v2(e3, 0, t3)) : a3 = r3, a3;
              }, "i"), l2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                var a3;
                return null == r3 && (r3 = n2), a3 = e3[0], e3[0] = t3, v2(e3, 0, r3), a3;
              }, "l"), s2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                var a3;
                return null == r3 && (r3 = n2), e3.length && r3(e3[0], t3) < 0 && (t3 = (a3 = [e3[0], t3])[0], e3[0] = a3[1], v2(e3, 0, r3)), t3;
              }, "s"), a2 = /* @__PURE__ */ __name(function(e3, t3) {
                var a3, i3, o3, s3, l3, u3;
                for (null == t3 && (t3 = n2), l3 = [], i3 = 0, o3 = (s3 = function() {
                  u3 = [];
                  for (var t4 = 0, n3 = r2(e3.length / 2); 0 <= n3 ? t4 < n3 : t4 > n3; 0 <= n3 ? t4++ : t4--) u3.push(t4);
                  return u3;
                }.apply(this).reverse()).length; i3 < o3; i3++) a3 = s3[i3], l3.push(v2(e3, a3, t3));
                return l3;
              }, "a"), f2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                var a3;
                if (null == r3 && (r3 = n2), -1 !== (a3 = e3.indexOf(t3))) return p2(e3, 0, a3, r3), v2(e3, a3, r3);
              }, "f"), d2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                var i3, o3, l3, u3, c3;
                if (null == r3 && (r3 = n2), !(o3 = e3.slice(0, t3)).length) return o3;
                for (a2(o3, r3), l3 = 0, u3 = (c3 = e3.slice(t3)).length; l3 < u3; l3++) i3 = c3[l3], s2(o3, i3, r3);
                return o3.sort(r3).reverse();
              }, "d"), h2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                var o3, s3, l3, d3, h3, f3, p3, v3, g2;
                if (null == r3 && (r3 = n2), 10 * t3 <= e3.length) {
                  if (!(l3 = e3.slice(0, t3).sort(r3)).length) return l3;
                  for (s3 = l3[l3.length - 1], d3 = 0, f3 = (p3 = e3.slice(t3)).length; d3 < f3; d3++) r3(o3 = p3[d3], s3) < 0 && (u2(l3, o3, 0, null, r3), l3.pop(), s3 = l3[l3.length - 1]);
                  return l3;
                }
                for (a2(e3, r3), g2 = [], h3 = 0, v3 = c2(t3, e3.length); 0 <= v3 ? h3 < v3 : h3 > v3; 0 <= v3 ? ++h3 : --h3) g2.push(i2(e3, r3));
                return g2;
              }, "h"), p2 = /* @__PURE__ */ __name(function(e3, t3, r3, a3) {
                var i3, o3, s3;
                for (null == a3 && (a3 = n2), i3 = e3[r3]; r3 > t3 && a3(i3, o3 = e3[s3 = r3 - 1 >> 1]) < 0; ) e3[r3] = o3, r3 = s3;
                return e3[r3] = i3;
              }, "p"), v2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
                var a3, i3, o3, s3, l3;
                for (null == r3 && (r3 = n2), i3 = e3.length, l3 = t3, o3 = e3[t3], a3 = 2 * t3 + 1; a3 < i3; ) (s3 = a3 + 1) < i3 && !(r3(e3[a3], e3[s3]) < 0) && (a3 = s3), e3[t3] = e3[a3], a3 = 2 * (t3 = a3) + 1;
                return e3[t3] = o3, p2(e3, l3, t3, r3);
              }, "v"), t2 = function() {
                function e3(e4) {
                  this.cmp = null != e4 ? e4 : n2, this.nodes = [];
                }
                __name(e3, "e");
                return e3.push = o2, e3.pop = i2, e3.replace = l2, e3.pushpop = s2, e3.heapify = a2, e3.updateItem = f2, e3.nlargest = d2, e3.nsmallest = h2, e3.prototype.push = function(e4) {
                  return o2(this.nodes, e4, this.cmp);
                }, e3.prototype.pop = function() {
                  return i2(this.nodes, this.cmp);
                }, e3.prototype.peek = function() {
                  return this.nodes[0];
                }, e3.prototype.contains = function(e4) {
                  return -1 !== this.nodes.indexOf(e4);
                }, e3.prototype.replace = function(e4) {
                  return l2(this.nodes, e4, this.cmp);
                }, e3.prototype.pushpop = function(e4) {
                  return s2(this.nodes, e4, this.cmp);
                }, e3.prototype.heapify = function() {
                  return a2(this.nodes, this.cmp);
                }, e3.prototype.updateItem = function(e4) {
                  return f2(this.nodes, e4, this.cmp);
                }, e3.prototype.clear = function() {
                  return this.nodes = [];
                }, e3.prototype.empty = function() {
                  return 0 === this.nodes.length;
                }, e3.prototype.size = function() {
                  return this.nodes.length;
                }, e3.prototype.clone = function() {
                  var t3;
                  return (t3 = new e3()).nodes = this.nodes.slice(0), t3;
                }, e3.prototype.toArray = function() {
                  return this.nodes.slice(0);
                }, e3.prototype.insert = e3.prototype.push, e3.prototype.top = e3.prototype.peek, e3.prototype.front = e3.prototype.peek, e3.prototype.has = e3.prototype.contains, e3.prototype.copy = e3.prototype.clone, e3;
              }(), e2.exports = t2;
            }).call(Tt);
          }(kt)), kt.exports;
        }
        __name(Ct, "Ct");
        var Pt, St = Ee(Et ? wt : (Et = 1, wt = Ct())), Bt = ut({ root: null, weight: /* @__PURE__ */ __name(function(e2) {
          return 1;
        }, "weight"), directed: false }), Dt = { dijkstra: /* @__PURE__ */ __name(function(e2) {
          if (!K(e2)) {
            var t2 = arguments;
            e2 = { root: t2[0], weight: t2[1], directed: t2[2] };
          }
          var n2 = Bt(e2), r2 = n2.root, a2 = n2.weight, i2 = n2.directed, o2 = this, s2 = a2, l2 = W(r2) ? this.filter(r2)[0] : r2[0], u2 = {}, c2 = {}, d2 = {}, h2 = this.byGroup(), f2 = h2.nodes, p2 = h2.edges;
          p2.unmergeBy(function(e3) {
            return e3.isLoop();
          });
          for (var v2 = function(e3) {
            return u2[e3.id()];
          }, g2 = function(e3, t3) {
            u2[e3.id()] = t3, y2.updateItem(e3);
          }, y2 = new St(function(e3, t3) {
            return v2(e3) - v2(t3);
          }), m2 = 0; m2 < f2.length; m2++) {
            var b2 = f2[m2];
            u2[b2.id()] = b2.same(l2) ? 0 : 1 / 0, y2.push(b2);
          }
          for (var x2 = function(e3, t3) {
            for (var n3, r3 = (i2 ? e3.edgesTo(t3) : e3.edgesWith(t3)).intersect(p2), a3 = 1 / 0, o3 = 0; o3 < r3.length; o3++) {
              var l3 = r3[o3], u3 = s2(l3);
              (u3 < a3 || !n3) && (a3 = u3, n3 = l3);
            }
            return { edge: n3, dist: a3 };
          }; y2.size() > 0; ) {
            var w2 = y2.pop(), E2 = v2(w2), k2 = w2.id();
            if (d2[k2] = E2, E2 !== 1 / 0) for (var T2 = w2.neighborhood().intersect(f2), C2 = 0; C2 < T2.length; C2++) {
              var P2 = T2[C2], S2 = P2.id(), B2 = x2(w2, P2), D2 = E2 + B2.dist;
              D2 < v2(P2) && (g2(P2, D2), c2[S2] = { node: w2, edge: B2.edge });
            }
          }
          return { distanceTo: /* @__PURE__ */ __name(function(e3) {
            var t3 = W(e3) ? f2.filter(e3)[0] : e3[0];
            return d2[t3.id()];
          }, "distanceTo"), pathTo: /* @__PURE__ */ __name(function(e3) {
            var t3 = W(e3) ? f2.filter(e3)[0] : e3[0], n3 = [], r3 = t3, a3 = r3.id();
            if (t3.length > 0) for (n3.unshift(t3); c2[a3]; ) {
              var i3 = c2[a3];
              n3.unshift(i3.edge), n3.unshift(i3.node), a3 = (r3 = i3.node).id();
            }
            return o2.spawn(n3);
          }, "pathTo") };
        }, "dijkstra") }, _t = { kruskal: /* @__PURE__ */ __name(function(e2) {
          e2 = e2 || function(e3) {
            return 1;
          };
          for (var t2 = this.byGroup(), n2 = t2.nodes, r2 = t2.edges, a2 = n2.length, i2 = new Array(a2), o2 = n2, s2 = function(e3) {
            for (var t3 = 0; t3 < i2.length; t3++) {
              if (i2[t3].has(e3)) return t3;
            }
          }, l2 = 0; l2 < a2; l2++) i2[l2] = this.spawn(n2[l2]);
          for (var u2 = r2.sort(function(t3, n3) {
            return e2(t3) - e2(n3);
          }), c2 = 0; c2 < u2.length; c2++) {
            var d2 = u2[c2], h2 = d2.source()[0], f2 = d2.target()[0], p2 = s2(h2), v2 = s2(f2), g2 = i2[p2], y2 = i2[v2];
            p2 !== v2 && (o2.merge(d2), g2.merge(y2), i2.splice(v2, 1));
          }
          return o2;
        }, "kruskal") }, At = ut({ root: null, goal: null, weight: /* @__PURE__ */ __name(function(e2) {
          return 1;
        }, "weight"), heuristic: /* @__PURE__ */ __name(function(e2) {
          return 0;
        }, "heuristic"), directed: false }), Mt = { aStar: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.cy(), n2 = At(e2), r2 = n2.root, a2 = n2.goal, i2 = n2.heuristic, o2 = n2.directed, s2 = n2.weight;
          r2 = t2.collection(r2)[0], a2 = t2.collection(a2)[0];
          var l2, u2, c2 = r2.id(), d2 = a2.id(), h2 = {}, f2 = {}, p2 = {}, v2 = new St(function(e3, t3) {
            return f2[e3.id()] - f2[t3.id()];
          }), g2 = new gt(), y2 = {}, m2 = {}, b2 = /* @__PURE__ */ __name(function(e3, t3) {
            v2.push(e3), g2.add(t3);
          }, "b");
          b2(r2, c2), h2[c2] = 0, f2[c2] = i2(r2);
          for (var x2, w2 = 0; v2.size() > 0; ) {
            if (l2 = v2.pop(), u2 = l2.id(), g2.delete(u2), w2++, u2 === d2) {
              for (var E2 = [], k2 = a2, T2 = d2, C2 = m2[T2]; E2.unshift(k2), null != C2 && E2.unshift(C2), null != (k2 = y2[T2]); ) C2 = m2[T2 = k2.id()];
              return { found: true, distance: h2[u2], path: this.spawn(E2), steps: w2 };
            }
            p2[u2] = true;
            for (var P2 = l2._private.edges, S2 = 0; S2 < P2.length; S2++) {
              var B2 = P2[S2];
              if (this.hasElementWithId(B2.id()) && (!o2 || B2.data("source") === u2)) {
                var D2 = B2.source(), _2 = B2.target(), A2 = D2.id() !== u2 ? D2 : _2, M2 = A2.id();
                if (this.hasElementWithId(M2) && !p2[M2]) {
                  var R2 = h2[u2] + s2(B2);
                  x2 = M2, g2.has(x2) ? R2 < h2[M2] && (h2[M2] = R2, f2[M2] = R2 + i2(A2), y2[M2] = l2, m2[M2] = B2) : (h2[M2] = R2, f2[M2] = R2 + i2(A2), b2(A2, M2), y2[M2] = l2, m2[M2] = B2);
                }
              }
            }
          }
          return { found: false, distance: void 0, path: void 0, steps: w2 };
        }, "aStar") }, Rt = ut({ weight: /* @__PURE__ */ __name(function(e2) {
          return 1;
        }, "weight"), directed: false }), It = { floydWarshall: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = this.cy(), n2 = Rt(e2), r2 = n2.weight, a2 = n2.directed, i2 = r2, o2 = this.byGroup(), s2 = o2.nodes, l2 = o2.edges, u2 = s2.length, c2 = u2 * u2, d2 = function(e3) {
            return s2.indexOf(e3);
          }, h2 = function(e3) {
            return s2[e3];
          }, f2 = new Array(c2), p2 = 0; p2 < c2; p2++) {
            var v2 = p2 % u2, g2 = (p2 - v2) / u2;
            f2[p2] = g2 === v2 ? 0 : 1 / 0;
          }
          for (var y2 = new Array(c2), m2 = new Array(c2), b2 = 0; b2 < l2.length; b2++) {
            var x2 = l2[b2], w2 = x2.source()[0], E2 = x2.target()[0];
            if (w2 !== E2) {
              var k2 = d2(w2), T2 = d2(E2), C2 = k2 * u2 + T2, P2 = i2(x2);
              if (f2[C2] > P2 && (f2[C2] = P2, y2[C2] = T2, m2[C2] = x2), !a2) {
                var S2 = T2 * u2 + k2;
                !a2 && f2[S2] > P2 && (f2[S2] = P2, y2[S2] = k2, m2[S2] = x2);
              }
            }
          }
          for (var B2 = 0; B2 < u2; B2++) for (var D2 = 0; D2 < u2; D2++) for (var _2 = D2 * u2 + B2, A2 = 0; A2 < u2; A2++) {
            var M2 = D2 * u2 + A2, R2 = B2 * u2 + A2;
            f2[_2] + f2[R2] < f2[M2] && (f2[M2] = f2[_2] + f2[R2], y2[M2] = y2[_2]);
          }
          var I2 = /* @__PURE__ */ __name(function(e3) {
            return d2(function(e4) {
              return (W(e4) ? t2.filter(e4) : e4)[0];
            }(e3));
          }, "I"), N2 = { distance: /* @__PURE__ */ __name(function(e3, t3) {
            var n3 = I2(e3), r3 = I2(t3);
            return f2[n3 * u2 + r3];
          }, "distance"), path: /* @__PURE__ */ __name(function(e3, n3) {
            var r3 = I2(e3), a3 = I2(n3), i3 = h2(r3);
            if (r3 === a3) return i3.collection();
            if (null == y2[r3 * u2 + a3]) return t2.collection();
            var o3, s3 = t2.collection(), l3 = r3;
            for (s3.merge(i3); r3 !== a3; ) l3 = r3, r3 = y2[r3 * u2 + a3], o3 = m2[l3 * u2 + r3], s3.merge(o3), s3.merge(h2(r3));
            return s3;
          }, "path") };
          return N2;
        }, "floydWarshall") }, Nt = ut({ weight: /* @__PURE__ */ __name(function(e2) {
          return 1;
        }, "weight"), directed: false, root: null }), Lt = { bellmanFord: /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = Nt(e2), r2 = n2.weight, a2 = n2.directed, i2 = n2.root, o2 = r2, s2 = this, l2 = this.cy(), u2 = this.byGroup(), c2 = u2.edges, d2 = u2.nodes, h2 = d2.length, f2 = new pt(), p2 = false, v2 = [];
          i2 = l2.collection(i2)[0], c2.unmergeBy(function(e3) {
            return e3.isLoop();
          });
          for (var g2 = c2.length, y2 = function(e3) {
            var t3 = f2.get(e3.id());
            return t3 || (t3 = {}, f2.set(e3.id(), t3)), t3;
          }, m2 = function(e3) {
            return (W(e3) ? l2.$(e3) : e3)[0];
          }, b2 = 0; b2 < h2; b2++) {
            var x2 = d2[b2], w2 = y2(x2);
            x2.same(i2) ? w2.dist = 0 : w2.dist = 1 / 0, w2.pred = null, w2.edge = null;
          }
          for (var E2 = false, k2 = function(e3, t3, n3, r3, a3, i3) {
            var o3 = r3.dist + i3;
            o3 < a3.dist && !n3.same(r3.edge) && (a3.dist = o3, a3.pred = e3, a3.edge = n3, E2 = true);
          }, T2 = 1; T2 < h2; T2++) {
            E2 = false;
            for (var C2 = 0; C2 < g2; C2++) {
              var P2 = c2[C2], S2 = P2.source(), B2 = P2.target(), D2 = o2(P2), _2 = y2(S2), A2 = y2(B2);
              k2(S2, 0, P2, _2, A2, D2), a2 || k2(B2, 0, P2, A2, _2, D2);
            }
            if (!E2) break;
          }
          if (E2) for (var M2 = [], R2 = 0; R2 < g2; R2++) {
            var I2 = c2[R2], N2 = I2.source(), L2 = I2.target(), z2 = o2(I2), O2 = y2(N2).dist, V2 = y2(L2).dist;
            if (O2 + z2 < V2 || !a2 && V2 + z2 < O2) {
              if (p2 || (at("Graph contains a negative weight cycle for Bellman-Ford"), p2 = true), false === e2.findNegativeWeightCycles) break;
              var F2 = [];
              O2 + z2 < V2 && F2.push(N2), !a2 && V2 + z2 < O2 && F2.push(L2);
              for (var X2 = F2.length, j2 = 0; j2 < X2; j2++) {
                var Y2 = F2[j2], q2 = [Y2];
                q2.push(y2(Y2).edge);
                for (var U2 = y2(Y2).pred; -1 === q2.indexOf(U2); ) q2.push(U2), q2.push(y2(U2).edge), U2 = y2(U2).pred;
                for (var H2 = (q2 = q2.slice(q2.indexOf(U2)))[0].id(), K2 = 0, G2 = 2; G2 < q2.length; G2 += 2) q2[G2].id() < H2 && (H2 = q2[G2].id(), K2 = G2);
                (q2 = q2.slice(K2).concat(q2.slice(0, K2))).push(q2[0]);
                var Z2 = q2.map(function(e3) {
                  return e3.id();
                }).join(",");
                -1 === M2.indexOf(Z2) && (v2.push(s2.spawn(q2)), M2.push(Z2));
              }
            }
          }
          return { distanceTo: /* @__PURE__ */ __name(function(e3) {
            return y2(m2(e3)).dist;
          }, "distanceTo"), pathTo: /* @__PURE__ */ __name(function(e3) {
            for (var n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i2, r3 = [], a3 = m2(e3); ; ) {
              if (null == a3) return t2.spawn();
              var o3 = y2(a3), l3 = o3.edge, u3 = o3.pred;
              if (r3.unshift(a3[0]), a3.same(n3) && r3.length > 0) break;
              null != l3 && r3.unshift(l3), a3 = u3;
            }
            return s2.spawn(r3);
          }, "pathTo"), hasNegativeWeightCycle: p2, negativeWeightCycles: v2 };
        }, "bellmanFord") }, zt = Math.sqrt(2), Ot = /* @__PURE__ */ __name(function(e2, t2, n2) {
          0 === n2.length && nt("Karger-Stein must be run on a connected (sub)graph");
          for (var r2 = n2[e2], a2 = r2[1], i2 = r2[2], o2 = t2[a2], s2 = t2[i2], l2 = n2, u2 = l2.length - 1; u2 >= 0; u2--) {
            var c2 = l2[u2], d2 = c2[1], h2 = c2[2];
            (t2[d2] === o2 && t2[h2] === s2 || t2[d2] === s2 && t2[h2] === o2) && l2.splice(u2, 1);
          }
          for (var f2 = 0; f2 < l2.length; f2++) {
            var p2 = l2[f2];
            p2[1] === s2 ? (l2[f2] = p2.slice(), l2[f2][1] = o2) : p2[2] === s2 && (l2[f2] = p2.slice(), l2[f2][2] = o2);
          }
          for (var v2 = 0; v2 < t2.length; v2++) t2[v2] === s2 && (t2[v2] = o2);
          return l2;
        }, "Ot"), Vt = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          for (; n2 > r2; ) {
            var a2 = Math.floor(Math.random() * t2.length);
            t2 = Ot(a2, e2, t2), n2--;
          }
          return t2;
        }, "Vt"), Ft = { kargerStein: /* @__PURE__ */ __name(function() {
          var e2 = this, t2 = this.byGroup(), n2 = t2.nodes, r2 = t2.edges;
          r2.unmergeBy(function(e3) {
            return e3.isLoop();
          });
          var a2 = n2.length, i2 = r2.length, o2 = Math.ceil(Math.pow(Math.log(a2) / Math.LN2, 2)), s2 = Math.floor(a2 / zt);
          if (!(a2 < 2)) {
            for (var l2 = [], u2 = 0; u2 < i2; u2++) {
              var c2 = r2[u2];
              l2.push([u2, n2.indexOf(c2.source()), n2.indexOf(c2.target())]);
            }
            for (var d2 = 1 / 0, h2 = [], f2 = new Array(a2), p2 = new Array(a2), v2 = new Array(a2), g2 = function(e3, t3) {
              for (var n3 = 0; n3 < a2; n3++) t3[n3] = e3[n3];
            }, y2 = 0; y2 <= o2; y2++) {
              for (var m2 = 0; m2 < a2; m2++) p2[m2] = m2;
              var b2 = Vt(p2, l2.slice(), a2, s2), x2 = b2.slice();
              g2(p2, v2);
              var w2 = Vt(p2, b2, s2, 2), E2 = Vt(v2, x2, s2, 2);
              w2.length <= E2.length && w2.length < d2 ? (d2 = w2.length, h2 = w2, g2(p2, f2)) : E2.length <= w2.length && E2.length < d2 && (d2 = E2.length, h2 = E2, g2(v2, f2));
            }
            for (var k2 = this.spawn(h2.map(function(e3) {
              return r2[e3[0]];
            })), T2 = this.spawn(), C2 = this.spawn(), P2 = f2[0], S2 = 0; S2 < f2.length; S2++) {
              var B2 = f2[S2], D2 = n2[S2];
              B2 === P2 ? T2.merge(D2) : C2.merge(D2);
            }
            var _2 = /* @__PURE__ */ __name(function(t3) {
              var n3 = e2.spawn();
              return t3.forEach(function(t4) {
                n3.merge(t4), t4.connectedEdges().forEach(function(t5) {
                  e2.contains(t5) && !k2.contains(t5) && n3.merge(t5);
                });
              }), n3;
            }, "_"), A2 = [_2(T2), _2(C2)];
            return { cut: k2, components: A2, partition1: T2, partition2: C2 };
          }
          nt("At least 2 nodes are required for Karger-Stein algorithm");
        }, "kargerStein") }, Xt = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return { x: e2.x * t2 + n2.x, y: e2.y * t2 + n2.y };
        }, "Xt"), jt = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return { x: (e2.x - n2.x) / t2, y: (e2.y - n2.y) / t2 };
        }, "jt"), Yt = /* @__PURE__ */ __name(function(e2) {
          return { x: e2[0], y: e2[1] };
        }, "Yt"), qt = /* @__PURE__ */ __name(function(e2, t2) {
          return Math.atan2(t2, e2) - Math.PI / 2;
        }, "qt"), Wt = Math.log2 || function(e2) {
          return Math.log(e2) / Math.log(2);
        }, Ut = /* @__PURE__ */ __name(function(e2) {
          return e2 > 0 ? 1 : e2 < 0 ? -1 : 0;
        }, "Ut"), Ht = /* @__PURE__ */ __name(function(e2, t2) {
          return Math.sqrt(Kt(e2, t2));
        }, "Ht"), Kt = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = t2.x - e2.x, r2 = t2.y - e2.y;
          return n2 * n2 + r2 * r2;
        }, "Kt"), Gt = /* @__PURE__ */ __name(function(e2) {
          for (var t2 = e2.length, n2 = 0, r2 = 0; r2 < t2; r2++) n2 += e2[r2];
          for (var a2 = 0; a2 < t2; a2++) e2[a2] = e2[a2] / n2;
          return e2;
        }, "Gt"), Zt = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          return (1 - r2) * (1 - r2) * e2 + 2 * (1 - r2) * r2 * t2 + r2 * r2 * n2;
        }, "Zt"), $t = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          return { x: Zt(e2.x, t2.x, n2.x, r2), y: Zt(e2.y, t2.y, n2.y, r2) };
        }, "$t"), Qt = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return Math.max(e2, Math.min(n2, t2));
        }, "Qt"), Jt = /* @__PURE__ */ __name(function(e2) {
          if (null == e2) return { x1: 1 / 0, y1: 1 / 0, x2: -1 / 0, y2: -1 / 0, w: 0, h: 0 };
          if (null != e2.x1 && null != e2.y1) {
            if (null != e2.x2 && null != e2.y2 && e2.x2 >= e2.x1 && e2.y2 >= e2.y1) return { x1: e2.x1, y1: e2.y1, x2: e2.x2, y2: e2.y2, w: e2.x2 - e2.x1, h: e2.y2 - e2.y1 };
            if (null != e2.w && null != e2.h && e2.w >= 0 && e2.h >= 0) return { x1: e2.x1, y1: e2.y1, x2: e2.x1 + e2.w, y2: e2.y1 + e2.h, w: e2.w, h: e2.h };
          }
        }, "Jt"), en = /* @__PURE__ */ __name(function(e2, t2, n2) {
          e2.x1 = Math.min(e2.x1, t2), e2.x2 = Math.max(e2.x2, t2), e2.w = e2.x2 - e2.x1, e2.y1 = Math.min(e2.y1, n2), e2.y2 = Math.max(e2.y2, n2), e2.h = e2.y2 - e2.y1;
        }, "en"), tn = /* @__PURE__ */ __name(function(e2) {
          var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return e2.x1 -= t2, e2.x2 += t2, e2.y1 -= t2, e2.y2 += t2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1, e2;
        }, "tn"), nn = /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2, a2, o2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [0];
          if (1 === o2.length) t2 = n2 = r2 = a2 = o2[0];
          else if (2 === o2.length) t2 = r2 = o2[0], a2 = n2 = o2[1];
          else if (4 === o2.length) {
            var s2 = i(o2, 4);
            t2 = s2[0], n2 = s2[1], r2 = s2[2], a2 = s2[3];
          }
          return e2.x1 -= a2, e2.x2 += n2, e2.y1 -= t2, e2.y2 += r2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1, e2;
        }, "nn"), rn = /* @__PURE__ */ __name(function(e2, t2) {
          e2.x1 = t2.x1, e2.y1 = t2.y1, e2.x2 = t2.x2, e2.y2 = t2.y2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1;
        }, "rn"), an = /* @__PURE__ */ __name(function(e2, t2) {
          return !(e2.x1 > t2.x2) && (!(t2.x1 > e2.x2) && (!(e2.x2 < t2.x1) && (!(t2.x2 < e2.x1) && (!(e2.y2 < t2.y1) && (!(t2.y2 < e2.y1) && (!(e2.y1 > t2.y2) && !(t2.y1 > e2.y2)))))));
        }, "an"), on = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return e2.x1 <= t2 && t2 <= e2.x2 && e2.y1 <= n2 && n2 <= e2.y2;
        }, "on"), sn = /* @__PURE__ */ __name(function(e2, t2) {
          return on(e2, t2.x, t2.y);
        }, "sn"), ln = /* @__PURE__ */ __name(function(e2, t2) {
          return on(e2, t2.x1, t2.y1) && on(e2, t2.x2, t2.y2);
        }, "ln"), un = null !== (Pt = Math.hypot) && void 0 !== Pt ? Pt : function(e2, t2) {
          return Math.sqrt(e2 * e2 + t2 * t2);
        };
        function cn(e2, t2, n2, r2, a2, i2) {
          var o2 = function(e3, t3) {
            if (e3.length < 3) throw new Error("Need at least 3 vertices");
            var n3 = /* @__PURE__ */ __name(function(e4, t4) {
              return { x: e4.x + t4.x, y: e4.y + t4.y };
            }, "n"), r3 = /* @__PURE__ */ __name(function(e4, t4) {
              return { x: e4.x - t4.x, y: e4.y - t4.y };
            }, "r"), a3 = /* @__PURE__ */ __name(function(e4, t4) {
              return { x: e4.x * t4, y: e4.y * t4 };
            }, "a"), i3 = /* @__PURE__ */ __name(function(e4, t4) {
              return e4.x * t4.y - e4.y * t4.x;
            }, "i"), o3 = /* @__PURE__ */ __name(function(e4, t4, o4, s4) {
              var l3 = r3(t4, e4), u3 = r3(s4, o4), c3 = i3(l3, u3);
              if (Math.abs(c3) < 1e-9) return n3(e4, a3(l3, 0.5));
              var d3 = i3(r3(o4, e4), u3) / c3;
              return n3(e4, a3(l3, d3));
            }, "o"), s3 = e3.map(function(e4) {
              return { x: e4.x, y: e4.y };
            });
            (function(e4) {
              for (var t4 = 0, n4 = 0; n4 < e4.length; n4++) {
                var r4 = e4[n4], a4 = e4[(n4 + 1) % e4.length];
                t4 += r4.x * a4.y - a4.x * r4.y;
              }
              return t4 / 2;
            })(s3) < 0 && s3.reverse();
            for (var l2, u2, c2 = s3.length, d2 = [], h2 = 0; h2 < c2; h2++) {
              var f2 = s3[h2], p2 = s3[(h2 + 1) % c2], v2 = r3(p2, f2), g2 = (l2 = { x: v2.y, y: -v2.x }, u2 = void 0, 0 === (u2 = un(l2.x, l2.y)) ? { x: 0, y: 0 } : { x: l2.x / u2, y: l2.y / u2 });
              d2.push(g2);
            }
            for (var y2 = d2.map(function(e4, r4) {
              return { p1: n3(s3[r4], a3(e4, t3)), p2: n3(s3[(r4 + 1) % c2], a3(e4, t3)) };
            }), m2 = [], b2 = 0; b2 < c2; b2++) {
              var x2 = y2[(b2 - 1 + c2) % c2], w2 = y2[b2], E2 = o3(x2.p1, x2.p2, w2.p1, w2.p2);
              m2.push(E2);
            }
            return m2;
          }(Tn(e2, t2, n2, r2, a2), i2), s2 = Jt();
          return o2.forEach(function(e3) {
            return en(s2, e3.x, e3.y);
          }), s2;
        }
        __name(cn, "cn");
        var dn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          var s2, l2, u2 = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "auto", c2 = "auto" === u2 ? _n(a2, i2) : u2, d2 = a2 / 2, h2 = i2 / 2, f2 = (c2 = Math.min(c2, d2, h2)) !== d2, p2 = c2 !== h2;
          if (f2) {
            var v2 = r2 - h2 - o2;
            if ((s2 = kn(e2, t2, n2, r2, n2 - d2 + c2 - o2, v2, n2 + d2 - c2 + o2, v2, false)).length > 0) return s2;
          }
          if (p2) {
            var g2 = n2 + d2 + o2;
            if ((s2 = kn(e2, t2, n2, r2, g2, r2 - h2 + c2 - o2, g2, r2 + h2 - c2 + o2, false)).length > 0) return s2;
          }
          if (f2) {
            var y2 = r2 + h2 + o2;
            if ((s2 = kn(e2, t2, n2, r2, n2 - d2 + c2 - o2, y2, n2 + d2 - c2 + o2, y2, false)).length > 0) return s2;
          }
          if (p2) {
            var m2 = n2 - d2 - o2;
            if ((s2 = kn(e2, t2, n2, r2, m2, r2 - h2 + c2 - o2, m2, r2 + h2 - c2 + o2, false)).length > 0) return s2;
          }
          var b2 = n2 - d2 + c2, x2 = r2 - h2 + c2;
          if ((l2 = wn(e2, t2, n2, r2, b2, x2, c2 + o2)).length > 0 && l2[0] <= b2 && l2[1] <= x2) return [l2[0], l2[1]];
          var w2 = n2 + d2 - c2, E2 = r2 - h2 + c2;
          if ((l2 = wn(e2, t2, n2, r2, w2, E2, c2 + o2)).length > 0 && l2[0] >= w2 && l2[1] <= E2) return [l2[0], l2[1]];
          var k2 = n2 + d2 - c2, T2 = r2 + h2 - c2;
          if ((l2 = wn(e2, t2, n2, r2, k2, T2, c2 + o2)).length > 0 && l2[0] >= k2 && l2[1] >= T2) return [l2[0], l2[1]];
          var C2 = n2 - d2 + c2, P2 = r2 + h2 - c2;
          return (l2 = wn(e2, t2, n2, r2, C2, P2, c2 + o2)).length > 0 && l2[0] <= C2 && l2[1] >= P2 ? [l2[0], l2[1]] : [];
        }, "dn"), hn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          var s2 = o2, l2 = Math.min(n2, a2), u2 = Math.max(n2, a2), c2 = Math.min(r2, i2), d2 = Math.max(r2, i2);
          return l2 - s2 <= e2 && e2 <= u2 + s2 && c2 - s2 <= t2 && t2 <= d2 + s2;
        }, "hn"), fn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2, l2) {
          var u2 = Math.min(n2, o2, a2) - l2, c2 = Math.max(n2, o2, a2) + l2, d2 = Math.min(r2, s2, i2) - l2, h2 = Math.max(r2, s2, i2) + l2;
          return !(e2 < u2 || e2 > c2 || t2 < d2 || t2 > h2);
        }, "fn"), pn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
          var l2 = [];
          !function(e3, t3, n3, r3, a3) {
            var i3, o3, s3, l3, u3, c3, d3, h3;
            0 === e3 && (e3 = 1e-5), s3 = -27 * (r3 /= e3) + (t3 /= e3) * (9 * (n3 /= e3) - t3 * t3 * 2), i3 = (o3 = (3 * n3 - t3 * t3) / 9) * o3 * o3 + (s3 /= 54) * s3, a3[1] = 0, d3 = t3 / 3, i3 > 0 ? (u3 = (u3 = s3 + Math.sqrt(i3)) < 0 ? -Math.pow(-u3, 1 / 3) : Math.pow(u3, 1 / 3), c3 = (c3 = s3 - Math.sqrt(i3)) < 0 ? -Math.pow(-c3, 1 / 3) : Math.pow(c3, 1 / 3), a3[0] = -d3 + u3 + c3, d3 += (u3 + c3) / 2, a3[4] = a3[2] = -d3, d3 = Math.sqrt(3) * (-c3 + u3) / 2, a3[3] = d3, a3[5] = -d3) : (a3[5] = a3[3] = 0, 0 === i3 ? (h3 = s3 < 0 ? -Math.pow(-s3, 1 / 3) : Math.pow(s3, 1 / 3), a3[0] = 2 * h3 - d3, a3[4] = a3[2] = -(h3 + d3)) : (l3 = (o3 = -o3) * o3 * o3, l3 = Math.acos(s3 / Math.sqrt(l3)), h3 = 2 * Math.sqrt(o3), a3[0] = -d3 + h3 * Math.cos(l3 / 3), a3[2] = -d3 + h3 * Math.cos((l3 + 2 * Math.PI) / 3), a3[4] = -d3 + h3 * Math.cos((l3 + 4 * Math.PI) / 3)));
          }(1 * n2 * n2 - 4 * n2 * a2 + 2 * n2 * o2 + 4 * a2 * a2 - 4 * a2 * o2 + o2 * o2 + r2 * r2 - 4 * r2 * i2 + 2 * r2 * s2 + 4 * i2 * i2 - 4 * i2 * s2 + s2 * s2, 9 * n2 * a2 - 3 * n2 * n2 - 3 * n2 * o2 - 6 * a2 * a2 + 3 * a2 * o2 + 9 * r2 * i2 - 3 * r2 * r2 - 3 * r2 * s2 - 6 * i2 * i2 + 3 * i2 * s2, 3 * n2 * n2 - 6 * n2 * a2 + n2 * o2 - n2 * e2 + 2 * a2 * a2 + 2 * a2 * e2 - o2 * e2 + 3 * r2 * r2 - 6 * r2 * i2 + r2 * s2 - r2 * t2 + 2 * i2 * i2 + 2 * i2 * t2 - s2 * t2, 1 * n2 * a2 - n2 * n2 + n2 * e2 - a2 * e2 + r2 * i2 - r2 * r2 + r2 * t2 - i2 * t2, l2);
          for (var u2 = [], c2 = 0; c2 < 6; c2 += 2) Math.abs(l2[c2 + 1]) < 1e-7 && l2[c2] >= 0 && l2[c2] <= 1 && u2.push(l2[c2]);
          u2.push(1), u2.push(0);
          for (var d2, h2, f2, p2 = -1, v2 = 0; v2 < u2.length; v2++) d2 = Math.pow(1 - u2[v2], 2) * n2 + 2 * (1 - u2[v2]) * u2[v2] * a2 + u2[v2] * u2[v2] * o2, h2 = Math.pow(1 - u2[v2], 2) * r2 + 2 * (1 - u2[v2]) * u2[v2] * i2 + u2[v2] * u2[v2] * s2, f2 = Math.pow(d2 - e2, 2) + Math.pow(h2 - t2, 2), p2 >= 0 ? f2 < p2 && (p2 = f2) : p2 = f2;
          return p2;
        }, "pn"), vn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
          var o2 = [e2 - n2, t2 - r2], s2 = [a2 - n2, i2 - r2], l2 = s2[0] * s2[0] + s2[1] * s2[1], u2 = o2[0] * o2[0] + o2[1] * o2[1], c2 = o2[0] * s2[0] + o2[1] * s2[1], d2 = c2 * c2 / l2;
          return c2 < 0 ? u2 : d2 > l2 ? (e2 - a2) * (e2 - a2) + (t2 - i2) * (t2 - i2) : u2 - d2;
        }, "vn"), gn = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2, a2, i2, o2, s2 = 0, l2 = 0; l2 < n2.length / 2; l2++) if (r2 = n2[2 * l2], a2 = n2[2 * l2 + 1], l2 + 1 < n2.length / 2 ? (i2 = n2[2 * (l2 + 1)], o2 = n2[2 * (l2 + 1) + 1]) : (i2 = n2[2 * (l2 + 1 - n2.length / 2)], o2 = n2[2 * (l2 + 1 - n2.length / 2) + 1]), r2 == e2 && i2 == e2) ;
          else {
            if (!(r2 >= e2 && e2 >= i2 || r2 <= e2 && e2 <= i2)) continue;
            (e2 - r2) / (i2 - r2) * (o2 - a2) + a2 > t2 && s2++;
          }
          return s2 % 2 != 0;
        }, "gn"), yn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2, l2) {
          var u2, c2 = new Array(n2.length);
          null != s2[0] ? (u2 = Math.atan(s2[1] / s2[0]), s2[0] < 0 ? u2 += Math.PI / 2 : u2 = -u2 - Math.PI / 2) : u2 = s2;
          for (var d2, h2 = Math.cos(-u2), f2 = Math.sin(-u2), p2 = 0; p2 < c2.length / 2; p2++) c2[2 * p2] = i2 / 2 * (n2[2 * p2] * h2 - n2[2 * p2 + 1] * f2), c2[2 * p2 + 1] = o2 / 2 * (n2[2 * p2 + 1] * h2 + n2[2 * p2] * f2), c2[2 * p2] += r2, c2[2 * p2 + 1] += a2;
          if (l2 > 0) {
            var v2 = bn(c2, -l2);
            d2 = mn(v2);
          } else d2 = c2;
          return gn(e2, t2, d2);
        }, "yn"), mn = /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2, r2, a2, i2, o2, s2, l2, u2 = new Array(e2.length / 2), c2 = 0; c2 < e2.length / 4; c2++) {
            t2 = e2[4 * c2], n2 = e2[4 * c2 + 1], r2 = e2[4 * c2 + 2], a2 = e2[4 * c2 + 3], c2 < e2.length / 4 - 1 ? (i2 = e2[4 * (c2 + 1)], o2 = e2[4 * (c2 + 1) + 1], s2 = e2[4 * (c2 + 1) + 2], l2 = e2[4 * (c2 + 1) + 3]) : (i2 = e2[0], o2 = e2[1], s2 = e2[2], l2 = e2[3]);
            var d2 = kn(t2, n2, r2, a2, i2, o2, s2, l2, true);
            u2[2 * c2] = d2[0], u2[2 * c2 + 1] = d2[1];
          }
          return u2;
        }, "mn"), bn = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2, r2, a2, i2, o2 = new Array(2 * e2.length), s2 = 0; s2 < e2.length / 2; s2++) {
            n2 = e2[2 * s2], r2 = e2[2 * s2 + 1], s2 < e2.length / 2 - 1 ? (a2 = e2[2 * (s2 + 1)], i2 = e2[2 * (s2 + 1) + 1]) : (a2 = e2[0], i2 = e2[1]);
            var l2 = i2 - r2, u2 = -(a2 - n2), c2 = Math.sqrt(l2 * l2 + u2 * u2), d2 = l2 / c2, h2 = u2 / c2;
            o2[4 * s2] = n2 + d2 * t2, o2[4 * s2 + 1] = r2 + h2 * t2, o2[4 * s2 + 2] = a2 + d2 * t2, o2[4 * s2 + 3] = i2 + h2 * t2;
          }
          return o2;
        }, "bn"), xn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          return e2 -= a2, t2 -= i2, (e2 /= n2 / 2 + o2) * e2 + (t2 /= r2 / 2 + o2) * t2 <= 1;
        }, "xn"), wn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          var s2 = [n2 - e2, r2 - t2], l2 = [e2 - a2, t2 - i2], u2 = s2[0] * s2[0] + s2[1] * s2[1], c2 = 2 * (l2[0] * s2[0] + l2[1] * s2[1]), d2 = c2 * c2 - 4 * u2 * (l2[0] * l2[0] + l2[1] * l2[1] - o2 * o2);
          if (d2 < 0) return [];
          var h2 = (-c2 + Math.sqrt(d2)) / (2 * u2), f2 = (-c2 - Math.sqrt(d2)) / (2 * u2), p2 = Math.min(h2, f2), v2 = Math.max(h2, f2), g2 = [];
          if (p2 >= 0 && p2 <= 1 && g2.push(p2), v2 >= 0 && v2 <= 1 && g2.push(v2), 0 === g2.length) return [];
          var y2 = g2[0] * s2[0] + e2, m2 = g2[0] * s2[1] + t2;
          return g2.length > 1 ? g2[0] == g2[1] ? [y2, m2] : [y2, m2, g2[1] * s2[0] + e2, g2[1] * s2[1] + t2] : [y2, m2];
        }, "wn"), En = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return t2 <= e2 && e2 <= n2 || n2 <= e2 && e2 <= t2 ? e2 : e2 <= t2 && t2 <= n2 || n2 <= t2 && t2 <= e2 ? t2 : n2;
        }, "En"), kn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2, l2) {
          var u2 = e2 - a2, c2 = n2 - e2, d2 = o2 - a2, h2 = t2 - i2, f2 = r2 - t2, p2 = s2 - i2, v2 = d2 * h2 - p2 * u2, g2 = c2 * h2 - f2 * u2, y2 = p2 * c2 - d2 * f2;
          if (0 !== y2) {
            var m2 = v2 / y2, b2 = g2 / y2, x2 = -1e-3;
            return x2 <= m2 && m2 <= 1.001 && x2 <= b2 && b2 <= 1.001 || l2 ? [e2 + m2 * c2, t2 + m2 * f2] : [];
          }
          return 0 === v2 || 0 === g2 ? En(e2, n2, o2) === o2 ? [o2, s2] : En(e2, n2, a2) === a2 ? [a2, i2] : En(a2, o2, n2) === n2 ? [n2, r2] : [] : [];
        }, "kn"), Tn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          var i2 = [], o2 = r2 / 2, s2 = a2 / 2, l2 = t2, u2 = n2;
          i2.push({ x: l2 + o2 * e2[0], y: u2 + s2 * e2[1] });
          for (var c2 = 1; c2 < e2.length / 2; c2++) i2.push({ x: l2 + o2 * e2[2 * c2], y: u2 + s2 * e2[2 * c2 + 1] });
          return i2;
        }, "Tn"), Cn = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
          var l2, u2, c2, d2, h2, f2, p2 = [], v2 = new Array(n2.length), g2 = true;
          if (null == i2 && (g2 = false), g2) {
            for (var y2 = 0; y2 < v2.length / 2; y2++) v2[2 * y2] = n2[2 * y2] * i2 + r2, v2[2 * y2 + 1] = n2[2 * y2 + 1] * o2 + a2;
            if (s2 > 0) {
              var m2 = bn(v2, -s2);
              u2 = mn(m2);
            } else u2 = v2;
          } else u2 = n2;
          for (var b2 = 0; b2 < u2.length / 2; b2++) c2 = u2[2 * b2], d2 = u2[2 * b2 + 1], b2 < u2.length / 2 - 1 ? (h2 = u2[2 * (b2 + 1)], f2 = u2[2 * (b2 + 1) + 1]) : (h2 = u2[0], f2 = u2[1]), 0 !== (l2 = kn(e2, t2, r2, a2, c2, d2, h2, f2)).length && p2.push(l2[0], l2[1]);
          return p2;
        }, "Cn"), Pn = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = [e2[0] - t2[0], e2[1] - t2[1]], a2 = Math.sqrt(r2[0] * r2[0] + r2[1] * r2[1]), i2 = (a2 - n2) / a2;
          return i2 < 0 && (i2 = 1e-5), [t2[0] + i2 * r2[0], t2[1] + i2 * r2[1]];
        }, "Pn"), Sn = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = Dn(e2, t2);
          return n2 = Bn(n2);
        }, "Sn"), Bn = /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2, r2 = e2.length / 2, a2 = 1 / 0, i2 = 1 / 0, o2 = -1 / 0, s2 = -1 / 0, l2 = 0; l2 < r2; l2++) t2 = e2[2 * l2], n2 = e2[2 * l2 + 1], a2 = Math.min(a2, t2), o2 = Math.max(o2, t2), i2 = Math.min(i2, n2), s2 = Math.max(s2, n2);
          for (var u2 = 2 / (o2 - a2), c2 = 2 / (s2 - i2), d2 = 0; d2 < r2; d2++) t2 = e2[2 * d2] = e2[2 * d2] * u2, n2 = e2[2 * d2 + 1] = e2[2 * d2 + 1] * c2, a2 = Math.min(a2, t2), o2 = Math.max(o2, t2), i2 = Math.min(i2, n2), s2 = Math.max(s2, n2);
          if (i2 < -1) for (var h2 = 0; h2 < r2; h2++) n2 = e2[2 * h2 + 1] = e2[2 * h2 + 1] + (-1 - i2);
          return e2;
        }, "Bn"), Dn = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = 1 / e2 * 2 * Math.PI, r2 = e2 % 2 == 0 ? Math.PI / 2 + n2 / 2 : Math.PI / 2;
          r2 += t2;
          for (var a2, i2 = new Array(2 * e2), o2 = 0; o2 < e2; o2++) a2 = o2 * n2 + r2, i2[2 * o2] = Math.cos(a2), i2[2 * o2 + 1] = Math.sin(-a2);
          return i2;
        }, "Dn"), _n = /* @__PURE__ */ __name(function(e2, t2) {
          return Math.min(e2 / 4, t2 / 4, 8);
        }, "_n"), An = /* @__PURE__ */ __name(function(e2, t2) {
          return Math.min(e2 / 10, t2 / 10, 8);
        }, "An"), Mn = /* @__PURE__ */ __name(function(e2, t2) {
          return { heightOffset: Math.min(15, 0.05 * t2), widthOffset: Math.min(100, 0.25 * e2), ctrlPtOffsetPct: 0.05 };
        }, "Mn");
        function Rn(e2, t2) {
          function n2(e3) {
            for (var t3 = [], n3 = 0; n3 < e3.length; n3++) {
              var r2 = e3[n3], a3 = e3[(n3 + 1) % e3.length], i3 = { x: a3.x - r2.x, y: a3.y - r2.y }, o2 = { x: -i3.y, y: i3.x }, s3 = Math.sqrt(o2.x * o2.x + o2.y * o2.y);
              t3.push({ x: o2.x / s3, y: o2.y / s3 });
            }
            return t3;
          }
          __name(n2, "n");
          function a2(e3, t3) {
            var n3, a3 = 1 / 0, i3 = -1 / 0, o2 = r(e3);
            try {
              for (o2.s(); !(n3 = o2.n()).done; ) {
                var s3 = n3.value, l3 = s3.x * t3.x + s3.y * t3.y;
                a3 = Math.min(a3, l3), i3 = Math.max(i3, l3);
              }
            } catch (e4) {
              o2.e(e4);
            } finally {
              o2.f();
            }
            return { min: a3, max: i3 };
          }
          __name(a2, "a");
          function i2(e3, t3) {
            return !(e3.max < t3.min || t3.max < e3.min);
          }
          __name(i2, "i");
          var s2, l2 = r([].concat(o(n2(e2)), o(n2(t2))));
          try {
            for (l2.s(); !(s2 = l2.n()).done; ) {
              var u2 = s2.value;
              if (!i2(a2(e2, u2), a2(t2, u2))) return false;
            }
          } catch (e3) {
            l2.e(e3);
          } finally {
            l2.f();
          }
          return true;
        }
        __name(Rn, "Rn");
        var In = ut({ dampingFactor: 0.8, precision: 1e-6, iterations: 200, weight: /* @__PURE__ */ __name(function(e2) {
          return 1;
        }, "weight") }), Nn = { pageRank: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = In(e2), n2 = t2.dampingFactor, r2 = t2.precision, a2 = t2.iterations, i2 = t2.weight, o2 = this._private.cy, s2 = this.byGroup(), l2 = s2.nodes, u2 = s2.edges, c2 = l2.length, d2 = c2 * c2, h2 = u2.length, f2 = new Array(d2), p2 = new Array(c2), v2 = (1 - n2) / c2, g2 = 0; g2 < c2; g2++) {
            for (var y2 = 0; y2 < c2; y2++) {
              f2[g2 * c2 + y2] = 0;
            }
            p2[g2] = 0;
          }
          for (var m2 = 0; m2 < h2; m2++) {
            var b2 = u2[m2], x2 = b2.data("source"), w2 = b2.data("target");
            if (x2 !== w2) {
              var E2 = l2.indexOfId(x2), k2 = l2.indexOfId(w2), T2 = i2(b2);
              f2[k2 * c2 + E2] += T2, p2[E2] += T2;
            }
          }
          for (var C2 = 1 / c2 + v2, P2 = 0; P2 < c2; P2++) if (0 === p2[P2]) for (var S2 = 0; S2 < c2; S2++) {
            f2[S2 * c2 + P2] = C2;
          }
          else for (var B2 = 0; B2 < c2; B2++) {
            var D2 = B2 * c2 + P2;
            f2[D2] = f2[D2] / p2[P2] + v2;
          }
          for (var _2, A2 = new Array(c2), M2 = new Array(c2), R2 = 0; R2 < c2; R2++) A2[R2] = 1;
          for (var I2 = 0; I2 < a2; I2++) {
            for (var N2 = 0; N2 < c2; N2++) M2[N2] = 0;
            for (var L2 = 0; L2 < c2; L2++) for (var z2 = 0; z2 < c2; z2++) {
              var O2 = L2 * c2 + z2;
              M2[L2] += f2[O2] * A2[z2];
            }
            Gt(M2), _2 = A2, A2 = M2, M2 = _2;
            for (var V2 = 0, F2 = 0; F2 < c2; F2++) {
              var X2 = _2[F2] - A2[F2];
              V2 += X2 * X2;
            }
            if (V2 < r2) break;
          }
          return { rank: /* @__PURE__ */ __name(function(e3) {
            return e3 = o2.collection(e3)[0], A2[l2.indexOf(e3)];
          }, "rank") };
        }, "pageRank") }, Ln = ut({ root: null, weight: /* @__PURE__ */ __name(function(e2) {
          return 1;
        }, "weight"), directed: false, alpha: 0 }), zn = { degreeCentralityNormalized: /* @__PURE__ */ __name(function(e2) {
          e2 = Ln(e2);
          var t2 = this.cy(), n2 = this.nodes(), r2 = n2.length;
          if (e2.directed) {
            for (var a2 = {}, i2 = {}, o2 = 0, s2 = 0, l2 = 0; l2 < r2; l2++) {
              var u2 = n2[l2], c2 = u2.id();
              e2.root = u2;
              var d2 = this.degreeCentrality(e2);
              o2 < d2.indegree && (o2 = d2.indegree), s2 < d2.outdegree && (s2 = d2.outdegree), a2[c2] = d2.indegree, i2[c2] = d2.outdegree;
            }
            return { indegree: /* @__PURE__ */ __name(function(e3) {
              return 0 == o2 ? 0 : (W(e3) && (e3 = t2.filter(e3)), a2[e3.id()] / o2);
            }, "indegree"), outdegree: /* @__PURE__ */ __name(function(e3) {
              return 0 === s2 ? 0 : (W(e3) && (e3 = t2.filter(e3)), i2[e3.id()] / s2);
            }, "outdegree") };
          }
          for (var h2 = {}, f2 = 0, p2 = 0; p2 < r2; p2++) {
            var v2 = n2[p2];
            e2.root = v2;
            var g2 = this.degreeCentrality(e2);
            f2 < g2.degree && (f2 = g2.degree), h2[v2.id()] = g2.degree;
          }
          return { degree: /* @__PURE__ */ __name(function(e3) {
            return 0 === f2 ? 0 : (W(e3) && (e3 = t2.filter(e3)), h2[e3.id()] / f2);
          }, "degree") };
        }, "degreeCentralityNormalized"), degreeCentrality: /* @__PURE__ */ __name(function(e2) {
          e2 = Ln(e2);
          var t2 = this.cy(), n2 = this, r2 = e2, a2 = r2.root, i2 = r2.weight, o2 = r2.directed, s2 = r2.alpha;
          if (a2 = t2.collection(a2)[0], o2) {
            for (var l2 = a2.connectedEdges(), u2 = l2.filter(function(e3) {
              return e3.target().same(a2) && n2.has(e3);
            }), c2 = l2.filter(function(e3) {
              return e3.source().same(a2) && n2.has(e3);
            }), d2 = u2.length, h2 = c2.length, f2 = 0, p2 = 0, v2 = 0; v2 < u2.length; v2++) f2 += i2(u2[v2]);
            for (var g2 = 0; g2 < c2.length; g2++) p2 += i2(c2[g2]);
            return { indegree: Math.pow(d2, 1 - s2) * Math.pow(f2, s2), outdegree: Math.pow(h2, 1 - s2) * Math.pow(p2, s2) };
          }
          for (var y2 = a2.connectedEdges().intersection(n2), m2 = y2.length, b2 = 0, x2 = 0; x2 < y2.length; x2++) b2 += i2(y2[x2]);
          return { degree: Math.pow(m2, 1 - s2) * Math.pow(b2, s2) };
        }, "degreeCentrality") };
        zn.dc = zn.degreeCentrality, zn.dcn = zn.degreeCentralityNormalised = zn.degreeCentralityNormalized;
        var On = ut({ harmonic: true, weight: /* @__PURE__ */ __name(function() {
          return 1;
        }, "weight"), directed: false, root: null }), Vn = { closenessCentralityNormalized: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = On(e2), n2 = t2.harmonic, r2 = t2.weight, a2 = t2.directed, i2 = this.cy(), o2 = {}, s2 = 0, l2 = this.nodes(), u2 = this.floydWarshall({ weight: r2, directed: a2 }), c2 = 0; c2 < l2.length; c2++) {
            for (var d2 = 0, h2 = l2[c2], f2 = 0; f2 < l2.length; f2++) if (c2 !== f2) {
              var p2 = u2.distance(h2, l2[f2]);
              d2 += n2 ? 1 / p2 : p2;
            }
            n2 || (d2 = 1 / d2), s2 < d2 && (s2 = d2), o2[h2.id()] = d2;
          }
          return { closeness: /* @__PURE__ */ __name(function(e3) {
            return 0 == s2 ? 0 : (e3 = W(e3) ? i2.filter(e3)[0].id() : e3.id(), o2[e3] / s2);
          }, "closeness") };
        }, "closenessCentralityNormalized"), closenessCentrality: /* @__PURE__ */ __name(function(e2) {
          var t2 = On(e2), n2 = t2.root, r2 = t2.weight, a2 = t2.directed, i2 = t2.harmonic;
          n2 = this.filter(n2)[0];
          for (var o2 = this.dijkstra({ root: n2, weight: r2, directed: a2 }), s2 = 0, l2 = this.nodes(), u2 = 0; u2 < l2.length; u2++) {
            var c2 = l2[u2];
            if (!c2.same(n2)) {
              var d2 = o2.distanceTo(c2);
              s2 += i2 ? 1 / d2 : d2;
            }
          }
          return i2 ? s2 : 1 / s2;
        }, "closenessCentrality") };
        Vn.cc = Vn.closenessCentrality, Vn.ccn = Vn.closenessCentralityNormalised = Vn.closenessCentralityNormalized;
        var Fn = ut({ weight: null, directed: false }), Xn = { betweennessCentrality: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = Fn(e2), n2 = t2.directed, r2 = t2.weight, a2 = null != r2, i2 = this.cy(), o2 = this.nodes(), s2 = {}, l2 = {}, u2 = 0, c2 = function(e3, t3) {
            l2[e3] = t3, t3 > u2 && (u2 = t3);
          }, d2 = function(e3) {
            return l2[e3];
          }, h2 = 0; h2 < o2.length; h2++) {
            var f2 = o2[h2], p2 = f2.id();
            s2[p2] = n2 ? f2.outgoers().nodes() : f2.openNeighborhood().nodes(), c2(p2, 0);
          }
          for (var v2 = function() {
            for (var e3 = o2[g2].id(), t3 = [], n3 = {}, l3 = {}, u3 = {}, h3 = new St(function(e4, t4) {
              return u3[e4] - u3[t4];
            }), f3 = 0; f3 < o2.length; f3++) {
              var p3 = o2[f3].id();
              n3[p3] = [], l3[p3] = 0, u3[p3] = 1 / 0;
            }
            for (l3[e3] = 1, u3[e3] = 0, h3.push(e3); !h3.empty(); ) {
              var v3 = h3.pop();
              if (t3.push(v3), a2) for (var y3 = 0; y3 < s2[v3].length; y3++) {
                var m2 = s2[v3][y3], b2 = i2.getElementById(v3), x2 = void 0;
                x2 = b2.edgesTo(m2).length > 0 ? b2.edgesTo(m2)[0] : m2.edgesTo(b2)[0];
                var w2 = r2(x2);
                m2 = m2.id(), u3[m2] > u3[v3] + w2 && (u3[m2] = u3[v3] + w2, h3.nodes.indexOf(m2) < 0 ? h3.push(m2) : h3.updateItem(m2), l3[m2] = 0, n3[m2] = []), u3[m2] == u3[v3] + w2 && (l3[m2] = l3[m2] + l3[v3], n3[m2].push(v3));
              }
              else for (var E2 = 0; E2 < s2[v3].length; E2++) {
                var k2 = s2[v3][E2].id();
                u3[k2] == 1 / 0 && (h3.push(k2), u3[k2] = u3[v3] + 1), u3[k2] == u3[v3] + 1 && (l3[k2] = l3[k2] + l3[v3], n3[k2].push(v3));
              }
            }
            for (var T2 = {}, C2 = 0; C2 < o2.length; C2++) T2[o2[C2].id()] = 0;
            for (; t3.length > 0; ) {
              for (var P2 = t3.pop(), S2 = 0; S2 < n3[P2].length; S2++) {
                var B2 = n3[P2][S2];
                T2[B2] = T2[B2] + l3[B2] / l3[P2] * (1 + T2[P2]);
              }
              P2 != o2[g2].id() && c2(P2, d2(P2) + T2[P2]);
            }
          }, g2 = 0; g2 < o2.length; g2++) v2();
          var y2 = { betweenness: /* @__PURE__ */ __name(function(e3) {
            var t3 = i2.collection(e3).id();
            return d2(t3);
          }, "betweenness"), betweennessNormalized: /* @__PURE__ */ __name(function(e3) {
            if (0 == u2) return 0;
            var t3 = i2.collection(e3).id();
            return d2(t3) / u2;
          }, "betweennessNormalized") };
          return y2.betweennessNormalised = y2.betweennessNormalized, y2;
        }, "betweennessCentrality") };
        Xn.bc = Xn.betweennessCentrality;
        var jn = ut({ expandFactor: 2, inflateFactor: 2, multFactor: 1, maxIterations: 20, attributes: [function(e2) {
          return 1;
        }] }), Yn = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0, r2 = 0; r2 < t2.length; r2++) n2 += t2[r2](e2);
          return n2;
        }, "Yn"), qn = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2, r2 = 0; r2 < t2; r2++) {
            n2 = 0;
            for (var a2 = 0; a2 < t2; a2++) n2 += e2[a2 * t2 + r2];
            for (var i2 = 0; i2 < t2; i2++) e2[i2 * t2 + r2] = e2[i2 * t2 + r2] / n2;
          }
        }, "qn"), Wn = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = new Array(n2 * n2), a2 = 0; a2 < n2; a2++) {
            for (var i2 = 0; i2 < n2; i2++) r2[a2 * n2 + i2] = 0;
            for (var o2 = 0; o2 < n2; o2++) for (var s2 = 0; s2 < n2; s2++) r2[a2 * n2 + s2] += e2[a2 * n2 + o2] * t2[o2 * n2 + s2];
          }
          return r2;
        }, "Wn"), Un = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = e2.slice(0), a2 = 1; a2 < n2; a2++) e2 = Wn(e2, r2, t2);
          return e2;
        }, "Un"), Hn = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = new Array(t2 * t2), a2 = 0; a2 < t2 * t2; a2++) r2[a2] = Math.pow(e2[a2], n2);
          return qn(r2, t2), r2;
        }, "Hn"), Kn = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          for (var a2 = 0; a2 < n2; a2++) {
            if (Math.round(e2[a2] * Math.pow(10, r2)) / Math.pow(10, r2) !== Math.round(t2[a2] * Math.pow(10, r2)) / Math.pow(10, r2)) return false;
          }
          return true;
        }, "Kn"), Gn = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < e2.length; n2++) if (!t2[n2] || e2[n2].id() !== t2[n2].id()) return false;
          return true;
        }, "Gn"), Zn = /* @__PURE__ */ __name(function(e2) {
          for (var t2 = this.nodes(), n2 = this.edges(), r2 = this.cy(), a2 = function(e3) {
            return jn(e3);
          }(e2), i2 = {}, o2 = 0; o2 < t2.length; o2++) i2[t2[o2].id()] = o2;
          for (var s2, l2 = t2.length, u2 = l2 * l2, c2 = new Array(u2), d2 = 0; d2 < u2; d2++) c2[d2] = 0;
          for (var h2 = 0; h2 < n2.length; h2++) {
            var f2 = n2[h2], p2 = i2[f2.source().id()], v2 = i2[f2.target().id()], g2 = Yn(f2, a2.attributes);
            c2[p2 * l2 + v2] += g2, c2[v2 * l2 + p2] += g2;
          }
          !function(e3, t3, n3) {
            for (var r3 = 0; r3 < t3; r3++) e3[r3 * t3 + r3] = n3;
          }(c2, l2, a2.multFactor), qn(c2, l2);
          for (var y2 = true, m2 = 0; y2 && m2 < a2.maxIterations; ) y2 = false, s2 = Un(c2, l2, a2.expandFactor), c2 = Hn(s2, l2, a2.inflateFactor), Kn(c2, s2, u2, 4) || (y2 = true), m2++;
          var b2 = function(e3, t3, n3, r3) {
            for (var a3 = [], i3 = 0; i3 < t3; i3++) {
              for (var o3 = [], s3 = 0; s3 < t3; s3++) Math.round(1e3 * e3[i3 * t3 + s3]) / 1e3 > 0 && o3.push(n3[s3]);
              0 !== o3.length && a3.push(r3.collection(o3));
            }
            return a3;
          }(c2, l2, t2, r2);
          return b2 = function(e3) {
            for (var t3 = 0; t3 < e3.length; t3++) for (var n3 = 0; n3 < e3.length; n3++) t3 != n3 && Gn(e3[t3], e3[n3]) && e3.splice(n3, 1);
            return e3;
          }(b2), b2;
        }, "Zn"), $n = { markovClustering: Zn, mcl: Zn }, Qn = /* @__PURE__ */ __name(function(e2) {
          return e2;
        }, "Qn"), Jn = /* @__PURE__ */ __name(function(e2, t2) {
          return Math.abs(t2 - e2);
        }, "Jn"), er = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return e2 + Jn(t2, n2);
        }, "er"), tr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return e2 + Math.pow(n2 - t2, 2);
        }, "tr"), nr = /* @__PURE__ */ __name(function(e2) {
          return Math.sqrt(e2);
        }, "nr"), rr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return Math.max(e2, Jn(t2, n2));
        }, "rr"), ar = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          for (var i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Qn, o2 = r2, s2 = 0; s2 < e2; s2++) o2 = a2(o2, t2(s2), n2(s2));
          return i2(o2);
        }, "ar"), ir = { euclidean: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return e2 >= 2 ? ar(e2, t2, n2, 0, tr, nr) : ar(e2, t2, n2, 0, er);
        }, "euclidean"), squaredEuclidean: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return ar(e2, t2, n2, 0, tr);
        }, "squaredEuclidean"), manhattan: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return ar(e2, t2, n2, 0, er);
        }, "manhattan"), max: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return ar(e2, t2, n2, -1 / 0, rr);
        }, "max") };
        function or(e2, t2, n2, r2, a2, i2) {
          var o2;
          return o2 = U(e2) ? e2 : ir[e2] || ir.euclidean, 0 === t2 && U(e2) ? o2(a2, i2) : o2(t2, n2, r2, a2, i2);
        }
        __name(or, "or");
        ir["squared-euclidean"] = ir.squaredEuclidean, ir.squaredeuclidean = ir.squaredEuclidean;
        var sr = ut({ k: 2, m: 2, sensitivityThreshold: 1e-4, distance: "euclidean", maxIterations: 10, attributes: [], testMode: false, testCentroids: null }), lr = /* @__PURE__ */ __name(function(e2) {
          return sr(e2);
        }, "lr"), ur = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          var i2 = "kMedoids" !== a2 ? function(e3) {
            return n2[e3];
          } : function(e3) {
            return r2[e3](n2);
          }, o2 = n2, s2 = t2;
          return or(e2, r2.length, i2, function(e3) {
            return r2[e3](t2);
          }, o2, s2);
        }, "ur"), cr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = n2.length, a2 = new Array(r2), i2 = new Array(r2), o2 = new Array(t2), s2 = null, l2 = 0; l2 < r2; l2++) a2[l2] = e2.min(n2[l2]).value, i2[l2] = e2.max(n2[l2]).value;
          for (var u2 = 0; u2 < t2; u2++) {
            s2 = [];
            for (var c2 = 0; c2 < r2; c2++) s2[c2] = Math.random() * (i2[c2] - a2[c2]) + a2[c2];
            o2[u2] = s2;
          }
          return o2;
        }, "cr"), dr = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          for (var i2 = 1 / 0, o2 = 0, s2 = 0; s2 < t2.length; s2++) {
            var l2 = ur(n2, e2, t2[s2], r2, a2);
            l2 < i2 && (i2 = l2, o2 = s2);
          }
          return o2;
        }, "dr"), hr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = [], a2 = null, i2 = 0; i2 < t2.length; i2++) n2[(a2 = t2[i2]).id()] === e2 && r2.push(a2);
          return r2;
        }, "hr"), fr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return Math.abs(t2 - e2) <= n2;
        }, "fr"), pr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = 0; r2 < e2.length; r2++) for (var a2 = 0; a2 < e2[r2].length; a2++) {
            if (Math.abs(e2[r2][a2] - t2[r2][a2]) > n2) return false;
          }
          return true;
        }, "pr"), vr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = 0; r2 < n2; r2++) if (e2 === t2[r2]) return true;
          return false;
        }, "vr"), gr = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = new Array(t2);
          if (e2.length < 50) for (var r2 = 0; r2 < t2; r2++) {
            for (var a2 = e2[Math.floor(Math.random() * e2.length)]; vr(a2, n2, r2); ) a2 = e2[Math.floor(Math.random() * e2.length)];
            n2[r2] = a2;
          }
          else for (var i2 = 0; i2 < t2; i2++) n2[i2] = e2[Math.floor(Math.random() * e2.length)];
          return n2;
        }, "gr"), yr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = 0, a2 = 0; a2 < t2.length; a2++) r2 += ur("manhattan", t2[a2], e2, n2, "kMedoids");
          return r2;
        }, "yr"), mr = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          for (var i2, o2, s2 = 0; s2 < t2.length; s2++) for (var l2 = 0; l2 < e2.length; l2++) r2[s2][l2] = Math.pow(n2[s2][l2], a2.m);
          for (var u2 = 0; u2 < e2.length; u2++) for (var c2 = 0; c2 < a2.attributes.length; c2++) {
            i2 = 0, o2 = 0;
            for (var d2 = 0; d2 < t2.length; d2++) i2 += r2[d2][u2] * a2.attributes[c2](t2[d2]), o2 += r2[d2][u2];
            e2[u2][c2] = i2 / o2;
          }
        }, "mr"), br = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          for (var i2 = 0; i2 < e2.length; i2++) t2[i2] = e2[i2].slice();
          for (var o2, s2, l2, u2 = 2 / (a2.m - 1), c2 = 0; c2 < n2.length; c2++) for (var d2 = 0; d2 < r2.length; d2++) {
            o2 = 0;
            for (var h2 = 0; h2 < n2.length; h2++) s2 = ur(a2.distance, r2[d2], n2[c2], a2.attributes, "cmeans"), l2 = ur(a2.distance, r2[d2], n2[h2], a2.attributes, "cmeans"), o2 += Math.pow(s2 / l2, u2);
            e2[d2][c2] = 1 / o2;
          }
        }, "br"), xr = /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2, a2, i2, o2 = this.cy(), s2 = this.nodes(), l2 = lr(e2);
          a2 = new Array(s2.length);
          for (var u2 = 0; u2 < s2.length; u2++) a2[u2] = new Array(l2.k);
          r2 = new Array(s2.length);
          for (var c2 = 0; c2 < s2.length; c2++) r2[c2] = new Array(l2.k);
          for (var d2 = 0; d2 < s2.length; d2++) {
            for (var h2 = 0, f2 = 0; f2 < l2.k; f2++) r2[d2][f2] = Math.random(), h2 += r2[d2][f2];
            for (var p2 = 0; p2 < l2.k; p2++) r2[d2][p2] = r2[d2][p2] / h2;
          }
          n2 = new Array(l2.k);
          for (var v2 = 0; v2 < l2.k; v2++) n2[v2] = new Array(l2.attributes.length);
          i2 = new Array(s2.length);
          for (var g2 = 0; g2 < s2.length; g2++) i2[g2] = new Array(l2.k);
          for (var y2 = true, m2 = 0; y2 && m2 < l2.maxIterations; ) y2 = false, mr(n2, s2, r2, i2, l2), br(r2, a2, n2, s2, l2), pr(r2, a2, l2.sensitivityThreshold) || (y2 = true), m2++;
          return t2 = function(e3, t3, n3, r3) {
            for (var a3, i3, o3 = new Array(n3.k), s3 = 0; s3 < o3.length; s3++) o3[s3] = [];
            for (var l3 = 0; l3 < t3.length; l3++) {
              a3 = -1 / 0, i3 = -1;
              for (var u3 = 0; u3 < t3[0].length; u3++) t3[l3][u3] > a3 && (a3 = t3[l3][u3], i3 = u3);
              o3[i3].push(e3[l3]);
            }
            for (var c3 = 0; c3 < o3.length; c3++) o3[c3] = r3.collection(o3[c3]);
            return o3;
          }(s2, r2, l2, o2), { clusters: t2, degreeOfMembership: r2 };
        }, "xr"), wr = { kMeans: /* @__PURE__ */ __name(function(e2) {
          var t2, n2 = this.cy(), r2 = this.nodes(), a2 = null, i2 = lr(e2), o2 = new Array(i2.k), s2 = {};
          i2.testMode ? "number" == typeof i2.testCentroids ? (i2.testCentroids, t2 = cr(r2, i2.k, i2.attributes)) : t2 = "object" === l(i2.testCentroids) ? i2.testCentroids : cr(r2, i2.k, i2.attributes) : t2 = cr(r2, i2.k, i2.attributes);
          for (var u2 = true, c2 = 0; u2 && c2 < i2.maxIterations; ) {
            for (var d2 = 0; d2 < r2.length; d2++) s2[(a2 = r2[d2]).id()] = dr(a2, t2, i2.distance, i2.attributes, "kMeans");
            u2 = false;
            for (var h2 = 0; h2 < i2.k; h2++) {
              var f2 = hr(h2, r2, s2);
              if (0 !== f2.length) {
                for (var p2 = i2.attributes.length, v2 = t2[h2], g2 = new Array(p2), y2 = new Array(p2), m2 = 0; m2 < p2; m2++) {
                  y2[m2] = 0;
                  for (var b2 = 0; b2 < f2.length; b2++) a2 = f2[b2], y2[m2] += i2.attributes[m2](a2);
                  g2[m2] = y2[m2] / f2.length, fr(g2[m2], v2[m2], i2.sensitivityThreshold) || (u2 = true);
                }
                t2[h2] = g2, o2[h2] = n2.collection(f2);
              }
            }
            c2++;
          }
          return o2;
        }, "kMeans"), kMedoids: /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2 = this.cy(), a2 = this.nodes(), i2 = null, o2 = lr(e2), s2 = new Array(o2.k), u2 = {}, c2 = new Array(o2.k);
          o2.testMode ? "number" == typeof o2.testCentroids || (t2 = "object" === l(o2.testCentroids) ? o2.testCentroids : gr(a2, o2.k)) : t2 = gr(a2, o2.k);
          for (var d2 = true, h2 = 0; d2 && h2 < o2.maxIterations; ) {
            for (var f2 = 0; f2 < a2.length; f2++) u2[(i2 = a2[f2]).id()] = dr(i2, t2, o2.distance, o2.attributes, "kMedoids");
            d2 = false;
            for (var p2 = 0; p2 < t2.length; p2++) {
              var v2 = hr(p2, a2, u2);
              if (0 !== v2.length) {
                c2[p2] = yr(t2[p2], v2, o2.attributes);
                for (var g2 = 0; g2 < v2.length; g2++) (n2 = yr(v2[g2], v2, o2.attributes)) < c2[p2] && (c2[p2] = n2, t2[p2] = v2[g2], d2 = true);
                s2[p2] = r2.collection(v2);
              }
            }
            h2++;
          }
          return s2;
        }, "kMedoids"), fuzzyCMeans: xr, fcm: xr }, Er = ut({ distance: "euclidean", linkage: "min", mode: "threshold", threshold: 1 / 0, addDendrogram: false, dendrogramDepth: 0, attributes: [] }), kr = { single: "min", complete: "max" }, Tr = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          for (var i2, o2 = 0, s2 = 1 / 0, l2 = a2.attributes, u2 = function(e3, t3) {
            return or(a2.distance, l2.length, function(t4) {
              return l2[t4](e3);
            }, function(e4) {
              return l2[e4](t3);
            }, e3, t3);
          }, c2 = 0; c2 < e2.length; c2++) {
            var d2 = e2[c2].key, h2 = n2[d2][r2[d2]];
            h2 < s2 && (o2 = d2, s2 = h2);
          }
          if ("threshold" === a2.mode && s2 >= a2.threshold || "dendrogram" === a2.mode && 1 === e2.length) return false;
          var f2, p2 = t2[o2], v2 = t2[r2[o2]];
          f2 = "dendrogram" === a2.mode ? { left: p2, right: v2, key: p2.key } : { value: p2.value.concat(v2.value), key: p2.key }, e2[p2.index] = f2, e2.splice(v2.index, 1), t2[p2.key] = f2;
          for (var g2 = 0; g2 < e2.length; g2++) {
            var y2 = e2[g2];
            p2.key === y2.key ? i2 = 1 / 0 : "min" === a2.linkage ? (i2 = n2[p2.key][y2.key], n2[p2.key][y2.key] > n2[v2.key][y2.key] && (i2 = n2[v2.key][y2.key])) : "max" === a2.linkage ? (i2 = n2[p2.key][y2.key], n2[p2.key][y2.key] < n2[v2.key][y2.key] && (i2 = n2[v2.key][y2.key])) : i2 = "mean" === a2.linkage ? (n2[p2.key][y2.key] * p2.size + n2[v2.key][y2.key] * v2.size) / (p2.size + v2.size) : "dendrogram" === a2.mode ? u2(y2.value, p2.value) : u2(y2.value[0], p2.value[0]), n2[p2.key][y2.key] = n2[y2.key][p2.key] = i2;
          }
          for (var m2 = 0; m2 < e2.length; m2++) {
            var b2 = e2[m2].key;
            if (r2[b2] === p2.key || r2[b2] === v2.key) {
              for (var x2 = b2, w2 = 0; w2 < e2.length; w2++) {
                var E2 = e2[w2].key;
                n2[b2][E2] < n2[b2][x2] && (x2 = E2);
              }
              r2[b2] = x2;
            }
            e2[m2].index = m2;
          }
          return p2.key = v2.key = p2.index = v2.index = null, true;
        }, "Tr"), Cr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          e2 && (e2.value ? t2.push(e2.value) : (e2.left && Cr(e2.left, t2), e2.right && Cr(e2.right, t2)));
        }, "Cr"), Pr = /* @__PURE__ */ __name(function(e2, t2) {
          if (!e2) return "";
          if (e2.left && e2.right) {
            var n2 = Pr(e2.left, t2), r2 = Pr(e2.right, t2), a2 = t2.add({ group: "nodes", data: { id: n2 + "," + r2 } });
            return t2.add({ group: "edges", data: { source: n2, target: a2.id() } }), t2.add({ group: "edges", data: { source: r2, target: a2.id() } }), a2.id();
          }
          return e2.value ? e2.value.id() : void 0;
        }, "Pr"), Sr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          if (!e2) return [];
          var r2 = [], a2 = [], i2 = [];
          return 0 === t2 ? (e2.left && Cr(e2.left, r2), e2.right && Cr(e2.right, a2), i2 = r2.concat(a2), [n2.collection(i2)]) : 1 === t2 ? e2.value ? [n2.collection(e2.value)] : (e2.left && Cr(e2.left, r2), e2.right && Cr(e2.right, a2), [n2.collection(r2), n2.collection(a2)]) : e2.value ? [n2.collection(e2.value)] : (e2.left && (r2 = Sr(e2.left, t2 - 1, n2)), e2.right && (a2 = Sr(e2.right, t2 - 1, n2)), r2.concat(a2));
        }, "Sr"), Br = /* @__PURE__ */ __name(function(e2) {
          for (var t2 = this.cy(), n2 = this.nodes(), r2 = function(e3) {
            var t3 = Er(e3), n3 = kr[t3.linkage];
            return null != n3 && (t3.linkage = n3), t3;
          }(e2), a2 = r2.attributes, i2 = function(e3, t3) {
            return or(r2.distance, a2.length, function(t4) {
              return a2[t4](e3);
            }, function(e4) {
              return a2[e4](t3);
            }, e3, t3);
          }, o2 = [], s2 = [], l2 = [], u2 = [], c2 = 0; c2 < n2.length; c2++) {
            var d2 = { value: "dendrogram" === r2.mode ? n2[c2] : [n2[c2]], key: c2, index: c2 };
            o2[c2] = d2, u2[c2] = d2, s2[c2] = [], l2[c2] = 0;
          }
          for (var h2 = 0; h2 < o2.length; h2++) for (var f2 = 0; f2 <= h2; f2++) {
            var p2 = void 0;
            p2 = "dendrogram" === r2.mode ? h2 === f2 ? 1 / 0 : i2(o2[h2].value, o2[f2].value) : h2 === f2 ? 1 / 0 : i2(o2[h2].value[0], o2[f2].value[0]), s2[h2][f2] = p2, s2[f2][h2] = p2, p2 < s2[h2][l2[h2]] && (l2[h2] = f2);
          }
          for (var v2, g2 = Tr(o2, u2, s2, l2, r2); g2; ) g2 = Tr(o2, u2, s2, l2, r2);
          return "dendrogram" === r2.mode ? (v2 = Sr(o2[0], r2.dendrogramDepth, t2), r2.addDendrogram && Pr(o2[0], t2)) : (v2 = new Array(o2.length), o2.forEach(function(e3, n3) {
            e3.key = e3.index = null, v2[n3] = t2.collection(e3.value);
          })), v2;
        }, "Br"), Dr = { hierarchicalClustering: Br, hca: Br }, _r = ut({ distance: "euclidean", preference: "median", damping: 0.8, maxIterations: 1e3, minIterations: 100, attributes: [] }), Ar = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = /* @__PURE__ */ __name(function(e3, t3) {
            return r2[t3](e3);
          }, "a");
          return -or(e2, r2.length, function(e3) {
            return a2(t2, e3);
          }, function(e3) {
            return a2(n2, e3);
          }, t2, n2);
        }, "Ar"), Mr = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = null;
          return n2 = "median" === t2 ? function(e3) {
            var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e3.length, r2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], a2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
            arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? (n3 < e3.length && e3.splice(n3, e3.length - n3), t3 > 0 && e3.splice(0, t3)) : e3 = e3.slice(t3, n3);
            for (var i2 = 0, o2 = e3.length - 1; o2 >= 0; o2--) {
              var s2 = e3[o2];
              a2 ? isFinite(s2) || (e3[o2] = -1 / 0, i2++) : e3.splice(o2, 1);
            }
            r2 && e3.sort(function(e4, t4) {
              return e4 - t4;
            });
            var l2 = e3.length, u2 = Math.floor(l2 / 2);
            return l2 % 2 != 0 ? e3[u2 + 1 + i2] : (e3[u2 - 1 + i2] + e3[u2 + i2]) / 2;
          }(e2) : "mean" === t2 ? function(e3) {
            for (var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e3.length, r2 = 0, a2 = 0, i2 = t3; i2 < n3; i2++) {
              var o2 = e3[i2];
              isFinite(o2) && (r2 += o2, a2++);
            }
            return r2 / a2;
          }(e2) : "min" === t2 ? function(e3) {
            for (var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e3.length, r2 = 1 / 0, a2 = t3; a2 < n3; a2++) {
              var i2 = e3[a2];
              isFinite(i2) && (r2 = Math.min(i2, r2));
            }
            return r2;
          }(e2) : "max" === t2 ? function(e3) {
            for (var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e3.length, r2 = -1 / 0, a2 = t3; a2 < n3; a2++) {
              var i2 = e3[a2];
              isFinite(i2) && (r2 = Math.max(i2, r2));
            }
            return r2;
          }(e2) : t2, n2;
        }, "Mr"), Rr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = [], a2 = 0; a2 < e2; a2++) {
            for (var i2 = -1, o2 = -1 / 0, s2 = 0; s2 < n2.length; s2++) {
              var l2 = n2[s2];
              t2[a2 * e2 + l2] > o2 && (i2 = l2, o2 = t2[a2 * e2 + l2]);
            }
            i2 > 0 && r2.push(i2);
          }
          for (var u2 = 0; u2 < n2.length; u2++) r2[n2[u2]] = n2[u2];
          return r2;
        }, "Rr"), Ir = /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2, r2, a2, i2, o2, s2 = this.cy(), l2 = this.nodes(), u2 = function(e3) {
            var t3 = e3.damping, n3 = e3.preference;
            0.5 <= t3 && t3 < 1 || nt("Damping must range on [0.5, 1).  Got: ".concat(t3));
            var r3 = ["median", "mean", "min", "max"];
            return r3.some(function(e4) {
              return e4 === n3;
            }) || G(n3) || nt("Preference must be one of [".concat(r3.map(function(e4) {
              return "'".concat(e4, "'");
            }).join(", "), "] or a number.  Got: ").concat(n3)), _r(e3);
          }(e2), c2 = {}, d2 = 0; d2 < l2.length; d2++) c2[l2[d2].id()] = d2;
          n2 = (t2 = l2.length) * t2, r2 = new Array(n2);
          for (var h2 = 0; h2 < n2; h2++) r2[h2] = -1 / 0;
          for (var f2 = 0; f2 < t2; f2++) for (var p2 = 0; p2 < t2; p2++) f2 !== p2 && (r2[f2 * t2 + p2] = Ar(u2.distance, l2[f2], l2[p2], u2.attributes));
          a2 = Mr(r2, u2.preference);
          for (var v2 = 0; v2 < t2; v2++) r2[v2 * t2 + v2] = a2;
          i2 = new Array(n2);
          for (var g2 = 0; g2 < n2; g2++) i2[g2] = 0;
          o2 = new Array(n2);
          for (var y2 = 0; y2 < n2; y2++) o2[y2] = 0;
          for (var m2 = new Array(t2), b2 = new Array(t2), x2 = new Array(t2), w2 = 0; w2 < t2; w2++) m2[w2] = 0, b2[w2] = 0, x2[w2] = 0;
          for (var E2, k2 = new Array(t2 * u2.minIterations), T2 = 0; T2 < k2.length; T2++) k2[T2] = 0;
          for (E2 = 0; E2 < u2.maxIterations; E2++) {
            for (var C2 = 0; C2 < t2; C2++) {
              for (var P2 = -1 / 0, S2 = -1 / 0, B2 = -1, D2 = 0, _2 = 0; _2 < t2; _2++) m2[_2] = i2[C2 * t2 + _2], (D2 = o2[C2 * t2 + _2] + r2[C2 * t2 + _2]) >= P2 ? (S2 = P2, P2 = D2, B2 = _2) : D2 > S2 && (S2 = D2);
              for (var A2 = 0; A2 < t2; A2++) i2[C2 * t2 + A2] = (1 - u2.damping) * (r2[C2 * t2 + A2] - P2) + u2.damping * m2[A2];
              i2[C2 * t2 + B2] = (1 - u2.damping) * (r2[C2 * t2 + B2] - S2) + u2.damping * m2[B2];
            }
            for (var M2 = 0; M2 < t2; M2++) {
              for (var R2 = 0, I2 = 0; I2 < t2; I2++) m2[I2] = o2[I2 * t2 + M2], b2[I2] = Math.max(0, i2[I2 * t2 + M2]), R2 += b2[I2];
              R2 -= b2[M2], b2[M2] = i2[M2 * t2 + M2], R2 += b2[M2];
              for (var N2 = 0; N2 < t2; N2++) o2[N2 * t2 + M2] = (1 - u2.damping) * Math.min(0, R2 - b2[N2]) + u2.damping * m2[N2];
              o2[M2 * t2 + M2] = (1 - u2.damping) * (R2 - b2[M2]) + u2.damping * m2[M2];
            }
            for (var L2 = 0, z2 = 0; z2 < t2; z2++) {
              var O2 = o2[z2 * t2 + z2] + i2[z2 * t2 + z2] > 0 ? 1 : 0;
              k2[E2 % u2.minIterations * t2 + z2] = O2, L2 += O2;
            }
            if (L2 > 0 && (E2 >= u2.minIterations - 1 || E2 == u2.maxIterations - 1)) {
              for (var V2 = 0, F2 = 0; F2 < t2; F2++) {
                x2[F2] = 0;
                for (var X2 = 0; X2 < u2.minIterations; X2++) x2[F2] += k2[X2 * t2 + F2];
                0 !== x2[F2] && x2[F2] !== u2.minIterations || V2++;
              }
              if (V2 === t2) break;
            }
          }
          for (var j2 = function(e3, t3, n3) {
            for (var r3 = [], a3 = 0; a3 < e3; a3++) t3[a3 * e3 + a3] + n3[a3 * e3 + a3] > 0 && r3.push(a3);
            return r3;
          }(t2, i2, o2), Y2 = function(e3, t3, n3) {
            for (var r3 = Rr(e3, t3, n3), a3 = 0; a3 < n3.length; a3++) {
              for (var i3 = [], o3 = 0; o3 < r3.length; o3++) r3[o3] === n3[a3] && i3.push(o3);
              for (var s3 = -1, l3 = -1 / 0, u3 = 0; u3 < i3.length; u3++) {
                for (var c3 = 0, d3 = 0; d3 < i3.length; d3++) c3 += t3[i3[d3] * e3 + i3[u3]];
                c3 > l3 && (s3 = u3, l3 = c3);
              }
              n3[a3] = i3[s3];
            }
            return Rr(e3, t3, n3);
          }(t2, r2, j2), q2 = {}, W2 = 0; W2 < j2.length; W2++) q2[j2[W2]] = [];
          for (var U2 = 0; U2 < l2.length; U2++) {
            var H2 = Y2[c2[l2[U2].id()]];
            null != H2 && q2[H2].push(l2[U2]);
          }
          for (var K2 = new Array(j2.length), Z2 = 0; Z2 < j2.length; Z2++) K2[Z2] = s2.collection(q2[j2[Z2]]);
          return K2;
        }, "Ir"), Nr = { affinityPropagation: Ir, ap: Ir }, Lr = ut({ root: void 0, directed: false }), zr = { hierholzer: /* @__PURE__ */ __name(function(e2) {
          if (!K(e2)) {
            var t2 = arguments;
            e2 = { root: t2[0], directed: t2[1] };
          }
          var n2, r2, a2, i2 = Lr(e2), o2 = i2.root, s2 = i2.directed, l2 = this, u2 = false;
          o2 && (a2 = W(o2) ? this.filter(o2)[0].id() : o2[0].id());
          var c2 = {}, d2 = {};
          s2 ? l2.forEach(function(e3) {
            var t3 = e3.id();
            if (e3.isNode()) {
              var a3 = e3.indegree(true), i3 = e3.outdegree(true), o3 = a3 - i3, s3 = i3 - a3;
              1 == o3 ? n2 ? u2 = true : n2 = t3 : 1 == s3 ? r2 ? u2 = true : r2 = t3 : (s3 > 1 || o3 > 1) && (u2 = true), c2[t3] = [], e3.outgoers().forEach(function(e4) {
                e4.isEdge() && c2[t3].push(e4.id());
              });
            } else d2[t3] = [void 0, e3.target().id()];
          }) : l2.forEach(function(e3) {
            var t3 = e3.id();
            e3.isNode() ? (e3.degree(true) % 2 && (n2 ? r2 ? u2 = true : r2 = t3 : n2 = t3), c2[t3] = [], e3.connectedEdges().forEach(function(e4) {
              return c2[t3].push(e4.id());
            })) : d2[t3] = [e3.source().id(), e3.target().id()];
          });
          var h2 = { found: false, trail: void 0 };
          if (u2) return h2;
          if (r2 && n2) if (s2) {
            if (a2 && r2 != a2) return h2;
            a2 = r2;
          } else {
            if (a2 && r2 != a2 && n2 != a2) return h2;
            a2 || (a2 = r2);
          }
          else a2 || (a2 = l2[0].id());
          var f2 = /* @__PURE__ */ __name(function(e3) {
            for (var t3, n3, r3, a3 = e3, i3 = [e3]; c2[a3].length; ) t3 = c2[a3].shift(), n3 = d2[t3][0], a3 != (r3 = d2[t3][1]) ? (c2[r3] = c2[r3].filter(function(e4) {
              return e4 != t3;
            }), a3 = r3) : s2 || a3 == n3 || (c2[n3] = c2[n3].filter(function(e4) {
              return e4 != t3;
            }), a3 = n3), i3.unshift(t3), i3.unshift(a3);
            return i3;
          }, "f"), p2 = [], v2 = [];
          for (v2 = f2(a2); 1 != v2.length; ) 0 == c2[v2[0]].length ? (p2.unshift(l2.getElementById(v2.shift())), p2.unshift(l2.getElementById(v2.shift()))) : v2 = f2(v2.shift()).concat(v2);
          for (var g2 in p2.unshift(l2.getElementById(v2.shift())), c2) if (c2[g2].length) return h2;
          return h2.found = true, h2.trail = this.spawn(p2, true), h2;
        }, "hierholzer") }, Or = /* @__PURE__ */ __name(function() {
          var e2 = this, t2 = {}, n2 = 0, r2 = 0, a2 = [], i2 = [], o2 = {}, s2 = /* @__PURE__ */ __name(function(l3, u2, c2) {
            l3 === c2 && (r2 += 1), t2[u2] = { id: n2, low: n2++, cutVertex: false };
            var d2, h2, f2, p2, v2 = e2.getElementById(u2).connectedEdges().intersection(e2);
            0 === v2.size() ? a2.push(e2.spawn(e2.getElementById(u2))) : v2.forEach(function(n3) {
              d2 = n3.source().id(), h2 = n3.target().id(), (f2 = d2 === u2 ? h2 : d2) !== c2 && (p2 = n3.id(), o2[p2] || (o2[p2] = true, i2.push({ x: u2, y: f2, edge: n3 })), f2 in t2 ? t2[u2].low = Math.min(t2[u2].low, t2[f2].id) : (s2(l3, f2, u2), t2[u2].low = Math.min(t2[u2].low, t2[f2].low), t2[u2].id <= t2[f2].low && (t2[u2].cutVertex = true, function(n4, r3) {
                for (var o3 = i2.length - 1, s3 = [], l4 = e2.spawn(); i2[o3].x != n4 || i2[o3].y != r3; ) s3.push(i2.pop().edge), o3--;
                s3.push(i2.pop().edge), s3.forEach(function(n5) {
                  var r4 = n5.connectedNodes().intersection(e2);
                  l4.merge(n5), r4.forEach(function(n6) {
                    var r5 = n6.id(), a3 = n6.connectedEdges().intersection(e2);
                    l4.merge(n6), t2[r5].cutVertex ? l4.merge(a3.filter(function(e3) {
                      return e3.isLoop();
                    })) : l4.merge(a3);
                  });
                }), a2.push(l4);
              }(u2, f2))));
            });
          }, "s");
          e2.forEach(function(e3) {
            if (e3.isNode()) {
              var n3 = e3.id();
              n3 in t2 || (r2 = 0, s2(n3, n3), t2[n3].cutVertex = r2 > 1);
            }
          });
          var l2 = Object.keys(t2).filter(function(e3) {
            return t2[e3].cutVertex;
          }).map(function(t3) {
            return e2.getElementById(t3);
          });
          return { cut: e2.spawn(l2), components: a2 };
        }, "Or"), Vr = /* @__PURE__ */ __name(function() {
          var e2 = this, t2 = {}, n2 = 0, r2 = [], a2 = [], i2 = e2.spawn(e2), o2 = /* @__PURE__ */ __name(function(s2) {
            if (a2.push(s2), t2[s2] = { index: n2, low: n2++, explored: false }, e2.getElementById(s2).connectedEdges().intersection(e2).forEach(function(e3) {
              var n3 = e3.target().id();
              n3 !== s2 && (n3 in t2 || o2(n3), t2[n3].explored || (t2[s2].low = Math.min(t2[s2].low, t2[n3].low)));
            }), t2[s2].index === t2[s2].low) {
              for (var l2 = e2.spawn(); ; ) {
                var u2 = a2.pop();
                if (l2.merge(e2.getElementById(u2)), t2[u2].low = t2[s2].index, t2[u2].explored = true, u2 === s2) break;
              }
              var c2 = l2.edgesWith(l2), d2 = l2.merge(c2);
              r2.push(d2), i2 = i2.difference(d2);
            }
          }, "o");
          return e2.forEach(function(e3) {
            if (e3.isNode()) {
              var n3 = e3.id();
              n3 in t2 || o2(n3);
            }
          }), { cut: i2, components: r2 };
        }, "Vr"), Fr = {};
        [bt, Dt, _t, Mt, It, Lt, Ft, Nn, zn, Vn, Xn, $n, wr, Dr, Nr, zr, { hopcroftTarjanBiconnected: Or, htbc: Or, htb: Or, hopcroftTarjanBiconnectedComponents: Or }, { tarjanStronglyConnected: Vr, tsc: Vr, tscc: Vr, tarjanStronglyConnectedComponents: Vr }].forEach(function(e2) {
          ge(Fr, e2);
        });
        var Xr = /* @__PURE__ */ __name(function(e2) {
          if (!(this instanceof Xr)) return new Xr(e2);
          this.id = "Thenable/1.0.7", this.state = 0, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = { then: this.then.bind(this) }, "function" == typeof e2 && e2.call(this, this.fulfill.bind(this), this.reject.bind(this));
        }, "Xr");
        Xr.prototype = { fulfill: /* @__PURE__ */ __name(function(e2) {
          return jr(this, 1, "fulfillValue", e2);
        }, "fulfill"), reject: /* @__PURE__ */ __name(function(e2) {
          return jr(this, 2, "rejectReason", e2);
        }, "reject"), then: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this, r2 = new Xr();
          return n2.onFulfilled.push(Wr(e2, r2, "fulfill")), n2.onRejected.push(Wr(t2, r2, "reject")), Yr(n2), r2.proxy;
        }, "then") };
        var jr = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          return 0 === e2.state && (e2.state = t2, e2[n2] = r2, Yr(e2)), e2;
        }, "jr"), Yr = /* @__PURE__ */ __name(function(e2) {
          1 === e2.state ? qr(e2, "onFulfilled", e2.fulfillValue) : 2 === e2.state && qr(e2, "onRejected", e2.rejectReason);
        }, "Yr"), qr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          if (0 !== e2[t2].length) {
            var r2 = e2[t2];
            e2[t2] = [];
            var a2 = /* @__PURE__ */ __name(function() {
              for (var e3 = 0; e3 < r2.length; e3++) r2[e3](n2);
            }, "a");
            "function" == typeof setImmediate ? setImmediate(a2) : setTimeout(a2, 0);
          }
        }, "qr"), Wr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return function(r2) {
            if ("function" != typeof e2) t2[n2].call(t2, r2);
            else {
              var a2;
              try {
                a2 = e2(r2);
              } catch (e3) {
                return void t2.reject(e3);
              }
              Ur(t2, a2);
            }
          };
        }, "Wr"), Ur = /* @__PURE__ */ __name(function(e2, t2) {
          if (e2 !== t2 && e2.proxy !== t2) {
            var n2;
            if ("object" === l(t2) && null !== t2 || "function" == typeof t2) try {
              n2 = t2.then;
            } catch (t3) {
              return void e2.reject(t3);
            }
            if ("function" != typeof n2) e2.fulfill(t2);
            else {
              var r2 = false;
              try {
                n2.call(t2, function(n3) {
                  r2 || (r2 = true, n3 === t2 ? e2.reject(new TypeError("circular thenable chain")) : Ur(e2, n3));
                }, function(t3) {
                  r2 || (r2 = true, e2.reject(t3));
                });
              } catch (t3) {
                r2 || e2.reject(t3);
              }
            }
          } else e2.reject(new TypeError("cannot resolve promise with itself"));
        }, "Ur");
        Xr.all = function(e2) {
          return new Xr(function(t2, n2) {
            for (var r2 = new Array(e2.length), a2 = 0, i2 = function(n3, i3) {
              r2[n3] = i3, ++a2 === e2.length && t2(r2);
            }, o2 = 0; o2 < e2.length; o2++) !function(t3) {
              var r3 = e2[t3];
              null != r3 && null != r3.then ? r3.then(function(e3) {
                i2(t3, e3);
              }, function(e3) {
                n2(e3);
              }) : i2(t3, r3);
            }(o2);
          });
        }, Xr.resolve = function(e2) {
          return new Xr(function(t2, n2) {
            t2(e2);
          });
        }, Xr.reject = function(e2) {
          return new Xr(function(t2, n2) {
            n2(e2);
          });
        };
        var Hr = "undefined" != typeof Promise ? Promise : Xr, Kr = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = ee(e2), a2 = !r2, i2 = this._private = ge({ duration: 1e3 }, t2, n2);
          if (i2.target = e2, i2.style = i2.style || i2.css, i2.started = false, i2.playing = false, i2.hooked = false, i2.applying = false, i2.progress = 0, i2.completes = [], i2.frames = [], i2.complete && U(i2.complete) && i2.completes.push(i2.complete), a2) {
            var o2 = e2.position();
            i2.startPosition = i2.startPosition || { x: o2.x, y: o2.y }, i2.startStyle = i2.startStyle || e2.cy().style().getAnimationStartStyle(e2, i2.style);
          }
          if (r2) {
            var s2 = e2.pan();
            i2.startPan = { x: s2.x, y: s2.y }, i2.startZoom = e2.zoom();
          }
          this.length = 1, this[0] = this;
        }, "Kr"), Gr = Kr.prototype;
        ge(Gr, { instanceString: /* @__PURE__ */ __name(function() {
          return "animation";
        }, "instanceString"), hook: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          if (!e2.hooked) {
            var t2 = e2.target._private.animation;
            (e2.queue ? t2.queue : t2.current).push(this), $(e2.target) && e2.target.cy().addToAnimationPool(e2.target), e2.hooked = true;
          }
          return this;
        }, "hook"), play: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          return 1 === e2.progress && (e2.progress = 0), e2.playing = true, e2.started = false, e2.stopped = false, this.hook(), this;
        }, "play"), playing: /* @__PURE__ */ __name(function() {
          return this._private.playing;
        }, "playing"), apply: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          return e2.applying = true, e2.started = false, e2.stopped = false, this.hook(), this;
        }, "apply"), applying: /* @__PURE__ */ __name(function() {
          return this._private.applying;
        }, "applying"), pause: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          return e2.playing = false, e2.started = false, this;
        }, "pause"), stop: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          return e2.playing = false, e2.started = false, e2.stopped = true, this;
        }, "stop"), rewind: /* @__PURE__ */ __name(function() {
          return this.progress(0);
        }, "rewind"), fastforward: /* @__PURE__ */ __name(function() {
          return this.progress(1);
        }, "fastforward"), time: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private;
          return void 0 === e2 ? t2.progress * t2.duration : this.progress(e2 / t2.duration);
        }, "time"), progress: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private, n2 = t2.playing;
          return void 0 === e2 ? t2.progress : (n2 && this.pause(), t2.progress = e2, t2.started = false, n2 && this.play(), this);
        }, "progress"), completed: /* @__PURE__ */ __name(function() {
          return 1 === this._private.progress;
        }, "completed"), reverse: /* @__PURE__ */ __name(function() {
          var e2 = this._private, t2 = e2.playing;
          t2 && this.pause(), e2.progress = 1 - e2.progress, e2.started = false;
          var n2 = /* @__PURE__ */ __name(function(t3, n3) {
            var r3 = e2[t3];
            null != r3 && (e2[t3] = e2[n3], e2[n3] = r3);
          }, "n");
          if (n2("zoom", "startZoom"), n2("pan", "startPan"), n2("position", "startPosition"), e2.style) for (var r2 = 0; r2 < e2.style.length; r2++) {
            var a2 = e2.style[r2], i2 = a2.name, o2 = e2.startStyle[i2];
            e2.startStyle[i2] = a2, e2.style[r2] = o2;
          }
          return t2 && this.play(), this;
        }, "reverse"), promise: /* @__PURE__ */ __name(function(e2) {
          var t2, n2 = this._private;
          if ("frame" === e2) t2 = n2.frames;
          else t2 = n2.completes;
          return new Hr(function(e3, n3) {
            t2.push(function() {
              e3();
            });
          });
        }, "promise") }), Gr.complete = Gr.completed, Gr.run = Gr.play, Gr.running = Gr.playing;
        var Zr, $r, Qr, Jr, ea, ta, na, ra, aa, ia, oa, sa, la, ua, ca, da, ha, fa, pa, va, ga, ya, ma, ba, xa, wa, Ea, ka, Ta, Ca, Pa, Sa, Ba, Da, _a, Aa, Ma, Ra, Ia, Na, La, za, Oa, Va, Fa, Xa, ja, Ya, qa, Wa, Ua, Ha, Ka, Ga, Za, $a, Qa, Ja, ei, ti, ni, ri, ai, ii, oi, si, li, ui, ci, di, hi, fi, pi, vi, gi, yi, mi, bi, xi, wi, Ei, ki, Ti, Ci, Pi, Si, Bi = { animated: /* @__PURE__ */ __name(function() {
          return function() {
            var e2 = this, t2 = void 0 !== e2.length ? e2 : [e2];
            if (!(this._private.cy || this).styleEnabled()) return false;
            var n2 = t2[0];
            return n2 ? n2._private.animation.current.length > 0 : void 0;
          };
        }, "animated"), clearQueue: /* @__PURE__ */ __name(function() {
          return function() {
            var e2 = this, t2 = void 0 !== e2.length ? e2 : [e2];
            if (!(this._private.cy || this).styleEnabled()) return this;
            for (var n2 = 0; n2 < t2.length; n2++) {
              t2[n2]._private.animation.queue = [];
            }
            return this;
          };
        }, "clearQueue"), delay: /* @__PURE__ */ __name(function() {
          return function(e2, t2) {
            return (this._private.cy || this).styleEnabled() ? this.animate({ delay: e2, duration: e2, complete: t2 }) : this;
          };
        }, "delay"), delayAnimation: /* @__PURE__ */ __name(function() {
          return function(e2, t2) {
            return (this._private.cy || this).styleEnabled() ? this.animation({ delay: e2, duration: e2, complete: t2 }) : this;
          };
        }, "delayAnimation"), animation: /* @__PURE__ */ __name(function() {
          return function(e2, t2) {
            var n2 = this, r2 = void 0 !== n2.length, a2 = r2 ? n2 : [n2], i2 = this._private.cy || this, o2 = !r2, s2 = !o2;
            if (!i2.styleEnabled()) return this;
            var l2 = i2.style();
            if (e2 = ge({}, e2, t2), 0 === Object.keys(e2).length) return new Kr(a2[0], e2);
            switch (void 0 === e2.duration && (e2.duration = 400), e2.duration) {
              case "slow":
                e2.duration = 600;
                break;
              case "fast":
                e2.duration = 200;
            }
            if (s2 && (e2.style = l2.getPropsList(e2.style || e2.css), e2.css = void 0), s2 && null != e2.renderedPosition) {
              var u2 = e2.renderedPosition, c2 = i2.pan(), d2 = i2.zoom();
              e2.position = jt(u2, d2, c2);
            }
            if (o2 && null != e2.panBy) {
              var h2 = e2.panBy, f2 = i2.pan();
              e2.pan = { x: f2.x + h2.x, y: f2.y + h2.y };
            }
            var p2 = e2.center || e2.centre;
            if (o2 && null != p2) {
              var v2 = i2.getCenterPan(p2.eles, e2.zoom);
              null != v2 && (e2.pan = v2);
            }
            if (o2 && null != e2.fit) {
              var g2 = e2.fit, y2 = i2.getFitViewport(g2.eles || g2.boundingBox, g2.padding);
              null != y2 && (e2.pan = y2.pan, e2.zoom = y2.zoom);
            }
            if (o2 && K(e2.zoom)) {
              var m2 = i2.getZoomedViewport(e2.zoom);
              null != m2 ? (m2.zoomed && (e2.zoom = m2.zoom), m2.panned && (e2.pan = m2.pan)) : e2.zoom = null;
            }
            return new Kr(a2[0], e2);
          };
        }, "animation"), animate: /* @__PURE__ */ __name(function() {
          return function(e2, t2) {
            var n2 = this, r2 = void 0 !== n2.length ? n2 : [n2];
            if (!(this._private.cy || this).styleEnabled()) return this;
            t2 && (e2 = ge({}, e2, t2));
            for (var a2 = 0; a2 < r2.length; a2++) {
              var i2 = r2[a2], o2 = i2.animated() && (void 0 === e2.queue || e2.queue);
              i2.animation(e2, o2 ? { queue: true } : void 0).play();
            }
            return this;
          };
        }, "animate"), stop: /* @__PURE__ */ __name(function() {
          return function(e2, t2) {
            var n2 = this, r2 = void 0 !== n2.length ? n2 : [n2], a2 = this._private.cy || this;
            if (!a2.styleEnabled()) return this;
            for (var i2 = 0; i2 < r2.length; i2++) {
              for (var o2 = r2[i2]._private, s2 = o2.animation.current, l2 = 0; l2 < s2.length; l2++) {
                var u2 = s2[l2]._private;
                t2 && (u2.duration = 0);
              }
              e2 && (o2.animation.queue = []), t2 || (o2.animation.current = []);
            }
            return a2.notify("draw"), this;
          };
        }, "stop") };
        function Di() {
          if ($r) return Zr;
          $r = 1;
          var e2 = Array.isArray;
          return Zr = e2;
        }
        __name(Di, "Di");
        function _i() {
          if (ia) return aa;
          ia = 1;
          var e2, t2 = function() {
            if (ra) return na;
            ra = 1;
            var e3 = Te()["__core-js_shared__"];
            return na = e3;
          }(), n2 = (e2 = /[^.]+$/.exec(t2 && t2.keys && t2.keys.IE_PROTO || "")) ? "Symbol(src)_1." + e2 : "";
          return aa = /* @__PURE__ */ __name(function(e3) {
            return !!n2 && n2 in e3;
          }, "aa");
        }
        __name(_i, "_i");
        function Ai() {
          if (ua) return la;
          ua = 1;
          var e2 = function() {
            if (ta) return ea;
            ta = 1;
            var e3 = Se(), t3 = ke();
            return ea = /* @__PURE__ */ __name(function(n3) {
              if (!t3(n3)) return false;
              var r3 = e3(n3);
              return "[object Function]" == r3 || "[object GeneratorFunction]" == r3 || "[object AsyncFunction]" == r3 || "[object Proxy]" == r3;
            }, "ea");
          }(), t2 = _i(), n2 = ke(), r2 = function() {
            if (sa) return oa;
            sa = 1;
            var e3 = Function.prototype.toString;
            return oa = /* @__PURE__ */ __name(function(t3) {
              if (null != t3) {
                try {
                  return e3.call(t3);
                } catch (e4) {
                }
                try {
                  return t3 + "";
                } catch (e4) {
                }
              }
              return "";
            }, "oa");
          }(), a2 = /^\[object .+?Constructor\]$/, i2 = Function.prototype, o2 = Object.prototype, s2 = i2.toString, l2 = o2.hasOwnProperty, u2 = RegExp("^" + s2.call(l2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
          return la = /* @__PURE__ */ __name(function(i3) {
            return !(!n2(i3) || t2(i3)) && (e2(i3) ? u2 : a2).test(r2(i3));
          }, "la");
        }
        __name(Ai, "Ai");
        function Mi() {
          if (fa) return ha;
          fa = 1;
          var e2 = Ai(), t2 = (da || (da = 1, ca = /* @__PURE__ */ __name(function(e3, t3) {
            return null == e3 ? void 0 : e3[t3];
          }, "ca")), ca);
          return ha = /* @__PURE__ */ __name(function(n2, r2) {
            var a2 = t2(n2, r2);
            return e2(a2) ? a2 : void 0;
          }, "ha"), ha;
        }
        __name(Mi, "Mi");
        function Ri() {
          if (va) return pa;
          va = 1;
          var e2 = Mi()(Object, "create");
          return pa = e2;
        }
        __name(Ri, "Ri");
        function Ii() {
          if (Sa) return Pa;
          Sa = 1;
          var e2 = function() {
            if (ya) return ga;
            ya = 1;
            var e3 = Ri();
            return ga = /* @__PURE__ */ __name(function() {
              this.__data__ = e3 ? e3(null) : {}, this.size = 0;
            }, "ga");
          }(), t2 = ba ? ma : (ba = 1, ma = /* @__PURE__ */ __name(function(e3) {
            var t3 = this.has(e3) && delete this.__data__[e3];
            return this.size -= t3 ? 1 : 0, t3;
          }, "ma")), n2 = function() {
            if (wa) return xa;
            wa = 1;
            var e3 = Ri(), t3 = Object.prototype.hasOwnProperty;
            return xa = /* @__PURE__ */ __name(function(n3) {
              var r3 = this.__data__;
              if (e3) {
                var a3 = r3[n3];
                return "__lodash_hash_undefined__" === a3 ? void 0 : a3;
              }
              return t3.call(r3, n3) ? r3[n3] : void 0;
            }, "xa"), xa;
          }(), r2 = function() {
            if (ka) return Ea;
            ka = 1;
            var e3 = Ri(), t3 = Object.prototype.hasOwnProperty;
            return Ea = /* @__PURE__ */ __name(function(n3) {
              var r3 = this.__data__;
              return e3 ? void 0 !== r3[n3] : t3.call(r3, n3);
            }, "Ea"), Ea;
          }(), a2 = function() {
            if (Ca) return Ta;
            Ca = 1;
            var e3 = Ri();
            return Ta = /* @__PURE__ */ __name(function(t3, n3) {
              var r3 = this.__data__;
              return this.size += this.has(t3) ? 0 : 1, r3[t3] = e3 && void 0 === n3 ? "__lodash_hash_undefined__" : n3, this;
            }, "Ta"), Ta;
          }();
          function i2(e3) {
            var t3 = -1, n3 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n3; ) {
              var r3 = e3[t3];
              this.set(r3[0], r3[1]);
            }
          }
          __name(i2, "i");
          return i2.prototype.clear = e2, i2.prototype.delete = t2, i2.prototype.get = n2, i2.prototype.has = r2, i2.prototype.set = a2, Pa = i2;
        }
        __name(Ii, "Ii");
        function Ni() {
          if (Aa) return _a;
          return Aa = 1, _a = /* @__PURE__ */ __name(function(e2, t2) {
            return e2 === t2 || e2 != e2 && t2 != t2;
          }, "_a");
        }
        __name(Ni, "Ni");
        function Li() {
          if (Ra) return Ma;
          Ra = 1;
          var e2 = Ni();
          return Ma = /* @__PURE__ */ __name(function(t2, n2) {
            for (var r2 = t2.length; r2--; ) if (e2(t2[r2][0], n2)) return r2;
            return -1;
          }, "Ma"), Ma;
        }
        __name(Li, "Li");
        function zi() {
          if (Ya) return ja;
          Ya = 1;
          var e2 = Da ? Ba : (Da = 1, Ba = /* @__PURE__ */ __name(function() {
            this.__data__ = [], this.size = 0;
          }, "Ba")), t2 = function() {
            if (Na) return Ia;
            Na = 1;
            var e3 = Li(), t3 = Array.prototype.splice;
            return Ia = /* @__PURE__ */ __name(function(n3) {
              var r3 = this.__data__, a3 = e3(r3, n3);
              return !(a3 < 0 || (a3 == r3.length - 1 ? r3.pop() : t3.call(r3, a3, 1), --this.size, 0));
            }, "Ia"), Ia;
          }(), n2 = function() {
            if (za) return La;
            za = 1;
            var e3 = Li();
            return La = /* @__PURE__ */ __name(function(t3) {
              var n3 = this.__data__, r3 = e3(n3, t3);
              return r3 < 0 ? void 0 : n3[r3][1];
            }, "La"), La;
          }(), r2 = function() {
            if (Va) return Oa;
            Va = 1;
            var e3 = Li();
            return Oa = /* @__PURE__ */ __name(function(t3) {
              return e3(this.__data__, t3) > -1;
            }, "Oa");
          }(), a2 = function() {
            if (Xa) return Fa;
            Xa = 1;
            var e3 = Li();
            return Fa = /* @__PURE__ */ __name(function(t3, n3) {
              var r3 = this.__data__, a3 = e3(r3, t3);
              return a3 < 0 ? (++this.size, r3.push([t3, n3])) : r3[a3][1] = n3, this;
            }, "Fa"), Fa;
          }();
          function i2(e3) {
            var t3 = -1, n3 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n3; ) {
              var r3 = e3[t3];
              this.set(r3[0], r3[1]);
            }
          }
          __name(i2, "i");
          return i2.prototype.clear = e2, i2.prototype.delete = t2, i2.prototype.get = n2, i2.prototype.has = r2, i2.prototype.set = a2, ja = i2;
        }
        __name(zi, "zi");
        function Oi() {
          if (Ha) return Ua;
          Ha = 1;
          var e2 = Ii(), t2 = zi(), n2 = function() {
            if (Wa) return qa;
            Wa = 1;
            var e3 = Mi()(Te(), "Map");
            return qa = e3;
          }();
          return Ua = /* @__PURE__ */ __name(function() {
            this.size = 0, this.__data__ = { hash: new e2(), map: new (n2 || t2)(), string: new e2() };
          }, "Ua");
        }
        __name(Oi, "Oi");
        function Vi() {
          if ($a) return Za;
          $a = 1;
          var e2 = Ga ? Ka : (Ga = 1, Ka = /* @__PURE__ */ __name(function(e3) {
            var t2 = typeof e3;
            return "string" == t2 || "number" == t2 || "symbol" == t2 || "boolean" == t2 ? "__proto__" !== e3 : null === e3;
          }, "Ka"));
          return Za = /* @__PURE__ */ __name(function(t2, n2) {
            var r2 = t2.__data__;
            return e2(n2) ? r2["string" == typeof n2 ? "string" : "hash"] : r2.map;
          }, "Za"), Za;
        }
        __name(Vi, "Vi");
        function Fi() {
          if (si) return oi;
          si = 1;
          var e2 = Oi(), t2 = function() {
            if (Ja) return Qa;
            Ja = 1;
            var e3 = Vi();
            return Qa = /* @__PURE__ */ __name(function(t3) {
              var n3 = e3(this, t3).delete(t3);
              return this.size -= n3 ? 1 : 0, n3;
            }, "Qa");
          }(), n2 = function() {
            if (ti) return ei;
            ti = 1;
            var e3 = Vi();
            return ei = /* @__PURE__ */ __name(function(t3) {
              return e3(this, t3).get(t3);
            }, "ei");
          }(), r2 = function() {
            if (ri) return ni;
            ri = 1;
            var e3 = Vi();
            return ni = /* @__PURE__ */ __name(function(t3) {
              return e3(this, t3).has(t3);
            }, "ni");
          }(), a2 = function() {
            if (ii) return ai;
            ii = 1;
            var e3 = Vi();
            return ai = /* @__PURE__ */ __name(function(t3, n3) {
              var r3 = e3(this, t3), a3 = r3.size;
              return r3.set(t3, n3), this.size += r3.size == a3 ? 0 : 1, this;
            }, "ai"), ai;
          }();
          function i2(e3) {
            var t3 = -1, n3 = null == e3 ? 0 : e3.length;
            for (this.clear(); ++t3 < n3; ) {
              var r3 = e3[t3];
              this.set(r3[0], r3[1]);
            }
          }
          __name(i2, "i");
          return i2.prototype.clear = e2, i2.prototype.delete = t2, i2.prototype.get = n2, i2.prototype.has = r2, i2.prototype.set = a2, oi = i2;
        }
        __name(Fi, "Fi");
        function Xi() {
          if (di) return ci;
          di = 1;
          var e2 = function() {
            if (ui) return li;
            ui = 1;
            var e3 = Fi();
            function t2(n2, r2) {
              if ("function" != typeof n2 || null != r2 && "function" != typeof r2) throw new TypeError("Expected a function");
              var a2 = /* @__PURE__ */ __name(function() {
                var e4 = arguments, t3 = r2 ? r2.apply(this, e4) : e4[0], i2 = a2.cache;
                if (i2.has(t3)) return i2.get(t3);
                var o2 = n2.apply(this, e4);
                return a2.cache = i2.set(t3, o2) || i2, o2;
              }, "a");
              return a2.cache = new (t2.Cache || e3)(), a2;
            }
            __name(t2, "t");
            return t2.Cache = e3, li = t2;
          }();
          return ci = /* @__PURE__ */ __name(function(t2) {
            var n2 = e2(t2, function(e3) {
              return 500 === r2.size && r2.clear(), e3;
            }), r2 = n2.cache;
            return n2;
          }, "ci"), ci;
        }
        __name(Xi, "Xi");
        function ji() {
          if (fi) return hi;
          fi = 1;
          var e2 = Xi(), t2 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, n2 = /\\(\\)?/g, r2 = e2(function(e3) {
            var r3 = [];
            return 46 === e3.charCodeAt(0) && r3.push(""), e3.replace(t2, function(e4, t3, a2, i2) {
              r3.push(a2 ? i2.replace(n2, "$1") : t3 || e4);
            }), r3;
          });
          return hi = r2;
        }
        __name(ji, "ji");
        function Yi() {
          if (vi) return pi;
          return vi = 1, pi = /* @__PURE__ */ __name(function(e2, t2) {
            for (var n2 = -1, r2 = null == e2 ? 0 : e2.length, a2 = Array(r2); ++n2 < r2; ) a2[n2] = t2(e2[n2], n2, e2);
            return a2;
          }, "pi"), pi;
        }
        __name(Yi, "Yi");
        function qi() {
          if (bi) return mi;
          bi = 1;
          var e2 = function() {
            if (yi) return gi;
            yi = 1;
            var e3 = Pe(), t2 = Yi(), n2 = Di(), r2 = Be(), a2 = e3 ? e3.prototype : void 0, i2 = a2 ? a2.toString : void 0;
            return gi = /* @__PURE__ */ __name(function e4(a3) {
              if ("string" == typeof a3) return a3;
              if (n2(a3)) return t2(a3, e4) + "";
              if (r2(a3)) return i2 ? i2.call(a3) : "";
              var o2 = a3 + "";
              return "0" == o2 && 1 / a3 == -1 / 0 ? "-0" : o2;
            }, "e"), gi;
          }();
          return mi = /* @__PURE__ */ __name(function(t2) {
            return null == t2 ? "" : e2(t2);
          }, "mi");
        }
        __name(qi, "qi");
        function Wi() {
          if (wi) return xi;
          wi = 1;
          var e2 = Di(), t2 = function() {
            if (Jr) return Qr;
            Jr = 1;
            var e3 = Di(), t3 = Be(), n3 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, r3 = /^\w*$/;
            return Qr = /* @__PURE__ */ __name(function(a2, i2) {
              if (e3(a2)) return false;
              var o2 = typeof a2;
              return !("number" != o2 && "symbol" != o2 && "boolean" != o2 && null != a2 && !t3(a2)) || r3.test(a2) || !n3.test(a2) || null != i2 && a2 in Object(i2);
            }, "Qr"), Qr;
          }(), n2 = ji(), r2 = qi();
          return xi = /* @__PURE__ */ __name(function(a2, i2) {
            return e2(a2) ? a2 : t2(a2, i2) ? [a2] : n2(r2(a2));
          }, "xi"), xi;
        }
        __name(Wi, "Wi");
        function Ui() {
          if (ki) return Ei;
          ki = 1;
          var e2 = Be();
          return Ei = /* @__PURE__ */ __name(function(t2) {
            if ("string" == typeof t2 || e2(t2)) return t2;
            var n2 = t2 + "";
            return "0" == n2 && 1 / t2 == -1 / 0 ? "-0" : n2;
          }, "Ei");
        }
        __name(Ui, "Ui");
        var Hi, Ki, Gi, Zi, $i, Qi, Ji, eo, to, no, ro, ao, io = function() {
          if (Si) return Pi;
          Si = 1;
          var e2 = function() {
            if (Ci) return Ti;
            Ci = 1;
            var e3 = Wi(), t2 = Ui();
            return Ti = /* @__PURE__ */ __name(function(n2, r2) {
              for (var a2 = 0, i2 = (r2 = e3(r2, n2)).length; null != n2 && a2 < i2; ) n2 = n2[t2(r2[a2++])];
              return a2 && a2 == i2 ? n2 : void 0;
            }, "Ti"), Ti;
          }();
          return Pi = /* @__PURE__ */ __name(function(t2, n2, r2) {
            var a2 = null == t2 ? void 0 : e2(t2, n2);
            return void 0 === a2 ? r2 : a2;
          }, "Pi"), Pi;
        }(), oo = Ee(io);
        function so() {
          if (Zi) return Gi;
          Zi = 1;
          var e2 = function() {
            if (Ki) return Hi;
            Ki = 1;
            var e3 = Mi(), t2 = function() {
              try {
                var t3 = e3(Object, "defineProperty");
                return t3({}, "", {}), t3;
              } catch (e4) {
              }
            }();
            return Hi = t2;
          }();
          return Gi = /* @__PURE__ */ __name(function(t2, n2, r2) {
            "__proto__" == n2 && e2 ? e2(t2, n2, { configurable: true, enumerable: true, value: r2, writable: true }) : t2[n2] = r2;
          }, "Gi"), Gi;
        }
        __name(so, "so");
        function lo() {
          if (no) return to;
          no = 1;
          var e2 = function() {
            if (Qi) return $i;
            Qi = 1;
            var e3 = so(), t3 = Ni(), n3 = Object.prototype.hasOwnProperty;
            return $i = /* @__PURE__ */ __name(function(r3, a3, i2) {
              var o2 = r3[a3];
              n3.call(r3, a3) && t3(o2, i2) && (void 0 !== i2 || a3 in r3) || e3(r3, a3, i2);
            }, "$i"), $i;
          }(), t2 = Wi(), n2 = function() {
            if (eo) return Ji;
            eo = 1;
            var e3 = /^(?:0|[1-9]\d*)$/;
            return Ji = /* @__PURE__ */ __name(function(t3, n3) {
              var r3 = typeof t3;
              return !!(n3 = null == n3 ? 9007199254740991 : n3) && ("number" == r3 || "symbol" != r3 && e3.test(t3)) && t3 > -1 && t3 % 1 == 0 && t3 < n3;
            }, "Ji");
          }(), r2 = ke(), a2 = Ui();
          return to = /* @__PURE__ */ __name(function(i2, o2, s2, l2) {
            if (!r2(i2)) return i2;
            for (var u2 = -1, c2 = (o2 = t2(o2, i2)).length, d2 = c2 - 1, h2 = i2; null != h2 && ++u2 < c2; ) {
              var f2 = a2(o2[u2]), p2 = s2;
              if ("__proto__" === f2 || "constructor" === f2 || "prototype" === f2) return i2;
              if (u2 != d2) {
                var v2 = h2[f2];
                void 0 === (p2 = l2 ? l2(v2, f2, h2) : void 0) && (p2 = r2(v2) ? v2 : n2(o2[u2 + 1]) ? [] : {});
              }
              e2(h2, f2, p2), h2 = h2[f2];
            }
            return i2;
          }, "to"), to;
        }
        __name(lo, "lo");
        var uo, co, ho, fo, po = function() {
          if (ao) return ro;
          ao = 1;
          var e2 = lo();
          return ro = /* @__PURE__ */ __name(function(t2, n2, r2) {
            return null == t2 ? t2 : e2(t2, n2, r2);
          }, "ro"), ro;
        }(), vo = Ee(po);
        var go = function() {
          if (fo) return ho;
          fo = 1;
          var e2 = Yi(), t2 = (co || (co = 1, uo = /* @__PURE__ */ __name(function(e3, t3) {
            var n3 = -1, r3 = e3.length;
            for (t3 || (t3 = Array(r3)); ++n3 < r3; ) t3[n3] = e3[n3];
            return t3;
          }, "uo")), uo), n2 = Di(), r2 = Be(), a2 = ji(), i2 = Ui(), o2 = qi();
          return ho = /* @__PURE__ */ __name(function(s2) {
            return n2(s2) ? e2(s2, i2) : r2(s2) ? [s2] : t2(a2(o2(s2)));
          }, "ho");
        }(), yo = Ee(go), mo = { data: /* @__PURE__ */ __name(function(e2) {
          return e2 = ge({}, { field: "data", bindingEvent: "data", allowBinding: false, allowSetting: false, allowGetting: false, settingEvent: "data", settingTriggersEvent: false, triggerFnName: "trigger", immutableKeys: {}, updateStyle: false, beforeGet: /* @__PURE__ */ __name(function(e3) {
          }, "beforeGet"), beforeSet: /* @__PURE__ */ __name(function(e3, t2) {
          }, "beforeSet"), onSet: /* @__PURE__ */ __name(function(e3) {
          }, "onSet"), canSet: /* @__PURE__ */ __name(function(e3) {
            return true;
          }, "canSet") }, e2), function(t2, n2) {
            var r2 = e2, i2 = this, o2 = void 0 !== i2.length, s2 = o2 ? i2 : [i2], l2 = o2 ? i2[0] : i2;
            if (W(t2)) {
              var u2, c2 = -1 !== t2.indexOf(".") && yo(t2);
              if (r2.allowGetting && void 0 === n2) return l2 && (r2.beforeGet(l2), u2 = c2 && void 0 === l2._private[r2.field][t2] ? oo(l2._private[r2.field], c2) : l2._private[r2.field][t2]), u2;
              if (r2.allowSetting && void 0 !== n2 && !r2.immutableKeys[t2]) {
                var d2 = a({}, t2, n2);
                r2.beforeSet(i2, d2);
                for (var h2 = 0, f2 = s2.length; h2 < f2; h2++) {
                  var p2 = s2[h2];
                  r2.canSet(p2) && (c2 && void 0 === l2._private[r2.field][t2] ? vo(p2._private[r2.field], c2, n2) : p2._private[r2.field][t2] = n2);
                }
                r2.updateStyle && i2.updateStyle(), r2.onSet(i2), r2.settingTriggersEvent && i2[r2.triggerFnName](r2.settingEvent);
              }
            } else if (r2.allowSetting && K(t2)) {
              var v2, g2, y2 = t2, m2 = Object.keys(y2);
              r2.beforeSet(i2, y2);
              for (var b2 = 0; b2 < m2.length; b2++) {
                if (g2 = y2[v2 = m2[b2]], !r2.immutableKeys[v2]) for (var x2 = 0; x2 < s2.length; x2++) {
                  var w2 = s2[x2];
                  r2.canSet(w2) && (w2._private[r2.field][v2] = g2);
                }
              }
              r2.updateStyle && i2.updateStyle(), r2.onSet(i2), r2.settingTriggersEvent && i2[r2.triggerFnName](r2.settingEvent);
            } else if (r2.allowBinding && U(t2)) {
              var E2 = t2;
              i2.on(r2.bindingEvent, E2);
            } else if (r2.allowGetting && void 0 === t2) {
              var k2;
              return l2 && (r2.beforeGet(l2), k2 = l2._private[r2.field]), k2;
            }
            return i2;
          };
        }, "data"), removeData: /* @__PURE__ */ __name(function(e2) {
          return e2 = ge({}, { field: "data", event: "data", triggerFnName: "trigger", triggerEvent: false, immutableKeys: {} }, e2), function(t2) {
            var n2 = e2, r2 = this, a2 = void 0 !== r2.length ? r2 : [r2];
            if (W(t2)) {
              for (var i2 = t2.split(/\s+/), o2 = i2.length, s2 = 0; s2 < o2; s2++) {
                var l2 = i2[s2];
                if (!ne(l2)) {
                  if (!n2.immutableKeys[l2]) for (var u2 = 0, c2 = a2.length; u2 < c2; u2++) a2[u2]._private[n2.field][l2] = void 0;
                }
              }
              n2.triggerEvent && r2[n2.triggerFnName](n2.event);
            } else if (void 0 === t2) {
              for (var d2 = 0, h2 = a2.length; d2 < h2; d2++) for (var f2 = a2[d2]._private[n2.field], p2 = Object.keys(f2), v2 = 0; v2 < p2.length; v2++) {
                var g2 = p2[v2];
                !n2.immutableKeys[g2] && (f2[g2] = void 0);
              }
              n2.triggerEvent && r2[n2.triggerFnName](n2.event);
            }
            return r2;
          };
        }, "removeData") }, bo = { eventAliasesOn: /* @__PURE__ */ __name(function(e2) {
          var t2 = e2;
          t2.addListener = t2.listen = t2.bind = t2.on, t2.unlisten = t2.unbind = t2.off = t2.removeListener, t2.trigger = t2.emit, t2.pon = t2.promiseOn = function(e3, t3) {
            var n2 = this, r2 = Array.prototype.slice.call(arguments, 0);
            return new Hr(function(e4, t4) {
              var a2 = r2.concat([function(t5) {
                n2.off.apply(n2, i2), e4(t5);
              }]), i2 = a2.concat([]);
              n2.on.apply(n2, a2);
            });
          };
        }, "eventAliasesOn") }, xo = {};
        [Bi, mo, bo].forEach(function(e2) {
          ge(xo, e2);
        });
        var wo = { animate: xo.animate(), animation: xo.animation(), animated: xo.animated(), clearQueue: xo.clearQueue(), delay: xo.delay(), delayAnimation: xo.delayAnimation(), stop: xo.stop() }, Eo = { classes: /* @__PURE__ */ __name(function(e2) {
          var t2 = this;
          if (void 0 === e2) {
            var n2 = [];
            return t2[0]._private.classes.forEach(function(e3) {
              return n2.push(e3);
            }), n2;
          }
          H(e2) || (e2 = (e2 || "").match(/\S+/g) || []);
          for (var r2 = [], a2 = new gt(e2), i2 = 0; i2 < t2.length; i2++) {
            for (var o2 = t2[i2], s2 = o2._private, l2 = s2.classes, u2 = false, c2 = 0; c2 < e2.length; c2++) {
              var d2 = e2[c2];
              if (!l2.has(d2)) {
                u2 = true;
                break;
              }
            }
            u2 || (u2 = l2.size !== e2.length), u2 && (s2.classes = a2, r2.push(o2));
          }
          return r2.length > 0 && this.spawn(r2).updateStyle().emit("class"), t2;
        }, "classes"), addClass: /* @__PURE__ */ __name(function(e2) {
          return this.toggleClass(e2, true);
        }, "addClass"), hasClass: /* @__PURE__ */ __name(function(e2) {
          var t2 = this[0];
          return null != t2 && t2._private.classes.has(e2);
        }, "hasClass"), toggleClass: /* @__PURE__ */ __name(function(e2, t2) {
          H(e2) || (e2 = e2.match(/\S+/g) || []);
          for (var n2 = this, r2 = void 0 === t2, a2 = [], i2 = 0, o2 = n2.length; i2 < o2; i2++) for (var s2 = n2[i2], l2 = s2._private.classes, u2 = false, c2 = 0; c2 < e2.length; c2++) {
            var d2 = e2[c2], h2 = l2.has(d2), f2 = false;
            t2 || r2 && !h2 ? (l2.add(d2), f2 = true) : (!t2 || r2 && h2) && (l2.delete(d2), f2 = true), !u2 && f2 && (a2.push(s2), u2 = true);
          }
          return a2.length > 0 && this.spawn(a2).updateStyle().emit("class"), n2;
        }, "toggleClass"), removeClass: /* @__PURE__ */ __name(function(e2) {
          return this.toggleClass(e2, false);
        }, "removeClass"), flashClass: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this;
          if (null == t2) t2 = 250;
          else if (0 === t2) return n2;
          return n2.addClass(e2), setTimeout(function() {
            n2.removeClass(e2);
          }, t2), n2;
        }, "flashClass") };
        Eo.className = Eo.classNames = Eo.classes;
        var ko = { metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]", comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=", boolOp: "\\?|\\!|\\^", string: `"(?:\\\\"|[^"])*"|'(?:\\\\'|[^'])*'`, number: ce, meta: "degree|indegree|outdegree", separator: "\\s*,\\s*", descendant: "\\s+", child: "\\s+>\\s+", subject: "\\$", group: "node|edge|\\*", directedEdge: "\\s+->\\s+", undirectedEdge: "\\s+<->\\s+" };
        ko.variable = "(?:[\\w-.]|(?:\\\\" + ko.metaChar + "))+", ko.className = "(?:[\\w-]|(?:\\\\" + ko.metaChar + "))+", ko.value = ko.string + "|" + ko.number, ko.id = ko.variable, function() {
          var e2, t2, n2;
          for (e2 = ko.comparatorOp.split("|"), n2 = 0; n2 < e2.length; n2++) t2 = e2[n2], ko.comparatorOp += "|@" + t2;
          for (e2 = ko.comparatorOp.split("|"), n2 = 0; n2 < e2.length; n2++) (t2 = e2[n2]).indexOf("!") >= 0 || "=" !== t2 && (ko.comparatorOp += "|\\!" + t2);
        }();
        var To = 0, Co = 1, Po = 2, So = 3, Bo = 4, Do = 5, _o = 6, Ao = 7, Mo = 8, Ro = 9, Io = 10, No = 11, Lo = 12, zo = 13, Oo = 14, Vo = 15, Fo = 16, Xo = 17, jo = 18, Yo = 19, qo = 20, Wo = [{ selector: ":selected", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.selected();
        }, "matches") }, { selector: ":unselected", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.selected();
        }, "matches") }, { selector: ":selectable", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.selectable();
        }, "matches") }, { selector: ":unselectable", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.selectable();
        }, "matches") }, { selector: ":locked", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.locked();
        }, "matches") }, { selector: ":unlocked", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.locked();
        }, "matches") }, { selector: ":visible", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.visible();
        }, "matches") }, { selector: ":hidden", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.visible();
        }, "matches") }, { selector: ":transparent", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.transparent();
        }, "matches") }, { selector: ":grabbed", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.grabbed();
        }, "matches") }, { selector: ":free", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.grabbed();
        }, "matches") }, { selector: ":removed", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.removed();
        }, "matches") }, { selector: ":inside", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.removed();
        }, "matches") }, { selector: ":grabbable", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.grabbable();
        }, "matches") }, { selector: ":ungrabbable", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.grabbable();
        }, "matches") }, { selector: ":animated", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.animated();
        }, "matches") }, { selector: ":unanimated", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.animated();
        }, "matches") }, { selector: ":parent", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isParent();
        }, "matches") }, { selector: ":childless", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isChildless();
        }, "matches") }, { selector: ":child", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isChild();
        }, "matches") }, { selector: ":orphan", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isOrphan();
        }, "matches") }, { selector: ":nonorphan", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isChild();
        }, "matches") }, { selector: ":compound", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isNode() ? e2.isParent() : e2.source().isParent() || e2.target().isParent();
        }, "matches") }, { selector: ":loop", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isLoop();
        }, "matches") }, { selector: ":simple", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.isSimple();
        }, "matches") }, { selector: ":active", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.active();
        }, "matches") }, { selector: ":inactive", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.active();
        }, "matches") }, { selector: ":backgrounding", matches: /* @__PURE__ */ __name(function(e2) {
          return e2.backgrounding();
        }, "matches") }, { selector: ":nonbackgrounding", matches: /* @__PURE__ */ __name(function(e2) {
          return !e2.backgrounding();
        }, "matches") }].sort(function(e2, t2) {
          return function(e3, t3) {
            return -1 * ve(e3, t3);
          }(e2.selector, t2.selector);
        }), Uo = function() {
          for (var e2, t2 = {}, n2 = 0; n2 < Wo.length; n2++) t2[(e2 = Wo[n2]).selector] = e2.matches;
          return t2;
        }(), Ho = "(" + Wo.map(function(e2) {
          return e2.selector;
        }).join("|") + ")", Ko = /* @__PURE__ */ __name(function(e2) {
          return e2.replace(new RegExp("\\\\(" + ko.metaChar + ")", "g"), function(e3, t2) {
            return t2;
          });
        }, "Ko"), Go = /* @__PURE__ */ __name(function(e2, t2, n2) {
          e2[e2.length - 1] = n2;
        }, "Go"), Zo = [{ name: "group", query: true, regex: "(" + ko.group + ")", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 1)[0];
          t2.checks.push({ type: To, value: "*" === r2 ? r2 : r2 + "s" });
        }, "populate") }, { name: "state", query: true, regex: Ho, populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 1)[0];
          t2.checks.push({ type: Ao, value: r2 });
        }, "populate") }, { name: "id", query: true, regex: "\\#(" + ko.id + ")", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 1)[0];
          t2.checks.push({ type: Mo, value: Ko(r2) });
        }, "populate") }, { name: "className", query: true, regex: "\\.(" + ko.className + ")", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 1)[0];
          t2.checks.push({ type: Ro, value: Ko(r2) });
        }, "populate") }, { name: "dataExists", query: true, regex: "\\[\\s*(" + ko.variable + ")\\s*\\]", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 1)[0];
          t2.checks.push({ type: Bo, field: Ko(r2) });
        }, "populate") }, { name: "dataCompare", query: true, regex: "\\[\\s*(" + ko.variable + ")\\s*(" + ko.comparatorOp + ")\\s*(" + ko.value + ")\\s*\\]", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 3), a2 = r2[0], o2 = r2[1], s2 = r2[2];
          s2 = null != new RegExp("^" + ko.string + "$").exec(s2) ? s2.substring(1, s2.length - 1) : parseFloat(s2), t2.checks.push({ type: So, field: Ko(a2), operator: o2, value: s2 });
        }, "populate") }, { name: "dataBool", query: true, regex: "\\[\\s*(" + ko.boolOp + ")\\s*(" + ko.variable + ")\\s*\\]", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 2), a2 = r2[0], o2 = r2[1];
          t2.checks.push({ type: Do, field: Ko(o2), operator: a2 });
        }, "populate") }, { name: "metaCompare", query: true, regex: "\\[\\[\\s*(" + ko.meta + ")\\s*(" + ko.comparatorOp + ")\\s*(" + ko.number + ")\\s*\\]\\]", populate: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = i(n2, 3), a2 = r2[0], o2 = r2[1], s2 = r2[2];
          t2.checks.push({ type: _o, field: Ko(a2), operator: o2, value: parseFloat(s2) });
        }, "populate") }, { name: "nextQuery", separator: true, regex: ko.separator, populate: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = e2.currentSubject, r2 = e2.edgeCount, a2 = e2.compoundCount, i2 = e2[e2.length - 1];
          return null != n2 && (i2.subject = n2, e2.currentSubject = null), i2.edgeCount = r2, i2.compoundCount = a2, e2.edgeCount = 0, e2.compoundCount = 0, e2[e2.length++] = { checks: [] };
        }, "populate") }, { name: "directedEdge", separator: true, regex: ko.directedEdge, populate: /* @__PURE__ */ __name(function(e2, t2) {
          if (null == e2.currentSubject) {
            var n2 = { checks: [] }, r2 = t2, a2 = { checks: [] };
            return n2.checks.push({ type: No, source: r2, target: a2 }), Go(e2, 0, n2), e2.edgeCount++, a2;
          }
          var i2 = { checks: [] }, o2 = t2, s2 = { checks: [] };
          return i2.checks.push({ type: Lo, source: o2, target: s2 }), Go(e2, 0, i2), e2.edgeCount++, s2;
        }, "populate") }, { name: "undirectedEdge", separator: true, regex: ko.undirectedEdge, populate: /* @__PURE__ */ __name(function(e2, t2) {
          if (null == e2.currentSubject) {
            var n2 = { checks: [] }, r2 = t2, a2 = { checks: [] };
            return n2.checks.push({ type: Io, nodes: [r2, a2] }), Go(e2, 0, n2), e2.edgeCount++, a2;
          }
          var i2 = { checks: [] }, o2 = t2, s2 = { checks: [] };
          return i2.checks.push({ type: Oo, node: o2, neighbor: s2 }), Go(e2, 0, i2), s2;
        }, "populate") }, { name: "child", separator: true, regex: ko.child, populate: /* @__PURE__ */ __name(function(e2, t2) {
          if (null == e2.currentSubject) {
            var n2 = { checks: [] }, r2 = { checks: [] }, a2 = e2[e2.length - 1];
            return n2.checks.push({ type: Vo, parent: a2, child: r2 }), Go(e2, 0, n2), e2.compoundCount++, r2;
          }
          if (e2.currentSubject === t2) {
            var i2 = { checks: [] }, o2 = e2[e2.length - 1], s2 = { checks: [] }, l2 = { checks: [] }, u2 = { checks: [] }, c2 = { checks: [] };
            return i2.checks.push({ type: Yo, left: o2, right: s2, subject: l2 }), l2.checks = t2.checks, t2.checks = [{ type: qo }], c2.checks.push({ type: qo }), s2.checks.push({ type: Xo, parent: c2, child: u2 }), Go(e2, 0, i2), e2.currentSubject = l2, e2.compoundCount++, u2;
          }
          var d2 = { checks: [] }, h2 = { checks: [] }, f2 = [{ type: Xo, parent: d2, child: h2 }];
          return d2.checks = t2.checks, t2.checks = f2, e2.compoundCount++, h2;
        }, "populate") }, { name: "descendant", separator: true, regex: ko.descendant, populate: /* @__PURE__ */ __name(function(e2, t2) {
          if (null == e2.currentSubject) {
            var n2 = { checks: [] }, r2 = { checks: [] }, a2 = e2[e2.length - 1];
            return n2.checks.push({ type: Fo, ancestor: a2, descendant: r2 }), Go(e2, 0, n2), e2.compoundCount++, r2;
          }
          if (e2.currentSubject === t2) {
            var i2 = { checks: [] }, o2 = e2[e2.length - 1], s2 = { checks: [] }, l2 = { checks: [] }, u2 = { checks: [] }, c2 = { checks: [] };
            return i2.checks.push({ type: Yo, left: o2, right: s2, subject: l2 }), l2.checks = t2.checks, t2.checks = [{ type: qo }], c2.checks.push({ type: qo }), s2.checks.push({ type: jo, ancestor: c2, descendant: u2 }), Go(e2, 0, i2), e2.currentSubject = l2, e2.compoundCount++, u2;
          }
          var d2 = { checks: [] }, h2 = { checks: [] }, f2 = [{ type: jo, ancestor: d2, descendant: h2 }];
          return d2.checks = t2.checks, t2.checks = f2, e2.compoundCount++, h2;
        }, "populate") }, { name: "subject", modifier: true, regex: ko.subject, populate: /* @__PURE__ */ __name(function(e2, t2) {
          if (null != e2.currentSubject && e2.currentSubject !== t2) return at("Redefinition of subject in selector `" + e2.toString() + "`"), false;
          e2.currentSubject = t2;
          var n2 = e2[e2.length - 1].checks[0], r2 = null == n2 ? null : n2.type;
          r2 === No ? n2.type = zo : r2 === Io && (n2.type = Oo, n2.node = n2.nodes[1], n2.neighbor = n2.nodes[0], n2.nodes = null);
        }, "populate") }];
        Zo.forEach(function(e2) {
          return e2.regexObj = new RegExp("^" + e2.regex);
        });
        var $o = /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2, r2, a2 = 0; a2 < Zo.length; a2++) {
            var i2 = Zo[a2], o2 = i2.name, s2 = e2.match(i2.regexObj);
            if (null != s2) {
              n2 = s2, t2 = i2, r2 = o2;
              var l2 = s2[0];
              e2 = e2.substring(l2.length);
              break;
            }
          }
          return { expr: t2, match: n2, name: r2, remaining: e2 };
        }, "$o"), Qo = { parse: /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = t2.inputText = e2, r2 = t2[0] = { checks: [] };
          for (t2.length = 1, n2 = function(e3) {
            var t3 = e3.match(/^\s+/);
            if (t3) {
              var n3 = t3[0];
              e3 = e3.substring(n3.length);
            }
            return e3;
          }(n2); ; ) {
            var a2 = $o(n2);
            if (null == a2.expr) return at("The selector `" + e2 + "`is invalid"), false;
            var i2 = a2.match.slice(1), o2 = a2.expr.populate(t2, r2, i2);
            if (false === o2) return false;
            if (null != o2 && (r2 = o2), (n2 = a2.remaining).match(/^\s*$/)) break;
          }
          var s2 = t2[t2.length - 1];
          null != t2.currentSubject && (s2.subject = t2.currentSubject), s2.edgeCount = t2.edgeCount, s2.compoundCount = t2.compoundCount;
          for (var l2 = 0; l2 < t2.length; l2++) {
            var u2 = t2[l2];
            if (u2.compoundCount > 0 && u2.edgeCount > 0) return at("The selector `" + e2 + "` is invalid because it uses both a compound selector and an edge selector"), false;
            if (u2.edgeCount > 1) return at("The selector `" + e2 + "` is invalid because it uses multiple edge selectors"), false;
            1 === u2.edgeCount && at("The selector `" + e2 + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
          }
          return true;
        }, "parse"), toString: /* @__PURE__ */ __name(function() {
          if (null != this.toStringCache) return this.toStringCache;
          for (var e2 = function(e3) {
            return null == e3 ? "" : e3;
          }, t2 = function(t3) {
            return W(t3) ? '"' + t3 + '"' : e2(t3);
          }, n2 = function(e3) {
            return " " + e3 + " ";
          }, r2 = function(r3, i3) {
            var o3 = r3.type, s3 = r3.value;
            switch (o3) {
              case To:
                var l2 = e2(s3);
                return l2.substring(0, l2.length - 1);
              case So:
                var u2 = r3.field, c2 = r3.operator;
                return "[" + u2 + n2(e2(c2)) + t2(s3) + "]";
              case Do:
                var d2 = r3.operator, h2 = r3.field;
                return "[" + e2(d2) + h2 + "]";
              case Bo:
                return "[" + r3.field + "]";
              case _o:
                var f2 = r3.operator;
                return "[[" + r3.field + n2(e2(f2)) + t2(s3) + "]]";
              case Ao:
                return s3;
              case Mo:
                return "#" + s3;
              case Ro:
                return "." + s3;
              case Xo:
              case Vo:
                return a2(r3.parent, i3) + n2(">") + a2(r3.child, i3);
              case jo:
              case Fo:
                return a2(r3.ancestor, i3) + " " + a2(r3.descendant, i3);
              case Yo:
                var p2 = a2(r3.left, i3), v2 = a2(r3.subject, i3), g2 = a2(r3.right, i3);
                return p2 + (p2.length > 0 ? " " : "") + v2 + g2;
              case qo:
                return "";
            }
          }, a2 = function(e3, t3) {
            return e3.checks.reduce(function(n3, a3, i3) {
              return n3 + (t3 === e3 && 0 === i3 ? "$" : "") + r2(a3, t3);
            }, "");
          }, i2 = "", o2 = 0; o2 < this.length; o2++) {
            var s2 = this[o2];
            i2 += a2(s2, s2.subject), this.length > 1 && o2 < this.length - 1 && (i2 += ", ");
          }
          return this.toStringCache = i2, i2;
        }, "toString") }, Jo = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2, a2, i2, o2 = W(e2), s2 = G(e2), l2 = W(n2), u2 = false, c2 = false, d2 = false;
          switch (t2.indexOf("!") >= 0 && (t2 = t2.replace("!", ""), c2 = true), t2.indexOf("@") >= 0 && (t2 = t2.replace("@", ""), u2 = true), (o2 || l2 || u2) && (a2 = o2 || s2 ? "" + e2 : "", i2 = "" + n2), u2 && (e2 = a2 = a2.toLowerCase(), n2 = i2 = i2.toLowerCase()), t2) {
            case "*=":
              r2 = a2.indexOf(i2) >= 0;
              break;
            case "$=":
              r2 = a2.indexOf(i2, a2.length - i2.length) >= 0;
              break;
            case "^=":
              r2 = 0 === a2.indexOf(i2);
              break;
            case "=":
              r2 = e2 === n2;
              break;
            case ">":
              d2 = true, r2 = e2 > n2;
              break;
            case ">=":
              d2 = true, r2 = e2 >= n2;
              break;
            case "<":
              d2 = true, r2 = e2 < n2;
              break;
            case "<=":
              d2 = true, r2 = e2 <= n2;
              break;
            default:
              r2 = false;
          }
          return !c2 || null == e2 && d2 || (r2 = !r2), r2;
        }, "Jo"), es = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.data(t2);
        }, "es"), ts = [], ns = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.checks.every(function(e3) {
            return ts[e3.type](e3, t2);
          });
        }, "ns");
        ts[To] = function(e2, t2) {
          var n2 = e2.value;
          return "*" === n2 || n2 === t2.group();
        }, ts[Ao] = function(e2, t2) {
          return function(e3, t3) {
            return Uo[e3](t3);
          }(e2.value, t2);
        }, ts[Mo] = function(e2, t2) {
          var n2 = e2.value;
          return t2.id() === n2;
        }, ts[Ro] = function(e2, t2) {
          var n2 = e2.value;
          return t2.hasClass(n2);
        }, ts[_o] = function(e2, t2) {
          var n2 = e2.field, r2 = e2.operator, a2 = e2.value;
          return Jo(function(e3, t3) {
            return e3[t3]();
          }(t2, n2), r2, a2);
        }, ts[So] = function(e2, t2) {
          var n2 = e2.field, r2 = e2.operator, a2 = e2.value;
          return Jo(es(t2, n2), r2, a2);
        }, ts[Do] = function(e2, t2) {
          var n2 = e2.field, r2 = e2.operator;
          return function(e3, t3) {
            switch (t3) {
              case "?":
                return !!e3;
              case "!":
                return !e3;
              case "^":
                return void 0 === e3;
            }
          }(es(t2, n2), r2);
        }, ts[Bo] = function(e2, t2) {
          var n2 = e2.field;
          return e2.operator, void 0 !== es(t2, n2);
        }, ts[Io] = function(e2, t2) {
          var n2 = e2.nodes[0], r2 = e2.nodes[1], a2 = t2.source(), i2 = t2.target();
          return ns(n2, a2) && ns(r2, i2) || ns(r2, a2) && ns(n2, i2);
        }, ts[Oo] = function(e2, t2) {
          return ns(e2.node, t2) && t2.neighborhood().some(function(t3) {
            return t3.isNode() && ns(e2.neighbor, t3);
          });
        }, ts[No] = function(e2, t2) {
          return ns(e2.source, t2.source()) && ns(e2.target, t2.target());
        }, ts[Lo] = function(e2, t2) {
          return ns(e2.source, t2) && t2.outgoers().some(function(t3) {
            return t3.isNode() && ns(e2.target, t3);
          });
        }, ts[zo] = function(e2, t2) {
          return ns(e2.target, t2) && t2.incomers().some(function(t3) {
            return t3.isNode() && ns(e2.source, t3);
          });
        }, ts[Vo] = function(e2, t2) {
          return ns(e2.child, t2) && ns(e2.parent, t2.parent());
        }, ts[Xo] = function(e2, t2) {
          return ns(e2.parent, t2) && t2.children().some(function(t3) {
            return ns(e2.child, t3);
          });
        }, ts[Fo] = function(e2, t2) {
          return ns(e2.descendant, t2) && t2.ancestors().some(function(t3) {
            return ns(e2.ancestor, t3);
          });
        }, ts[jo] = function(e2, t2) {
          return ns(e2.ancestor, t2) && t2.descendants().some(function(t3) {
            return ns(e2.descendant, t3);
          });
        }, ts[Yo] = function(e2, t2) {
          return ns(e2.subject, t2) && ns(e2.left, t2) && ns(e2.right, t2);
        }, ts[qo] = function() {
          return true;
        }, ts[Co] = function(e2, t2) {
          return e2.value.has(t2);
        }, ts[Po] = function(e2, t2) {
          return (0, e2.value)(t2);
        };
        var rs = { matches: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = 0; t2 < this.length; t2++) {
            var n2 = this[t2];
            if (ns(n2, e2)) return true;
          }
          return false;
        }, "matches"), filter: /* @__PURE__ */ __name(function(e2) {
          var t2 = this;
          if (1 === t2.length && 1 === t2[0].checks.length && t2[0].checks[0].type === Mo) return e2.getElementById(t2[0].checks[0].value).collection();
          var n2 = /* @__PURE__ */ __name(function(e3) {
            for (var n3 = 0; n3 < t2.length; n3++) {
              var r2 = t2[n3];
              if (ns(r2, e3)) return true;
            }
            return false;
          }, "n");
          return null == t2.text() && (n2 = /* @__PURE__ */ __name(function() {
            return true;
          }, "n")), e2.filter(n2);
        }, "filter") }, as = /* @__PURE__ */ __name(function(e2) {
          this.inputText = e2, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, null == e2 || W(e2) && e2.match(/^\s*$/) || ($(e2) ? this.addQuery({ checks: [{ type: Co, value: e2.collection() }] }) : U(e2) ? this.addQuery({ checks: [{ type: Po, value: e2 }] }) : W(e2) ? this.parse(e2) || (this.invalid = true) : nt("A selector must be created from a string; found "));
        }, "as"), is = as.prototype;
        [Qo, rs].forEach(function(e2) {
          return ge(is, e2);
        }), is.text = function() {
          return this.inputText;
        }, is.size = function() {
          return this.length;
        }, is.eq = function(e2) {
          return this[e2];
        }, is.sameText = function(e2) {
          return !this.invalid && !e2.invalid && this.text() === e2.text();
        }, is.addQuery = function(e2) {
          this[this.length++] = e2;
        }, is.selector = is.toString;
        var os = { allAre: /* @__PURE__ */ __name(function(e2) {
          var t2 = new as(e2);
          return this.every(function(e3) {
            return t2.matches(e3);
          });
        }, "allAre"), is: /* @__PURE__ */ __name(function(e2) {
          var t2 = new as(e2);
          return this.some(function(e3) {
            return t2.matches(e3);
          });
        }, "is"), some: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < this.length; n2++) {
            if (t2 ? e2.apply(t2, [this[n2], n2, this]) : e2(this[n2], n2, this)) return true;
          }
          return false;
        }, "some"), every: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < this.length; n2++) {
            if (!(t2 ? e2.apply(t2, [this[n2], n2, this]) : e2(this[n2], n2, this))) return false;
          }
          return true;
        }, "every"), same: /* @__PURE__ */ __name(function(e2) {
          if (this === e2) return true;
          e2 = this.cy().collection(e2);
          var t2 = this.length;
          return t2 === e2.length && (1 === t2 ? this[0] === e2[0] : this.every(function(t3) {
            return e2.hasElementWithId(t3.id());
          }));
        }, "same"), anySame: /* @__PURE__ */ __name(function(e2) {
          return e2 = this.cy().collection(e2), this.some(function(t2) {
            return e2.hasElementWithId(t2.id());
          });
        }, "anySame"), allAreNeighbors: /* @__PURE__ */ __name(function(e2) {
          e2 = this.cy().collection(e2);
          var t2 = this.neighborhood();
          return e2.every(function(e3) {
            return t2.hasElementWithId(e3.id());
          });
        }, "allAreNeighbors"), contains: /* @__PURE__ */ __name(function(e2) {
          e2 = this.cy().collection(e2);
          var t2 = this;
          return e2.every(function(e3) {
            return t2.hasElementWithId(e3.id());
          });
        }, "contains") };
        os.allAreNeighbours = os.allAreNeighbors, os.has = os.contains, os.equal = os.equals = os.same;
        var ss, ls, us = /* @__PURE__ */ __name(function(e2, t2) {
          return function(n2, r2, a2, i2) {
            var o2, s2 = n2, l2 = this;
            if (null == s2 ? o2 = "" : $(s2) && 1 === s2.length && (o2 = s2.id()), 1 === l2.length && o2) {
              var u2 = l2[0]._private, c2 = u2.traversalCache = u2.traversalCache || {}, d2 = c2[t2] = c2[t2] || [], h2 = qe(o2), f2 = d2[h2];
              return f2 || (d2[h2] = e2.call(l2, n2, r2, a2, i2));
            }
            return e2.call(l2, n2, r2, a2, i2);
          };
        }, "us"), cs = { parent: /* @__PURE__ */ __name(function(e2) {
          var t2 = [];
          if (1 === this.length) {
            var n2 = this[0]._private.parent;
            if (n2) return n2;
          }
          for (var r2 = 0; r2 < this.length; r2++) {
            var a2 = this[r2]._private.parent;
            a2 && t2.push(a2);
          }
          return this.spawn(t2, true).filter(e2);
        }, "parent"), parents: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = [], n2 = this.parent(); n2.nonempty(); ) {
            for (var r2 = 0; r2 < n2.length; r2++) {
              var a2 = n2[r2];
              t2.push(a2);
            }
            n2 = n2.parent();
          }
          return this.spawn(t2, true).filter(e2);
        }, "parents"), commonAncestors: /* @__PURE__ */ __name(function(e2) {
          for (var t2, n2 = 0; n2 < this.length; n2++) {
            var r2 = this[n2].parents();
            t2 = (t2 = t2 || r2).intersect(r2);
          }
          return t2.filter(e2);
        }, "commonAncestors"), orphans: /* @__PURE__ */ __name(function(e2) {
          return this.stdFilter(function(e3) {
            return e3.isOrphan();
          }).filter(e2);
        }, "orphans"), nonorphans: /* @__PURE__ */ __name(function(e2) {
          return this.stdFilter(function(e3) {
            return e3.isChild();
          }).filter(e2);
        }, "nonorphans"), children: us(function(e2) {
          for (var t2 = [], n2 = 0; n2 < this.length; n2++) for (var r2 = this[n2]._private.children, a2 = 0; a2 < r2.length; a2++) t2.push(r2[a2]);
          return this.spawn(t2, true).filter(e2);
        }, "children"), siblings: /* @__PURE__ */ __name(function(e2) {
          return this.parent().children().not(this).filter(e2);
        }, "siblings"), isParent: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) return e2.isNode() && 0 !== e2._private.children.length;
        }, "isParent"), isChildless: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) return e2.isNode() && 0 === e2._private.children.length;
        }, "isChildless"), isChild: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) return e2.isNode() && null != e2._private.parent;
        }, "isChild"), isOrphan: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) return e2.isNode() && null == e2._private.parent;
        }, "isOrphan"), descendants: /* @__PURE__ */ __name(function(e2) {
          var t2 = [];
          return (/* @__PURE__ */ __name(function e3(n2) {
            for (var r2 = 0; r2 < n2.length; r2++) {
              var a2 = n2[r2];
              t2.push(a2), a2.children().nonempty() && e3(a2.children());
            }
          }, "e"))(this.children()), this.spawn(t2, true).filter(e2);
        }, "descendants") };
        function ds(e2, t2, n2, r2) {
          for (var a2 = [], i2 = new gt(), o2 = e2.cy().hasCompoundNodes(), s2 = 0; s2 < e2.length; s2++) {
            var l2 = e2[s2];
            n2 ? a2.push(l2) : o2 && r2(a2, i2, l2);
          }
          for (; a2.length > 0; ) {
            var u2 = a2.shift();
            t2(u2), i2.add(u2.id()), o2 && r2(a2, i2, u2);
          }
          return e2;
        }
        __name(ds, "ds");
        function hs(e2, t2, n2) {
          if (n2.isParent()) for (var r2 = n2._private.children, a2 = 0; a2 < r2.length; a2++) {
            var i2 = r2[a2];
            t2.has(i2.id()) || e2.push(i2);
          }
        }
        __name(hs, "hs");
        function fs(e2, t2, n2) {
          if (n2.isChild()) {
            var r2 = n2._private.parent;
            t2.has(r2.id()) || e2.push(r2);
          }
        }
        __name(fs, "fs");
        function ps(e2, t2, n2) {
          fs(e2, t2, n2), hs(e2, t2, n2);
        }
        __name(ps, "ps");
        cs.forEachDown = function(e2) {
          return ds(this, e2, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], hs);
        }, cs.forEachUp = function(e2) {
          return ds(this, e2, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], fs);
        }, cs.forEachUpAndDown = function(e2) {
          return ds(this, e2, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], ps);
        }, cs.ancestors = cs.parents, (ss = ls = { data: xo.data({ field: "data", bindingEvent: "data", allowBinding: true, allowSetting: true, settingEvent: "data", settingTriggersEvent: true, triggerFnName: "trigger", allowGetting: true, immutableKeys: { id: true, source: true, target: true, parent: true }, updateStyle: true }), removeData: xo.removeData({ field: "data", event: "data", triggerFnName: "trigger", triggerEvent: true, immutableKeys: { id: true, source: true, target: true, parent: true }, updateStyle: true }), scratch: xo.data({ field: "scratch", bindingEvent: "scratch", allowBinding: true, allowSetting: true, settingEvent: "scratch", settingTriggersEvent: true, triggerFnName: "trigger", allowGetting: true, updateStyle: true }), removeScratch: xo.removeData({ field: "scratch", event: "scratch", triggerFnName: "trigger", triggerEvent: true, updateStyle: true }), rscratch: xo.data({ field: "rscratch", allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: true }), removeRscratch: xo.removeData({ field: "rscratch", triggerEvent: false }), id: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) return e2._private.data.id;
        }, "id") }).attr = ss.data, ss.removeAttr = ss.removeData;
        var vs, gs, ys = ls, ms = {};
        function bs(e2) {
          return function(t2) {
            var n2 = this;
            if (void 0 === t2 && (t2 = true), 0 !== n2.length && n2.isNode() && !n2.removed()) {
              for (var r2 = 0, a2 = n2[0], i2 = a2._private.edges, o2 = 0; o2 < i2.length; o2++) {
                var s2 = i2[o2];
                !t2 && s2.isLoop() || (r2 += e2(a2, s2));
              }
              return r2;
            }
          };
        }
        __name(bs, "bs");
        function xs(e2, t2) {
          return function(n2) {
            for (var r2, a2 = this.nodes(), i2 = 0; i2 < a2.length; i2++) {
              var o2 = a2[i2][e2](n2);
              void 0 === o2 || void 0 !== r2 && !t2(o2, r2) || (r2 = o2);
            }
            return r2;
          };
        }
        __name(xs, "xs");
        ge(ms, { degree: bs(function(e2, t2) {
          return t2.source().same(t2.target()) ? 2 : 1;
        }), indegree: bs(function(e2, t2) {
          return t2.target().same(e2) ? 1 : 0;
        }), outdegree: bs(function(e2, t2) {
          return t2.source().same(e2) ? 1 : 0;
        }) }), ge(ms, { minDegree: xs("degree", function(e2, t2) {
          return e2 < t2;
        }), maxDegree: xs("degree", function(e2, t2) {
          return e2 > t2;
        }), minIndegree: xs("indegree", function(e2, t2) {
          return e2 < t2;
        }), maxIndegree: xs("indegree", function(e2, t2) {
          return e2 > t2;
        }), minOutdegree: xs("outdegree", function(e2, t2) {
          return e2 < t2;
        }), maxOutdegree: xs("outdegree", function(e2, t2) {
          return e2 > t2;
        }) }), ge(ms, { totalDegree: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = 0, n2 = this.nodes(), r2 = 0; r2 < n2.length; r2++) t2 += n2[r2].degree(e2);
          return t2;
        }, "totalDegree") });
        var ws = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = 0; r2 < e2.length; r2++) {
            var a2 = e2[r2];
            if (!a2.locked()) {
              var i2 = a2._private.position, o2 = { x: null != t2.x ? t2.x - i2.x : 0, y: null != t2.y ? t2.y - i2.y : 0 };
              !a2.isParent() || 0 === o2.x && 0 === o2.y || a2.children().shift(o2, n2), a2.dirtyBoundingBoxCache();
            }
          }
        }, "ws"), Es = { field: "position", bindingEvent: "position", allowBinding: true, allowSetting: true, settingEvent: "position", settingTriggersEvent: true, triggerFnName: "emitAndNotify", allowGetting: true, validKeys: ["x", "y"], beforeGet: /* @__PURE__ */ __name(function(e2) {
          e2.updateCompoundBounds();
        }, "beforeGet"), beforeSet: /* @__PURE__ */ __name(function(e2, t2) {
          ws(e2, t2, false);
        }, "beforeSet"), onSet: /* @__PURE__ */ __name(function(e2) {
          e2.dirtyCompoundBoundsCache();
        }, "onSet"), canSet: /* @__PURE__ */ __name(function(e2) {
          return !e2.locked();
        }, "canSet") };
        vs = gs = { position: xo.data(Es), silentPosition: xo.data(ge({}, Es, { allowBinding: false, allowSetting: true, settingTriggersEvent: false, allowGetting: false, beforeSet: /* @__PURE__ */ __name(function(e2, t2) {
          ws(e2, t2, true);
        }, "beforeSet"), onSet: /* @__PURE__ */ __name(function(e2) {
          e2.dirtyCompoundBoundsCache();
        }, "onSet") })), positions: /* @__PURE__ */ __name(function(e2, t2) {
          if (K(e2)) t2 ? this.silentPosition(e2) : this.position(e2);
          else if (U(e2)) {
            var n2 = e2, r2 = this.cy();
            r2.startBatch();
            for (var a2 = 0; a2 < this.length; a2++) {
              var i2, o2 = this[a2];
              (i2 = n2(o2, a2)) && (t2 ? o2.silentPosition(i2) : o2.position(i2));
            }
            r2.endBatch();
          }
          return this;
        }, "positions"), silentPositions: /* @__PURE__ */ __name(function(e2) {
          return this.positions(e2, true);
        }, "silentPositions"), shift: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2;
          if (K(e2) ? (r2 = { x: G(e2.x) ? e2.x : 0, y: G(e2.y) ? e2.y : 0 }, n2 = t2) : W(e2) && G(t2) && ((r2 = { x: 0, y: 0 })[e2] = t2), null != r2) {
            var a2 = this.cy();
            a2.startBatch();
            for (var i2 = 0; i2 < this.length; i2++) {
              var o2 = this[i2];
              if (!(a2.hasCompoundNodes() && o2.isChild() && o2.ancestors().anySame(this))) {
                var s2 = o2.position(), l2 = { x: s2.x + r2.x, y: s2.y + r2.y };
                n2 ? o2.silentPosition(l2) : o2.position(l2);
              }
            }
            a2.endBatch();
          }
          return this;
        }, "shift"), silentShift: /* @__PURE__ */ __name(function(e2, t2) {
          return K(e2) ? this.shift(e2, true) : W(e2) && G(t2) && this.shift(e2, t2, true), this;
        }, "silentShift"), renderedPosition: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this[0], r2 = this.cy(), a2 = r2.zoom(), i2 = r2.pan(), o2 = K(e2) ? e2 : void 0, s2 = void 0 !== o2 || void 0 !== t2 && W(e2);
          if (n2 && n2.isNode()) {
            if (!s2) {
              var l2 = n2.position();
              return o2 = Xt(l2, a2, i2), void 0 === e2 ? o2 : o2[e2];
            }
            for (var u2 = 0; u2 < this.length; u2++) {
              var c2 = this[u2];
              void 0 !== t2 ? c2.position(e2, (t2 - i2[e2]) / a2) : void 0 !== o2 && c2.position(jt(o2, a2, i2));
            }
          } else if (!s2) return;
          return this;
        }, "renderedPosition"), relativePosition: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this[0], r2 = this.cy(), a2 = K(e2) ? e2 : void 0, i2 = void 0 !== a2 || void 0 !== t2 && W(e2), o2 = r2.hasCompoundNodes();
          if (n2 && n2.isNode()) {
            if (!i2) {
              var s2 = n2.position(), l2 = o2 ? n2.parent() : null, u2 = l2 && l2.length > 0, c2 = u2;
              u2 && (l2 = l2[0]);
              var d2 = c2 ? l2.position() : { x: 0, y: 0 };
              return a2 = { x: s2.x - d2.x, y: s2.y - d2.y }, void 0 === e2 ? a2 : a2[e2];
            }
            for (var h2 = 0; h2 < this.length; h2++) {
              var f2 = this[h2], p2 = o2 ? f2.parent() : null, v2 = p2 && p2.length > 0, g2 = v2;
              v2 && (p2 = p2[0]);
              var y2 = g2 ? p2.position() : { x: 0, y: 0 };
              void 0 !== t2 ? f2.position(e2, t2 + y2[e2]) : void 0 !== a2 && f2.position({ x: a2.x + y2.x, y: a2.y + y2.y });
            }
          } else if (!i2) return;
          return this;
        }, "relativePosition") }, vs.modelPosition = vs.point = vs.position, vs.modelPositions = vs.points = vs.positions, vs.renderedPoint = vs.renderedPosition, vs.relativePoint = vs.relativePosition;
        var ks, Ts, Cs = gs;
        ks = Ts = {}, Ts.renderedBoundingBox = function(e2) {
          var t2 = this.boundingBox(e2), n2 = this.cy(), r2 = n2.zoom(), a2 = n2.pan(), i2 = t2.x1 * r2 + a2.x, o2 = t2.x2 * r2 + a2.x, s2 = t2.y1 * r2 + a2.y, l2 = t2.y2 * r2 + a2.y;
          return { x1: i2, x2: o2, y1: s2, y2: l2, w: o2 - i2, h: l2 - s2 };
        }, Ts.dirtyCompoundBoundsCache = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = this.cy();
          return t2.styleEnabled() && t2.hasCompoundNodes() ? (this.forEachUp(function(t3) {
            if (t3.isParent()) {
              var n2 = t3._private;
              n2.compoundBoundsClean = false, n2.bbCache = null, e2 || t3.emitAndNotify("bounds");
            }
          }), this) : this;
        }, Ts.updateCompoundBounds = function() {
          var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t2 = this.cy();
          if (!t2.styleEnabled() || !t2.hasCompoundNodes()) return this;
          if (!e2 && t2.batching()) return this;
          function n2(e3) {
            if (e3.isParent()) {
              var t3 = e3._private, n3 = e3.children(), r3 = "include" === e3.pstyle("compound-sizing-wrt-labels").value, a3 = { width: { val: e3.pstyle("min-width").pfValue, left: e3.pstyle("min-width-bias-left"), right: e3.pstyle("min-width-bias-right") }, height: { val: e3.pstyle("min-height").pfValue, top: e3.pstyle("min-height-bias-top"), bottom: e3.pstyle("min-height-bias-bottom") } }, i3 = n3.boundingBox({ includeLabels: r3, includeOverlays: false, useCache: false }), o2 = t3.position;
              0 !== i3.w && 0 !== i3.h || ((i3 = { w: e3.pstyle("width").pfValue, h: e3.pstyle("height").pfValue }).x1 = o2.x - i3.w / 2, i3.x2 = o2.x + i3.w / 2, i3.y1 = o2.y - i3.h / 2, i3.y2 = o2.y + i3.h / 2);
              var s2 = a3.width.left.value;
              "px" === a3.width.left.units && a3.width.val > 0 && (s2 = 100 * s2 / a3.width.val);
              var l2 = a3.width.right.value;
              "px" === a3.width.right.units && a3.width.val > 0 && (l2 = 100 * l2 / a3.width.val);
              var u2 = a3.height.top.value;
              "px" === a3.height.top.units && a3.height.val > 0 && (u2 = 100 * u2 / a3.height.val);
              var c2 = a3.height.bottom.value;
              "px" === a3.height.bottom.units && a3.height.val > 0 && (c2 = 100 * c2 / a3.height.val);
              var d2 = y2(a3.width.val - i3.w, s2, l2), h2 = d2.biasDiff, f2 = d2.biasComplementDiff, p2 = y2(a3.height.val - i3.h, u2, c2), v2 = p2.biasDiff, g2 = p2.biasComplementDiff;
              t3.autoPadding = function(e4, t4, n4, r4) {
                if ("%" !== n4.units) return "px" === n4.units ? n4.pfValue : 0;
                switch (r4) {
                  case "width":
                    return e4 > 0 ? n4.pfValue * e4 : 0;
                  case "height":
                    return t4 > 0 ? n4.pfValue * t4 : 0;
                  case "average":
                    return e4 > 0 && t4 > 0 ? n4.pfValue * (e4 + t4) / 2 : 0;
                  case "min":
                    return e4 > 0 && t4 > 0 ? e4 > t4 ? n4.pfValue * t4 : n4.pfValue * e4 : 0;
                  case "max":
                    return e4 > 0 && t4 > 0 ? e4 > t4 ? n4.pfValue * e4 : n4.pfValue * t4 : 0;
                  default:
                    return 0;
                }
              }(i3.w, i3.h, e3.pstyle("padding"), e3.pstyle("padding-relative-to").value), t3.autoWidth = Math.max(i3.w, a3.width.val), o2.x = (-h2 + i3.x1 + i3.x2 + f2) / 2, t3.autoHeight = Math.max(i3.h, a3.height.val), o2.y = (-v2 + i3.y1 + i3.y2 + g2) / 2;
            }
            function y2(e4, t4, n4) {
              var r4 = 0, a4 = 0, i4 = t4 + n4;
              return e4 > 0 && i4 > 0 && (r4 = t4 / i4 * e4, a4 = n4 / i4 * e4), { biasDiff: r4, biasComplementDiff: a4 };
            }
            __name(y2, "y");
          }
          __name(n2, "n");
          for (var r2 = 0; r2 < this.length; r2++) {
            var a2 = this[r2], i2 = a2._private;
            i2.compoundBoundsClean && !e2 || (n2(a2), t2.batching() || (i2.compoundBoundsClean = true));
          }
          return this;
        };
        var Ps = /* @__PURE__ */ __name(function(e2) {
          return e2 === 1 / 0 || e2 === -1 / 0 ? 0 : e2;
        }, "Ps"), Ss = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          r2 - t2 != 0 && a2 - n2 != 0 && null != t2 && null != n2 && null != r2 && null != a2 && (e2.x1 = t2 < e2.x1 ? t2 : e2.x1, e2.x2 = r2 > e2.x2 ? r2 : e2.x2, e2.y1 = n2 < e2.y1 ? n2 : e2.y1, e2.y2 = a2 > e2.y2 ? a2 : e2.y2, e2.w = e2.x2 - e2.x1, e2.h = e2.y2 - e2.y1);
        }, "Ss"), Bs = /* @__PURE__ */ __name(function(e2, t2) {
          return null == t2 ? e2 : Ss(e2, t2.x1, t2.y1, t2.x2, t2.y2);
        }, "Bs"), Ds = /* @__PURE__ */ __name(function(e2, t2, n2) {
          return ht(e2, t2, n2);
        }, "Ds"), _s = /* @__PURE__ */ __name(function(e2, t2, n2) {
          if (!t2.cy().headless()) {
            var r2, a2, i2 = t2._private, o2 = i2.rstyle, s2 = o2.arrowWidth / 2;
            if ("none" !== t2.pstyle(n2 + "-arrow-shape").value) {
              "source" === n2 ? (r2 = o2.srcX, a2 = o2.srcY) : "target" === n2 ? (r2 = o2.tgtX, a2 = o2.tgtY) : (r2 = o2.midX, a2 = o2.midY);
              var l2 = i2.arrowBounds = i2.arrowBounds || {}, u2 = l2[n2] = l2[n2] || {};
              u2.x1 = r2 - s2, u2.y1 = a2 - s2, u2.x2 = r2 + s2, u2.y2 = a2 + s2, u2.w = u2.x2 - u2.x1, u2.h = u2.y2 - u2.y1, tn(u2, 1), Ss(e2, u2.x1, u2.y1, u2.x2, u2.y2);
            }
          }
        }, "_s"), As = /* @__PURE__ */ __name(function(e2, t2, n2) {
          if (!t2.cy().headless()) {
            var r2;
            r2 = n2 ? n2 + "-" : "";
            var a2 = t2._private, i2 = a2.rstyle;
            if (t2.pstyle(r2 + "label").strValue) {
              var o2, s2, l2, u2, c2 = t2.pstyle("text-halign"), d2 = t2.pstyle("text-valign"), h2 = Ds(i2, "labelWidth", n2), f2 = Ds(i2, "labelHeight", n2), p2 = Ds(i2, "labelX", n2), v2 = Ds(i2, "labelY", n2), g2 = t2.pstyle(r2 + "text-margin-x").pfValue, y2 = t2.pstyle(r2 + "text-margin-y").pfValue, m2 = t2.isEdge(), b2 = t2.pstyle(r2 + "text-rotation"), x2 = t2.pstyle("text-outline-width").pfValue, w2 = t2.pstyle("text-border-width").pfValue / 2, E2 = t2.pstyle("text-background-padding").pfValue, k2 = f2, T2 = h2, C2 = T2 / 2, P2 = k2 / 2;
              if (m2) o2 = p2 - C2, s2 = p2 + C2, l2 = v2 - P2, u2 = v2 + P2;
              else {
                switch (c2.value) {
                  case "left":
                    o2 = p2 - T2, s2 = p2;
                    break;
                  case "center":
                    o2 = p2 - C2, s2 = p2 + C2;
                    break;
                  case "right":
                    o2 = p2, s2 = p2 + T2;
                }
                switch (d2.value) {
                  case "top":
                    l2 = v2 - k2, u2 = v2;
                    break;
                  case "center":
                    l2 = v2 - P2, u2 = v2 + P2;
                    break;
                  case "bottom":
                    l2 = v2, u2 = v2 + k2;
                }
              }
              var S2 = g2 - Math.max(x2, w2) - E2 - 2, B2 = g2 + Math.max(x2, w2) + E2 + 2, D2 = y2 - Math.max(x2, w2) - E2 - 2, _2 = y2 + Math.max(x2, w2) + E2 + 2;
              o2 += S2, s2 += B2, l2 += D2, u2 += _2;
              var A2 = n2 || "main", M2 = a2.labelBounds, R2 = M2[A2] = M2[A2] || {};
              R2.x1 = o2, R2.y1 = l2, R2.x2 = s2, R2.y2 = u2, R2.w = s2 - o2, R2.h = u2 - l2, R2.leftPad = S2, R2.rightPad = B2, R2.topPad = D2, R2.botPad = _2;
              var I2 = m2 && "autorotate" === b2.strValue, N2 = null != b2.pfValue && 0 !== b2.pfValue;
              if (I2 || N2) {
                var L2 = I2 ? Ds(a2.rstyle, "labelAngle", n2) : b2.pfValue, z2 = Math.cos(L2), O2 = Math.sin(L2), V2 = (o2 + s2) / 2, F2 = (l2 + u2) / 2;
                if (!m2) {
                  switch (c2.value) {
                    case "left":
                      V2 = s2;
                      break;
                    case "right":
                      V2 = o2;
                  }
                  switch (d2.value) {
                    case "top":
                      F2 = u2;
                      break;
                    case "bottom":
                      F2 = l2;
                  }
                }
                var X2 = /* @__PURE__ */ __name(function(e3, t3) {
                  return { x: (e3 -= V2) * z2 - (t3 -= F2) * O2 + V2, y: e3 * O2 + t3 * z2 + F2 };
                }, "X"), j2 = X2(o2, l2), Y2 = X2(o2, u2), q2 = X2(s2, l2), W2 = X2(s2, u2);
                o2 = Math.min(j2.x, Y2.x, q2.x, W2.x), s2 = Math.max(j2.x, Y2.x, q2.x, W2.x), l2 = Math.min(j2.y, Y2.y, q2.y, W2.y), u2 = Math.max(j2.y, Y2.y, q2.y, W2.y);
              }
              var U2 = A2 + "Rot", H2 = M2[U2] = M2[U2] || {};
              H2.x1 = o2, H2.y1 = l2, H2.x2 = s2, H2.y2 = u2, H2.w = s2 - o2, H2.h = u2 - l2, Ss(e2, o2, l2, s2, u2), Ss(a2.labelBounds.all, o2, l2, s2, u2);
            }
            return e2;
          }
        }, "As"), Ms = /* @__PURE__ */ __name(function(e2, t2) {
          if (!t2.cy().headless()) {
            var n2 = t2.pstyle("outline-opacity").value, r2 = t2.pstyle("outline-width").value + t2.pstyle("outline-offset").value;
            Rs(e2, t2, n2, r2, "outside", r2 / 2);
          }
        }, "Ms"), Rs = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
          if (!(0 === n2 || r2 <= 0 || "inside" === a2)) {
            var o2 = t2.cy(), s2 = t2.pstyle("shape").value, l2 = o2.renderer().nodeShapes[s2], u2 = t2.position(), c2 = u2.x, d2 = u2.y, h2 = t2.width(), f2 = t2.height();
            if (l2.hasMiterBounds) {
              "center" === a2 && (r2 /= 2);
              var p2 = l2.miterBounds(c2, d2, h2, f2, r2);
              Bs(e2, p2);
            } else null != i2 && i2 > 0 && nn(e2, [i2, i2, i2, i2]);
          }
        }, "Rs"), Is = /* @__PURE__ */ __name(function(e2, t2) {
          var n2, r2, a2, i2, o2, s2, l2, u2 = e2._private.cy, c2 = u2.styleEnabled(), d2 = u2.headless(), h2 = Jt(), f2 = e2._private, p2 = e2.isNode(), v2 = e2.isEdge(), g2 = f2.rstyle, y2 = p2 && c2 ? e2.pstyle("bounds-expansion").pfValue : [0], m2 = /* @__PURE__ */ __name(function(e3) {
            return "none" !== e3.pstyle("display").value;
          }, "m"), b2 = !c2 || m2(e2) && (!v2 || m2(e2.source()) && m2(e2.target()));
          if (b2) {
            var x2 = 0;
            c2 && t2.includeOverlays && 0 !== e2.pstyle("overlay-opacity").value && (x2 = e2.pstyle("overlay-padding").value);
            var w2 = 0;
            c2 && t2.includeUnderlays && 0 !== e2.pstyle("underlay-opacity").value && (w2 = e2.pstyle("underlay-padding").value);
            var E2 = Math.max(x2, w2), k2 = 0;
            if (c2 && (k2 = e2.pstyle("width").pfValue / 2), p2 && t2.includeNodes) {
              var T2 = e2.position();
              o2 = T2.x, s2 = T2.y;
              var C2 = e2.outerWidth() / 2, P2 = e2.outerHeight() / 2;
              Ss(h2, n2 = o2 - C2, a2 = s2 - P2, r2 = o2 + C2, i2 = s2 + P2), c2 && Ms(h2, e2), c2 && t2.includeOutlines && !d2 && Ms(h2, e2), c2 && function(e3, t3) {
                if (!t3.cy().headless()) {
                  var n3 = t3.pstyle("border-opacity").value, r3 = t3.pstyle("border-width").pfValue, a3 = t3.pstyle("border-position").value;
                  Rs(e3, t3, n3, r3, a3);
                }
              }(h2, e2);
            } else if (v2 && t2.includeEdges) if (c2 && !d2) {
              var S2 = e2.pstyle("curve-style").strValue;
              if (n2 = Math.min(g2.srcX, g2.midX, g2.tgtX), r2 = Math.max(g2.srcX, g2.midX, g2.tgtX), a2 = Math.min(g2.srcY, g2.midY, g2.tgtY), i2 = Math.max(g2.srcY, g2.midY, g2.tgtY), Ss(h2, n2 -= k2, a2 -= k2, r2 += k2, i2 += k2), "haystack" === S2) {
                var B2 = g2.haystackPts;
                if (B2 && 2 === B2.length) {
                  if (n2 = B2[0].x, a2 = B2[0].y, n2 > (r2 = B2[1].x)) {
                    var D2 = n2;
                    n2 = r2, r2 = D2;
                  }
                  if (a2 > (i2 = B2[1].y)) {
                    var _2 = a2;
                    a2 = i2, i2 = _2;
                  }
                  Ss(h2, n2 - k2, a2 - k2, r2 + k2, i2 + k2);
                }
              } else if ("bezier" === S2 || "unbundled-bezier" === S2 || ue(S2, "segments") || ue(S2, "taxi")) {
                var A2;
                switch (S2) {
                  case "bezier":
                  case "unbundled-bezier":
                    A2 = g2.bezierPts;
                    break;
                  case "segments":
                  case "taxi":
                  case "round-segments":
                  case "round-taxi":
                    A2 = g2.linePts;
                }
                if (null != A2) for (var M2 = 0; M2 < A2.length; M2++) {
                  var R2 = A2[M2];
                  n2 = R2.x - k2, r2 = R2.x + k2, a2 = R2.y - k2, i2 = R2.y + k2, Ss(h2, n2, a2, r2, i2);
                }
              }
            } else {
              var I2 = e2.source().position(), N2 = e2.target().position();
              if ((n2 = I2.x) > (r2 = N2.x)) {
                var L2 = n2;
                n2 = r2, r2 = L2;
              }
              if ((a2 = I2.y) > (i2 = N2.y)) {
                var z2 = a2;
                a2 = i2, i2 = z2;
              }
              Ss(h2, n2 -= k2, a2 -= k2, r2 += k2, i2 += k2);
            }
            if (c2 && t2.includeEdges && v2 && (_s(h2, e2, "mid-source"), _s(h2, e2, "mid-target"), _s(h2, e2, "source"), _s(h2, e2, "target")), c2) {
              if ("yes" === e2.pstyle("ghost").value) {
                var O2 = e2.pstyle("ghost-offset-x").pfValue, V2 = e2.pstyle("ghost-offset-y").pfValue;
                Ss(h2, h2.x1 + O2, h2.y1 + V2, h2.x2 + O2, h2.y2 + V2);
              }
            }
            var F2 = f2.bodyBounds = f2.bodyBounds || {};
            rn(F2, h2), nn(F2, y2), tn(F2, 1), c2 && (n2 = h2.x1, r2 = h2.x2, a2 = h2.y1, i2 = h2.y2, Ss(h2, n2 - E2, a2 - E2, r2 + E2, i2 + E2));
            var X2 = f2.overlayBounds = f2.overlayBounds || {};
            rn(X2, h2), nn(X2, y2), tn(X2, 1);
            var j2 = f2.labelBounds = f2.labelBounds || {};
            null != j2.all ? ((l2 = j2.all).x1 = 1 / 0, l2.y1 = 1 / 0, l2.x2 = -1 / 0, l2.y2 = -1 / 0, l2.w = 0, l2.h = 0) : j2.all = Jt(), c2 && t2.includeLabels && (t2.includeMainLabels && As(h2, e2, null), v2 && (t2.includeSourceLabels && As(h2, e2, "source"), t2.includeTargetLabels && As(h2, e2, "target")));
          }
          return h2.x1 = Ps(h2.x1), h2.y1 = Ps(h2.y1), h2.x2 = Ps(h2.x2), h2.y2 = Ps(h2.y2), h2.w = Ps(h2.x2 - h2.x1), h2.h = Ps(h2.y2 - h2.y1), h2.w > 0 && h2.h > 0 && b2 && (nn(h2, y2), tn(h2, 1)), h2;
        }, "Is"), Ns = /* @__PURE__ */ __name(function(e2) {
          var t2 = 0, n2 = /* @__PURE__ */ __name(function(e3) {
            return (e3 ? 1 : 0) << t2++;
          }, "n"), r2 = 0;
          return r2 += n2(e2.incudeNodes), r2 += n2(e2.includeEdges), r2 += n2(e2.includeLabels), r2 += n2(e2.includeMainLabels), r2 += n2(e2.includeSourceLabels), r2 += n2(e2.includeTargetLabels), r2 += n2(e2.includeOverlays), r2 += n2(e2.includeOutlines);
        }, "Ns"), Ls = /* @__PURE__ */ __name(function(e2) {
          var t2 = /* @__PURE__ */ __name(function(e3) {
            return Math.round(e3);
          }, "t");
          if (e2.isEdge()) {
            var n2 = e2.source().position(), r2 = e2.target().position();
            return Ye([t2(n2.x), t2(n2.y), t2(r2.x), t2(r2.y)]);
          }
          var a2 = e2.position();
          return Ye([t2(a2.x), t2(a2.y)]);
        }, "Ls"), zs = /* @__PURE__ */ __name(function(e2, t2) {
          var n2, r2 = e2._private, a2 = e2.isEdge(), i2 = (null == t2 ? Vs : Ns(t2)) === Vs;
          if (null == r2.bbCache ? (n2 = Is(e2, Os), r2.bbCache = n2, r2.bbCachePosKey = Ls(e2)) : n2 = r2.bbCache, !i2) {
            var o2 = e2.isNode();
            n2 = Jt(), (t2.includeNodes && o2 || t2.includeEdges && !o2) && (t2.includeOverlays ? Bs(n2, r2.overlayBounds) : Bs(n2, r2.bodyBounds)), t2.includeLabels && (t2.includeMainLabels && (!a2 || t2.includeSourceLabels && t2.includeTargetLabels) ? Bs(n2, r2.labelBounds.all) : (t2.includeMainLabels && Bs(n2, r2.labelBounds.mainRot), t2.includeSourceLabels && Bs(n2, r2.labelBounds.sourceRot), t2.includeTargetLabels && Bs(n2, r2.labelBounds.targetRot))), n2.w = n2.x2 - n2.x1, n2.h = n2.y2 - n2.y1;
          }
          return n2;
        }, "zs"), Os = { includeNodes: true, includeEdges: true, includeLabels: true, includeMainLabels: true, includeSourceLabels: true, includeTargetLabels: true, includeOverlays: true, includeUnderlays: true, includeOutlines: true, useCache: true }, Vs = Ns(Os), Fs = ut(Os);
        Ts.boundingBox = function(e2) {
          var t2, n2 = void 0 === e2 || void 0 === e2.useCache || true === e2.useCache, r2 = ae(function(e3) {
            var t3 = e3._private;
            return null == t3.bbCache || t3.styleDirty || t3.bbCachePosKey !== Ls(e3);
          }, function(e3) {
            return e3.id();
          });
          if (n2 && 1 === this.length && !r2(this[0])) e2 = void 0 === e2 ? Os : Fs(e2), t2 = zs(this[0], e2);
          else {
            t2 = Jt();
            var a2 = Fs(e2 = e2 || Os), i2 = this, o2 = i2.cy().styleEnabled();
            this.edges().forEach(r2), this.nodes().forEach(r2), o2 && this.recalculateRenderedStyle(n2), this.updateCompoundBounds(!n2);
            for (var s2 = 0; s2 < i2.length; s2++) {
              var l2 = i2[s2];
              r2(l2) && l2.dirtyBoundingBoxCache(), Bs(t2, zs(l2, a2));
            }
          }
          return t2.x1 = Ps(t2.x1), t2.y1 = Ps(t2.y1), t2.x2 = Ps(t2.x2), t2.y2 = Ps(t2.y2), t2.w = Ps(t2.x2 - t2.x1), t2.h = Ps(t2.y2 - t2.y1), t2;
        }, Ts.dirtyBoundingBoxCache = function() {
          for (var e2 = 0; e2 < this.length; e2++) {
            var t2 = this[e2]._private;
            t2.bbCache = null, t2.bbCachePosKey = null, t2.bodyBounds = null, t2.overlayBounds = null, t2.labelBounds.all = null, t2.labelBounds.source = null, t2.labelBounds.target = null, t2.labelBounds.main = null, t2.labelBounds.sourceRot = null, t2.labelBounds.targetRot = null, t2.labelBounds.mainRot = null, t2.arrowBounds.source = null, t2.arrowBounds.target = null, t2.arrowBounds["mid-source"] = null, t2.arrowBounds["mid-target"] = null;
          }
          return this.emitAndNotify("bounds"), this;
        }, Ts.boundingBoxAt = function(e2) {
          var t2 = this.nodes(), n2 = this.cy(), r2 = n2.hasCompoundNodes(), a2 = n2.collection();
          if (r2 && (a2 = t2.filter(function(e3) {
            return e3.isParent();
          }), t2 = t2.not(a2)), K(e2)) {
            var i2 = e2;
            e2 = /* @__PURE__ */ __name(function() {
              return i2;
            }, "e");
          }
          n2.startBatch(), t2.forEach(function(t3, n3) {
            return t3._private.bbAtOldPos = e2(t3, n3);
          }).silentPositions(e2), r2 && (a2.dirtyCompoundBoundsCache(), a2.dirtyBoundingBoxCache(), a2.updateCompoundBounds(true));
          var o2 = function(e3) {
            return { x1: e3.x1, x2: e3.x2, w: e3.w, y1: e3.y1, y2: e3.y2, h: e3.h };
          }(this.boundingBox({ useCache: false }));
          return t2.silentPositions(function(e3) {
            return e3._private.bbAtOldPos;
          }), r2 && (a2.dirtyCompoundBoundsCache(), a2.dirtyBoundingBoxCache(), a2.updateCompoundBounds(true)), n2.endBatch(), o2;
        }, ks.boundingbox = ks.bb = ks.boundingBox, ks.renderedBoundingbox = ks.renderedBoundingBox;
        var Xs, js, Ys = Ts;
        Xs = js = {};
        var qs = /* @__PURE__ */ __name(function(e2) {
          e2.uppercaseName = le(e2.name), e2.autoName = "auto" + e2.uppercaseName, e2.labelName = "label" + e2.uppercaseName, e2.outerName = "outer" + e2.uppercaseName, e2.uppercaseOuterName = le(e2.outerName), Xs[e2.name] = function() {
            var t2 = this[0], n2 = t2._private, r2 = n2.cy._private.styleEnabled;
            if (t2) {
              if (r2) {
                if (t2.isParent()) return t2.updateCompoundBounds(), n2[e2.autoName] || 0;
                var a2 = t2.pstyle(e2.name);
                return "label" === a2.strValue ? (t2.recalculateRenderedStyle(), n2.rstyle[e2.labelName] || 0) : a2.pfValue;
              }
              return 1;
            }
          }, Xs["outer" + e2.uppercaseName] = function() {
            var t2 = this[0], n2 = t2._private.cy._private.styleEnabled;
            if (t2) {
              if (n2) {
                var r2 = t2[e2.name](), a2 = t2.pstyle("border-position").value;
                return r2 + ("center" === a2 ? t2.pstyle("border-width").pfValue : "outside" === a2 ? 2 * t2.pstyle("border-width").pfValue : 0) + 2 * t2.padding();
              }
              return 1;
            }
          }, Xs["rendered" + e2.uppercaseName] = function() {
            var t2 = this[0];
            if (t2) return t2[e2.name]() * this.cy().zoom();
          }, Xs["rendered" + e2.uppercaseOuterName] = function() {
            var t2 = this[0];
            if (t2) return t2[e2.outerName]() * this.cy().zoom();
          };
        }, "qs");
        qs({ name: "width" }), qs({ name: "height" }), js.padding = function() {
          var e2 = this[0], t2 = e2._private;
          return e2.isParent() ? (e2.updateCompoundBounds(), void 0 !== t2.autoPadding ? t2.autoPadding : e2.pstyle("padding").pfValue) : e2.pstyle("padding").pfValue;
        }, js.paddedHeight = function() {
          var e2 = this[0];
          return e2.height() + 2 * e2.padding();
        }, js.paddedWidth = function() {
          var e2 = this[0];
          return e2.width() + 2 * e2.padding();
        };
        var Ws = js, Us = { controlPoints: { get: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer().getControlPoints(e2);
        }, "get"), mult: true }, segmentPoints: { get: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer().getSegmentPoints(e2);
        }, "get"), mult: true }, sourceEndpoint: { get: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer().getSourceEndpoint(e2);
        }, "get") }, targetEndpoint: { get: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer().getTargetEndpoint(e2);
        }, "get") }, midpoint: { get: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer().getEdgeMidpoint(e2);
        }, "get") } }, Hs = Object.keys(Us).reduce(function(e2, t2) {
          var n2 = Us[t2], r2 = function(e3) {
            return "rendered" + e3[0].toUpperCase() + e3.substr(1);
          }(t2);
          return e2[t2] = function() {
            return function(e3, t3) {
              if (e3.isEdge() && e3.takesUpSpace()) return t3(e3);
            }(this, n2.get);
          }, n2.mult ? e2[r2] = function() {
            return function(e3, t3) {
              if (e3.isEdge() && e3.takesUpSpace()) {
                var n3 = e3.cy(), r3 = n3.pan(), a2 = n3.zoom();
                return t3(e3).map(function(e4) {
                  return Xt(e4, a2, r3);
                });
              }
            }(this, n2.get);
          } : e2[r2] = function() {
            return function(e3, t3) {
              if (e3.isEdge() && e3.takesUpSpace()) {
                var n3 = e3.cy();
                return Xt(t3(e3), n3.zoom(), n3.pan());
              }
            }(this, n2.get);
          }, e2;
        }, {}), Ks = ge({}, Cs, Ys, Ws, Hs), Gs = /* @__PURE__ */ __name(function(e2, t2) {
          this.recycle(e2, t2);
        }, "Gs");
        function Zs() {
          return false;
        }
        __name(Zs, "Zs");
        function $s() {
          return true;
        }
        __name($s, "$s");
        Gs.prototype = { instanceString: /* @__PURE__ */ __name(function() {
          return "event";
        }, "instanceString"), recycle: /* @__PURE__ */ __name(function(e2, t2) {
          if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Zs, null != e2 && e2.preventDefault ? (this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented ? $s : Zs) : null != e2 && e2.type ? t2 = e2 : this.type = e2, null != t2 && (this.originalEvent = t2.originalEvent, this.type = null != t2.type ? t2.type : this.type, this.cy = t2.cy, this.target = t2.target, this.position = t2.position, this.renderedPosition = t2.renderedPosition, this.namespace = t2.namespace, this.layout = t2.layout), null != this.cy && null != this.position && null == this.renderedPosition) {
            var n2 = this.position, r2 = this.cy.zoom(), a2 = this.cy.pan();
            this.renderedPosition = { x: n2.x * r2 + a2.x, y: n2.y * r2 + a2.y };
          }
          this.timeStamp = e2 && e2.timeStamp || Date.now();
        }, "recycle"), preventDefault: /* @__PURE__ */ __name(function() {
          this.isDefaultPrevented = $s;
          var e2 = this.originalEvent;
          e2 && e2.preventDefault && e2.preventDefault();
        }, "preventDefault"), stopPropagation: /* @__PURE__ */ __name(function() {
          this.isPropagationStopped = $s;
          var e2 = this.originalEvent;
          e2 && e2.stopPropagation && e2.stopPropagation();
        }, "stopPropagation"), stopImmediatePropagation: /* @__PURE__ */ __name(function() {
          this.isImmediatePropagationStopped = $s, this.stopPropagation();
        }, "stopImmediatePropagation"), isDefaultPrevented: Zs, isPropagationStopped: Zs, isImmediatePropagationStopped: Zs };
        var Qs = /^([^.]+)(\.(?:[^.]+))?$/, Js = { qualifierCompare: /* @__PURE__ */ __name(function(e2, t2) {
          return e2 === t2;
        }, "qualifierCompare"), eventMatches: /* @__PURE__ */ __name(function() {
          return true;
        }, "eventMatches"), addEventFields: /* @__PURE__ */ __name(function() {
        }, "addEventFields"), callbackContext: /* @__PURE__ */ __name(function(e2) {
          return e2;
        }, "callbackContext"), beforeEmit: /* @__PURE__ */ __name(function() {
        }, "beforeEmit"), afterEmit: /* @__PURE__ */ __name(function() {
        }, "afterEmit"), bubble: /* @__PURE__ */ __name(function() {
          return false;
        }, "bubble"), parent: /* @__PURE__ */ __name(function() {
          return null;
        }, "parent"), context: null }, el = Object.keys(Js), tl = {};
        function nl() {
          for (var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : tl, t2 = arguments.length > 1 ? arguments[1] : void 0, n2 = 0; n2 < el.length; n2++) {
            var r2 = el[n2];
            this[r2] = e2[r2] || Js[r2];
          }
          this.context = t2 || this.context, this.listeners = [], this.emitting = 0;
        }
        __name(nl, "nl");
        var rl = nl.prototype, al = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          U(r2) && (a2 = r2, r2 = null), o2 && (i2 = null == i2 ? o2 : ge({}, i2, o2));
          for (var s2 = H(n2) ? n2 : n2.split(/\s+/), l2 = 0; l2 < s2.length; l2++) {
            var u2 = s2[l2];
            if (!ne(u2)) {
              var c2 = u2.match(Qs);
              if (c2) {
                if (false === t2(e2, u2, c2[1], c2[2] ? c2[2] : null, r2, a2, i2)) break;
              }
            }
          }
        }, "al"), il = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.addEventFields(e2.context, t2), new Gs(t2.type, t2);
        }, "il"), ol = /* @__PURE__ */ __name(function(e2, t2, n2) {
          if ("event" !== q(n2)) if (K(n2)) t2(e2, il(e2, n2));
          else for (var r2 = H(n2) ? n2 : n2.split(/\s+/), a2 = 0; a2 < r2.length; a2++) {
            var i2 = r2[a2];
            if (!ne(i2)) {
              var o2 = i2.match(Qs);
              if (o2) {
                var s2 = o2[1], l2 = o2[2] ? o2[2] : null;
                t2(e2, il(e2, { type: s2, namespace: l2, target: e2.context }));
              }
            }
          }
          else t2(e2, n2);
        }, "ol");
        rl.on = rl.addListener = function(e2, t2, n2, r2, a2) {
          return al(this, function(e3, t3, n3, r3, a3, i2, o2) {
            U(i2) && e3.listeners.push({ event: t3, callback: i2, type: n3, namespace: r3, qualifier: a3, conf: o2 });
          }, e2, t2, n2, r2, a2), this;
        }, rl.one = function(e2, t2, n2, r2) {
          return this.on(e2, t2, n2, r2, { one: true });
        }, rl.removeListener = rl.off = function(e2, t2, n2, r2) {
          var a2 = this;
          0 !== this.emitting && (this.listeners = this.listeners.slice());
          for (var i2 = this.listeners, o2 = function(o3) {
            var s3 = i2[o3];
            al(a2, function(t3, n3, r3, a3, l2, u2) {
              if ((s3.type === r3 || "*" === e2) && (!a3 && ".*" !== s3.namespace || s3.namespace === a3) && (!l2 || t3.qualifierCompare(s3.qualifier, l2)) && (!u2 || s3.callback === u2)) return i2.splice(o3, 1), false;
            }, e2, t2, n2, r2);
          }, s2 = i2.length - 1; s2 >= 0; s2--) o2(s2);
          return this;
        }, rl.removeAllListeners = function() {
          return this.removeListener("*");
        }, rl.emit = rl.trigger = function(e2, t2, n2) {
          var r2 = this.listeners, a2 = r2.length;
          return this.emitting++, H(t2) || (t2 = [t2]), ol(this, function(e3, i2) {
            null != n2 && (r2 = [{ event: i2.event, type: i2.type, namespace: i2.namespace, callback: n2 }], a2 = r2.length);
            for (var o2 = function() {
              var n3 = r2[s2];
              if (n3.type === i2.type && (!n3.namespace || n3.namespace === i2.namespace || ".*" === n3.namespace) && e3.eventMatches(e3.context, n3, i2)) {
                var a3 = [i2];
                null != t2 && function(e4, t3) {
                  for (var n4 = 0; n4 < t3.length; n4++) {
                    var r3 = t3[n4];
                    e4.push(r3);
                  }
                }(a3, t2), e3.beforeEmit(e3.context, n3, i2), n3.conf && n3.conf.one && (e3.listeners = e3.listeners.filter(function(e4) {
                  return e4 !== n3;
                }));
                var o3 = e3.callbackContext(e3.context, n3, i2), l2 = n3.callback.apply(o3, a3);
                e3.afterEmit(e3.context, n3, i2), false === l2 && (i2.stopPropagation(), i2.preventDefault());
              }
            }, s2 = 0; s2 < a2; s2++) o2();
            e3.bubble(e3.context) && !i2.isPropagationStopped() && e3.parent(e3.context).emit(i2, t2);
          }, e2), this.emitting--, this;
        };
        var sl = { qualifierCompare: /* @__PURE__ */ __name(function(e2, t2) {
          return null == e2 || null == t2 ? null == e2 && null == t2 : e2.sameText(t2);
        }, "qualifierCompare"), eventMatches: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = t2.qualifier;
          return null == r2 || e2 !== n2.target && Q(n2.target) && r2.matches(n2.target);
        }, "eventMatches"), addEventFields: /* @__PURE__ */ __name(function(e2, t2) {
          t2.cy = e2.cy(), t2.target = e2;
        }, "addEventFields"), callbackContext: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return null != t2.qualifier ? n2.target : e2;
        }, "callbackContext"), beforeEmit: /* @__PURE__ */ __name(function(e2, t2) {
          t2.conf && t2.conf.once && t2.conf.onceCollection.removeListener(t2.event, t2.qualifier, t2.callback);
        }, "beforeEmit"), bubble: /* @__PURE__ */ __name(function() {
          return true;
        }, "bubble"), parent: /* @__PURE__ */ __name(function(e2) {
          return e2.isChild() ? e2.parent() : e2.cy();
        }, "parent") }, ll = /* @__PURE__ */ __name(function(e2) {
          return W(e2) ? new as(e2) : e2;
        }, "ll"), ul = { createEmitter: /* @__PURE__ */ __name(function() {
          for (var e2 = 0; e2 < this.length; e2++) {
            var t2 = this[e2], n2 = t2._private;
            n2.emitter || (n2.emitter = new nl(sl, t2));
          }
          return this;
        }, "createEmitter"), emitter: /* @__PURE__ */ __name(function() {
          return this._private.emitter;
        }, "emitter"), on: /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = ll(t2), a2 = 0; a2 < this.length; a2++) {
            this[a2].emitter().on(e2, r2, n2);
          }
          return this;
        }, "on"), removeListener: /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = ll(t2), a2 = 0; a2 < this.length; a2++) {
            this[a2].emitter().removeListener(e2, r2, n2);
          }
          return this;
        }, "removeListener"), removeAllListeners: /* @__PURE__ */ __name(function() {
          for (var e2 = 0; e2 < this.length; e2++) {
            this[e2].emitter().removeAllListeners();
          }
          return this;
        }, "removeAllListeners"), one: /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = ll(t2), a2 = 0; a2 < this.length; a2++) {
            this[a2].emitter().one(e2, r2, n2);
          }
          return this;
        }, "one"), once: /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = ll(t2), a2 = 0; a2 < this.length; a2++) {
            this[a2].emitter().on(e2, r2, n2, { once: true, onceCollection: this });
          }
        }, "once"), emit: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < this.length; n2++) {
            this[n2].emitter().emit(e2, t2);
          }
          return this;
        }, "emit"), emitAndNotify: /* @__PURE__ */ __name(function(e2, t2) {
          if (0 !== this.length) return this.cy().notify(e2, this), this.emit(e2, t2), this;
        }, "emitAndNotify") };
        xo.eventAliasesOn(ul);
        var cl = { nodes: /* @__PURE__ */ __name(function(e2) {
          return this.filter(function(e3) {
            return e3.isNode();
          }).filter(e2);
        }, "nodes"), edges: /* @__PURE__ */ __name(function(e2) {
          return this.filter(function(e3) {
            return e3.isEdge();
          }).filter(e2);
        }, "edges"), byGroup: /* @__PURE__ */ __name(function() {
          for (var e2 = this.spawn(), t2 = this.spawn(), n2 = 0; n2 < this.length; n2++) {
            var r2 = this[n2];
            r2.isNode() ? e2.push(r2) : t2.push(r2);
          }
          return { nodes: e2, edges: t2 };
        }, "byGroup"), filter: /* @__PURE__ */ __name(function(e2, t2) {
          if (void 0 === e2) return this;
          if (W(e2) || $(e2)) return new as(e2).filter(this);
          if (U(e2)) {
            for (var n2 = this.spawn(), r2 = this, a2 = 0; a2 < r2.length; a2++) {
              var i2 = r2[a2];
              (t2 ? e2.apply(t2, [i2, a2, r2]) : e2(i2, a2, r2)) && n2.push(i2);
            }
            return n2;
          }
          return this.spawn();
        }, "filter"), not: /* @__PURE__ */ __name(function(e2) {
          if (e2) {
            W(e2) && (e2 = this.filter(e2));
            for (var t2 = this.spawn(), n2 = 0; n2 < this.length; n2++) {
              var r2 = this[n2];
              e2.has(r2) || t2.push(r2);
            }
            return t2;
          }
          return this;
        }, "not"), absoluteComplement: /* @__PURE__ */ __name(function() {
          return this.cy().mutableElements().not(this);
        }, "absoluteComplement"), intersect: /* @__PURE__ */ __name(function(e2) {
          if (W(e2)) {
            var t2 = e2;
            return this.filter(t2);
          }
          for (var n2 = this.spawn(), r2 = e2, a2 = this.length < e2.length, i2 = a2 ? this : r2, o2 = a2 ? r2 : this, s2 = 0; s2 < i2.length; s2++) {
            var l2 = i2[s2];
            o2.has(l2) && n2.push(l2);
          }
          return n2;
        }, "intersect"), xor: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.cy;
          W(e2) && (e2 = t2.$(e2));
          var n2 = this.spawn(), r2 = e2, a2 = /* @__PURE__ */ __name(function(e3, t3) {
            for (var r3 = 0; r3 < e3.length; r3++) {
              var a3 = e3[r3], i2 = a3._private.data.id;
              t3.hasElementWithId(i2) || n2.push(a3);
            }
          }, "a");
          return a2(this, r2), a2(r2, this), n2;
        }, "xor"), diff: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.cy;
          W(e2) && (e2 = t2.$(e2));
          var n2 = this.spawn(), r2 = this.spawn(), a2 = this.spawn(), i2 = e2, o2 = /* @__PURE__ */ __name(function(e3, t3, n3) {
            for (var r3 = 0; r3 < e3.length; r3++) {
              var i3 = e3[r3], o3 = i3._private.data.id;
              t3.hasElementWithId(o3) ? a2.merge(i3) : n3.push(i3);
            }
          }, "o");
          return o2(this, i2, n2), o2(i2, this, r2), { left: n2, right: r2, both: a2 };
        }, "diff"), add: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.cy;
          if (!e2) return this;
          if (W(e2)) {
            var n2 = e2;
            e2 = t2.mutableElements().filter(n2);
          }
          for (var r2 = this.spawnSelf(), a2 = 0; a2 < e2.length; a2++) {
            var i2 = e2[a2], o2 = !this.has(i2);
            o2 && r2.push(i2);
          }
          return r2;
        }, "add"), merge: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private, n2 = t2.cy;
          if (!e2) return this;
          if (e2 && W(e2)) {
            var r2 = e2;
            e2 = n2.mutableElements().filter(r2);
          }
          for (var a2 = t2.map, i2 = 0; i2 < e2.length; i2++) {
            var o2 = e2[i2], s2 = o2._private.data.id;
            if (!a2.has(s2)) {
              var l2 = this.length++;
              this[l2] = o2, a2.set(s2, { ele: o2, index: l2 });
            }
          }
          return this;
        }, "merge"), unmergeAt: /* @__PURE__ */ __name(function(e2) {
          var t2 = this[e2].id(), n2 = this._private.map;
          this[e2] = void 0, n2.delete(t2);
          var r2 = e2 === this.length - 1;
          if (this.length > 1 && !r2) {
            var a2 = this.length - 1, i2 = this[a2], o2 = i2._private.data.id;
            this[a2] = void 0, this[e2] = i2, n2.set(o2, { ele: i2, index: e2 });
          }
          return this.length--, this;
        }, "unmergeAt"), unmergeOne: /* @__PURE__ */ __name(function(e2) {
          e2 = e2[0];
          var t2 = this._private, n2 = e2._private.data.id, r2 = t2.map.get(n2);
          if (!r2) return this;
          var a2 = r2.index;
          return this.unmergeAt(a2), this;
        }, "unmergeOne"), unmerge: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.cy;
          if (!e2) return this;
          if (e2 && W(e2)) {
            var n2 = e2;
            e2 = t2.mutableElements().filter(n2);
          }
          for (var r2 = 0; r2 < e2.length; r2++) this.unmergeOne(e2[r2]);
          return this;
        }, "unmerge"), unmergeBy: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = this.length - 1; t2 >= 0; t2--) {
            e2(this[t2]) && this.unmergeAt(t2);
          }
          return this;
        }, "unmergeBy"), map: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = [], r2 = this, a2 = 0; a2 < r2.length; a2++) {
            var i2 = r2[a2], o2 = t2 ? e2.apply(t2, [i2, a2, r2]) : e2(i2, a2, r2);
            n2.push(o2);
          }
          return n2;
        }, "map"), reduce: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = t2, r2 = this, a2 = 0; a2 < r2.length; a2++) n2 = e2(n2, r2[a2], a2, r2);
          return n2;
        }, "reduce"), max: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2, r2 = -1 / 0, a2 = this, i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2], s2 = t2 ? e2.apply(t2, [o2, i2, a2]) : e2(o2, i2, a2);
            s2 > r2 && (r2 = s2, n2 = o2);
          }
          return { value: r2, ele: n2 };
        }, "max"), min: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2, r2 = 1 / 0, a2 = this, i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2], s2 = t2 ? e2.apply(t2, [o2, i2, a2]) : e2(o2, i2, a2);
            s2 < r2 && (r2 = s2, n2 = o2);
          }
          return { value: r2, ele: n2 };
        }, "min") }, dl = cl;
        dl.u = dl["|"] = dl["+"] = dl.union = dl.or = dl.add, dl["\\"] = dl["!"] = dl["-"] = dl.difference = dl.relativeComplement = dl.subtract = dl.not, dl.n = dl["&"] = dl["."] = dl.and = dl.intersection = dl.intersect, dl["^"] = dl["(+)"] = dl["(-)"] = dl.symmetricDifference = dl.symdiff = dl.xor, dl.fnFilter = dl.filterFn = dl.stdFilter = dl.filter, dl.complement = dl.abscomp = dl.absoluteComplement;
        var hl = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = e2.cy().hasCompoundNodes();
          function r2(e3) {
            var t3 = e3.pstyle("z-compound-depth");
            return "auto" === t3.value ? n2 ? e3.zDepth() : 0 : "bottom" === t3.value ? -1 : "top" === t3.value ? $e : 0;
          }
          __name(r2, "r");
          var a2 = r2(e2) - r2(t2);
          if (0 !== a2) return a2;
          function i2(e3) {
            return "auto" === e3.pstyle("z-index-compare").value && e3.isNode() ? 1 : 0;
          }
          __name(i2, "i");
          var o2 = i2(e2) - i2(t2);
          if (0 !== o2) return o2;
          var s2 = e2.pstyle("z-index").value - t2.pstyle("z-index").value;
          return 0 !== s2 ? s2 : e2.poolIndex() - t2.poolIndex();
        }, "hl"), fl = { forEach: /* @__PURE__ */ __name(function(e2, t2) {
          if (U(e2)) for (var n2 = this.length, r2 = 0; r2 < n2; r2++) {
            var a2 = this[r2];
            if (false === (t2 ? e2.apply(t2, [a2, r2, this]) : e2(a2, r2, this))) break;
          }
          return this;
        }, "forEach"), toArray: /* @__PURE__ */ __name(function() {
          for (var e2 = [], t2 = 0; t2 < this.length; t2++) e2.push(this[t2]);
          return e2;
        }, "toArray"), slice: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = [], r2 = this.length;
          null == t2 && (t2 = r2), null == e2 && (e2 = 0), e2 < 0 && (e2 = r2 + e2), t2 < 0 && (t2 = r2 + t2);
          for (var a2 = e2; a2 >= 0 && a2 < t2 && a2 < r2; a2++) n2.push(this[a2]);
          return this.spawn(n2);
        }, "slice"), size: /* @__PURE__ */ __name(function() {
          return this.length;
        }, "size"), eq: /* @__PURE__ */ __name(function(e2) {
          return this[e2] || this.spawn();
        }, "eq"), first: /* @__PURE__ */ __name(function() {
          return this[0] || this.spawn();
        }, "first"), last: /* @__PURE__ */ __name(function() {
          return this[this.length - 1] || this.spawn();
        }, "last"), empty: /* @__PURE__ */ __name(function() {
          return 0 === this.length;
        }, "empty"), nonempty: /* @__PURE__ */ __name(function() {
          return !this.empty();
        }, "nonempty"), sort: /* @__PURE__ */ __name(function(e2) {
          if (!U(e2)) return this;
          var t2 = this.toArray().sort(e2);
          return this.spawn(t2);
        }, "sort"), sortByZIndex: /* @__PURE__ */ __name(function() {
          return this.sort(hl);
        }, "sortByZIndex"), zDepth: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) {
            var t2 = e2._private;
            if ("nodes" === t2.group) {
              var n2 = t2.data.parent ? e2.parents().size() : 0;
              return e2.isParent() ? n2 : $e - 1;
            }
            var r2 = t2.source, a2 = t2.target, i2 = r2.zDepth(), o2 = a2.zDepth();
            return Math.max(i2, o2, 0);
          }
        }, "zDepth") };
        fl.each = fl.forEach;
        var pl;
        pl = "undefined", ("undefined" == typeof Symbol ? "undefined" : l(Symbol)) != pl && l(Symbol.iterator) != pl && (fl[Symbol.iterator] = function() {
          var e2 = this, t2 = { value: void 0, done: false }, n2 = 0, r2 = this.length;
          return a({ next: /* @__PURE__ */ __name(function() {
            return n2 < r2 ? t2.value = e2[n2++] : (t2.value = void 0, t2.done = true), t2;
          }, "next") }, Symbol.iterator, function() {
            return this;
          });
        });
        var vl = ut({ nodeDimensionsIncludeLabels: false }), gl = { layoutDimensions: /* @__PURE__ */ __name(function(e2) {
          var t2;
          if (e2 = vl(e2), this.takesUpSpace()) if (e2.nodeDimensionsIncludeLabels) {
            var n2 = this.boundingBox();
            t2 = { w: n2.w, h: n2.h };
          } else t2 = { w: this.outerWidth(), h: this.outerHeight() };
          else t2 = { w: 0, h: 0 };
          return 0 !== t2.w && 0 !== t2.h || (t2.w = t2.h = 1), t2;
        }, "layoutDimensions"), layoutPositions: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = this.nodes().filter(function(e3) {
            return !e3.isParent();
          }), a2 = this.cy(), i2 = t2.eles, o2 = /* @__PURE__ */ __name(function(e3) {
            return e3.id();
          }, "o"), s2 = ae(n2, o2);
          e2.emit({ type: "layoutstart", layout: e2 }), e2.animations = [];
          var l2 = t2.spacingFactor && 1 !== t2.spacingFactor, u2 = function() {
            if (!l2) return null;
            for (var e3 = Jt(), t3 = 0; t3 < r2.length; t3++) {
              var n3 = r2[t3], a3 = s2(n3, t3);
              en(e3, a3.x, a3.y);
            }
            return e3;
          }(), c2 = ae(function(e3, n3) {
            var r3 = s2(e3, n3);
            l2 && (r3 = function(e4, t3, n4) {
              var r4 = t3.x1 + t3.w / 2, a3 = t3.y1 + t3.h / 2;
              return { x: r4 + (n4.x - r4) * e4, y: a3 + (n4.y - a3) * e4 };
            }(Math.abs(t2.spacingFactor), u2, r3));
            return null != t2.transform && (r3 = t2.transform(e3, r3)), r3;
          }, o2);
          if (t2.animate) {
            for (var d2 = 0; d2 < r2.length; d2++) {
              var h2 = r2[d2], f2 = c2(h2, d2);
              if (null == t2.animateFilter || t2.animateFilter(h2, d2)) {
                var p2 = h2.animation({ position: f2, duration: t2.animationDuration, easing: t2.animationEasing });
                e2.animations.push(p2);
              } else h2.position(f2);
            }
            if (t2.fit) {
              var v2 = a2.animation({ fit: { boundingBox: i2.boundingBoxAt(c2), padding: t2.padding }, duration: t2.animationDuration, easing: t2.animationEasing });
              e2.animations.push(v2);
            } else if (void 0 !== t2.zoom && void 0 !== t2.pan) {
              var g2 = a2.animation({ zoom: t2.zoom, pan: t2.pan, duration: t2.animationDuration, easing: t2.animationEasing });
              e2.animations.push(g2);
            }
            e2.animations.forEach(function(e3) {
              return e3.play();
            }), e2.one("layoutready", t2.ready), e2.emit({ type: "layoutready", layout: e2 }), Hr.all(e2.animations.map(function(e3) {
              return e3.promise();
            })).then(function() {
              e2.one("layoutstop", t2.stop), e2.emit({ type: "layoutstop", layout: e2 });
            });
          } else r2.positions(c2), t2.fit && a2.fit(t2.eles, t2.padding), null != t2.zoom && a2.zoom(t2.zoom), t2.pan && a2.pan(t2.pan), e2.one("layoutready", t2.ready), e2.emit({ type: "layoutready", layout: e2 }), e2.one("layoutstop", t2.stop), e2.emit({ type: "layoutstop", layout: e2 });
          return this;
        }, "layoutPositions"), layout: /* @__PURE__ */ __name(function(e2) {
          return this.cy().makeLayout(ge({}, e2, { eles: this }));
        }, "layout") };
        function yl(e2, t2, n2) {
          var r2, a2 = n2._private, i2 = a2.styleCache = a2.styleCache || [];
          return null != (r2 = i2[e2]) ? r2 : r2 = i2[e2] = t2(n2);
        }
        __name(yl, "yl");
        function ml(e2, t2) {
          return e2 = qe(e2), function(n2) {
            return yl(e2, t2, n2);
          };
        }
        __name(ml, "ml");
        function bl(e2, t2) {
          e2 = qe(e2);
          var n2 = /* @__PURE__ */ __name(function(e3) {
            return t2.call(e3);
          }, "n");
          return function() {
            var t3 = this[0];
            if (t3) return yl(e2, n2, t3);
          };
        }
        __name(bl, "bl");
        gl.createLayout = gl.makeLayout = gl.layout;
        var xl = { recalculateRenderedStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.cy(), n2 = t2.renderer(), r2 = t2.styleEnabled();
          return n2 && r2 && n2.recalculateRenderedStyle(this, e2), this;
        }, "recalculateRenderedStyle"), dirtyStyleCache: /* @__PURE__ */ __name(function() {
          var e2, t2 = this.cy(), n2 = /* @__PURE__ */ __name(function(e3) {
            return e3._private.styleCache = null;
          }, "n");
          t2.hasCompoundNodes() ? ((e2 = this.spawnSelf().merge(this.descendants()).merge(this.parents())).merge(e2.connectedEdges()), e2.forEach(n2)) : this.forEach(function(e3) {
            n2(e3), e3.connectedEdges().forEach(n2);
          });
          return this;
        }, "dirtyStyleCache"), updateStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.cy;
          if (!t2.styleEnabled()) return this;
          if (t2.batching()) return t2._private.batchStyleEles.merge(this), this;
          var n2 = this;
          e2 = !(!e2 && void 0 !== e2), t2.hasCompoundNodes() && (n2 = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
          var r2 = n2;
          return e2 ? r2.emitAndNotify("style") : r2.emit("style"), n2.forEach(function(e3) {
            return e3._private.styleDirty = true;
          }), this;
        }, "updateStyle"), cleanStyle: /* @__PURE__ */ __name(function() {
          var e2 = this.cy();
          if (e2.styleEnabled()) for (var t2 = 0; t2 < this.length; t2++) {
            var n2 = this[t2];
            n2._private.styleDirty && (n2._private.styleDirty = false, e2.style().apply(n2));
          }
        }, "cleanStyle"), parsedStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = this[0], r2 = n2.cy();
          if (r2.styleEnabled() && n2) {
            n2._private.styleDirty && (n2._private.styleDirty = false, r2.style().apply(n2));
            var a2 = n2._private.style[e2];
            return null != a2 ? a2 : t2 ? r2.style().getDefaultProperty(e2) : null;
          }
        }, "parsedStyle"), numericStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = this[0];
          if (t2.cy().styleEnabled() && t2) {
            var n2 = t2.pstyle(e2);
            return void 0 !== n2.pfValue ? n2.pfValue : n2.value;
          }
        }, "numericStyle"), numericStyleUnits: /* @__PURE__ */ __name(function(e2) {
          var t2 = this[0];
          if (t2.cy().styleEnabled()) return t2 ? t2.pstyle(e2).units : void 0;
        }, "numericStyleUnits"), renderedStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.cy();
          if (!t2.styleEnabled()) return this;
          var n2 = this[0];
          return n2 ? t2.style().getRenderedStyle(n2, e2) : void 0;
        }, "renderedStyle"), style: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this.cy();
          if (!n2.styleEnabled()) return this;
          var r2 = false, a2 = n2.style();
          if (K(e2)) {
            var i2 = e2;
            a2.applyBypass(this, i2, r2), this.emitAndNotify("style");
          } else if (W(e2)) {
            if (void 0 === t2) {
              var o2 = this[0];
              return o2 ? a2.getStylePropertyValue(o2, e2) : void 0;
            }
            a2.applyBypass(this, e2, t2, r2), this.emitAndNotify("style");
          } else if (void 0 === e2) {
            var s2 = this[0];
            return s2 ? a2.getRawStyle(s2) : void 0;
          }
          return this;
        }, "style"), removeStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.cy();
          if (!t2.styleEnabled()) return this;
          var n2 = false, r2 = t2.style(), a2 = this;
          if (void 0 === e2) for (var i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2];
            r2.removeAllBypasses(o2, n2);
          }
          else {
            e2 = e2.split(/\s+/);
            for (var s2 = 0; s2 < a2.length; s2++) {
              var l2 = a2[s2];
              r2.removeBypasses(l2, e2, n2);
            }
          }
          return this.emitAndNotify("style"), this;
        }, "removeStyle"), show: /* @__PURE__ */ __name(function() {
          return this.css("display", "element"), this;
        }, "show"), hide: /* @__PURE__ */ __name(function() {
          return this.css("display", "none"), this;
        }, "hide"), effectiveOpacity: /* @__PURE__ */ __name(function() {
          var e2 = this.cy();
          if (!e2.styleEnabled()) return 1;
          var t2 = e2.hasCompoundNodes(), n2 = this[0];
          if (n2) {
            var r2 = n2._private, a2 = n2.pstyle("opacity").value;
            if (!t2) return a2;
            var i2 = r2.data.parent ? n2.parents() : null;
            if (i2) for (var o2 = 0; o2 < i2.length; o2++) {
              a2 *= i2[o2].pstyle("opacity").value;
            }
            return a2;
          }
        }, "effectiveOpacity"), transparent: /* @__PURE__ */ __name(function() {
          if (!this.cy().styleEnabled()) return false;
          var e2 = this[0], t2 = e2.cy().hasCompoundNodes();
          return e2 ? t2 ? 0 === e2.effectiveOpacity() : 0 === e2.pstyle("opacity").value : void 0;
        }, "transparent"), backgrounding: /* @__PURE__ */ __name(function() {
          return !!this.cy().styleEnabled() && !!this[0]._private.backgrounding;
        }, "backgrounding") };
        function wl(e2, t2) {
          var n2 = e2._private.data.parent ? e2.parents() : null;
          if (n2) for (var r2 = 0; r2 < n2.length; r2++) {
            if (!t2(n2[r2])) return false;
          }
          return true;
        }
        __name(wl, "wl");
        function El(e2) {
          var t2 = e2.ok, n2 = e2.edgeOkViaNode || e2.ok, r2 = e2.parentOk || e2.ok;
          return function() {
            var e3 = this.cy();
            if (!e3.styleEnabled()) return true;
            var a2 = this[0], i2 = e3.hasCompoundNodes();
            if (a2) {
              var o2 = a2._private;
              if (!t2(a2)) return false;
              if (a2.isNode()) return !i2 || wl(a2, r2);
              var s2 = o2.source, l2 = o2.target;
              return n2(s2) && (!i2 || wl(s2, n2)) && (s2 === l2 || n2(l2) && (!i2 || wl(l2, n2)));
            }
          };
        }
        __name(El, "El");
        var kl = ml("eleTakesUpSpace", function(e2) {
          return "element" === e2.pstyle("display").value && 0 !== e2.width() && (!e2.isNode() || 0 !== e2.height());
        });
        xl.takesUpSpace = bl("takesUpSpace", El({ ok: kl }));
        var Tl = ml("eleInteractive", function(e2) {
          return "yes" === e2.pstyle("events").value && "visible" === e2.pstyle("visibility").value && kl(e2);
        }), Cl = ml("parentInteractive", function(e2) {
          return "visible" === e2.pstyle("visibility").value && kl(e2);
        });
        xl.interactive = bl("interactive", El({ ok: Tl, parentOk: Cl, edgeOkViaNode: kl })), xl.noninteractive = function() {
          var e2 = this[0];
          if (e2) return !e2.interactive();
        };
        var Pl = ml("eleVisible", function(e2) {
          return "visible" === e2.pstyle("visibility").value && 0 !== e2.pstyle("opacity").pfValue && kl(e2);
        }), Sl = kl;
        xl.visible = bl("visible", El({ ok: Pl, edgeOkViaNode: Sl })), xl.hidden = function() {
          var e2 = this[0];
          if (e2) return !e2.visible();
        }, xl.isBundledBezier = bl("isBundledBezier", function() {
          return !!this.cy().styleEnabled() && (!this.removed() && "bezier" === this.pstyle("curve-style").value && this.takesUpSpace());
        }), xl.bypass = xl.css = xl.style, xl.renderedCss = xl.renderedStyle, xl.removeBypass = xl.removeCss = xl.removeStyle, xl.pstyle = xl.parsedStyle;
        var Bl = {};
        function Dl(e2) {
          return function() {
            var t2 = arguments, n2 = [];
            if (2 === t2.length) {
              var r2 = t2[0], a2 = t2[1];
              this.on(e2.event, r2, a2);
            } else if (1 === t2.length && U(t2[0])) {
              var i2 = t2[0];
              this.on(e2.event, i2);
            } else if (0 === t2.length || 1 === t2.length && H(t2[0])) {
              for (var o2 = 1 === t2.length ? t2[0] : null, s2 = 0; s2 < this.length; s2++) {
                var l2 = this[s2], u2 = !e2.ableField || l2._private[e2.ableField], c2 = l2._private[e2.field] != e2.value;
                if (e2.overrideAble) {
                  var d2 = e2.overrideAble(l2);
                  if (void 0 !== d2 && (u2 = d2, !d2)) return this;
                }
                u2 && (l2._private[e2.field] = e2.value, c2 && n2.push(l2));
              }
              var h2 = this.spawn(n2);
              h2.updateStyle(), h2.emit(e2.event), o2 && h2.emit(o2);
            }
            return this;
          };
        }
        __name(Dl, "Dl");
        function _l(e2) {
          Bl[e2.field] = function() {
            var t2 = this[0];
            if (t2) {
              if (e2.overrideField) {
                var n2 = e2.overrideField(t2);
                if (void 0 !== n2) return n2;
              }
              return t2._private[e2.field];
            }
          }, Bl[e2.on] = Dl({ event: e2.on, field: e2.field, ableField: e2.ableField, overrideAble: e2.overrideAble, value: true }), Bl[e2.off] = Dl({ event: e2.off, field: e2.field, ableField: e2.ableField, overrideAble: e2.overrideAble, value: false });
        }
        __name(_l, "_l");
        _l({ field: "locked", overrideField: /* @__PURE__ */ __name(function(e2) {
          return !!e2.cy().autolock() || void 0;
        }, "overrideField"), on: "lock", off: "unlock" }), _l({ field: "grabbable", overrideField: /* @__PURE__ */ __name(function(e2) {
          return !e2.cy().autoungrabify() && !e2.pannable() && void 0;
        }, "overrideField"), on: "grabify", off: "ungrabify" }), _l({ field: "selected", ableField: "selectable", overrideAble: /* @__PURE__ */ __name(function(e2) {
          return !e2.cy().autounselectify() && void 0;
        }, "overrideAble"), on: "select", off: "unselect" }), _l({ field: "selectable", overrideField: /* @__PURE__ */ __name(function(e2) {
          return !e2.cy().autounselectify() && void 0;
        }, "overrideField"), on: "selectify", off: "unselectify" }), Bl.deselect = Bl.unselect, Bl.grabbed = function() {
          var e2 = this[0];
          if (e2) return e2._private.grabbed;
        }, _l({ field: "active", on: "activate", off: "unactivate" }), _l({ field: "pannable", on: "panify", off: "unpanify" }), Bl.inactive = function() {
          var e2 = this[0];
          if (e2) return !e2._private.active;
        };
        var Al = {}, Ml = /* @__PURE__ */ __name(function(e2) {
          return function(t2) {
            for (var n2 = [], r2 = 0; r2 < this.length; r2++) {
              var a2 = this[r2];
              if (a2.isNode()) {
                for (var i2 = false, o2 = a2.connectedEdges(), s2 = 0; s2 < o2.length; s2++) {
                  var l2 = o2[s2], u2 = l2.source(), c2 = l2.target();
                  if (e2.noIncomingEdges && c2 === a2 && u2 !== a2 || e2.noOutgoingEdges && u2 === a2 && c2 !== a2) {
                    i2 = true;
                    break;
                  }
                }
                i2 || n2.push(a2);
              }
            }
            return this.spawn(n2, true).filter(t2);
          };
        }, "Ml"), Rl = /* @__PURE__ */ __name(function(e2) {
          return function(t2) {
            for (var n2 = [], r2 = 0; r2 < this.length; r2++) {
              var a2 = this[r2];
              if (a2.isNode()) for (var i2 = a2.connectedEdges(), o2 = 0; o2 < i2.length; o2++) {
                var s2 = i2[o2], l2 = s2.source(), u2 = s2.target();
                e2.outgoing && l2 === a2 ? (n2.push(s2), n2.push(u2)) : e2.incoming && u2 === a2 && (n2.push(s2), n2.push(l2));
              }
            }
            return this.spawn(n2, true).filter(t2);
          };
        }, "Rl"), Il = /* @__PURE__ */ __name(function(e2) {
          return function(t2) {
            for (var n2 = this, r2 = [], a2 = {}; ; ) {
              var i2 = e2.outgoing ? n2.outgoers() : n2.incomers();
              if (0 === i2.length) break;
              for (var o2 = false, s2 = 0; s2 < i2.length; s2++) {
                var l2 = i2[s2], u2 = l2.id();
                a2[u2] || (a2[u2] = true, r2.push(l2), o2 = true);
              }
              if (!o2) break;
              n2 = i2;
            }
            return this.spawn(r2, true).filter(t2);
          };
        }, "Il");
        function Nl(e2) {
          return function(t2) {
            for (var n2 = [], r2 = 0; r2 < this.length; r2++) {
              var a2 = this[r2]._private[e2.attr];
              a2 && n2.push(a2);
            }
            return this.spawn(n2, true).filter(t2);
          };
        }
        __name(Nl, "Nl");
        function Ll(e2) {
          return function(t2) {
            var n2 = [], r2 = this._private.cy, a2 = e2 || {};
            W(t2) && (t2 = r2.$(t2));
            for (var i2 = 0; i2 < t2.length; i2++) for (var o2 = t2[i2]._private.edges, s2 = 0; s2 < o2.length; s2++) {
              var l2 = o2[s2], u2 = l2._private.data, c2 = this.hasElementWithId(u2.source) && t2.hasElementWithId(u2.target), d2 = t2.hasElementWithId(u2.source) && this.hasElementWithId(u2.target);
              if (c2 || d2) {
                if (a2.thisIsSrc || a2.thisIsTgt) {
                  if (a2.thisIsSrc && !c2) continue;
                  if (a2.thisIsTgt && !d2) continue;
                }
                n2.push(l2);
              }
            }
            return this.spawn(n2, true);
          };
        }
        __name(Ll, "Ll");
        function zl(e2) {
          return e2 = ge({}, { codirected: false }, e2), function(t2) {
            for (var n2 = [], r2 = this.edges(), a2 = e2, i2 = 0; i2 < r2.length; i2++) for (var o2 = r2[i2]._private, s2 = o2.source, l2 = s2._private.data.id, u2 = o2.data.target, c2 = s2._private.edges, d2 = 0; d2 < c2.length; d2++) {
              var h2 = c2[d2], f2 = h2._private.data, p2 = f2.target, v2 = f2.source, g2 = p2 === u2 && v2 === l2, y2 = l2 === p2 && u2 === v2;
              (a2.codirected && g2 || !a2.codirected && (g2 || y2)) && n2.push(h2);
            }
            return this.spawn(n2, true).filter(t2);
          };
        }
        __name(zl, "zl");
        Al.clearTraversalCache = function() {
          for (var e2 = 0; e2 < this.length; e2++) this[e2]._private.traversalCache = null;
        }, ge(Al, { roots: Ml({ noIncomingEdges: true }), leaves: Ml({ noOutgoingEdges: true }), outgoers: us(Rl({ outgoing: true }), "outgoers"), successors: Il({ outgoing: true }), incomers: us(Rl({ incoming: true }), "incomers"), predecessors: Il({}) }), ge(Al, { neighborhood: us(function(e2) {
          for (var t2 = [], n2 = this.nodes(), r2 = 0; r2 < n2.length; r2++) for (var a2 = n2[r2], i2 = a2.connectedEdges(), o2 = 0; o2 < i2.length; o2++) {
            var s2 = i2[o2], l2 = s2.source(), u2 = s2.target(), c2 = a2 === l2 ? u2 : l2;
            c2.length > 0 && t2.push(c2[0]), t2.push(s2[0]);
          }
          return this.spawn(t2, true).filter(e2);
        }, "neighborhood"), closedNeighborhood: /* @__PURE__ */ __name(function(e2) {
          return this.neighborhood().add(this).filter(e2);
        }, "closedNeighborhood"), openNeighborhood: /* @__PURE__ */ __name(function(e2) {
          return this.neighborhood(e2);
        }, "openNeighborhood") }), Al.neighbourhood = Al.neighborhood, Al.closedNeighbourhood = Al.closedNeighborhood, Al.openNeighbourhood = Al.openNeighborhood, ge(Al, { source: us(function(e2) {
          var t2, n2 = this[0];
          return n2 && (t2 = n2._private.source || n2.cy().collection()), t2 && e2 ? t2.filter(e2) : t2;
        }, "source"), target: us(function(e2) {
          var t2, n2 = this[0];
          return n2 && (t2 = n2._private.target || n2.cy().collection()), t2 && e2 ? t2.filter(e2) : t2;
        }, "target"), sources: Nl({ attr: "source" }), targets: Nl({ attr: "target" }) }), ge(Al, { edgesWith: us(Ll(), "edgesWith"), edgesTo: us(Ll({ thisIsSrc: true }), "edgesTo") }), ge(Al, { connectedEdges: us(function(e2) {
          for (var t2 = [], n2 = 0; n2 < this.length; n2++) {
            var r2 = this[n2];
            if (r2.isNode()) for (var a2 = r2._private.edges, i2 = 0; i2 < a2.length; i2++) {
              var o2 = a2[i2];
              t2.push(o2);
            }
          }
          return this.spawn(t2, true).filter(e2);
        }, "connectedEdges"), connectedNodes: us(function(e2) {
          for (var t2 = [], n2 = 0; n2 < this.length; n2++) {
            var r2 = this[n2];
            r2.isEdge() && (t2.push(r2.source()[0]), t2.push(r2.target()[0]));
          }
          return this.spawn(t2, true).filter(e2);
        }, "connectedNodes"), parallelEdges: us(zl(), "parallelEdges"), codirectedEdges: us(zl({ codirected: true }), "codirectedEdges") }), ge(Al, { components: /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = t2.cy(), r2 = n2.collection(), a2 = null == e2 ? t2.nodes() : e2.nodes(), i2 = [];
          null != e2 && a2.empty() && (a2 = e2.sources());
          var o2 = /* @__PURE__ */ __name(function(e3, t3) {
            r2.merge(e3), a2.unmerge(e3), t3.merge(e3);
          }, "o");
          if (a2.empty()) return t2.spawn();
          var s2 = /* @__PURE__ */ __name(function() {
            var e3 = n2.collection();
            i2.push(e3);
            var r3 = a2[0];
            o2(r3, e3), t2.bfs({ directed: false, roots: r3, visit: /* @__PURE__ */ __name(function(t3) {
              return o2(t3, e3);
            }, "visit") }), e3.forEach(function(n3) {
              n3.connectedEdges().forEach(function(n4) {
                t2.has(n4) && e3.has(n4.source()) && e3.has(n4.target()) && e3.merge(n4);
              });
            });
          }, "s");
          do {
            s2();
          } while (a2.length > 0);
          return i2;
        }, "components"), component: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          return e2.cy().mutableElements().components(e2)[0];
        }, "component") }), Al.componentsOf = Al.components;
        var Ol = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r2 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (void 0 !== e2) {
            var a2 = new pt(), i2 = false;
            if (t2) {
              if (t2.length > 0 && K(t2[0]) && !Q(t2[0])) {
                i2 = true;
                for (var o2 = [], s2 = new gt(), l2 = 0, u2 = t2.length; l2 < u2; l2++) {
                  var c2 = t2[l2];
                  null == c2.data && (c2.data = {});
                  var d2 = c2.data;
                  if (null == d2.id) d2.id = ot();
                  else if (e2.hasElementWithId(d2.id) || s2.has(d2.id)) continue;
                  var h2 = new yt(e2, c2, false);
                  o2.push(h2), s2.add(d2.id);
                }
                t2 = o2;
              }
            } else t2 = [];
            this.length = 0;
            for (var f2 = 0, p2 = t2.length; f2 < p2; f2++) {
              var v2 = t2[f2][0];
              if (null != v2) {
                var g2 = v2._private.data.id;
                n2 && a2.has(g2) || (n2 && a2.set(g2, { index: this.length, ele: v2 }), this[this.length] = v2, this.length++);
              }
            }
            this._private = { eles: this, cy: e2, get map() {
              return null == this.lazyMap && this.rebuildMap(), this.lazyMap;
            }, set map(e3) {
              this.lazyMap = e3;
            }, rebuildMap: /* @__PURE__ */ __name(function() {
              for (var e3 = this.lazyMap = new pt(), t3 = this.eles, n3 = 0; n3 < t3.length; n3++) {
                var r3 = t3[n3];
                e3.set(r3.id(), { index: n3, ele: r3 });
              }
            }, "rebuildMap") }, n2 && (this._private.map = a2), i2 && !r2 && this.restore();
          } else nt("A collection must have a reference to the core");
        }, "Ol"), Vl = yt.prototype = Ol.prototype = Object.create(Array.prototype);
        Vl.instanceString = function() {
          return "collection";
        }, Vl.spawn = function(e2, t2) {
          return new Ol(this.cy(), e2, t2);
        }, Vl.spawnSelf = function() {
          return this.spawn(this);
        }, Vl.cy = function() {
          return this._private.cy;
        }, Vl.renderer = function() {
          return this._private.cy.renderer();
        }, Vl.element = function() {
          return this[0];
        }, Vl.collection = function() {
          return J(this) ? this : new Ol(this._private.cy, [this]);
        }, Vl.unique = function() {
          return new Ol(this._private.cy, this, true);
        }, Vl.hasElementWithId = function(e2) {
          return e2 = "" + e2, this._private.map.has(e2);
        }, Vl.getElementById = function(e2) {
          e2 = "" + e2;
          var t2 = this._private.cy, n2 = this._private.map.get(e2);
          return n2 ? n2.ele : new Ol(t2);
        }, Vl.$id = Vl.getElementById, Vl.poolIndex = function() {
          var e2 = this._private.cy._private.elements, t2 = this[0]._private.data.id;
          return e2._private.map.get(t2).index;
        }, Vl.indexOf = function(e2) {
          var t2 = e2[0]._private.data.id;
          return this._private.map.get(t2).index;
        }, Vl.indexOfId = function(e2) {
          return e2 = "" + e2, this._private.map.get(e2).index;
        }, Vl.json = function(e2) {
          var t2 = this.element(), n2 = this.cy();
          if (null == t2 && e2) return this;
          if (null != t2) {
            var r2 = t2._private;
            if (K(e2)) {
              if (n2.startBatch(), e2.data) {
                t2.data(e2.data);
                var a2 = r2.data;
                if (t2.isEdge()) {
                  var i2 = false, o2 = {}, s2 = e2.data.source, l2 = e2.data.target;
                  null != s2 && s2 != a2.source && (o2.source = "" + s2, i2 = true), null != l2 && l2 != a2.target && (o2.target = "" + l2, i2 = true), i2 && (t2 = t2.move(o2));
                } else {
                  var u2 = "parent" in e2.data, c2 = e2.data.parent;
                  !u2 || null == c2 && null == a2.parent || c2 == a2.parent || (void 0 === c2 && (c2 = null), null != c2 && (c2 = "" + c2), t2 = t2.move({ parent: c2 }));
                }
              }
              e2.position && t2.position(e2.position);
              var d2 = /* @__PURE__ */ __name(function(n3, a3, i3) {
                var o3 = e2[n3];
                null != o3 && o3 !== r2[n3] && (o3 ? t2[a3]() : t2[i3]());
              }, "d");
              return d2("removed", "remove", "restore"), d2("selected", "select", "unselect"), d2("selectable", "selectify", "unselectify"), d2("locked", "lock", "unlock"), d2("grabbable", "grabify", "ungrabify"), d2("pannable", "panify", "unpanify"), null != e2.classes && t2.classes(e2.classes), n2.endBatch(), this;
            }
            if (void 0 === e2) {
              var h2 = { data: it(r2.data), position: it(r2.position), group: r2.group, removed: r2.removed, selected: r2.selected, selectable: r2.selectable, locked: r2.locked, grabbable: r2.grabbable, pannable: r2.pannable, classes: null };
              h2.classes = "";
              var f2 = 0;
              return r2.classes.forEach(function(e3) {
                return h2.classes += 0 == f2++ ? e3 : " " + e3;
              }), h2;
            }
          }
        }, Vl.jsons = function() {
          for (var e2 = [], t2 = 0; t2 < this.length; t2++) {
            var n2 = this[t2].json();
            e2.push(n2);
          }
          return e2;
        }, Vl.clone = function() {
          for (var e2 = this.cy(), t2 = [], n2 = 0; n2 < this.length; n2++) {
            var r2 = this[n2].json(), a2 = new yt(e2, r2, false);
            t2.push(a2);
          }
          return new Ol(e2, t2);
        }, Vl.copy = Vl.clone, Vl.restore = function() {
          for (var e2, t2, n2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], r2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], a2 = this, i2 = a2.cy(), o2 = i2._private, s2 = [], l2 = [], u2 = 0, c2 = a2.length; u2 < c2; u2++) {
            var d2 = a2[u2];
            r2 && !d2.removed() || (d2.isNode() ? s2.push(d2) : l2.push(d2));
          }
          e2 = s2.concat(l2);
          var h2 = /* @__PURE__ */ __name(function() {
            e2.splice(t2, 1), t2--;
          }, "h");
          for (t2 = 0; t2 < e2.length; t2++) {
            var f2 = e2[t2], p2 = f2._private, v2 = p2.data;
            if (f2.clearTraversalCache(), r2 || p2.removed) if (void 0 === v2.id) v2.id = ot();
            else if (G(v2.id)) v2.id = "" + v2.id;
            else {
              if (ne(v2.id) || !W(v2.id)) {
                nt("Can not create element with invalid string ID `" + v2.id + "`"), h2();
                continue;
              }
              if (i2.hasElementWithId(v2.id)) {
                nt("Can not create second element with ID `" + v2.id + "`"), h2();
                continue;
              }
            }
            else ;
            var g2 = v2.id;
            if (f2.isNode()) {
              var y2 = p2.position;
              null == y2.x && (y2.x = 0), null == y2.y && (y2.y = 0);
            }
            if (f2.isEdge()) {
              for (var m2 = f2, b2 = ["source", "target"], x2 = b2.length, w2 = false, E2 = 0; E2 < x2; E2++) {
                var k2 = b2[E2], T2 = v2[k2];
                G(T2) && (T2 = v2[k2] = "" + v2[k2]), null == T2 || "" === T2 ? (nt("Can not create edge `" + g2 + "` with unspecified " + k2), w2 = true) : i2.hasElementWithId(T2) || (nt("Can not create edge `" + g2 + "` with nonexistant " + k2 + " `" + T2 + "`"), w2 = true);
              }
              if (w2) {
                h2();
                continue;
              }
              var C2 = i2.getElementById(v2.source), P2 = i2.getElementById(v2.target);
              C2.same(P2) ? C2._private.edges.push(m2) : (C2._private.edges.push(m2), P2._private.edges.push(m2)), m2._private.source = C2, m2._private.target = P2;
            }
            p2.map = new pt(), p2.map.set(g2, { ele: f2, index: 0 }), p2.removed = false, r2 && i2.addToPool(f2);
          }
          for (var S2 = 0; S2 < s2.length; S2++) {
            var B2 = s2[S2], D2 = B2._private.data;
            G(D2.parent) && (D2.parent = "" + D2.parent);
            var _2 = D2.parent;
            if (null != _2 || B2._private.parent) {
              var A2 = B2._private.parent ? i2.collection().merge(B2._private.parent) : i2.getElementById(_2);
              if (A2.empty()) D2.parent = void 0;
              else if (A2[0].removed()) at("Node added with missing parent, reference to parent removed"), D2.parent = void 0, B2._private.parent = null;
              else {
                for (var M2 = false, R2 = A2; !R2.empty(); ) {
                  if (B2.same(R2)) {
                    M2 = true, D2.parent = void 0;
                    break;
                  }
                  R2 = R2.parent();
                }
                M2 || (A2[0]._private.children.push(B2), B2._private.parent = A2[0], o2.hasCompoundNodes = true);
              }
            }
          }
          if (e2.length > 0) {
            for (var I2 = e2.length === a2.length ? a2 : new Ol(i2, e2), N2 = 0; N2 < I2.length; N2++) {
              var L2 = I2[N2];
              L2.isNode() || (L2.parallelEdges().clearTraversalCache(), L2.source().clearTraversalCache(), L2.target().clearTraversalCache());
            }
            (o2.hasCompoundNodes ? i2.collection().merge(I2).merge(I2.connectedNodes()).merge(I2.parent()) : I2).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(n2), n2 ? I2.emitAndNotify("add") : r2 && I2.emit("add");
          }
          return a2;
        }, Vl.removed = function() {
          var e2 = this[0];
          return e2 && e2._private.removed;
        }, Vl.inside = function() {
          var e2 = this[0];
          return e2 && !e2._private.removed;
        }, Vl.remove = function() {
          var e2 = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0], t2 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], n2 = this, r2 = [], a2 = {}, i2 = n2._private.cy;
          function o2(e3) {
            var n3 = a2[e3.id()];
            t2 && e3.removed() || n3 || (a2[e3.id()] = true, e3.isNode() ? (r2.push(e3), function(e4) {
              for (var t3 = e4._private.edges, n4 = 0; n4 < t3.length; n4++) o2(t3[n4]);
            }(e3), function(e4) {
              for (var t3 = e4._private.children, n4 = 0; n4 < t3.length; n4++) o2(t3[n4]);
            }(e3)) : r2.unshift(e3));
          }
          __name(o2, "o");
          for (var s2 = 0, l2 = n2.length; s2 < l2; s2++) {
            o2(n2[s2]);
          }
          function u2(e3, t3) {
            var n3 = e3._private.edges;
            ct(n3, t3), e3.clearTraversalCache();
          }
          __name(u2, "u");
          function c2(e3) {
            e3.clearTraversalCache();
          }
          __name(c2, "c");
          var d2 = [];
          function h2(e3, t3) {
            t3 = t3[0];
            var n3 = (e3 = e3[0])._private.children, r3 = e3.id();
            ct(n3, t3), t3._private.parent = null, d2.ids[r3] || (d2.ids[r3] = true, d2.push(e3));
          }
          __name(h2, "h");
          d2.ids = {}, n2.dirtyCompoundBoundsCache(), t2 && i2.removeFromPool(r2);
          for (var f2 = 0; f2 < r2.length; f2++) {
            var p2 = r2[f2];
            if (p2.isEdge()) {
              var v2 = p2.source()[0], g2 = p2.target()[0];
              u2(v2, p2), u2(g2, p2);
              for (var y2 = p2.parallelEdges(), m2 = 0; m2 < y2.length; m2++) {
                var b2 = y2[m2];
                c2(b2), b2.isBundledBezier() && b2.dirtyBoundingBoxCache();
              }
            } else {
              var x2 = p2.parent();
              0 !== x2.length && h2(x2, p2);
            }
            t2 && (p2._private.removed = true);
          }
          var w2 = i2._private.elements;
          i2._private.hasCompoundNodes = false;
          for (var E2 = 0; E2 < w2.length; E2++) {
            if (w2[E2].isParent()) {
              i2._private.hasCompoundNodes = true;
              break;
            }
          }
          var k2 = new Ol(this.cy(), r2);
          k2.size() > 0 && (e2 ? k2.emitAndNotify("remove") : t2 && k2.emit("remove"));
          for (var T2 = 0; T2 < d2.length; T2++) {
            var C2 = d2[T2];
            t2 && C2.removed() || C2.updateStyle();
          }
          return k2;
        }, Vl.move = function(e2) {
          var t2 = this._private.cy, n2 = this, r2 = false, a2 = false, i2 = /* @__PURE__ */ __name(function(e3) {
            return null == e3 ? e3 : "" + e3;
          }, "i");
          if (void 0 !== e2.source || void 0 !== e2.target) {
            var o2 = i2(e2.source), s2 = i2(e2.target), l2 = null != o2 && t2.hasElementWithId(o2), u2 = null != s2 && t2.hasElementWithId(s2);
            (l2 || u2) && (t2.batch(function() {
              n2.remove(r2, a2), n2.emitAndNotify("moveout");
              for (var e3 = 0; e3 < n2.length; e3++) {
                var t3 = n2[e3], i3 = t3._private.data;
                t3.isEdge() && (l2 && (i3.source = o2), u2 && (i3.target = s2));
              }
              n2.restore(r2, a2);
            }), n2.emitAndNotify("move"));
          } else if (void 0 !== e2.parent) {
            var c2 = i2(e2.parent);
            if (null === c2 || t2.hasElementWithId(c2)) {
              var d2 = null === c2 ? void 0 : c2;
              t2.batch(function() {
                var e3 = n2.remove(r2, a2);
                e3.emitAndNotify("moveout");
                for (var t3 = 0; t3 < n2.length; t3++) {
                  var i3 = n2[t3], o3 = i3._private.data;
                  i3.isNode() && (o3.parent = d2);
                }
                e3.restore(r2, a2);
              }), n2.emitAndNotify("move");
            }
          }
          return this;
        }, [Fr, wo, Eo, os, cs, ys, ms, Ks, ul, cl, { isNode: /* @__PURE__ */ __name(function() {
          return "nodes" === this.group();
        }, "isNode"), isEdge: /* @__PURE__ */ __name(function() {
          return "edges" === this.group();
        }, "isEdge"), isLoop: /* @__PURE__ */ __name(function() {
          return this.isEdge() && this.source()[0] === this.target()[0];
        }, "isLoop"), isSimple: /* @__PURE__ */ __name(function() {
          return this.isEdge() && this.source()[0] !== this.target()[0];
        }, "isSimple"), group: /* @__PURE__ */ __name(function() {
          var e2 = this[0];
          if (e2) return e2._private.group;
        }, "group") }, fl, gl, xl, Bl, Al].forEach(function(e2) {
          ge(Vl, e2);
        });
        var Fl = { add: /* @__PURE__ */ __name(function(e2) {
          var t2, n2 = this;
          if ($(e2)) {
            var r2 = e2;
            if (r2._private.cy === n2) t2 = r2.restore();
            else {
              for (var a2 = [], i2 = 0; i2 < r2.length; i2++) {
                var o2 = r2[i2];
                a2.push(o2.json());
              }
              t2 = new Ol(n2, a2);
            }
          } else if (H(e2)) {
            t2 = new Ol(n2, e2);
          } else if (K(e2) && (H(e2.nodes) || H(e2.edges))) {
            for (var s2 = e2, l2 = [], u2 = ["nodes", "edges"], c2 = 0, d2 = u2.length; c2 < d2; c2++) {
              var h2 = u2[c2], f2 = s2[h2];
              if (H(f2)) for (var p2 = 0, v2 = f2.length; p2 < v2; p2++) {
                var g2 = ge({ group: h2 }, f2[p2]);
                l2.push(g2);
              }
            }
            t2 = new Ol(n2, l2);
          } else {
            t2 = new yt(n2, e2).collection();
          }
          return t2;
        }, "add"), remove: /* @__PURE__ */ __name(function(e2) {
          if ($(e2)) ;
          else if (W(e2)) {
            var t2 = e2;
            e2 = this.$(t2);
          }
          return e2.remove();
        }, "remove") };
        function Xl(e2, t2, n2, r2) {
          var a2 = 0.1, i2 = "undefined" != typeof Float32Array;
          if (4 !== arguments.length) return false;
          for (var o2 = 0; o2 < 4; ++o2) if ("number" != typeof arguments[o2] || isNaN(arguments[o2]) || !isFinite(arguments[o2])) return false;
          e2 = Math.min(e2, 1), n2 = Math.min(n2, 1), e2 = Math.max(e2, 0), n2 = Math.max(n2, 0);
          var s2 = i2 ? new Float32Array(11) : new Array(11);
          function l2(e3, t3) {
            return 1 - 3 * t3 + 3 * e3;
          }
          __name(l2, "l");
          function u2(e3, t3) {
            return 3 * t3 - 6 * e3;
          }
          __name(u2, "u");
          function c2(e3) {
            return 3 * e3;
          }
          __name(c2, "c");
          function d2(e3, t3, n3) {
            return ((l2(t3, n3) * e3 + u2(t3, n3)) * e3 + c2(t3)) * e3;
          }
          __name(d2, "d");
          function h2(e3, t3, n3) {
            return 3 * l2(t3, n3) * e3 * e3 + 2 * u2(t3, n3) * e3 + c2(t3);
          }
          __name(h2, "h");
          function f2(t3) {
            for (var r3 = 0, i3 = 1; 10 !== i3 && s2[i3] <= t3; ++i3) r3 += a2;
            --i3;
            var o3 = r3 + (t3 - s2[i3]) / (s2[i3 + 1] - s2[i3]) * a2, l3 = h2(o3, e2, n2);
            return l3 >= 1e-3 ? function(t4, r4) {
              for (var a3 = 0; a3 < 4; ++a3) {
                var i4 = h2(r4, e2, n2);
                if (0 === i4) return r4;
                r4 -= (d2(r4, e2, n2) - t4) / i4;
              }
              return r4;
            }(t3, o3) : 0 === l3 ? o3 : function(t4, r4, a3) {
              var i4, o4, s3 = 0;
              do {
                (i4 = d2(o4 = r4 + (a3 - r4) / 2, e2, n2) - t4) > 0 ? a3 = o4 : r4 = o4;
              } while (Math.abs(i4) > 1e-7 && ++s3 < 10);
              return o4;
            }(t3, r3, r3 + a2);
          }
          __name(f2, "f");
          var p2 = false;
          function v2() {
            p2 = true, e2 === t2 && n2 === r2 || function() {
              for (var t3 = 0; t3 < 11; ++t3) s2[t3] = d2(t3 * a2, e2, n2);
            }();
          }
          __name(v2, "v");
          var g2 = /* @__PURE__ */ __name(function(a3) {
            return p2 || v2(), e2 === t2 && n2 === r2 ? a3 : 0 === a3 ? 0 : 1 === a3 ? 1 : d2(f2(a3), t2, r2);
          }, "g");
          g2.getControlPoints = function() {
            return [{ x: e2, y: t2 }, { x: n2, y: r2 }];
          };
          var y2 = "generateBezier(" + [e2, t2, n2, r2] + ")";
          return g2.toString = function() {
            return y2;
          }, g2;
        }
        __name(Xl, "Xl");
        var jl = /* @__PURE__ */ function() {
          function e2(e3) {
            return -e3.tension * e3.x - e3.friction * e3.v;
          }
          __name(e2, "e");
          function t2(t3, n3, r2) {
            var a2 = { x: t3.x + r2.dx * n3, v: t3.v + r2.dv * n3, tension: t3.tension, friction: t3.friction };
            return { dx: a2.v, dv: e2(a2) };
          }
          __name(t2, "t");
          function n2(n3, r2) {
            var a2 = { dx: n3.v, dv: e2(n3) }, i2 = t2(n3, 0.5 * r2, a2), o2 = t2(n3, 0.5 * r2, i2), s2 = t2(n3, r2, o2), l2 = 1 / 6 * (a2.dx + 2 * (i2.dx + o2.dx) + s2.dx), u2 = 1 / 6 * (a2.dv + 2 * (i2.dv + o2.dv) + s2.dv);
            return n3.x = n3.x + l2 * r2, n3.v = n3.v + u2 * r2, n3;
          }
          __name(n2, "n");
          return /* @__PURE__ */ __name(function e3(t3, r2, a2) {
            var i2, o2, s2, l2 = { x: -1, v: 0, tension: null, friction: null }, u2 = [0], c2 = 0, d2 = 1e-4;
            for (t3 = parseFloat(t3) || 500, r2 = parseFloat(r2) || 20, a2 = a2 || null, l2.tension = t3, l2.friction = r2, o2 = (i2 = null !== a2) ? (c2 = e3(t3, r2)) / a2 * 0.016 : 0.016; s2 = n2(s2 || l2, o2), u2.push(1 + s2.x), c2 += 16, Math.abs(s2.x) > d2 && Math.abs(s2.v) > d2; ) ;
            return i2 ? function(e4) {
              return u2[e4 * (u2.length - 1) | 0];
            } : c2;
          }, "e");
        }(), Yl = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = Xl(e2, t2, n2, r2);
          return function(e3, t3, n3) {
            return e3 + (t3 - e3) * a2(n3);
          };
        }, "Yl"), ql = { linear: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return e2 + (t2 - e2) * n2;
        }, "linear"), ease: Yl(0.25, 0.1, 0.25, 1), "ease-in": Yl(0.42, 0, 1, 1), "ease-out": Yl(0, 0, 0.58, 1), "ease-in-out": Yl(0.42, 0, 0.58, 1), "ease-in-sine": Yl(0.47, 0, 0.745, 0.715), "ease-out-sine": Yl(0.39, 0.575, 0.565, 1), "ease-in-out-sine": Yl(0.445, 0.05, 0.55, 0.95), "ease-in-quad": Yl(0.55, 0.085, 0.68, 0.53), "ease-out-quad": Yl(0.25, 0.46, 0.45, 0.94), "ease-in-out-quad": Yl(0.455, 0.03, 0.515, 0.955), "ease-in-cubic": Yl(0.55, 0.055, 0.675, 0.19), "ease-out-cubic": Yl(0.215, 0.61, 0.355, 1), "ease-in-out-cubic": Yl(0.645, 0.045, 0.355, 1), "ease-in-quart": Yl(0.895, 0.03, 0.685, 0.22), "ease-out-quart": Yl(0.165, 0.84, 0.44, 1), "ease-in-out-quart": Yl(0.77, 0, 0.175, 1), "ease-in-quint": Yl(0.755, 0.05, 0.855, 0.06), "ease-out-quint": Yl(0.23, 1, 0.32, 1), "ease-in-out-quint": Yl(0.86, 0, 0.07, 1), "ease-in-expo": Yl(0.95, 0.05, 0.795, 0.035), "ease-out-expo": Yl(0.19, 1, 0.22, 1), "ease-in-out-expo": Yl(1, 0, 0, 1), "ease-in-circ": Yl(0.6, 0.04, 0.98, 0.335), "ease-out-circ": Yl(0.075, 0.82, 0.165, 1), "ease-in-out-circ": Yl(0.785, 0.135, 0.15, 0.86), spring: /* @__PURE__ */ __name(function(e2, t2, n2) {
          if (0 === n2) return ql.linear;
          var r2 = jl(e2, t2, n2);
          return function(e3, t3, n3) {
            return e3 + (t3 - e3) * r2(n3);
          };
        }, "spring"), "cubic-bezier": Yl };
        function Wl(e2, t2, n2, r2, a2) {
          if (1 === r2) return n2;
          if (t2 === n2) return n2;
          var i2 = a2(t2, n2, r2);
          return null == e2 || ((e2.roundValue || e2.color) && (i2 = Math.round(i2)), void 0 !== e2.min && (i2 = Math.max(i2, e2.min)), void 0 !== e2.max && (i2 = Math.min(i2, e2.max))), i2;
        }
        __name(Wl, "Wl");
        function Ul(e2, t2) {
          return null != e2.pfValue || null != e2.value ? null == e2.pfValue || null != t2 && "%" === t2.type.units ? e2.value : e2.pfValue : e2;
        }
        __name(Ul, "Ul");
        function Hl(e2, t2, n2, r2, a2) {
          var i2 = null != a2 ? a2.type : null;
          n2 < 0 ? n2 = 0 : n2 > 1 && (n2 = 1);
          var o2 = Ul(e2, a2), s2 = Ul(t2, a2);
          if (G(o2) && G(s2)) return Wl(i2, o2, s2, n2, r2);
          if (H(o2) && H(s2)) {
            for (var l2 = [], u2 = 0; u2 < s2.length; u2++) {
              var c2 = o2[u2], d2 = s2[u2];
              if (null != c2 && null != d2) {
                var h2 = Wl(i2, c2, d2, n2, r2);
                l2.push(h2);
              } else l2.push(d2);
            }
            return l2;
          }
        }
        __name(Hl, "Hl");
        function Kl(e2, t2, n2, r2) {
          var a2 = !r2, i2 = e2._private, o2 = t2._private, s2 = o2.easing, l2 = o2.startTime, u2 = (r2 ? e2 : e2.cy()).style();
          if (!o2.easingImpl) if (null == s2) o2.easingImpl = ql.linear;
          else {
            var c2, d2, h2;
            if (W(s2)) c2 = u2.parse("transition-timing-function", s2).value;
            else c2 = s2;
            W(c2) ? (d2 = c2, h2 = []) : (d2 = c2[1], h2 = c2.slice(2).map(function(e3) {
              return +e3;
            })), h2.length > 0 ? ("spring" === d2 && h2.push(o2.duration), o2.easingImpl = ql[d2].apply(null, h2)) : o2.easingImpl = ql[d2];
          }
          var f2, p2 = o2.easingImpl;
          if (f2 = 0 === o2.duration ? 1 : (n2 - l2) / o2.duration, o2.applying && (f2 = o2.progress), f2 < 0 ? f2 = 0 : f2 > 1 && (f2 = 1), null == o2.delay) {
            var v2 = o2.startPosition, g2 = o2.position;
            if (g2 && a2 && !e2.locked()) {
              var y2 = {};
              Gl(v2.x, g2.x) && (y2.x = Hl(v2.x, g2.x, f2, p2)), Gl(v2.y, g2.y) && (y2.y = Hl(v2.y, g2.y, f2, p2)), e2.position(y2);
            }
            var m2 = o2.startPan, b2 = o2.pan, x2 = i2.pan, w2 = null != b2 && r2;
            w2 && (Gl(m2.x, b2.x) && (x2.x = Hl(m2.x, b2.x, f2, p2)), Gl(m2.y, b2.y) && (x2.y = Hl(m2.y, b2.y, f2, p2)), e2.emit("pan"));
            var E2 = o2.startZoom, k2 = o2.zoom, T2 = null != k2 && r2;
            T2 && (Gl(E2, k2) && (i2.zoom = Qt(i2.minZoom, Hl(E2, k2, f2, p2), i2.maxZoom)), e2.emit("zoom")), (w2 || T2) && e2.emit("viewport");
            var C2 = o2.style;
            if (C2 && C2.length > 0 && a2) {
              for (var P2 = 0; P2 < C2.length; P2++) {
                var S2 = C2[P2], B2 = S2.name, D2 = S2, _2 = o2.startStyle[B2], A2 = Hl(_2, D2, f2, p2, u2.properties[_2.name]);
                u2.overrideBypass(e2, B2, A2);
              }
              e2.emit("style");
            }
          }
          return o2.progress = f2, f2;
        }
        __name(Kl, "Kl");
        function Gl(e2, t2) {
          return null != e2 && null != t2 && (!(!G(e2) || !G(t2)) || !(!e2 || !t2));
        }
        __name(Gl, "Gl");
        function Zl(e2, t2, n2, r2) {
          var a2 = t2._private;
          a2.started = true, a2.startTime = n2 - a2.progress * a2.duration;
        }
        __name(Zl, "Zl");
        function $l(e2, t2) {
          var n2 = t2._private.aniEles, r2 = [];
          function a2(t3, n3) {
            var a3 = t3._private, i3 = a3.animation.current, o3 = a3.animation.queue, s3 = false;
            if (0 === i3.length) {
              var l3 = o3.shift();
              l3 && i3.push(l3);
            }
            for (var u2 = function(e3) {
              for (var t4 = e3.length - 1; t4 >= 0; t4--) {
                (0, e3[t4])();
              }
              e3.splice(0, e3.length);
            }, c2 = i3.length - 1; c2 >= 0; c2--) {
              var d2 = i3[c2], h2 = d2._private;
              h2.stopped ? (i3.splice(c2, 1), h2.hooked = false, h2.playing = false, h2.started = false, u2(h2.frames)) : (h2.playing || h2.applying) && (h2.playing && h2.applying && (h2.applying = false), h2.started || Zl(0, d2, e2), Kl(t3, d2, e2, n3), h2.applying && (h2.applying = false), u2(h2.frames), null != h2.step && h2.step(e2), d2.completed() && (i3.splice(c2, 1), h2.hooked = false, h2.playing = false, h2.started = false, u2(h2.completes)), s3 = true);
            }
            return n3 || 0 !== i3.length || 0 !== o3.length || r2.push(t3), s3;
          }
          __name(a2, "a");
          for (var i2 = false, o2 = 0; o2 < n2.length; o2++) {
            var s2 = a2(n2[o2]);
            i2 = i2 || s2;
          }
          var l2 = a2(t2, true);
          (i2 || l2) && (n2.length > 0 ? t2.notify("draw", n2) : t2.notify("draw")), n2.unmerge(r2), t2.emit("step");
        }
        __name($l, "$l");
        var Ql = { animate: xo.animate(), animation: xo.animation(), animated: xo.animated(), clearQueue: xo.clearQueue(), delay: xo.delay(), delayAnimation: xo.delayAnimation(), stop: xo.stop(), addToAnimationPool: /* @__PURE__ */ __name(function(e2) {
          this.styleEnabled() && this._private.aniEles.merge(e2);
        }, "addToAnimationPool"), stopAnimationLoop: /* @__PURE__ */ __name(function() {
          this._private.animationsRunning = false;
        }, "stopAnimationLoop"), startAnimationLoop: /* @__PURE__ */ __name(function() {
          var e2 = this;
          if (e2._private.animationsRunning = true, e2.styleEnabled()) {
            var t2 = e2.renderer();
            t2 && t2.beforeRender ? t2.beforeRender(function(t3, n2) {
              $l(n2, e2);
            }, t2.beforeRenderPriorities.animations) : (/* @__PURE__ */ __name(function t3() {
              e2._private.animationsRunning && Ie(function(n2) {
                $l(n2, e2), t3();
              });
            }, "t"))();
          }
        }, "startAnimationLoop") }, Jl = { qualifierCompare: /* @__PURE__ */ __name(function(e2, t2) {
          return null == e2 || null == t2 ? null == e2 && null == t2 : e2.sameText(t2);
        }, "qualifierCompare"), eventMatches: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = t2.qualifier;
          return null == r2 || e2 !== n2.target && Q(n2.target) && r2.matches(n2.target);
        }, "eventMatches"), addEventFields: /* @__PURE__ */ __name(function(e2, t2) {
          t2.cy = e2, t2.target = e2;
        }, "addEventFields"), callbackContext: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return null != t2.qualifier ? n2.target : e2;
        }, "callbackContext") }, eu = /* @__PURE__ */ __name(function(e2) {
          return W(e2) ? new as(e2) : e2;
        }, "eu"), tu = { createEmitter: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          return e2.emitter || (e2.emitter = new nl(Jl, this)), this;
        }, "createEmitter"), emitter: /* @__PURE__ */ __name(function() {
          return this._private.emitter;
        }, "emitter"), on: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return this.emitter().on(e2, eu(t2), n2), this;
        }, "on"), removeListener: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return this.emitter().removeListener(e2, eu(t2), n2), this;
        }, "removeListener"), removeAllListeners: /* @__PURE__ */ __name(function() {
          return this.emitter().removeAllListeners(), this;
        }, "removeAllListeners"), one: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return this.emitter().one(e2, eu(t2), n2), this;
        }, "one"), once: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return this.emitter().one(e2, eu(t2), n2), this;
        }, "once"), emit: /* @__PURE__ */ __name(function(e2, t2) {
          return this.emitter().emit(e2, t2), this;
        }, "emit"), emitAndNotify: /* @__PURE__ */ __name(function(e2, t2) {
          return this.emit(e2), this.notify(e2, t2), this;
        }, "emitAndNotify") };
        xo.eventAliasesOn(tu);
        var nu = { png: /* @__PURE__ */ __name(function(e2) {
          return e2 = e2 || {}, this._private.renderer.png(e2);
        }, "png"), jpg: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.renderer;
          return (e2 = e2 || {}).bg = e2.bg || "#fff", t2.jpg(e2);
        }, "jpg") };
        nu.jpeg = nu.jpg;
        var ru = { layout: /* @__PURE__ */ __name(function(e2) {
          var t2 = this;
          if (null != e2) if (null != e2.name) {
            var n2 = e2.name, r2 = t2.extension("layout", n2);
            if (null != r2) {
              var a2;
              a2 = W(e2.eles) ? t2.$(e2.eles) : null != e2.eles ? e2.eles : t2.$();
              var i2 = new r2(ge({}, e2, { cy: t2, eles: a2 }));
              return i2;
            }
            nt("No such layout `" + n2 + "` found.  Did you forget to import it and `cytoscape.use()` it?");
          } else nt("A `name` must be specified to make a layout");
          else nt("Layout options must be specified to make a layout");
        }, "layout") };
        ru.createLayout = ru.makeLayout = ru.layout;
        var au = { notify: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this._private;
          if (this.batching()) {
            n2.batchNotifications = n2.batchNotifications || {};
            var r2 = n2.batchNotifications[e2] = n2.batchNotifications[e2] || this.collection();
            null != t2 && r2.merge(t2);
          } else if (n2.notificationsEnabled) {
            var a2 = this.renderer();
            !this.destroyed() && a2 && a2.notify(e2, t2);
          }
        }, "notify"), notifications: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private;
          return void 0 === e2 ? t2.notificationsEnabled : (t2.notificationsEnabled = !!e2, this);
        }, "notifications"), noNotifications: /* @__PURE__ */ __name(function(e2) {
          this.notifications(false), e2(), this.notifications(true);
        }, "noNotifications"), batching: /* @__PURE__ */ __name(function() {
          return this._private.batchCount > 0;
        }, "batching"), startBatch: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          return null == e2.batchCount && (e2.batchCount = 0), 0 === e2.batchCount && (e2.batchStyleEles = this.collection(), e2.batchNotifications = {}), e2.batchCount++, this;
        }, "startBatch"), endBatch: /* @__PURE__ */ __name(function() {
          var e2 = this._private;
          if (0 === e2.batchCount) return this;
          if (e2.batchCount--, 0 === e2.batchCount) {
            e2.batchStyleEles.updateStyle();
            var t2 = this.renderer();
            Object.keys(e2.batchNotifications).forEach(function(n2) {
              var r2 = e2.batchNotifications[n2];
              r2.empty() ? t2.notify(n2) : t2.notify(n2, r2);
            });
          }
          return this;
        }, "endBatch"), batch: /* @__PURE__ */ __name(function(e2) {
          return this.startBatch(), e2(), this.endBatch(), this;
        }, "batch"), batchData: /* @__PURE__ */ __name(function(e2) {
          var t2 = this;
          return this.batch(function() {
            for (var n2 = Object.keys(e2), r2 = 0; r2 < n2.length; r2++) {
              var a2 = n2[r2], i2 = e2[a2];
              t2.getElementById(a2).data(i2);
            }
          });
        }, "batchData") }, iu = ut({ hideEdgesOnViewport: false, textureOnViewport: false, motionBlur: false, motionBlurOpacity: 0.05, pixelRatio: void 0, desktopTapThreshold: 4, touchTapThreshold: 8, wheelSensitivity: 1, debug: false, showFps: false, webgl: false, webglDebug: false, webglDebugShowAtlases: false, webglTexSize: 2048, webglTexRows: 36, webglTexRowsNodes: 18, webglBatchSize: 2048, webglTexPerBatch: 14, webglBgColor: [255, 255, 255] }), ou = { renderTo: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          return this._private.renderer.renderTo(e2, t2, n2, r2), this;
        }, "renderTo"), renderer: /* @__PURE__ */ __name(function() {
          return this._private.renderer;
        }, "renderer"), forceRender: /* @__PURE__ */ __name(function() {
          return this.notify("draw"), this;
        }, "forceRender"), resize: /* @__PURE__ */ __name(function() {
          return this.invalidateSize(), this.emitAndNotify("resize"), this;
        }, "resize"), initRenderer: /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = t2.extension("renderer", e2.name);
          if (null != n2) {
            void 0 !== e2.wheelSensitivity && at("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
            var r2 = iu(e2);
            r2.cy = t2, t2._private.renderer = new n2(r2), this.notify("init");
          } else nt("Can not initialise: No such renderer `".concat(e2.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
        }, "initRenderer"), destroyRenderer: /* @__PURE__ */ __name(function() {
          var e2 = this;
          e2.notify("destroy");
          var t2 = e2.container();
          if (t2) for (t2._cyreg = null; t2.childNodes.length > 0; ) t2.removeChild(t2.childNodes[0]);
          e2._private.renderer = null, e2.mutableElements().forEach(function(e3) {
            var t3 = e3._private;
            t3.rscratch = {}, t3.rstyle = {}, t3.animation.current = [], t3.animation.queue = [];
          });
        }, "destroyRenderer"), onRender: /* @__PURE__ */ __name(function(e2) {
          return this.on("render", e2);
        }, "onRender"), offRender: /* @__PURE__ */ __name(function(e2) {
          return this.off("render", e2);
        }, "offRender") };
        ou.invalidateDimensions = ou.resize;
        var su = { collection: /* @__PURE__ */ __name(function(e2, t2) {
          return W(e2) ? this.$(e2) : $(e2) ? e2.collection() : H(e2) ? (t2 || (t2 = {}), new Ol(this, e2, t2.unique, t2.removed)) : new Ol(this);
        }, "collection"), nodes: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.$(function(e3) {
            return e3.isNode();
          });
          return e2 ? t2.filter(e2) : t2;
        }, "nodes"), edges: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.$(function(e3) {
            return e3.isEdge();
          });
          return e2 ? t2.filter(e2) : t2;
        }, "edges"), $: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.elements;
          return e2 ? t2.filter(e2) : t2.spawnSelf();
        }, "$"), mutableElements: /* @__PURE__ */ __name(function() {
          return this._private.elements;
        }, "mutableElements") };
        su.elements = su.filter = su.$;
        var lu = {}, uu = "t";
        lu.apply = function(e2) {
          for (var t2 = this, n2 = t2._private.cy.collection(), r2 = 0; r2 < e2.length; r2++) {
            var a2 = e2[r2], i2 = t2.getContextMeta(a2);
            if (!i2.empty) {
              var o2 = t2.getContextStyle(i2), s2 = t2.applyContextStyle(i2, o2, a2);
              a2._private.appliedInitStyle ? t2.updateTransitions(a2, s2.diffProps) : a2._private.appliedInitStyle = true, t2.updateStyleHints(a2) && n2.push(a2);
            }
          }
          return n2;
        }, lu.getPropertiesDiff = function(e2, t2) {
          var n2 = this, r2 = n2._private.propDiffs = n2._private.propDiffs || {}, a2 = e2 + "-" + t2, i2 = r2[a2];
          if (i2) return i2;
          for (var o2 = [], s2 = {}, l2 = 0; l2 < n2.length; l2++) {
            var u2 = n2[l2], c2 = e2[l2] === uu, d2 = t2[l2] === uu, h2 = c2 !== d2, f2 = u2.mappedProperties.length > 0;
            if (h2 || d2 && f2) {
              var p2 = void 0;
              h2 && f2 || h2 ? p2 = u2.properties : f2 && (p2 = u2.mappedProperties);
              for (var v2 = 0; v2 < p2.length; v2++) {
                for (var g2 = p2[v2], y2 = g2.name, m2 = false, b2 = l2 + 1; b2 < n2.length; b2++) {
                  var x2 = n2[b2];
                  if (t2[b2] === uu && (m2 = null != x2.properties[g2.name])) break;
                }
                s2[y2] || m2 || (s2[y2] = true, o2.push(y2));
              }
            }
          }
          return r2[a2] = o2, o2;
        }, lu.getContextMeta = function(e2) {
          for (var t2, n2 = this, r2 = "", a2 = e2._private.styleCxtKey || "", i2 = 0; i2 < n2.length; i2++) {
            var o2 = n2[i2];
            r2 += o2.selector && o2.selector.matches(e2) ? uu : "f";
          }
          return t2 = n2.getPropertiesDiff(a2, r2), e2._private.styleCxtKey = r2, { key: r2, diffPropNames: t2, empty: 0 === t2.length };
        }, lu.getContextStyle = function(e2) {
          var t2 = e2.key, n2 = this._private.contextStyles = this._private.contextStyles || {};
          if (n2[t2]) return n2[t2];
          for (var r2 = { _private: { key: t2 } }, a2 = 0; a2 < this.length; a2++) {
            var i2 = this[a2];
            if (t2[a2] === uu) for (var o2 = 0; o2 < i2.properties.length; o2++) {
              var s2 = i2.properties[o2];
              r2[s2.name] = s2;
            }
          }
          return n2[t2] = r2, r2;
        }, lu.applyContextStyle = function(e2, t2, n2) {
          for (var r2 = e2.diffPropNames, a2 = {}, i2 = this.types, o2 = 0; o2 < r2.length; o2++) {
            var s2 = r2[o2], l2 = t2[s2], u2 = n2.pstyle(s2);
            if (!l2) {
              if (!u2) continue;
              l2 = u2.bypass ? { name: s2, deleteBypassed: true } : { name: s2, delete: true };
            }
            if (u2 !== l2) {
              if (l2.mapped === i2.fn && null != u2 && null != u2.mapping && u2.mapping.value === l2.value) {
                var c2 = u2.mapping;
                if ((c2.fnValue = l2.value(n2)) === c2.prevFnValue) continue;
              }
              var d2 = a2[s2] = { prev: u2 };
              this.applyParsedProperty(n2, l2), d2.next = n2.pstyle(s2), d2.next && d2.next.bypass && (d2.next = d2.next.bypassed);
            }
          }
          return { diffProps: a2 };
        }, lu.updateStyleHints = function(e2) {
          var t2 = e2._private, n2 = this, r2 = n2.propertyGroupNames, a2 = n2.propertyGroupKeys, i2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
            return n2.getPropertiesHash(e3, t3, r3);
          }, "i"), o2 = t2.styleKey;
          if (e2.removed()) return false;
          var s2 = "nodes" === t2.group, l2 = e2._private.style;
          r2 = Object.keys(l2);
          for (var u2 = 0; u2 < a2.length; u2++) {
            var c2 = a2[u2];
            t2.styleKeys[c2] = [Le, ze];
          }
          for (var d2, h2 = function(e3, n3) {
            return t2.styleKeys[n3][0] = Ve(e3, t2.styleKeys[n3][0]);
          }, f2 = function(e3, n3) {
            return t2.styleKeys[n3][1] = Fe(e3, t2.styleKeys[n3][1]);
          }, p2 = function(e3, t3) {
            h2(e3, t3), f2(e3, t3);
          }, v2 = function(e3, t3) {
            for (var n3 = 0; n3 < e3.length; n3++) {
              var r3 = e3.charCodeAt(n3);
              h2(r3, t3), f2(r3, t3);
            }
          }, g2 = 0; g2 < r2.length; g2++) {
            var y2 = r2[g2], m2 = l2[y2];
            if (null != m2) {
              var b2 = this.properties[y2], x2 = b2.type, w2 = b2.groupKey, E2 = void 0;
              null != b2.hashOverride ? E2 = b2.hashOverride(e2, m2) : null != m2.pfValue && (E2 = m2.pfValue);
              var k2 = null == b2.enums ? m2.value : null, T2 = null != E2, C2 = T2 || null != k2, P2 = m2.units;
              if (x2.number && C2 && !x2.multiple) p2(-128 < (d2 = T2 ? E2 : k2) && d2 < 128 && Math.floor(d2) !== d2 ? 2e9 - (1024 * d2 | 0) : d2, w2), T2 || null == P2 || v2(P2, w2);
              else v2(m2.strValue, w2);
            }
          }
          for (var S2, B2, D2 = [Le, ze], _2 = 0; _2 < a2.length; _2++) {
            var A2 = a2[_2], M2 = t2.styleKeys[A2];
            D2[0] = Ve(M2[0], D2[0]), D2[1] = Fe(M2[1], D2[1]);
          }
          t2.styleKey = (S2 = D2[0], B2 = D2[1], 2097152 * S2 + B2);
          var R2 = t2.styleKeys;
          t2.labelDimsKey = Xe(R2.labelDimensions);
          var I2 = i2(e2, ["label"], R2.labelDimensions);
          if (t2.labelKey = Xe(I2), t2.labelStyleKey = Xe(je(R2.commonLabel, I2)), !s2) {
            var N2 = i2(e2, ["source-label"], R2.labelDimensions);
            t2.sourceLabelKey = Xe(N2), t2.sourceLabelStyleKey = Xe(je(R2.commonLabel, N2));
            var L2 = i2(e2, ["target-label"], R2.labelDimensions);
            t2.targetLabelKey = Xe(L2), t2.targetLabelStyleKey = Xe(je(R2.commonLabel, L2));
          }
          if (s2) {
            var z2 = t2.styleKeys, O2 = z2.nodeBody, V2 = z2.nodeBorder, F2 = z2.nodeOutline, X2 = z2.backgroundImage, j2 = z2.compound, Y2 = z2.pie, q2 = z2.stripe, W2 = [O2, V2, F2, X2, j2, Y2, q2].filter(function(e3) {
              return null != e3;
            }).reduce(je, [Le, ze]);
            t2.nodeKey = Xe(W2), t2.hasPie = null != Y2 && Y2[0] !== Le && Y2[1] !== ze, t2.hasStripe = null != q2 && q2[0] !== Le && q2[1] !== ze;
          }
          return o2 !== t2.styleKey;
        }, lu.clearStyleHints = function(e2) {
          var t2 = e2._private;
          t2.styleCxtKey = "", t2.styleKeys = {}, t2.styleKey = null, t2.labelKey = null, t2.labelStyleKey = null, t2.sourceLabelKey = null, t2.sourceLabelStyleKey = null, t2.targetLabelKey = null, t2.targetLabelStyleKey = null, t2.nodeKey = null, t2.hasPie = null, t2.hasStripe = null;
        }, lu.applyParsedProperty = function(e2, t2) {
          var n2, r2 = this, a2 = t2, i2 = e2._private.style, o2 = r2.types, s2 = r2.properties[a2.name].type, l2 = a2.bypass, u2 = i2[a2.name], c2 = u2 && u2.bypass, d2 = e2._private, h2 = "mapping", f2 = /* @__PURE__ */ __name(function(e3) {
            return null == e3 ? null : null != e3.pfValue ? e3.pfValue : e3.value;
          }, "f"), p2 = /* @__PURE__ */ __name(function() {
            var t3 = f2(u2), n3 = f2(a2);
            r2.checkTriggers(e2, a2.name, t3, n3);
          }, "p");
          if ("curve-style" === t2.name && e2.isEdge() && ("bezier" !== t2.value && e2.isLoop() || "haystack" === t2.value && (e2.source().isParent() || e2.target().isParent())) && (a2 = t2 = this.parse(t2.name, "bezier", l2)), a2.delete) return i2[a2.name] = void 0, p2(), true;
          if (a2.deleteBypassed) return u2 ? !!u2.bypass && (u2.bypassed = void 0, p2(), true) : (p2(), true);
          if (a2.deleteBypass) return u2 ? !!u2.bypass && (i2[a2.name] = u2.bypassed, p2(), true) : (p2(), true);
          var v2 = /* @__PURE__ */ __name(function() {
            at("Do not assign mappings to elements without corresponding data (i.e. ele `" + e2.id() + "` has no mapping for property `" + a2.name + "` with data field `" + a2.field + "`); try a `[" + a2.field + "]` selector to limit scope to elements with `" + a2.field + "` defined");
          }, "v");
          switch (a2.mapped) {
            case o2.mapData:
              for (var g2, y2 = a2.field.split("."), m2 = d2.data, b2 = 0; b2 < y2.length && m2; b2++) {
                m2 = m2[y2[b2]];
              }
              if (null == m2) return v2(), false;
              if (!G(m2)) return at("Do not use continuous mappers without specifying numeric data (i.e. `" + a2.field + ": " + m2 + "` for `" + e2.id() + "` is non-numeric)"), false;
              var x2 = a2.fieldMax - a2.fieldMin;
              if ((g2 = 0 === x2 ? 0 : (m2 - a2.fieldMin) / x2) < 0 ? g2 = 0 : g2 > 1 && (g2 = 1), s2.color) {
                var w2 = a2.valueMin[0], E2 = a2.valueMax[0], k2 = a2.valueMin[1], T2 = a2.valueMax[1], C2 = a2.valueMin[2], P2 = a2.valueMax[2], S2 = null == a2.valueMin[3] ? 1 : a2.valueMin[3], B2 = null == a2.valueMax[3] ? 1 : a2.valueMax[3], D2 = [Math.round(w2 + (E2 - w2) * g2), Math.round(k2 + (T2 - k2) * g2), Math.round(C2 + (P2 - C2) * g2), Math.round(S2 + (B2 - S2) * g2)];
                n2 = { bypass: a2.bypass, name: a2.name, value: D2, strValue: "rgb(" + D2[0] + ", " + D2[1] + ", " + D2[2] + ")" };
              } else {
                if (!s2.number) return false;
                var _2 = a2.valueMin + (a2.valueMax - a2.valueMin) * g2;
                n2 = this.parse(a2.name, _2, a2.bypass, h2);
              }
              if (!n2) return v2(), false;
              n2.mapping = a2, a2 = n2;
              break;
            case o2.data:
              for (var A2 = a2.field.split("."), M2 = d2.data, R2 = 0; R2 < A2.length && M2; R2++) {
                M2 = M2[A2[R2]];
              }
              if (null != M2 && (n2 = this.parse(a2.name, M2, a2.bypass, h2)), !n2) return v2(), false;
              n2.mapping = a2, a2 = n2;
              break;
            case o2.fn:
              var I2 = a2.value, N2 = null != a2.fnValue ? a2.fnValue : I2(e2);
              if (a2.prevFnValue = N2, null == N2) return at("Custom function mappers may not return null (i.e. `" + a2.name + "` for ele `" + e2.id() + "` is null)"), false;
              if (!(n2 = this.parse(a2.name, N2, a2.bypass, h2))) return at("Custom function mappers may not return invalid values for the property type (i.e. `" + a2.name + "` for ele `" + e2.id() + "` is invalid)"), false;
              n2.mapping = it(a2), a2 = n2;
              break;
            case void 0:
              break;
            default:
              return false;
          }
          return l2 ? (a2.bypassed = c2 ? u2.bypassed : u2, i2[a2.name] = a2) : c2 ? u2.bypassed = a2 : i2[a2.name] = a2, p2(), true;
        }, lu.cleanElements = function(e2, t2) {
          for (var n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            if (this.clearStyleHints(r2), r2.dirtyCompoundBoundsCache(), r2.dirtyBoundingBoxCache(), t2) for (var a2 = r2._private.style, i2 = Object.keys(a2), o2 = 0; o2 < i2.length; o2++) {
              var s2 = i2[o2], l2 = a2[s2];
              null != l2 && (l2.bypass ? l2.bypassed = null : a2[s2] = null);
            }
            else r2._private.style = {};
          }
        }, lu.update = function() {
          this._private.cy.mutableElements().updateStyle();
        }, lu.updateTransitions = function(e2, t2) {
          var n2 = this, r2 = e2._private, a2 = e2.pstyle("transition-property").value, i2 = e2.pstyle("transition-duration").pfValue, o2 = e2.pstyle("transition-delay").pfValue;
          if (a2.length > 0 && i2 > 0) {
            for (var s2 = {}, l2 = false, u2 = 0; u2 < a2.length; u2++) {
              var c2 = a2[u2], d2 = e2.pstyle(c2), h2 = t2[c2];
              if (h2) {
                var f2 = h2.prev, p2 = null != h2.next ? h2.next : d2, v2 = false, g2 = void 0, y2 = 1e-6;
                f2 && (G(f2.pfValue) && G(p2.pfValue) ? (v2 = p2.pfValue - f2.pfValue, g2 = f2.pfValue + y2 * v2) : G(f2.value) && G(p2.value) ? (v2 = p2.value - f2.value, g2 = f2.value + y2 * v2) : H(f2.value) && H(p2.value) && (v2 = f2.value[0] !== p2.value[0] || f2.value[1] !== p2.value[1] || f2.value[2] !== p2.value[2], g2 = f2.strValue), v2 && (s2[c2] = p2.strValue, this.applyBypass(e2, c2, g2), l2 = true));
              }
            }
            if (!l2) return;
            r2.transitioning = true, new Hr(function(t3) {
              o2 > 0 ? e2.delayAnimation(o2).play().promise().then(t3) : t3();
            }).then(function() {
              return e2.animation({ style: s2, duration: i2, easing: e2.pstyle("transition-timing-function").value, queue: false }).play().promise();
            }).then(function() {
              n2.removeBypasses(e2, a2), e2.emitAndNotify("style"), r2.transitioning = false;
            });
          } else r2.transitioning && (this.removeBypasses(e2, a2), e2.emitAndNotify("style"), r2.transitioning = false);
        }, lu.checkTrigger = function(e2, t2, n2, r2, a2, i2) {
          var o2 = this.properties[t2], s2 = a2(o2);
          e2.removed() || null != s2 && s2(n2, r2, e2) && i2(o2);
        }, lu.checkZOrderTrigger = function(e2, t2, n2, r2) {
          var a2 = this;
          this.checkTrigger(e2, t2, n2, r2, function(e3) {
            return e3.triggersZOrder;
          }, function() {
            a2._private.cy.notify("zorder", e2);
          });
        }, lu.checkBoundsTrigger = function(e2, t2, n2, r2) {
          this.checkTrigger(e2, t2, n2, r2, function(e3) {
            return e3.triggersBounds;
          }, function(t3) {
            e2.dirtyCompoundBoundsCache(), e2.dirtyBoundingBoxCache();
          });
        }, lu.checkConnectedEdgesBoundsTrigger = function(e2, t2, n2, r2) {
          this.checkTrigger(e2, t2, n2, r2, function(e3) {
            return e3.triggersBoundsOfConnectedEdges;
          }, function(t3) {
            e2.connectedEdges().forEach(function(e3) {
              e3.dirtyBoundingBoxCache();
            });
          });
        }, lu.checkParallelEdgesBoundsTrigger = function(e2, t2, n2, r2) {
          this.checkTrigger(e2, t2, n2, r2, function(e3) {
            return e3.triggersBoundsOfParallelEdges;
          }, function(t3) {
            e2.parallelEdges().forEach(function(e3) {
              e3.dirtyBoundingBoxCache();
            });
          });
        }, lu.checkTriggers = function(e2, t2, n2, r2) {
          e2.dirtyStyleCache(), this.checkZOrderTrigger(e2, t2, n2, r2), this.checkBoundsTrigger(e2, t2, n2, r2), this.checkConnectedEdgesBoundsTrigger(e2, t2, n2, r2), this.checkParallelEdgesBoundsTrigger(e2, t2, n2, r2);
        };
        var cu = { applyBypass: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = [];
          if ("*" === t2 || "**" === t2) {
            if (void 0 !== n2) for (var i2 = 0; i2 < this.properties.length; i2++) {
              var o2 = this.properties[i2].name, s2 = this.parse(o2, n2, true);
              s2 && a2.push(s2);
            }
          } else if (W(t2)) {
            var l2 = this.parse(t2, n2, true);
            l2 && a2.push(l2);
          } else {
            if (!K(t2)) return false;
            var u2 = t2;
            r2 = n2;
            for (var c2 = Object.keys(u2), d2 = 0; d2 < c2.length; d2++) {
              var h2 = c2[d2], f2 = u2[h2];
              if (void 0 === f2 && (f2 = u2[oe(h2)]), void 0 !== f2) {
                var p2 = this.parse(h2, f2, true);
                p2 && a2.push(p2);
              }
            }
          }
          if (0 === a2.length) return false;
          for (var v2 = false, g2 = 0; g2 < e2.length; g2++) {
            for (var y2 = e2[g2], m2 = {}, b2 = void 0, x2 = 0; x2 < a2.length; x2++) {
              var w2 = a2[x2];
              if (r2) {
                var E2 = y2.pstyle(w2.name);
                b2 = m2[w2.name] = { prev: E2 };
              }
              v2 = this.applyParsedProperty(y2, it(w2)) || v2, r2 && (b2.next = y2.pstyle(w2.name));
            }
            v2 && this.updateStyleHints(y2), r2 && this.updateTransitions(y2, m2, true);
          }
          return v2;
        }, "applyBypass"), overrideBypass: /* @__PURE__ */ __name(function(e2, t2, n2) {
          t2 = ie(t2);
          for (var r2 = 0; r2 < e2.length; r2++) {
            var a2 = e2[r2], i2 = a2._private.style[t2], o2 = this.properties[t2].type, s2 = o2.color, l2 = o2.mutiple, u2 = i2 ? null != i2.pfValue ? i2.pfValue : i2.value : null;
            i2 && i2.bypass ? (i2.value = n2, null != i2.pfValue && (i2.pfValue = n2), i2.strValue = s2 ? "rgb(" + n2.join(",") + ")" : l2 ? n2.join(" ") : "" + n2, this.updateStyleHints(a2)) : this.applyBypass(a2, t2, n2), this.checkTriggers(a2, t2, u2, n2);
          }
        }, "overrideBypass"), removeAllBypasses: /* @__PURE__ */ __name(function(e2, t2) {
          return this.removeBypasses(e2, this.propertyNames, t2);
        }, "removeAllBypasses"), removeBypasses: /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = 0; r2 < e2.length; r2++) {
            for (var a2 = e2[r2], i2 = {}, o2 = 0; o2 < t2.length; o2++) {
              var s2 = t2[o2], l2 = this.properties[s2], u2 = a2.pstyle(l2.name);
              if (u2 && u2.bypass) {
                var c2 = this.parse(s2, "", true), d2 = i2[l2.name] = { prev: u2 };
                this.applyParsedProperty(a2, c2), d2.next = a2.pstyle(l2.name);
              }
            }
            this.updateStyleHints(a2), n2 && this.updateTransitions(a2, i2, true);
          }
        }, "removeBypasses") }, du = { getEmSizeInPixels: /* @__PURE__ */ __name(function() {
          var e2 = this.containerCss("font-size");
          return null != e2 ? parseFloat(e2) : 1;
        }, "getEmSizeInPixels"), containerCss: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private.cy, n2 = t2.container(), r2 = t2.window();
          if (r2 && n2 && r2.getComputedStyle) return r2.getComputedStyle(n2).getPropertyValue(e2);
        }, "containerCss") }, hu = { getRenderedStyle: /* @__PURE__ */ __name(function(e2, t2) {
          return t2 ? this.getStylePropertyValue(e2, t2, true) : this.getRawStyle(e2, true);
        }, "getRenderedStyle"), getRawStyle: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this;
          if (e2 = e2[0]) {
            for (var r2 = {}, a2 = 0; a2 < n2.properties.length; a2++) {
              var i2 = n2.properties[a2], o2 = n2.getStylePropertyValue(e2, i2.name, t2);
              null != o2 && (r2[i2.name] = o2, r2[oe(i2.name)] = o2);
            }
            return r2;
          }
        }, "getRawStyle"), getIndexedStyle: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = e2.pstyle(t2)[n2][r2];
          return null != a2 ? a2 : e2.cy().style().getDefaultProperty(t2)[n2][0];
        }, "getIndexedStyle"), getStylePropertyValue: /* @__PURE__ */ __name(function(e2, t2, n2) {
          if (e2 = e2[0]) {
            var r2 = this.properties[t2];
            r2.alias && (r2 = r2.pointsTo);
            var a2 = r2.type, i2 = e2.pstyle(r2.name);
            if (i2) {
              var o2 = i2.value, s2 = i2.units, l2 = i2.strValue;
              if (n2 && a2.number && null != o2 && G(o2)) {
                var u2 = e2.cy().zoom(), c2 = /* @__PURE__ */ __name(function(e3) {
                  return e3 * u2;
                }, "c"), d2 = /* @__PURE__ */ __name(function(e3, t3) {
                  return c2(e3) + t3;
                }, "d"), h2 = H(o2);
                return (h2 ? s2.every(function(e3) {
                  return null != e3;
                }) : null != s2) ? h2 ? o2.map(function(e3, t3) {
                  return d2(e3, s2[t3]);
                }).join(" ") : d2(o2, s2) : h2 ? o2.map(function(e3) {
                  return W(e3) ? e3 : "" + c2(e3);
                }).join(" ") : "" + c2(o2);
              }
              if (null != l2) return l2;
            }
            return null;
          }
        }, "getStylePropertyValue"), getAnimationStartStyle: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = {}, r2 = 0; r2 < t2.length; r2++) {
            var a2 = t2[r2].name, i2 = e2.pstyle(a2);
            void 0 !== i2 && (i2 = K(i2) ? this.parse(a2, i2.strValue) : this.parse(a2, i2)), i2 && (n2[a2] = i2);
          }
          return n2;
        }, "getAnimationStartStyle"), getPropsList: /* @__PURE__ */ __name(function(e2) {
          var t2 = [], n2 = e2, r2 = this.properties;
          if (n2) for (var a2 = Object.keys(n2), i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2], s2 = n2[o2], l2 = r2[o2] || r2[ie(o2)], u2 = this.parse(l2.name, s2);
            u2 && t2.push(u2);
          }
          return t2;
        }, "getPropsList"), getNonDefaultPropertiesHash: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2, a2, i2, o2, s2, l2, u2 = n2.slice();
          for (s2 = 0; s2 < t2.length; s2++) if (r2 = t2[s2], null != (a2 = e2.pstyle(r2, false))) if (null != a2.pfValue) u2[0] = Ve(o2, u2[0]), u2[1] = Fe(o2, u2[1]);
          else for (i2 = a2.strValue, l2 = 0; l2 < i2.length; l2++) o2 = i2.charCodeAt(l2), u2[0] = Ve(o2, u2[0]), u2[1] = Fe(o2, u2[1]);
          return u2;
        }, "getNonDefaultPropertiesHash") };
        hu.getPropertiesHash = hu.getNonDefaultPropertiesHash;
        var fu = { appendFromJson: /* @__PURE__ */ __name(function(e2) {
          for (var t2 = this, n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2], a2 = r2.selector, i2 = r2.style || r2.css, o2 = Object.keys(i2);
            t2.selector(a2);
            for (var s2 = 0; s2 < o2.length; s2++) {
              var l2 = o2[s2], u2 = i2[l2];
              t2.css(l2, u2);
            }
          }
          return t2;
        }, "appendFromJson"), fromJson: /* @__PURE__ */ __name(function(e2) {
          var t2 = this;
          return t2.resetToDefault(), t2.appendFromJson(e2), t2;
        }, "fromJson"), json: /* @__PURE__ */ __name(function() {
          for (var e2 = [], t2 = this.defaultLength; t2 < this.length; t2++) {
            for (var n2 = this[t2], r2 = n2.selector, a2 = n2.properties, i2 = {}, o2 = 0; o2 < a2.length; o2++) {
              var s2 = a2[o2];
              i2[s2.name] = s2.strValue;
            }
            e2.push({ selector: r2 ? r2.toString() : "core", style: i2 });
          }
          return e2;
        }, "json") }, pu = { appendFromString: /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2, a2 = this, i2 = "" + e2;
          function o2() {
            i2 = i2.length > t2.length ? i2.substr(t2.length) : "";
          }
          __name(o2, "o");
          function s2() {
            n2 = n2.length > r2.length ? n2.substr(r2.length) : "";
          }
          __name(s2, "s");
          for (i2 = i2.replace(/[/][*](\s|.)+?[*][/]/g, ""); ; ) {
            if (i2.match(/^\s*$/)) break;
            var l2 = i2.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
            if (!l2) {
              at("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + i2);
              break;
            }
            t2 = l2[0];
            var u2 = l2[1];
            if ("core" !== u2) {
              if (new as(u2).invalid) {
                at("Skipping parsing of block: Invalid selector found in string stylesheet: " + u2), o2();
                continue;
              }
            }
            var c2 = l2[2], d2 = false;
            n2 = c2;
            for (var h2 = []; ; ) {
              if (n2.match(/^\s*$/)) break;
              var f2 = n2.match(/^\s*(.+?)\s*:\s*(.+?)(?:\s*;|\s*$)/);
              if (!f2) {
                at("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + c2), d2 = true;
                break;
              }
              r2 = f2[0];
              var p2 = f2[1], v2 = f2[2];
              if (this.properties[p2]) a2.parse(p2, v2) ? (h2.push({ name: p2, val: v2 }), s2()) : (at("Skipping property: Invalid property definition in: " + r2), s2());
              else at("Skipping property: Invalid property name in: " + r2), s2();
            }
            if (d2) {
              o2();
              break;
            }
            a2.selector(u2);
            for (var g2 = 0; g2 < h2.length; g2++) {
              var y2 = h2[g2];
              a2.css(y2.name, y2.val);
            }
            o2();
          }
          return a2;
        }, "appendFromString"), fromString: /* @__PURE__ */ __name(function(e2) {
          var t2 = this;
          return t2.resetToDefault(), t2.appendFromString(e2), t2;
        }, "fromString") }, vu = {};
        !function() {
          var e2 = ce, t2 = he, n2 = pe, r2 = /* @__PURE__ */ __name(function(e3) {
            return "^" + e3 + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
          }, "r"), a2 = /* @__PURE__ */ __name(function(r3) {
            var a3 = e2 + "|\\w+|" + t2 + "|" + n2 + "|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
            return "^" + r3 + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e2 + ")\\s*\\,\\s*(" + e2 + ")\\s*,\\s*(" + a3 + ")\\s*\\,\\s*(" + a3 + ")\\)$";
          }, "a"), i2 = [`^url\\s*\\(\\s*['"]?(.+?)['"]?\\s*\\)$`, "^(none)$", "^(.+)$"];
          vu.types = { time: { number: true, min: 0, units: "s|ms", implicitUnits: "ms" }, percent: { number: true, min: 0, max: 100, units: "%", implicitUnits: "%" }, percentages: { number: true, min: 0, max: 100, units: "%", implicitUnits: "%", multiple: true }, zeroOneNumber: { number: true, min: 0, max: 1, unitless: true }, zeroOneNumbers: { number: true, min: 0, max: 1, unitless: true, multiple: true }, nOneOneNumber: { number: true, min: -1, max: 1, unitless: true }, nonNegativeInt: { number: true, min: 0, integer: true, unitless: true }, nonNegativeNumber: { number: true, min: 0, unitless: true }, position: { enums: ["parent", "origin"] }, nodeSize: { number: true, min: 0, enums: ["label"] }, number: { number: true, unitless: true }, numbers: { number: true, unitless: true, multiple: true }, positiveNumber: { number: true, unitless: true, min: 0, strictMin: true }, size: { number: true, min: 0 }, bidirectionalSize: { number: true }, bidirectionalSizeMaybePercent: { number: true, allowPercent: true }, bidirectionalSizes: { number: true, multiple: true }, sizeMaybePercent: { number: true, min: 0, allowPercent: true }, axisDirection: { enums: ["horizontal", "leftward", "rightward", "vertical", "upward", "downward", "auto"] }, axisDirectionExplicit: { enums: ["leftward", "rightward", "upward", "downward"] }, axisDirectionPrimary: { enums: ["horizontal", "vertical"] }, paddingRelativeTo: { enums: ["width", "height", "average", "min", "max"] }, bgWH: { number: true, min: 0, allowPercent: true, enums: ["auto"], multiple: true }, bgPos: { number: true, allowPercent: true, multiple: true }, bgRelativeTo: { enums: ["inner", "include-padding"], multiple: true }, bgRepeat: { enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"], multiple: true }, bgFit: { enums: ["none", "contain", "cover"], multiple: true }, bgCrossOrigin: { enums: ["anonymous", "use-credentials", "null"], multiple: true }, bgClip: { enums: ["none", "node"], multiple: true }, bgContainment: { enums: ["inside", "over"], multiple: true }, boxSelection: { enums: ["contain", "overlap", "none"] }, color: { color: true }, colors: { color: true, multiple: true }, fill: { enums: ["solid", "linear-gradient", "radial-gradient"] }, bool: { enums: ["yes", "no"] }, bools: { enums: ["yes", "no"], multiple: true }, lineStyle: { enums: ["solid", "dotted", "dashed"] }, lineCap: { enums: ["butt", "round", "square"] }, linePosition: { enums: ["center", "inside", "outside"] }, lineJoin: { enums: ["round", "bevel", "miter"] }, borderStyle: { enums: ["solid", "dotted", "dashed", "double"] }, curveStyle: { enums: ["bezier", "unbundled-bezier", "haystack", "segments", "straight", "straight-triangle", "taxi", "round-segments", "round-taxi"] }, radiusType: { enums: ["arc-radius", "influence-radius"], multiple: true }, fontFamily: { regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$' }, fontStyle: { enums: ["italic", "normal", "oblique"] }, fontWeight: { enums: ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "800", "900", 100, 200, 300, 400, 500, 600, 700, 800, 900] }, textDecoration: { enums: ["none", "underline", "overline", "line-through"] }, textTransform: { enums: ["none", "uppercase", "lowercase"] }, textWrap: { enums: ["none", "wrap", "ellipsis"] }, textOverflowWrap: { enums: ["whitespace", "anywhere"] }, textBackgroundShape: { enums: ["rectangle", "roundrectangle", "round-rectangle", "circle"] }, nodeShape: { enums: ["rectangle", "roundrectangle", "round-rectangle", "cutrectangle", "cut-rectangle", "bottomroundrectangle", "bottom-round-rectangle", "barrel", "ellipse", "triangle", "round-triangle", "square", "pentagon", "round-pentagon", "hexagon", "round-hexagon", "concavehexagon", "concave-hexagon", "heptagon", "round-heptagon", "octagon", "round-octagon", "tag", "round-tag", "star", "diamond", "round-diamond", "vee", "rhomboid", "right-rhomboid", "polygon"] }, overlayShape: { enums: ["roundrectangle", "round-rectangle", "ellipse"] }, cornerRadius: { number: true, min: 0, units: "px|em", implicitUnits: "px", enums: ["auto"] }, compoundIncludeLabels: { enums: ["include", "exclude"] }, arrowShape: { enums: ["tee", "triangle", "triangle-tee", "circle-triangle", "triangle-cross", "triangle-backcurve", "vee", "square", "circle", "diamond", "chevron", "none"] }, arrowFill: { enums: ["filled", "hollow"] }, arrowWidth: { number: true, units: "%|px|em", implicitUnits: "px", enums: ["match-line"] }, display: { enums: ["element", "none"] }, visibility: { enums: ["hidden", "visible"] }, zCompoundDepth: { enums: ["bottom", "orphan", "auto", "top"] }, zIndexCompare: { enums: ["auto", "manual"] }, valign: { enums: ["top", "center", "bottom"] }, halign: { enums: ["left", "center", "right"] }, justification: { enums: ["left", "center", "right", "auto"] }, text: { string: true }, data: { mapping: true, regex: r2("data") }, layoutData: { mapping: true, regex: r2("layoutData") }, scratch: { mapping: true, regex: r2("scratch") }, mapData: { mapping: true, regex: a2("mapData") }, mapLayoutData: { mapping: true, regex: a2("mapLayoutData") }, mapScratch: { mapping: true, regex: a2("mapScratch") }, fn: { mapping: true, fn: true }, url: { regexes: i2, singleRegexMatchValue: true }, urls: { regexes: i2, singleRegexMatchValue: true, multiple: true }, propList: { propList: true }, angle: { number: true, units: "deg|rad", implicitUnits: "rad" }, textRotation: { number: true, units: "deg|rad", implicitUnits: "rad", enums: ["none", "autorotate"] }, polygonPointList: { number: true, multiple: true, evenMultiple: true, min: -1, max: 1, unitless: true }, edgeDistances: { enums: ["intersection", "node-position", "endpoints"] }, edgeEndpoint: { number: true, multiple: true, units: "%|px|em|deg|rad", implicitUnits: "px", enums: ["inside-to-node", "outside-to-node", "outside-to-node-or-label", "outside-to-line", "outside-to-line-or-label"], singleEnum: true, validate: /* @__PURE__ */ __name(function(e3, t3) {
            switch (e3.length) {
              case 2:
                return "deg" !== t3[0] && "rad" !== t3[0] && "deg" !== t3[1] && "rad" !== t3[1];
              case 1:
                return W(e3[0]) || "deg" === t3[0] || "rad" === t3[0];
              default:
                return false;
            }
          }, "validate") }, easing: { regexes: ["^(spring)\\s*\\(\\s*(" + e2 + ")\\s*,\\s*(" + e2 + ")\\s*\\)$", "^(cubic-bezier)\\s*\\(\\s*(" + e2 + ")\\s*,\\s*(" + e2 + ")\\s*,\\s*(" + e2 + ")\\s*,\\s*(" + e2 + ")\\s*\\)$"], enums: ["linear", "ease", "ease-in", "ease-out", "ease-in-out", "ease-in-sine", "ease-out-sine", "ease-in-out-sine", "ease-in-quad", "ease-out-quad", "ease-in-out-quad", "ease-in-cubic", "ease-out-cubic", "ease-in-out-cubic", "ease-in-quart", "ease-out-quart", "ease-in-out-quart", "ease-in-quint", "ease-out-quint", "ease-in-out-quint", "ease-in-expo", "ease-out-expo", "ease-in-out-expo", "ease-in-circ", "ease-out-circ", "ease-in-out-circ"] }, gradientDirection: { enums: ["to-bottom", "to-top", "to-left", "to-right", "to-bottom-right", "to-bottom-left", "to-top-right", "to-top-left", "to-right-bottom", "to-left-bottom", "to-right-top", "to-left-top"] }, boundsExpansion: { number: true, multiple: true, min: 0, validate: /* @__PURE__ */ __name(function(e3) {
            var t3 = e3.length;
            return 1 === t3 || 2 === t3 || 4 === t3;
          }, "validate") } };
          var o2 = { zeroNonZero: /* @__PURE__ */ __name(function(e3, t3) {
            return (null == e3 || null == t3) && e3 !== t3 || (0 == e3 && 0 != t3 || 0 != e3 && 0 == t3);
          }, "zeroNonZero"), any: /* @__PURE__ */ __name(function(e3, t3) {
            return e3 != t3;
          }, "any"), emptyNonEmpty: /* @__PURE__ */ __name(function(e3, t3) {
            var n3 = ne(e3), r3 = ne(t3);
            return n3 && !r3 || !n3 && r3;
          }, "emptyNonEmpty") }, s2 = vu.types, l2 = [{ name: "label", type: s2.text, triggersBounds: o2.any, triggersZOrder: o2.emptyNonEmpty }, { name: "text-rotation", type: s2.textRotation, triggersBounds: o2.any }, { name: "text-margin-x", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "text-margin-y", type: s2.bidirectionalSize, triggersBounds: o2.any }], u2 = [{ name: "source-label", type: s2.text, triggersBounds: o2.any }, { name: "source-text-rotation", type: s2.textRotation, triggersBounds: o2.any }, { name: "source-text-margin-x", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "source-text-margin-y", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "source-text-offset", type: s2.size, triggersBounds: o2.any }], c2 = [{ name: "target-label", type: s2.text, triggersBounds: o2.any }, { name: "target-text-rotation", type: s2.textRotation, triggersBounds: o2.any }, { name: "target-text-margin-x", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "target-text-margin-y", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "target-text-offset", type: s2.size, triggersBounds: o2.any }], d2 = [{ name: "font-family", type: s2.fontFamily, triggersBounds: o2.any }, { name: "font-style", type: s2.fontStyle, triggersBounds: o2.any }, { name: "font-weight", type: s2.fontWeight, triggersBounds: o2.any }, { name: "font-size", type: s2.size, triggersBounds: o2.any }, { name: "text-transform", type: s2.textTransform, triggersBounds: o2.any }, { name: "text-wrap", type: s2.textWrap, triggersBounds: o2.any }, { name: "text-overflow-wrap", type: s2.textOverflowWrap, triggersBounds: o2.any }, { name: "text-max-width", type: s2.size, triggersBounds: o2.any }, { name: "text-outline-width", type: s2.size, triggersBounds: o2.any }, { name: "line-height", type: s2.positiveNumber, triggersBounds: o2.any }], h2 = [{ name: "text-valign", type: s2.valign, triggersBounds: o2.any }, { name: "text-halign", type: s2.halign, triggersBounds: o2.any }, { name: "color", type: s2.color }, { name: "text-outline-color", type: s2.color }, { name: "text-outline-opacity", type: s2.zeroOneNumber }, { name: "text-background-color", type: s2.color }, { name: "text-background-opacity", type: s2.zeroOneNumber }, { name: "text-background-padding", type: s2.size, triggersBounds: o2.any }, { name: "text-border-opacity", type: s2.zeroOneNumber }, { name: "text-border-color", type: s2.color }, { name: "text-border-width", type: s2.size, triggersBounds: o2.any }, { name: "text-border-style", type: s2.borderStyle, triggersBounds: o2.any }, { name: "text-background-shape", type: s2.textBackgroundShape, triggersBounds: o2.any }, { name: "text-justification", type: s2.justification }, { name: "box-select-labels", type: s2.bool, triggersBounds: o2.any }], f2 = [{ name: "events", type: s2.bool, triggersZOrder: o2.any }, { name: "text-events", type: s2.bool, triggersZOrder: o2.any }, { name: "box-selection", type: s2.boxSelection, triggersZOrder: o2.any }], p2 = [{ name: "display", type: s2.display, triggersZOrder: o2.any, triggersBounds: o2.any, triggersBoundsOfConnectedEdges: o2.any, triggersBoundsOfParallelEdges: /* @__PURE__ */ __name(function(e3, t3, n3) {
            return e3 !== t3 && "bezier" === n3.pstyle("curve-style").value;
          }, "triggersBoundsOfParallelEdges") }, { name: "visibility", type: s2.visibility, triggersZOrder: o2.any }, { name: "opacity", type: s2.zeroOneNumber, triggersZOrder: o2.zeroNonZero }, { name: "text-opacity", type: s2.zeroOneNumber }, { name: "min-zoomed-font-size", type: s2.size }, { name: "z-compound-depth", type: s2.zCompoundDepth, triggersZOrder: o2.any }, { name: "z-index-compare", type: s2.zIndexCompare, triggersZOrder: o2.any }, { name: "z-index", type: s2.number, triggersZOrder: o2.any }], v2 = [{ name: "overlay-padding", type: s2.size, triggersBounds: o2.any }, { name: "overlay-color", type: s2.color }, { name: "overlay-opacity", type: s2.zeroOneNumber, triggersBounds: o2.zeroNonZero }, { name: "overlay-shape", type: s2.overlayShape, triggersBounds: o2.any }, { name: "overlay-corner-radius", type: s2.cornerRadius }], g2 = [{ name: "underlay-padding", type: s2.size, triggersBounds: o2.any }, { name: "underlay-color", type: s2.color }, { name: "underlay-opacity", type: s2.zeroOneNumber, triggersBounds: o2.zeroNonZero }, { name: "underlay-shape", type: s2.overlayShape, triggersBounds: o2.any }, { name: "underlay-corner-radius", type: s2.cornerRadius }], y2 = [{ name: "transition-property", type: s2.propList }, { name: "transition-duration", type: s2.time }, { name: "transition-delay", type: s2.time }, { name: "transition-timing-function", type: s2.easing }], m2 = /* @__PURE__ */ __name(function(e3, t3) {
            return "label" === t3.value ? -e3.poolIndex() : t3.pfValue;
          }, "m"), b2 = [{ name: "height", type: s2.nodeSize, triggersBounds: o2.any, hashOverride: m2 }, { name: "width", type: s2.nodeSize, triggersBounds: o2.any, hashOverride: m2 }, { name: "shape", type: s2.nodeShape, triggersBounds: o2.any }, { name: "shape-polygon-points", type: s2.polygonPointList, triggersBounds: o2.any }, { name: "corner-radius", type: s2.cornerRadius }, { name: "background-color", type: s2.color }, { name: "background-fill", type: s2.fill }, { name: "background-opacity", type: s2.zeroOneNumber }, { name: "background-blacken", type: s2.nOneOneNumber }, { name: "background-gradient-stop-colors", type: s2.colors }, { name: "background-gradient-stop-positions", type: s2.percentages }, { name: "background-gradient-direction", type: s2.gradientDirection }, { name: "padding", type: s2.sizeMaybePercent, triggersBounds: o2.any }, { name: "padding-relative-to", type: s2.paddingRelativeTo, triggersBounds: o2.any }, { name: "bounds-expansion", type: s2.boundsExpansion, triggersBounds: o2.any }], x2 = [{ name: "border-color", type: s2.color }, { name: "border-opacity", type: s2.zeroOneNumber }, { name: "border-width", type: s2.size, triggersBounds: o2.any }, { name: "border-style", type: s2.borderStyle }, { name: "border-cap", type: s2.lineCap }, { name: "border-join", type: s2.lineJoin }, { name: "border-dash-pattern", type: s2.numbers }, { name: "border-dash-offset", type: s2.number }, { name: "border-position", type: s2.linePosition }], w2 = [{ name: "outline-color", type: s2.color }, { name: "outline-opacity", type: s2.zeroOneNumber }, { name: "outline-width", type: s2.size, triggersBounds: o2.any }, { name: "outline-style", type: s2.borderStyle }, { name: "outline-offset", type: s2.size, triggersBounds: o2.any }], E2 = [{ name: "background-image", type: s2.urls }, { name: "background-image-crossorigin", type: s2.bgCrossOrigin }, { name: "background-image-opacity", type: s2.zeroOneNumbers }, { name: "background-image-containment", type: s2.bgContainment }, { name: "background-image-smoothing", type: s2.bools }, { name: "background-position-x", type: s2.bgPos }, { name: "background-position-y", type: s2.bgPos }, { name: "background-width-relative-to", type: s2.bgRelativeTo }, { name: "background-height-relative-to", type: s2.bgRelativeTo }, { name: "background-repeat", type: s2.bgRepeat }, { name: "background-fit", type: s2.bgFit }, { name: "background-clip", type: s2.bgClip }, { name: "background-width", type: s2.bgWH }, { name: "background-height", type: s2.bgWH }, { name: "background-offset-x", type: s2.bgPos }, { name: "background-offset-y", type: s2.bgPos }], k2 = [{ name: "position", type: s2.position, triggersBounds: o2.any }, { name: "compound-sizing-wrt-labels", type: s2.compoundIncludeLabels, triggersBounds: o2.any }, { name: "min-width", type: s2.size, triggersBounds: o2.any }, { name: "min-width-bias-left", type: s2.sizeMaybePercent, triggersBounds: o2.any }, { name: "min-width-bias-right", type: s2.sizeMaybePercent, triggersBounds: o2.any }, { name: "min-height", type: s2.size, triggersBounds: o2.any }, { name: "min-height-bias-top", type: s2.sizeMaybePercent, triggersBounds: o2.any }, { name: "min-height-bias-bottom", type: s2.sizeMaybePercent, triggersBounds: o2.any }], T2 = [{ name: "line-style", type: s2.lineStyle }, { name: "line-color", type: s2.color }, { name: "line-fill", type: s2.fill }, { name: "line-cap", type: s2.lineCap }, { name: "line-opacity", type: s2.zeroOneNumber }, { name: "line-dash-pattern", type: s2.numbers }, { name: "line-dash-offset", type: s2.number }, { name: "line-outline-width", type: s2.size }, { name: "line-outline-color", type: s2.color }, { name: "line-gradient-stop-colors", type: s2.colors }, { name: "line-gradient-stop-positions", type: s2.percentages }, { name: "curve-style", type: s2.curveStyle, triggersBounds: o2.any, triggersBoundsOfParallelEdges: /* @__PURE__ */ __name(function(e3, t3) {
            return e3 !== t3 && ("bezier" === e3 || "bezier" === t3);
          }, "triggersBoundsOfParallelEdges") }, { name: "haystack-radius", type: s2.zeroOneNumber, triggersBounds: o2.any }, { name: "source-endpoint", type: s2.edgeEndpoint, triggersBounds: o2.any }, { name: "target-endpoint", type: s2.edgeEndpoint, triggersBounds: o2.any }, { name: "control-point-step-size", type: s2.size, triggersBounds: o2.any }, { name: "control-point-distances", type: s2.bidirectionalSizes, triggersBounds: o2.any }, { name: "control-point-weights", type: s2.numbers, triggersBounds: o2.any }, { name: "segment-distances", type: s2.bidirectionalSizes, triggersBounds: o2.any }, { name: "segment-weights", type: s2.numbers, triggersBounds: o2.any }, { name: "segment-radii", type: s2.numbers, triggersBounds: o2.any }, { name: "radius-type", type: s2.radiusType, triggersBounds: o2.any }, { name: "taxi-turn", type: s2.bidirectionalSizeMaybePercent, triggersBounds: o2.any }, { name: "taxi-turn-min-distance", type: s2.size, triggersBounds: o2.any }, { name: "taxi-direction", type: s2.axisDirection, triggersBounds: o2.any }, { name: "taxi-radius", type: s2.number, triggersBounds: o2.any }, { name: "edge-distances", type: s2.edgeDistances, triggersBounds: o2.any }, { name: "arrow-scale", type: s2.positiveNumber, triggersBounds: o2.any }, { name: "loop-direction", type: s2.angle, triggersBounds: o2.any }, { name: "loop-sweep", type: s2.angle, triggersBounds: o2.any }, { name: "source-distance-from-node", type: s2.size, triggersBounds: o2.any }, { name: "target-distance-from-node", type: s2.size, triggersBounds: o2.any }], C2 = [{ name: "ghost", type: s2.bool, triggersBounds: o2.any }, { name: "ghost-offset-x", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "ghost-offset-y", type: s2.bidirectionalSize, triggersBounds: o2.any }, { name: "ghost-opacity", type: s2.zeroOneNumber }], P2 = [{ name: "selection-box-color", type: s2.color }, { name: "selection-box-opacity", type: s2.zeroOneNumber }, { name: "selection-box-border-color", type: s2.color }, { name: "selection-box-border-width", type: s2.size }, { name: "active-bg-color", type: s2.color }, { name: "active-bg-opacity", type: s2.zeroOneNumber }, { name: "active-bg-size", type: s2.size }, { name: "outside-texture-bg-color", type: s2.color }, { name: "outside-texture-bg-opacity", type: s2.zeroOneNumber }], S2 = [];
          vu.pieBackgroundN = 16, S2.push({ name: "pie-size", type: s2.sizeMaybePercent }), S2.push({ name: "pie-hole", type: s2.sizeMaybePercent }), S2.push({ name: "pie-start-angle", type: s2.angle });
          for (var B2 = 1; B2 <= vu.pieBackgroundN; B2++) S2.push({ name: "pie-" + B2 + "-background-color", type: s2.color }), S2.push({ name: "pie-" + B2 + "-background-size", type: s2.percent }), S2.push({ name: "pie-" + B2 + "-background-opacity", type: s2.zeroOneNumber });
          var D2 = [];
          vu.stripeBackgroundN = 16, D2.push({ name: "stripe-size", type: s2.sizeMaybePercent }), D2.push({ name: "stripe-direction", type: s2.axisDirectionPrimary });
          for (var _2 = 1; _2 <= vu.stripeBackgroundN; _2++) D2.push({ name: "stripe-" + _2 + "-background-color", type: s2.color }), D2.push({ name: "stripe-" + _2 + "-background-size", type: s2.percent }), D2.push({ name: "stripe-" + _2 + "-background-opacity", type: s2.zeroOneNumber });
          var A2 = [], M2 = vu.arrowPrefixes = ["source", "mid-source", "target", "mid-target"];
          [{ name: "arrow-shape", type: s2.arrowShape, triggersBounds: o2.any }, { name: "arrow-color", type: s2.color }, { name: "arrow-fill", type: s2.arrowFill }, { name: "arrow-width", type: s2.arrowWidth }].forEach(function(e3) {
            M2.forEach(function(t3) {
              var n3 = t3 + "-" + e3.name, r3 = e3.type, a3 = e3.triggersBounds;
              A2.push({ name: n3, type: r3, triggersBounds: a3 });
            });
          }, {});
          var R2 = vu.properties = [].concat(f2, y2, p2, v2, g2, C2, h2, d2, l2, u2, c2, b2, x2, w2, E2, S2, D2, k2, T2, A2, P2), I2 = vu.propertyGroups = { behavior: f2, transition: y2, visibility: p2, overlay: v2, underlay: g2, ghost: C2, commonLabel: h2, labelDimensions: d2, mainLabel: l2, sourceLabel: u2, targetLabel: c2, nodeBody: b2, nodeBorder: x2, nodeOutline: w2, backgroundImage: E2, pie: S2, stripe: D2, compound: k2, edgeLine: T2, edgeArrow: A2, core: P2 }, N2 = vu.propertyGroupNames = {};
          (vu.propertyGroupKeys = Object.keys(I2)).forEach(function(e3) {
            N2[e3] = I2[e3].map(function(e4) {
              return e4.name;
            }), I2[e3].forEach(function(t3) {
              return t3.groupKey = e3;
            });
          });
          var L2 = vu.aliases = [{ name: "content", pointsTo: "label" }, { name: "control-point-distance", pointsTo: "control-point-distances" }, { name: "control-point-weight", pointsTo: "control-point-weights" }, { name: "segment-distance", pointsTo: "segment-distances" }, { name: "segment-weight", pointsTo: "segment-weights" }, { name: "segment-radius", pointsTo: "segment-radii" }, { name: "edge-text-rotation", pointsTo: "text-rotation" }, { name: "padding-left", pointsTo: "padding" }, { name: "padding-right", pointsTo: "padding" }, { name: "padding-top", pointsTo: "padding" }, { name: "padding-bottom", pointsTo: "padding" }];
          vu.propertyNames = R2.map(function(e3) {
            return e3.name;
          });
          for (var z2 = 0; z2 < R2.length; z2++) {
            var O2 = R2[z2];
            R2[O2.name] = O2;
          }
          for (var V2 = 0; V2 < L2.length; V2++) {
            var F2 = L2[V2], X2 = R2[F2.pointsTo], j2 = { name: F2.name, alias: true, pointsTo: X2 };
            R2.push(j2), R2[F2.name] = j2;
          }
        }(), vu.getDefaultProperty = function(e2) {
          return this.getDefaultProperties()[e2];
        }, vu.getDefaultProperties = function() {
          var e2 = this._private;
          if (null != e2.defaultProperties) return e2.defaultProperties;
          for (var t2 = ge({ "selection-box-color": "#ddd", "selection-box-opacity": 0.65, "selection-box-border-color": "#aaa", "selection-box-border-width": 1, "active-bg-color": "black", "active-bg-opacity": 0.15, "active-bg-size": 30, "outside-texture-bg-color": "#000", "outside-texture-bg-opacity": 0.125, events: "yes", "text-events": "no", "text-valign": "top", "text-halign": "center", "text-justification": "auto", "line-height": 1, color: "#000", "box-selection": "contain", "text-outline-color": "#000", "text-outline-width": 0, "text-outline-opacity": 1, "text-opacity": 1, "text-decoration": "none", "text-transform": "none", "text-wrap": "none", "text-overflow-wrap": "whitespace", "text-max-width": 9999, "text-background-color": "#000", "text-background-opacity": 0, "text-background-shape": "rectangle", "text-background-padding": 0, "text-border-opacity": 0, "text-border-width": 0, "text-border-style": "solid", "text-border-color": "#000", "font-family": "Helvetica Neue, Helvetica, sans-serif", "font-style": "normal", "font-weight": "normal", "font-size": 16, "min-zoomed-font-size": 0, "text-rotation": "none", "source-text-rotation": "none", "target-text-rotation": "none", visibility: "visible", display: "element", opacity: 1, "z-compound-depth": "auto", "z-index-compare": "auto", "z-index": 0, label: "", "text-margin-x": 0, "text-margin-y": 0, "source-label": "", "source-text-offset": 0, "source-text-margin-x": 0, "source-text-margin-y": 0, "target-label": "", "target-text-offset": 0, "target-text-margin-x": 0, "target-text-margin-y": 0, "overlay-opacity": 0, "overlay-color": "#000", "overlay-padding": 10, "overlay-shape": "round-rectangle", "overlay-corner-radius": "auto", "underlay-opacity": 0, "underlay-color": "#000", "underlay-padding": 10, "underlay-shape": "round-rectangle", "underlay-corner-radius": "auto", "transition-property": "none", "transition-duration": 0, "transition-delay": 0, "transition-timing-function": "linear", "box-select-labels": "no", "background-blacken": 0, "background-color": "#999", "background-fill": "solid", "background-opacity": 1, "background-image": "none", "background-image-crossorigin": "anonymous", "background-image-opacity": 1, "background-image-containment": "inside", "background-image-smoothing": "yes", "background-position-x": "50%", "background-position-y": "50%", "background-offset-x": 0, "background-offset-y": 0, "background-width-relative-to": "include-padding", "background-height-relative-to": "include-padding", "background-repeat": "no-repeat", "background-fit": "none", "background-clip": "node", "background-width": "auto", "background-height": "auto", "border-color": "#000", "border-opacity": 1, "border-width": 0, "border-style": "solid", "border-dash-pattern": [4, 2], "border-dash-offset": 0, "border-cap": "butt", "border-join": "miter", "border-position": "center", "outline-color": "#999", "outline-opacity": 1, "outline-width": 0, "outline-offset": 0, "outline-style": "solid", height: 30, width: 30, shape: "ellipse", "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1", "corner-radius": "auto", "bounds-expansion": 0, "background-gradient-direction": "to-bottom", "background-gradient-stop-colors": "#999", "background-gradient-stop-positions": "0%", ghost: "no", "ghost-offset-y": 0, "ghost-offset-x": 0, "ghost-opacity": 0, padding: 0, "padding-relative-to": "width", position: "origin", "compound-sizing-wrt-labels": "include", "min-width": 0, "min-width-bias-left": 0, "min-width-bias-right": 0, "min-height": 0, "min-height-bias-top": 0, "min-height-bias-bottom": 0 }, { "pie-size": "100%", "pie-hole": 0, "pie-start-angle": "0deg" }, [{ name: "pie-{{i}}-background-color", value: "black" }, { name: "pie-{{i}}-background-size", value: "0%" }, { name: "pie-{{i}}-background-opacity", value: 1 }].reduce(function(e3, t3) {
            for (var n3 = 1; n3 <= vu.pieBackgroundN; n3++) {
              var r3 = t3.name.replace("{{i}}", n3), a3 = t3.value;
              e3[r3] = a3;
            }
            return e3;
          }, {}), { "stripe-size": "100%", "stripe-direction": "horizontal" }, [{ name: "stripe-{{i}}-background-color", value: "black" }, { name: "stripe-{{i}}-background-size", value: "0%" }, { name: "stripe-{{i}}-background-opacity", value: 1 }].reduce(function(e3, t3) {
            for (var n3 = 1; n3 <= vu.stripeBackgroundN; n3++) {
              var r3 = t3.name.replace("{{i}}", n3), a3 = t3.value;
              e3[r3] = a3;
            }
            return e3;
          }, {}), { "line-style": "solid", "line-color": "#999", "line-fill": "solid", "line-cap": "butt", "line-opacity": 1, "line-outline-width": 0, "line-outline-color": "#000", "line-gradient-stop-colors": "#999", "line-gradient-stop-positions": "0%", "control-point-step-size": 40, "control-point-weights": 0.5, "segment-weights": 0.5, "segment-distances": 20, "segment-radii": 15, "radius-type": "arc-radius", "taxi-turn": "50%", "taxi-radius": 15, "taxi-turn-min-distance": 10, "taxi-direction": "auto", "edge-distances": "intersection", "curve-style": "haystack", "haystack-radius": 0, "arrow-scale": 1, "loop-direction": "-45deg", "loop-sweep": "-90deg", "source-distance-from-node": 0, "target-distance-from-node": 0, "source-endpoint": "outside-to-node", "target-endpoint": "outside-to-node", "line-dash-pattern": [6, 3], "line-dash-offset": 0 }, [{ name: "arrow-shape", value: "none" }, { name: "arrow-color", value: "#999" }, { name: "arrow-fill", value: "filled" }, { name: "arrow-width", value: 1 }].reduce(function(e3, t3) {
            return vu.arrowPrefixes.forEach(function(n3) {
              var r3 = n3 + "-" + t3.name, a3 = t3.value;
              e3[r3] = a3;
            }), e3;
          }, {})), n2 = {}, r2 = 0; r2 < this.properties.length; r2++) {
            var a2 = this.properties[r2];
            if (!a2.pointsTo) {
              var i2 = a2.name, o2 = t2[i2], s2 = this.parse(i2, o2);
              n2[i2] = s2;
            }
          }
          return e2.defaultProperties = n2, e2.defaultProperties;
        }, vu.addDefaultStylesheet = function() {
          this.selector(":parent").css({ shape: "rectangle", padding: 10, "background-color": "#eee", "border-color": "#ccc", "border-width": 1 }).selector("edge").css({ width: 3 }).selector(":loop").css({ "curve-style": "bezier" }).selector("edge:compound").css({ "curve-style": "bezier", "source-endpoint": "outside-to-line", "target-endpoint": "outside-to-line" }).selector(":selected").css({ "background-color": "#0169D9", "line-color": "#0169D9", "source-arrow-color": "#0169D9", "target-arrow-color": "#0169D9", "mid-source-arrow-color": "#0169D9", "mid-target-arrow-color": "#0169D9" }).selector(":parent:selected").css({ "background-color": "#CCE1F9", "border-color": "#aec8e5" }).selector(":active").css({ "overlay-color": "black", "overlay-padding": 10, "overlay-opacity": 0.25 }), this.defaultLength = this.length;
        };
        var gu = { parse: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = this;
          if (U(t2)) return a2.parseImplWarn(e2, t2, n2, r2);
          var i2, o2 = We(e2, "" + t2, n2 ? "t" : "f", "mapping" === r2 || true === r2 || false === r2 || null == r2 ? "dontcare" : r2), s2 = a2.propCache = a2.propCache || [];
          return (i2 = s2[o2]) || (i2 = s2[o2] = a2.parseImplWarn(e2, t2, n2, r2)), (n2 || "mapping" === r2) && (i2 = it(i2)) && (i2.value = it(i2.value)), i2;
        }, "parse"), parseImplWarn: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = this.parseImpl(e2, t2, n2, r2);
          return a2 || null == t2 || at("The style property `".concat(e2, ": ").concat(t2, "` is invalid")), !a2 || "width" !== a2.name && "height" !== a2.name || "label" !== t2 || at("The style value of `label` is deprecated for `" + a2.name + "`"), a2;
        }, "parseImplWarn") };
        gu.parseImpl = function(e2, t2, n2, r2) {
          var a2 = this;
          e2 = ie(e2);
          var i2 = a2.properties[e2], o2 = t2, s2 = a2.types;
          if (!i2) return null;
          if (void 0 === t2) return null;
          i2.alias && (i2 = i2.pointsTo, e2 = i2.name);
          var l2 = W(t2);
          l2 && (t2 = t2.trim());
          var u2, c2, d2 = i2.type;
          if (!d2) return null;
          if (n2 && ("" === t2 || null === t2)) return { name: e2, value: t2, bypass: true, deleteBypass: true };
          if (U(t2)) return { name: e2, value: t2, strValue: "fn", mapped: s2.fn, bypass: n2 };
          if (!l2 || r2 || t2.length < 7 || "a" !== t2[1]) ;
          else {
            if (t2.length >= 7 && "d" === t2[0] && (u2 = new RegExp(s2.data.regex).exec(t2))) {
              if (n2) return false;
              var h2 = s2.data;
              return { name: e2, value: u2, strValue: "" + t2, mapped: h2, field: u2[1], bypass: n2 };
            }
            if (t2.length >= 10 && "m" === t2[0] && (c2 = new RegExp(s2.mapData.regex).exec(t2))) {
              if (n2) return false;
              if (d2.multiple) return false;
              var f2 = s2.mapData;
              if (!d2.color && !d2.number) return false;
              var p2 = this.parse(e2, c2[4]);
              if (!p2 || p2.mapped) return false;
              var v2 = this.parse(e2, c2[5]);
              if (!v2 || v2.mapped) return false;
              if (p2.pfValue === v2.pfValue || p2.strValue === v2.strValue) return at("`" + e2 + ": " + t2 + "` is not a valid mapper because the output range is zero; converting to `" + e2 + ": " + p2.strValue + "`"), this.parse(e2, p2.strValue);
              if (d2.color) {
                var g2 = p2.value, y2 = v2.value;
                if (!(g2[0] !== y2[0] || g2[1] !== y2[1] || g2[2] !== y2[2] || g2[3] !== y2[3] && (null != g2[3] && 1 !== g2[3] || null != y2[3] && 1 !== y2[3]))) return false;
              }
              return { name: e2, value: c2, strValue: "" + t2, mapped: f2, field: c2[1], fieldMin: parseFloat(c2[2]), fieldMax: parseFloat(c2[3]), valueMin: p2.value, valueMax: v2.value, bypass: n2 };
            }
          }
          if (d2.multiple && "multiple" !== r2) {
            var m2;
            if (m2 = l2 ? t2.split(/\s+/) : H(t2) ? t2 : [t2], d2.evenMultiple && m2.length % 2 != 0) return null;
            for (var b2 = [], x2 = [], w2 = [], E2 = "", k2 = false, T2 = 0; T2 < m2.length; T2++) {
              var C2 = a2.parse(e2, m2[T2], n2, "multiple");
              k2 = k2 || W(C2.value), b2.push(C2.value), w2.push(null != C2.pfValue ? C2.pfValue : C2.value), x2.push(C2.units), E2 += (T2 > 0 ? " " : "") + C2.strValue;
            }
            return d2.validate && !d2.validate(b2, x2) ? null : d2.singleEnum && k2 ? 1 === b2.length && W(b2[0]) ? { name: e2, value: b2[0], strValue: b2[0], bypass: n2 } : null : { name: e2, value: b2, pfValue: w2, strValue: E2, bypass: n2, units: x2 };
          }
          var P2, S2, B2 = /* @__PURE__ */ __name(function() {
            for (var r3 = 0; r3 < d2.enums.length; r3++) {
              if (d2.enums[r3] === t2) return { name: e2, value: t2, strValue: "" + t2, bypass: n2 };
            }
            return null;
          }, "B");
          if (d2.number) {
            var D2, _2 = "px";
            if (d2.units && (D2 = d2.units), d2.implicitUnits && (_2 = d2.implicitUnits), !d2.unitless) if (l2) {
              var A2 = "px|em" + (d2.allowPercent ? "|\\%" : "");
              D2 && (A2 = D2);
              var M2 = t2.match("^(" + ce + ")(" + A2 + ")?$");
              M2 && (t2 = M2[1], D2 = M2[2] || _2);
            } else D2 && !d2.implicitUnits || (D2 = _2);
            if (t2 = parseFloat(t2), isNaN(t2) && void 0 === d2.enums) return null;
            if (isNaN(t2) && void 0 !== d2.enums) return t2 = o2, B2();
            if (d2.integer && (!G(S2 = t2) || Math.floor(S2) !== S2)) return null;
            if (void 0 !== d2.min && (t2 < d2.min || d2.strictMin && t2 === d2.min) || void 0 !== d2.max && (t2 > d2.max || d2.strictMax && t2 === d2.max)) return null;
            var R2 = { name: e2, value: t2, strValue: "" + t2 + (D2 || ""), units: D2, bypass: n2 };
            return d2.unitless || "px" !== D2 && "em" !== D2 ? R2.pfValue = t2 : R2.pfValue = "px" !== D2 && D2 ? this.getEmSizeInPixels() * t2 : t2, "ms" !== D2 && "s" !== D2 || (R2.pfValue = "ms" === D2 ? t2 : 1e3 * t2), "deg" !== D2 && "rad" !== D2 || (R2.pfValue = "rad" === D2 ? t2 : (P2 = t2, Math.PI * P2 / 180)), "%" === D2 && (R2.pfValue = t2 / 100), R2;
          }
          if (d2.propList) {
            var I2 = [], N2 = "" + t2;
            if ("none" === N2) ;
            else {
              for (var L2 = N2.split(/\s*,\s*|\s+/), z2 = 0; z2 < L2.length; z2++) {
                var O2 = L2[z2].trim();
                a2.properties[O2] ? I2.push(O2) : at("`" + O2 + "` is not a valid property name");
              }
              if (0 === I2.length) return null;
            }
            return { name: e2, value: I2, strValue: 0 === I2.length ? "none" : I2.join(" "), bypass: n2 };
          }
          if (d2.color) {
            var V2 = ye(t2);
            return V2 ? { name: e2, value: V2, pfValue: V2, strValue: "rgb(" + V2[0] + "," + V2[1] + "," + V2[2] + ")", bypass: n2 } : null;
          }
          if (d2.regex || d2.regexes) {
            if (d2.enums) {
              var F2 = B2();
              if (F2) return F2;
            }
            for (var X2 = d2.regexes ? d2.regexes : [d2.regex], j2 = 0; j2 < X2.length; j2++) {
              var Y2 = new RegExp(X2[j2]).exec(t2);
              if (Y2) return { name: e2, value: d2.singleRegexMatchValue ? Y2[1] : Y2, strValue: "" + t2, bypass: n2 };
            }
            return null;
          }
          return d2.string ? { name: e2, value: "" + t2, strValue: "" + t2, bypass: n2 } : d2.enums ? B2() : null;
        };
        var yu = /* @__PURE__ */ __name(function(e2) {
          if (!(this instanceof yu)) return new yu(e2);
          ee(e2) ? (this._private = { cy: e2, coreStyle: {} }, this.length = 0, this.resetToDefault()) : nt("A style must have a core reference");
        }, "yu"), mu = yu.prototype;
        mu.instanceString = function() {
          return "style";
        }, mu.clear = function() {
          for (var e2 = this._private, t2 = e2.cy.elements(), n2 = 0; n2 < this.length; n2++) this[n2] = void 0;
          return this.length = 0, e2.contextStyles = {}, e2.propDiffs = {}, this.cleanElements(t2, true), t2.forEach(function(e3) {
            var t3 = e3[0]._private;
            t3.styleDirty = true, t3.appliedInitStyle = false;
          }), this;
        }, mu.resetToDefault = function() {
          return this.clear(), this.addDefaultStylesheet(), this;
        }, mu.core = function(e2) {
          return this._private.coreStyle[e2] || this.getDefaultProperty(e2);
        }, mu.selector = function(e2) {
          var t2 = "core" === e2 ? null : new as(e2), n2 = this.length++;
          return this[n2] = { selector: t2, properties: [], mappedProperties: [], index: n2 }, this;
        }, mu.css = function() {
          var e2 = arguments;
          if (1 === e2.length) for (var t2 = e2[0], n2 = 0; n2 < this.properties.length; n2++) {
            var r2 = this.properties[n2], a2 = t2[r2.name];
            void 0 === a2 && (a2 = t2[oe(r2.name)]), void 0 !== a2 && this.cssRule(r2.name, a2);
          }
          else 2 === e2.length && this.cssRule(e2[0], e2[1]);
          return this;
        }, mu.style = mu.css, mu.cssRule = function(e2, t2) {
          var n2 = this.parse(e2, t2);
          if (n2) {
            var r2 = this.length - 1;
            this[r2].properties.push(n2), this[r2].properties[n2.name] = n2, n2.name.match(/pie-(\d+)-background-size/) && n2.value && (this._private.hasPie = true), n2.name.match(/stripe-(\d+)-background-size/) && n2.value && (this._private.hasStripe = true), n2.mapped && this[r2].mappedProperties.push(n2), !this[r2].selector && (this._private.coreStyle[n2.name] = n2);
          }
          return this;
        }, mu.append = function(e2) {
          return te(e2) ? e2.appendToStyle(this) : H(e2) ? this.appendFromJson(e2) : W(e2) && this.appendFromString(e2), this;
        }, yu.fromJson = function(e2, t2) {
          var n2 = new yu(e2);
          return n2.fromJson(t2), n2;
        }, yu.fromString = function(e2, t2) {
          return new yu(e2).fromString(t2);
        }, [lu, cu, du, hu, fu, pu, vu, gu].forEach(function(e2) {
          ge(mu, e2);
        }), yu.types = mu.types, yu.properties = mu.properties, yu.propertyGroups = mu.propertyGroups, yu.propertyGroupNames = mu.propertyGroupNames, yu.propertyGroupKeys = mu.propertyGroupKeys;
        var bu = { style: /* @__PURE__ */ __name(function(e2) {
          e2 && this.setStyle(e2).update();
          return this._private.style;
        }, "style"), setStyle: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private;
          return te(e2) ? t2.style = e2.generateStyle(this) : H(e2) ? t2.style = yu.fromJson(this, e2) : W(e2) ? t2.style = yu.fromString(this, e2) : t2.style = yu(this), t2.style;
        }, "setStyle"), updateStyle: /* @__PURE__ */ __name(function() {
          this.mutableElements().updateStyle();
        }, "updateStyle") }, xu = { autolock: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.autolock : (this._private.autolock = !!e2, this);
        }, "autolock"), autoungrabify: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.autoungrabify : (this._private.autoungrabify = !!e2, this);
        }, "autoungrabify"), autounselectify: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.autounselectify : (this._private.autounselectify = !!e2, this);
        }, "autounselectify"), selectionType: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private;
          return null == t2.selectionType && (t2.selectionType = "single"), void 0 === e2 ? t2.selectionType : ("additive" !== e2 && "single" !== e2 || (t2.selectionType = e2), this);
        }, "selectionType"), panningEnabled: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.panningEnabled : (this._private.panningEnabled = !!e2, this);
        }, "panningEnabled"), userPanningEnabled: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.userPanningEnabled : (this._private.userPanningEnabled = !!e2, this);
        }, "userPanningEnabled"), zoomingEnabled: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.zoomingEnabled : (this._private.zoomingEnabled = !!e2, this);
        }, "zoomingEnabled"), userZoomingEnabled: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.userZoomingEnabled : (this._private.userZoomingEnabled = !!e2, this);
        }, "userZoomingEnabled"), boxSelectionEnabled: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.boxSelectionEnabled : (this._private.boxSelectionEnabled = !!e2, this);
        }, "boxSelectionEnabled"), pan: /* @__PURE__ */ __name(function() {
          var e2, t2, n2, r2, a2, i2 = arguments, o2 = this._private.pan;
          switch (i2.length) {
            case 0:
              return o2;
            case 1:
              if (W(i2[0])) return o2[e2 = i2[0]];
              if (K(i2[0])) {
                if (!this._private.panningEnabled) return this;
                r2 = (n2 = i2[0]).x, a2 = n2.y, G(r2) && (o2.x = r2), G(a2) && (o2.y = a2), this.emit("pan viewport");
              }
              break;
            case 2:
              if (!this._private.panningEnabled) return this;
              t2 = i2[1], "x" !== (e2 = i2[0]) && "y" !== e2 || !G(t2) || (o2[e2] = t2), this.emit("pan viewport");
          }
          return this.notify("viewport"), this;
        }, "pan"), panBy: /* @__PURE__ */ __name(function(e2, t2) {
          var n2, r2, a2, i2, o2, s2 = arguments, l2 = this._private.pan;
          if (!this._private.panningEnabled) return this;
          switch (s2.length) {
            case 1:
              K(e2) && (i2 = (a2 = s2[0]).x, o2 = a2.y, G(i2) && (l2.x += i2), G(o2) && (l2.y += o2), this.emit("pan viewport"));
              break;
            case 2:
              r2 = t2, "x" !== (n2 = e2) && "y" !== n2 || !G(r2) || (l2[n2] += r2), this.emit("pan viewport");
          }
          return this.notify("viewport"), this;
        }, "panBy"), gc: /* @__PURE__ */ __name(function() {
          this.notify("gc");
        }, "gc"), fit: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this.getFitViewport(e2, t2);
          if (n2) {
            var r2 = this._private;
            r2.zoom = n2.zoom, r2.pan = n2.pan, this.emit("pan zoom viewport"), this.notify("viewport");
          }
          return this;
        }, "fit"), getFitViewport: /* @__PURE__ */ __name(function(e2, t2) {
          if (G(e2) && void 0 === t2 && (t2 = e2, e2 = void 0), this._private.panningEnabled && this._private.zoomingEnabled) {
            var n2, r2;
            if (W(e2)) {
              var a2 = e2;
              e2 = this.$(a2);
            } else if (K(r2 = e2) && G(r2.x1) && G(r2.x2) && G(r2.y1) && G(r2.y2)) {
              var i2 = e2;
              (n2 = { x1: i2.x1, y1: i2.y1, x2: i2.x2, y2: i2.y2 }).w = n2.x2 - n2.x1, n2.h = n2.y2 - n2.y1;
            } else $(e2) || (e2 = this.mutableElements());
            if (!$(e2) || !e2.empty()) {
              n2 = n2 || e2.boundingBox();
              var o2, s2 = this.width(), l2 = this.height();
              if (t2 = G(t2) ? t2 : 0, !isNaN(s2) && !isNaN(l2) && s2 > 0 && l2 > 0 && !isNaN(n2.w) && !isNaN(n2.h) && n2.w > 0 && n2.h > 0) return { zoom: o2 = (o2 = (o2 = Math.min((s2 - 2 * t2) / n2.w, (l2 - 2 * t2) / n2.h)) > this._private.maxZoom ? this._private.maxZoom : o2) < this._private.minZoom ? this._private.minZoom : o2, pan: { x: (s2 - o2 * (n2.x1 + n2.x2)) / 2, y: (l2 - o2 * (n2.y1 + n2.y2)) / 2 } };
            }
          }
        }, "getFitViewport"), zoomRange: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this._private;
          if (null == t2) {
            var r2 = e2;
            e2 = r2.min, t2 = r2.max;
          }
          return G(e2) && G(t2) && e2 <= t2 ? (n2.minZoom = e2, n2.maxZoom = t2) : G(e2) && void 0 === t2 && e2 <= n2.maxZoom ? n2.minZoom = e2 : G(t2) && void 0 === e2 && t2 >= n2.minZoom && (n2.maxZoom = t2), this;
        }, "zoomRange"), minZoom: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.minZoom : this.zoomRange({ min: e2 });
        }, "minZoom"), maxZoom: /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 ? this._private.maxZoom : this.zoomRange({ max: e2 });
        }, "maxZoom"), getZoomedViewport: /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2 = this._private, a2 = r2.pan, i2 = r2.zoom, o2 = false;
          if (r2.zoomingEnabled || (o2 = true), G(e2) ? n2 = e2 : K(e2) && (n2 = e2.level, null != e2.position ? t2 = Xt(e2.position, i2, a2) : null != e2.renderedPosition && (t2 = e2.renderedPosition), null == t2 || r2.panningEnabled || (o2 = true)), n2 = (n2 = n2 > r2.maxZoom ? r2.maxZoom : n2) < r2.minZoom ? r2.minZoom : n2, o2 || !G(n2) || n2 === i2 || null != t2 && (!G(t2.x) || !G(t2.y))) return null;
          if (null != t2) {
            var s2 = a2, l2 = i2, u2 = n2;
            return { zoomed: true, panned: true, zoom: u2, pan: { x: -u2 / l2 * (t2.x - s2.x) + t2.x, y: -u2 / l2 * (t2.y - s2.y) + t2.y } };
          }
          return { zoomed: true, panned: false, zoom: n2, pan: a2 };
        }, "getZoomedViewport"), zoom: /* @__PURE__ */ __name(function(e2) {
          if (void 0 === e2) return this._private.zoom;
          var t2 = this.getZoomedViewport(e2), n2 = this._private;
          return null != t2 && t2.zoomed ? (n2.zoom = t2.zoom, t2.panned && (n2.pan.x = t2.pan.x, n2.pan.y = t2.pan.y), this.emit("zoom" + (t2.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this) : this;
        }, "zoom"), viewport: /* @__PURE__ */ __name(function(e2) {
          var t2 = this._private, n2 = true, r2 = true, a2 = [], i2 = false, o2 = false;
          if (!e2) return this;
          if (G(e2.zoom) || (n2 = false), K(e2.pan) || (r2 = false), !n2 && !r2) return this;
          if (n2) {
            var s2 = e2.zoom;
            s2 < t2.minZoom || s2 > t2.maxZoom || !t2.zoomingEnabled ? i2 = true : (t2.zoom = s2, a2.push("zoom"));
          }
          if (r2 && (!i2 || !e2.cancelOnFailedZoom) && t2.panningEnabled) {
            var l2 = e2.pan;
            G(l2.x) && (t2.pan.x = l2.x, o2 = false), G(l2.y) && (t2.pan.y = l2.y, o2 = false), o2 || a2.push("pan");
          }
          return a2.length > 0 && (a2.push("viewport"), this.emit(a2.join(" ")), this.notify("viewport")), this;
        }, "viewport"), center: /* @__PURE__ */ __name(function(e2) {
          var t2 = this.getCenterPan(e2);
          return t2 && (this._private.pan = t2, this.emit("pan viewport"), this.notify("viewport")), this;
        }, "center"), getCenterPan: /* @__PURE__ */ __name(function(e2, t2) {
          if (this._private.panningEnabled) {
            if (W(e2)) {
              var n2 = e2;
              e2 = this.mutableElements().filter(n2);
            } else $(e2) || (e2 = this.mutableElements());
            if (0 !== e2.length) {
              var r2 = e2.boundingBox(), a2 = this.width(), i2 = this.height();
              return { x: (a2 - (t2 = void 0 === t2 ? this._private.zoom : t2) * (r2.x1 + r2.x2)) / 2, y: (i2 - t2 * (r2.y1 + r2.y2)) / 2 };
            }
          }
        }, "getCenterPan"), reset: /* @__PURE__ */ __name(function() {
          return this._private.panningEnabled && this._private.zoomingEnabled ? (this.viewport({ pan: { x: 0, y: 0 }, zoom: 1 }), this) : this;
        }, "reset"), invalidateSize: /* @__PURE__ */ __name(function() {
          this._private.sizeCache = null;
        }, "invalidateSize"), size: /* @__PURE__ */ __name(function() {
          var e2, t2, n2 = this._private, r2 = n2.container, a2 = this;
          return n2.sizeCache = n2.sizeCache || (r2 ? (e2 = a2.window().getComputedStyle(r2), t2 = /* @__PURE__ */ __name(function(t3) {
            return parseFloat(e2.getPropertyValue(t3));
          }, "t"), { width: r2.clientWidth - t2("padding-left") - t2("padding-right"), height: r2.clientHeight - t2("padding-top") - t2("padding-bottom") }) : { width: 1, height: 1 });
        }, "size"), width: /* @__PURE__ */ __name(function() {
          return this.size().width;
        }, "width"), height: /* @__PURE__ */ __name(function() {
          return this.size().height;
        }, "height"), extent: /* @__PURE__ */ __name(function() {
          var e2 = this._private.pan, t2 = this._private.zoom, n2 = this.renderedExtent(), r2 = { x1: (n2.x1 - e2.x) / t2, x2: (n2.x2 - e2.x) / t2, y1: (n2.y1 - e2.y) / t2, y2: (n2.y2 - e2.y) / t2 };
          return r2.w = r2.x2 - r2.x1, r2.h = r2.y2 - r2.y1, r2;
        }, "extent"), renderedExtent: /* @__PURE__ */ __name(function() {
          var e2 = this.width(), t2 = this.height();
          return { x1: 0, y1: 0, x2: e2, y2: t2, w: e2, h: t2 };
        }, "renderedExtent"), multiClickDebounceTime: /* @__PURE__ */ __name(function(e2) {
          return e2 ? (this._private.multiClickDebounceTime = e2, this) : this._private.multiClickDebounceTime;
        }, "multiClickDebounceTime") };
        xu.centre = xu.center, xu.autolockNodes = xu.autolock, xu.autoungrabifyNodes = xu.autoungrabify;
        var wu = { data: xo.data({ field: "data", bindingEvent: "data", allowBinding: true, allowSetting: true, settingEvent: "data", settingTriggersEvent: true, triggerFnName: "trigger", allowGetting: true, updateStyle: true }), removeData: xo.removeData({ field: "data", event: "data", triggerFnName: "trigger", triggerEvent: true, updateStyle: true }), scratch: xo.data({ field: "scratch", bindingEvent: "scratch", allowBinding: true, allowSetting: true, settingEvent: "scratch", settingTriggersEvent: true, triggerFnName: "trigger", allowGetting: true, updateStyle: true }), removeScratch: xo.removeData({ field: "scratch", event: "scratch", triggerFnName: "trigger", triggerEvent: true, updateStyle: true }) };
        wu.attr = wu.data, wu.removeAttr = wu.removeData;
        var Eu = /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = (e2 = ge({}, e2)).container;
          n2 && !Z(n2) && Z(n2[0]) && (n2 = n2[0]);
          var r2 = n2 ? n2._cyreg : null;
          (r2 = r2 || {}) && r2.cy && (r2.cy.destroy(), r2 = {});
          var a2 = r2.readies = r2.readies || [];
          n2 && (n2._cyreg = r2), r2.cy = t2;
          var i2 = void 0 !== c && void 0 !== n2 && !e2.headless, o2 = e2;
          o2.layout = ge({ name: i2 ? "grid" : "null" }, o2.layout), o2.renderer = ge({ name: i2 ? "canvas" : "null" }, o2.renderer);
          var s2 = /* @__PURE__ */ __name(function(e3, t3, n3) {
            return void 0 !== t3 ? t3 : void 0 !== n3 ? n3 : e3;
          }, "s"), l2 = this._private = { container: n2, ready: false, options: o2, elements: new Ol(this), listeners: [], aniEles: new Ol(this), data: o2.data || {}, scratch: {}, layout: null, renderer: null, destroyed: false, notificationsEnabled: true, minZoom: 1e-50, maxZoom: 1e50, zoomingEnabled: s2(true, o2.zoomingEnabled), userZoomingEnabled: s2(true, o2.userZoomingEnabled), panningEnabled: s2(true, o2.panningEnabled), userPanningEnabled: s2(true, o2.userPanningEnabled), boxSelectionEnabled: s2(true, o2.boxSelectionEnabled), autolock: s2(false, o2.autolock, o2.autolockNodes), autoungrabify: s2(false, o2.autoungrabify, o2.autoungrabifyNodes), autounselectify: s2(false, o2.autounselectify), styleEnabled: void 0 === o2.styleEnabled ? i2 : o2.styleEnabled, zoom: G(o2.zoom) ? o2.zoom : 1, pan: { x: K(o2.pan) && G(o2.pan.x) ? o2.pan.x : 0, y: K(o2.pan) && G(o2.pan.y) ? o2.pan.y : 0 }, animation: { current: [], queue: [] }, hasCompoundNodes: false, multiClickDebounceTime: s2(250, o2.multiClickDebounceTime) };
          this.createEmitter(), this.selectionType(o2.selectionType), this.zoomRange({ min: o2.minZoom, max: o2.maxZoom });
          l2.styleEnabled && t2.setStyle([]);
          var u2 = ge({}, o2, o2.renderer);
          t2.initRenderer(u2);
          !function(e3, t3) {
            if (e3.some(re)) return Hr.all(e3).then(t3);
            t3(e3);
          }([o2.style, o2.elements], function(e3) {
            var n3 = e3[0], i3 = e3[1];
            l2.styleEnabled && t2.style().append(n3), function(e4, n4, r3) {
              t2.notifications(false);
              var a3 = t2.mutableElements();
              a3.length > 0 && a3.remove(), null != e4 && (K(e4) || H(e4)) && t2.add(e4), t2.one("layoutready", function(e5) {
                t2.notifications(true), t2.emit(e5), t2.one("load", n4), t2.emitAndNotify("load");
              }).one("layoutstop", function() {
                t2.one("done", r3), t2.emit("done");
              });
              var i4 = ge({}, t2._private.options.layout);
              i4.eles = t2.elements(), t2.layout(i4).run();
            }(i3, function() {
              t2.startAnimationLoop(), l2.ready = true, U(o2.ready) && t2.on("ready", o2.ready);
              for (var e4 = 0; e4 < a2.length; e4++) {
                var n4 = a2[e4];
                t2.on("ready", n4);
              }
              r2 && (r2.readies = []), t2.emit("ready");
            }, o2.done);
          });
        }, "Eu"), ku = Eu.prototype;
        ge(ku, { instanceString: /* @__PURE__ */ __name(function() {
          return "core";
        }, "instanceString"), isReady: /* @__PURE__ */ __name(function() {
          return this._private.ready;
        }, "isReady"), destroyed: /* @__PURE__ */ __name(function() {
          return this._private.destroyed;
        }, "destroyed"), ready: /* @__PURE__ */ __name(function(e2) {
          return this.isReady() ? this.emitter().emit("ready", [], e2) : this.on("ready", e2), this;
        }, "ready"), destroy: /* @__PURE__ */ __name(function() {
          var e2 = this;
          if (!e2.destroyed()) return e2.stopAnimationLoop(), e2.destroyRenderer(), this.emit("destroy"), e2._private.destroyed = true, e2;
        }, "destroy"), hasElementWithId: /* @__PURE__ */ __name(function(e2) {
          return this._private.elements.hasElementWithId(e2);
        }, "hasElementWithId"), getElementById: /* @__PURE__ */ __name(function(e2) {
          return this._private.elements.getElementById(e2);
        }, "getElementById"), hasCompoundNodes: /* @__PURE__ */ __name(function() {
          return this._private.hasCompoundNodes;
        }, "hasCompoundNodes"), headless: /* @__PURE__ */ __name(function() {
          return this._private.renderer.isHeadless();
        }, "headless"), styleEnabled: /* @__PURE__ */ __name(function() {
          return this._private.styleEnabled;
        }, "styleEnabled"), addToPool: /* @__PURE__ */ __name(function(e2) {
          return this._private.elements.merge(e2), this;
        }, "addToPool"), removeFromPool: /* @__PURE__ */ __name(function(e2) {
          return this._private.elements.unmerge(e2), this;
        }, "removeFromPool"), container: /* @__PURE__ */ __name(function() {
          return this._private.container || null;
        }, "container"), window: /* @__PURE__ */ __name(function() {
          if (null == this._private.container) return c;
          var e2 = this._private.container.ownerDocument;
          return void 0 === e2 || null == e2 ? c : e2.defaultView || c;
        }, "window"), mount: /* @__PURE__ */ __name(function(e2) {
          if (null != e2) {
            var t2 = this, n2 = t2._private, r2 = n2.options;
            return !Z(e2) && Z(e2[0]) && (e2 = e2[0]), t2.stopAnimationLoop(), t2.destroyRenderer(), n2.container = e2, n2.styleEnabled = true, t2.invalidateSize(), t2.initRenderer(ge({}, r2, r2.renderer, { name: "null" === r2.renderer.name ? "canvas" : r2.renderer.name })), t2.startAnimationLoop(), t2.style(r2.style), t2.emit("mount"), t2;
          }
        }, "mount"), unmount: /* @__PURE__ */ __name(function() {
          var e2 = this;
          return e2.stopAnimationLoop(), e2.destroyRenderer(), e2.initRenderer({ name: "null" }), e2.emit("unmount"), e2;
        }, "unmount"), options: /* @__PURE__ */ __name(function() {
          return it(this._private.options);
        }, "options"), json: /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = t2._private, r2 = t2.mutableElements();
          if (K(e2)) {
            if (t2.startBatch(), e2.elements) {
              var a2 = {}, i2 = /* @__PURE__ */ __name(function(e3, n3) {
                for (var r3 = [], i3 = [], o3 = 0; o3 < e3.length; o3++) {
                  var s3 = e3[o3];
                  if (s3.data.id) {
                    var l3 = "" + s3.data.id, u3 = t2.getElementById(l3);
                    a2[l3] = true, 0 !== u3.length ? i3.push({ ele: u3, json: s3 }) : n3 ? (s3.group = n3, r3.push(s3)) : r3.push(s3);
                  } else at("cy.json() cannot handle elements without an ID attribute");
                }
                t2.add(r3);
                for (var c3 = 0; c3 < i3.length; c3++) {
                  var d3 = i3[c3], h3 = d3.ele, f3 = d3.json;
                  h3.json(f3);
                }
              }, "i");
              if (H(e2.elements)) i2(e2.elements);
              else for (var o2 = ["nodes", "edges"], s2 = 0; s2 < o2.length; s2++) {
                var l2 = o2[s2], u2 = e2.elements[l2];
                H(u2) && i2(u2, l2);
              }
              var c2 = t2.collection();
              r2.filter(function(e3) {
                return !a2[e3.id()];
              }).forEach(function(e3) {
                e3.isParent() ? c2.merge(e3) : e3.remove();
              }), c2.forEach(function(e3) {
                return e3.children().move({ parent: null });
              }), c2.forEach(function(e3) {
                return function(e4) {
                  return t2.getElementById(e4.id());
                }(e3).remove();
              });
            }
            e2.style && t2.style(e2.style), null != e2.zoom && e2.zoom !== n2.zoom && t2.zoom(e2.zoom), e2.pan && (e2.pan.x === n2.pan.x && e2.pan.y === n2.pan.y || t2.pan(e2.pan)), e2.data && t2.data(e2.data);
            for (var d2 = ["minZoom", "maxZoom", "zoomingEnabled", "userZoomingEnabled", "panningEnabled", "userPanningEnabled", "boxSelectionEnabled", "autolock", "autoungrabify", "autounselectify", "multiClickDebounceTime"], h2 = 0; h2 < d2.length; h2++) {
              var f2 = d2[h2];
              null != e2[f2] && t2[f2](e2[f2]);
            }
            return t2.endBatch(), this;
          }
          var p2 = {};
          !!e2 ? p2.elements = this.elements().map(function(e3) {
            return e3.json();
          }) : (p2.elements = {}, r2.forEach(function(e3) {
            var t3 = e3.group();
            p2.elements[t3] || (p2.elements[t3] = []), p2.elements[t3].push(e3.json());
          })), this._private.styleEnabled && (p2.style = t2.style().json()), p2.data = it(t2.data());
          var v2 = n2.options;
          return p2.zoomingEnabled = n2.zoomingEnabled, p2.userZoomingEnabled = n2.userZoomingEnabled, p2.zoom = n2.zoom, p2.minZoom = n2.minZoom, p2.maxZoom = n2.maxZoom, p2.panningEnabled = n2.panningEnabled, p2.userPanningEnabled = n2.userPanningEnabled, p2.pan = it(n2.pan), p2.boxSelectionEnabled = n2.boxSelectionEnabled, p2.renderer = it(v2.renderer), p2.hideEdgesOnViewport = v2.hideEdgesOnViewport, p2.textureOnViewport = v2.textureOnViewport, p2.wheelSensitivity = v2.wheelSensitivity, p2.motionBlur = v2.motionBlur, p2.multiClickDebounceTime = v2.multiClickDebounceTime, p2;
        }, "json") }), ku.$id = ku.getElementById, [Fl, Ql, tu, nu, ru, au, ou, su, bu, xu, wu].forEach(function(e2) {
          ge(ku, e2);
        });
        var Tu = { fit: true, directed: false, direction: "downward", padding: 30, circle: false, grid: false, spacingFactor: 1.75, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, roots: void 0, depthSort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), ready: void 0, stop: void 0, transform: /* @__PURE__ */ __name(function(e2, t2) {
          return t2;
        }, "transform") }, Cu = { maximal: false, acyclic: false }, Pu = /* @__PURE__ */ __name(function(e2) {
          return e2.scratch("breadthfirst");
        }, "Pu"), Su = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.scratch("breadthfirst", t2);
        }, "Su");
        function Bu(e2) {
          this.options = ge({}, Tu, Cu, e2);
        }
        __name(Bu, "Bu");
        Bu.prototype.run = function() {
          var e2, t2 = this.options, n2 = t2.cy, r2 = t2.eles, a2 = r2.nodes().filter(function(e3) {
            return e3.isChildless();
          }), i2 = r2, o2 = t2.directed, s2 = t2.acyclic || t2.maximal || t2.maximalAdjustments > 0, l2 = !!t2.boundingBox, u2 = Jt(l2 ? t2.boundingBox : structuredClone(n2.extent()));
          if ($(t2.roots)) e2 = t2.roots;
          else if (H(t2.roots)) {
            for (var c2 = [], d2 = 0; d2 < t2.roots.length; d2++) {
              var h2 = t2.roots[d2], f2 = n2.getElementById(h2);
              c2.push(f2);
            }
            e2 = n2.collection(c2);
          } else if (W(t2.roots)) e2 = n2.$(t2.roots);
          else if (o2) e2 = a2.roots();
          else {
            var p2 = r2.components();
            e2 = n2.collection();
            for (var v2 = function() {
              var t3 = p2[g2], n3 = t3.maxDegree(false), r3 = t3.filter(function(e3) {
                return e3.degree(false) === n3;
              });
              e2 = e2.add(r3);
            }, g2 = 0; g2 < p2.length; g2++) v2();
          }
          var y2 = [], m2 = {}, b2 = /* @__PURE__ */ __name(function(e3, t3) {
            null == y2[t3] && (y2[t3] = []);
            var n3 = y2[t3].length;
            y2[t3].push(e3), Su(e3, { index: n3, depth: t3 });
          }, "b");
          i2.bfs({ roots: e2, directed: t2.directed, visit: /* @__PURE__ */ __name(function(e3, t3, n3, r3, a3) {
            var i3 = e3[0], o3 = i3.id();
            i3.isChildless() && b2(i3, a3), m2[o3] = true;
          }, "visit") });
          for (var x2 = [], w2 = 0; w2 < a2.length; w2++) {
            var E2 = a2[w2];
            m2[E2.id()] || x2.push(E2);
          }
          var k2 = /* @__PURE__ */ __name(function(e3) {
            for (var t3 = y2[e3], n3 = 0; n3 < t3.length; n3++) {
              var r3 = t3[n3];
              null != r3 ? Su(r3, { depth: e3, index: n3 }) : (t3.splice(n3, 1), n3--);
            }
          }, "k"), T2 = /* @__PURE__ */ __name(function(e3, n3) {
            for (var a3 = Pu(e3), i3 = e3.incomers().filter(function(e4) {
              return e4.isNode() && r2.has(e4);
            }), o3 = -1, s3 = e3.id(), l3 = 0; l3 < i3.length; l3++) {
              var u3 = i3[l3], c3 = Pu(u3);
              o3 = Math.max(o3, c3.depth);
            }
            if (a3.depth <= o3) {
              if (!t2.acyclic && n3[s3]) return null;
              var d3 = o3 + 1;
              return function(e4, t3) {
                var n4 = Pu(e4), r3 = n4.depth, a4 = n4.index;
                y2[r3][a4] = null, e4.isChildless() && b2(e4, t3);
              }(e3, d3), n3[s3] = d3, true;
            }
            return false;
          }, "T");
          if (o2 && s2) {
            var C2 = [], P2 = {}, S2 = /* @__PURE__ */ __name(function(e3) {
              return C2.push(e3);
            }, "S");
            for (a2.forEach(function(e3) {
              return C2.push(e3);
            }); C2.length > 0; ) {
              var B2 = C2.shift(), D2 = T2(B2, P2);
              if (D2) B2.outgoers().filter(function(e3) {
                return e3.isNode() && r2.has(e3);
              }).forEach(S2);
              else if (null === D2) {
                at("Detected double maximal shift for node `" + B2.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
                break;
              }
            }
          }
          var _2 = 0;
          if (t2.avoidOverlap) for (var A2 = 0; A2 < a2.length; A2++) {
            var M2 = a2[A2].layoutDimensions(t2), R2 = M2.w, I2 = M2.h;
            _2 = Math.max(_2, R2, I2);
          }
          var N2 = {}, L2 = /* @__PURE__ */ __name(function(e3) {
            if (N2[e3.id()]) return N2[e3.id()];
            for (var t3 = Pu(e3).depth, n3 = e3.neighborhood(), r3 = 0, i3 = 0, o3 = 0; o3 < n3.length; o3++) {
              var s3 = n3[o3];
              if (!s3.isEdge() && !s3.isParent() && a2.has(s3)) {
                var l3 = Pu(s3);
                if (null != l3) {
                  var u3 = l3.index, c3 = l3.depth;
                  if (null != u3 && null != c3) {
                    var d3 = y2[c3].length;
                    c3 < t3 && (r3 += u3 / d3, i3++);
                  }
                }
              }
            }
            return r3 /= i3 = Math.max(1, i3), 0 === i3 && (r3 = 0), N2[e3.id()] = r3, r3;
          }, "L"), z2 = /* @__PURE__ */ __name(function(e3, t3) {
            var n3 = L2(e3) - L2(t3);
            return 0 === n3 ? ve(e3.id(), t3.id()) : n3;
          }, "z");
          void 0 !== t2.depthSort && (z2 = t2.depthSort);
          for (var O2 = y2.length, V2 = 0; V2 < O2; V2++) y2[V2].sort(z2), k2(V2);
          for (var F2 = [], X2 = 0; X2 < x2.length; X2++) F2.push(x2[X2]);
          F2.length && (y2.unshift(F2), O2 = y2.length, function() {
            for (var e3 = 0; e3 < O2; e3++) k2(e3);
          }());
          for (var j2 = 0, Y2 = 0; Y2 < O2; Y2++) j2 = Math.max(y2[Y2].length, j2);
          var q2 = u2.x1 + u2.w / 2, U2 = u2.y1 + u2.h / 2, K2 = a2.reduce(function(e3, n3) {
            return r3 = n3.boundingBox({ includeLabels: t2.nodeDimensionsIncludeLabels }), { w: -1 === e3.w ? r3.w : (e3.w + r3.w) / 2, h: -1 === e3.h ? r3.h : (e3.h + r3.h) / 2 };
            var r3;
          }, { w: -1, h: -1 }), G2 = Math.max(1 === O2 ? 0 : l2 ? (u2.h - 2 * t2.padding - K2.h) / (O2 - 1) : (u2.h - 2 * t2.padding - K2.h) / (O2 + 1), _2), Z2 = y2.reduce(function(e3, t3) {
            return Math.max(e3, t3.length);
          }, 0), Q2 = { downward: 0, leftward: 90, upward: 180, rightward: -90 };
          -1 === Object.keys(Q2).indexOf(t2.direction) && nt("Invalid direction '".concat(t2.direction, "' specified for breadthfirst layout. Valid values are: ").concat(Object.keys(Q2).join(", ")));
          return r2.nodes().layoutPositions(this, t2, function(e3) {
            return He(function(e4) {
              var n3 = Pu(e4), r3 = n3.depth, a3 = n3.index;
              if (t2.circle) {
                var i3 = Math.min(u2.w / 2 / O2, u2.h / 2 / O2), o3 = (i3 = Math.max(i3, _2)) * r3 + i3 - (O2 > 0 && y2[0].length <= 3 ? i3 / 2 : 0), s3 = 2 * Math.PI / y2[r3].length * a3;
                return 0 === r3 && 1 === y2[0].length && (o3 = 1), { x: q2 + o3 * Math.cos(s3), y: U2 + o3 * Math.sin(s3) };
              }
              var c3 = y2[r3].length, d3 = Math.max(1 === c3 ? 0 : l2 ? (u2.w - 2 * t2.padding - K2.w) / ((t2.grid ? Z2 : c3) - 1) : (u2.w - 2 * t2.padding - K2.w) / ((t2.grid ? Z2 : c3) + 1), _2);
              return { x: q2 + (a3 + 1 - (c3 + 1) / 2) * d3, y: U2 + (r3 + 1 - (O2 + 1) / 2) * G2 };
            }(e3), u2, Q2[t2.direction]);
          }), this;
        };
        var Du = { fit: true, padding: 30, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, spacingFactor: void 0, radius: void 0, startAngle: 1.5 * Math.PI, sweep: void 0, clockwise: true, sort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), ready: void 0, stop: void 0, transform: /* @__PURE__ */ __name(function(e2, t2) {
          return t2;
        }, "transform") };
        function _u(e2) {
          this.options = ge({}, Du, e2);
        }
        __name(_u, "_u");
        _u.prototype.run = function() {
          var e2 = this.options, t2 = e2, n2 = e2.cy, r2 = t2.eles, a2 = void 0 !== t2.counterclockwise ? !t2.counterclockwise : t2.clockwise, i2 = r2.nodes().not(":parent");
          t2.sort && (i2 = i2.sort(t2.sort));
          for (var o2, s2 = Jt(t2.boundingBox ? t2.boundingBox : { x1: 0, y1: 0, w: n2.width(), h: n2.height() }), l2 = s2.x1 + s2.w / 2, u2 = s2.y1 + s2.h / 2, c2 = (void 0 === t2.sweep ? 2 * Math.PI - 2 * Math.PI / i2.length : t2.sweep) / Math.max(1, i2.length - 1), d2 = 0, h2 = 0; h2 < i2.length; h2++) {
            var f2 = i2[h2].layoutDimensions(t2), p2 = f2.w, v2 = f2.h;
            d2 = Math.max(d2, p2, v2);
          }
          if (o2 = G(t2.radius) ? t2.radius : i2.length <= 1 ? 0 : Math.min(s2.h, s2.w) / 2 - d2, i2.length > 1 && t2.avoidOverlap) {
            d2 *= 1.75;
            var g2 = Math.cos(c2) - Math.cos(0), y2 = Math.sin(c2) - Math.sin(0), m2 = Math.sqrt(d2 * d2 / (g2 * g2 + y2 * y2));
            o2 = Math.max(m2, o2);
          }
          return r2.nodes().layoutPositions(this, t2, function(e3, n3) {
            var r3 = t2.startAngle + n3 * c2 * (a2 ? 1 : -1), i3 = o2 * Math.cos(r3), s3 = o2 * Math.sin(r3);
            return { x: l2 + i3, y: u2 + s3 };
          }), this;
        };
        var Au, Mu = { fit: true, padding: 30, startAngle: 1.5 * Math.PI, sweep: void 0, clockwise: true, equidistant: false, minNodeSpacing: 10, boundingBox: void 0, avoidOverlap: true, nodeDimensionsIncludeLabels: false, height: void 0, width: void 0, spacingFactor: void 0, concentric: /* @__PURE__ */ __name(function(e2) {
          return e2.degree();
        }, "concentric"), levelWidth: /* @__PURE__ */ __name(function(e2) {
          return e2.maxDegree() / 4;
        }, "levelWidth"), animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), ready: void 0, stop: void 0, transform: /* @__PURE__ */ __name(function(e2, t2) {
          return t2;
        }, "transform") };
        function Ru(e2) {
          this.options = ge({}, Mu, e2);
        }
        __name(Ru, "Ru");
        Ru.prototype.run = function() {
          for (var e2 = this.options, t2 = e2, n2 = void 0 !== t2.counterclockwise ? !t2.counterclockwise : t2.clockwise, r2 = e2.cy, a2 = t2.eles, i2 = a2.nodes().not(":parent"), o2 = Jt(t2.boundingBox ? t2.boundingBox : { x1: 0, y1: 0, w: r2.width(), h: r2.height() }), s2 = o2.x1 + o2.w / 2, l2 = o2.y1 + o2.h / 2, u2 = [], c2 = 0, d2 = 0; d2 < i2.length; d2++) {
            var h2, f2 = i2[d2];
            h2 = t2.concentric(f2), u2.push({ value: h2, node: f2 }), f2._private.scratch.concentric = h2;
          }
          i2.updateStyle();
          for (var p2 = 0; p2 < i2.length; p2++) {
            var v2 = i2[p2].layoutDimensions(t2);
            c2 = Math.max(c2, v2.w, v2.h);
          }
          u2.sort(function(e3, t3) {
            return t3.value - e3.value;
          });
          for (var g2 = t2.levelWidth(i2), y2 = [[]], m2 = y2[0], b2 = 0; b2 < u2.length; b2++) {
            var x2 = u2[b2];
            if (m2.length > 0) Math.abs(m2[0].value - x2.value) >= g2 && (m2 = [], y2.push(m2));
            m2.push(x2);
          }
          var w2 = c2 + t2.minNodeSpacing;
          if (!t2.avoidOverlap) {
            var E2 = y2.length > 0 && y2[0].length > 1, k2 = (Math.min(o2.w, o2.h) / 2 - w2) / (y2.length + E2 ? 1 : 0);
            w2 = Math.min(w2, k2);
          }
          for (var T2 = 0, C2 = 0; C2 < y2.length; C2++) {
            var P2 = y2[C2], S2 = void 0 === t2.sweep ? 2 * Math.PI - 2 * Math.PI / P2.length : t2.sweep, B2 = P2.dTheta = S2 / Math.max(1, P2.length - 1);
            if (P2.length > 1 && t2.avoidOverlap) {
              var D2 = Math.cos(B2) - Math.cos(0), _2 = Math.sin(B2) - Math.sin(0), A2 = Math.sqrt(w2 * w2 / (D2 * D2 + _2 * _2));
              T2 = Math.max(A2, T2);
            }
            P2.r = T2, T2 += w2;
          }
          if (t2.equidistant) {
            for (var M2 = 0, R2 = 0, I2 = 0; I2 < y2.length; I2++) {
              var N2 = y2[I2].r - R2;
              M2 = Math.max(M2, N2);
            }
            R2 = 0;
            for (var L2 = 0; L2 < y2.length; L2++) {
              var z2 = y2[L2];
              0 === L2 && (R2 = z2.r), z2.r = R2, R2 += M2;
            }
          }
          for (var O2 = {}, V2 = 0; V2 < y2.length; V2++) for (var F2 = y2[V2], X2 = F2.dTheta, j2 = F2.r, Y2 = 0; Y2 < F2.length; Y2++) {
            var q2 = F2[Y2], W2 = t2.startAngle + (n2 ? 1 : -1) * X2 * Y2, U2 = { x: s2 + j2 * Math.cos(W2), y: l2 + j2 * Math.sin(W2) };
            O2[q2.node.id()] = U2;
          }
          return a2.nodes().layoutPositions(this, t2, function(e3) {
            var t3 = e3.id();
            return O2[t3];
          }), this;
        };
        var Iu = { ready: /* @__PURE__ */ __name(function() {
        }, "ready"), stop: /* @__PURE__ */ __name(function() {
        }, "stop"), animate: true, animationEasing: void 0, animationDuration: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), animationThreshold: 250, refresh: 20, fit: true, padding: 30, boundingBox: void 0, nodeDimensionsIncludeLabels: false, randomize: false, componentSpacing: 40, nodeRepulsion: /* @__PURE__ */ __name(function(e2) {
          return 2048;
        }, "nodeRepulsion"), nodeOverlap: 4, idealEdgeLength: /* @__PURE__ */ __name(function(e2) {
          return 32;
        }, "idealEdgeLength"), edgeElasticity: /* @__PURE__ */ __name(function(e2) {
          return 32;
        }, "edgeElasticity"), nestingFactor: 1.2, gravity: 1, numIter: 1e3, initialTemp: 1e3, coolingFactor: 0.99, minTemp: 1 };
        function Nu(e2) {
          this.options = ge({}, Iu, e2), this.options.layout = this;
          var t2 = this.options.eles.nodes(), n2 = this.options.eles.edges().filter(function(e3) {
            var n3 = e3.source().data("id"), r2 = e3.target().data("id"), a2 = t2.some(function(e4) {
              return e4.data("id") === n3;
            }), i2 = t2.some(function(e4) {
              return e4.data("id") === r2;
            });
            return !a2 || !i2;
          });
          this.options.eles = this.options.eles.not(n2);
        }
        __name(Nu, "Nu");
        Nu.prototype.run = function() {
          var e2 = this.options, t2 = e2.cy, n2 = this;
          n2.stopped = false, true !== e2.animate && false !== e2.animate || n2.emit({ type: "layoutstart", layout: n2 }), Au = true === e2.debug;
          var r2 = Lu(t2, n2, e2);
          Au && (void 0)(r2), e2.randomize && Vu(r2);
          var a2 = Ne(), i2 = /* @__PURE__ */ __name(function() {
            Xu(r2, t2, e2), true === e2.fit && t2.fit(e2.padding);
          }, "i"), o2 = /* @__PURE__ */ __name(function(t3) {
            return !(n2.stopped || t3 >= e2.numIter) && (ju(r2, e2), r2.temperature = r2.temperature * e2.coolingFactor, !(r2.temperature < e2.minTemp));
          }, "o"), s2 = /* @__PURE__ */ __name(function() {
            if (true === e2.animate || false === e2.animate) i2(), n2.one("layoutstop", e2.stop), n2.emit({ type: "layoutstop", layout: n2 });
            else {
              var t3 = e2.eles.nodes(), a3 = Fu(r2, e2, t3);
              t3.layoutPositions(n2, e2, a3);
            }
          }, "s"), l2 = 0, u2 = true;
          if (true === e2.animate) {
            var c2 = /* @__PURE__ */ __name(function() {
              for (var t3 = 0; u2 && t3 < e2.refresh; ) u2 = o2(l2), l2++, t3++;
              u2 ? (Ne() - a2 >= e2.animationThreshold && i2(), Ie(c2)) : (ec(r2, e2), s2());
            }, "c");
            c2();
          } else {
            for (; u2; ) u2 = o2(l2), l2++;
            ec(r2, e2), s2();
          }
          return this;
        }, Nu.prototype.stop = function() {
          return this.stopped = true, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
        }, Nu.prototype.destroy = function() {
          return this.thread && this.thread.stop(), this;
        };
        var Lu = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = n2.eles.edges(), a2 = n2.eles.nodes(), i2 = Jt(n2.boundingBox ? n2.boundingBox : { x1: 0, y1: 0, w: e2.width(), h: e2.height() }), o2 = { isCompound: e2.hasCompoundNodes(), layoutNodes: [], idToIndex: {}, nodeSize: a2.size(), graphSet: [], indexToGraph: [], layoutEdges: [], edgeSize: r2.size(), temperature: n2.initialTemp, clientWidth: i2.w, clientHeight: i2.h, boundingBox: i2 }, s2 = n2.eles.components(), l2 = {}, u2 = 0; u2 < s2.length; u2++) for (var c2 = s2[u2], d2 = 0; d2 < c2.length; d2++) {
            l2[c2[d2].id()] = u2;
          }
          for (u2 = 0; u2 < o2.nodeSize; u2++) {
            var h2 = (y2 = a2[u2]).layoutDimensions(n2);
            (R2 = {}).isLocked = y2.locked(), R2.id = y2.data("id"), R2.parentId = y2.data("parent"), R2.cmptId = l2[y2.id()], R2.children = [], R2.positionX = y2.position("x"), R2.positionY = y2.position("y"), R2.offsetX = 0, R2.offsetY = 0, R2.height = h2.w, R2.width = h2.h, R2.maxX = R2.positionX + R2.width / 2, R2.minX = R2.positionX - R2.width / 2, R2.maxY = R2.positionY + R2.height / 2, R2.minY = R2.positionY - R2.height / 2, R2.padLeft = parseFloat(y2.style("padding")), R2.padRight = parseFloat(y2.style("padding")), R2.padTop = parseFloat(y2.style("padding")), R2.padBottom = parseFloat(y2.style("padding")), R2.nodeRepulsion = U(n2.nodeRepulsion) ? n2.nodeRepulsion(y2) : n2.nodeRepulsion, o2.layoutNodes.push(R2), o2.idToIndex[R2.id] = u2;
          }
          var f2 = [], p2 = 0, v2 = -1, g2 = [];
          for (u2 = 0; u2 < o2.nodeSize; u2++) {
            var y2, m2 = (y2 = o2.layoutNodes[u2]).parentId;
            null != m2 ? o2.layoutNodes[o2.idToIndex[m2]].children.push(y2.id) : (f2[++v2] = y2.id, g2.push(y2.id));
          }
          for (o2.graphSet.push(g2); p2 <= v2; ) {
            var b2 = f2[p2++], x2 = o2.idToIndex[b2], w2 = o2.layoutNodes[x2].children;
            if (w2.length > 0) {
              o2.graphSet.push(w2);
              for (u2 = 0; u2 < w2.length; u2++) f2[++v2] = w2[u2];
            }
          }
          for (u2 = 0; u2 < o2.graphSet.length; u2++) {
            var E2 = o2.graphSet[u2];
            for (d2 = 0; d2 < E2.length; d2++) {
              var k2 = o2.idToIndex[E2[d2]];
              o2.indexToGraph[k2] = u2;
            }
          }
          for (u2 = 0; u2 < o2.edgeSize; u2++) {
            var T2 = r2[u2], C2 = {};
            C2.id = T2.data("id"), C2.sourceId = T2.data("source"), C2.targetId = T2.data("target");
            var P2 = U(n2.idealEdgeLength) ? n2.idealEdgeLength(T2) : n2.idealEdgeLength, S2 = U(n2.edgeElasticity) ? n2.edgeElasticity(T2) : n2.edgeElasticity, B2 = o2.idToIndex[C2.sourceId], D2 = o2.idToIndex[C2.targetId];
            if (o2.indexToGraph[B2] != o2.indexToGraph[D2]) {
              for (var _2 = zu(C2.sourceId, C2.targetId, o2), A2 = o2.graphSet[_2], M2 = 0, R2 = o2.layoutNodes[B2]; -1 === A2.indexOf(R2.id); ) R2 = o2.layoutNodes[o2.idToIndex[R2.parentId]], M2++;
              for (R2 = o2.layoutNodes[D2]; -1 === A2.indexOf(R2.id); ) R2 = o2.layoutNodes[o2.idToIndex[R2.parentId]], M2++;
              P2 *= M2 * n2.nestingFactor;
            }
            C2.idealLength = P2, C2.elasticity = S2, o2.layoutEdges.push(C2);
          }
          return o2;
        }, "Lu"), zu = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = Ou(e2, t2, 0, n2);
          return 2 > r2.count ? 0 : r2.graph;
        }, "zu"), Ou = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = r2.graphSet[n2];
          if (-1 < a2.indexOf(e2) && -1 < a2.indexOf(t2)) return { count: 2, graph: n2 };
          for (var i2 = 0, o2 = 0; o2 < a2.length; o2++) {
            var s2 = a2[o2], l2 = r2.idToIndex[s2], u2 = r2.layoutNodes[l2].children;
            if (0 !== u2.length) {
              var c2 = r2.indexToGraph[r2.idToIndex[u2[0]]], d2 = Ou(e2, t2, c2, r2);
              if (0 !== d2.count) {
                if (1 !== d2.count) return d2;
                if (2 === ++i2) break;
              }
            }
          }
          return { count: i2, graph: n2 };
        }, "Ou"), Vu = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = e2.clientWidth, r2 = e2.clientHeight, a2 = 0; a2 < e2.nodeSize; a2++) {
            var i2 = e2.layoutNodes[a2];
            0 !== i2.children.length || i2.isLocked || (i2.positionX = Math.random() * n2, i2.positionY = Math.random() * r2);
          }
        }, "Vu"), Fu = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = e2.boundingBox, a2 = { x1: 1 / 0, x2: -1 / 0, y1: 1 / 0, y2: -1 / 0 };
          return t2.boundingBox && (n2.forEach(function(t3) {
            var n3 = e2.layoutNodes[e2.idToIndex[t3.data("id")]];
            a2.x1 = Math.min(a2.x1, n3.positionX), a2.x2 = Math.max(a2.x2, n3.positionX), a2.y1 = Math.min(a2.y1, n3.positionY), a2.y2 = Math.max(a2.y2, n3.positionY);
          }), a2.w = a2.x2 - a2.x1, a2.h = a2.y2 - a2.y1), function(n3, i2) {
            var o2 = e2.layoutNodes[e2.idToIndex[n3.data("id")]];
            if (t2.boundingBox) {
              var s2 = 0 === a2.w ? 0.5 : (o2.positionX - a2.x1) / a2.w, l2 = 0 === a2.h ? 0.5 : (o2.positionY - a2.y1) / a2.h;
              return { x: r2.x1 + s2 * r2.w, y: r2.y1 + l2 * r2.h };
            }
            return { x: o2.positionX, y: o2.positionY };
          };
        }, "Fu"), Xu = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = n2.layout, a2 = n2.eles.nodes(), i2 = Fu(e2, n2, a2);
          a2.positions(i2), true !== e2.ready && (e2.ready = true, r2.one("layoutready", n2.ready), r2.emit({ type: "layoutready", layout: this }));
        }, "Xu"), ju = /* @__PURE__ */ __name(function(e2, t2, n2) {
          Yu(e2, t2), Ku(e2), Gu(e2, t2), Zu(e2), $u(e2);
        }, "ju"), Yu = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < e2.graphSet.length; n2++) for (var r2 = e2.graphSet[n2], a2 = r2.length, i2 = 0; i2 < a2; i2++) for (var o2 = e2.layoutNodes[e2.idToIndex[r2[i2]]], s2 = i2 + 1; s2 < a2; s2++) {
            var l2 = e2.layoutNodes[e2.idToIndex[r2[s2]]];
            Wu(o2, l2, e2, t2);
          }
        }, "Yu"), qu = /* @__PURE__ */ __name(function(e2) {
          return 2 * e2 * Math.random() - 1;
        }, "qu"), Wu = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          if (e2.cmptId === t2.cmptId || n2.isCompound) {
            var a2 = t2.positionX - e2.positionX, i2 = t2.positionY - e2.positionY;
            0 === a2 && 0 === i2 && (a2 = qu(1), i2 = qu(1));
            var o2 = Uu(e2, t2, a2, i2);
            if (o2 > 0) var s2 = (u2 = r2.nodeOverlap * o2) * a2 / (v2 = Math.sqrt(a2 * a2 + i2 * i2)), l2 = u2 * i2 / v2;
            else {
              var u2, c2 = Hu(e2, a2, i2), d2 = Hu(t2, -1 * a2, -1 * i2), h2 = d2.x - c2.x, f2 = d2.y - c2.y, p2 = h2 * h2 + f2 * f2, v2 = Math.sqrt(p2);
              s2 = (u2 = (e2.nodeRepulsion + t2.nodeRepulsion) / p2) * h2 / v2, l2 = u2 * f2 / v2;
            }
            e2.isLocked || (e2.offsetX -= s2, e2.offsetY -= l2), t2.isLocked || (t2.offsetX += s2, t2.offsetY += l2);
          }
        }, "Wu"), Uu = /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          if (n2 > 0) var a2 = e2.maxX - t2.minX;
          else a2 = t2.maxX - e2.minX;
          if (r2 > 0) var i2 = e2.maxY - t2.minY;
          else i2 = t2.maxY - e2.minY;
          return a2 >= 0 && i2 >= 0 ? Math.sqrt(a2 * a2 + i2 * i2) : 0;
        }, "Uu"), Hu = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = e2.positionX, a2 = e2.positionY, i2 = e2.height || 1, o2 = e2.width || 1, s2 = n2 / t2, l2 = i2 / o2, u2 = {};
          return 0 === t2 && 0 < n2 || 0 === t2 && 0 > n2 ? (u2.x = r2, u2.y = a2 + i2 / 2, u2) : 0 < t2 && -1 * l2 <= s2 && s2 <= l2 ? (u2.x = r2 + o2 / 2, u2.y = a2 + o2 * n2 / 2 / t2, u2) : 0 > t2 && -1 * l2 <= s2 && s2 <= l2 ? (u2.x = r2 - o2 / 2, u2.y = a2 - o2 * n2 / 2 / t2, u2) : 0 < n2 && (s2 <= -1 * l2 || s2 >= l2) ? (u2.x = r2 + i2 * t2 / 2 / n2, u2.y = a2 + i2 / 2, u2) : 0 > n2 && (s2 <= -1 * l2 || s2 >= l2) ? (u2.x = r2 - i2 * t2 / 2 / n2, u2.y = a2 - i2 / 2, u2) : u2;
        }, "Hu"), Ku = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < e2.edgeSize; n2++) {
            var r2 = e2.layoutEdges[n2], a2 = e2.idToIndex[r2.sourceId], i2 = e2.layoutNodes[a2], o2 = e2.idToIndex[r2.targetId], s2 = e2.layoutNodes[o2], l2 = s2.positionX - i2.positionX, u2 = s2.positionY - i2.positionY;
            if (0 !== l2 || 0 !== u2) {
              var c2 = Hu(i2, l2, u2), d2 = Hu(s2, -1 * l2, -1 * u2), h2 = d2.x - c2.x, f2 = d2.y - c2.y, p2 = Math.sqrt(h2 * h2 + f2 * f2), v2 = Math.pow(r2.idealLength - p2, 2) / r2.elasticity;
              if (0 !== p2) var g2 = v2 * h2 / p2, y2 = v2 * f2 / p2;
              else g2 = 0, y2 = 0;
              i2.isLocked || (i2.offsetX += g2, i2.offsetY += y2), s2.isLocked || (s2.offsetX -= g2, s2.offsetY -= y2);
            }
          }
        }, "Ku"), Gu = /* @__PURE__ */ __name(function(e2, t2) {
          if (0 !== t2.gravity) for (var n2 = 0; n2 < e2.graphSet.length; n2++) {
            var r2 = e2.graphSet[n2], a2 = r2.length;
            if (0 === n2) var i2 = e2.clientHeight / 2, o2 = e2.clientWidth / 2;
            else {
              var s2 = e2.layoutNodes[e2.idToIndex[r2[0]]], l2 = e2.layoutNodes[e2.idToIndex[s2.parentId]];
              i2 = l2.positionX, o2 = l2.positionY;
            }
            for (var u2 = 0; u2 < a2; u2++) {
              var c2 = e2.layoutNodes[e2.idToIndex[r2[u2]]];
              if (!c2.isLocked) {
                var d2 = i2 - c2.positionX, h2 = o2 - c2.positionY, f2 = Math.sqrt(d2 * d2 + h2 * h2);
                if (f2 > 1) {
                  var p2 = t2.gravity * d2 / f2, v2 = t2.gravity * h2 / f2;
                  c2.offsetX += p2, c2.offsetY += v2;
                }
              }
            }
          }
        }, "Gu"), Zu = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = [], r2 = 0, a2 = -1;
          for (n2.push.apply(n2, e2.graphSet[0]), a2 += e2.graphSet[0].length; r2 <= a2; ) {
            var i2 = n2[r2++], o2 = e2.idToIndex[i2], s2 = e2.layoutNodes[o2], l2 = s2.children;
            if (0 < l2.length && !s2.isLocked) {
              for (var u2 = s2.offsetX, c2 = s2.offsetY, d2 = 0; d2 < l2.length; d2++) {
                var h2 = e2.layoutNodes[e2.idToIndex[l2[d2]]];
                h2.offsetX += u2, h2.offsetY += c2, n2[++a2] = l2[d2];
              }
              s2.offsetX = 0, s2.offsetY = 0;
            }
          }
        }, "Zu"), $u = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < e2.nodeSize; n2++) {
            0 < (a2 = e2.layoutNodes[n2]).children.length && (a2.maxX = void 0, a2.minX = void 0, a2.maxY = void 0, a2.minY = void 0);
          }
          for (n2 = 0; n2 < e2.nodeSize; n2++) {
            if (!(0 < (a2 = e2.layoutNodes[n2]).children.length || a2.isLocked)) {
              var r2 = Qu(a2.offsetX, a2.offsetY, e2.temperature);
              a2.positionX += r2.x, a2.positionY += r2.y, a2.offsetX = 0, a2.offsetY = 0, a2.minX = a2.positionX - a2.width, a2.maxX = a2.positionX + a2.width, a2.minY = a2.positionY - a2.height, a2.maxY = a2.positionY + a2.height, Ju(a2, e2);
            }
          }
          for (n2 = 0; n2 < e2.nodeSize; n2++) {
            var a2;
            0 < (a2 = e2.layoutNodes[n2]).children.length && !a2.isLocked && (a2.positionX = (a2.maxX + a2.minX) / 2, a2.positionY = (a2.maxY + a2.minY) / 2, a2.width = a2.maxX - a2.minX, a2.height = a2.maxY - a2.minY);
          }
        }, "$u"), Qu = /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = Math.sqrt(e2 * e2 + t2 * t2);
          if (r2 > n2) var a2 = { x: n2 * e2 / r2, y: n2 * t2 / r2 };
          else a2 = { x: e2, y: t2 };
          return a2;
        }, "Qu"), Ju = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = e2.parentId;
          if (null != n2) {
            var r2 = t2.layoutNodes[t2.idToIndex[n2]], a2 = false;
            return (null == r2.maxX || e2.maxX + r2.padRight > r2.maxX) && (r2.maxX = e2.maxX + r2.padRight, a2 = true), (null == r2.minX || e2.minX - r2.padLeft < r2.minX) && (r2.minX = e2.minX - r2.padLeft, a2 = true), (null == r2.maxY || e2.maxY + r2.padBottom > r2.maxY) && (r2.maxY = e2.maxY + r2.padBottom, a2 = true), (null == r2.minY || e2.minY - r2.padTop < r2.minY) && (r2.minY = e2.minY - r2.padTop, a2 = true), a2 ? Ju(r2, t2) : void 0;
          }
        }, "Ju"), ec = /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = e2.layoutNodes, r2 = [], a2 = 0; a2 < n2.length; a2++) {
            var i2 = n2[a2], o2 = i2.cmptId;
            (r2[o2] = r2[o2] || []).push(i2);
          }
          var s2 = 0;
          for (a2 = 0; a2 < r2.length; a2++) {
            if (v2 = r2[a2]) {
              v2.x1 = 1 / 0, v2.x2 = -1 / 0, v2.y1 = 1 / 0, v2.y2 = -1 / 0;
              for (var l2 = 0; l2 < v2.length; l2++) {
                var u2 = v2[l2];
                v2.x1 = Math.min(v2.x1, u2.positionX - u2.width / 2), v2.x2 = Math.max(v2.x2, u2.positionX + u2.width / 2), v2.y1 = Math.min(v2.y1, u2.positionY - u2.height / 2), v2.y2 = Math.max(v2.y2, u2.positionY + u2.height / 2);
              }
              v2.w = v2.x2 - v2.x1, v2.h = v2.y2 - v2.y1, s2 += v2.w * v2.h;
            }
          }
          r2.sort(function(e3, t3) {
            return t3.w * t3.h - e3.w * e3.h;
          });
          var c2 = 0, d2 = 0, h2 = 0, f2 = 0, p2 = Math.sqrt(s2) * e2.clientWidth / e2.clientHeight;
          for (a2 = 0; a2 < r2.length; a2++) {
            var v2;
            if (v2 = r2[a2]) {
              for (l2 = 0; l2 < v2.length; l2++) {
                (u2 = v2[l2]).isLocked || (u2.positionX += c2 - v2.x1, u2.positionY += d2 - v2.y1);
              }
              c2 += v2.w + t2.componentSpacing, h2 += v2.w + t2.componentSpacing, f2 = Math.max(f2, v2.h), h2 > p2 && (d2 += f2 + t2.componentSpacing, c2 = 0, h2 = 0, f2 = 0);
            }
          }
        }, "ec"), tc = { fit: true, padding: 30, boundingBox: void 0, avoidOverlap: true, avoidOverlapPadding: 10, nodeDimensionsIncludeLabels: false, spacingFactor: void 0, condense: false, rows: void 0, cols: void 0, position: /* @__PURE__ */ __name(function(e2) {
        }, "position"), sort: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), ready: void 0, stop: void 0, transform: /* @__PURE__ */ __name(function(e2, t2) {
          return t2;
        }, "transform") };
        function nc(e2) {
          this.options = ge({}, tc, e2);
        }
        __name(nc, "nc");
        nc.prototype.run = function() {
          var e2 = this.options, t2 = e2, n2 = e2.cy, r2 = t2.eles, a2 = r2.nodes().not(":parent");
          t2.sort && (a2 = a2.sort(t2.sort));
          var i2 = Jt(t2.boundingBox ? t2.boundingBox : { x1: 0, y1: 0, w: n2.width(), h: n2.height() });
          if (0 === i2.h || 0 === i2.w) r2.nodes().layoutPositions(this, t2, function(e3) {
            return { x: i2.x1, y: i2.y1 };
          });
          else {
            var o2 = a2.size(), s2 = Math.sqrt(o2 * i2.h / i2.w), l2 = Math.round(s2), u2 = Math.round(i2.w / i2.h * s2), c2 = /* @__PURE__ */ __name(function(e3) {
              if (null == e3) return Math.min(l2, u2);
              Math.min(l2, u2) == l2 ? l2 = e3 : u2 = e3;
            }, "c"), d2 = /* @__PURE__ */ __name(function(e3) {
              if (null == e3) return Math.max(l2, u2);
              Math.max(l2, u2) == l2 ? l2 = e3 : u2 = e3;
            }, "d"), h2 = t2.rows, f2 = null != t2.cols ? t2.cols : t2.columns;
            if (null != h2 && null != f2) l2 = h2, u2 = f2;
            else if (null != h2 && null == f2) l2 = h2, u2 = Math.ceil(o2 / l2);
            else if (null == h2 && null != f2) u2 = f2, l2 = Math.ceil(o2 / u2);
            else if (u2 * l2 > o2) {
              var p2 = c2(), v2 = d2();
              (p2 - 1) * v2 >= o2 ? c2(p2 - 1) : (v2 - 1) * p2 >= o2 && d2(v2 - 1);
            } else for (; u2 * l2 < o2; ) {
              var g2 = c2(), y2 = d2();
              (y2 + 1) * g2 >= o2 ? d2(y2 + 1) : c2(g2 + 1);
            }
            var m2 = i2.w / u2, b2 = i2.h / l2;
            if (t2.condense && (m2 = 0, b2 = 0), t2.avoidOverlap) for (var x2 = 0; x2 < a2.length; x2++) {
              var w2 = a2[x2], E2 = w2._private.position;
              null != E2.x && null != E2.y || (E2.x = 0, E2.y = 0);
              var k2 = w2.layoutDimensions(t2), T2 = t2.avoidOverlapPadding, C2 = k2.w + T2, P2 = k2.h + T2;
              m2 = Math.max(m2, C2), b2 = Math.max(b2, P2);
            }
            for (var S2 = {}, B2 = function(e3, t3) {
              return !!S2["c-" + e3 + "-" + t3];
            }, D2 = function(e3, t3) {
              S2["c-" + e3 + "-" + t3] = true;
            }, _2 = 0, A2 = 0, M2 = function() {
              ++A2 >= u2 && (A2 = 0, _2++);
            }, R2 = {}, I2 = 0; I2 < a2.length; I2++) {
              var N2 = a2[I2], L2 = t2.position(N2);
              if (L2 && (void 0 !== L2.row || void 0 !== L2.col)) {
                var z2 = { row: L2.row, col: L2.col };
                if (void 0 === z2.col) for (z2.col = 0; B2(z2.row, z2.col); ) z2.col++;
                else if (void 0 === z2.row) for (z2.row = 0; B2(z2.row, z2.col); ) z2.row++;
                R2[N2.id()] = z2, D2(z2.row, z2.col);
              }
            }
            a2.layoutPositions(this, t2, function(e3, t3) {
              var n3, r3;
              if (e3.locked() || e3.isParent()) return false;
              var a3 = R2[e3.id()];
              if (a3) n3 = a3.col * m2 + m2 / 2 + i2.x1, r3 = a3.row * b2 + b2 / 2 + i2.y1;
              else {
                for (; B2(_2, A2); ) M2();
                n3 = A2 * m2 + m2 / 2 + i2.x1, r3 = _2 * b2 + b2 / 2 + i2.y1, D2(_2, A2), M2();
              }
              return { x: n3, y: r3 };
            });
          }
          return this;
        };
        var rc = { ready: /* @__PURE__ */ __name(function() {
        }, "ready"), stop: /* @__PURE__ */ __name(function() {
        }, "stop") };
        function ac(e2) {
          this.options = ge({}, rc, e2);
        }
        __name(ac, "ac");
        ac.prototype.run = function() {
          var e2 = this.options, t2 = e2.eles, n2 = this;
          return e2.cy, n2.emit("layoutstart"), t2.nodes().positions(function() {
            return { x: 0, y: 0 };
          }), n2.one("layoutready", e2.ready), n2.emit("layoutready"), n2.one("layoutstop", e2.stop), n2.emit("layoutstop"), this;
        }, ac.prototype.stop = function() {
          return this;
        };
        var ic = { positions: void 0, zoom: void 0, pan: void 0, fit: true, padding: 30, spacingFactor: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), ready: void 0, stop: void 0, transform: /* @__PURE__ */ __name(function(e2, t2) {
          return t2;
        }, "transform") };
        function oc(e2) {
          this.options = ge({}, ic, e2);
        }
        __name(oc, "oc");
        oc.prototype.run = function() {
          var e2 = this.options, t2 = e2.eles.nodes(), n2 = U(e2.positions);
          return t2.layoutPositions(this, e2, function(t3, r2) {
            var a2 = function(t4) {
              if (null == e2.positions) return function(e3) {
                return { x: e3.x, y: e3.y };
              }(t4.position());
              if (n2) return e2.positions(t4);
              var r3 = e2.positions[t4._private.data.id];
              return null == r3 ? null : r3;
            }(t3);
            return !t3.locked() && null != a2 && a2;
          }), this;
        };
        var sc = { fit: true, padding: 30, boundingBox: void 0, animate: false, animationDuration: 500, animationEasing: void 0, animateFilter: /* @__PURE__ */ __name(function(e2, t2) {
          return true;
        }, "animateFilter"), ready: void 0, stop: void 0, transform: /* @__PURE__ */ __name(function(e2, t2) {
          return t2;
        }, "transform") };
        function lc(e2) {
          this.options = ge({}, sc, e2);
        }
        __name(lc, "lc");
        lc.prototype.run = function() {
          var e2 = this.options, t2 = e2.cy, n2 = e2.eles, r2 = Jt(e2.boundingBox ? e2.boundingBox : { x1: 0, y1: 0, w: t2.width(), h: t2.height() });
          return n2.nodes().layoutPositions(this, e2, function(e3, t3) {
            return { x: r2.x1 + Math.round(Math.random() * r2.w), y: r2.y1 + Math.round(Math.random() * r2.h) };
          }), this;
        };
        var uc = [{ name: "breadthfirst", impl: Bu }, { name: "circle", impl: _u }, { name: "concentric", impl: Ru }, { name: "cose", impl: Nu }, { name: "grid", impl: nc }, { name: "null", impl: ac }, { name: "preset", impl: oc }, { name: "random", impl: lc }];
        function cc(e2) {
          this.options = e2, this.notifications = 0;
        }
        __name(cc, "cc");
        var dc = /* @__PURE__ */ __name(function() {
        }, "dc"), hc = /* @__PURE__ */ __name(function() {
          throw new Error("A headless instance can not render images");
        }, "hc");
        cc.prototype = { recalculateRenderedStyle: dc, notify: /* @__PURE__ */ __name(function() {
          this.notifications++;
        }, "notify"), init: dc, isHeadless: /* @__PURE__ */ __name(function() {
          return true;
        }, "isHeadless"), png: hc, jpg: hc };
        var fc = { arrowShapeWidth: 0.3, registerArrowShapes: /* @__PURE__ */ __name(function() {
          var e2 = this.arrowShapes = {}, t2 = this, n2 = /* @__PURE__ */ __name(function(e3, t3, n3, r3, a3, i3, o3) {
            var s3 = a3.x - n3 / 2 - o3, l2 = a3.x + n3 / 2 + o3, u2 = a3.y - n3 / 2 - o3, c2 = a3.y + n3 / 2 + o3;
            return s3 <= e3 && e3 <= l2 && u2 <= t3 && t3 <= c2;
          }, "n"), r2 = /* @__PURE__ */ __name(function(e3, t3, n3, r3, a3) {
            var i3 = e3 * Math.cos(r3) - t3 * Math.sin(r3), o3 = (e3 * Math.sin(r3) + t3 * Math.cos(r3)) * n3;
            return { x: i3 * n3 + a3.x, y: o3 + a3.y };
          }, "r"), a2 = /* @__PURE__ */ __name(function(e3, t3, n3, a3) {
            for (var i3 = [], o3 = 0; o3 < e3.length; o3 += 2) {
              var s3 = e3[o3], l2 = e3[o3 + 1];
              i3.push(r2(s3, l2, t3, n3, a3));
            }
            return i3;
          }, "a"), i2 = /* @__PURE__ */ __name(function(e3) {
            for (var t3 = [], n3 = 0; n3 < e3.length; n3++) {
              var r3 = e3[n3];
              t3.push(r3.x, r3.y);
            }
            return t3;
          }, "i"), o2 = /* @__PURE__ */ __name(function(e3) {
            return e3.pstyle("width").pfValue * e3.pstyle("arrow-scale").pfValue * 2;
          }, "o"), s2 = /* @__PURE__ */ __name(function(r3, s3) {
            W(s3) && (s3 = e2[s3]), e2[r3] = ge({ name: r3, points: [-0.15, -0.3, 0.15, -0.3, 0.15, 0.3, -0.15, 0.3], collide: /* @__PURE__ */ __name(function(e3, t3, n3, r4, o3, s4) {
              var l2 = i2(a2(this.points, n3 + 2 * s4, r4, o3));
              return gn(e3, t3, l2);
            }, "collide"), roughCollide: n2, draw: /* @__PURE__ */ __name(function(e3, n3, r4, i3) {
              var o3 = a2(this.points, n3, r4, i3);
              t2.arrowShapeImpl("polygon")(e3, o3);
            }, "draw"), spacing: /* @__PURE__ */ __name(function(e3) {
              return 0;
            }, "spacing"), gap: o2 }, s3);
          }, "s");
          s2("none", { collide: Je, roughCollide: Je, draw: tt, spacing: et, gap: et }), s2("triangle", { points: [-0.15, -0.3, 0, 0, 0.15, -0.3] }), s2("arrow", "triangle"), s2("triangle-backcurve", { points: e2.triangle.points, controlPoint: [0, -0.15], roughCollide: n2, draw: /* @__PURE__ */ __name(function(e3, n3, i3, o3, s3) {
            var l2 = a2(this.points, n3, i3, o3), u2 = this.controlPoint, c2 = r2(u2[0], u2[1], n3, i3, o3);
            t2.arrowShapeImpl(this.name)(e3, l2, c2);
          }, "draw"), gap: /* @__PURE__ */ __name(function(e3) {
            return 0.8 * o2(e3);
          }, "gap") }), s2("triangle-tee", { points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0], pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4], collide: /* @__PURE__ */ __name(function(e3, t3, n3, r3, o3, s3, l2) {
            var u2 = i2(a2(this.points, n3 + 2 * l2, r3, o3)), c2 = i2(a2(this.pointsTee, n3 + 2 * l2, r3, o3));
            return gn(e3, t3, u2) || gn(e3, t3, c2);
          }, "collide"), draw: /* @__PURE__ */ __name(function(e3, n3, r3, i3, o3) {
            var s3 = a2(this.points, n3, r3, i3), l2 = a2(this.pointsTee, n3, r3, i3);
            t2.arrowShapeImpl(this.name)(e3, s3, l2);
          }, "draw") }), s2("circle-triangle", { radius: 0.15, pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15], collide: /* @__PURE__ */ __name(function(e3, t3, n3, r3, o3, s3, l2) {
            var u2 = o3, c2 = Math.pow(u2.x - e3, 2) + Math.pow(u2.y - t3, 2) <= Math.pow((n3 + 2 * l2) * this.radius, 2), d2 = i2(a2(this.points, n3 + 2 * l2, r3, o3));
            return gn(e3, t3, d2) || c2;
          }, "collide"), draw: /* @__PURE__ */ __name(function(e3, n3, r3, i3, o3) {
            var s3 = a2(this.pointsTr, n3, r3, i3);
            t2.arrowShapeImpl(this.name)(e3, s3, i3.x, i3.y, this.radius * n3);
          }, "draw"), spacing: /* @__PURE__ */ __name(function(e3) {
            return t2.getArrowWidth(e3.pstyle("width").pfValue, e3.pstyle("arrow-scale").value) * this.radius;
          }, "spacing") }), s2("triangle-cross", { points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0], baseCrossLinePts: [-0.15, -0.4, -0.15, -0.4, 0.15, -0.4, 0.15, -0.4], crossLinePts: /* @__PURE__ */ __name(function(e3, t3) {
            var n3 = this.baseCrossLinePts.slice(), r3 = t3 / e3;
            return n3[3] = n3[3] - r3, n3[5] = n3[5] - r3, n3;
          }, "crossLinePts"), collide: /* @__PURE__ */ __name(function(e3, t3, n3, r3, o3, s3, l2) {
            var u2 = i2(a2(this.points, n3 + 2 * l2, r3, o3)), c2 = i2(a2(this.crossLinePts(n3, s3), n3 + 2 * l2, r3, o3));
            return gn(e3, t3, u2) || gn(e3, t3, c2);
          }, "collide"), draw: /* @__PURE__ */ __name(function(e3, n3, r3, i3, o3) {
            var s3 = a2(this.points, n3, r3, i3), l2 = a2(this.crossLinePts(n3, o3), n3, r3, i3);
            t2.arrowShapeImpl(this.name)(e3, s3, l2);
          }, "draw") }), s2("vee", { points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15], gap: /* @__PURE__ */ __name(function(e3) {
            return 0.525 * o2(e3);
          }, "gap") }), s2("circle", { radius: 0.15, collide: /* @__PURE__ */ __name(function(e3, t3, n3, r3, a3, i3, o3) {
            var s3 = a3;
            return Math.pow(s3.x - e3, 2) + Math.pow(s3.y - t3, 2) <= Math.pow((n3 + 2 * o3) * this.radius, 2);
          }, "collide"), draw: /* @__PURE__ */ __name(function(e3, n3, r3, a3, i3) {
            t2.arrowShapeImpl(this.name)(e3, a3.x, a3.y, this.radius * n3);
          }, "draw"), spacing: /* @__PURE__ */ __name(function(e3) {
            return t2.getArrowWidth(e3.pstyle("width").pfValue, e3.pstyle("arrow-scale").value) * this.radius;
          }, "spacing") }), s2("tee", { points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0], spacing: /* @__PURE__ */ __name(function(e3) {
            return 1;
          }, "spacing"), gap: /* @__PURE__ */ __name(function(e3) {
            return 1;
          }, "gap") }), s2("square", { points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3] }), s2("diamond", { points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0], gap: /* @__PURE__ */ __name(function(e3) {
            return e3.pstyle("width").pfValue * e3.pstyle("arrow-scale").value;
          }, "gap") }), s2("chevron", { points: [0, 0, -0.15, -0.15, -0.1, -0.2, 0, -0.1, 0.1, -0.2, 0.15, -0.15], gap: /* @__PURE__ */ __name(function(e3) {
            return 0.95 * e3.pstyle("width").pfValue * e3.pstyle("arrow-scale").value;
          }, "gap") });
        }, "registerArrowShapes") }, pc = { projectIntoViewport: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this.cy, r2 = this.findContainerClientCoords(), a2 = r2[0], i2 = r2[1], o2 = r2[4], s2 = n2.pan(), l2 = n2.zoom();
          return [((e2 - a2) / o2 - s2.x) / l2, ((t2 - i2) / o2 - s2.y) / l2];
        }, "projectIntoViewport"), findContainerClientCoords: /* @__PURE__ */ __name(function() {
          if (this.containerBB) return this.containerBB;
          var e2 = this.container, t2 = e2.getBoundingClientRect(), n2 = this.cy.window().getComputedStyle(e2), r2 = /* @__PURE__ */ __name(function(e3) {
            return parseFloat(n2.getPropertyValue(e3));
          }, "r"), a2 = r2("padding-left"), i2 = r2("padding-right"), o2 = r2("padding-top"), s2 = r2("padding-bottom"), l2 = r2("border-left-width"), u2 = r2("border-right-width"), c2 = r2("border-top-width"), d2 = (r2("border-bottom-width"), e2.clientWidth), h2 = e2.clientHeight, f2 = a2 + i2, p2 = o2 + s2, v2 = l2 + u2, g2 = t2.width / (d2 + v2), y2 = d2 - f2, m2 = h2 - p2, b2 = t2.left + a2 + l2, x2 = t2.top + o2 + c2;
          return this.containerBB = [b2, x2, y2, m2, g2];
        }, "findContainerClientCoords"), invalidateContainerClientCoordsCache: /* @__PURE__ */ __name(function() {
          this.containerBB = null;
        }, "invalidateContainerClientCoordsCache"), findNearestElement: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          return this.findNearestElements(e2, t2, n2, r2)[0];
        }, "findNearestElement"), findNearestElements: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2, i2, o2 = this, s2 = this, l2 = s2.getCachedZSortedEles(), u2 = [], c2 = s2.cy.zoom(), d2 = s2.cy.hasCompoundNodes(), h2 = (r2 ? 24 : 8) / c2, f2 = (r2 ? 8 : 2) / c2, p2 = (r2 ? 8 : 2) / c2, v2 = 1 / 0;
          function g2(e3, t3) {
            if (e3.isNode()) {
              if (i2) return;
              i2 = e3, u2.push(e3);
            }
            if (e3.isEdge() && (null == t3 || t3 < v2)) if (a2) {
              if (a2.pstyle("z-compound-depth").value === e3.pstyle("z-compound-depth").value && a2.pstyle("z-compound-depth").value === e3.pstyle("z-compound-depth").value) {
                for (var n3 = 0; n3 < u2.length; n3++) if (u2[n3].isEdge()) {
                  u2[n3] = e3, a2 = e3, v2 = null != t3 ? t3 : v2;
                  break;
                }
              }
            } else u2.push(e3), a2 = e3, v2 = null != t3 ? t3 : v2;
          }
          __name(g2, "g");
          function y2(n3) {
            var r3 = n3.outerWidth() + 2 * f2, a3 = n3.outerHeight() + 2 * f2, i3 = r3 / 2, l3 = a3 / 2, u3 = n3.position(), c3 = "auto" === n3.pstyle("corner-radius").value ? "auto" : n3.pstyle("corner-radius").pfValue, d3 = n3._private.rscratch;
            if (u3.x - i3 <= e2 && e2 <= u3.x + i3 && u3.y - l3 <= t2 && t2 <= u3.y + l3 && s2.nodeShapes[o2.getNodeShape(n3)].checkPoint(e2, t2, 0, r3, a3, u3.x, u3.y, c3, d3)) return g2(n3, 0), true;
          }
          __name(y2, "y");
          function m2(n3) {
            var r3, a3 = n3._private, i3 = a3.rscratch, l3 = n3.pstyle("width").pfValue, c3 = n3.pstyle("arrow-scale").value, f3 = l3 / 2 + h2, p3 = f3 * f3, v3 = 2 * f3, m3 = a3.source, b3 = a3.target;
            if ("segments" === i3.edgeType || "straight" === i3.edgeType || "haystack" === i3.edgeType) {
              for (var x3 = i3.allpts, w3 = 0; w3 + 3 < x3.length; w3 += 2) if (hn(e2, t2, x3[w3], x3[w3 + 1], x3[w3 + 2], x3[w3 + 3], v3) && p3 > (r3 = vn(e2, t2, x3[w3], x3[w3 + 1], x3[w3 + 2], x3[w3 + 3]))) return g2(n3, r3), true;
            } else if ("bezier" === i3.edgeType || "multibezier" === i3.edgeType || "self" === i3.edgeType || "compound" === i3.edgeType) {
              for (x3 = i3.allpts, w3 = 0; w3 + 5 < i3.allpts.length; w3 += 4) if (fn(e2, t2, x3[w3], x3[w3 + 1], x3[w3 + 2], x3[w3 + 3], x3[w3 + 4], x3[w3 + 5], v3) && p3 > (r3 = pn(e2, t2, x3[w3], x3[w3 + 1], x3[w3 + 2], x3[w3 + 3], x3[w3 + 4], x3[w3 + 5]))) return g2(n3, r3), true;
            }
            m3 = m3 || a3.source, b3 = b3 || a3.target;
            var E3 = o2.getArrowWidth(l3, c3), k2 = [{ name: "source", x: i3.arrowStartX, y: i3.arrowStartY, angle: i3.srcArrowAngle }, { name: "target", x: i3.arrowEndX, y: i3.arrowEndY, angle: i3.tgtArrowAngle }, { name: "mid-source", x: i3.midX, y: i3.midY, angle: i3.midsrcArrowAngle }, { name: "mid-target", x: i3.midX, y: i3.midY, angle: i3.midtgtArrowAngle }];
            for (w3 = 0; w3 < k2.length; w3++) {
              var T2 = k2[w3], C2 = s2.arrowShapes[n3.pstyle(T2.name + "-arrow-shape").value], P2 = n3.pstyle("width").pfValue;
              if (C2.roughCollide(e2, t2, E3, T2.angle, { x: T2.x, y: T2.y }, P2, h2) && C2.collide(e2, t2, E3, T2.angle, { x: T2.x, y: T2.y }, P2, h2)) return g2(n3), true;
            }
            d2 && u2.length > 0 && (y2(m3), y2(b3));
          }
          __name(m2, "m");
          function b2(e3, t3, n3) {
            return ht(e3, t3, n3);
          }
          __name(b2, "b");
          function x2(n3, r3) {
            var a3, i3 = n3._private, o3 = p2;
            a3 = r3 ? r3 + "-" : "", n3.boundingBox();
            var s3 = i3.labelBounds[r3 || "main"], l3 = n3.pstyle(a3 + "label").value;
            if ("yes" === n3.pstyle("text-events").strValue && l3) {
              var u3 = b2(i3.rscratch, "labelX", r3), c3 = b2(i3.rscratch, "labelY", r3), d3 = b2(i3.rscratch, "labelAngle", r3), h3 = n3.pstyle(a3 + "text-margin-x").pfValue, f3 = n3.pstyle(a3 + "text-margin-y").pfValue, v3 = s3.x1 - o3 - h3, y3 = s3.x2 + o3 - h3, m3 = s3.y1 - o3 - f3, x3 = s3.y2 + o3 - f3;
              if (d3) {
                var w3 = Math.cos(d3), E3 = Math.sin(d3), k2 = /* @__PURE__ */ __name(function(e3, t3) {
                  return { x: (e3 -= u3) * w3 - (t3 -= c3) * E3 + u3, y: e3 * E3 + t3 * w3 + c3 };
                }, "k"), T2 = k2(v3, m3), C2 = k2(v3, x3), P2 = k2(y3, m3), S2 = k2(y3, x3), B2 = [T2.x + h3, T2.y + f3, P2.x + h3, P2.y + f3, S2.x + h3, S2.y + f3, C2.x + h3, C2.y + f3];
                if (gn(e2, t2, B2)) return g2(n3), true;
              } else if (on(s3, e2, t2)) return g2(n3), true;
            }
          }
          __name(x2, "x");
          n2 && (l2 = l2.interactive);
          for (var w2 = l2.length - 1; w2 >= 0; w2--) {
            var E2 = l2[w2];
            E2.isNode() ? y2(E2) || x2(E2) : m2(E2) || x2(E2) || x2(E2, "source") || x2(E2, "target");
          }
          return u2;
        }, "findNearestElements"), getAllInBox: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = this.getCachedZSortedEles().interactive, o2 = 2 / this.cy.zoom(), s2 = [], l2 = Math.min(e2, n2), u2 = Math.max(e2, n2), c2 = Math.min(t2, r2), d2 = Math.max(t2, r2), h2 = Jt({ x1: e2 = l2, y1: t2 = c2, x2: n2 = u2, y2: r2 = d2 }), f2 = [{ x: h2.x1, y: h2.y1 }, { x: h2.x2, y: h2.y1 }, { x: h2.x2, y: h2.y2 }, { x: h2.x1, y: h2.y2 }], p2 = [[f2[0], f2[1]], [f2[1], f2[2]], [f2[2], f2[3]], [f2[3], f2[0]]];
          function v2(e3, t3, n3) {
            return ht(e3, t3, n3);
          }
          __name(v2, "v");
          function g2(e3, t3) {
            var n3 = e3._private, r3 = o2;
            e3.boundingBox();
            var a3 = n3.labelBounds.main;
            if (!a3) return null;
            var i2 = v2(n3.rscratch, "labelX", t3), s3 = v2(n3.rscratch, "labelY", t3), l3 = v2(n3.rscratch, "labelAngle", t3), u3 = e3.pstyle("text-margin-x").pfValue, c3 = e3.pstyle("text-margin-y").pfValue, d3 = a3.x1 - r3 - u3, h3 = a3.x2 + r3 - u3, f3 = a3.y1 - r3 - c3, p3 = a3.y2 + r3 - c3;
            if (l3) {
              var g3 = Math.cos(l3), y3 = Math.sin(l3), m3 = /* @__PURE__ */ __name(function(e4, t4) {
                return { x: (e4 -= i2) * g3 - (t4 -= s3) * y3 + i2, y: e4 * y3 + t4 * g3 + s3 };
              }, "m");
              return [m3(d3, f3), m3(h3, f3), m3(h3, p3), m3(d3, p3)];
            }
            return [{ x: d3, y: f3 }, { x: h3, y: f3 }, { x: h3, y: p3 }, { x: d3, y: p3 }];
          }
          __name(g2, "g");
          function y2(e3, t3, n3, r3) {
            function a3(e4, t4, n4) {
              return (n4.y - e4.y) * (t4.x - e4.x) > (t4.y - e4.y) * (n4.x - e4.x);
            }
            __name(a3, "a");
            return a3(e3, n3, r3) !== a3(t3, n3, r3) && a3(e3, t3, n3) !== a3(e3, t3, r3);
          }
          __name(y2, "y");
          for (var m2 = 0; m2 < a2.length; m2++) {
            var b2 = a2[m2];
            if (b2.isNode()) {
              var x2 = b2, w2 = "yes" === x2.pstyle("text-events").strValue, E2 = x2.pstyle("box-selection").strValue, k2 = "yes" === x2.pstyle("box-select-labels").strValue;
              if ("none" === E2) continue;
              var T2 = ("overlap" === E2 || k2) && w2, C2 = x2.boundingBox({ includeNodes: true, includeEdges: false, includeLabels: T2 });
              if ("contain" === E2) {
                var P2 = false;
                if (k2 && w2) {
                  var S2 = g2(x2);
                  S2 && Rn(S2, f2) && (s2.push(x2), P2 = true);
                }
                !P2 && ln(h2, C2) && s2.push(x2);
              } else if ("overlap" === E2 && an(h2, C2)) {
                var B2 = x2.boundingBox({ includeNodes: true, includeEdges: true, includeLabels: false, includeMainLabels: false, includeSourceLabels: false, includeTargetLabels: false });
                if (Rn([{ x: B2.x1, y: B2.y1 }, { x: B2.x2, y: B2.y1 }, { x: B2.x2, y: B2.y2 }, { x: B2.x1, y: B2.y2 }], f2)) s2.push(x2);
                else {
                  var D2 = g2(x2);
                  D2 && Rn(D2, f2) && s2.push(x2);
                }
              }
            } else {
              var _2 = b2, A2 = _2._private, M2 = A2.rscratch, R2 = _2.pstyle("box-selection").strValue;
              if ("none" === R2) continue;
              if ("contain" === R2) {
                if (null != M2.startX && null != M2.startY && !on(h2, M2.startX, M2.startY)) continue;
                if (null != M2.endX && null != M2.endY && !on(h2, M2.endX, M2.endY)) continue;
                if ("bezier" === M2.edgeType || "multibezier" === M2.edgeType || "self" === M2.edgeType || "compound" === M2.edgeType || "segments" === M2.edgeType || "haystack" === M2.edgeType) {
                  for (var I2 = A2.rstyle.bezierPts || A2.rstyle.linePts || A2.rstyle.haystackPts, N2 = true, L2 = 0; L2 < I2.length; L2++) if (!sn(h2, I2[L2])) {
                    N2 = false;
                    break;
                  }
                  N2 && s2.push(_2);
                } else "straight" === M2.edgeType && s2.push(_2);
              } else if ("overlap" === R2) {
                var z2 = false;
                if (null != M2.startX && null != M2.startY && null != M2.endX && null != M2.endY && (on(h2, M2.startX, M2.startY) || on(h2, M2.endX, M2.endY))) s2.push(_2), z2 = true;
                else if (!z2 && "haystack" === M2.edgeType) {
                  for (var O2 = A2.rstyle.haystackPts, V2 = 0; V2 < O2.length; V2++) if (sn(h2, O2[V2])) {
                    s2.push(_2), z2 = true;
                    break;
                  }
                }
                if (!z2) {
                  var F2 = A2.rstyle.bezierPts || A2.rstyle.linePts || A2.rstyle.haystackPts;
                  if ((!F2 || F2.length < 2) && "straight" === M2.edgeType && null != M2.startX && null != M2.startY && null != M2.endX && null != M2.endY && (F2 = [{ x: M2.startX, y: M2.startY }, { x: M2.endX, y: M2.endY }]), !F2 || F2.length < 2) continue;
                  for (var X2 = 0; X2 < F2.length - 1; X2++) {
                    for (var j2 = F2[X2], Y2 = F2[X2 + 1], q2 = 0; q2 < p2.length; q2++) {
                      var W2 = i(p2[q2], 2);
                      if (y2(j2, Y2, W2[0], W2[1])) {
                        s2.push(_2), z2 = true;
                        break;
                      }
                    }
                    if (z2) break;
                  }
                }
              }
            }
          }
          return s2;
        }, "getAllInBox") }, vc = { calculateArrowAngles: /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2, a2, i2, o2, s2 = e2._private.rscratch, l2 = "haystack" === s2.edgeType, u2 = "bezier" === s2.edgeType, c2 = "multibezier" === s2.edgeType, d2 = "segments" === s2.edgeType, h2 = "compound" === s2.edgeType, f2 = "self" === s2.edgeType;
          if (l2 ? (r2 = s2.haystackPts[0], a2 = s2.haystackPts[1], i2 = s2.haystackPts[2], o2 = s2.haystackPts[3]) : (r2 = s2.arrowStartX, a2 = s2.arrowStartY, i2 = s2.arrowEndX, o2 = s2.arrowEndY), v2 = s2.midX, g2 = s2.midY, d2) t2 = r2 - s2.segpts[0], n2 = a2 - s2.segpts[1];
          else if (c2 || h2 || f2 || u2) {
            var p2 = s2.allpts;
            t2 = r2 - Zt(p2[0], p2[2], p2[4], 0.1), n2 = a2 - Zt(p2[1], p2[3], p2[5], 0.1);
          } else t2 = r2 - v2, n2 = a2 - g2;
          s2.srcArrowAngle = qt(t2, n2);
          var v2 = s2.midX, g2 = s2.midY;
          if (l2 && (v2 = (r2 + i2) / 2, g2 = (a2 + o2) / 2), t2 = i2 - r2, n2 = o2 - a2, d2) if ((p2 = s2.allpts).length / 2 % 2 == 0) {
            var y2 = (C2 = p2.length / 2) - 2;
            t2 = p2[C2] - p2[y2], n2 = p2[C2 + 1] - p2[y2 + 1];
          } else if (s2.isRound) t2 = s2.midVector[1], n2 = -s2.midVector[0];
          else {
            y2 = (C2 = p2.length / 2 - 1) - 2;
            t2 = p2[C2] - p2[y2], n2 = p2[C2 + 1] - p2[y2 + 1];
          }
          else if (c2 || h2 || f2) {
            var m2, b2, x2, w2, p2 = s2.allpts;
            if (s2.ctrlpts.length / 2 % 2 == 0) {
              var E2 = (k2 = (T2 = p2.length / 2 - 1) + 2) + 2;
              m2 = Zt(p2[T2], p2[k2], p2[E2], 0), b2 = Zt(p2[T2 + 1], p2[k2 + 1], p2[E2 + 1], 0), x2 = Zt(p2[T2], p2[k2], p2[E2], 1e-4), w2 = Zt(p2[T2 + 1], p2[k2 + 1], p2[E2 + 1], 1e-4);
            } else {
              var k2, T2;
              E2 = (k2 = p2.length / 2 - 1) + 2;
              m2 = Zt(p2[T2 = k2 - 2], p2[k2], p2[E2], 0.4999), b2 = Zt(p2[T2 + 1], p2[k2 + 1], p2[E2 + 1], 0.4999), x2 = Zt(p2[T2], p2[k2], p2[E2], 0.5), w2 = Zt(p2[T2 + 1], p2[k2 + 1], p2[E2 + 1], 0.5);
            }
            t2 = x2 - m2, n2 = w2 - b2;
          }
          if (s2.midtgtArrowAngle = qt(t2, n2), s2.midDispX = t2, s2.midDispY = n2, t2 *= -1, n2 *= -1, d2) {
            if ((p2 = s2.allpts).length / 2 % 2 == 0) ;
            else if (!s2.isRound) {
              var C2, P2 = (C2 = p2.length / 2 - 1) + 2;
              t2 = -(p2[P2] - p2[C2]), n2 = -(p2[P2 + 1] - p2[C2 + 1]);
            }
          }
          if (s2.midsrcArrowAngle = qt(t2, n2), d2) t2 = i2 - s2.segpts[s2.segpts.length - 2], n2 = o2 - s2.segpts[s2.segpts.length - 1];
          else if (c2 || h2 || f2 || u2) {
            var S2 = (p2 = s2.allpts).length;
            t2 = i2 - Zt(p2[S2 - 6], p2[S2 - 4], p2[S2 - 2], 0.9), n2 = o2 - Zt(p2[S2 - 5], p2[S2 - 3], p2[S2 - 1], 0.9);
          } else t2 = i2 - v2, n2 = o2 - g2;
          s2.tgtArrowAngle = qt(t2, n2);
        }, "calculateArrowAngles") };
        vc.getArrowWidth = vc.getArrowHeight = function(e2, t2) {
          var n2 = this.arrowWidthCache = this.arrowWidthCache || {}, r2 = n2[e2 + ", " + t2];
          return r2 || (r2 = Math.max(Math.pow(13.37 * e2, 0.9), 29) * t2, n2[e2 + ", " + t2] = r2, r2);
        };
        var gc, yc, mc, bc, xc, wc, Ec, kc, Tc, Cc, Pc, Sc, Bc, Dc, _c, Ac, Mc, Rc = {}, Ic = {}, Nc = /* @__PURE__ */ __name(function(e2, t2, n2) {
          n2.x = t2.x - e2.x, n2.y = t2.y - e2.y, n2.len = Math.sqrt(n2.x * n2.x + n2.y * n2.y), n2.nx = n2.x / n2.len, n2.ny = n2.y / n2.len, n2.ang = Math.atan2(n2.ny, n2.nx);
        }, "Nc"), Lc = /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          var i2, o2;
          if (e2 !== Mc ? Nc(t2, e2, Rc) : ((o2 = Rc).x = -1 * (i2 = Ic).x, o2.y = -1 * i2.y, o2.nx = -1 * i2.nx, o2.ny = -1 * i2.ny, o2.ang = i2.ang > 0 ? -(Math.PI - i2.ang) : Math.PI + i2.ang), Nc(t2, n2, Ic), mc = Rc.nx * Ic.ny - Rc.ny * Ic.nx, bc = Rc.nx * Ic.nx - Rc.ny * -Ic.ny, Ec = Math.asin(Math.max(-1, Math.min(1, mc))), Math.abs(Ec) < 1e-6) return gc = t2.x, yc = t2.y, void (Tc = Pc = 0);
          xc = 1, wc = false, bc < 0 ? Ec < 0 ? Ec = Math.PI + Ec : (Ec = Math.PI - Ec, xc = -1, wc = true) : Ec > 0 && (xc = -1, wc = true), Pc = void 0 !== t2.radius ? t2.radius : r2, kc = Ec / 2, Sc = Math.min(Rc.len / 2, Ic.len / 2), a2 ? (Cc = Math.abs(Math.cos(kc) * Pc / Math.sin(kc))) > Sc ? (Cc = Sc, Tc = Math.abs(Cc * Math.sin(kc) / Math.cos(kc))) : Tc = Pc : (Cc = Math.min(Sc, Pc), Tc = Math.abs(Cc * Math.sin(kc) / Math.cos(kc))), _c = t2.x + Ic.nx * Cc, Ac = t2.y + Ic.ny * Cc, gc = _c - Ic.ny * Tc * xc, yc = Ac + Ic.nx * Tc * xc, Bc = t2.x + Rc.nx * Cc, Dc = t2.y + Rc.ny * Cc, Mc = t2;
        }, "Lc");
        function zc(e2, t2) {
          0 === t2.radius ? e2.lineTo(t2.cx, t2.cy) : e2.arc(t2.cx, t2.cy, t2.radius, t2.startAngle, t2.endAngle, t2.counterClockwise);
        }
        __name(zc, "zc");
        function Oc(e2, t2, n2, r2) {
          var a2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
          return 0 === r2 || 0 === t2.radius ? { cx: t2.x, cy: t2.y, radius: 0, startX: t2.x, startY: t2.y, stopX: t2.x, stopY: t2.y, startAngle: void 0, endAngle: void 0, counterClockwise: void 0 } : (Lc(e2, t2, n2, r2, a2), { cx: gc, cy: yc, radius: Tc, startX: Bc, startY: Dc, stopX: _c, stopY: Ac, startAngle: Rc.ang + Math.PI / 2 * xc, endAngle: Ic.ang - Math.PI / 2 * xc, counterClockwise: wc });
        }
        __name(Oc, "Oc");
        var Vc = 0.01, Fc = Math.sqrt(0.02), Xc = {};
        function jc(e2) {
          var t2 = [];
          if (null != e2) {
            for (var n2 = 0; n2 < e2.length; n2 += 2) {
              var r2 = e2[n2], a2 = e2[n2 + 1];
              t2.push({ x: r2, y: a2 });
            }
            return t2;
          }
        }
        __name(jc, "jc");
        Xc.findMidptPtsEtc = function(e2, t2) {
          var n2, r2 = t2.posPts, a2 = t2.intersectionPts, o2 = t2.vectorNormInverse, s2 = e2.pstyle("source-endpoint"), l2 = e2.pstyle("target-endpoint"), u2 = null != s2.units && null != l2.units;
          switch (e2.pstyle("edge-distances").value) {
            case "node-position":
              n2 = r2;
              break;
            case "intersection":
              n2 = a2;
              break;
            case "endpoints":
              if (u2) {
                var c2 = i(this.manualEndptToPx(e2.source()[0], s2), 2), d2 = c2[0], h2 = c2[1], f2 = i(this.manualEndptToPx(e2.target()[0], l2), 2), p2 = f2[0], v2 = f2[1], g2 = { x1: d2, y1: h2, x2: p2, y2: v2 };
                o2 = function(e3, t3, n3, r3) {
                  var a3 = r3 - t3, i2 = n3 - e3, o3 = Math.sqrt(i2 * i2 + a3 * a3);
                  return { x: -a3 / o3, y: i2 / o3 };
                }(d2, h2, p2, v2), n2 = g2;
              } else at("Edge ".concat(e2.id(), " has edge-distances:endpoints specified without manual endpoints specified via source-endpoint and target-endpoint.  Falling back on edge-distances:intersection (default).")), n2 = a2;
          }
          return { midptPts: n2, vectorNormInverse: o2 };
        }, Xc.findHaystackPoints = function(e2) {
          for (var t2 = 0; t2 < e2.length; t2++) {
            var n2 = e2[t2], r2 = n2._private, a2 = r2.rscratch;
            if (!a2.haystack) {
              var i2 = 2 * Math.random() * Math.PI;
              a2.source = { x: Math.cos(i2), y: Math.sin(i2) }, i2 = 2 * Math.random() * Math.PI, a2.target = { x: Math.cos(i2), y: Math.sin(i2) };
            }
            var o2 = r2.source, s2 = r2.target, l2 = o2.position(), u2 = s2.position(), c2 = o2.width(), d2 = s2.width(), h2 = o2.height(), f2 = s2.height(), p2 = n2.pstyle("haystack-radius").value / 2;
            a2.haystackPts = a2.allpts = [a2.source.x * c2 * p2 + l2.x, a2.source.y * h2 * p2 + l2.y, a2.target.x * d2 * p2 + u2.x, a2.target.y * f2 * p2 + u2.y], a2.midX = (a2.allpts[0] + a2.allpts[2]) / 2, a2.midY = (a2.allpts[1] + a2.allpts[3]) / 2, a2.edgeType = "haystack", a2.haystack = true, this.storeEdgeProjections(n2), this.calculateArrowAngles(n2), this.recalculateEdgeLabelProjections(n2), this.calculateLabelAngles(n2);
          }
        }, Xc.findSegmentsPoints = function(e2, t2) {
          var n2 = e2._private.rscratch, r2 = e2.pstyle("segment-weights"), a2 = e2.pstyle("segment-distances"), i2 = e2.pstyle("segment-radii"), o2 = e2.pstyle("radius-type"), s2 = Math.min(r2.pfValue.length, a2.pfValue.length), l2 = i2.pfValue[i2.pfValue.length - 1], u2 = o2.pfValue[o2.pfValue.length - 1];
          n2.edgeType = "segments", n2.segpts = [], n2.radii = [], n2.isArcRadius = [];
          for (var c2 = 0; c2 < s2; c2++) {
            var d2 = r2.pfValue[c2], h2 = a2.pfValue[c2], f2 = 1 - d2, p2 = d2, v2 = this.findMidptPtsEtc(e2, t2), g2 = v2.midptPts, y2 = v2.vectorNormInverse, m2 = { x: g2.x1 * f2 + g2.x2 * p2, y: g2.y1 * f2 + g2.y2 * p2 };
            n2.segpts.push(m2.x + y2.x * h2, m2.y + y2.y * h2), n2.radii.push(void 0 !== i2.pfValue[c2] ? i2.pfValue[c2] : l2), n2.isArcRadius.push("arc-radius" === (void 0 !== o2.pfValue[c2] ? o2.pfValue[c2] : u2));
          }
        }, Xc.findLoopPoints = function(e2, t2, n2, r2) {
          var a2 = e2._private.rscratch, i2 = t2.dirCounts, o2 = t2.srcPos, s2 = e2.pstyle("control-point-distances"), l2 = s2 ? s2.pfValue[0] : void 0, u2 = e2.pstyle("loop-direction").pfValue, c2 = e2.pstyle("loop-sweep").pfValue, d2 = e2.pstyle("control-point-step-size").pfValue;
          a2.edgeType = "self";
          var h2 = n2, f2 = d2;
          r2 && (h2 = 0, f2 = l2);
          var p2 = u2 - Math.PI / 2, v2 = p2 - c2 / 2, g2 = p2 + c2 / 2, y2 = String(u2 + "_" + c2);
          h2 = void 0 === i2[y2] ? i2[y2] = 0 : ++i2[y2], a2.ctrlpts = [o2.x + 1.4 * Math.cos(v2) * f2 * (h2 / 3 + 1), o2.y + 1.4 * Math.sin(v2) * f2 * (h2 / 3 + 1), o2.x + 1.4 * Math.cos(g2) * f2 * (h2 / 3 + 1), o2.y + 1.4 * Math.sin(g2) * f2 * (h2 / 3 + 1)];
        }, Xc.findCompoundLoopPoints = function(e2, t2, n2, r2) {
          var a2 = e2._private.rscratch;
          a2.edgeType = "compound";
          var i2 = t2.srcPos, o2 = t2.tgtPos, s2 = t2.srcW, l2 = t2.srcH, u2 = t2.tgtW, c2 = t2.tgtH, d2 = e2.pstyle("control-point-step-size").pfValue, h2 = e2.pstyle("control-point-distances"), f2 = h2 ? h2.pfValue[0] : void 0, p2 = n2, v2 = d2;
          r2 && (p2 = 0, v2 = f2);
          var g2 = { x: i2.x - s2 / 2, y: i2.y - l2 / 2 }, y2 = { x: o2.x - u2 / 2, y: o2.y - c2 / 2 }, m2 = { x: Math.min(g2.x, y2.x), y: Math.min(g2.y, y2.y) }, b2 = Math.max(0.5, Math.log(s2 * Vc)), x2 = Math.max(0.5, Math.log(u2 * Vc));
          a2.ctrlpts = [m2.x, m2.y - (1 + Math.pow(50, 1.12) / 100) * v2 * (p2 / 3 + 1) * b2, m2.x - (1 + Math.pow(50, 1.12) / 100) * v2 * (p2 / 3 + 1) * x2, m2.y];
        }, Xc.findStraightEdgePoints = function(e2) {
          e2._private.rscratch.edgeType = "straight";
        }, Xc.findBezierPoints = function(e2, t2, n2, r2, a2) {
          var i2 = e2._private.rscratch, o2 = e2.pstyle("control-point-step-size").pfValue, s2 = e2.pstyle("control-point-distances"), l2 = e2.pstyle("control-point-weights"), u2 = s2 && l2 ? Math.min(s2.value.length, l2.value.length) : 1, c2 = s2 ? s2.pfValue[0] : void 0, d2 = l2.value[0], h2 = r2;
          i2.edgeType = h2 ? "multibezier" : "bezier", i2.ctrlpts = [];
          for (var f2 = 0; f2 < u2; f2++) {
            var p2 = (0.5 - t2.eles.length / 2 + n2) * o2 * (a2 ? -1 : 1), v2 = void 0, g2 = Ut(p2);
            h2 && (c2 = s2 ? s2.pfValue[f2] : o2, d2 = l2.value[f2]);
            var y2 = void 0 !== (v2 = r2 ? c2 : void 0 !== c2 ? g2 * c2 : void 0) ? v2 : p2, m2 = 1 - d2, b2 = d2, x2 = this.findMidptPtsEtc(e2, t2), w2 = x2.midptPts, E2 = x2.vectorNormInverse, k2 = { x: w2.x1 * m2 + w2.x2 * b2, y: w2.y1 * m2 + w2.y2 * b2 };
            i2.ctrlpts.push(k2.x + E2.x * y2, k2.y + E2.y * y2);
          }
        }, Xc.findTaxiPoints = function(e2, t2) {
          var n2 = e2._private.rscratch;
          n2.edgeType = "segments";
          var r2 = "vertical", a2 = "horizontal", i2 = "leftward", o2 = "rightward", s2 = "downward", l2 = "upward", u2 = t2.posPts, c2 = t2.srcW, d2 = t2.srcH, h2 = t2.tgtW, f2 = t2.tgtH, p2 = "node-position" !== e2.pstyle("edge-distances").value, v2 = e2.pstyle("taxi-direction").value, g2 = v2, y2 = e2.pstyle("taxi-turn"), m2 = "%" === y2.units, b2 = y2.pfValue, x2 = b2 < 0, w2 = e2.pstyle("taxi-turn-min-distance").pfValue, E2 = p2 ? (c2 + h2) / 2 : 0, k2 = p2 ? (d2 + f2) / 2 : 0, T2 = u2.x2 - u2.x1, C2 = u2.y2 - u2.y1, P2 = /* @__PURE__ */ __name(function(e3, t3) {
            return e3 > 0 ? Math.max(e3 - t3, 0) : Math.min(e3 + t3, 0);
          }, "P"), S2 = P2(T2, E2), B2 = P2(C2, k2), D2 = false;
          "auto" === g2 ? v2 = Math.abs(S2) > Math.abs(B2) ? a2 : r2 : g2 === l2 || g2 === s2 ? (v2 = r2, D2 = true) : g2 !== i2 && g2 !== o2 || (v2 = a2, D2 = true);
          var _2, A2 = v2 === r2, M2 = A2 ? B2 : S2, R2 = A2 ? C2 : T2, I2 = Ut(R2), N2 = false;
          (D2 && (m2 || x2) || !(g2 === s2 && R2 < 0 || g2 === l2 && R2 > 0 || g2 === i2 && R2 > 0 || g2 === o2 && R2 < 0) || (M2 = (I2 *= -1) * Math.abs(M2), N2 = true), m2) ? _2 = (b2 < 0 ? 1 + b2 : b2) * M2 : _2 = (b2 < 0 ? M2 : 0) + b2 * I2;
          var L2 = /* @__PURE__ */ __name(function(e3) {
            return Math.abs(e3) < w2 || Math.abs(e3) >= Math.abs(M2);
          }, "L"), z2 = L2(_2), O2 = L2(Math.abs(M2) - Math.abs(_2));
          if ((z2 || O2) && !N2) if (A2) {
            var V2 = Math.abs(R2) <= d2 / 2, F2 = Math.abs(T2) <= h2 / 2;
            if (V2) {
              var X2 = (u2.x1 + u2.x2) / 2, j2 = u2.y1, Y2 = u2.y2;
              n2.segpts = [X2, j2, X2, Y2];
            } else if (F2) {
              var q2 = (u2.y1 + u2.y2) / 2, W2 = u2.x1, U2 = u2.x2;
              n2.segpts = [W2, q2, U2, q2];
            } else n2.segpts = [u2.x1, u2.y2];
          } else {
            var H2 = Math.abs(R2) <= c2 / 2, K2 = Math.abs(C2) <= f2 / 2;
            if (H2) {
              var G2 = (u2.y1 + u2.y2) / 2, Z2 = u2.x1, $2 = u2.x2;
              n2.segpts = [Z2, G2, $2, G2];
            } else if (K2) {
              var Q2 = (u2.x1 + u2.x2) / 2, J2 = u2.y1, ee2 = u2.y2;
              n2.segpts = [Q2, J2, Q2, ee2];
            } else n2.segpts = [u2.x2, u2.y1];
          }
          else if (A2) {
            var te2 = u2.y1 + _2 + (p2 ? d2 / 2 * I2 : 0), ne2 = u2.x1, re2 = u2.x2;
            n2.segpts = [ne2, te2, re2, te2];
          } else {
            var ae2 = u2.x1 + _2 + (p2 ? c2 / 2 * I2 : 0), ie2 = u2.y1, oe2 = u2.y2;
            n2.segpts = [ae2, ie2, ae2, oe2];
          }
          if (n2.isRound) {
            var se2 = e2.pstyle("taxi-radius").value, le2 = "arc-radius" === e2.pstyle("radius-type").value[0];
            n2.radii = new Array(n2.segpts.length / 2).fill(se2), n2.isArcRadius = new Array(n2.segpts.length / 2).fill(le2);
          }
        }, Xc.tryToCorrectInvalidPoints = function(e2, t2) {
          var n2 = e2._private.rscratch;
          if ("bezier" === n2.edgeType) {
            var r2 = t2.srcPos, a2 = t2.tgtPos, i2 = t2.srcW, o2 = t2.srcH, s2 = t2.tgtW, l2 = t2.tgtH, u2 = t2.srcShape, c2 = t2.tgtShape, d2 = t2.srcCornerRadius, h2 = t2.tgtCornerRadius, f2 = t2.srcRs, p2 = t2.tgtRs, v2 = !G(n2.startX) || !G(n2.startY), g2 = !G(n2.arrowStartX) || !G(n2.arrowStartY), y2 = !G(n2.endX) || !G(n2.endY), m2 = !G(n2.arrowEndX) || !G(n2.arrowEndY), b2 = 3 * (this.getArrowWidth(e2.pstyle("width").pfValue, e2.pstyle("arrow-scale").value) * this.arrowShapeWidth), x2 = Ht({ x: n2.ctrlpts[0], y: n2.ctrlpts[1] }, { x: n2.startX, y: n2.startY }), w2 = x2 < b2, E2 = Ht({ x: n2.ctrlpts[0], y: n2.ctrlpts[1] }, { x: n2.endX, y: n2.endY }), k2 = E2 < b2, T2 = false;
            if (v2 || g2 || w2) {
              T2 = true;
              var C2 = { x: n2.ctrlpts[0] - r2.x, y: n2.ctrlpts[1] - r2.y }, P2 = Math.sqrt(C2.x * C2.x + C2.y * C2.y), S2 = { x: C2.x / P2, y: C2.y / P2 }, B2 = Math.max(i2, o2), D2 = { x: n2.ctrlpts[0] + 2 * S2.x * B2, y: n2.ctrlpts[1] + 2 * S2.y * B2 }, _2 = u2.intersectLine(r2.x, r2.y, i2, o2, D2.x, D2.y, 0, d2, f2);
              w2 ? (n2.ctrlpts[0] = n2.ctrlpts[0] + S2.x * (b2 - x2), n2.ctrlpts[1] = n2.ctrlpts[1] + S2.y * (b2 - x2)) : (n2.ctrlpts[0] = _2[0] + S2.x * b2, n2.ctrlpts[1] = _2[1] + S2.y * b2);
            }
            if (y2 || m2 || k2) {
              T2 = true;
              var A2 = { x: n2.ctrlpts[0] - a2.x, y: n2.ctrlpts[1] - a2.y }, M2 = Math.sqrt(A2.x * A2.x + A2.y * A2.y), R2 = { x: A2.x / M2, y: A2.y / M2 }, I2 = Math.max(i2, o2), N2 = { x: n2.ctrlpts[0] + 2 * R2.x * I2, y: n2.ctrlpts[1] + 2 * R2.y * I2 }, L2 = c2.intersectLine(a2.x, a2.y, s2, l2, N2.x, N2.y, 0, h2, p2);
              k2 ? (n2.ctrlpts[0] = n2.ctrlpts[0] + R2.x * (b2 - E2), n2.ctrlpts[1] = n2.ctrlpts[1] + R2.y * (b2 - E2)) : (n2.ctrlpts[0] = L2[0] + R2.x * b2, n2.ctrlpts[1] = L2[1] + R2.y * b2);
            }
            T2 && this.findEndpoints(e2);
          }
        }, Xc.storeAllpts = function(e2) {
          var t2 = e2._private.rscratch;
          if ("multibezier" === t2.edgeType || "bezier" === t2.edgeType || "self" === t2.edgeType || "compound" === t2.edgeType) {
            t2.allpts = [], t2.allpts.push(t2.startX, t2.startY);
            for (var n2 = 0; n2 + 1 < t2.ctrlpts.length; n2 += 2) t2.allpts.push(t2.ctrlpts[n2], t2.ctrlpts[n2 + 1]), n2 + 3 < t2.ctrlpts.length && t2.allpts.push((t2.ctrlpts[n2] + t2.ctrlpts[n2 + 2]) / 2, (t2.ctrlpts[n2 + 1] + t2.ctrlpts[n2 + 3]) / 2);
            var r2;
            t2.allpts.push(t2.endX, t2.endY), t2.ctrlpts.length / 2 % 2 == 0 ? (r2 = t2.allpts.length / 2 - 1, t2.midX = t2.allpts[r2], t2.midY = t2.allpts[r2 + 1]) : (r2 = t2.allpts.length / 2 - 3, t2.midX = Zt(t2.allpts[r2], t2.allpts[r2 + 2], t2.allpts[r2 + 4], 0.5), t2.midY = Zt(t2.allpts[r2 + 1], t2.allpts[r2 + 3], t2.allpts[r2 + 5], 0.5));
          } else if ("straight" === t2.edgeType) t2.allpts = [t2.startX, t2.startY, t2.endX, t2.endY], t2.midX = (t2.startX + t2.endX + t2.arrowStartX + t2.arrowEndX) / 4, t2.midY = (t2.startY + t2.endY + t2.arrowStartY + t2.arrowEndY) / 4;
          else if ("segments" === t2.edgeType) {
            if (t2.allpts = [], t2.allpts.push(t2.startX, t2.startY), t2.allpts.push.apply(t2.allpts, t2.segpts), t2.allpts.push(t2.endX, t2.endY), t2.isRound) {
              t2.roundCorners = [];
              for (var a2 = 2; a2 + 3 < t2.allpts.length; a2 += 2) {
                var i2 = t2.radii[a2 / 2 - 1], o2 = t2.isArcRadius[a2 / 2 - 1];
                t2.roundCorners.push(Oc({ x: t2.allpts[a2 - 2], y: t2.allpts[a2 - 1] }, { x: t2.allpts[a2], y: t2.allpts[a2 + 1], radius: i2 }, { x: t2.allpts[a2 + 2], y: t2.allpts[a2 + 3] }, i2, o2));
              }
            }
            if (t2.segpts.length % 4 == 0) {
              var s2 = t2.segpts.length / 2, l2 = s2 - 2;
              t2.midX = (t2.segpts[l2] + t2.segpts[s2]) / 2, t2.midY = (t2.segpts[l2 + 1] + t2.segpts[s2 + 1]) / 2;
            } else {
              var u2 = t2.segpts.length / 2 - 1;
              if (t2.isRound) {
                var c2 = { x: t2.segpts[u2], y: t2.segpts[u2 + 1] }, d2 = t2.roundCorners[u2 / 2];
                if (0 === d2.radius) {
                  var h2 = { x: t2.segpts[u2 + 2], y: t2.segpts[u2 + 3] };
                  t2.midX = c2.x, t2.midY = c2.y, t2.midVector = [c2.y - h2.y, h2.x - c2.x];
                } else {
                  var f2 = [c2.x - d2.cx, c2.y - d2.cy], p2 = d2.radius / Math.sqrt(Math.pow(f2[0], 2) + Math.pow(f2[1], 2));
                  f2 = f2.map(function(e3) {
                    return e3 * p2;
                  }), t2.midX = d2.cx + f2[0], t2.midY = d2.cy + f2[1], t2.midVector = f2;
                }
              } else t2.midX = t2.segpts[u2], t2.midY = t2.segpts[u2 + 1];
            }
          }
        }, Xc.checkForInvalidEdgeWarning = function(e2) {
          var t2 = e2[0]._private.rscratch;
          t2.nodesOverlap || G(t2.startX) && G(t2.startY) && G(t2.endX) && G(t2.endY) ? t2.loggedErr = false : t2.loggedErr || (t2.loggedErr = true, at("Edge `" + e2.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
        }, Xc.findEdgeControlPoints = function(e2) {
          var t2 = this;
          if (e2 && 0 !== e2.length) {
            for (var n2 = this, r2 = n2.cy.hasCompoundNodes(), a2 = new pt(), i2 = function(e3, t3) {
              return [].concat(o(e3), [t3 ? 1 : 0]).join("-");
            }, s2 = [], l2 = [], u2 = 0; u2 < e2.length; u2++) {
              var c2 = e2[u2], d2 = c2._private, h2 = c2.pstyle("curve-style").value;
              if (!c2.removed() && c2.takesUpSpace()) if ("haystack" !== h2) {
                var f2 = "unbundled-bezier" === h2 || ue(h2, "segments") || "straight" === h2 || "straight-triangle" === h2 || ue(h2, "taxi"), p2 = "unbundled-bezier" === h2 || "bezier" === h2, v2 = d2.source, g2 = d2.target, y2 = [v2.poolIndex(), g2.poolIndex()].sort(), m2 = i2(y2, f2), b2 = a2.get(m2);
                null == b2 && (b2 = { eles: [] }, s2.push({ pairId: y2, edgeIsUnbundled: f2 }), a2.set(m2, b2)), b2.eles.push(c2), f2 && (b2.hasUnbundled = true), p2 && (b2.hasBezier = true);
              } else l2.push(c2);
            }
            for (var x2 = function() {
              var e3, o2 = s2[w2], l3 = o2.pairId, u3 = o2.edgeIsUnbundled, c3 = i2(l3, u3), d3 = a2.get(c3);
              if (!d3.hasUnbundled) {
                var h3 = d3.eles[0].parallelEdges().filter(function(e4) {
                  return e4.isBundledBezier();
                });
                dt(d3.eles), h3.forEach(function(e4) {
                  return d3.eles.push(e4);
                }), d3.eles.sort(function(e4, t3) {
                  return e4.poolIndex() - t3.poolIndex();
                });
              }
              var f3 = d3.eles[0], p3 = f3.source(), v3 = f3.target();
              if (p3.poolIndex() > v3.poolIndex()) {
                var g3 = p3;
                p3 = v3, v3 = g3;
              }
              var y3 = d3.srcPos = p3.position(), m3 = d3.tgtPos = v3.position(), b3 = d3.srcW = p3.outerWidth(), x3 = d3.srcH = p3.outerHeight(), E2 = d3.tgtW = v3.outerWidth(), k2 = d3.tgtH = v3.outerHeight(), T2 = d3.srcShape = n2.nodeShapes[t2.getNodeShape(p3)], C2 = d3.tgtShape = n2.nodeShapes[t2.getNodeShape(v3)], P2 = d3.srcCornerRadius = "auto" === p3.pstyle("corner-radius").value ? "auto" : p3.pstyle("corner-radius").pfValue, S2 = d3.tgtCornerRadius = "auto" === v3.pstyle("corner-radius").value ? "auto" : v3.pstyle("corner-radius").pfValue, B2 = d3.tgtRs = v3._private.rscratch, D2 = d3.srcRs = p3._private.rscratch;
              d3.dirCounts = { north: 0, west: 0, south: 0, east: 0, northwest: 0, southwest: 0, northeast: 0, southeast: 0 };
              for (var _2 = 0; _2 < d3.eles.length; _2++) {
                var A2 = d3.eles[_2], M2 = A2[0]._private.rscratch, R2 = A2.pstyle("curve-style").value, I2 = "unbundled-bezier" === R2 || ue(R2, "segments") || ue(R2, "taxi"), N2 = !p3.same(A2.source());
                if (!d3.calculatedIntersection && p3 !== v3 && (d3.hasBezier || d3.hasUnbundled)) {
                  d3.calculatedIntersection = true;
                  var L2 = T2.intersectLine(y3.x, y3.y, b3, x3, m3.x, m3.y, 0, P2, D2), z2 = d3.srcIntn = L2, O2 = C2.intersectLine(m3.x, m3.y, E2, k2, y3.x, y3.y, 0, S2, B2), V2 = d3.tgtIntn = O2, F2 = d3.intersectionPts = { x1: L2[0], x2: O2[0], y1: L2[1], y2: O2[1] }, X2 = d3.posPts = { x1: y3.x, x2: m3.x, y1: y3.y, y2: m3.y }, j2 = O2[1] - L2[1], Y2 = O2[0] - L2[0], q2 = Math.sqrt(Y2 * Y2 + j2 * j2);
                  G(q2) && q2 >= Fc || (q2 = Math.sqrt(Math.max(Y2 * Y2, Vc) + Math.max(j2 * j2, Vc)));
                  var W2 = d3.vector = { x: Y2, y: j2 }, U2 = d3.vectorNorm = { x: W2.x / q2, y: W2.y / q2 }, H2 = { x: -U2.y, y: U2.x };
                  d3.nodesOverlap = !G(q2) || C2.checkPoint(L2[0], L2[1], 0, E2, k2, m3.x, m3.y, S2, B2) || T2.checkPoint(O2[0], O2[1], 0, b3, x3, y3.x, y3.y, P2, D2), d3.vectorNormInverse = H2, e3 = { nodesOverlap: d3.nodesOverlap, dirCounts: d3.dirCounts, calculatedIntersection: true, hasBezier: d3.hasBezier, hasUnbundled: d3.hasUnbundled, eles: d3.eles, srcPos: m3, srcRs: B2, tgtPos: y3, tgtRs: D2, srcW: E2, srcH: k2, tgtW: b3, tgtH: x3, srcIntn: V2, tgtIntn: z2, srcShape: C2, tgtShape: T2, posPts: { x1: X2.x2, y1: X2.y2, x2: X2.x1, y2: X2.y1 }, intersectionPts: { x1: F2.x2, y1: F2.y2, x2: F2.x1, y2: F2.y1 }, vector: { x: -W2.x, y: -W2.y }, vectorNorm: { x: -U2.x, y: -U2.y }, vectorNormInverse: { x: -H2.x, y: -H2.y } };
                }
                var K2 = N2 ? e3 : d3;
                M2.nodesOverlap = K2.nodesOverlap, M2.srcIntn = K2.srcIntn, M2.tgtIntn = K2.tgtIntn, M2.isRound = R2.startsWith("round"), r2 && (p3.isParent() || p3.isChild() || v3.isParent() || v3.isChild()) && (p3.parents().anySame(v3) || v3.parents().anySame(p3) || p3.same(v3) && p3.isParent()) ? t2.findCompoundLoopPoints(A2, K2, _2, I2) : p3 === v3 ? t2.findLoopPoints(A2, K2, _2, I2) : R2.endsWith("segments") ? t2.findSegmentsPoints(A2, K2) : R2.endsWith("taxi") ? t2.findTaxiPoints(A2, K2) : "straight" === R2 || !I2 && d3.eles.length % 2 == 1 && _2 === Math.floor(d3.eles.length / 2) ? t2.findStraightEdgePoints(A2) : t2.findBezierPoints(A2, K2, _2, I2, N2), t2.findEndpoints(A2), t2.tryToCorrectInvalidPoints(A2, K2), t2.checkForInvalidEdgeWarning(A2), t2.storeAllpts(A2), t2.storeEdgeProjections(A2), t2.calculateArrowAngles(A2), t2.recalculateEdgeLabelProjections(A2), t2.calculateLabelAngles(A2);
              }
            }, w2 = 0; w2 < s2.length; w2++) x2();
            this.findHaystackPoints(l2);
          }
        }, Xc.getSegmentPoints = function(e2) {
          var t2 = e2[0]._private.rscratch;
          if (this.recalculateRenderedStyle(e2), "segments" === t2.edgeType) return jc(t2.segpts);
        }, Xc.getControlPoints = function(e2) {
          var t2 = e2[0]._private.rscratch;
          this.recalculateRenderedStyle(e2);
          var n2 = t2.edgeType;
          if ("bezier" === n2 || "multibezier" === n2 || "self" === n2 || "compound" === n2) return jc(t2.ctrlpts);
        }, Xc.getEdgeMidpoint = function(e2) {
          var t2 = e2[0]._private.rscratch;
          return this.recalculateRenderedStyle(e2), { x: t2.midX, y: t2.midY };
        };
        var Yc = { manualEndptToPx: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = e2.position(), r2 = e2.outerWidth(), a2 = e2.outerHeight(), i2 = e2._private.rscratch;
          if (2 === t2.value.length) {
            var o2 = [t2.pfValue[0], t2.pfValue[1]];
            return "%" === t2.units[0] && (o2[0] = o2[0] * r2), "%" === t2.units[1] && (o2[1] = o2[1] * a2), o2[0] += n2.x, o2[1] += n2.y, o2;
          }
          var s2 = t2.pfValue[0];
          s2 = -Math.PI / 2 + s2;
          var l2 = 2 * Math.max(r2, a2), u2 = [n2.x + Math.cos(s2) * l2, n2.y + Math.sin(s2) * l2];
          return this.nodeShapes[this.getNodeShape(e2)].intersectLine(n2.x, n2.y, r2, a2, u2[0], u2[1], 0, "auto" === e2.pstyle("corner-radius").value ? "auto" : e2.pstyle("corner-radius").pfValue, i2);
        }, "manualEndptToPx"), findEndpoints: /* @__PURE__ */ __name(function(e2) {
          var t2, n2, r2, a2, i2, o2, s2, l2, u2, c2 = this, d2 = e2.source()[0], h2 = e2.target()[0], f2 = d2.position(), p2 = h2.position(), v2 = e2.pstyle("target-arrow-shape").value, g2 = e2.pstyle("source-arrow-shape").value, y2 = e2.pstyle("target-distance-from-node").pfValue, m2 = e2.pstyle("source-distance-from-node").pfValue, b2 = d2._private.rscratch, x2 = h2._private.rscratch, w2 = e2.pstyle("curve-style").value, E2 = e2._private.rscratch, k2 = E2.edgeType, T2 = ue(w2, "taxi"), C2 = "self" === k2 || "compound" === k2, P2 = "bezier" === k2 || "multibezier" === k2 || C2, S2 = "bezier" !== k2, B2 = "straight" === k2 || "segments" === k2, D2 = "segments" === k2, _2 = P2 || S2 || B2, A2 = C2 || T2, M2 = e2.pstyle("source-endpoint"), R2 = A2 ? "outside-to-node" : M2.value, I2 = "auto" === d2.pstyle("corner-radius").value ? "auto" : d2.pstyle("corner-radius").pfValue, N2 = e2.pstyle("target-endpoint"), L2 = A2 ? "outside-to-node" : N2.value, z2 = "auto" === h2.pstyle("corner-radius").value ? "auto" : h2.pstyle("corner-radius").pfValue;
          E2.srcManEndpt = M2, E2.tgtManEndpt = N2;
          var O2 = null !== (t2 = 2 === (null == N2 || null === (n2 = N2.pfValue) || void 0 === n2 ? void 0 : n2.length) ? N2.pfValue : null) && void 0 !== t2 ? t2 : [0, 0], V2 = null !== (r2 = 2 === (null == M2 || null === (a2 = M2.pfValue) || void 0 === a2 ? void 0 : a2.length) ? M2.pfValue : null) && void 0 !== r2 ? r2 : [0, 0];
          if (P2) {
            var F2 = [E2.ctrlpts[0], E2.ctrlpts[1]];
            o2 = S2 ? [E2.ctrlpts[E2.ctrlpts.length - 2], E2.ctrlpts[E2.ctrlpts.length - 1]] : F2, s2 = F2;
          } else if (B2) {
            var X2 = D2 ? E2.segpts.slice(0, 2) : [p2.x + O2[0], p2.y + O2[1]];
            o2 = D2 ? E2.segpts.slice(E2.segpts.length - 2) : [f2.x + V2[0], f2.y + V2[1]], s2 = X2;
          }
          if ("inside-to-node" === L2) i2 = [p2.x, p2.y];
          else if (N2.units) i2 = this.manualEndptToPx(h2, N2);
          else if ("outside-to-line" === L2) i2 = E2.tgtIntn;
          else if ("outside-to-node" === L2 || "outside-to-node-or-label" === L2 ? l2 = o2 : "outside-to-line" !== L2 && "outside-to-line-or-label" !== L2 || (l2 = [f2.x, f2.y]), i2 = c2.nodeShapes[this.getNodeShape(h2)].intersectLine(p2.x, p2.y, h2.outerWidth(), h2.outerHeight(), l2[0], l2[1], 0, z2, x2), "outside-to-node-or-label" === L2 || "outside-to-line-or-label" === L2) {
            var j2 = h2._private.rscratch, Y2 = j2.labelWidth, q2 = j2.labelHeight, W2 = j2.labelX, U2 = j2.labelY, H2 = Y2 / 2, K2 = q2 / 2, Z2 = h2.pstyle("text-valign").value;
            "top" === Z2 ? U2 -= K2 : "bottom" === Z2 && (U2 += K2);
            var $2 = h2.pstyle("text-halign").value;
            "left" === $2 ? W2 -= H2 : "right" === $2 && (W2 += H2);
            var Q2 = Cn(l2[0], l2[1], [W2 - H2, U2 - K2, W2 + H2, U2 - K2, W2 + H2, U2 + K2, W2 - H2, U2 + K2], p2.x, p2.y);
            if (Q2.length > 0) {
              var J2 = f2, ee2 = Kt(J2, Yt(i2)), te2 = Kt(J2, Yt(Q2)), ne2 = ee2;
              if (te2 < ee2 && (i2 = Q2, ne2 = te2), Q2.length > 2) Kt(J2, { x: Q2[2], y: Q2[3] }) < ne2 && (i2 = [Q2[2], Q2[3]]);
            }
          }
          var re2 = Pn(i2, o2, c2.arrowShapes[v2].spacing(e2) + y2), ae2 = Pn(i2, o2, c2.arrowShapes[v2].gap(e2) + y2);
          if (E2.endX = ae2[0], E2.endY = ae2[1], E2.arrowEndX = re2[0], E2.arrowEndY = re2[1], "inside-to-node" === R2) i2 = [f2.x, f2.y];
          else if (M2.units) i2 = this.manualEndptToPx(d2, M2);
          else if ("outside-to-line" === R2) i2 = E2.srcIntn;
          else if ("outside-to-node" === R2 || "outside-to-node-or-label" === R2 ? u2 = s2 : "outside-to-line" !== R2 && "outside-to-line-or-label" !== R2 || (u2 = [p2.x, p2.y]), i2 = c2.nodeShapes[this.getNodeShape(d2)].intersectLine(f2.x, f2.y, d2.outerWidth(), d2.outerHeight(), u2[0], u2[1], 0, I2, b2), "outside-to-node-or-label" === R2 || "outside-to-line-or-label" === R2) {
            var ie2 = d2._private.rscratch, oe2 = ie2.labelWidth, se2 = ie2.labelHeight, le2 = ie2.labelX, ce2 = ie2.labelY, de2 = oe2 / 2, he2 = se2 / 2, fe2 = d2.pstyle("text-valign").value;
            "top" === fe2 ? ce2 -= he2 : "bottom" === fe2 && (ce2 += he2);
            var pe2 = d2.pstyle("text-halign").value;
            "left" === pe2 ? le2 -= de2 : "right" === pe2 && (le2 += de2);
            var ve2 = Cn(u2[0], u2[1], [le2 - de2, ce2 - he2, le2 + de2, ce2 - he2, le2 + de2, ce2 + he2, le2 - de2, ce2 + he2], f2.x, f2.y);
            if (ve2.length > 0) {
              var ge2 = p2, ye2 = Kt(ge2, Yt(i2)), me2 = Kt(ge2, Yt(ve2)), be2 = ye2;
              if (me2 < ye2 && (i2 = [ve2[0], ve2[1]], be2 = me2), ve2.length > 2) Kt(ge2, { x: ve2[2], y: ve2[3] }) < be2 && (i2 = [ve2[2], ve2[3]]);
            }
          }
          var xe2 = Pn(i2, s2, c2.arrowShapes[g2].spacing(e2) + m2), we2 = Pn(i2, s2, c2.arrowShapes[g2].gap(e2) + m2);
          E2.startX = we2[0], E2.startY = we2[1], E2.arrowStartX = xe2[0], E2.arrowStartY = xe2[1], _2 && (G(E2.startX) && G(E2.startY) && G(E2.endX) && G(E2.endY) ? E2.badLine = false : E2.badLine = true);
        }, "findEndpoints"), getSourceEndpoint: /* @__PURE__ */ __name(function(e2) {
          var t2 = e2[0]._private.rscratch;
          return this.recalculateRenderedStyle(e2), "haystack" === t2.edgeType ? { x: t2.haystackPts[0], y: t2.haystackPts[1] } : { x: t2.arrowStartX, y: t2.arrowStartY };
        }, "getSourceEndpoint"), getTargetEndpoint: /* @__PURE__ */ __name(function(e2) {
          var t2 = e2[0]._private.rscratch;
          return this.recalculateRenderedStyle(e2), "haystack" === t2.edgeType ? { x: t2.haystackPts[2], y: t2.haystackPts[3] } : { x: t2.arrowEndX, y: t2.arrowEndY };
        }, "getTargetEndpoint") }, qc = {};
        function Wc(e2, t2, n2) {
          for (var r2 = function(e3, t3, n3, r3) {
            return Zt(e3, t3, n3, r3);
          }, a2 = t2._private.rstyle.bezierPts, i2 = 0; i2 < e2.bezierProjPcts.length; i2++) {
            var o2 = e2.bezierProjPcts[i2];
            a2.push({ x: r2(n2[0], n2[2], n2[4], o2), y: r2(n2[1], n2[3], n2[5], o2) });
          }
        }
        __name(Wc, "Wc");
        qc.storeEdgeProjections = function(e2) {
          var t2 = e2._private, n2 = t2.rscratch, r2 = n2.edgeType;
          if (t2.rstyle.bezierPts = null, t2.rstyle.linePts = null, t2.rstyle.haystackPts = null, "multibezier" === r2 || "bezier" === r2 || "self" === r2 || "compound" === r2) {
            t2.rstyle.bezierPts = [];
            for (var a2 = 0; a2 + 5 < n2.allpts.length; a2 += 4) Wc(this, e2, n2.allpts.slice(a2, a2 + 6));
          } else if ("segments" === r2) {
            var i2 = t2.rstyle.linePts = [];
            for (a2 = 0; a2 + 1 < n2.allpts.length; a2 += 2) i2.push({ x: n2.allpts[a2], y: n2.allpts[a2 + 1] });
          } else if ("haystack" === r2) {
            var o2 = n2.haystackPts;
            t2.rstyle.haystackPts = [{ x: o2[0], y: o2[1] }, { x: o2[2], y: o2[3] }];
          }
          t2.rstyle.arrowWidth = this.getArrowWidth(e2.pstyle("width").pfValue, e2.pstyle("arrow-scale").value) * this.arrowShapeWidth;
        }, qc.recalculateEdgeProjections = function(e2) {
          this.findEdgeControlPoints(e2);
        };
        var Uc = { recalculateNodeLabelProjection: /* @__PURE__ */ __name(function(e2) {
          var t2 = e2.pstyle("label").strValue;
          if (!ne(t2)) {
            var n2, r2, a2 = e2._private, i2 = e2.width(), o2 = e2.height(), s2 = e2.padding(), l2 = e2.position(), u2 = e2.pstyle("text-halign").strValue, c2 = e2.pstyle("text-valign").strValue, d2 = a2.rscratch, h2 = a2.rstyle;
            switch (u2) {
              case "left":
                n2 = l2.x - i2 / 2 - s2;
                break;
              case "right":
                n2 = l2.x + i2 / 2 + s2;
                break;
              default:
                n2 = l2.x;
            }
            switch (c2) {
              case "top":
                r2 = l2.y - o2 / 2 - s2;
                break;
              case "bottom":
                r2 = l2.y + o2 / 2 + s2;
                break;
              default:
                r2 = l2.y;
            }
            d2.labelX = n2, d2.labelY = r2, h2.labelX = n2, h2.labelY = r2, this.calculateLabelAngles(e2), this.applyLabelDimensions(e2);
          }
        }, "recalculateNodeLabelProjection") }, Hc = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = Math.atan(t2 / e2);
          return 0 === e2 && n2 < 0 && (n2 *= -1), n2;
        }, "Hc"), Kc = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = t2.x - e2.x, r2 = t2.y - e2.y;
          return Hc(n2, r2);
        }, "Kc");
        Uc.recalculateEdgeLabelProjections = function(e2) {
          var t2, n2 = e2._private, r2 = n2.rscratch, a2 = this, i2 = { mid: e2.pstyle("label").strValue, source: e2.pstyle("source-label").strValue, target: e2.pstyle("target-label").strValue };
          if (i2.mid || i2.source || i2.target) {
            t2 = { x: r2.midX, y: r2.midY };
            var o2 = /* @__PURE__ */ __name(function(e3, t3, r3) {
              ft(n2.rscratch, e3, t3, r3), ft(n2.rstyle, e3, t3, r3);
            }, "o");
            o2("labelX", null, t2.x), o2("labelY", null, t2.y);
            var s2 = Hc(r2.midDispX, r2.midDispY);
            o2("labelAutoAngle", null, s2);
            var l2 = /* @__PURE__ */ __name(function() {
              if (l2.cache) return l2.cache;
              for (var e3 = [], t3 = 0; t3 + 5 < r2.allpts.length; t3 += 4) {
                var i3 = { x: r2.allpts[t3], y: r2.allpts[t3 + 1] }, o3 = { x: r2.allpts[t3 + 2], y: r2.allpts[t3 + 3] }, s3 = { x: r2.allpts[t3 + 4], y: r2.allpts[t3 + 5] };
                e3.push({ p0: i3, p1: o3, p2: s3, startDist: 0, length: 0, segments: [] });
              }
              var u3 = n2.rstyle.bezierPts, c2 = a2.bezierProjPcts.length;
              function d2(e4, t4, n3, r3, a3) {
                var i4 = Ht(t4, n3), o4 = e4.segments[e4.segments.length - 1], s4 = { p0: t4, p1: n3, t0: r3, t1: a3, startDist: o4 ? o4.startDist + o4.length : 0, length: i4 };
                e4.segments.push(s4), e4.length += i4;
              }
              __name(d2, "d");
              for (var h2 = 0; h2 < e3.length; h2++) {
                var f2 = e3[h2], p2 = e3[h2 - 1];
                p2 && (f2.startDist = p2.startDist + p2.length), d2(f2, f2.p0, u3[h2 * c2], 0, a2.bezierProjPcts[0]);
                for (var v2 = 0; v2 < c2 - 1; v2++) d2(f2, u3[h2 * c2 + v2], u3[h2 * c2 + v2 + 1], a2.bezierProjPcts[v2], a2.bezierProjPcts[v2 + 1]);
                d2(f2, u3[h2 * c2 + c2 - 1], f2.p2, a2.bezierProjPcts[c2 - 1], 1);
              }
              return l2.cache = e3;
            }, "l"), u2 = /* @__PURE__ */ __name(function(n3) {
              var a3, s3 = "source" === n3;
              if (i2[n3]) {
                var u3 = e2.pstyle(n3 + "-text-offset").pfValue;
                switch (r2.edgeType) {
                  case "self":
                  case "compound":
                  case "bezier":
                  case "multibezier":
                    for (var c2, d2 = l2(), h2 = 0, f2 = 0, p2 = 0; p2 < d2.length; p2++) {
                      for (var v2 = d2[s3 ? p2 : d2.length - 1 - p2], g2 = 0; g2 < v2.segments.length; g2++) {
                        var y2 = v2.segments[s3 ? g2 : v2.segments.length - 1 - g2], m2 = p2 === d2.length - 1 && g2 === v2.segments.length - 1;
                        if (h2 = f2, (f2 += y2.length) >= u3 || m2) {
                          c2 = { cp: v2, segment: y2 };
                          break;
                        }
                      }
                      if (c2) break;
                    }
                    var b2 = c2.cp, x2 = c2.segment, w2 = (u3 - h2) / x2.length, E2 = x2.t1 - x2.t0, k2 = s3 ? x2.t0 + E2 * w2 : x2.t1 - E2 * w2;
                    k2 = Qt(0, k2, 1), t2 = $t(b2.p0, b2.p1, b2.p2, k2), a3 = function(e3, t3, n4, r3) {
                      var a4 = Qt(0, r3 - 1e-3, 1), i3 = Qt(0, r3 + 1e-3, 1), o3 = $t(e3, t3, n4, a4), s4 = $t(e3, t3, n4, i3);
                      return Kc(o3, s4);
                    }(b2.p0, b2.p1, b2.p2, k2);
                    break;
                  case "straight":
                  case "segments":
                  case "haystack":
                    for (var T2, C2, P2, S2, B2 = 0, D2 = r2.allpts.length, _2 = 0; _2 + 3 < D2 && (s3 ? (P2 = { x: r2.allpts[_2], y: r2.allpts[_2 + 1] }, S2 = { x: r2.allpts[_2 + 2], y: r2.allpts[_2 + 3] }) : (P2 = { x: r2.allpts[D2 - 2 - _2], y: r2.allpts[D2 - 1 - _2] }, S2 = { x: r2.allpts[D2 - 4 - _2], y: r2.allpts[D2 - 3 - _2] }), C2 = B2, !((B2 += T2 = Ht(P2, S2)) >= u3)); _2 += 2) ;
                    var A2 = (u3 - C2) / T2;
                    A2 = Qt(0, A2, 1), t2 = function(e3, t3, n4, r3) {
                      var a4 = t3.x - e3.x, i3 = t3.y - e3.y, o3 = Ht(e3, t3), s4 = a4 / o3, l3 = i3 / o3;
                      return n4 = null == n4 ? 0 : n4, r3 = null != r3 ? r3 : n4 * o3, { x: e3.x + s4 * r3, y: e3.y + l3 * r3 };
                    }(P2, S2, A2), a3 = Kc(P2, S2);
                }
                o2("labelX", n3, t2.x), o2("labelY", n3, t2.y), o2("labelAutoAngle", n3, a3);
              }
            }, "u");
            u2("source"), u2("target"), this.applyLabelDimensions(e2);
          }
        }, Uc.applyLabelDimensions = function(e2) {
          this.applyPrefixedLabelDimensions(e2), e2.isEdge() && (this.applyPrefixedLabelDimensions(e2, "source"), this.applyPrefixedLabelDimensions(e2, "target"));
        }, Uc.applyPrefixedLabelDimensions = function(e2, t2) {
          var n2 = e2._private, r2 = this.getLabelText(e2, t2), a2 = qe(r2, e2._private.labelDimsKey);
          if (ht(n2.rscratch, "prefixedLabelDimsKey", t2) !== a2) {
            ft(n2.rscratch, "prefixedLabelDimsKey", t2, a2);
            var i2 = this.calculateLabelDimensions(e2, r2), o2 = e2.pstyle("line-height").pfValue, s2 = e2.pstyle("text-wrap").strValue, l2 = ht(n2.rscratch, "labelWrapCachedLines", t2) || [], u2 = "wrap" !== s2 ? 1 : Math.max(l2.length, 1), c2 = i2.height / u2, d2 = c2 * o2, h2 = i2.width, f2 = i2.height + (u2 - 1) * (o2 - 1) * c2;
            ft(n2.rstyle, "labelWidth", t2, h2), ft(n2.rscratch, "labelWidth", t2, h2), ft(n2.rstyle, "labelHeight", t2, f2), ft(n2.rscratch, "labelHeight", t2, f2), ft(n2.rscratch, "labelLineHeight", t2, d2);
          }
        }, Uc.getLabelText = function(e2, t2) {
          var n2 = e2._private, a2 = t2 ? t2 + "-" : "", i2 = e2.pstyle(a2 + "label").strValue, o2 = e2.pstyle("text-transform").value, s2 = /* @__PURE__ */ __name(function(e3, r2) {
            return r2 ? (ft(n2.rscratch, e3, t2, r2), r2) : ht(n2.rscratch, e3, t2);
          }, "s");
          if (!i2) return "";
          "none" == o2 || ("uppercase" == o2 ? i2 = i2.toUpperCase() : "lowercase" == o2 && (i2 = i2.toLowerCase()));
          var l2 = e2.pstyle("text-wrap").value;
          if ("wrap" === l2) {
            var u2 = s2("labelKey");
            if (null != u2 && s2("labelWrapKey") === u2) return s2("labelWrapCachedText");
            for (var c2 = i2.split("\n"), d2 = e2.pstyle("text-max-width").pfValue, h2 = "anywhere" === e2.pstyle("text-overflow-wrap").value, f2 = [], p2 = /[\s\u200b]+|$/g, v2 = 0; v2 < c2.length; v2++) {
              var g2 = c2[v2], y2 = this.calculateLabelDimensions(e2, g2).width;
              if (h2) {
                var m2 = g2.split("").join("\u200B");
                g2 = m2;
              }
              if (y2 > d2) {
                var b2, x2 = "", w2 = 0, E2 = r(g2.matchAll(p2));
                try {
                  for (E2.s(); !(b2 = E2.n()).done; ) {
                    var k2 = b2.value, T2 = k2[0], C2 = g2.substring(w2, k2.index);
                    w2 = k2.index + T2.length;
                    var P2 = 0 === x2.length ? C2 : x2 + C2 + T2;
                    this.calculateLabelDimensions(e2, P2).width <= d2 ? x2 += C2 + T2 : (x2 && f2.push(x2), x2 = C2 + T2);
                  }
                } catch (e3) {
                  E2.e(e3);
                } finally {
                  E2.f();
                }
                x2.match(/^[\s\u200b]+$/) || f2.push(x2);
              } else f2.push(g2);
            }
            s2("labelWrapCachedLines", f2), i2 = s2("labelWrapCachedText", f2.join("\n")), s2("labelWrapKey", u2);
          } else if ("ellipsis" === l2) {
            var S2 = e2.pstyle("text-max-width").pfValue, B2 = "", D2 = false;
            if (this.calculateLabelDimensions(e2, i2).width < S2) return i2;
            for (var _2 = 0; _2 < i2.length; _2++) {
              if (this.calculateLabelDimensions(e2, B2 + i2[_2] + "\u2026").width > S2) break;
              B2 += i2[_2], _2 === i2.length - 1 && (D2 = true);
            }
            return D2 || (B2 += "\u2026"), B2;
          }
          return i2;
        }, Uc.getLabelJustification = function(e2) {
          var t2 = e2.pstyle("text-justification").strValue, n2 = e2.pstyle("text-halign").strValue;
          if ("auto" !== t2) return t2;
          if (!e2.isNode()) return "center";
          switch (n2) {
            case "left":
              return "right";
            case "right":
              return "left";
            default:
              return "center";
          }
        }, Uc.calculateLabelDimensions = function(e2, t2) {
          var n2 = this.cy.window().document, r2 = e2.pstyle("font-style").strValue, a2 = e2.pstyle("font-size").pfValue, i2 = e2.pstyle("font-family").strValue, o2 = e2.pstyle("font-weight").strValue, s2 = this.labelCalcCanvas, l2 = this.labelCalcCanvasContext;
          if (!s2) {
            s2 = this.labelCalcCanvas = n2.createElement("canvas"), l2 = this.labelCalcCanvasContext = s2.getContext("2d");
            var u2 = s2.style;
            u2.position = "absolute", u2.left = "-9999px", u2.top = "-9999px", u2.zIndex = "-1", u2.visibility = "hidden", u2.pointerEvents = "none";
          }
          l2.font = "".concat(r2, " ").concat(o2, " ").concat(a2, "px ").concat(i2);
          for (var c2 = 0, d2 = 0, h2 = t2.split("\n"), f2 = 0; f2 < h2.length; f2++) {
            var p2 = h2[f2], v2 = l2.measureText(p2), g2 = Math.ceil(v2.width), y2 = a2;
            c2 = Math.max(g2, c2), d2 += y2;
          }
          return { width: c2 += 0, height: d2 += 0 };
        }, Uc.calculateLabelAngle = function(e2, t2) {
          var n2 = e2._private.rscratch, r2 = e2.isEdge(), a2 = t2 ? t2 + "-" : "", i2 = e2.pstyle(a2 + "text-rotation"), o2 = i2.strValue;
          return "none" === o2 ? 0 : r2 && "autorotate" === o2 ? n2.labelAutoAngle : "autorotate" === o2 ? 0 : i2.pfValue;
        }, Uc.calculateLabelAngles = function(e2) {
          var t2 = this, n2 = e2.isEdge(), r2 = e2._private.rscratch;
          r2.labelAngle = t2.calculateLabelAngle(e2), n2 && (r2.sourceLabelAngle = t2.calculateLabelAngle(e2, "source"), r2.targetLabelAngle = t2.calculateLabelAngle(e2, "target"));
        };
        var Gc = {}, Zc = false;
        Gc.getNodeShape = function(e2) {
          var t2 = e2.pstyle("shape").value;
          if ("cutrectangle" === t2 && (e2.width() < 28 || e2.height() < 28)) return Zc || (at("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Zc = true), "rectangle";
          if (e2.isParent()) return "rectangle" === t2 || "roundrectangle" === t2 || "round-rectangle" === t2 || "cutrectangle" === t2 || "cut-rectangle" === t2 || "barrel" === t2 ? t2 : "rectangle";
          if ("polygon" === t2) {
            var n2 = e2.pstyle("shape-polygon-points").value;
            return this.nodeShapes.makePolygon(n2).name;
          }
          return t2;
        };
        var $c = { registerCalculationListeners: /* @__PURE__ */ __name(function() {
          var e2 = this.cy, t2 = e2.collection(), n2 = this, r2 = /* @__PURE__ */ __name(function(e3) {
            var n3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            if (t2.merge(e3), n3) for (var r3 = 0; r3 < e3.length; r3++) {
              var a3 = e3[r3]._private.rstyle;
              a3.clean = false, a3.cleanConnected = false;
            }
          }, "r");
          n2.binder(e2).on("bounds.* dirty.*", function(e3) {
            var t3 = e3.target;
            r2(t3);
          }).on("style.* background.*", function(e3) {
            var t3 = e3.target;
            r2(t3, false);
          });
          var a2 = /* @__PURE__ */ __name(function(a3) {
            if (a3) {
              var i2 = n2.onUpdateEleCalcsFns;
              t2.cleanStyle();
              for (var o2 = 0; o2 < t2.length; o2++) {
                var s2 = t2[o2], l2 = s2._private.rstyle;
                s2.isNode() && !l2.cleanConnected && (r2(s2.connectedEdges()), l2.cleanConnected = true);
              }
              if (i2) for (var u2 = 0; u2 < i2.length; u2++) {
                (0, i2[u2])(a3, t2);
              }
              n2.recalculateRenderedStyle(t2), t2 = e2.collection();
            }
          }, "a");
          n2.flushRenderedStyleQueue = function() {
            a2(true);
          }, n2.beforeRender(a2, n2.beforeRenderPriorities.eleCalcs);
        }, "registerCalculationListeners"), onUpdateEleCalcs: /* @__PURE__ */ __name(function(e2) {
          (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e2);
        }, "onUpdateEleCalcs"), recalculateRenderedStyle: /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = /* @__PURE__ */ __name(function(e3) {
            return e3._private.rstyle.cleanConnected;
          }, "n");
          if (0 !== e2.length) {
            var r2 = [], a2 = [];
            if (!this.destroyed) {
              void 0 === t2 && (t2 = true);
              for (var i2 = 0; i2 < e2.length; i2++) {
                var o2 = e2[i2], s2 = o2._private, l2 = s2.rstyle;
                !o2.isEdge() || n2(o2.source()) && n2(o2.target()) || (l2.clean = false), o2.isEdge() && o2.isBundledBezier() && o2.parallelEdges().some(function(e3) {
                  return !e3._private.rstyle.clean && e3.isBundledBezier();
                }) && (l2.clean = false), t2 && l2.clean || o2.removed() || "none" !== o2.pstyle("display").value && ("nodes" === s2.group ? a2.push(o2) : r2.push(o2), l2.clean = true);
              }
              for (var u2 = 0; u2 < a2.length; u2++) {
                var c2 = a2[u2], d2 = c2._private.rstyle, h2 = c2.position();
                this.recalculateNodeLabelProjection(c2), d2.nodeX = h2.x, d2.nodeY = h2.y, d2.nodeW = c2.pstyle("width").pfValue, d2.nodeH = c2.pstyle("height").pfValue;
              }
              this.recalculateEdgeProjections(r2);
              for (var f2 = 0; f2 < r2.length; f2++) {
                var p2 = r2[f2]._private, v2 = p2.rstyle, g2 = p2.rscratch;
                v2.srcX = g2.arrowStartX, v2.srcY = g2.arrowStartY, v2.tgtX = g2.arrowEndX, v2.tgtY = g2.arrowEndY, v2.midX = g2.midX, v2.midY = g2.midY, v2.labelAngle = g2.labelAngle, v2.sourceLabelAngle = g2.sourceLabelAngle, v2.targetLabelAngle = g2.targetLabelAngle;
              }
            }
          }
        }, "recalculateRenderedStyle") }, Qc = { updateCachedGrabbedEles: /* @__PURE__ */ __name(function() {
          var e2 = this.cachedZSortedEles;
          if (e2) {
            e2.drag = [], e2.nondrag = [];
            for (var t2 = [], n2 = 0; n2 < e2.length; n2++) {
              var r2 = (a2 = e2[n2])._private.rscratch;
              a2.grabbed() && !a2.isParent() ? t2.push(a2) : r2.inDragLayer ? e2.drag.push(a2) : e2.nondrag.push(a2);
            }
            for (n2 = 0; n2 < t2.length; n2++) {
              var a2 = t2[n2];
              e2.drag.push(a2);
            }
          }
        }, "updateCachedGrabbedEles"), invalidateCachedZSortedEles: /* @__PURE__ */ __name(function() {
          this.cachedZSortedEles = null;
        }, "invalidateCachedZSortedEles"), getCachedZSortedEles: /* @__PURE__ */ __name(function(e2) {
          if (e2 || !this.cachedZSortedEles) {
            var t2 = this.cy.mutableElements().toArray();
            t2.sort(hl), t2.interactive = t2.filter(function(e3) {
              return e3.interactive();
            }), this.cachedZSortedEles = t2, this.updateCachedGrabbedEles();
          } else t2 = this.cachedZSortedEles;
          return t2;
        }, "getCachedZSortedEles") }, Jc = {};
        [pc, vc, Xc, Yc, qc, Uc, Gc, $c, Qc].forEach(function(e2) {
          ge(Jc, e2);
        });
        var ed = { getCachedImage: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = this.imageCache = this.imageCache || {}, a2 = r2[e2];
          if (a2) return a2.image.complete || a2.image.addEventListener("load", n2), a2.image;
          var i2 = (a2 = r2[e2] = r2[e2] || {}).image = new Image();
          i2.addEventListener("load", n2), i2.addEventListener("error", function() {
            i2.error = true;
          });
          var o2 = "data:";
          return e2.substring(0, 5).toLowerCase() === o2 || (t2 = "null" === t2 ? null : t2, i2.crossOrigin = t2), i2.src = e2, i2;
        }, "getCachedImage") }, td = { registerBinding: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          var a2 = Array.prototype.slice.apply(arguments, [1]);
          if (Array.isArray(e2)) {
            for (var i2 = [], o2 = 0; o2 < e2.length; o2++) {
              var s2 = e2[o2];
              if (void 0 !== s2) {
                var l2 = this.binder(s2);
                i2.push(l2.on.apply(l2, a2));
              }
            }
            return i2;
          }
          return (l2 = this.binder(e2)).on.apply(l2, a2);
        }, "registerBinding") };
        td.binder = function(e2) {
          var t2, n2 = this, r2 = n2.cy.window(), a2 = e2 === r2 || e2 === r2.document || e2 === r2.document.body || (t2 = e2, "undefined" != typeof HTMLElement && t2 instanceof HTMLElement);
          if (null == n2.supportsPassiveEvents) {
            var i2 = false;
            try {
              var o2 = Object.defineProperty({}, "passive", { get: /* @__PURE__ */ __name(function() {
                return i2 = true, true;
              }, "get") });
              r2.addEventListener("test", null, o2);
            } catch (e3) {
            }
            n2.supportsPassiveEvents = i2;
          }
          var s2 = /* @__PURE__ */ __name(function(t3, r3, i3) {
            var o3 = Array.prototype.slice.call(arguments);
            return a2 && n2.supportsPassiveEvents && (o3[2] = { capture: null != i3 && i3, passive: false, once: false }), n2.bindings.push({ target: e2, args: o3 }), (e2.addEventListener || e2.on).apply(e2, o3), this;
          }, "s");
          return { on: s2, addEventListener: s2, addListener: s2, bind: s2 };
        }, td.nodeIsDraggable = function(e2) {
          return e2 && e2.isNode() && !e2.locked() && e2.grabbable();
        }, td.nodeIsGrabbable = function(e2) {
          return this.nodeIsDraggable(e2) && e2.interactive();
        }, td.load = function() {
          var e2 = this, t2 = e2.cy.window(), n2 = /* @__PURE__ */ __name(function(e3) {
            return e3.selected();
          }, "n"), r2 = /* @__PURE__ */ __name(function(t3, n3, r3, a3) {
            null == t3 && (t3 = e2.cy);
            for (var i3 = 0; i3 < n3.length; i3++) {
              var o3 = n3[i3];
              t3.emit({ originalEvent: r3, type: o3, position: a3 });
            }
          }, "r"), a2 = /* @__PURE__ */ __name(function(e3) {
            return e3.shiftKey || e3.metaKey || e3.ctrlKey;
          }, "a"), i2 = /* @__PURE__ */ __name(function(t3, n3) {
            var r3 = true;
            if (e2.cy.hasCompoundNodes() && t3 && t3.pannable()) for (var a3 = 0; n3 && a3 < n3.length; a3++) {
              if ((t3 = n3[a3]).isNode() && t3.isParent() && !t3.pannable()) {
                r3 = false;
                break;
              }
            }
            else r3 = true;
            return r3;
          }, "i"), o2 = /* @__PURE__ */ __name(function(e3) {
            e3[0]._private.rscratch.inDragLayer = true;
          }, "o"), s2 = /* @__PURE__ */ __name(function(e3) {
            e3[0]._private.rscratch.isGrabTarget = true;
          }, "s"), l2 = /* @__PURE__ */ __name(function(e3, t3) {
            var n3 = t3.addToList;
            n3.has(e3) || !e3.grabbable() || e3.locked() || (n3.merge(e3), function(e4) {
              e4[0]._private.grabbed = true;
            }(e3));
          }, "l"), u2 = /* @__PURE__ */ __name(function(t3, n3) {
            n3 = n3 || {};
            var r3 = t3.cy().hasCompoundNodes();
            n3.inDragLayer && (t3.forEach(o2), t3.neighborhood().stdFilter(function(e3) {
              return !r3 || e3.isEdge();
            }).forEach(o2)), n3.addToList && t3.forEach(function(e3) {
              l2(e3, n3);
            }), function(e3, t4) {
              if (e3.cy().hasCompoundNodes() && (null != t4.inDragLayer || null != t4.addToList)) {
                var n4 = e3.descendants();
                t4.inDragLayer && (n4.forEach(o2), n4.connectedEdges().forEach(o2)), t4.addToList && l2(n4, t4);
              }
            }(t3, n3), h2(t3, { inDragLayer: n3.inDragLayer }), e2.updateCachedGrabbedEles();
          }, "u"), c2 = u2, d2 = /* @__PURE__ */ __name(function(t3) {
            t3 && (e2.getCachedZSortedEles().forEach(function(e3) {
              !function(e4) {
                e4[0]._private.grabbed = false;
              }(e3), function(e4) {
                e4[0]._private.rscratch.inDragLayer = false;
              }(e3), function(e4) {
                e4[0]._private.rscratch.isGrabTarget = false;
              }(e3);
            }), e2.updateCachedGrabbedEles());
          }, "d"), h2 = /* @__PURE__ */ __name(function(e3, t3) {
            if ((null != t3.inDragLayer || null != t3.addToList) && e3.cy().hasCompoundNodes()) {
              var n3 = e3.ancestors().orphans();
              if (!n3.same(e3)) {
                var r3 = n3.descendants().spawnSelf().merge(n3).unmerge(e3).unmerge(e3.descendants()), a3 = r3.connectedEdges();
                t3.inDragLayer && (a3.forEach(o2), r3.forEach(o2)), t3.addToList && r3.forEach(function(e4) {
                  l2(e4, t3);
                });
              }
            }
          }, "h"), f2 = /* @__PURE__ */ __name(function() {
            null != document.activeElement && null != document.activeElement.blur && document.activeElement.blur();
          }, "f"), p2 = "undefined" != typeof MutationObserver, v2 = "undefined" != typeof ResizeObserver;
          p2 ? (e2.removeObserver = new MutationObserver(function(t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r3 = t3[n3].removedNodes;
              if (r3) for (var a3 = 0; a3 < r3.length; a3++) {
                if (r3[a3] === e2.container) {
                  e2.destroy();
                  break;
                }
              }
            }
          }), e2.container.parentNode && e2.removeObserver.observe(e2.container.parentNode, { childList: true })) : e2.registerBinding(e2.container, "DOMNodeRemoved", function(t3) {
            e2.destroy();
          });
          var g2 = _e(function() {
            e2.cy.resize();
          }, 100);
          p2 && (e2.styleObserver = new MutationObserver(g2), e2.styleObserver.observe(e2.container, { attributes: true })), e2.registerBinding(t2, "resize", g2), v2 && (e2.resizeObserver = new ResizeObserver(g2), e2.resizeObserver.observe(e2.container));
          var y2 = /* @__PURE__ */ __name(function() {
            e2.invalidateContainerClientCoordsCache();
          }, "y");
          !function(e3, t3) {
            for (; null != e3; ) t3(e3), e3 = e3.parentNode;
          }(e2.container, function(t3) {
            e2.registerBinding(t3, "transitionend", y2), e2.registerBinding(t3, "animationend", y2), e2.registerBinding(t3, "scroll", y2);
          }), e2.registerBinding(e2.container, "contextmenu", function(e3) {
            e3.preventDefault();
          });
          var m2 = /* @__PURE__ */ __name(function(t3) {
            for (var n3 = e2.findContainerClientCoords(), r3 = n3[0], a3 = n3[1], i3 = n3[2], o3 = n3[3], s3 = t3.touches ? t3.touches : [t3], l3 = false, u3 = 0; u3 < s3.length; u3++) {
              var c3 = s3[u3];
              if (r3 <= c3.clientX && c3.clientX <= r3 + i3 && a3 <= c3.clientY && c3.clientY <= a3 + o3) {
                l3 = true;
                break;
              }
            }
            if (!l3) return false;
            for (var d3 = e2.container, h3 = t3.target.parentNode, f3 = false; h3; ) {
              if (h3 === d3) {
                f3 = true;
                break;
              }
              h3 = h3.parentNode;
            }
            return !!f3;
          }, "m");
          e2.registerBinding(e2.container, "mousedown", function(t3) {
            if (m2(t3) && (1 !== e2.hoverData.which || 1 === t3.which)) {
              t3.preventDefault(), f2(), e2.hoverData.capture = true, e2.hoverData.which = t3.which;
              var n3 = e2.cy, a3 = [t3.clientX, t3.clientY], i3 = e2.projectIntoViewport(a3[0], a3[1]), o3 = e2.selection, l3 = e2.findNearestElements(i3[0], i3[1], true, false), d3 = l3[0], h3 = e2.dragData.possibleDragElements;
              e2.hoverData.mdownPos = i3, e2.hoverData.mdownGPos = a3;
              var p3 = /* @__PURE__ */ __name(function(e3) {
                return { originalEvent: t3, type: e3, position: { x: i3[0], y: i3[1] } };
              }, "p");
              if (3 == t3.which) {
                e2.hoverData.cxtStarted = true;
                var v3 = { originalEvent: t3, type: "cxttapstart", position: { x: i3[0], y: i3[1] } };
                d3 ? (d3.activate(), d3.emit(v3), e2.hoverData.down = d3) : n3.emit(v3), e2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), e2.hoverData.cxtDragged = false;
              } else if (1 == t3.which) {
                if (d3 && d3.activate(), null != d3 && e2.nodeIsGrabbable(d3)) {
                  if (s2(d3), d3.selected()) {
                    h3 = e2.dragData.possibleDragElements = n3.collection();
                    var g3 = n3.$(function(t4) {
                      return t4.isNode() && t4.selected() && e2.nodeIsGrabbable(t4);
                    });
                    u2(g3, { addToList: h3 }), d3.emit(p3("grabon")), g3.forEach(function(e3) {
                      e3.emit(p3("grab"));
                    });
                  } else h3 = e2.dragData.possibleDragElements = n3.collection(), c2(d3, { addToList: h3 }), d3.emit(p3("grabon")).emit(p3("grab"));
                  e2.redrawHint("eles", true), e2.redrawHint("drag", true);
                }
                e2.hoverData.down = d3, e2.hoverData.downs = l3, e2.hoverData.downTime = (/* @__PURE__ */ new Date()).getTime(), r2(d3, ["mousedown", "tapstart", "vmousedown"], t3, { x: i3[0], y: i3[1] }), null == d3 ? (o3[4] = 1, e2.data.bgActivePosistion = { x: i3[0], y: i3[1] }, e2.redrawHint("select", true), e2.redraw()) : d3.pannable() && (o3[4] = 1), e2.hoverData.tapholdCancelled = false, clearTimeout(e2.hoverData.tapholdTimeout), e2.hoverData.tapholdTimeout = setTimeout(function() {
                  if (!e2.hoverData.tapholdCancelled) {
                    var t4 = e2.hoverData.down;
                    t4 ? t4.emit(p3("taphold")) : n3.emit(p3("taphold"));
                  }
                }, e2.tapholdDuration);
              }
              o3[0] = o3[2] = i3[0], o3[1] = o3[3] = i3[1];
            }
          }, false);
          var b2, x2, w2, E2 = function(e3) {
            var t3 = e3.getRootNode();
            if (t3 && 11 === t3.nodeType && void 0 !== t3.host) return t3;
          }(e2.container);
          e2.registerBinding([t2, E2], "mousemove", function(t3) {
            if (e2.hoverData.capture || m2(t3)) {
              var n3 = false, o3 = e2.cy, s3 = o3.zoom(), l3 = [t3.clientX, t3.clientY], c3 = e2.projectIntoViewport(l3[0], l3[1]), h3 = e2.hoverData.mdownPos, f3 = e2.hoverData.mdownGPos, p3 = e2.selection, v3 = null;
              e2.hoverData.draggingEles || e2.hoverData.dragging || e2.hoverData.selecting || (v3 = e2.findNearestElement(c3[0], c3[1], true, false));
              var g3, y3 = e2.hoverData.last, b3 = e2.hoverData.down, x3 = [c3[0] - p3[2], c3[1] - p3[3]], w3 = e2.dragData.possibleDragElements;
              if (f3) {
                var E3 = l3[0] - f3[0], k3 = E3 * E3, T3 = l3[1] - f3[1], C3 = k3 + T3 * T3;
                e2.hoverData.isOverThresholdDrag = g3 = C3 >= e2.desktopTapThreshold2;
              }
              var P3 = a2(t3);
              g3 && (e2.hoverData.tapholdCancelled = true);
              n3 = true, r2(v3, ["mousemove", "vmousemove", "tapdrag"], t3, { x: c3[0], y: c3[1] });
              var S3 = /* @__PURE__ */ __name(function(e3) {
                return { originalEvent: t3, type: e3, position: { x: c3[0], y: c3[1] } };
              }, "S"), B3 = /* @__PURE__ */ __name(function() {
                e2.data.bgActivePosistion = void 0, e2.hoverData.selecting || o3.emit(S3("boxstart")), p3[4] = 1, e2.hoverData.selecting = true, e2.redrawHint("select", true), e2.redraw();
              }, "B");
              if (3 === e2.hoverData.which) {
                if (g3) {
                  var D3 = S3("cxtdrag");
                  b3 ? b3.emit(D3) : o3.emit(D3), e2.hoverData.cxtDragged = true, e2.hoverData.cxtOver && v3 === e2.hoverData.cxtOver || (e2.hoverData.cxtOver && e2.hoverData.cxtOver.emit(S3("cxtdragout")), e2.hoverData.cxtOver = v3, v3 && v3.emit(S3("cxtdragover")));
                }
              } else if (e2.hoverData.dragging) {
                if (n3 = true, o3.panningEnabled() && o3.userPanningEnabled()) {
                  var _3;
                  if (e2.hoverData.justStartedPan) {
                    var A3 = e2.hoverData.mdownPos;
                    _3 = { x: (c3[0] - A3[0]) * s3, y: (c3[1] - A3[1]) * s3 }, e2.hoverData.justStartedPan = false;
                  } else _3 = { x: x3[0] * s3, y: x3[1] * s3 };
                  o3.panBy(_3), o3.emit(S3("dragpan")), e2.hoverData.dragged = true;
                }
                c3 = e2.projectIntoViewport(t3.clientX, t3.clientY);
              } else if (1 != p3[4] || null != b3 && !b3.pannable()) {
                if (b3 && b3.pannable() && b3.active() && b3.unactivate(), b3 && b3.grabbed() || v3 == y3 || (y3 && r2(y3, ["mouseout", "tapdragout"], t3, { x: c3[0], y: c3[1] }), v3 && r2(v3, ["mouseover", "tapdragover"], t3, { x: c3[0], y: c3[1] }), e2.hoverData.last = v3), b3) if (g3) {
                  if (o3.boxSelectionEnabled() && P3) b3 && b3.grabbed() && (d2(w3), b3.emit(S3("freeon")), w3.emit(S3("free")), e2.dragData.didDrag && (b3.emit(S3("dragfreeon")), w3.emit(S3("dragfree")))), B3();
                  else if (b3 && b3.grabbed() && e2.nodeIsDraggable(b3)) {
                    var M3 = !e2.dragData.didDrag;
                    M3 && e2.redrawHint("eles", true), e2.dragData.didDrag = true, e2.hoverData.draggingEles || u2(w3, { inDragLayer: true });
                    var R3 = { x: 0, y: 0 };
                    if (G(x3[0]) && G(x3[1]) && (R3.x += x3[0], R3.y += x3[1], M3)) {
                      var I3 = e2.hoverData.dragDelta;
                      I3 && G(I3[0]) && G(I3[1]) && (R3.x += I3[0], R3.y += I3[1]);
                    }
                    e2.hoverData.draggingEles = true, w3.silentShift(R3).emit(S3("position")).emit(S3("drag")), e2.redrawHint("drag", true), e2.redraw();
                  }
                } else !function() {
                  var t4 = e2.hoverData.dragDelta = e2.hoverData.dragDelta || [];
                  0 === t4.length ? (t4.push(x3[0]), t4.push(x3[1])) : (t4[0] += x3[0], t4[1] += x3[1]);
                }();
                n3 = true;
              } else if (g3) {
                if (e2.hoverData.dragging || !o3.boxSelectionEnabled() || !P3 && o3.panningEnabled() && o3.userPanningEnabled()) {
                  if (!e2.hoverData.selecting && o3.panningEnabled() && o3.userPanningEnabled()) {
                    i2(b3, e2.hoverData.downs) && (e2.hoverData.dragging = true, e2.hoverData.justStartedPan = true, p3[4] = 0, e2.data.bgActivePosistion = Yt(h3), e2.redrawHint("select", true), e2.redraw());
                  }
                } else B3();
                b3 && b3.pannable() && b3.active() && b3.unactivate();
              }
              return p3[2] = c3[0], p3[3] = c3[1], n3 ? (t3.stopPropagation && t3.stopPropagation(), t3.preventDefault && t3.preventDefault(), false) : void 0;
            }
          }, false), e2.registerBinding(t2, "mouseup", function(t3) {
            if ((1 !== e2.hoverData.which || 1 === t3.which || !e2.hoverData.capture) && e2.hoverData.capture) {
              e2.hoverData.capture = false;
              var i3 = e2.cy, o3 = e2.projectIntoViewport(t3.clientX, t3.clientY), s3 = e2.selection, l3 = e2.findNearestElement(o3[0], o3[1], true, false), u3 = e2.dragData.possibleDragElements, c3 = e2.hoverData.down, h3 = a2(t3);
              e2.data.bgActivePosistion && (e2.redrawHint("select", true), e2.redraw()), e2.hoverData.tapholdCancelled = true, e2.data.bgActivePosistion = void 0, c3 && c3.unactivate();
              var f3 = /* @__PURE__ */ __name(function(e3) {
                return { originalEvent: t3, type: e3, position: { x: o3[0], y: o3[1] } };
              }, "f");
              if (3 === e2.hoverData.which) {
                var p3 = f3("cxttapend");
                if (c3 ? c3.emit(p3) : i3.emit(p3), !e2.hoverData.cxtDragged) {
                  var v3 = f3("cxttap");
                  c3 ? c3.emit(v3) : i3.emit(v3);
                }
                e2.hoverData.cxtDragged = false, e2.hoverData.which = null;
              } else if (1 === e2.hoverData.which) {
                if (r2(l3, ["mouseup", "tapend", "vmouseup"], t3, { x: o3[0], y: o3[1] }), e2.dragData.didDrag || e2.hoverData.dragged || e2.hoverData.selecting || e2.hoverData.isOverThresholdDrag || (r2(c3, ["click", "tap", "vclick"], t3, { x: o3[0], y: o3[1] }), x2 = false, t3.timeStamp - w2 <= i3.multiClickDebounceTime() ? (b2 && clearTimeout(b2), x2 = true, w2 = null, r2(c3, ["dblclick", "dbltap", "vdblclick"], t3, { x: o3[0], y: o3[1] })) : (b2 = setTimeout(function() {
                  x2 || r2(c3, ["oneclick", "onetap", "voneclick"], t3, { x: o3[0], y: o3[1] });
                }, i3.multiClickDebounceTime()), w2 = t3.timeStamp)), null != c3 || e2.dragData.didDrag || e2.hoverData.selecting || e2.hoverData.dragged || a2(t3) || (i3.$(n2).unselect(["tapunselect"]), u3.length > 0 && e2.redrawHint("eles", true), e2.dragData.possibleDragElements = u3 = i3.collection()), l3 != c3 || e2.dragData.didDrag || e2.hoverData.selecting || null != l3 && l3._private.selectable && (e2.hoverData.dragging || ("additive" === i3.selectionType() || h3 ? l3.selected() ? l3.unselect(["tapunselect"]) : l3.select(["tapselect"]) : h3 || (i3.$(n2).unmerge(l3).unselect(["tapunselect"]), l3.select(["tapselect"]))), e2.redrawHint("eles", true)), e2.hoverData.selecting) {
                  var g3 = i3.collection(e2.getAllInBox(s3[0], s3[1], s3[2], s3[3]));
                  e2.redrawHint("select", true), g3.length > 0 && e2.redrawHint("eles", true), i3.emit(f3("boxend"));
                  var y3 = /* @__PURE__ */ __name(function(e3) {
                    return e3.selectable() && !e3.selected();
                  }, "y");
                  "additive" === i3.selectionType() || h3 || i3.$(n2).unmerge(g3).unselect(), g3.emit(f3("box")).stdFilter(y3).select().emit(f3("boxselect")), e2.redraw();
                }
                if (e2.hoverData.dragging && (e2.hoverData.dragging = false, e2.redrawHint("select", true), e2.redrawHint("eles", true), e2.redraw()), !s3[4]) {
                  e2.redrawHint("drag", true), e2.redrawHint("eles", true);
                  var m3 = c3 && c3.grabbed();
                  d2(u3), m3 && (c3.emit(f3("freeon")), u3.emit(f3("free")), e2.dragData.didDrag && (c3.emit(f3("dragfreeon")), u3.emit(f3("dragfree"))));
                }
              }
              s3[4] = 0, e2.hoverData.down = null, e2.hoverData.cxtStarted = false, e2.hoverData.draggingEles = false, e2.hoverData.selecting = false, e2.hoverData.isOverThresholdDrag = false, e2.dragData.didDrag = false, e2.hoverData.dragged = false, e2.hoverData.dragDelta = [], e2.hoverData.mdownPos = null, e2.hoverData.mdownGPos = null, e2.hoverData.which = null;
            }
          }, false);
          var k2, T2, C2, P2, S2, B2, D2, _2, A2, M2, R2, I2, N2, L2, z2 = [], O2 = 1e5, V2 = /* @__PURE__ */ __name(function(t3) {
            var n3 = false, r3 = t3.deltaY;
            if (null == r3 && (null != t3.wheelDeltaY ? r3 = t3.wheelDeltaY / 4 : null != t3.wheelDelta && (r3 = t3.wheelDelta / 4)), 0 !== r3) {
              if (null == k2) if (z2.length >= 4) {
                var a3 = z2;
                if (k2 = function(e3, t4) {
                  for (var n4 = 0; n4 < e3.length; n4++) if (e3[n4] % t4 != 0) return false;
                  return true;
                }(a3, 5), !k2) {
                  var i3 = Math.abs(a3[0]);
                  k2 = function(e3) {
                    for (var t4 = Math.abs(e3[0]), n4 = 1; n4 < e3.length; n4++) if (Math.abs(e3[n4]) !== t4) return false;
                    return true;
                  }(a3) && i3 > 5;
                }
                if (k2) for (var o3 = 0; o3 < a3.length; o3++) O2 = Math.min(Math.abs(a3[o3]), O2);
              } else z2.push(r3), n3 = true;
              else k2 && (O2 = Math.min(Math.abs(r3), O2));
              if (!e2.scrollingPage) {
                var s3 = e2.cy, l3 = s3.zoom(), u3 = s3.pan(), c3 = e2.projectIntoViewport(t3.clientX, t3.clientY), d3 = [c3[0] * l3 + u3.x, c3[1] * l3 + u3.y];
                if (e2.hoverData.draggingEles || e2.hoverData.dragging || e2.hoverData.cxtStarted || 0 !== e2.selection[4]) t3.preventDefault();
                else if (s3.panningEnabled() && s3.userPanningEnabled() && s3.zoomingEnabled() && s3.userZoomingEnabled()) {
                  var h3;
                  t3.preventDefault(), e2.data.wheelZooming = true, clearTimeout(e2.data.wheelTimeout), e2.data.wheelTimeout = setTimeout(function() {
                    e2.data.wheelZooming = false, e2.redrawHint("eles", true), e2.redraw();
                  }, 150), n3 && Math.abs(r3) > 5 && (r3 = 5 * Ut(r3)), h3 = r3 / -250, k2 && (h3 /= O2, h3 *= 3), h3 *= e2.wheelSensitivity, 1 === t3.deltaMode && (h3 *= 33);
                  var f3 = s3.zoom() * Math.pow(10, h3);
                  "gesturechange" === t3.type && (f3 = e2.gestureStartZoom * t3.scale), s3.zoom({ level: f3, renderedPosition: { x: d3[0], y: d3[1] } }), s3.emit({ type: "gesturechange" === t3.type ? "pinchzoom" : "scrollzoom", originalEvent: t3, position: { x: c3[0], y: c3[1] } });
                }
              }
            }
          }, "V");
          e2.registerBinding(e2.container, "wheel", V2, true), e2.registerBinding(t2, "scroll", function(t3) {
            e2.scrollingPage = true, clearTimeout(e2.scrollingPageTimeout), e2.scrollingPageTimeout = setTimeout(function() {
              e2.scrollingPage = false;
            }, 250);
          }, true), e2.registerBinding(e2.container, "gesturestart", function(t3) {
            e2.gestureStartZoom = e2.cy.zoom(), e2.hasTouchStarted || t3.preventDefault();
          }, true), e2.registerBinding(e2.container, "gesturechange", function(t3) {
            e2.hasTouchStarted || V2(t3);
          }, true), e2.registerBinding(e2.container, "mouseout", function(t3) {
            var n3 = e2.projectIntoViewport(t3.clientX, t3.clientY);
            e2.cy.emit({ originalEvent: t3, type: "mouseout", position: { x: n3[0], y: n3[1] } });
          }, false), e2.registerBinding(e2.container, "mouseover", function(t3) {
            var n3 = e2.projectIntoViewport(t3.clientX, t3.clientY);
            e2.cy.emit({ originalEvent: t3, type: "mouseover", position: { x: n3[0], y: n3[1] } });
          }, false);
          var F2, X2, j2, Y2, q2, W2, U2, H2 = /* @__PURE__ */ __name(function(e3, t3, n3, r3) {
            return Math.sqrt((n3 - e3) * (n3 - e3) + (r3 - t3) * (r3 - t3));
          }, "H"), K2 = /* @__PURE__ */ __name(function(e3, t3, n3, r3) {
            return (n3 - e3) * (n3 - e3) + (r3 - t3) * (r3 - t3);
          }, "K");
          if (e2.registerBinding(e2.container, "touchstart", F2 = /* @__PURE__ */ __name(function(t3) {
            if (e2.hasTouchStarted = true, m2(t3)) {
              f2(), e2.touchData.capture = true, e2.data.bgActivePosistion = void 0;
              var n3 = e2.cy, a3 = e2.touchData.now, i3 = e2.touchData.earlier;
              if (t3.touches[0]) {
                var o3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
                a3[0] = o3[0], a3[1] = o3[1];
              }
              if (t3.touches[1]) {
                o3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
                a3[2] = o3[0], a3[3] = o3[1];
              }
              if (t3.touches[2]) {
                o3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
                a3[4] = o3[0], a3[5] = o3[1];
              }
              var l3 = /* @__PURE__ */ __name(function(e3) {
                return { originalEvent: t3, type: e3, position: { x: a3[0], y: a3[1] } };
              }, "l");
              if (t3.touches[1]) {
                e2.touchData.singleTouchMoved = true, d2(e2.dragData.touchDragEles);
                var h3 = e2.findContainerClientCoords();
                M2 = h3[0], R2 = h3[1], I2 = h3[2], N2 = h3[3], T2 = t3.touches[0].clientX - M2, C2 = t3.touches[0].clientY - R2, P2 = t3.touches[1].clientX - M2, S2 = t3.touches[1].clientY - R2, L2 = 0 <= T2 && T2 <= I2 && 0 <= P2 && P2 <= I2 && 0 <= C2 && C2 <= N2 && 0 <= S2 && S2 <= N2;
                var p3 = n3.pan(), v3 = n3.zoom();
                B2 = H2(T2, C2, P2, S2), D2 = K2(T2, C2, P2, S2), A2 = [((_2 = [(T2 + P2) / 2, (C2 + S2) / 2])[0] - p3.x) / v3, (_2[1] - p3.y) / v3];
                if (D2 < 4e4 && !t3.touches[2]) {
                  var g3 = e2.findNearestElement(a3[0], a3[1], true, true), y3 = e2.findNearestElement(a3[2], a3[3], true, true);
                  return g3 && g3.isNode() ? (g3.activate().emit(l3("cxttapstart")), e2.touchData.start = g3) : y3 && y3.isNode() ? (y3.activate().emit(l3("cxttapstart")), e2.touchData.start = y3) : n3.emit(l3("cxttapstart")), e2.touchData.start && (e2.touchData.start._private.grabbed = false), e2.touchData.cxt = true, e2.touchData.cxtDragged = false, e2.data.bgActivePosistion = void 0, void e2.redraw();
                }
              }
              if (t3.touches[2]) n3.boxSelectionEnabled() && t3.preventDefault();
              else if (t3.touches[1]) ;
              else if (t3.touches[0]) {
                var b3 = e2.findNearestElements(a3[0], a3[1], true, true), x3 = b3[0];
                if (null != x3 && (x3.activate(), e2.touchData.start = x3, e2.touchData.starts = b3, e2.nodeIsGrabbable(x3))) {
                  var w3 = e2.dragData.touchDragEles = n3.collection(), E3 = null;
                  e2.redrawHint("eles", true), e2.redrawHint("drag", true), x3.selected() ? (E3 = n3.$(function(t4) {
                    return t4.selected() && e2.nodeIsGrabbable(t4);
                  }), u2(E3, { addToList: w3 })) : c2(x3, { addToList: w3 }), s2(x3), x3.emit(l3("grabon")), E3 ? E3.forEach(function(e3) {
                    e3.emit(l3("grab"));
                  }) : x3.emit(l3("grab"));
                }
                r2(x3, ["touchstart", "tapstart", "vmousedown"], t3, { x: a3[0], y: a3[1] }), null == x3 && (e2.data.bgActivePosistion = { x: o3[0], y: o3[1] }, e2.redrawHint("select", true), e2.redraw()), e2.touchData.singleTouchMoved = false, e2.touchData.singleTouchStartTime = +/* @__PURE__ */ new Date(), clearTimeout(e2.touchData.tapholdTimeout), e2.touchData.tapholdTimeout = setTimeout(function() {
                  false !== e2.touchData.singleTouchMoved || e2.pinching || e2.touchData.selecting || r2(e2.touchData.start, ["taphold"], t3, { x: a3[0], y: a3[1] });
                }, e2.tapholdDuration);
              }
              if (t3.touches.length >= 1) {
                for (var k3 = e2.touchData.startPosition = [null, null, null, null, null, null], z3 = 0; z3 < a3.length; z3++) k3[z3] = i3[z3] = a3[z3];
                var O3 = t3.touches[0];
                e2.touchData.startGPosition = [O3.clientX, O3.clientY];
              }
            }
          }, "F"), false), e2.registerBinding(t2, "touchmove", X2 = /* @__PURE__ */ __name(function(t3) {
            var n3 = e2.touchData.capture;
            if (n3 || m2(t3)) {
              var a3 = e2.selection, o3 = e2.cy, s3 = e2.touchData.now, l3 = e2.touchData.earlier, c3 = o3.zoom();
              if (t3.touches[0]) {
                var h3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
                s3[0] = h3[0], s3[1] = h3[1];
              }
              if (t3.touches[1]) {
                h3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
                s3[2] = h3[0], s3[3] = h3[1];
              }
              if (t3.touches[2]) {
                h3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
                s3[4] = h3[0], s3[5] = h3[1];
              }
              var f3, p3 = /* @__PURE__ */ __name(function(e3) {
                return { originalEvent: t3, type: e3, position: { x: s3[0], y: s3[1] } };
              }, "p"), v3 = e2.touchData.startGPosition;
              if (n3 && t3.touches[0] && v3) {
                for (var g3 = [], y3 = 0; y3 < s3.length; y3++) g3[y3] = s3[y3] - l3[y3];
                var b3 = t3.touches[0].clientX - v3[0], x3 = b3 * b3, w3 = t3.touches[0].clientY - v3[1];
                f3 = x3 + w3 * w3 >= e2.touchTapThreshold2;
              }
              if (n3 && e2.touchData.cxt) {
                t3.preventDefault();
                var E3 = t3.touches[0].clientX - M2, k3 = t3.touches[0].clientY - R2, _3 = t3.touches[1].clientX - M2, I3 = t3.touches[1].clientY - R2, N3 = K2(E3, k3, _3, I3);
                if (N3 / D2 >= 2.25 || N3 >= 22500) {
                  e2.touchData.cxt = false, e2.data.bgActivePosistion = void 0, e2.redrawHint("select", true);
                  var z3 = p3("cxttapend");
                  e2.touchData.start ? (e2.touchData.start.unactivate().emit(z3), e2.touchData.start = null) : o3.emit(z3);
                }
              }
              if (n3 && e2.touchData.cxt) {
                z3 = p3("cxtdrag");
                e2.data.bgActivePosistion = void 0, e2.redrawHint("select", true), e2.touchData.start ? e2.touchData.start.emit(z3) : o3.emit(z3), e2.touchData.start && (e2.touchData.start._private.grabbed = false), e2.touchData.cxtDragged = true;
                var O3 = e2.findNearestElement(s3[0], s3[1], true, true);
                e2.touchData.cxtOver && O3 === e2.touchData.cxtOver || (e2.touchData.cxtOver && e2.touchData.cxtOver.emit(p3("cxtdragout")), e2.touchData.cxtOver = O3, O3 && O3.emit(p3("cxtdragover")));
              } else if (n3 && t3.touches[2] && o3.boxSelectionEnabled()) t3.preventDefault(), e2.data.bgActivePosistion = void 0, this.lastThreeTouch = +/* @__PURE__ */ new Date(), e2.touchData.selecting || o3.emit(p3("boxstart")), e2.touchData.selecting = true, e2.touchData.didSelect = true, a3[4] = 1, a3 && 0 !== a3.length && void 0 !== a3[0] ? (a3[2] = (s3[0] + s3[2] + s3[4]) / 3, a3[3] = (s3[1] + s3[3] + s3[5]) / 3) : (a3[0] = (s3[0] + s3[2] + s3[4]) / 3, a3[1] = (s3[1] + s3[3] + s3[5]) / 3, a3[2] = (s3[0] + s3[2] + s3[4]) / 3 + 1, a3[3] = (s3[1] + s3[3] + s3[5]) / 3 + 1), e2.redrawHint("select", true), e2.redraw();
              else if (n3 && t3.touches[1] && !e2.touchData.didSelect && o3.zoomingEnabled() && o3.panningEnabled() && o3.userZoomingEnabled() && o3.userPanningEnabled()) {
                if (t3.preventDefault(), e2.data.bgActivePosistion = void 0, e2.redrawHint("select", true), te3 = e2.dragData.touchDragEles) {
                  e2.redrawHint("drag", true);
                  for (var V3 = 0; V3 < te3.length; V3++) {
                    var F3 = te3[V3]._private;
                    F3.grabbed = false, F3.rscratch.inDragLayer = false;
                  }
                }
                var X3 = e2.touchData.start, j3 = (E3 = t3.touches[0].clientX - M2, k3 = t3.touches[0].clientY - R2, _3 = t3.touches[1].clientX - M2, I3 = t3.touches[1].clientY - R2, H2(E3, k3, _3, I3)), Y3 = j3 / B2;
                if (L2) {
                  var q3 = (E3 - T2 + (_3 - P2)) / 2, W3 = (k3 - C2 + (I3 - S2)) / 2, U3 = o3.zoom(), Z3 = U3 * Y3, $3 = o3.pan(), Q3 = A2[0] * U3 + $3.x, J3 = A2[1] * U3 + $3.y, ee3 = { x: -Z3 / U3 * (Q3 - $3.x - q3) + Q3, y: -Z3 / U3 * (J3 - $3.y - W3) + J3 };
                  if (X3 && X3.active()) {
                    var te3 = e2.dragData.touchDragEles;
                    d2(te3), e2.redrawHint("drag", true), e2.redrawHint("eles", true), X3.unactivate().emit(p3("freeon")), te3.emit(p3("free")), e2.dragData.didDrag && (X3.emit(p3("dragfreeon")), te3.emit(p3("dragfree")));
                  }
                  o3.viewport({ zoom: Z3, pan: ee3, cancelOnFailedZoom: true }), o3.emit(p3("pinchzoom")), B2 = j3, T2 = E3, C2 = k3, P2 = _3, S2 = I3, e2.pinching = true;
                }
                if (t3.touches[0]) {
                  h3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
                  s3[0] = h3[0], s3[1] = h3[1];
                }
                if (t3.touches[1]) {
                  h3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
                  s3[2] = h3[0], s3[3] = h3[1];
                }
                if (t3.touches[2]) {
                  h3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
                  s3[4] = h3[0], s3[5] = h3[1];
                }
              } else if (t3.touches[0] && !e2.touchData.didSelect) {
                var ne2 = e2.touchData.start, re2 = e2.touchData.last;
                if (e2.hoverData.draggingEles || e2.swipePanning || (O3 = e2.findNearestElement(s3[0], s3[1], true, true)), n3 && null != ne2 && t3.preventDefault(), n3 && null != ne2 && e2.nodeIsDraggable(ne2)) if (f3) {
                  te3 = e2.dragData.touchDragEles;
                  var ae2 = !e2.dragData.didDrag;
                  ae2 && u2(te3, { inDragLayer: true }), e2.dragData.didDrag = true;
                  var ie2 = { x: 0, y: 0 };
                  if (G(g3[0]) && G(g3[1])) {
                    if (ie2.x += g3[0], ie2.y += g3[1], ae2) e2.redrawHint("eles", true), (oe2 = e2.touchData.dragDelta) && G(oe2[0]) && G(oe2[1]) && (ie2.x += oe2[0], ie2.y += oe2[1]);
                  }
                  e2.hoverData.draggingEles = true, te3.silentShift(ie2).emit(p3("position")).emit(p3("drag")), e2.redrawHint("drag", true), e2.touchData.startPosition[0] == l3[0] && e2.touchData.startPosition[1] == l3[1] && e2.redrawHint("eles", true), e2.redraw();
                } else {
                  var oe2;
                  0 === (oe2 = e2.touchData.dragDelta = e2.touchData.dragDelta || []).length ? (oe2.push(g3[0]), oe2.push(g3[1])) : (oe2[0] += g3[0], oe2[1] += g3[1]);
                }
                if (r2(ne2 || O3, ["touchmove", "tapdrag", "vmousemove"], t3, { x: s3[0], y: s3[1] }), ne2 && ne2.grabbed() || O3 == re2 || (re2 && re2.emit(p3("tapdragout")), O3 && O3.emit(p3("tapdragover"))), e2.touchData.last = O3, n3) for (V3 = 0; V3 < s3.length; V3++) s3[V3] && e2.touchData.startPosition[V3] && f3 && (e2.touchData.singleTouchMoved = true);
                if (n3 && (null == ne2 || ne2.pannable()) && o3.panningEnabled() && o3.userPanningEnabled()) {
                  i2(ne2, e2.touchData.starts) && (t3.preventDefault(), e2.data.bgActivePosistion || (e2.data.bgActivePosistion = Yt(e2.touchData.startPosition)), e2.swipePanning ? (o3.panBy({ x: g3[0] * c3, y: g3[1] * c3 }), o3.emit(p3("dragpan"))) : f3 && (e2.swipePanning = true, o3.panBy({ x: b3 * c3, y: w3 * c3 }), o3.emit(p3("dragpan")), ne2 && (ne2.unactivate(), e2.redrawHint("select", true), e2.touchData.start = null)));
                  h3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
                  s3[0] = h3[0], s3[1] = h3[1];
                }
              }
              for (y3 = 0; y3 < s3.length; y3++) l3[y3] = s3[y3];
              n3 && t3.touches.length > 0 && !e2.hoverData.draggingEles && !e2.swipePanning && null != e2.data.bgActivePosistion && (e2.data.bgActivePosistion = void 0, e2.redrawHint("select", true), e2.redraw());
            }
          }, "X"), false), e2.registerBinding(t2, "touchcancel", j2 = /* @__PURE__ */ __name(function(t3) {
            var n3 = e2.touchData.start;
            e2.touchData.capture = false, n3 && n3.unactivate();
          }, "j")), e2.registerBinding(t2, "touchend", Y2 = /* @__PURE__ */ __name(function(t3) {
            var a3 = e2.touchData.start;
            if (e2.touchData.capture) {
              0 === t3.touches.length && (e2.touchData.capture = false), t3.preventDefault();
              var i3 = e2.selection;
              e2.swipePanning = false, e2.hoverData.draggingEles = false;
              var o3 = e2.cy, s3 = o3.zoom(), l3 = e2.touchData.now, u3 = e2.touchData.earlier;
              if (t3.touches[0]) {
                var c3 = e2.projectIntoViewport(t3.touches[0].clientX, t3.touches[0].clientY);
                l3[0] = c3[0], l3[1] = c3[1];
              }
              if (t3.touches[1]) {
                c3 = e2.projectIntoViewport(t3.touches[1].clientX, t3.touches[1].clientY);
                l3[2] = c3[0], l3[3] = c3[1];
              }
              if (t3.touches[2]) {
                c3 = e2.projectIntoViewport(t3.touches[2].clientX, t3.touches[2].clientY);
                l3[4] = c3[0], l3[5] = c3[1];
              }
              var h3, f3 = /* @__PURE__ */ __name(function(e3) {
                return { originalEvent: t3, type: e3, position: { x: l3[0], y: l3[1] } };
              }, "f");
              if (a3 && a3.unactivate(), e2.touchData.cxt) {
                if (h3 = f3("cxttapend"), a3 ? a3.emit(h3) : o3.emit(h3), !e2.touchData.cxtDragged) {
                  var p3 = f3("cxttap");
                  a3 ? a3.emit(p3) : o3.emit(p3);
                }
                return e2.touchData.start && (e2.touchData.start._private.grabbed = false), e2.touchData.cxt = false, e2.touchData.start = null, void e2.redraw();
              }
              if (!t3.touches[2] && o3.boxSelectionEnabled() && e2.touchData.selecting) {
                e2.touchData.selecting = false;
                var v3 = o3.collection(e2.getAllInBox(i3[0], i3[1], i3[2], i3[3]));
                i3[0] = void 0, i3[1] = void 0, i3[2] = void 0, i3[3] = void 0, i3[4] = 0, e2.redrawHint("select", true), o3.emit(f3("boxend"));
                v3.emit(f3("box")).stdFilter(function(e3) {
                  return e3.selectable() && !e3.selected();
                }).select().emit(f3("boxselect")), v3.nonempty() && e2.redrawHint("eles", true), e2.redraw();
              }
              if (null != a3 && a3.unactivate(), t3.touches[2]) e2.data.bgActivePosistion = void 0, e2.redrawHint("select", true);
              else if (t3.touches[1]) ;
              else if (t3.touches[0]) ;
              else if (!t3.touches[0]) {
                e2.data.bgActivePosistion = void 0, e2.redrawHint("select", true);
                var g3 = e2.dragData.touchDragEles;
                if (null != a3) {
                  var y3 = a3._private.grabbed;
                  d2(g3), e2.redrawHint("drag", true), e2.redrawHint("eles", true), y3 && (a3.emit(f3("freeon")), g3.emit(f3("free")), e2.dragData.didDrag && (a3.emit(f3("dragfreeon")), g3.emit(f3("dragfree")))), r2(a3, ["touchend", "tapend", "vmouseup", "tapdragout"], t3, { x: l3[0], y: l3[1] }), a3.unactivate(), e2.touchData.start = null;
                } else {
                  var m3 = e2.findNearestElement(l3[0], l3[1], true, true);
                  r2(m3, ["touchend", "tapend", "vmouseup", "tapdragout"], t3, { x: l3[0], y: l3[1] });
                }
                var b3 = e2.touchData.startPosition[0] - l3[0], x3 = b3 * b3, w3 = e2.touchData.startPosition[1] - l3[1], E3 = (x3 + w3 * w3) * s3 * s3;
                e2.touchData.singleTouchMoved || (a3 || o3.$(":selected").unselect(["tapunselect"]), r2(a3, ["tap", "vclick"], t3, { x: l3[0], y: l3[1] }), q2 = false, t3.timeStamp - U2 <= o3.multiClickDebounceTime() ? (W2 && clearTimeout(W2), q2 = true, U2 = null, r2(a3, ["dbltap", "vdblclick"], t3, { x: l3[0], y: l3[1] })) : (W2 = setTimeout(function() {
                  q2 || r2(a3, ["onetap", "voneclick"], t3, { x: l3[0], y: l3[1] });
                }, o3.multiClickDebounceTime()), U2 = t3.timeStamp)), null != a3 && !e2.dragData.didDrag && a3._private.selectable && E3 < e2.touchTapThreshold2 && !e2.pinching && ("single" === o3.selectionType() ? (o3.$(n2).unmerge(a3).unselect(["tapunselect"]), a3.select(["tapselect"])) : a3.selected() ? a3.unselect(["tapunselect"]) : a3.select(["tapselect"]), e2.redrawHint("eles", true)), e2.touchData.singleTouchMoved = true;
              }
              for (var k3 = 0; k3 < l3.length; k3++) u3[k3] = l3[k3];
              e2.dragData.didDrag = false, 0 === t3.touches.length && (e2.touchData.dragDelta = [], e2.touchData.startPosition = [null, null, null, null, null, null], e2.touchData.startGPosition = null, e2.touchData.didSelect = false), t3.touches.length < 2 && (1 === t3.touches.length && (e2.touchData.startGPosition = [t3.touches[0].clientX, t3.touches[0].clientY]), e2.pinching = false, e2.redrawHint("eles", true), e2.redraw());
            }
          }, "Y"), false), "undefined" == typeof TouchEvent) {
            var Z2 = [], $2 = /* @__PURE__ */ __name(function(e3) {
              return { clientX: e3.clientX, clientY: e3.clientY, force: 1, identifier: e3.pointerId, pageX: e3.pageX, pageY: e3.pageY, radiusX: e3.width / 2, radiusY: e3.height / 2, screenX: e3.screenX, screenY: e3.screenY, target: e3.target };
            }, "$"), Q2 = /* @__PURE__ */ __name(function(e3) {
              Z2.push(function(e4) {
                return { event: e4, touch: $2(e4) };
              }(e3));
            }, "Q"), J2 = /* @__PURE__ */ __name(function(e3) {
              for (var t3 = 0; t3 < Z2.length; t3++) {
                if (Z2[t3].event.pointerId === e3.pointerId) return void Z2.splice(t3, 1);
              }
            }, "J"), ee2 = /* @__PURE__ */ __name(function(e3) {
              e3.touches = Z2.map(function(e4) {
                return e4.touch;
              });
            }, "ee"), te2 = /* @__PURE__ */ __name(function(e3) {
              return "mouse" === e3.pointerType || 4 === e3.pointerType;
            }, "te");
            e2.registerBinding(e2.container, "pointerdown", function(e3) {
              te2(e3) || (e3.preventDefault(), Q2(e3), ee2(e3), F2(e3));
            }), e2.registerBinding(e2.container, "pointerup", function(e3) {
              te2(e3) || (J2(e3), ee2(e3), Y2(e3));
            }), e2.registerBinding(e2.container, "pointercancel", function(e3) {
              te2(e3) || (J2(e3), ee2(e3), j2());
            }), e2.registerBinding(e2.container, "pointermove", function(e3) {
              te2(e3) || (e3.preventDefault(), function(e4) {
                var t3 = Z2.filter(function(t4) {
                  return t4.event.pointerId === e4.pointerId;
                })[0];
                t3.event = e4, t3.touch = $2(e4);
              }(e3), ee2(e3), X2(e3));
            });
          }
        };
        var nd = { generatePolygon: /* @__PURE__ */ __name(function(e2, t2) {
          return this.nodeShapes[e2] = { renderer: this, name: e2, points: t2, draw: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2) {
            this.renderer.nodeShapeImpl("polygon", e3, t3, n2, r2, a2, this.points);
          }, "draw"), intersectLine: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2, o2, s2) {
            return Cn(a2, i2, this.points, e3, t3, n2 / 2, r2 / 2, o2);
          }, "intersectLine"), checkPoint: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2, o2, s2) {
            return yn(e3, t3, this.points, i2, o2, r2, a2, [0, -1], n2);
          }, "checkPoint"), hasMiterBounds: "rectangle" !== e2, miterBounds: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2) {
            return cn(this.points, e3, t3, n2, r2, a2);
          }, "miterBounds") };
        }, "generatePolygon") };
        nd.generateEllipse = function() {
          return this.nodeShapes.ellipse = { renderer: this, name: "ellipse", draw: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
            this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, a2);
          }, "draw"), intersectLine: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            return function(e3, t3, n3, r3, a3, i3) {
              var o3 = n3 - e3, s3 = r3 - t3;
              o3 /= a3, s3 /= i3;
              var l2 = Math.sqrt(o3 * o3 + s3 * s3), u2 = l2 - 1;
              if (u2 < 0) return [];
              var c2 = u2 / l2;
              return [(n3 - e3) * c2 + e3, (r3 - t3) * c2 + t3];
            }(a2, i2, e2, t2, n2 / 2 + o2, r2 / 2 + o2);
          }, "intersectLine"), checkPoint: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            return xn(e2, t2, r2, a2, i2, o2, n2);
          }, "checkPoint") };
        }, nd.generateRoundPolygon = function(e2, t2) {
          return this.nodeShapes[e2] = { renderer: this, name: e2, points: t2, getOrCreateCorners: /* @__PURE__ */ __name(function(e3, n2, r2, a2, i2, o2, s2) {
            if (void 0 !== o2[s2] && o2[s2 + "-cx"] === e3 && o2[s2 + "-cy"] === n2) return o2[s2];
            o2[s2] = new Array(t2.length / 2), o2[s2 + "-cx"] = e3, o2[s2 + "-cy"] = n2;
            var l2 = r2 / 2, u2 = a2 / 2;
            i2 = "auto" === i2 ? An(r2, a2) : i2;
            for (var c2 = new Array(t2.length / 2), d2 = 0; d2 < t2.length / 2; d2++) c2[d2] = { x: e3 + l2 * t2[2 * d2], y: n2 + u2 * t2[2 * d2 + 1] };
            var h2, f2, p2, v2, g2 = c2.length;
            for (f2 = c2[g2 - 1], h2 = 0; h2 < g2; h2++) p2 = c2[h2 % g2], v2 = c2[(h2 + 1) % g2], o2[s2][h2] = Oc(f2, p2, v2, i2), f2 = p2, p2 = v2;
            return o2[s2];
          }, "getOrCreateCorners"), draw: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2, o2) {
            this.renderer.nodeShapeImpl("round-polygon", e3, t3, n2, r2, a2, this.points, this.getOrCreateCorners(t3, n2, r2, a2, i2, o2, "drawCorners"));
          }, "draw"), intersectLine: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2, o2, s2, l2) {
            return function(e4, t4, n3, r3, a3, i3, o3, s3, l3) {
              var u2, c2 = [], d2 = new Array(2 * n3.length);
              l3.forEach(function(n4, i4) {
                0 === i4 ? (d2[d2.length - 2] = n4.startX, d2[d2.length - 1] = n4.startY) : (d2[4 * i4 - 2] = n4.startX, d2[4 * i4 - 1] = n4.startY), d2[4 * i4] = n4.stopX, d2[4 * i4 + 1] = n4.stopY, 0 !== (u2 = wn(e4, t4, r3, a3, n4.cx, n4.cy, n4.radius)).length && c2.push(u2[0], u2[1]);
              });
              for (var h2 = 0; h2 < d2.length / 4; h2++) 0 !== (u2 = kn(e4, t4, r3, a3, d2[4 * h2], d2[4 * h2 + 1], d2[4 * h2 + 2], d2[4 * h2 + 3], false)).length && c2.push(u2[0], u2[1]);
              if (c2.length > 2) {
                for (var f2 = [c2[0], c2[1]], p2 = Math.pow(f2[0] - e4, 2) + Math.pow(f2[1] - t4, 2), v2 = 1; v2 < c2.length / 2; v2++) {
                  var g2 = Math.pow(c2[2 * v2] - e4, 2) + Math.pow(c2[2 * v2 + 1] - t4, 2);
                  g2 <= p2 && (f2[0] = c2[2 * v2], f2[1] = c2[2 * v2 + 1], p2 = g2);
                }
                return f2;
              }
              return c2;
            }(a2, i2, this.points, e3, t3, 0, 0, 0, this.getOrCreateCorners(e3, t3, n2, r2, s2, l2, "corners"));
          }, "intersectLine"), checkPoint: /* @__PURE__ */ __name(function(e3, t3, n2, r2, a2, i2, o2, s2, l2) {
            return function(e4, t4, n3, r3, a3, i3, o3, s3) {
              for (var l3 = new Array(2 * n3.length), u2 = 0; u2 < s3.length; u2++) {
                var c2 = s3[u2];
                if (l3[4 * u2 + 0] = c2.startX, l3[4 * u2 + 1] = c2.startY, l3[4 * u2 + 2] = c2.stopX, l3[4 * u2 + 3] = c2.stopY, Math.pow(c2.cx - e4, 2) + Math.pow(c2.cy - t4, 2) <= Math.pow(c2.radius, 2)) return true;
              }
              return gn(e4, t4, l3);
            }(e3, t3, this.points, 0, 0, 0, 0, this.getOrCreateCorners(i2, o2, r2, a2, s2, l2, "corners"));
          }, "checkPoint") };
        }, nd.generateRoundRectangle = function() {
          return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = { renderer: this, name: "round-rectangle", points: Sn(4, 0), draw: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
            this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, a2, this.points, i2);
          }, "draw"), intersectLine: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            return dn(a2, i2, e2, t2, n2, r2, o2, s2);
          }, "intersectLine"), checkPoint: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = r2 / 2, u2 = a2 / 2;
            s2 = "auto" === s2 ? _n(r2, a2) : s2;
            var c2 = 2 * (s2 = Math.min(l2, u2, s2));
            return !!yn(e2, t2, this.points, i2, o2, r2, a2 - c2, [0, -1], n2) || (!!yn(e2, t2, this.points, i2, o2, r2 - c2, a2, [0, -1], n2) || (!!xn(e2, t2, c2, c2, i2 - l2 + s2, o2 - u2 + s2, n2) || (!!xn(e2, t2, c2, c2, i2 + l2 - s2, o2 - u2 + s2, n2) || (!!xn(e2, t2, c2, c2, i2 + l2 - s2, o2 + u2 - s2, n2) || !!xn(e2, t2, c2, c2, i2 - l2 + s2, o2 + u2 - s2, n2)))));
          }, "checkPoint") };
        }, nd.generateCutRectangle = function() {
          return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = { renderer: this, name: "cut-rectangle", cornerLength: 8, points: Sn(4, 0), draw: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
            this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, a2, null, i2);
          }, "draw"), generateCutTrianglePts: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
            var i2 = "auto" === a2 ? this.cornerLength : a2, o2 = t2 / 2, s2 = e2 / 2, l2 = n2 - s2, u2 = n2 + s2, c2 = r2 - o2, d2 = r2 + o2;
            return { topLeft: [l2, c2 + i2, l2 + i2, c2, l2 + i2, c2 + i2], topRight: [u2 - i2, c2, u2, c2 + i2, u2 - i2, c2 + i2], bottomRight: [u2, d2 - i2, u2 - i2, d2, u2 - i2, d2 - i2], bottomLeft: [l2 + i2, d2, l2, d2 - i2, l2 + i2, d2 - i2] };
          }, "generateCutTrianglePts"), intersectLine: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = this.generateCutTrianglePts(n2 + 2 * o2, r2 + 2 * o2, e2, t2, s2), u2 = [].concat.apply([], [l2.topLeft.splice(0, 4), l2.topRight.splice(0, 4), l2.bottomRight.splice(0, 4), l2.bottomLeft.splice(0, 4)]);
            return Cn(a2, i2, u2, e2, t2);
          }, "intersectLine"), checkPoint: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = "auto" === s2 ? this.cornerLength : s2;
            if (yn(e2, t2, this.points, i2, o2, r2, a2 - 2 * l2, [0, -1], n2)) return true;
            if (yn(e2, t2, this.points, i2, o2, r2 - 2 * l2, a2, [0, -1], n2)) return true;
            var u2 = this.generateCutTrianglePts(r2, a2, i2, o2);
            return gn(e2, t2, u2.topLeft) || gn(e2, t2, u2.topRight) || gn(e2, t2, u2.bottomRight) || gn(e2, t2, u2.bottomLeft);
          }, "checkPoint") };
        }, nd.generateBarrel = function() {
          return this.nodeShapes.barrel = { renderer: this, name: "barrel", points: Sn(4, 0), draw: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
            this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, a2);
          }, "draw"), intersectLine: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = this.generateBarrelBezierPts(n2 + 2 * o2, r2 + 2 * o2, e2, t2), u2 = /* @__PURE__ */ __name(function(e3) {
              var t3 = $t({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, 0.15), n3 = $t({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, 0.5), r3 = $t({ x: e3[0], y: e3[1] }, { x: e3[2], y: e3[3] }, { x: e3[4], y: e3[5] }, 0.85);
              return [e3[0], e3[1], t3.x, t3.y, n3.x, n3.y, r3.x, r3.y, e3[4], e3[5]];
            }, "u"), c2 = [].concat(u2(l2.topLeft), u2(l2.topRight), u2(l2.bottomRight), u2(l2.bottomLeft));
            return Cn(a2, i2, c2, e2, t2);
          }, "intersectLine"), generateBarrelBezierPts: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            var a2 = t2 / 2, i2 = e2 / 2, o2 = n2 - i2, s2 = n2 + i2, l2 = r2 - a2, u2 = r2 + a2, c2 = Mn(e2, t2), d2 = c2.heightOffset, h2 = c2.widthOffset, f2 = c2.ctrlPtOffsetPct * e2, p2 = { topLeft: [o2, l2 + d2, o2 + f2, l2, o2 + h2, l2], topRight: [s2 - h2, l2, s2 - f2, l2, s2, l2 + d2], bottomRight: [s2, u2 - d2, s2 - f2, u2, s2 - h2, u2], bottomLeft: [o2 + h2, u2, o2 + f2, u2, o2, u2 - d2] };
            return p2.topLeft.isTop = true, p2.topRight.isTop = true, p2.bottomLeft.isBottom = true, p2.bottomRight.isBottom = true, p2;
          }, "generateBarrelBezierPts"), checkPoint: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = Mn(r2, a2), u2 = l2.heightOffset, c2 = l2.widthOffset;
            if (yn(e2, t2, this.points, i2, o2, r2, a2 - 2 * u2, [0, -1], n2)) return true;
            if (yn(e2, t2, this.points, i2, o2, r2 - 2 * c2, a2, [0, -1], n2)) return true;
            for (var d2 = this.generateBarrelBezierPts(r2, a2, i2, o2), h2 = function(e3, t3, n3) {
              var r3, a3, i3 = n3[4], o3 = n3[2], s3 = n3[0], l3 = n3[5], u3 = n3[1], c3 = Math.min(i3, s3), d3 = Math.max(i3, s3), h3 = Math.min(l3, u3), f3 = Math.max(l3, u3);
              if (c3 <= e3 && e3 <= d3 && h3 <= t3 && t3 <= f3) {
                var p3 = [(r3 = i3) - 2 * (a3 = o3) + s3, 2 * (a3 - r3), r3], v3 = function(e4, t4, n4, r4) {
                  var a4 = t4 * t4 - 4 * e4 * (n4 -= r4);
                  if (a4 < 0) return [];
                  var i4 = Math.sqrt(a4), o4 = 2 * e4;
                  return [(-t4 + i4) / o4, (-t4 - i4) / o4];
                }(p3[0], p3[1], p3[2], e3).filter(function(e4) {
                  return 0 <= e4 && e4 <= 1;
                });
                if (v3.length > 0) return v3[0];
              }
              return null;
            }, f2 = Object.keys(d2), p2 = 0; p2 < f2.length; p2++) {
              var v2 = d2[f2[p2]], g2 = h2(e2, t2, v2);
              if (null != g2) {
                var y2 = v2[5], m2 = v2[3], b2 = v2[1], x2 = Zt(y2, m2, b2, g2);
                if (v2.isTop && x2 <= t2) return true;
                if (v2.isBottom && t2 <= x2) return true;
              }
            }
            return false;
          }, "checkPoint") };
        }, nd.generateBottomRoundrectangle = function() {
          return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = { renderer: this, name: "bottom-round-rectangle", points: Sn(4, 0), draw: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
            this.renderer.nodeShapeImpl(this.name, e2, t2, n2, r2, a2, this.points, i2);
          }, "draw"), intersectLine: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = t2 - (r2 / 2 + o2), u2 = kn(a2, i2, e2, t2, e2 - (n2 / 2 + o2), l2, e2 + (n2 / 2 + o2), l2, false);
            return u2.length > 0 ? u2 : dn(a2, i2, e2, t2, n2, r2, o2, s2);
          }, "intersectLine"), checkPoint: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
            var l2 = 2 * (s2 = "auto" === s2 ? _n(r2, a2) : s2);
            if (yn(e2, t2, this.points, i2, o2, r2, a2 - l2, [0, -1], n2)) return true;
            if (yn(e2, t2, this.points, i2, o2, r2 - l2, a2, [0, -1], n2)) return true;
            var u2 = r2 / 2 + 2 * n2, c2 = a2 / 2 + 2 * n2;
            return !!gn(e2, t2, [i2 - u2, o2 - c2, i2 - u2, o2, i2 + u2, o2, i2 + u2, o2 - c2]) || (!!xn(e2, t2, l2, l2, i2 + r2 / 2 - s2, o2 + a2 / 2 - s2, n2) || !!xn(e2, t2, l2, l2, i2 - r2 / 2 + s2, o2 + a2 / 2 - s2, n2));
          }, "checkPoint") };
        }, nd.registerNodeShapes = function() {
          var e2 = this.nodeShapes = {}, t2 = this;
          this.generateEllipse(), this.generatePolygon("triangle", Sn(3, 0)), this.generateRoundPolygon("round-triangle", Sn(3, 0)), this.generatePolygon("rectangle", Sn(4, 0)), e2.square = e2.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
          var n2 = [0, 1, 1, 0, 0, -1, -1, 0];
          this.generatePolygon("diamond", n2), this.generateRoundPolygon("round-diamond", n2), this.generatePolygon("pentagon", Sn(5, 0)), this.generateRoundPolygon("round-pentagon", Sn(5, 0)), this.generatePolygon("hexagon", Sn(6, 0)), this.generateRoundPolygon("round-hexagon", Sn(6, 0)), this.generatePolygon("heptagon", Sn(7, 0)), this.generateRoundPolygon("round-heptagon", Sn(7, 0)), this.generatePolygon("octagon", Sn(8, 0)), this.generateRoundPolygon("round-octagon", Sn(8, 0));
          var r2 = new Array(20), a2 = Dn(5, 0), i2 = Dn(5, Math.PI / 5), o2 = 0.5 * (3 - Math.sqrt(5));
          o2 *= 1.57;
          for (var s2 = 0; s2 < i2.length / 2; s2++) i2[2 * s2] *= o2, i2[2 * s2 + 1] *= o2;
          for (s2 = 0; s2 < 5; s2++) r2[4 * s2] = a2[2 * s2], r2[4 * s2 + 1] = a2[2 * s2 + 1], r2[4 * s2 + 2] = i2[2 * s2], r2[4 * s2 + 3] = i2[2 * s2 + 1];
          r2 = Bn(r2), this.generatePolygon("star", r2), this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]), this.generatePolygon("rhomboid", [-1, -1, 0.333, -1, 1, 1, -0.333, 1]), this.generatePolygon("right-rhomboid", [-0.333, -1, 1, -1, 0.333, 1, -1, 1]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]);
          var l2 = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
          this.generatePolygon("tag", l2), this.generateRoundPolygon("round-tag", l2), e2.makePolygon = function(e3) {
            var n3, r3 = "polygon-" + e3.join("$");
            return (n3 = this[r3]) ? n3 : t2.generatePolygon(r3, e3);
          };
        };
        var rd = { timeToRender: /* @__PURE__ */ __name(function() {
          return this.redrawTotalTime / this.redrawCount;
        }, "timeToRender"), redraw: /* @__PURE__ */ __name(function(e2) {
          e2 = e2 || lt();
          var t2 = this;
          void 0 === t2.averageRedrawTime && (t2.averageRedrawTime = 0), void 0 === t2.lastRedrawTime && (t2.lastRedrawTime = 0), void 0 === t2.lastDrawTime && (t2.lastDrawTime = 0), t2.requestedFrame = true, t2.renderOptions = e2;
        }, "redraw"), beforeRender: /* @__PURE__ */ __name(function(e2, t2) {
          if (!this.destroyed) {
            null == t2 && nt("Priority is not optional for beforeRender");
            var n2 = this.beforeRenderCallbacks;
            n2.push({ fn: e2, priority: t2 }), n2.sort(function(e3, t3) {
              return t3.priority - e3.priority;
            });
          }
        }, "beforeRender") }, ad = /* @__PURE__ */ __name(function(e2, t2, n2) {
          for (var r2 = e2.beforeRenderCallbacks, a2 = 0; a2 < r2.length; a2++) r2[a2].fn(t2, n2);
        }, "ad");
        rd.startRenderLoop = function() {
          var e2 = this, t2 = e2.cy;
          if (!e2.renderLoopStarted) {
            e2.renderLoopStarted = true;
            var n2 = /* @__PURE__ */ __name(function(r2) {
              if (!e2.destroyed) {
                if (t2.batching()) ;
                else if (e2.requestedFrame && !e2.skipFrame) {
                  ad(e2, true, r2);
                  var a2 = Ne();
                  e2.render(e2.renderOptions);
                  var i2 = e2.lastDrawTime = Ne();
                  void 0 === e2.averageRedrawTime && (e2.averageRedrawTime = i2 - a2), void 0 === e2.redrawCount && (e2.redrawCount = 0), e2.redrawCount++, void 0 === e2.redrawTotalTime && (e2.redrawTotalTime = 0);
                  var o2 = i2 - a2;
                  e2.redrawTotalTime += o2, e2.lastRedrawTime = o2, e2.averageRedrawTime = e2.averageRedrawTime / 2 + o2 / 2, e2.requestedFrame = false;
                } else ad(e2, false, r2);
                e2.skipFrame = false, Ie(n2);
              }
            }, "n");
            Ie(n2);
          }
        };
        var id = /* @__PURE__ */ __name(function(e2) {
          this.init(e2);
        }, "id"), od = id.prototype;
        od.clientFunctions = ["redrawHint", "render", "renderTo", "matchCanvasSize", "nodeShapeImpl", "arrowShapeImpl"], od.init = function(e2) {
          var t2 = this;
          t2.options = e2, t2.cy = e2.cy;
          var n2 = t2.container = e2.cy.container(), r2 = t2.cy.window();
          if (r2) {
            var a2 = r2.document, i2 = a2.head, o2 = "__________cytoscape_stylesheet", s2 = "__________cytoscape_container", l2 = null != a2.getElementById(o2);
            if (n2.className.indexOf(s2) < 0 && (n2.className = (n2.className || "") + " " + s2), !l2) {
              var u2 = a2.createElement("style");
              u2.id = o2, u2.textContent = "." + s2 + " { position: relative; }", i2.insertBefore(u2, i2.children[0]);
            }
            "static" === r2.getComputedStyle(n2).getPropertyValue("position") && at("A Cytoscape container has style position:static and so can not use UI extensions properly");
          }
          t2.selection = [void 0, void 0, void 0, void 0, 0], t2.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95], t2.hoverData = { down: null, last: null, downTime: null, triggerMode: null, dragging: false, initialPan: [null, null], capture: false }, t2.dragData = { possibleDragElements: [] }, t2.touchData = { start: null, capture: false, startPosition: [null, null, null, null, null, null], singleTouchStartTime: null, singleTouchMoved: true, now: [null, null, null, null, null, null], earlier: [null, null, null, null, null, null] }, t2.redraws = 0, t2.showFps = e2.showFps, t2.debug = e2.debug, t2.webgl = e2.webgl, t2.hideEdgesOnViewport = e2.hideEdgesOnViewport, t2.textureOnViewport = e2.textureOnViewport, t2.wheelSensitivity = e2.wheelSensitivity, t2.motionBlurEnabled = e2.motionBlur, t2.forcedPixelRatio = G(e2.pixelRatio) ? e2.pixelRatio : null, t2.motionBlur = e2.motionBlur, t2.motionBlurOpacity = e2.motionBlurOpacity, t2.motionBlurTransparency = 1 - t2.motionBlurOpacity, t2.motionBlurPxRatio = 1, t2.mbPxRBlurry = 1, t2.minMbLowQualFrames = 4, t2.fullQualityMb = false, t2.clearedForMotionBlur = [], t2.desktopTapThreshold = e2.desktopTapThreshold, t2.desktopTapThreshold2 = e2.desktopTapThreshold * e2.desktopTapThreshold, t2.touchTapThreshold = e2.touchTapThreshold, t2.touchTapThreshold2 = e2.touchTapThreshold * e2.touchTapThreshold, t2.tapholdDuration = 500, t2.bindings = [], t2.beforeRenderCallbacks = [], t2.beforeRenderPriorities = { animations: 400, eleCalcs: 300, eleTxrDeq: 200, lyrTxrDeq: 150, lyrTxrSkip: 100 }, t2.registerNodeShapes(), t2.registerArrowShapes(), t2.registerCalculationListeners();
        }, od.notify = function(e2, t2) {
          var n2 = this, r2 = n2.cy;
          this.destroyed || ("init" !== e2 ? "destroy" !== e2 ? (("add" === e2 || "remove" === e2 || "move" === e2 && r2.hasCompoundNodes() || "load" === e2 || "zorder" === e2 || "mount" === e2) && n2.invalidateCachedZSortedEles(), "viewport" === e2 && n2.redrawHint("select", true), "gc" === e2 && n2.redrawHint("gc", true), "load" !== e2 && "resize" !== e2 && "mount" !== e2 || (n2.invalidateContainerClientCoordsCache(), n2.matchCanvasSize(n2.container)), n2.redrawHint("eles", true), n2.redrawHint("drag", true), this.startRenderLoop(), this.redraw()) : n2.destroy() : n2.load());
        }, od.destroy = function() {
          var e2 = this;
          e2.destroyed = true, e2.cy.stopAnimationLoop();
          for (var t2 = 0; t2 < e2.bindings.length; t2++) {
            var n2 = e2.bindings[t2], r2 = n2.target;
            (r2.off || r2.removeEventListener).apply(r2, n2.args);
          }
          if (e2.bindings = [], e2.beforeRenderCallbacks = [], e2.onUpdateEleCalcsFns = [], e2.removeObserver && e2.removeObserver.disconnect(), e2.styleObserver && e2.styleObserver.disconnect(), e2.resizeObserver && e2.resizeObserver.disconnect(), e2.labelCalcDiv) try {
            document.body.removeChild(e2.labelCalcDiv);
          } catch (e3) {
          }
        }, od.isHeadless = function() {
          return false;
        }, [fc, Jc, ed, td, nd, rd].forEach(function(e2) {
          ge(od, e2);
        });
        var sd = 1e3 / 60, ld = /* @__PURE__ */ __name(function(e2) {
          return function() {
            var t2 = this, n2 = this.renderer;
            if (!t2.dequeueingSetup) {
              t2.dequeueingSetup = true;
              var r2 = _e(function() {
                n2.redrawHint("eles", true), n2.redrawHint("drag", true), n2.redraw();
              }, e2.deqRedrawThreshold), a2 = e2.priority || tt;
              n2.beforeRender(function(a3, i2) {
                var o2 = Ne(), s2 = n2.averageRedrawTime, l2 = n2.lastRedrawTime, u2 = [], c2 = n2.cy.extent(), d2 = n2.getPixelRatio();
                for (a3 || n2.flushRenderedStyleQueue(); ; ) {
                  var h2 = Ne(), f2 = h2 - o2, p2 = h2 - i2;
                  if (l2 < sd) {
                    var v2 = sd - (a3 ? s2 : 0);
                    if (p2 >= e2.deqFastCost * v2) break;
                  } else if (a3) {
                    if (f2 >= e2.deqCost * l2 || f2 >= e2.deqAvgCost * s2) break;
                  } else if (p2 >= e2.deqNoDrawCost * sd) break;
                  var g2 = e2.deq(t2, d2, c2);
                  if (!(g2.length > 0)) break;
                  for (var y2 = 0; y2 < g2.length; y2++) u2.push(g2[y2]);
                }
                u2.length > 0 && (e2.onDeqd(t2, u2), !a3 && e2.shouldRedraw(t2, u2, d2, c2) && r2());
              }, a2(t2));
            }
          };
        }, "ld"), ud = function() {
          return n(/* @__PURE__ */ __name(function e2(n2) {
            var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Je;
            t(this, e2), this.idsByKey = new pt(), this.keyForId = new pt(), this.cachesByLvl = new pt(), this.lvls = [], this.getKey = n2, this.doesEleInvalidateKey = r2;
          }, "e"), [{ key: "getIdsFor", value: /* @__PURE__ */ __name(function(e2) {
            null == e2 && nt("Can not get id list for null key");
            var t2 = this.idsByKey, n2 = this.idsByKey.get(e2);
            return n2 || (n2 = new gt(), t2.set(e2, n2)), n2;
          }, "value") }, { key: "addIdForKey", value: /* @__PURE__ */ __name(function(e2, t2) {
            null != e2 && this.getIdsFor(e2).add(t2);
          }, "value") }, { key: "deleteIdForKey", value: /* @__PURE__ */ __name(function(e2, t2) {
            null != e2 && this.getIdsFor(e2).delete(t2);
          }, "value") }, { key: "getNumberOfIdsForKey", value: /* @__PURE__ */ __name(function(e2) {
            return null == e2 ? 0 : this.getIdsFor(e2).size;
          }, "value") }, { key: "updateKeyMappingFor", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2.id(), n2 = this.keyForId.get(t2), r2 = this.getKey(e2);
            this.deleteIdForKey(n2, t2), this.addIdForKey(r2, t2), this.keyForId.set(t2, r2);
          }, "value") }, { key: "deleteKeyMappingFor", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2.id(), n2 = this.keyForId.get(t2);
            this.deleteIdForKey(n2, t2), this.keyForId.delete(t2);
          }, "value") }, { key: "keyHasChangedFor", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2.id();
            return this.keyForId.get(t2) !== this.getKey(e2);
          }, "value") }, { key: "isInvalid", value: /* @__PURE__ */ __name(function(e2) {
            return this.keyHasChangedFor(e2) || this.doesEleInvalidateKey(e2);
          }, "value") }, { key: "getCachesAt", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = this.cachesByLvl, n2 = this.lvls, r2 = t2.get(e2);
            return r2 || (r2 = new pt(), t2.set(e2, r2), n2.push(e2)), r2;
          }, "value") }, { key: "getCache", value: /* @__PURE__ */ __name(function(e2, t2) {
            return this.getCachesAt(t2).get(e2);
          }, "value") }, { key: "get", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this.getKey(e2), r2 = this.getCache(n2, t2);
            return null != r2 && this.updateKeyMappingFor(e2), r2;
          }, "value") }, { key: "getForCachedKey", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this.keyForId.get(e2.id());
            return this.getCache(n2, t2);
          }, "value") }, { key: "hasCache", value: /* @__PURE__ */ __name(function(e2, t2) {
            return this.getCachesAt(t2).has(e2);
          }, "value") }, { key: "has", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this.getKey(e2);
            return this.hasCache(n2, t2);
          }, "value") }, { key: "setCache", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            n2.key = e2, this.getCachesAt(t2).set(e2, n2);
          }, "value") }, { key: "set", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = this.getKey(e2);
            this.setCache(r2, t2, n2), this.updateKeyMappingFor(e2);
          }, "value") }, { key: "deleteCache", value: /* @__PURE__ */ __name(function(e2, t2) {
            this.getCachesAt(t2).delete(e2);
          }, "value") }, { key: "delete", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this.getKey(e2);
            this.deleteCache(n2, t2);
          }, "value") }, { key: "invalidateKey", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = this;
            this.lvls.forEach(function(n2) {
              return t2.deleteCache(e2, n2);
            });
          }, "value") }, { key: "invalidate", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2.id(), n2 = this.keyForId.get(t2);
            this.deleteKeyMappingFor(e2);
            var r2 = this.doesEleInvalidateKey(e2);
            return r2 && this.invalidateKey(n2), r2 || 0 === this.getNumberOfIdsForKey(n2);
          }, "value") }]);
        }(), cd = 7.99, dd = { dequeue: "dequeue", downscale: "downscale", highQuality: "highQuality" }, hd = ut({ getKey: null, doesEleInvalidateKey: Je, drawElement: null, getBoundingBox: null, getRotationPoint: null, getRotationOffset: null, isVisible: Qe, allowEdgeTxrCaching: true, allowParentTxrCaching: true }), fd = /* @__PURE__ */ __name(function(e2, t2) {
          var n2 = this;
          n2.renderer = e2, n2.onDequeues = [];
          var r2 = hd(t2);
          ge(n2, r2), n2.lookup = new ud(r2.getKey, r2.doesEleInvalidateKey), n2.setupDequeueing();
        }, "fd"), pd = fd.prototype;
        pd.reasons = dd, pd.getTextureQueue = function(e2) {
          var t2 = this;
          return t2.eleImgCaches = t2.eleImgCaches || {}, t2.eleImgCaches[e2] = t2.eleImgCaches[e2] || [];
        }, pd.getRetiredTextureQueue = function(e2) {
          var t2 = this.eleImgCaches.retired = this.eleImgCaches.retired || {};
          return t2[e2] = t2[e2] || [];
        }, pd.getElementQueue = function() {
          return this.eleCacheQueue = this.eleCacheQueue || new St(function(e2, t2) {
            return t2.reqs - e2.reqs;
          });
        }, pd.getElementKeyToQueue = function() {
          return this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {};
        }, pd.getElement = function(e2, t2, n2, r2, a2) {
          var i2 = this, o2 = this.renderer, s2 = o2.cy.zoom(), l2 = this.lookup;
          if (!t2 || 0 === t2.w || 0 === t2.h || isNaN(t2.w) || isNaN(t2.h) || !e2.visible() || e2.removed()) return null;
          if (!i2.allowEdgeTxrCaching && e2.isEdge() || !i2.allowParentTxrCaching && e2.isParent()) return null;
          if (null == r2 && (r2 = Math.ceil(Wt(s2 * n2))), r2 < -4) r2 = -4;
          else if (s2 >= 7.99 || r2 > 3) return null;
          var u2 = Math.pow(2, r2), c2 = t2.h * u2, d2 = t2.w * u2, h2 = o2.eleTextBiggerThanMin(e2, u2);
          if (!this.isVisible(e2, h2)) return null;
          var f2, p2 = l2.get(e2, r2);
          if (p2 && p2.invalidated && (p2.invalidated = false, p2.texture.invalidatedWidth -= p2.width), p2) return p2;
          if (f2 = c2 <= 25 ? 25 : c2 <= 50 ? 50 : 50 * Math.ceil(c2 / 50), c2 > 1024 || d2 > 1024) return null;
          var v2 = i2.getTextureQueue(f2), g2 = v2[v2.length - 2], y2 = /* @__PURE__ */ __name(function() {
            return i2.recycleTexture(f2, d2) || i2.addTexture(f2, d2);
          }, "y");
          g2 || (g2 = v2[v2.length - 1]), g2 || (g2 = y2()), g2.width - g2.usedWidth < d2 && (g2 = y2());
          for (var m2, b2 = function(e3) {
            return e3 && e3.scaledLabelShown === h2;
          }, x2 = a2 && a2 === dd.dequeue, w2 = a2 && a2 === dd.highQuality, E2 = a2 && a2 === dd.downscale, k2 = r2 + 1; k2 <= 3; k2++) {
            var T2 = l2.get(e2, k2);
            if (T2) {
              m2 = T2;
              break;
            }
          }
          var C2 = m2 && m2.level === r2 + 1 ? m2 : null, P2 = /* @__PURE__ */ __name(function() {
            g2.context.drawImage(C2.texture.canvas, C2.x, 0, C2.width, C2.height, g2.usedWidth, 0, d2, c2);
          }, "P");
          if (g2.context.setTransform(1, 0, 0, 1, 0, 0), g2.context.clearRect(g2.usedWidth, 0, d2, f2), b2(C2)) P2();
          else if (b2(m2)) {
            if (!w2) return i2.queueElement(e2, m2.level - 1), m2;
            for (var S2 = m2.level; S2 > r2; S2--) C2 = i2.getElement(e2, t2, n2, S2, dd.downscale);
            P2();
          } else {
            var B2;
            if (!x2 && !w2 && !E2) for (var D2 = r2 - 1; D2 >= -4; D2--) {
              var _2 = l2.get(e2, D2);
              if (_2) {
                B2 = _2;
                break;
              }
            }
            if (b2(B2)) return i2.queueElement(e2, r2), B2;
            g2.context.translate(g2.usedWidth, 0), g2.context.scale(u2, u2), this.drawElement(g2.context, e2, t2, h2, false), g2.context.scale(1 / u2, 1 / u2), g2.context.translate(-g2.usedWidth, 0);
          }
          return p2 = { x: g2.usedWidth, texture: g2, level: r2, scale: u2, width: d2, height: c2, scaledLabelShown: h2 }, g2.usedWidth += Math.ceil(d2 + 8), g2.eleCaches.push(p2), l2.set(e2, r2, p2), i2.checkTextureFullness(g2), p2;
        }, pd.invalidateElements = function(e2) {
          for (var t2 = 0; t2 < e2.length; t2++) this.invalidateElement(e2[t2]);
        }, pd.invalidateElement = function(e2) {
          var t2 = this, n2 = t2.lookup, r2 = [];
          if (n2.isInvalid(e2)) {
            for (var a2 = -4; a2 <= 3; a2++) {
              var i2 = n2.getForCachedKey(e2, a2);
              i2 && r2.push(i2);
            }
            if (n2.invalidate(e2)) for (var o2 = 0; o2 < r2.length; o2++) {
              var s2 = r2[o2], l2 = s2.texture;
              l2.invalidatedWidth += s2.width, s2.invalidated = true, t2.checkTextureUtility(l2);
            }
            t2.removeFromQueue(e2);
          }
        }, pd.checkTextureUtility = function(e2) {
          e2.invalidatedWidth >= 0.2 * e2.width && this.retireTexture(e2);
        }, pd.checkTextureFullness = function(e2) {
          var t2 = this.getTextureQueue(e2.height);
          e2.usedWidth / e2.width > 0.8 && e2.fullnessChecks >= 10 ? ct(t2, e2) : e2.fullnessChecks++;
        }, pd.retireTexture = function(e2) {
          var t2 = e2.height, n2 = this.getTextureQueue(t2), r2 = this.lookup;
          ct(n2, e2), e2.retired = true;
          for (var a2 = e2.eleCaches, i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2];
            r2.deleteCache(o2.key, o2.level);
          }
          dt(a2), this.getRetiredTextureQueue(t2).push(e2);
        }, pd.addTexture = function(e2, t2) {
          var n2 = {};
          return this.getTextureQueue(e2).push(n2), n2.eleCaches = [], n2.height = e2, n2.width = Math.max(1024, t2), n2.usedWidth = 0, n2.invalidatedWidth = 0, n2.fullnessChecks = 0, n2.canvas = this.renderer.makeOffscreenCanvas(n2.width, n2.height), n2.context = n2.canvas.getContext("2d"), n2;
        }, pd.recycleTexture = function(e2, t2) {
          for (var n2 = this.getTextureQueue(e2), r2 = this.getRetiredTextureQueue(e2), a2 = 0; a2 < r2.length; a2++) {
            var i2 = r2[a2];
            if (i2.width >= t2) return i2.retired = false, i2.usedWidth = 0, i2.invalidatedWidth = 0, i2.fullnessChecks = 0, dt(i2.eleCaches), i2.context.setTransform(1, 0, 0, 1, 0, 0), i2.context.clearRect(0, 0, i2.width, i2.height), ct(r2, i2), n2.push(i2), i2;
          }
        }, pd.queueElement = function(e2, t2) {
          var n2 = this.getElementQueue(), r2 = this.getElementKeyToQueue(), a2 = this.getKey(e2), i2 = r2[a2];
          if (i2) i2.level = Math.max(i2.level, t2), i2.eles.merge(e2), i2.reqs++, n2.updateItem(i2);
          else {
            var o2 = { eles: e2.spawn().merge(e2), level: t2, reqs: 1, key: a2 };
            n2.push(o2), r2[a2] = o2;
          }
        }, pd.dequeue = function(e2) {
          for (var t2 = this, n2 = t2.getElementQueue(), r2 = t2.getElementKeyToQueue(), a2 = [], i2 = t2.lookup, o2 = 0; o2 < 1 && n2.size() > 0; o2++) {
            var s2 = n2.pop(), l2 = s2.key, u2 = s2.eles[0], c2 = i2.hasCache(u2, s2.level);
            if (r2[l2] = null, !c2) {
              a2.push(s2);
              var d2 = t2.getBoundingBox(u2);
              t2.getElement(u2, d2, e2, s2.level, dd.dequeue);
            }
          }
          return a2;
        }, pd.removeFromQueue = function(e2) {
          var t2 = this.getElementQueue(), n2 = this.getElementKeyToQueue(), r2 = this.getKey(e2), a2 = n2[r2];
          null != a2 && (1 === a2.eles.length ? (a2.reqs = $e, t2.updateItem(a2), t2.pop(), n2[r2] = null) : a2.eles.unmerge(e2));
        }, pd.onDequeue = function(e2) {
          this.onDequeues.push(e2);
        }, pd.offDequeue = function(e2) {
          ct(this.onDequeues, e2);
        }, pd.setupDequeueing = ld({ deqRedrawThreshold: 100, deqCost: 0.15, deqAvgCost: 0.1, deqNoDrawCost: 0.9, deqFastCost: 0.9, deq: /* @__PURE__ */ __name(function(e2, t2, n2) {
          return e2.dequeue(t2, n2);
        }, "deq"), onDeqd: /* @__PURE__ */ __name(function(e2, t2) {
          for (var n2 = 0; n2 < e2.onDequeues.length; n2++) {
            (0, e2.onDequeues[n2])(t2);
          }
        }, "onDeqd"), shouldRedraw: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
          for (var a2 = 0; a2 < t2.length; a2++) for (var i2 = t2[a2].eles, o2 = 0; o2 < i2.length; o2++) {
            var s2 = i2[o2].boundingBox();
            if (an(s2, r2)) return true;
          }
          return false;
        }, "shouldRedraw"), priority: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer.beforeRenderPriorities.eleTxrDeq;
        }, "priority") });
        var vd = /* @__PURE__ */ __name(function(e2) {
          var t2 = this, n2 = t2.renderer = e2, r2 = n2.cy;
          t2.layersByLevel = {}, t2.firstGet = true, t2.lastInvalidationTime = Ne() - 500, t2.skipping = false, t2.eleTxrDeqs = r2.collection(), t2.scheduleElementRefinement = _e(function() {
            t2.refineElementTextures(t2.eleTxrDeqs), t2.eleTxrDeqs.unmerge(t2.eleTxrDeqs);
          }, 50), n2.beforeRender(function(e3, n3) {
            n3 - t2.lastInvalidationTime <= 250 ? t2.skipping = true : t2.skipping = false;
          }, n2.beforeRenderPriorities.lyrTxrSkip);
          t2.layersQueue = new St(function(e3, t3) {
            return t3.reqs - e3.reqs;
          }), t2.setupDequeueing();
        }, "vd"), gd = vd.prototype, yd = 0, md = Math.pow(2, 53) - 1;
        gd.makeLayer = function(e2, t2) {
          var n2 = Math.pow(2, t2), r2 = Math.ceil(e2.w * n2), a2 = Math.ceil(e2.h * n2), i2 = this.renderer.makeOffscreenCanvas(r2, a2), o2 = { id: yd = ++yd % md, bb: e2, level: t2, width: r2, height: a2, canvas: i2, context: i2.getContext("2d"), eles: [], elesQueue: [], reqs: 0 }, s2 = o2.context, l2 = -o2.bb.x1, u2 = -o2.bb.y1;
          return s2.scale(n2, n2), s2.translate(l2, u2), o2;
        }, gd.getLayers = function(e2, t2, n2) {
          var r2 = this, a2 = r2.renderer.cy.zoom(), i2 = r2.firstGet;
          if (r2.firstGet = false, null == n2) {
            if ((n2 = Math.ceil(Wt(a2 * t2))) < -4) n2 = -4;
            else if (a2 >= 3.99 || n2 > 2) return null;
          }
          r2.validateLayersElesOrdering(n2, e2);
          var o2, s2, l2 = r2.layersByLevel, u2 = Math.pow(2, n2), c2 = l2[n2] = l2[n2] || [];
          if (r2.levelIsComplete(n2, e2)) return c2;
          !function() {
            var t3 = /* @__PURE__ */ __name(function(t4) {
              if (r2.validateLayersElesOrdering(t4, e2), r2.levelIsComplete(t4, e2)) return s2 = l2[t4], true;
            }, "t"), a3 = /* @__PURE__ */ __name(function(e3) {
              if (!s2) for (var r3 = n2 + e3; -4 <= r3 && r3 <= 2 && !t3(r3); r3 += e3) ;
            }, "a");
            a3(1), a3(-1);
            for (var i3 = c2.length - 1; i3 >= 0; i3--) {
              var o3 = c2[i3];
              o3.invalid && ct(c2, o3);
            }
          }();
          var d2 = /* @__PURE__ */ __name(function(t3) {
            var a3 = (t3 = t3 || {}).after;
            !function() {
              if (!o2) {
                o2 = Jt();
                for (var t4 = 0; t4 < e2.length; t4++) n3 = o2, r3 = e2[t4].boundingBox(), n3.x1 = Math.min(n3.x1, r3.x1), n3.x2 = Math.max(n3.x2, r3.x2), n3.w = n3.x2 - n3.x1, n3.y1 = Math.min(n3.y1, r3.y1), n3.y2 = Math.max(n3.y2, r3.y2), n3.h = n3.y2 - n3.y1;
              }
              var n3, r3;
            }();
            var i3 = Math.ceil(o2.w * u2), s3 = Math.ceil(o2.h * u2);
            if (i3 > 32767 || s3 > 32767) return null;
            if (i3 * s3 > 16e6) return null;
            var l3 = r2.makeLayer(o2, n2);
            if (null != a3) {
              var d3 = c2.indexOf(a3) + 1;
              c2.splice(d3, 0, l3);
            } else (void 0 === t3.insert || t3.insert) && c2.unshift(l3);
            return l3;
          }, "d");
          if (r2.skipping && !i2) return null;
          for (var h2 = null, f2 = e2.length / 1, p2 = !i2, v2 = 0; v2 < e2.length; v2++) {
            var g2 = e2[v2], y2 = g2._private.rscratch, m2 = y2.imgLayerCaches = y2.imgLayerCaches || {}, b2 = m2[n2];
            if (b2) h2 = b2;
            else {
              if ((!h2 || h2.eles.length >= f2 || !ln(h2.bb, g2.boundingBox())) && !(h2 = d2({ insert: true, after: h2 }))) return null;
              s2 || p2 ? r2.queueLayer(h2, g2) : r2.drawEleInLayer(h2, g2, n2, t2), h2.eles.push(g2), m2[n2] = h2;
            }
          }
          return s2 || (p2 ? null : c2);
        }, gd.getEleLevelForLayerLevel = function(e2, t2) {
          return e2;
        }, gd.drawEleInLayer = function(e2, t2, n2, r2) {
          var a2 = this.renderer, i2 = e2.context, o2 = t2.boundingBox();
          0 !== o2.w && 0 !== o2.h && t2.visible() && (n2 = this.getEleLevelForLayerLevel(n2, r2), a2.setImgSmoothing(i2, false), a2.drawCachedElement(i2, t2, null, null, n2, true), a2.setImgSmoothing(i2, true));
        }, gd.levelIsComplete = function(e2, t2) {
          var n2 = this.layersByLevel[e2];
          if (!n2 || 0 === n2.length) return false;
          for (var r2 = 0, a2 = 0; a2 < n2.length; a2++) {
            var i2 = n2[a2];
            if (i2.reqs > 0) return false;
            if (i2.invalid) return false;
            r2 += i2.eles.length;
          }
          return r2 === t2.length;
        }, gd.validateLayersElesOrdering = function(e2, t2) {
          var n2 = this.layersByLevel[e2];
          if (n2) for (var r2 = 0; r2 < n2.length; r2++) {
            for (var a2 = n2[r2], i2 = -1, o2 = 0; o2 < t2.length; o2++) if (a2.eles[0] === t2[o2]) {
              i2 = o2;
              break;
            }
            if (i2 < 0) this.invalidateLayer(a2);
            else {
              var s2 = i2;
              for (o2 = 0; o2 < a2.eles.length; o2++) if (a2.eles[o2] !== t2[s2 + o2]) {
                this.invalidateLayer(a2);
                break;
              }
            }
          }
        }, gd.updateElementsInLayers = function(e2, t2) {
          for (var n2 = Q(e2[0]), r2 = 0; r2 < e2.length; r2++) for (var a2 = n2 ? null : e2[r2], i2 = n2 ? e2[r2] : e2[r2].ele, o2 = i2._private.rscratch, s2 = o2.imgLayerCaches = o2.imgLayerCaches || {}, l2 = -4; l2 <= 2; l2++) {
            var u2 = s2[l2];
            u2 && (a2 && this.getEleLevelForLayerLevel(u2.level) !== a2.level || t2(u2, i2, a2));
          }
        }, gd.haveLayers = function() {
          for (var e2 = false, t2 = -4; t2 <= 2; t2++) {
            var n2 = this.layersByLevel[t2];
            if (n2 && n2.length > 0) {
              e2 = true;
              break;
            }
          }
          return e2;
        }, gd.invalidateElements = function(e2) {
          var t2 = this;
          0 !== e2.length && (t2.lastInvalidationTime = Ne(), 0 !== e2.length && t2.haveLayers() && t2.updateElementsInLayers(e2, function(e3, n2, r2) {
            t2.invalidateLayer(e3);
          }));
        }, gd.invalidateLayer = function(e2) {
          if (this.lastInvalidationTime = Ne(), !e2.invalid) {
            var t2 = e2.level, n2 = e2.eles, r2 = this.layersByLevel[t2];
            ct(r2, e2), e2.elesQueue = [], e2.invalid = true, e2.replacement && (e2.replacement.invalid = true);
            for (var a2 = 0; a2 < n2.length; a2++) {
              var i2 = n2[a2]._private.rscratch.imgLayerCaches;
              i2 && (i2[t2] = null);
            }
          }
        }, gd.refineElementTextures = function(e2) {
          var t2 = this;
          t2.updateElementsInLayers(e2, function(e3, n2, r2) {
            var a2 = e3.replacement;
            if (a2 || ((a2 = e3.replacement = t2.makeLayer(e3.bb, e3.level)).replaces = e3, a2.eles = e3.eles), !a2.reqs) for (var i2 = 0; i2 < a2.eles.length; i2++) t2.queueLayer(a2, a2.eles[i2]);
          });
        }, gd.enqueueElementRefinement = function(e2) {
          this.eleTxrDeqs.merge(e2), this.scheduleElementRefinement();
        }, gd.queueLayer = function(e2, t2) {
          var n2 = this.layersQueue, r2 = e2.elesQueue, a2 = r2.hasId = r2.hasId || {};
          if (!e2.replacement) {
            if (t2) {
              if (a2[t2.id()]) return;
              r2.push(t2), a2[t2.id()] = true;
            }
            e2.reqs ? (e2.reqs++, n2.updateItem(e2)) : (e2.reqs = 1, n2.push(e2));
          }
        }, gd.dequeue = function(e2) {
          for (var t2 = this, n2 = t2.layersQueue, r2 = [], a2 = 0; a2 < 1 && 0 !== n2.size(); ) {
            var i2 = n2.peek();
            if (i2.replacement) n2.pop();
            else if (i2.replaces && i2 !== i2.replaces.replacement) n2.pop();
            else if (i2.invalid) n2.pop();
            else {
              var o2 = i2.elesQueue.shift();
              o2 && (t2.drawEleInLayer(i2, o2, i2.level, e2), a2++), 0 === r2.length && r2.push(true), 0 === i2.elesQueue.length && (n2.pop(), i2.reqs = 0, i2.replaces && t2.applyLayerReplacement(i2), t2.requestRedraw());
            }
          }
          return r2;
        }, gd.applyLayerReplacement = function(e2) {
          var t2 = this.layersByLevel[e2.level], n2 = e2.replaces, r2 = t2.indexOf(n2);
          if (!(r2 < 0 || n2.invalid)) {
            t2[r2] = e2;
            for (var a2 = 0; a2 < e2.eles.length; a2++) {
              var i2 = e2.eles[a2]._private, o2 = i2.imgLayerCaches = i2.imgLayerCaches || {};
              o2 && (o2[e2.level] = e2);
            }
            this.requestRedraw();
          }
        }, gd.requestRedraw = _e(function() {
          var e2 = this.renderer;
          e2.redrawHint("eles", true), e2.redrawHint("drag", true), e2.redraw();
        }, 100), gd.setupDequeueing = ld({ deqRedrawThreshold: 50, deqCost: 0.15, deqAvgCost: 0.1, deqNoDrawCost: 0.9, deqFastCost: 0.9, deq: /* @__PURE__ */ __name(function(e2, t2) {
          return e2.dequeue(t2);
        }, "deq"), onDeqd: tt, shouldRedraw: Qe, priority: /* @__PURE__ */ __name(function(e2) {
          return e2.renderer.beforeRenderPriorities.lyrTxrDeq;
        }, "priority") });
        var bd, xd = {};
        function wd(e2, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            e2.lineTo(r2.x, r2.y);
          }
        }
        __name(wd, "wd");
        function Ed(e2, t2, n2) {
          for (var r2, a2 = 0; a2 < t2.length; a2++) {
            var i2 = t2[a2];
            0 === a2 && (r2 = i2), e2.lineTo(i2.x, i2.y);
          }
          e2.quadraticCurveTo(n2.x, n2.y, r2.x, r2.y);
        }
        __name(Ed, "Ed");
        function kd(e2, t2, n2) {
          e2.beginPath && e2.beginPath();
          for (var r2 = t2, a2 = 0; a2 < r2.length; a2++) {
            var i2 = r2[a2];
            e2.lineTo(i2.x, i2.y);
          }
          var o2 = n2, s2 = n2[0];
          e2.moveTo(s2.x, s2.y);
          for (a2 = 1; a2 < o2.length; a2++) {
            i2 = o2[a2];
            e2.lineTo(i2.x, i2.y);
          }
          e2.closePath && e2.closePath();
        }
        __name(kd, "kd");
        function Td(e2, t2, n2, r2, a2) {
          e2.beginPath && e2.beginPath(), e2.arc(n2, r2, a2, 0, 2 * Math.PI, false);
          var i2 = t2, o2 = i2[0];
          e2.moveTo(o2.x, o2.y);
          for (var s2 = 0; s2 < i2.length; s2++) {
            var l2 = i2[s2];
            e2.lineTo(l2.x, l2.y);
          }
          e2.closePath && e2.closePath();
        }
        __name(Td, "Td");
        function Cd(e2, t2, n2, r2) {
          e2.arc(t2, n2, r2, 0, 2 * Math.PI, false);
        }
        __name(Cd, "Cd");
        xd.arrowShapeImpl = function(e2) {
          return (bd || (bd = { polygon: wd, "triangle-backcurve": Ed, "triangle-tee": kd, "circle-triangle": Td, "triangle-cross": kd, circle: Cd }))[e2];
        };
        var Pd = { drawElement: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
          t2.isNode() ? this.drawNode(e2, t2, n2, r2, a2, i2) : this.drawEdge(e2, t2, n2, r2, a2, i2);
        }, "drawElement"), drawElementOverlay: /* @__PURE__ */ __name(function(e2, t2) {
          t2.isNode() ? this.drawNodeOverlay(e2, t2) : this.drawEdgeOverlay(e2, t2);
        }, "drawElementOverlay"), drawElementUnderlay: /* @__PURE__ */ __name(function(e2, t2) {
          t2.isNode() ? this.drawNodeUnderlay(e2, t2) : this.drawEdgeUnderlay(e2, t2);
        }, "drawElementUnderlay"), drawCachedElementPortion: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
          var l2 = this, u2 = n2.getBoundingBox(t2);
          if (0 !== u2.w && 0 !== u2.h) {
            var c2 = n2.getElement(t2, u2, r2, a2, i2);
            if (null != c2) {
              var d2 = s2(l2, t2);
              if (0 === d2) return;
              var h2, f2, p2, v2, g2, y2, m2 = o2(l2, t2), b2 = u2.x1, x2 = u2.y1, w2 = u2.w, E2 = u2.h;
              if (0 !== m2) {
                var k2 = n2.getRotationPoint(t2);
                p2 = k2.x, v2 = k2.y, e2.translate(p2, v2), e2.rotate(m2), (g2 = l2.getImgSmoothing(e2)) || l2.setImgSmoothing(e2, true);
                var T2 = n2.getRotationOffset(t2);
                h2 = T2.x, f2 = T2.y;
              } else h2 = b2, f2 = x2;
              1 !== d2 && (y2 = e2.globalAlpha, e2.globalAlpha = y2 * d2), e2.drawImage(c2.texture.canvas, c2.x, 0, c2.width, c2.height, h2, f2, w2, E2), 1 !== d2 && (e2.globalAlpha = y2), 0 !== m2 && (e2.rotate(-m2), e2.translate(-p2, -v2), g2 || l2.setImgSmoothing(e2, false));
            } else n2.drawElement(e2, t2);
          }
        }, "drawCachedElementPortion") }, Sd = /* @__PURE__ */ __name(function() {
          return 0;
        }, "Sd"), Bd = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.getTextAngle(t2, null);
        }, "Bd"), Dd = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.getTextAngle(t2, "source");
        }, "Dd"), _d = /* @__PURE__ */ __name(function(e2, t2) {
          return e2.getTextAngle(t2, "target");
        }, "_d"), Ad = /* @__PURE__ */ __name(function(e2, t2) {
          return t2.effectiveOpacity();
        }, "Ad"), Md = /* @__PURE__ */ __name(function(e2, t2) {
          return t2.pstyle("text-opacity").pfValue * t2.effectiveOpacity();
        }, "Md");
        Pd.drawCachedElement = function(e2, t2, n2, r2, a2, i2) {
          var o2 = this, s2 = o2.data, l2 = s2.eleTxrCache, u2 = s2.lblTxrCache, c2 = s2.slbTxrCache, d2 = s2.tlbTxrCache, h2 = t2.boundingBox(), f2 = true === i2 ? l2.reasons.highQuality : null;
          if (0 !== h2.w && 0 !== h2.h && t2.visible() && (!r2 || an(h2, r2))) {
            var p2 = t2.isEdge(), v2 = t2.element()._private.rscratch.badLine;
            o2.drawElementUnderlay(e2, t2), o2.drawCachedElementPortion(e2, t2, l2, n2, a2, f2, Sd, Ad), p2 && v2 || o2.drawCachedElementPortion(e2, t2, u2, n2, a2, f2, Bd, Md), p2 && !v2 && (o2.drawCachedElementPortion(e2, t2, c2, n2, a2, f2, Dd, Md), o2.drawCachedElementPortion(e2, t2, d2, n2, a2, f2, _d, Md)), o2.drawElementOverlay(e2, t2);
          }
        }, Pd.drawElements = function(e2, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2];
            this.drawElement(e2, r2);
          }
        }, Pd.drawCachedElements = function(e2, t2, n2, r2) {
          for (var a2 = 0; a2 < t2.length; a2++) {
            var i2 = t2[a2];
            this.drawCachedElement(e2, i2, n2, r2);
          }
        }, Pd.drawCachedNodes = function(e2, t2, n2, r2) {
          for (var a2 = 0; a2 < t2.length; a2++) {
            var i2 = t2[a2];
            i2.isNode() && this.drawCachedElement(e2, i2, n2, r2);
          }
        }, Pd.drawLayeredElements = function(e2, t2, n2, r2) {
          var a2 = this.data.lyrTxrCache.getLayers(t2, n2);
          if (a2) for (var i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2], s2 = o2.bb;
            0 !== s2.w && 0 !== s2.h && e2.drawImage(o2.canvas, s2.x1, s2.y1, s2.w, s2.h);
          }
          else this.drawCachedElements(e2, t2, n2, r2);
        };
        var Rd = { drawEdge: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], o2 = this, s2 = t2._private.rscratch;
          if ((!i2 || t2.visible()) && !s2.badLine && null != s2.allpts && !isNaN(s2.allpts[0])) {
            var l2;
            n2 && (l2 = n2, e2.translate(-l2.x1, -l2.y1));
            var u2 = i2 ? t2.pstyle("opacity").value : 1, c2 = i2 ? t2.pstyle("line-opacity").value : 1, d2 = t2.pstyle("curve-style").value, h2 = t2.pstyle("line-style").value, f2 = t2.pstyle("width").pfValue, p2 = t2.pstyle("line-cap").value, v2 = t2.pstyle("line-outline-width").value, g2 = t2.pstyle("line-outline-color").value, y2 = u2 * c2, m2 = u2 * c2, b2 = /* @__PURE__ */ __name(function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y2;
              "straight-triangle" === d2 ? (o2.eleStrokeStyle(e2, t2, n3), o2.drawEdgeTrianglePath(t2, e2, s2.allpts)) : (e2.lineWidth = f2, e2.lineCap = p2, o2.eleStrokeStyle(e2, t2, n3), o2.drawEdgePath(t2, e2, s2.allpts, h2), e2.lineCap = "butt");
            }, "b"), x2 = /* @__PURE__ */ __name(function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m2;
              o2.drawArrowheads(e2, t2, n3);
            }, "x");
            if (e2.lineJoin = "round", "yes" === t2.pstyle("ghost").value) {
              var w2 = t2.pstyle("ghost-offset-x").pfValue, E2 = t2.pstyle("ghost-offset-y").pfValue, k2 = t2.pstyle("ghost-opacity").value, T2 = y2 * k2;
              e2.translate(w2, E2), b2(T2), x2(T2), e2.translate(-w2, -E2);
            } else !function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y2;
              e2.lineWidth = f2 + v2, e2.lineCap = p2, v2 > 0 ? (o2.colorStrokeStyle(e2, g2[0], g2[1], g2[2], n3), "straight-triangle" === d2 ? o2.drawEdgeTrianglePath(t2, e2, s2.allpts) : (o2.drawEdgePath(t2, e2, s2.allpts, h2), e2.lineCap = "butt")) : e2.lineCap = "butt";
            }();
            a2 && o2.drawEdgeUnderlay(e2, t2), b2(), x2(), a2 && o2.drawEdgeOverlay(e2, t2), o2.drawElementText(e2, t2, null, r2), n2 && e2.translate(l2.x1, l2.y1);
          }
        }, "drawEdge") }, Id = /* @__PURE__ */ __name(function(e2) {
          if (!["overlay", "underlay"].includes(e2)) throw new Error("Invalid state");
          return function(t2, n2) {
            if (n2.visible()) {
              var r2 = n2.pstyle("".concat(e2, "-opacity")).value;
              if (0 !== r2) {
                var a2 = this, i2 = a2.usePaths(), o2 = n2._private.rscratch, s2 = 2 * n2.pstyle("".concat(e2, "-padding")).pfValue, l2 = n2.pstyle("".concat(e2, "-color")).value;
                t2.lineWidth = s2, "self" !== o2.edgeType || i2 ? t2.lineCap = "round" : t2.lineCap = "butt", a2.colorStrokeStyle(t2, l2[0], l2[1], l2[2], r2), a2.drawEdgePath(n2, t2, o2.allpts, "solid");
              }
            }
          };
        }, "Id");
        Rd.drawEdgeOverlay = Id("overlay"), Rd.drawEdgeUnderlay = Id("underlay"), Rd.drawEdgePath = function(e2, t2, n2, a2) {
          var i2, o2 = e2._private.rscratch, s2 = t2, l2 = false, u2 = this.usePaths(), c2 = e2.pstyle("line-dash-pattern").pfValue, d2 = e2.pstyle("line-dash-offset").pfValue;
          if (u2) {
            var h2 = n2.join("$");
            o2.pathCacheKey && o2.pathCacheKey === h2 ? (i2 = t2 = o2.pathCache, l2 = true) : (i2 = t2 = new Path2D(), o2.pathCacheKey = h2, o2.pathCache = i2);
          }
          if (s2.setLineDash) switch (a2) {
            case "dotted":
              s2.setLineDash([1, 1]);
              break;
            case "dashed":
              s2.setLineDash(c2), s2.lineDashOffset = d2;
              break;
            case "solid":
              s2.setLineDash([]);
          }
          if (!l2 && !o2.badLine) switch (t2.beginPath && t2.beginPath(), t2.moveTo(n2[0], n2[1]), o2.edgeType) {
            case "bezier":
            case "self":
            case "compound":
            case "multibezier":
              for (var f2 = 2; f2 + 3 < n2.length; f2 += 4) t2.quadraticCurveTo(n2[f2], n2[f2 + 1], n2[f2 + 2], n2[f2 + 3]);
              break;
            case "straight":
            case "haystack":
              for (var p2 = 2; p2 + 1 < n2.length; p2 += 2) t2.lineTo(n2[p2], n2[p2 + 1]);
              break;
            case "segments":
              if (o2.isRound) {
                var v2, g2 = r(o2.roundCorners);
                try {
                  for (g2.s(); !(v2 = g2.n()).done; ) {
                    zc(t2, v2.value);
                  }
                } catch (e3) {
                  g2.e(e3);
                } finally {
                  g2.f();
                }
                t2.lineTo(n2[n2.length - 2], n2[n2.length - 1]);
              } else for (var y2 = 2; y2 + 1 < n2.length; y2 += 2) t2.lineTo(n2[y2], n2[y2 + 1]);
          }
          t2 = s2, u2 ? t2.stroke(i2) : t2.stroke(), t2.setLineDash && t2.setLineDash([]);
        }, Rd.drawEdgeTrianglePath = function(e2, t2, n2) {
          t2.fillStyle = t2.strokeStyle;
          for (var r2 = e2.pstyle("width").pfValue, a2 = 0; a2 + 1 < n2.length; a2 += 2) {
            var i2 = [n2[a2 + 2] - n2[a2], n2[a2 + 3] - n2[a2 + 1]], o2 = Math.sqrt(i2[0] * i2[0] + i2[1] * i2[1]), s2 = [i2[1] / o2, -i2[0] / o2], l2 = [s2[0] * r2 / 2, s2[1] * r2 / 2];
            t2.beginPath(), t2.moveTo(n2[a2] - l2[0], n2[a2 + 1] - l2[1]), t2.lineTo(n2[a2] + l2[0], n2[a2 + 1] + l2[1]), t2.lineTo(n2[a2 + 2], n2[a2 + 3]), t2.closePath(), t2.fill();
          }
        }, Rd.drawArrowheads = function(e2, t2, n2) {
          var r2 = t2._private.rscratch, a2 = "haystack" === r2.edgeType;
          a2 || this.drawArrowhead(e2, t2, "source", r2.arrowStartX, r2.arrowStartY, r2.srcArrowAngle, n2), this.drawArrowhead(e2, t2, "mid-target", r2.midX, r2.midY, r2.midtgtArrowAngle, n2), this.drawArrowhead(e2, t2, "mid-source", r2.midX, r2.midY, r2.midsrcArrowAngle, n2), a2 || this.drawArrowhead(e2, t2, "target", r2.arrowEndX, r2.arrowEndY, r2.tgtArrowAngle, n2);
        }, Rd.drawArrowhead = function(e2, t2, n2, r2, a2, i2, o2) {
          if (!(isNaN(r2) || null == r2 || isNaN(a2) || null == a2 || isNaN(i2) || null == i2)) {
            var s2 = this, l2 = t2.pstyle(n2 + "-arrow-shape").value;
            if ("none" !== l2) {
              var u2 = "hollow" === t2.pstyle(n2 + "-arrow-fill").value ? "both" : "filled", c2 = t2.pstyle(n2 + "-arrow-fill").value, d2 = t2.pstyle("width").pfValue, h2 = t2.pstyle(n2 + "-arrow-width"), f2 = "match-line" === h2.value ? d2 : h2.pfValue;
              "%" === h2.units && (f2 *= d2);
              var p2 = t2.pstyle("opacity").value;
              void 0 === o2 && (o2 = p2);
              var v2 = e2.globalCompositeOperation;
              1 === o2 && "hollow" !== c2 || (e2.globalCompositeOperation = "destination-out", s2.colorFillStyle(e2, 255, 255, 255, 1), s2.colorStrokeStyle(e2, 255, 255, 255, 1), s2.drawArrowShape(t2, e2, u2, d2, l2, f2, r2, a2, i2), e2.globalCompositeOperation = v2);
              var g2 = t2.pstyle(n2 + "-arrow-color").value;
              s2.colorFillStyle(e2, g2[0], g2[1], g2[2], o2), s2.colorStrokeStyle(e2, g2[0], g2[1], g2[2], o2), s2.drawArrowShape(t2, e2, c2, d2, l2, f2, r2, a2, i2);
            }
          }
        }, Rd.drawArrowShape = function(e2, t2, n2, r2, a2, i2, o2, s2, l2) {
          var u2, c2 = this, d2 = this.usePaths() && "triangle-cross" !== a2, h2 = false, f2 = t2, p2 = { x: o2, y: s2 }, v2 = e2.pstyle("arrow-scale").value, g2 = this.getArrowWidth(r2, v2), y2 = c2.arrowShapes[a2];
          if (d2) {
            var m2 = c2.arrowPathCache = c2.arrowPathCache || [], b2 = qe(a2), x2 = m2[b2];
            null != x2 ? (u2 = t2 = x2, h2 = true) : (u2 = t2 = new Path2D(), m2[b2] = u2);
          }
          h2 || (t2.beginPath && t2.beginPath(), d2 ? y2.draw(t2, 1, 0, { x: 0, y: 0 }, 1) : y2.draw(t2, g2, l2, p2, r2), t2.closePath && t2.closePath()), t2 = f2, d2 && (t2.translate(o2, s2), t2.rotate(l2), t2.scale(g2, g2)), "filled" !== n2 && "both" !== n2 || (d2 ? t2.fill(u2) : t2.fill()), "hollow" !== n2 && "both" !== n2 || (t2.lineWidth = i2 / (d2 ? g2 : 1), t2.lineJoin = "miter", d2 ? t2.stroke(u2) : t2.stroke()), d2 && (t2.scale(1 / g2, 1 / g2), t2.rotate(-l2), t2.translate(-o2, -s2));
        };
        var Nd = { safeDrawImage: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2, l2, u2) {
          if (!(a2 <= 0 || i2 <= 0 || l2 <= 0 || u2 <= 0)) try {
            e2.drawImage(t2, n2, r2, a2, i2, o2, s2, l2, u2);
          } catch (e3) {
            at(e3);
          }
        }, "safeDrawImage"), drawInscribedImage: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          var i2 = this, o2 = n2.position(), s2 = o2.x, l2 = o2.y, u2 = n2.cy().style(), c2 = u2.getIndexedStyle.bind(u2), d2 = c2(n2, "background-fit", "value", r2), h2 = c2(n2, "background-repeat", "value", r2), f2 = n2.width(), p2 = n2.height(), v2 = 2 * n2.padding(), g2 = f2 + ("inner" === c2(n2, "background-width-relative-to", "value", r2) ? 0 : v2), y2 = p2 + ("inner" === c2(n2, "background-height-relative-to", "value", r2) ? 0 : v2), m2 = n2._private.rscratch, b2 = "node" === c2(n2, "background-clip", "value", r2), x2 = c2(n2, "background-image-opacity", "value", r2) * a2, w2 = c2(n2, "background-image-smoothing", "value", r2), E2 = n2.pstyle("corner-radius").value;
          "auto" !== E2 && (E2 = n2.pstyle("corner-radius").pfValue);
          var k2 = t2.width || t2.cachedW, T2 = t2.height || t2.cachedH;
          null != k2 && null != T2 || (document.body.appendChild(t2), k2 = t2.cachedW = t2.width || t2.offsetWidth, T2 = t2.cachedH = t2.height || t2.offsetHeight, document.body.removeChild(t2));
          var C2 = k2, P2 = T2;
          if ("auto" !== c2(n2, "background-width", "value", r2) && (C2 = "%" === c2(n2, "background-width", "units", r2) ? c2(n2, "background-width", "pfValue", r2) * g2 : c2(n2, "background-width", "pfValue", r2)), "auto" !== c2(n2, "background-height", "value", r2) && (P2 = "%" === c2(n2, "background-height", "units", r2) ? c2(n2, "background-height", "pfValue", r2) * y2 : c2(n2, "background-height", "pfValue", r2)), 0 !== C2 && 0 !== P2) {
            if ("contain" === d2) C2 *= S2 = Math.min(g2 / C2, y2 / P2), P2 *= S2;
            else if ("cover" === d2) {
              var S2;
              C2 *= S2 = Math.max(g2 / C2, y2 / P2), P2 *= S2;
            }
            var B2 = s2 - g2 / 2, D2 = c2(n2, "background-position-x", "units", r2), _2 = c2(n2, "background-position-x", "pfValue", r2);
            B2 += "%" === D2 ? (g2 - C2) * _2 : _2;
            var A2 = c2(n2, "background-offset-x", "units", r2), M2 = c2(n2, "background-offset-x", "pfValue", r2);
            B2 += "%" === A2 ? (g2 - C2) * M2 : M2;
            var R2 = l2 - y2 / 2, I2 = c2(n2, "background-position-y", "units", r2), N2 = c2(n2, "background-position-y", "pfValue", r2);
            R2 += "%" === I2 ? (y2 - P2) * N2 : N2;
            var L2 = c2(n2, "background-offset-y", "units", r2), z2 = c2(n2, "background-offset-y", "pfValue", r2);
            R2 += "%" === L2 ? (y2 - P2) * z2 : z2, m2.pathCache && (B2 -= s2, R2 -= l2, s2 = 0, l2 = 0);
            var O2 = e2.globalAlpha;
            e2.globalAlpha = x2;
            var V2 = i2.getImgSmoothing(e2), F2 = false;
            if ("no" === w2 && V2 ? (i2.setImgSmoothing(e2, false), F2 = true) : "yes" !== w2 || V2 || (i2.setImgSmoothing(e2, true), F2 = true), "no-repeat" === h2) b2 && (e2.save(), m2.pathCache ? e2.clip(m2.pathCache) : (i2.nodeShapes[i2.getNodeShape(n2)].draw(e2, s2, l2, g2, y2, E2, m2), e2.clip())), i2.safeDrawImage(e2, t2, 0, 0, k2, T2, B2, R2, C2, P2), b2 && e2.restore();
            else {
              var X2 = e2.createPattern(t2, h2);
              e2.fillStyle = X2, i2.nodeShapes[i2.getNodeShape(n2)].draw(e2, s2, l2, g2, y2, E2, m2), e2.translate(B2, R2), e2.fill(), e2.translate(-B2, -R2);
            }
            e2.globalAlpha = O2, F2 && i2.setImgSmoothing(e2, V2);
          }
        }, "drawInscribedImage") }, Ld = {};
        function zd(e2, t2, n2, r2, a2) {
          var i2 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5, o2 = Math.min(i2, r2 / 2, a2 / 2);
          e2.beginPath(), e2.moveTo(t2 + o2, n2), e2.lineTo(t2 + r2 - o2, n2), e2.quadraticCurveTo(t2 + r2, n2, t2 + r2, n2 + o2), e2.lineTo(t2 + r2, n2 + a2 - o2), e2.quadraticCurveTo(t2 + r2, n2 + a2, t2 + r2 - o2, n2 + a2), e2.lineTo(t2 + o2, n2 + a2), e2.quadraticCurveTo(t2, n2 + a2, t2, n2 + a2 - o2), e2.lineTo(t2, n2 + o2), e2.quadraticCurveTo(t2, n2, t2 + o2, n2), e2.closePath();
        }
        __name(zd, "zd");
        Ld.eleTextBiggerThanMin = function(e2, t2) {
          if (!t2) {
            var n2 = e2.cy().zoom(), r2 = this.getPixelRatio(), a2 = Math.ceil(Wt(n2 * r2));
            t2 = Math.pow(2, a2);
          }
          return !(e2.pstyle("font-size").pfValue * t2 < e2.pstyle("min-zoomed-font-size").pfValue);
        }, Ld.drawElementText = function(e2, t2, n2, r2, a2) {
          var i2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], o2 = this;
          if (null == r2) {
            if (i2 && !o2.eleTextBiggerThanMin(t2)) return;
          } else if (false === r2) return;
          if (t2.isNode()) {
            var s2 = t2.pstyle("label");
            if (!s2 || !s2.value) return;
            var l2 = o2.getLabelJustification(t2);
            e2.textAlign = l2, e2.textBaseline = "bottom";
          } else {
            var u2 = t2.element()._private.rscratch.badLine, c2 = t2.pstyle("label"), d2 = t2.pstyle("source-label"), h2 = t2.pstyle("target-label");
            if (u2 || (!c2 || !c2.value) && (!d2 || !d2.value) && (!h2 || !h2.value)) return;
            e2.textAlign = "center", e2.textBaseline = "bottom";
          }
          var f2, p2 = !n2;
          n2 && (f2 = n2, e2.translate(-f2.x1, -f2.y1)), null == a2 ? (o2.drawText(e2, t2, null, p2, i2), t2.isEdge() && (o2.drawText(e2, t2, "source", p2, i2), o2.drawText(e2, t2, "target", p2, i2))) : o2.drawText(e2, t2, a2, p2, i2), n2 && e2.translate(f2.x1, f2.y1);
        }, Ld.getFontCache = function(e2) {
          var t2;
          this.fontCaches = this.fontCaches || [];
          for (var n2 = 0; n2 < this.fontCaches.length; n2++) if ((t2 = this.fontCaches[n2]).context === e2) return t2;
          return t2 = { context: e2 }, this.fontCaches.push(t2), t2;
        }, Ld.setupTextStyle = function(e2, t2) {
          var n2 = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r2 = t2.pstyle("font-style").strValue, a2 = t2.pstyle("font-size").pfValue + "px", i2 = t2.pstyle("font-family").strValue, o2 = t2.pstyle("font-weight").strValue, s2 = n2 ? t2.effectiveOpacity() * t2.pstyle("text-opacity").value : 1, l2 = t2.pstyle("text-outline-opacity").value * s2, u2 = t2.pstyle("color").value, c2 = t2.pstyle("text-outline-color").value;
          e2.font = r2 + " " + o2 + " " + a2 + " " + i2, e2.lineJoin = "round", this.colorFillStyle(e2, u2[0], u2[1], u2[2], s2), this.colorStrokeStyle(e2, c2[0], c2[1], c2[2], l2);
        }, Ld.getTextAngle = function(e2, t2) {
          var n2, r2 = e2._private.rscratch, a2 = t2 ? t2 + "-" : "", i2 = e2.pstyle(a2 + "text-rotation");
          if ("autorotate" === i2.strValue) {
            var o2 = ht(r2, "labelAngle", t2);
            n2 = e2.isEdge() ? o2 : 0;
          } else n2 = "none" === i2.strValue ? 0 : i2.pfValue;
          return n2;
        }, Ld.drawText = function(e2, t2, n2) {
          var r2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], a2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i2 = t2._private.rscratch, o2 = a2 ? t2.effectiveOpacity() : 1;
          if (!a2 || 0 !== o2 && 0 !== t2.pstyle("text-opacity").value) {
            "main" === n2 && (n2 = null);
            var s2, l2, u2 = ht(i2, "labelX", n2), c2 = ht(i2, "labelY", n2), d2 = this.getLabelText(t2, n2);
            if (null != d2 && "" !== d2 && !isNaN(u2) && !isNaN(c2)) {
              this.setupTextStyle(e2, t2, a2);
              var h2, f2 = n2 ? n2 + "-" : "", p2 = ht(i2, "labelWidth", n2), v2 = ht(i2, "labelHeight", n2), g2 = t2.pstyle(f2 + "text-margin-x").pfValue, y2 = t2.pstyle(f2 + "text-margin-y").pfValue, m2 = t2.isEdge(), b2 = t2.pstyle("text-halign").value, x2 = t2.pstyle("text-valign").value;
              switch (m2 && (b2 = "center", x2 = "center"), u2 += g2, c2 += y2, 0 !== (h2 = r2 ? this.getTextAngle(t2, n2) : 0) && (s2 = u2, l2 = c2, e2.translate(s2, l2), e2.rotate(h2), u2 = 0, c2 = 0), x2) {
                case "top":
                  break;
                case "center":
                  c2 += v2 / 2;
                  break;
                case "bottom":
                  c2 += v2;
              }
              var w2 = t2.pstyle("text-background-opacity").value, E2 = t2.pstyle("text-border-opacity").value, k2 = t2.pstyle("text-border-width").pfValue, T2 = t2.pstyle("text-background-padding").pfValue, C2 = t2.pstyle("text-background-shape").strValue, P2 = "round-rectangle" === C2 || "roundrectangle" === C2, S2 = "circle" === C2;
              if (w2 > 0 || k2 > 0 && E2 > 0) {
                var B2 = e2.fillStyle, D2 = e2.strokeStyle, _2 = e2.lineWidth, A2 = t2.pstyle("text-background-color").value, M2 = t2.pstyle("text-border-color").value, R2 = t2.pstyle("text-border-style").value, I2 = w2 > 0, N2 = k2 > 0 && E2 > 0, L2 = u2 - T2;
                switch (b2) {
                  case "left":
                    L2 -= p2;
                    break;
                  case "center":
                    L2 -= p2 / 2;
                }
                var z2 = c2 - v2 - T2, O2 = p2 + 2 * T2, V2 = v2 + 2 * T2;
                if (I2 && (e2.fillStyle = "rgba(".concat(A2[0], ",").concat(A2[1], ",").concat(A2[2], ",").concat(w2 * o2, ")")), N2 && (e2.strokeStyle = "rgba(".concat(M2[0], ",").concat(M2[1], ",").concat(M2[2], ",").concat(E2 * o2, ")"), e2.lineWidth = k2, e2.setLineDash)) switch (R2) {
                  case "dotted":
                    e2.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    e2.setLineDash([4, 2]);
                    break;
                  case "double":
                    e2.lineWidth = k2 / 4, e2.setLineDash([]);
                    break;
                  default:
                    e2.setLineDash([]);
                }
                if (P2 ? (e2.beginPath(), zd(e2, L2, z2, O2, V2, 2)) : S2 ? (e2.beginPath(), function(e3, t3, n3, r3, a3) {
                  var i3 = Math.min(r3, a3) / 2, o3 = t3 + r3 / 2, s3 = n3 + a3 / 2;
                  e3.beginPath(), e3.arc(o3, s3, i3, 0, 2 * Math.PI), e3.closePath();
                }(e2, L2, z2, O2, V2)) : (e2.beginPath(), e2.rect(L2, z2, O2, V2)), I2 && e2.fill(), N2 && e2.stroke(), N2 && "double" === R2) {
                  var F2 = k2 / 2;
                  e2.beginPath(), P2 ? zd(e2, L2 + F2, z2 + F2, O2 - 2 * F2, V2 - 2 * F2, 2) : e2.rect(L2 + F2, z2 + F2, O2 - 2 * F2, V2 - 2 * F2), e2.stroke();
                }
                e2.fillStyle = B2, e2.strokeStyle = D2, e2.lineWidth = _2, e2.setLineDash && e2.setLineDash([]);
              }
              var X2 = 2 * t2.pstyle("text-outline-width").pfValue;
              if (X2 > 0 && (e2.lineWidth = X2), "wrap" === t2.pstyle("text-wrap").value) {
                var j2 = ht(i2, "labelWrapCachedLines", n2), Y2 = ht(i2, "labelLineHeight", n2), q2 = p2 / 2, W2 = this.getLabelJustification(t2);
                switch ("auto" === W2 || ("left" === b2 ? "left" === W2 ? u2 += -p2 : "center" === W2 && (u2 += -q2) : "center" === b2 ? "left" === W2 ? u2 += -q2 : "right" === W2 && (u2 += q2) : "right" === b2 && ("center" === W2 ? u2 += q2 : "right" === W2 && (u2 += p2))), x2) {
                  case "top":
                  case "center":
                  case "bottom":
                    c2 -= (j2.length - 1) * Y2;
                }
                for (var U2 = 0; U2 < j2.length; U2++) X2 > 0 && e2.strokeText(j2[U2], u2, c2), e2.fillText(j2[U2], u2, c2), c2 += Y2;
              } else X2 > 0 && e2.strokeText(d2, u2, c2), e2.fillText(d2, u2, c2);
              0 !== h2 && (e2.rotate(-h2), e2.translate(-s2, -l2));
            }
          }
        };
        var Od = { drawNode: /* @__PURE__ */ __name(function(e2, t2, n2) {
          var r2, a2, i2 = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], o2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], s2 = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5], l2 = this, u2 = t2._private, c2 = u2.rscratch, d2 = t2.position();
          if (G(d2.x) && G(d2.y) && (!s2 || t2.visible())) {
            var h2, f2, p2 = s2 ? t2.effectiveOpacity() : 1, v2 = l2.usePaths(), g2 = false, y2 = t2.padding();
            r2 = t2.width() + 2 * y2, a2 = t2.height() + 2 * y2, n2 && (f2 = n2, e2.translate(-f2.x1, -f2.y1));
            for (var m2 = t2.pstyle("background-image").value, b2 = new Array(m2.length), x2 = new Array(m2.length), w2 = 0, E2 = 0; E2 < m2.length; E2++) {
              var k2 = m2[E2];
              if (b2[E2] = null != k2 && "none" !== k2) {
                var T2 = t2.cy().style().getIndexedStyle(t2, "background-image-crossorigin", "value", E2);
                w2++, x2[E2] = l2.getCachedImage(k2, T2, function() {
                  u2.backgroundTimestamp = Date.now(), t2.emitAndNotify("background");
                });
              }
            }
            var C2 = t2.pstyle("background-blacken").value, P2 = t2.pstyle("border-width").pfValue, S2 = t2.pstyle("background-opacity").value * p2, B2 = t2.pstyle("border-color").value, D2 = t2.pstyle("border-style").value, _2 = t2.pstyle("border-join").value, A2 = t2.pstyle("border-cap").value, M2 = t2.pstyle("border-position").value, R2 = t2.pstyle("border-dash-pattern").pfValue, I2 = t2.pstyle("border-dash-offset").pfValue, N2 = t2.pstyle("border-opacity").value * p2, L2 = t2.pstyle("outline-width").pfValue, z2 = t2.pstyle("outline-color").value, O2 = t2.pstyle("outline-style").value, V2 = t2.pstyle("outline-opacity").value * p2, F2 = t2.pstyle("outline-offset").value, X2 = t2.pstyle("corner-radius").value;
            "auto" !== X2 && (X2 = t2.pstyle("corner-radius").pfValue);
            var j2 = /* @__PURE__ */ __name(function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S2;
              l2.eleFillStyle(e2, t2, n3);
            }, "j"), Y2 = /* @__PURE__ */ __name(function() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : N2;
              l2.colorStrokeStyle(e2, B2[0], B2[1], B2[2], t3);
            }, "Y"), q2 = /* @__PURE__ */ __name(function() {
              var t3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : V2;
              l2.colorStrokeStyle(e2, z2[0], z2[1], z2[2], t3);
            }, "q"), W2 = /* @__PURE__ */ __name(function(e3, t3, n3, r3) {
              var a3, i3 = l2.nodePathCache = l2.nodePathCache || [], o3 = We("polygon" === n3 ? n3 + "," + r3.join(",") : n3, "" + t3, "" + e3, "" + X2), s3 = i3[o3], u3 = false;
              return null != s3 ? (a3 = s3, u3 = true, c2.pathCache = a3) : (a3 = new Path2D(), i3[o3] = c2.pathCache = a3), { path: a3, cacheHit: u3 };
            }, "W"), U2 = t2.pstyle("shape").strValue, H2 = t2.pstyle("shape-polygon-points").pfValue;
            if (v2) {
              e2.translate(d2.x, d2.y);
              var K2 = W2(r2, a2, U2, H2);
              h2 = K2.path, g2 = K2.cacheHit;
            }
            var Z2 = /* @__PURE__ */ __name(function() {
              if (!g2) {
                var n3 = d2;
                v2 && (n3 = { x: 0, y: 0 }), l2.nodeShapes[l2.getNodeShape(t2)].draw(h2 || e2, n3.x, n3.y, r2, a2, X2, c2);
              }
              v2 ? e2.fill(h2) : e2.fill();
            }, "Z"), $2 = /* @__PURE__ */ __name(function() {
              for (var n3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p2, r3 = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], a3 = u2.backgrounding, i3 = 0, o3 = 0; o3 < x2.length; o3++) {
                var s3 = t2.cy().style().getIndexedStyle(t2, "background-image-containment", "value", o3);
                r3 && "over" === s3 || !r3 && "inside" === s3 ? i3++ : b2[o3] && x2[o3].complete && !x2[o3].error && (i3++, l2.drawInscribedImage(e2, x2[o3], t2, o3, n3));
              }
              u2.backgrounding = !(i3 === w2), a3 !== u2.backgrounding && t2.updateStyle(false);
            }, "$"), Q2 = /* @__PURE__ */ __name(function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p2;
              l2.hasPie(t2) && (l2.drawPie(e2, t2, i3), n3 && (v2 || l2.nodeShapes[l2.getNodeShape(t2)].draw(e2, d2.x, d2.y, r2, a2, X2, c2)));
            }, "Q"), J2 = /* @__PURE__ */ __name(function() {
              var n3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p2;
              l2.hasStripe(t2) && (e2.save(), v2 ? e2.clip(c2.pathCache) : (l2.nodeShapes[l2.getNodeShape(t2)].draw(e2, d2.x, d2.y, r2, a2, X2, c2), e2.clip()), l2.drawStripe(e2, t2, i3), e2.restore(), n3 && (v2 || l2.nodeShapes[l2.getNodeShape(t2)].draw(e2, d2.x, d2.y, r2, a2, X2, c2)));
            }, "J"), ee2 = /* @__PURE__ */ __name(function() {
              var t3 = (C2 > 0 ? C2 : -C2) * (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : p2), n3 = C2 > 0 ? 0 : 255;
              0 !== C2 && (l2.colorFillStyle(e2, n3, n3, n3, t3), v2 ? e2.fill(h2) : e2.fill());
            }, "ee"), te2 = /* @__PURE__ */ __name(function() {
              if (P2 > 0) {
                if (e2.lineWidth = P2, e2.lineCap = A2, e2.lineJoin = _2, e2.setLineDash) switch (D2) {
                  case "dotted":
                    e2.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    e2.setLineDash(R2), e2.lineDashOffset = I2;
                    break;
                  case "solid":
                  case "double":
                    e2.setLineDash([]);
                }
                if ("center" !== M2) {
                  if (e2.save(), e2.lineWidth *= 2, "inside" === M2) v2 ? e2.clip(h2) : e2.clip();
                  else {
                    var t3 = new Path2D();
                    t3.rect(-r2 / 2 - P2, -a2 / 2 - P2, r2 + 2 * P2, a2 + 2 * P2), t3.addPath(h2), e2.clip(t3, "evenodd");
                  }
                  v2 ? e2.stroke(h2) : e2.stroke(), e2.restore();
                } else v2 ? e2.stroke(h2) : e2.stroke();
                if ("double" === D2) {
                  e2.lineWidth = P2 / 3;
                  var n3 = e2.globalCompositeOperation;
                  e2.globalCompositeOperation = "destination-out", v2 ? e2.stroke(h2) : e2.stroke(), e2.globalCompositeOperation = n3;
                }
                e2.setLineDash && e2.setLineDash([]);
              }
            }, "te"), ne2 = /* @__PURE__ */ __name(function() {
              if (L2 > 0) {
                if (e2.lineWidth = L2, e2.lineCap = "butt", e2.setLineDash) switch (O2) {
                  case "dotted":
                    e2.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    e2.setLineDash([4, 2]);
                    break;
                  case "solid":
                  case "double":
                    e2.setLineDash([]);
                }
                var n3 = d2;
                v2 && (n3 = { x: 0, y: 0 });
                var i3 = l2.getNodeShape(t2), o3 = P2;
                "inside" === M2 && (o3 = 0), "outside" === M2 && (o3 *= 2);
                var s3, u3 = (r2 + o3 + (L2 + F2)) / r2, c3 = (a2 + o3 + (L2 + F2)) / a2, h3 = r2 * u3, f3 = a2 * c3, p3 = l2.nodeShapes[i3].points;
                if (v2) s3 = W2(h3, f3, i3, p3).path;
                if ("ellipse" === i3) l2.drawEllipsePath(s3 || e2, n3.x, n3.y, h3, f3);
                else if (["round-diamond", "round-heptagon", "round-hexagon", "round-octagon", "round-pentagon", "round-polygon", "round-triangle", "round-tag"].includes(i3)) {
                  var g3 = 0, y3 = 0, m3 = 0;
                  "round-diamond" === i3 ? g3 = 1.4 * (o3 + F2 + L2) : "round-heptagon" === i3 ? (g3 = 1.075 * (o3 + F2 + L2), m3 = -(o3 / 2 + F2 + L2) / 35) : "round-hexagon" === i3 ? g3 = 1.12 * (o3 + F2 + L2) : "round-pentagon" === i3 ? (g3 = 1.13 * (o3 + F2 + L2), m3 = -(o3 / 2 + F2 + L2) / 15) : "round-tag" === i3 ? (g3 = 1.12 * (o3 + F2 + L2), y3 = 0.07 * (o3 / 2 + L2 + F2)) : "round-triangle" === i3 && (g3 = (o3 + F2 + L2) * (Math.PI / 2), m3 = -(o3 + F2 / 2 + L2) / Math.PI), 0 !== g3 && (h3 = r2 * (u3 = (r2 + g3) / r2), ["round-hexagon", "round-tag"].includes(i3) || (f3 = a2 * (c3 = (a2 + g3) / a2)));
                  for (var b3 = h3 / 2, x3 = f3 / 2, w3 = (X2 = "auto" === X2 ? An(h3, f3) : X2) + (o3 + L2 + F2) / 2, E3 = new Array(p3.length / 2), k3 = new Array(p3.length / 2), T3 = 0; T3 < p3.length / 2; T3++) E3[T3] = { x: n3.x + y3 + b3 * p3[2 * T3], y: n3.y + m3 + x3 * p3[2 * T3 + 1] };
                  var C3, S3, B3, D3, _3 = E3.length;
                  for (S3 = E3[_3 - 1], C3 = 0; C3 < _3; C3++) B3 = E3[C3 % _3], D3 = E3[(C3 + 1) % _3], k3[C3] = Oc(S3, B3, D3, w3), S3 = B3, B3 = D3;
                  l2.drawRoundPolygonPath(s3 || e2, n3.x + y3, n3.y + m3, r2 * u3, a2 * c3, p3, k3);
                } else if (["roundrectangle", "round-rectangle"].includes(i3)) X2 = "auto" === X2 ? _n(h3, f3) : X2, l2.drawRoundRectanglePath(s3 || e2, n3.x, n3.y, h3, f3, X2 + (o3 + L2 + F2) / 2);
                else if (["cutrectangle", "cut-rectangle"].includes(i3)) X2 = "auto" === X2 ? 8 : X2, l2.drawCutRectanglePath(s3 || e2, n3.x, n3.y, h3, f3, null, X2 + (o3 + L2 + F2) / 4);
                else if (["bottomroundrectangle", "bottom-round-rectangle"].includes(i3)) X2 = "auto" === X2 ? _n(h3, f3) : X2, l2.drawBottomRoundRectanglePath(s3 || e2, n3.x, n3.y, h3, f3, X2 + (o3 + L2 + F2) / 2);
                else if ("barrel" === i3) l2.drawBarrelPath(s3 || e2, n3.x, n3.y, h3, f3);
                else if (i3.startsWith("polygon") || ["rhomboid", "right-rhomboid", "round-tag", "tag", "vee"].includes(i3)) {
                  p3 = mn(bn(p3, (o3 + L2 + F2) / r2)), l2.drawPolygonPath(s3 || e2, n3.x, n3.y, r2, a2, p3);
                } else {
                  p3 = mn(bn(p3, -((o3 + L2 + F2) / r2))), l2.drawPolygonPath(s3 || e2, n3.x, n3.y, r2, a2, p3);
                }
                if (v2 ? e2.stroke(s3) : e2.stroke(), "double" === O2) {
                  e2.lineWidth = o3 / 3;
                  var A3 = e2.globalCompositeOperation;
                  e2.globalCompositeOperation = "destination-out", v2 ? e2.stroke(s3) : e2.stroke(), e2.globalCompositeOperation = A3;
                }
                e2.setLineDash && e2.setLineDash([]);
              }
            }, "ne");
            if ("yes" === t2.pstyle("ghost").value) {
              var re2 = t2.pstyle("ghost-offset-x").pfValue, ae2 = t2.pstyle("ghost-offset-y").pfValue, ie2 = t2.pstyle("ghost-opacity").value, oe2 = ie2 * p2;
              e2.translate(re2, ae2), q2(), ne2(), j2(ie2 * S2), Z2(), $2(oe2, true), Y2(ie2 * N2), te2(), Q2(0 !== C2 || 0 !== P2), J2(0 !== C2 || 0 !== P2), $2(oe2, false), ee2(oe2), e2.translate(-re2, -ae2);
            }
            v2 && e2.translate(-d2.x, -d2.y), o2 && l2.drawNodeUnderlay(e2, t2, d2, r2, a2), v2 && e2.translate(d2.x, d2.y), q2(), ne2(), j2(), Z2(), $2(p2, true), Y2(), te2(), Q2(0 !== C2 || 0 !== P2), J2(0 !== C2 || 0 !== P2), $2(p2, false), ee2(), v2 && e2.translate(-d2.x, -d2.y), l2.drawElementText(e2, t2, null, i2), o2 && l2.drawNodeOverlay(e2, t2, d2, r2, a2), n2 && e2.translate(f2.x1, f2.y1);
          }
        }, "drawNode") }, Vd = /* @__PURE__ */ __name(function(e2) {
          if (!["overlay", "underlay"].includes(e2)) throw new Error("Invalid state");
          return function(t2, n2, r2, a2, i2) {
            if (n2.visible()) {
              var o2 = n2.pstyle("".concat(e2, "-padding")).pfValue, s2 = n2.pstyle("".concat(e2, "-opacity")).value, l2 = n2.pstyle("".concat(e2, "-color")).value, u2 = n2.pstyle("".concat(e2, "-shape")).value, c2 = n2.pstyle("".concat(e2, "-corner-radius")).value;
              if (s2 > 0) {
                if (r2 = r2 || n2.position(), null == a2 || null == i2) {
                  var d2 = n2.padding();
                  a2 = n2.width() + 2 * d2, i2 = n2.height() + 2 * d2;
                }
                this.colorFillStyle(t2, l2[0], l2[1], l2[2], s2), this.nodeShapes[u2].draw(t2, r2.x, r2.y, a2 + 2 * o2, i2 + 2 * o2, c2), t2.fill();
              }
            }
          };
        }, "Vd");
        Od.drawNodeOverlay = Vd("overlay"), Od.drawNodeUnderlay = Vd("underlay"), Od.hasPie = function(e2) {
          return (e2 = e2[0])._private.hasPie;
        }, Od.hasStripe = function(e2) {
          return (e2 = e2[0])._private.hasStripe;
        }, Od.drawPie = function(e2, t2, n2, r2) {
          t2 = t2[0], r2 = r2 || t2.position();
          var a2, i2 = t2.cy().style(), o2 = t2.pstyle("pie-size"), s2 = t2.pstyle("pie-hole"), l2 = t2.pstyle("pie-start-angle").pfValue, u2 = r2.x, c2 = r2.y, d2 = t2.width(), h2 = t2.height(), f2 = Math.min(d2, h2) / 2, p2 = 0;
          if (this.usePaths() && (u2 = 0, c2 = 0), "%" === o2.units ? f2 *= o2.pfValue : void 0 !== o2.pfValue && (f2 = o2.pfValue / 2), "%" === s2.units ? a2 = f2 * s2.pfValue : void 0 !== s2.pfValue && (a2 = s2.pfValue / 2), !(a2 >= f2)) for (var v2 = 1; v2 <= i2.pieBackgroundN; v2++) {
            var g2 = t2.pstyle("pie-" + v2 + "-background-size").value, y2 = t2.pstyle("pie-" + v2 + "-background-color").value, m2 = t2.pstyle("pie-" + v2 + "-background-opacity").value * n2, b2 = g2 / 100;
            b2 + p2 > 1 && (b2 = 1 - p2);
            var x2 = 1.5 * Math.PI + 2 * Math.PI * p2, w2 = (x2 += l2) + 2 * Math.PI * b2;
            0 === g2 || p2 >= 1 || p2 + b2 > 1 || (0 === a2 ? (e2.beginPath(), e2.moveTo(u2, c2), e2.arc(u2, c2, f2, x2, w2), e2.closePath()) : (e2.beginPath(), e2.arc(u2, c2, f2, x2, w2), e2.arc(u2, c2, a2, w2, x2, true), e2.closePath()), this.colorFillStyle(e2, y2[0], y2[1], y2[2], m2), e2.fill(), p2 += b2);
          }
        }, Od.drawStripe = function(e2, t2, n2, r2) {
          t2 = t2[0], r2 = r2 || t2.position();
          var a2 = t2.cy().style(), i2 = r2.x, o2 = r2.y, s2 = t2.width(), l2 = t2.height(), u2 = 0, c2 = this.usePaths();
          e2.save();
          var d2 = t2.pstyle("stripe-direction").value, h2 = t2.pstyle("stripe-size");
          switch (d2) {
            case "vertical":
              break;
            case "righward":
              e2.rotate(-Math.PI / 2);
          }
          var f2 = s2, p2 = l2;
          "%" === h2.units ? (f2 *= h2.pfValue, p2 *= h2.pfValue) : void 0 !== h2.pfValue && (f2 = h2.pfValue, p2 = h2.pfValue), c2 && (i2 = 0, o2 = 0), o2 -= f2 / 2, i2 -= p2 / 2;
          for (var v2 = 1; v2 <= a2.stripeBackgroundN; v2++) {
            var g2 = t2.pstyle("stripe-" + v2 + "-background-size").value, y2 = t2.pstyle("stripe-" + v2 + "-background-color").value, m2 = t2.pstyle("stripe-" + v2 + "-background-opacity").value * n2, b2 = g2 / 100;
            b2 + u2 > 1 && (b2 = 1 - u2), 0 === g2 || u2 >= 1 || u2 + b2 > 1 || (e2.beginPath(), e2.rect(i2, o2 + p2 * u2, f2, p2 * b2), e2.closePath(), this.colorFillStyle(e2, y2[0], y2[1], y2[2], m2), e2.fill(), u2 += b2);
          }
          e2.restore();
        };
        var Fd, Xd = {};
        function jd(e2, t2, n2) {
          var r2 = e2.createShader(t2);
          if (e2.shaderSource(r2, n2), e2.compileShader(r2), !e2.getShaderParameter(r2, e2.COMPILE_STATUS)) throw new Error(e2.getShaderInfoLog(r2));
          return r2;
        }
        __name(jd, "jd");
        function Yd(e2, t2, n2) {
          void 0 === n2 && (n2 = t2);
          var r2 = e2.makeOffscreenCanvas(t2, n2), a2 = r2.context = r2.getContext("2d");
          return r2.clear = function() {
            return a2.clearRect(0, 0, r2.width, r2.height);
          }, r2.clear(), r2;
        }
        __name(Yd, "Yd");
        function qd(e2) {
          var t2 = e2.pixelRatio, n2 = e2.cy.zoom(), r2 = e2.cy.pan();
          return { zoom: n2 * t2, pan: { x: r2.x * t2, y: r2.y * t2 } };
        }
        __name(qd, "qd");
        function Wd(e2) {
          return "solid" === e2.pstyle("background-fill").value && ("none" === e2.pstyle("background-image").strValue && (0 === e2.pstyle("border-width").value || (0 === e2.pstyle("border-opacity").value || "solid" === e2.pstyle("border-style").value)));
        }
        __name(Wd, "Wd");
        function Ud(e2, t2) {
          if (e2.length !== t2.length) return false;
          for (var n2 = 0; n2 < e2.length; n2++) if (e2[n2] !== t2[n2]) return false;
          return true;
        }
        __name(Ud, "Ud");
        function Hd(e2, t2, n2) {
          var r2 = e2[0] / 255, a2 = e2[1] / 255, i2 = e2[2] / 255, o2 = t2, s2 = n2 || new Array(4);
          return s2[0] = r2 * o2, s2[1] = a2 * o2, s2[2] = i2 * o2, s2[3] = o2, s2;
        }
        __name(Hd, "Hd");
        function Kd(e2, t2) {
          var n2 = t2 || new Array(4);
          return n2[0] = (255 & e2) / 255, n2[1] = (e2 >> 8 & 255) / 255, n2[2] = (e2 >> 16 & 255) / 255, n2[3] = (e2 >> 24 & 255) / 255, n2;
        }
        __name(Kd, "Kd");
        function Gd(e2) {
          return e2[0] + (e2[1] << 8) + (e2[2] << 16) + (e2[3] << 24);
        }
        __name(Gd, "Gd");
        function Zd(e2, t2) {
          switch (t2) {
            case "float":
              return [1, e2.FLOAT, 4];
            case "vec2":
              return [2, e2.FLOAT, 4];
            case "vec3":
              return [3, e2.FLOAT, 4];
            case "vec4":
              return [4, e2.FLOAT, 4];
            case "int":
              return [1, e2.INT, 4];
            case "ivec2":
              return [2, e2.INT, 4];
          }
        }
        __name(Zd, "Zd");
        function $d(e2, t2, n2) {
          switch (t2) {
            case e2.FLOAT:
              return new Float32Array(n2);
            case e2.INT:
              return new Int32Array(n2);
          }
        }
        __name($d, "$d");
        function Qd(e2, t2, n2, r2, a2, i2) {
          switch (t2) {
            case e2.FLOAT:
              return new Float32Array(n2.buffer, i2 * r2, a2);
            case e2.INT:
              return new Int32Array(n2.buffer, i2 * r2, a2);
          }
        }
        __name(Qd, "Qd");
        function Jd(e2, t2, n2, r2) {
          var a2 = i(Zd(e2, n2), 3), o2 = a2[0], s2 = a2[1], l2 = a2[2], u2 = $d(e2, s2, t2 * o2), c2 = o2 * l2, d2 = e2.createBuffer();
          e2.bindBuffer(e2.ARRAY_BUFFER, d2), e2.bufferData(e2.ARRAY_BUFFER, t2 * c2, e2.DYNAMIC_DRAW), e2.enableVertexAttribArray(r2), s2 === e2.FLOAT ? e2.vertexAttribPointer(r2, o2, s2, false, c2, 0) : s2 === e2.INT && e2.vertexAttribIPointer(r2, o2, s2, c2, 0), e2.vertexAttribDivisor(r2, 1), e2.bindBuffer(e2.ARRAY_BUFFER, null);
          for (var h2 = new Array(t2), f2 = 0; f2 < t2; f2++) h2[f2] = Qd(e2, s2, u2, c2, o2, f2);
          return d2.dataArray = u2, d2.stride = c2, d2.size = o2, d2.getView = function(e3) {
            return h2[e3];
          }, d2.setPoint = function(e3, t3, n3) {
            var r3 = h2[e3];
            r3[0] = t3, r3[1] = n3;
          }, d2.bufferSubData = function(t3) {
            e2.bindBuffer(e2.ARRAY_BUFFER, d2), t3 ? e2.bufferSubData(e2.ARRAY_BUFFER, 0, u2, 0, t3 * o2) : e2.bufferSubData(e2.ARRAY_BUFFER, 0, u2);
          }, d2;
        }
        __name(Jd, "Jd");
        Xd.getPixelRatio = function() {
          var e2 = this.data.contexts[0];
          if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
          var t2 = this.cy.window(), n2 = e2.backingStorePixelRatio || e2.webkitBackingStorePixelRatio || e2.mozBackingStorePixelRatio || e2.msBackingStorePixelRatio || e2.oBackingStorePixelRatio || e2.backingStorePixelRatio || 1;
          return (t2.devicePixelRatio || 1) / n2;
        }, Xd.paintCache = function(e2) {
          for (var t2, n2 = this.paintCaches = this.paintCaches || [], r2 = true, a2 = 0; a2 < n2.length; a2++) if ((t2 = n2[a2]).context === e2) {
            r2 = false;
            break;
          }
          return r2 && (t2 = { context: e2 }, n2.push(t2)), t2;
        }, Xd.createGradientStyleFor = function(e2, t2, n2, r2, a2) {
          var i2, o2 = this.usePaths(), s2 = n2.pstyle(t2 + "-gradient-stop-colors").value, l2 = n2.pstyle(t2 + "-gradient-stop-positions").pfValue;
          if ("radial-gradient" === r2) if (n2.isEdge()) {
            var u2 = n2.sourceEndpoint(), c2 = n2.targetEndpoint(), d2 = n2.midpoint(), h2 = Ht(u2, d2), f2 = Ht(c2, d2);
            i2 = e2.createRadialGradient(d2.x, d2.y, 0, d2.x, d2.y, Math.max(h2, f2));
          } else {
            var p2 = o2 ? { x: 0, y: 0 } : n2.position(), v2 = n2.paddedWidth(), g2 = n2.paddedHeight();
            i2 = e2.createRadialGradient(p2.x, p2.y, 0, p2.x, p2.y, Math.max(v2, g2));
          }
          else if (n2.isEdge()) {
            var y2 = n2.sourceEndpoint(), m2 = n2.targetEndpoint();
            i2 = e2.createLinearGradient(y2.x, y2.y, m2.x, m2.y);
          } else {
            var b2 = o2 ? { x: 0, y: 0 } : n2.position(), x2 = n2.paddedWidth() / 2, w2 = n2.paddedHeight() / 2;
            switch (n2.pstyle("background-gradient-direction").value) {
              case "to-bottom":
                i2 = e2.createLinearGradient(b2.x, b2.y - w2, b2.x, b2.y + w2);
                break;
              case "to-top":
                i2 = e2.createLinearGradient(b2.x, b2.y + w2, b2.x, b2.y - w2);
                break;
              case "to-left":
                i2 = e2.createLinearGradient(b2.x + x2, b2.y, b2.x - x2, b2.y);
                break;
              case "to-right":
                i2 = e2.createLinearGradient(b2.x - x2, b2.y, b2.x + x2, b2.y);
                break;
              case "to-bottom-right":
              case "to-right-bottom":
                i2 = e2.createLinearGradient(b2.x - x2, b2.y - w2, b2.x + x2, b2.y + w2);
                break;
              case "to-top-right":
              case "to-right-top":
                i2 = e2.createLinearGradient(b2.x - x2, b2.y + w2, b2.x + x2, b2.y - w2);
                break;
              case "to-bottom-left":
              case "to-left-bottom":
                i2 = e2.createLinearGradient(b2.x + x2, b2.y - w2, b2.x - x2, b2.y + w2);
                break;
              case "to-top-left":
              case "to-left-top":
                i2 = e2.createLinearGradient(b2.x + x2, b2.y + w2, b2.x - x2, b2.y - w2);
            }
          }
          if (!i2) return null;
          for (var E2 = l2.length === s2.length, k2 = s2.length, T2 = 0; T2 < k2; T2++) i2.addColorStop(E2 ? l2[T2] : T2 / (k2 - 1), "rgba(" + s2[T2][0] + "," + s2[T2][1] + "," + s2[T2][2] + "," + a2 + ")");
          return i2;
        }, Xd.gradientFillStyle = function(e2, t2, n2, r2) {
          var a2 = this.createGradientStyleFor(e2, "background", t2, n2, r2);
          if (!a2) return null;
          e2.fillStyle = a2;
        }, Xd.colorFillStyle = function(e2, t2, n2, r2, a2) {
          e2.fillStyle = "rgba(" + t2 + "," + n2 + "," + r2 + "," + a2 + ")";
        }, Xd.eleFillStyle = function(e2, t2, n2) {
          var r2 = t2.pstyle("background-fill").value;
          if ("linear-gradient" === r2 || "radial-gradient" === r2) this.gradientFillStyle(e2, t2, r2, n2);
          else {
            var a2 = t2.pstyle("background-color").value;
            this.colorFillStyle(e2, a2[0], a2[1], a2[2], n2);
          }
        }, Xd.gradientStrokeStyle = function(e2, t2, n2, r2) {
          var a2 = this.createGradientStyleFor(e2, "line", t2, n2, r2);
          if (!a2) return null;
          e2.strokeStyle = a2;
        }, Xd.colorStrokeStyle = function(e2, t2, n2, r2, a2) {
          e2.strokeStyle = "rgba(" + t2 + "," + n2 + "," + r2 + "," + a2 + ")";
        }, Xd.eleStrokeStyle = function(e2, t2, n2) {
          var r2 = t2.pstyle("line-fill").value;
          if ("linear-gradient" === r2 || "radial-gradient" === r2) this.gradientStrokeStyle(e2, t2, r2, n2);
          else {
            var a2 = t2.pstyle("line-color").value;
            this.colorStrokeStyle(e2, a2[0], a2[1], a2[2], n2);
          }
        }, Xd.matchCanvasSize = function(e2) {
          var t2 = this, n2 = t2.data, r2 = t2.findContainerClientCoords(), a2 = r2[2], i2 = r2[3], o2 = t2.getPixelRatio(), s2 = t2.motionBlurPxRatio;
          e2 !== t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_NODE] && e2 !== t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_DRAG] || (o2 = s2);
          var l2, u2 = a2 * o2, c2 = i2 * o2;
          if (u2 !== t2.canvasWidth || c2 !== t2.canvasHeight) {
            t2.fontCaches = null;
            var d2 = n2.canvasContainer;
            d2.style.width = a2 + "px", d2.style.height = i2 + "px";
            for (var h2 = 0; h2 < t2.CANVAS_LAYERS; h2++) (l2 = n2.canvases[h2]).width = u2, l2.height = c2, l2.style.width = a2 + "px", l2.style.height = i2 + "px";
            for (h2 = 0; h2 < t2.BUFFER_COUNT; h2++) (l2 = n2.bufferCanvases[h2]).width = u2, l2.height = c2, l2.style.width = a2 + "px", l2.style.height = i2 + "px";
            t2.textureMult = 1, o2 <= 1 && (l2 = n2.bufferCanvases[t2.TEXTURE_BUFFER], t2.textureMult = 2, l2.width = u2 * t2.textureMult, l2.height = c2 * t2.textureMult), t2.canvasWidth = u2, t2.canvasHeight = c2, t2.pixelRatio = o2;
          }
        }, Xd.renderTo = function(e2, t2, n2, r2) {
          this.render({ forcedContext: e2, forcedZoom: t2, forcedPan: n2, drawAllLayers: true, forcedPxRatio: r2 });
        }, Xd.clearCanvas = function() {
          var e2 = this, t2 = e2.data;
          function n2(t3) {
            t3.clearRect(0, 0, e2.canvasWidth, e2.canvasHeight);
          }
          __name(n2, "n");
          n2(t2.contexts[e2.NODE]), n2(t2.contexts[e2.DRAG]);
        }, Xd.render = function(e2) {
          var t2 = this;
          e2 = e2 || lt();
          var n2 = t2.cy, r2 = e2.forcedContext, a2 = e2.drawAllLayers, i2 = e2.drawOnlyNodeLayer, o2 = e2.forcedZoom, s2 = e2.forcedPan, l2 = void 0 === e2.forcedPxRatio ? this.getPixelRatio() : e2.forcedPxRatio, u2 = t2.data, c2 = u2.canvasNeedsRedraw, d2 = t2.textureOnViewport && !r2 && (t2.pinching || t2.hoverData.dragging || t2.swipePanning || t2.data.wheelZooming), h2 = void 0 !== e2.motionBlur ? e2.motionBlur : t2.motionBlur, f2 = t2.motionBlurPxRatio, p2 = n2.hasCompoundNodes(), v2 = t2.hoverData.draggingEles, g2 = !(!t2.hoverData.selecting && !t2.touchData.selecting), y2 = h2 = h2 && !r2 && t2.motionBlurEnabled && !g2;
          r2 || (t2.prevPxRatio !== l2 && (t2.invalidateContainerClientCoordsCache(), t2.matchCanvasSize(t2.container), t2.redrawHint("eles", true), t2.redrawHint("drag", true)), t2.prevPxRatio = l2), !r2 && t2.motionBlurTimeout && clearTimeout(t2.motionBlurTimeout), h2 && (null == t2.mbFrames && (t2.mbFrames = 0), t2.mbFrames++, t2.mbFrames < 3 && (y2 = false), t2.mbFrames > t2.minMbLowQualFrames && (t2.motionBlurPxRatio = t2.mbPxRBlurry)), t2.clearingMotionBlur && (t2.motionBlurPxRatio = 1), t2.textureDrawLastFrame && !d2 && (c2[t2.NODE] = true, c2[t2.SELECT_BOX] = true);
          var m2 = n2.style(), b2 = n2.zoom(), x2 = void 0 !== o2 ? o2 : b2, w2 = n2.pan(), E2 = { x: w2.x, y: w2.y }, k2 = { zoom: b2, pan: { x: w2.x, y: w2.y } }, T2 = t2.prevViewport;
          void 0 === T2 || k2.zoom !== T2.zoom || k2.pan.x !== T2.pan.x || k2.pan.y !== T2.pan.y || v2 && !p2 || (t2.motionBlurPxRatio = 1), s2 && (E2 = s2), x2 *= l2, E2.x *= l2, E2.y *= l2;
          var C2 = t2.getCachedZSortedEles();
          function P2(e3, n3, r3, a3, i3) {
            var o3 = e3.globalCompositeOperation;
            e3.globalCompositeOperation = "destination-out", t2.colorFillStyle(e3, 255, 255, 255, t2.motionBlurTransparency), e3.fillRect(n3, r3, a3, i3), e3.globalCompositeOperation = o3;
          }
          __name(P2, "P");
          function S2(e3, n3) {
            var i3, l3, c3, d3;
            t2.clearingMotionBlur || e3 !== u2.bufferContexts[t2.MOTIONBLUR_BUFFER_NODE] && e3 !== u2.bufferContexts[t2.MOTIONBLUR_BUFFER_DRAG] ? (i3 = E2, l3 = x2, c3 = t2.canvasWidth, d3 = t2.canvasHeight) : (i3 = { x: w2.x * f2, y: w2.y * f2 }, l3 = b2 * f2, c3 = t2.canvasWidth * f2, d3 = t2.canvasHeight * f2), e3.setTransform(1, 0, 0, 1, 0, 0), "motionBlur" === n3 ? P2(e3, 0, 0, c3, d3) : r2 || void 0 !== n3 && !n3 || e3.clearRect(0, 0, c3, d3), a2 || (e3.translate(i3.x, i3.y), e3.scale(l3, l3)), s2 && e3.translate(s2.x, s2.y), o2 && e3.scale(o2, o2);
          }
          __name(S2, "S");
          if (d2 || (t2.textureDrawLastFrame = false), d2) {
            if (t2.textureDrawLastFrame = true, !t2.textureCache) {
              t2.textureCache = {}, t2.textureCache.bb = n2.mutableElements().boundingBox(), t2.textureCache.texture = t2.data.bufferCanvases[t2.TEXTURE_BUFFER];
              var B2 = t2.data.bufferContexts[t2.TEXTURE_BUFFER];
              B2.setTransform(1, 0, 0, 1, 0, 0), B2.clearRect(0, 0, t2.canvasWidth * t2.textureMult, t2.canvasHeight * t2.textureMult), t2.render({ forcedContext: B2, drawOnlyNodeLayer: true, forcedPxRatio: l2 * t2.textureMult }), (k2 = t2.textureCache.viewport = { zoom: n2.zoom(), pan: n2.pan(), width: t2.canvasWidth, height: t2.canvasHeight }).mpan = { x: (0 - k2.pan.x) / k2.zoom, y: (0 - k2.pan.y) / k2.zoom };
            }
            c2[t2.DRAG] = false, c2[t2.NODE] = false;
            var D2 = u2.contexts[t2.NODE], _2 = t2.textureCache.texture;
            k2 = t2.textureCache.viewport;
            D2.setTransform(1, 0, 0, 1, 0, 0), h2 ? P2(D2, 0, 0, k2.width, k2.height) : D2.clearRect(0, 0, k2.width, k2.height);
            var A2 = m2.core("outside-texture-bg-color").value, M2 = m2.core("outside-texture-bg-opacity").value;
            t2.colorFillStyle(D2, A2[0], A2[1], A2[2], M2), D2.fillRect(0, 0, k2.width, k2.height);
            b2 = n2.zoom();
            S2(D2, false), D2.clearRect(k2.mpan.x, k2.mpan.y, k2.width / k2.zoom / l2, k2.height / k2.zoom / l2), D2.drawImage(_2, k2.mpan.x, k2.mpan.y, k2.width / k2.zoom / l2, k2.height / k2.zoom / l2);
          } else t2.textureOnViewport && !r2 && (t2.textureCache = null);
          var R2 = n2.extent(), I2 = t2.pinching || t2.hoverData.dragging || t2.swipePanning || t2.data.wheelZooming || t2.hoverData.draggingEles || t2.cy.animated(), N2 = t2.hideEdgesOnViewport && I2, L2 = [];
          if (L2[t2.NODE] = !c2[t2.NODE] && h2 && !t2.clearedForMotionBlur[t2.NODE] || t2.clearingMotionBlur, L2[t2.NODE] && (t2.clearedForMotionBlur[t2.NODE] = true), L2[t2.DRAG] = !c2[t2.DRAG] && h2 && !t2.clearedForMotionBlur[t2.DRAG] || t2.clearingMotionBlur, L2[t2.DRAG] && (t2.clearedForMotionBlur[t2.DRAG] = true), c2[t2.NODE] || a2 || i2 || L2[t2.NODE]) {
            var z2 = h2 && !L2[t2.NODE] && 1 !== f2;
            S2(D2 = r2 || (z2 ? t2.data.bufferContexts[t2.MOTIONBLUR_BUFFER_NODE] : u2.contexts[t2.NODE]), h2 && !z2 ? "motionBlur" : void 0), N2 ? t2.drawCachedNodes(D2, C2.nondrag, l2, R2) : t2.drawLayeredElements(D2, C2.nondrag, l2, R2), t2.debug && t2.drawDebugPoints(D2, C2.nondrag), a2 || h2 || (c2[t2.NODE] = false);
          }
          if (!i2 && (c2[t2.DRAG] || a2 || L2[t2.DRAG])) {
            z2 = h2 && !L2[t2.DRAG] && 1 !== f2;
            S2(D2 = r2 || (z2 ? t2.data.bufferContexts[t2.MOTIONBLUR_BUFFER_DRAG] : u2.contexts[t2.DRAG]), h2 && !z2 ? "motionBlur" : void 0), N2 ? t2.drawCachedNodes(D2, C2.drag, l2, R2) : t2.drawCachedElements(D2, C2.drag, l2, R2), t2.debug && t2.drawDebugPoints(D2, C2.drag), a2 || h2 || (c2[t2.DRAG] = false);
          }
          if (this.drawSelectionRectangle(e2, S2), h2 && 1 !== f2) {
            var O2 = u2.contexts[t2.NODE], V2 = t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_NODE], F2 = u2.contexts[t2.DRAG], X2 = t2.data.bufferCanvases[t2.MOTIONBLUR_BUFFER_DRAG], j2 = /* @__PURE__ */ __name(function(e3, n3, r3) {
              e3.setTransform(1, 0, 0, 1, 0, 0), r3 || !y2 ? e3.clearRect(0, 0, t2.canvasWidth, t2.canvasHeight) : P2(e3, 0, 0, t2.canvasWidth, t2.canvasHeight);
              var a3 = f2;
              e3.drawImage(n3, 0, 0, t2.canvasWidth * a3, t2.canvasHeight * a3, 0, 0, t2.canvasWidth, t2.canvasHeight);
            }, "j");
            (c2[t2.NODE] || L2[t2.NODE]) && (j2(O2, V2, L2[t2.NODE]), c2[t2.NODE] = false), (c2[t2.DRAG] || L2[t2.DRAG]) && (j2(F2, X2, L2[t2.DRAG]), c2[t2.DRAG] = false);
          }
          t2.prevViewport = k2, t2.clearingMotionBlur && (t2.clearingMotionBlur = false, t2.motionBlurCleared = true, t2.motionBlur = true), h2 && (t2.motionBlurTimeout = setTimeout(function() {
            t2.motionBlurTimeout = null, t2.clearedForMotionBlur[t2.NODE] = false, t2.clearedForMotionBlur[t2.DRAG] = false, t2.motionBlur = false, t2.clearingMotionBlur = !d2, t2.mbFrames = 0, c2[t2.NODE] = true, c2[t2.DRAG] = true, t2.redraw();
          }, 100)), r2 || n2.emit("render");
        }, Xd.drawSelectionRectangle = function(e2, t2) {
          var n2 = this, r2 = n2.cy, a2 = n2.data, i2 = r2.style(), o2 = e2.drawOnlyNodeLayer, s2 = e2.drawAllLayers, l2 = a2.canvasNeedsRedraw, u2 = e2.forcedContext;
          if (n2.showFps || !o2 && l2[n2.SELECT_BOX] && !s2) {
            var c2 = u2 || a2.contexts[n2.SELECT_BOX];
            if (t2(c2), 1 == n2.selection[4] && (n2.hoverData.selecting || n2.touchData.selecting)) {
              var d2 = n2.cy.zoom(), h2 = i2.core("selection-box-border-width").value / d2;
              c2.lineWidth = h2, c2.fillStyle = "rgba(" + i2.core("selection-box-color").value[0] + "," + i2.core("selection-box-color").value[1] + "," + i2.core("selection-box-color").value[2] + "," + i2.core("selection-box-opacity").value + ")", c2.fillRect(n2.selection[0], n2.selection[1], n2.selection[2] - n2.selection[0], n2.selection[3] - n2.selection[1]), h2 > 0 && (c2.strokeStyle = "rgba(" + i2.core("selection-box-border-color").value[0] + "," + i2.core("selection-box-border-color").value[1] + "," + i2.core("selection-box-border-color").value[2] + "," + i2.core("selection-box-opacity").value + ")", c2.strokeRect(n2.selection[0], n2.selection[1], n2.selection[2] - n2.selection[0], n2.selection[3] - n2.selection[1]));
            }
            if (a2.bgActivePosistion && !n2.hoverData.selecting) {
              d2 = n2.cy.zoom();
              var f2 = a2.bgActivePosistion;
              c2.fillStyle = "rgba(" + i2.core("active-bg-color").value[0] + "," + i2.core("active-bg-color").value[1] + "," + i2.core("active-bg-color").value[2] + "," + i2.core("active-bg-opacity").value + ")", c2.beginPath(), c2.arc(f2.x, f2.y, i2.core("active-bg-size").pfValue / d2, 0, 2 * Math.PI), c2.fill();
            }
            var p2 = n2.lastRedrawTime;
            if (n2.showFps && p2) {
              p2 = Math.round(p2);
              var v2 = Math.round(1e3 / p2), g2 = "1 frame = " + p2 + " ms = " + v2 + " fps";
              if (c2.setTransform(1, 0, 0, 1, 0, 0), c2.fillStyle = "rgba(255, 0, 0, 0.75)", c2.strokeStyle = "rgba(255, 0, 0, 0.75)", c2.font = "30px Arial", !Fd) {
                var y2 = c2.measureText(g2);
                Fd = y2.actualBoundingBoxAscent;
              }
              c2.fillText(g2, 0, Fd);
              c2.strokeRect(0, Fd + 10, 250, 20), c2.fillRect(0, Fd + 10, 250 * Math.min(v2 / 60, 1), 20);
            }
            s2 || (l2[n2.SELECT_BOX] = false);
          }
        };
        var eh = "undefined" != typeof Float32Array ? Float32Array : Array;
        function th() {
          var e2 = new eh(9);
          return eh != Float32Array && (e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[5] = 0, e2[6] = 0, e2[7] = 0), e2[0] = 1, e2[4] = 1, e2[8] = 1, e2;
        }
        __name(th, "th");
        function nh(e2) {
          return e2[0] = 1, e2[1] = 0, e2[2] = 0, e2[3] = 0, e2[4] = 1, e2[5] = 0, e2[6] = 0, e2[7] = 0, e2[8] = 1, e2;
        }
        __name(nh, "nh");
        function rh(e2, t2, n2) {
          var r2 = t2[0], a2 = t2[1], i2 = t2[2], o2 = t2[3], s2 = t2[4], l2 = t2[5], u2 = t2[6], c2 = t2[7], d2 = t2[8], h2 = n2[0], f2 = n2[1];
          return e2[0] = r2, e2[1] = a2, e2[2] = i2, e2[3] = o2, e2[4] = s2, e2[5] = l2, e2[6] = h2 * r2 + f2 * o2 + u2, e2[7] = h2 * a2 + f2 * s2 + c2, e2[8] = h2 * i2 + f2 * l2 + d2, e2;
        }
        __name(rh, "rh");
        function ah(e2, t2, n2) {
          var r2 = t2[0], a2 = t2[1], i2 = t2[2], o2 = t2[3], s2 = t2[4], l2 = t2[5], u2 = t2[6], c2 = t2[7], d2 = t2[8], h2 = Math.sin(n2), f2 = Math.cos(n2);
          return e2[0] = f2 * r2 + h2 * o2, e2[1] = f2 * a2 + h2 * s2, e2[2] = f2 * i2 + h2 * l2, e2[3] = f2 * o2 - h2 * r2, e2[4] = f2 * s2 - h2 * a2, e2[5] = f2 * l2 - h2 * i2, e2[6] = u2, e2[7] = c2, e2[8] = d2, e2;
        }
        __name(ah, "ah");
        function ih(e2, t2, n2) {
          var r2 = n2[0], a2 = n2[1];
          return e2[0] = r2 * t2[0], e2[1] = r2 * t2[1], e2[2] = r2 * t2[2], e2[3] = a2 * t2[3], e2[4] = a2 * t2[4], e2[5] = a2 * t2[5], e2[6] = t2[6], e2[7] = t2[7], e2[8] = t2[8], e2;
        }
        __name(ih, "ih");
        Math.hypot || (Math.hypot = function() {
          for (var e2 = 0, t2 = arguments.length; t2--; ) e2 += arguments[t2] * arguments[t2];
          return Math.sqrt(e2);
        });
        var oh = function() {
          return n(/* @__PURE__ */ __name(function e2(n2, r2, a2, i2) {
            t(this, e2), this.debugID = Math.floor(1e4 * Math.random()), this.r = n2, this.texSize = r2, this.texRows = a2, this.texHeight = Math.floor(r2 / a2), this.enableWrapping = true, this.locked = false, this.texture = null, this.needsBuffer = true, this.freePointer = { x: 0, row: 0 }, this.keyToLocation = /* @__PURE__ */ new Map(), this.canvas = i2(n2, r2, r2), this.scratch = i2(n2, r2, this.texHeight, "scratch");
          }, "e"), [{ key: "lock", value: /* @__PURE__ */ __name(function() {
            this.locked = true;
          }, "value") }, { key: "getKeys", value: /* @__PURE__ */ __name(function() {
            return new Set(this.keyToLocation.keys());
          }, "value") }, { key: "getScale", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2.w, n2 = e2.h, r2 = this.texHeight, a2 = this.texSize, i2 = r2 / n2, o2 = t2 * i2, s2 = n2 * i2;
            return o2 > a2 && (o2 = t2 * (i2 = a2 / t2), s2 = n2 * i2), { scale: i2, texW: o2, texH: s2 };
          }, "value") }, { key: "draw", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = this;
            if (this.locked) throw new Error("can't draw, atlas is locked");
            var a2 = this.texSize, i2 = this.texRows, o2 = this.texHeight, s2 = this.getScale(t2), l2 = s2.scale, u2 = s2.texW, c2 = s2.texH, d2 = /* @__PURE__ */ __name(function(e3, r3) {
              if (n2 && r3) {
                var a3 = r3.context, i3 = e3.x, s3 = e3.row, u3 = i3, c3 = o2 * s3;
                a3.save(), a3.translate(u3, c3), a3.scale(l2, l2), n2(a3, t2), a3.restore();
              }
            }, "d"), h2 = [null, null], f2 = /* @__PURE__ */ __name(function() {
              d2(r2.freePointer, r2.canvas), h2[0] = { x: r2.freePointer.x, y: r2.freePointer.row * o2, w: u2, h: c2 }, h2[1] = { x: r2.freePointer.x + u2, y: r2.freePointer.row * o2, w: 0, h: c2 }, r2.freePointer.x += u2, r2.freePointer.x == a2 && (r2.freePointer.x = 0, r2.freePointer.row++);
            }, "f"), p2 = /* @__PURE__ */ __name(function() {
              r2.freePointer.x = 0, r2.freePointer.row++;
            }, "p");
            if (this.freePointer.x + u2 <= a2) f2();
            else {
              if (this.freePointer.row >= i2 - 1) return false;
              this.freePointer.x === a2 ? (p2(), f2()) : this.enableWrapping ? function() {
                var e3 = r2.scratch, t3 = r2.canvas;
                e3.clear(), d2({ x: 0, row: 0 }, e3);
                var n3 = a2 - r2.freePointer.x, i3 = u2 - n3, s3 = o2, l3 = r2.freePointer.x, f3 = r2.freePointer.row * o2, p3 = n3;
                t3.context.drawImage(e3, 0, 0, p3, s3, l3, f3, p3, s3), h2[0] = { x: l3, y: f3, w: p3, h: c2 };
                var v2 = n3, g2 = (r2.freePointer.row + 1) * o2, y2 = i3;
                t3 && t3.context.drawImage(e3, v2, 0, y2, s3, 0, g2, y2, s3), h2[1] = { x: 0, y: g2, w: y2, h: c2 }, r2.freePointer.x = i3, r2.freePointer.row++;
              }() : (p2(), f2());
            }
            return this.keyToLocation.set(e2, h2), this.needsBuffer = true, h2;
          }, "value") }, { key: "getOffsets", value: /* @__PURE__ */ __name(function(e2) {
            return this.keyToLocation.get(e2);
          }, "value") }, { key: "isEmpty", value: /* @__PURE__ */ __name(function() {
            return 0 === this.freePointer.x && 0 === this.freePointer.row;
          }, "value") }, { key: "canFit", value: /* @__PURE__ */ __name(function(e2) {
            if (this.locked) return false;
            var t2 = this.texSize, n2 = this.texRows, r2 = this.getScale(e2).texW;
            return !(this.freePointer.x + r2 > t2) || this.freePointer.row < n2 - 1;
          }, "value") }, { key: "bufferIfNeeded", value: /* @__PURE__ */ __name(function(e2) {
            this.texture || (this.texture = function(e3) {
              var t2 = e3.createTexture();
              return t2.buffer = function(n2) {
                e3.bindTexture(e3.TEXTURE_2D, t2), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_WRAP_S, e3.CLAMP_TO_EDGE), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_WRAP_T, e3.CLAMP_TO_EDGE), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_MAG_FILTER, e3.LINEAR), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_MIN_FILTER, e3.LINEAR_MIPMAP_NEAREST), e3.pixelStorei(e3.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true), e3.texImage2D(e3.TEXTURE_2D, 0, e3.RGBA, e3.RGBA, e3.UNSIGNED_BYTE, n2), e3.generateMipmap(e3.TEXTURE_2D), e3.bindTexture(e3.TEXTURE_2D, null);
              }, t2.deleteTexture = function() {
                e3.deleteTexture(t2);
              }, t2;
            }(e2, this.debugID)), this.needsBuffer && (this.texture.buffer(this.canvas), this.needsBuffer = false, this.locked && (this.canvas = null, this.scratch = null));
          }, "value") }, { key: "dispose", value: /* @__PURE__ */ __name(function() {
            this.texture && (this.texture.deleteTexture(), this.texture = null), this.canvas = null, this.scratch = null, this.locked = true;
          }, "value") }]);
        }(), sh = function() {
          return n(/* @__PURE__ */ __name(function e2(n2, r2, a2, i2) {
            t(this, e2), this.r = n2, this.texSize = r2, this.texRows = a2, this.createTextureCanvas = i2, this.atlases = [], this.styleKeyToAtlas = /* @__PURE__ */ new Map(), this.markedKeys = /* @__PURE__ */ new Set();
          }, "e"), [{ key: "getKeys", value: /* @__PURE__ */ __name(function() {
            return new Set(this.styleKeyToAtlas.keys());
          }, "value") }, { key: "_createAtlas", value: /* @__PURE__ */ __name(function() {
            var e2 = this.r, t2 = this.texSize, n2 = this.texRows, r2 = this.createTextureCanvas;
            return new oh(e2, t2, n2, r2);
          }, "value") }, { key: "_getScratchCanvas", value: /* @__PURE__ */ __name(function() {
            if (!this.scratch) {
              var e2 = this.r, t2 = this.texSize, n2 = this.texRows, r2 = this.createTextureCanvas, a2 = Math.floor(t2 / n2);
              this.scratch = r2(e2, t2, a2, "scratch");
            }
            return this.scratch;
          }, "value") }, { key: "draw", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = this.styleKeyToAtlas.get(e2);
            return r2 || ((r2 = this.atlases[this.atlases.length - 1]) && r2.canFit(t2) || (r2 && r2.lock(), r2 = this._createAtlas(), this.atlases.push(r2)), r2.draw(e2, t2, n2), this.styleKeyToAtlas.set(e2, r2)), r2;
          }, "value") }, { key: "getAtlas", value: /* @__PURE__ */ __name(function(e2) {
            return this.styleKeyToAtlas.get(e2);
          }, "value") }, { key: "hasAtlas", value: /* @__PURE__ */ __name(function(e2) {
            return this.styleKeyToAtlas.has(e2);
          }, "value") }, { key: "markKeyForGC", value: /* @__PURE__ */ __name(function(e2) {
            this.markedKeys.add(e2);
          }, "value") }, { key: "gc", value: /* @__PURE__ */ __name(function() {
            var e2 = this, t2 = this.markedKeys;
            if (0 !== t2.size) {
              var n2, a2 = [], s2 = /* @__PURE__ */ new Map(), l2 = null, u2 = r(this.atlases);
              try {
                var c2 = /* @__PURE__ */ __name(function() {
                  var u3, c3, d2 = n2.value, h2 = d2.getKeys(), f2 = (c3 = h2, (u3 = t2).intersection ? u3.intersection(c3) : new Set(o(u3).filter(function(e3) {
                    return c3.has(e3);
                  })));
                  if (0 === f2.size) return a2.push(d2), h2.forEach(function(e3) {
                    return s2.set(e3, d2);
                  }), 1;
                  l2 || (l2 = e2._createAtlas(), a2.push(l2));
                  var p2, v2 = r(h2);
                  try {
                    for (v2.s(); !(p2 = v2.n()).done; ) {
                      var g2 = p2.value;
                      if (!f2.has(g2)) {
                        var y2 = i(d2.getOffsets(g2), 2), m2 = y2[0], b2 = y2[1];
                        l2.canFit({ w: m2.w + b2.w, h: m2.h }) || (l2.lock(), l2 = e2._createAtlas(), a2.push(l2)), d2.canvas && (e2._copyTextureToNewAtlas(g2, d2, l2), s2.set(g2, l2));
                      }
                    }
                  } catch (e3) {
                    v2.e(e3);
                  } finally {
                    v2.f();
                  }
                  d2.dispose();
                }, "c");
                for (u2.s(); !(n2 = u2.n()).done; ) c2();
              } catch (e3) {
                u2.e(e3);
              } finally {
                u2.f();
              }
              this.atlases = a2, this.styleKeyToAtlas = s2, this.markedKeys = /* @__PURE__ */ new Set();
            } else console.log("nothing to garbage collect");
          }, "value") }, { key: "_copyTextureToNewAtlas", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = i(t2.getOffsets(e2), 2), a2 = r2[0], o2 = r2[1];
            if (0 === o2.w) n2.draw(e2, a2, function(e3) {
              e3.drawImage(t2.canvas, a2.x, a2.y, a2.w, a2.h, 0, 0, a2.w, a2.h);
            });
            else {
              var s2 = this._getScratchCanvas();
              s2.clear(), s2.context.drawImage(t2.canvas, a2.x, a2.y, a2.w, a2.h, 0, 0, a2.w, a2.h), s2.context.drawImage(t2.canvas, o2.x, o2.y, o2.w, o2.h, a2.w, 0, o2.w, o2.h);
              var l2 = a2.w + o2.w, u2 = a2.h;
              n2.draw(e2, { w: l2, h: u2 }, function(e3) {
                e3.drawImage(s2, 0, 0, l2, u2, 0, 0, l2, u2);
              });
            }
          }, "value") }, { key: "getCounts", value: /* @__PURE__ */ __name(function() {
            return { keyCount: this.styleKeyToAtlas.size, atlasCount: new Set(this.styleKeyToAtlas.values()).size };
          }, "value") }]);
        }();
        var lh = function() {
          return n(/* @__PURE__ */ __name(function e2(n2, r2) {
            t(this, e2), this.r = n2, this.globalOptions = r2, this.atlasSize = r2.webglTexSize, this.maxAtlasesPerBatch = r2.webglTexPerBatch, this.renderTypes = /* @__PURE__ */ new Map(), this.collections = /* @__PURE__ */ new Map(), this.typeAndIdToKey = /* @__PURE__ */ new Map();
          }, "e"), [{ key: "getAtlasSize", value: /* @__PURE__ */ __name(function() {
            return this.atlasSize;
          }, "value") }, { key: "addAtlasCollection", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this.globalOptions, r2 = n2.webglTexSize, a2 = n2.createTextureCanvas, i2 = t2.texRows, o2 = this._cacheScratchCanvas(a2), s2 = new sh(this.r, r2, i2, o2);
            this.collections.set(e2, s2);
          }, "value") }, { key: "addRenderType", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = t2.collection;
            if (!this.collections.has(n2)) throw new Error("invalid atlas collection name '".concat(n2, "'"));
            var r2 = this.collections.get(n2), a2 = ge({ type: e2, atlasCollection: r2 }, t2);
            this.renderTypes.set(e2, a2);
          }, "value") }, { key: "getRenderTypeOpts", value: /* @__PURE__ */ __name(function(e2) {
            return this.renderTypes.get(e2);
          }, "value") }, { key: "getAtlasCollection", value: /* @__PURE__ */ __name(function(e2) {
            return this.collections.get(e2);
          }, "value") }, { key: "_cacheScratchCanvas", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = -1, n2 = -1, r2 = null;
            return function(a2, i2, o2, s2) {
              return s2 ? (r2 && i2 == t2 && o2 == n2 || (t2 = i2, n2 = o2, r2 = e2(a2, i2, o2)), r2) : e2(a2, i2, o2);
            };
          }, "value") }, { key: "_key", value: /* @__PURE__ */ __name(function(e2, t2) {
            return "".concat(e2, "-").concat(t2);
          }, "value") }, { key: "invalidate", value: /* @__PURE__ */ __name(function(e2) {
            var t2, n2 = this, a2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, i2 = a2.forceRedraw, o2 = void 0 !== i2 && i2, s2 = a2.filterEle, l2 = void 0 === s2 ? function() {
              return true;
            } : s2, u2 = a2.filterType, c2 = void 0 === u2 ? function() {
              return true;
            } : u2, d2 = false, h2 = false, f2 = r(e2);
            try {
              for (f2.s(); !(t2 = f2.n()).done; ) {
                var p2 = t2.value;
                if (l2(p2)) {
                  var v2, g2 = r(this.renderTypes.values());
                  try {
                    var y2 = /* @__PURE__ */ __name(function() {
                      var e3 = v2.value, t3 = e3.type;
                      if (c2(t3)) {
                        var r2 = n2.collections.get(e3.collection), a3 = e3.getKey(p2), i3 = Array.isArray(a3) ? a3 : [a3];
                        if (o2) i3.forEach(function(e4) {
                          return r2.markKeyForGC(e4);
                        }), h2 = true;
                        else {
                          var s3 = e3.getID ? e3.getID(p2) : p2.id(), l3 = n2._key(t3, s3), u3 = n2.typeAndIdToKey.get(l3);
                          void 0 === u3 || Ud(i3, u3) || (d2 = true, n2.typeAndIdToKey.delete(l3), u3.forEach(function(e4) {
                            return r2.markKeyForGC(e4);
                          }));
                        }
                      }
                    }, "y");
                    for (g2.s(); !(v2 = g2.n()).done; ) y2();
                  } catch (e3) {
                    g2.e(e3);
                  } finally {
                    g2.f();
                  }
                }
              }
            } catch (e3) {
              f2.e(e3);
            } finally {
              f2.f();
            }
            return h2 && (this.gc(), d2 = false), d2;
          }, "value") }, { key: "gc", value: /* @__PURE__ */ __name(function() {
            var e2, t2 = r(this.collections.values());
            try {
              for (t2.s(); !(e2 = t2.n()).done; ) {
                e2.value.gc();
              }
            } catch (e3) {
              t2.e(e3);
            } finally {
              t2.f();
            }
          }, "value") }, { key: "getOrCreateAtlas", value: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            var a2 = this.renderTypes.get(t2), i2 = this.collections.get(a2.collection), o2 = false, s2 = i2.draw(r2, n2, function(t3) {
              a2.drawClipped ? (t3.save(), t3.beginPath(), t3.rect(0, 0, n2.w, n2.h), t3.clip(), a2.drawElement(t3, e2, n2, true, true), t3.restore()) : a2.drawElement(t3, e2, n2, true, true), o2 = true;
            });
            if (o2) {
              var l2 = a2.getID ? a2.getID(e2) : e2.id(), u2 = this._key(t2, l2);
              this.typeAndIdToKey.has(u2) ? this.typeAndIdToKey.get(u2).push(r2) : this.typeAndIdToKey.set(u2, [r2]);
            }
            return s2;
          }, "value") }, { key: "getAtlasInfo", value: /* @__PURE__ */ __name(function(e2, t2) {
            var n2 = this, r2 = this.renderTypes.get(t2), a2 = r2.getKey(e2);
            return (Array.isArray(a2) ? a2 : [a2]).map(function(a3) {
              var o2 = r2.getBoundingBox(e2, a3), s2 = n2.getOrCreateAtlas(e2, t2, o2, a3), l2 = i(s2.getOffsets(a3), 2), u2 = l2[0];
              return { atlas: s2, tex: u2, tex1: u2, tex2: l2[1], bb: o2 };
            });
          }, "value") }, { key: "getDebugInfo", value: /* @__PURE__ */ __name(function() {
            var e2, t2 = [], n2 = r(this.collections);
            try {
              for (n2.s(); !(e2 = n2.n()).done; ) {
                var a2 = i(e2.value, 2), o2 = a2[0], s2 = a2[1].getCounts(), l2 = s2.keyCount, u2 = s2.atlasCount;
                t2.push({ type: o2, keyCount: l2, atlasCount: u2 });
              }
            } catch (e3) {
              n2.e(e3);
            } finally {
              n2.f();
            }
            return t2;
          }, "value") }]);
        }(), uh = function() {
          return n(/* @__PURE__ */ __name(function e2(n2) {
            t(this, e2), this.globalOptions = n2, this.atlasSize = n2.webglTexSize, this.maxAtlasesPerBatch = n2.webglTexPerBatch, this.batchAtlases = [];
          }, "e"), [{ key: "getMaxAtlasesPerBatch", value: /* @__PURE__ */ __name(function() {
            return this.maxAtlasesPerBatch;
          }, "value") }, { key: "getAtlasSize", value: /* @__PURE__ */ __name(function() {
            return this.atlasSize;
          }, "value") }, { key: "getIndexArray", value: /* @__PURE__ */ __name(function() {
            return Array.from({ length: this.maxAtlasesPerBatch }, function(e2, t2) {
              return t2;
            });
          }, "value") }, { key: "startBatch", value: /* @__PURE__ */ __name(function() {
            this.batchAtlases = [];
          }, "value") }, { key: "getAtlasCount", value: /* @__PURE__ */ __name(function() {
            return this.batchAtlases.length;
          }, "value") }, { key: "getAtlases", value: /* @__PURE__ */ __name(function() {
            return this.batchAtlases;
          }, "value") }, { key: "canAddToCurrentBatch", value: /* @__PURE__ */ __name(function(e2) {
            return this.batchAtlases.length !== this.maxAtlasesPerBatch || this.batchAtlases.includes(e2);
          }, "value") }, { key: "getAtlasIndexForBatch", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = this.batchAtlases.indexOf(e2);
            if (t2 < 0) {
              if (this.batchAtlases.length === this.maxAtlasesPerBatch) throw new Error("cannot add more atlases to batch");
              this.batchAtlases.push(e2), t2 = this.batchAtlases.length - 1;
            }
            return t2;
          }, "value") }]);
        }(), ch = { SCREEN: { name: "screen", screen: true }, PICKING: { name: "picking", picking: true } }, dh = 1, hh = 2, fh = function() {
          return n(/* @__PURE__ */ __name(function e2(n2, r2, a2) {
            t(this, e2), this.r = n2, this.gl = r2, this.maxInstances = a2.webglBatchSize, this.atlasSize = a2.webglTexSize, this.bgColor = a2.bgColor, this.debug = a2.webglDebug, this.batchDebugInfo = [], a2.enableWrapping = true, a2.createTextureCanvas = Yd, this.atlasManager = new lh(n2, a2), this.batchManager = new uh(a2), this.simpleShapeOptions = /* @__PURE__ */ new Map(), this.program = this._createShaderProgram(ch.SCREEN), this.pickingProgram = this._createShaderProgram(ch.PICKING), this.vao = this._createVAO();
          }, "e"), [{ key: "addAtlasCollection", value: /* @__PURE__ */ __name(function(e2, t2) {
            this.atlasManager.addAtlasCollection(e2, t2);
          }, "value") }, { key: "addTextureAtlasRenderType", value: /* @__PURE__ */ __name(function(e2, t2) {
            this.atlasManager.addRenderType(e2, t2);
          }, "value") }, { key: "addSimpleShapeRenderType", value: /* @__PURE__ */ __name(function(e2, t2) {
            this.simpleShapeOptions.set(e2, t2);
          }, "value") }, { key: "invalidate", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).type, n2 = this.atlasManager;
            return t2 ? n2.invalidate(e2, { filterType: /* @__PURE__ */ __name(function(e3) {
              return e3 === t2;
            }, "filterType"), forceRedraw: true }) : n2.invalidate(e2);
          }, "value") }, { key: "gc", value: /* @__PURE__ */ __name(function() {
            this.atlasManager.gc();
          }, "value") }, { key: "_createShaderProgram", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = this.gl, n2 = "#version 300 es\n      precision highp float;\n\n      uniform mat3 uPanZoomMatrix;\n      uniform int  uAtlasSize;\n      \n      // instanced\n      in vec2 aPosition; // a vertex from the unit square\n      \n      in mat3 aTransform; // used to transform verticies, eg into a bounding box\n      in int aVertType; // the type of thing we are rendering\n\n      // the z-index that is output when using picking mode\n      in vec4 aIndex;\n      \n      // For textures\n      in int aAtlasId; // which shader unit/atlas to use\n      in vec4 aTex; // x/y/w/h of texture in atlas\n\n      // for edges\n      in vec4 aPointAPointB;\n      in vec4 aPointCPointD;\n      in vec2 aLineWidth; // also used for node border width\n\n      // simple shapes\n      in vec4 aCornerRadius; // for round-rectangle [top-right, bottom-right, top-left, bottom-left]\n      in vec4 aColor; // also used for edges\n      in vec4 aBorderColor; // aLineWidth is used for border width\n\n      // output values passed to the fragment shader\n      out vec2 vTexCoord;\n      out vec4 vColor;\n      out vec2 vPosition;\n      // flat values are not interpolated\n      flat out int vAtlasId; \n      flat out int vVertType;\n      flat out vec2 vTopRight;\n      flat out vec2 vBotLeft;\n      flat out vec4 vCornerRadius;\n      flat out vec4 vBorderColor;\n      flat out vec2 vBorderWidth;\n      flat out vec4 vIndex;\n      \n      void main(void) {\n        int vid = gl_VertexID;\n        vec2 position = aPosition; // TODO make this a vec3, simplifies some code below\n\n        if(aVertType == ".concat(0, ") {\n          float texX = aTex.x; // texture coordinates\n          float texY = aTex.y;\n          float texW = aTex.z;\n          float texH = aTex.w;\n\n          if(vid == 1 || vid == 2 || vid == 4) {\n            texX += texW;\n          }\n          if(vid == 2 || vid == 4 || vid == 5) {\n            texY += texH;\n          }\n\n          float d = float(uAtlasSize);\n          vTexCoord = vec2(texX / d, texY / d); // tex coords must be between 0 and 1\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n        }\n        else if(aVertType == ").concat(4, " || aVertType == ").concat(7, " \n             || aVertType == ").concat(5, " || aVertType == ").concat(6, ") { // simple shapes\n\n          // the bounding box is needed by the fragment shader\n          vBotLeft  = (aTransform * vec3(0, 0, 1)).xy; // flat\n          vTopRight = (aTransform * vec3(1, 1, 1)).xy; // flat\n          vPosition = (aTransform * vec3(position, 1)).xy; // will be interpolated\n\n          // calculations are done in the fragment shader, just pass these along\n          vColor = aColor;\n          vCornerRadius = aCornerRadius;\n          vBorderColor = aBorderColor;\n          vBorderWidth = aLineWidth;\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n        }\n        else if(aVertType == ").concat(1, ") {\n          vec2 source = aPointAPointB.xy;\n          vec2 target = aPointAPointB.zw;\n\n          // adjust the geometry so that the line is centered on the edge\n          position.y = position.y - 0.5;\n\n          // stretch the unit square into a long skinny rectangle\n          vec2 xBasis = target - source;\n          vec2 yBasis = normalize(vec2(-xBasis.y, xBasis.x));\n          vec2 point = source + xBasis * position.x + yBasis * aLineWidth[0] * position.y;\n\n          gl_Position = vec4(uPanZoomMatrix * vec3(point, 1.0), 1.0);\n          vColor = aColor;\n        } \n        else if(aVertType == ").concat(2, ") {\n          vec2 pointA = aPointAPointB.xy;\n          vec2 pointB = aPointAPointB.zw;\n          vec2 pointC = aPointCPointD.xy;\n          vec2 pointD = aPointCPointD.zw;\n\n          // adjust the geometry so that the line is centered on the edge\n          position.y = position.y - 0.5;\n\n          vec2 p0, p1, p2, pos;\n          if(position.x == 0.0) { // The left side of the unit square\n            p0 = pointA;\n            p1 = pointB;\n            p2 = pointC;\n            pos = position;\n          } else { // The right side of the unit square, use same approach but flip the geometry upside down\n            p0 = pointD;\n            p1 = pointC;\n            p2 = pointB;\n            pos = vec2(0.0, -position.y);\n          }\n\n          vec2 p01 = p1 - p0;\n          vec2 p12 = p2 - p1;\n          vec2 p21 = p1 - p2;\n\n          // Find the normal vector.\n          vec2 tangent = normalize(normalize(p12) + normalize(p01));\n          vec2 normal = vec2(-tangent.y, tangent.x);\n\n          // Find the vector perpendicular to p0 -> p1.\n          vec2 p01Norm = normalize(vec2(-p01.y, p01.x));\n\n          // Determine the bend direction.\n          float sigma = sign(dot(p01 + p21, normal));\n          float width = aLineWidth[0];\n\n          if(sign(pos.y) == -sigma) {\n            // This is an intersecting vertex. Adjust the position so that there's no overlap.\n            vec2 point = 0.5 * width * normal * -sigma / dot(normal, p01Norm);\n            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);\n          } else {\n            // This is a non-intersecting vertex. Treat it like a mitre join.\n            vec2 point = 0.5 * width * normal * sigma * dot(normal, p01Norm);\n            gl_Position = vec4(uPanZoomMatrix * vec3(p1 + point, 1.0), 1.0);\n          }\n\n          vColor = aColor;\n        } \n        else if(aVertType == ").concat(3, " && vid < 3) {\n          // massage the first triangle into an edge arrow\n          if(vid == 0)\n            position = vec2(-0.15, -0.3);\n          if(vid == 1)\n            position = vec2(  0.0,  0.0);\n          if(vid == 2)\n            position = vec2( 0.15, -0.3);\n\n          gl_Position = vec4(uPanZoomMatrix * aTransform * vec3(position, 1.0), 1.0);\n          vColor = aColor;\n        }\n        else {\n          gl_Position = vec4(2.0, 0.0, 0.0, 1.0); // discard vertex by putting it outside webgl clip space\n        }\n\n        vAtlasId = aAtlasId;\n        vVertType = aVertType;\n        vIndex = aIndex;\n      }\n    "), r2 = this.batchManager.getIndexArray(), a2 = "#version 300 es\n      precision highp float;\n\n      // declare texture unit for each texture atlas in the batch\n      ".concat(r2.map(function(e3) {
              return "uniform sampler2D uTexture".concat(e3, ";");
            }).join("\n	"), "\n\n      uniform vec4 uBGColor;\n      uniform float uZoom;\n\n      in vec2 vTexCoord;\n      in vec4 vColor;\n      in vec2 vPosition; // model coordinates\n\n      flat in int vAtlasId;\n      flat in vec4 vIndex;\n      flat in int vVertType;\n      flat in vec2 vTopRight;\n      flat in vec2 vBotLeft;\n      flat in vec4 vCornerRadius;\n      flat in vec4 vBorderColor;\n      flat in vec2 vBorderWidth;\n\n      out vec4 outColor;\n\n      ").concat("\n  float circleSD(vec2 p, float r) {\n    return distance(vec2(0), p) - r; // signed distance\n  }\n", "\n      ").concat("\n  float rectangleSD(vec2 p, vec2 b) {\n    vec2 d = abs(p)-b;\n    return distance(vec2(0),max(d,0.0)) + min(max(d.x,d.y),0.0);\n  }\n", "\n      ").concat("\n  float roundRectangleSD(vec2 p, vec2 b, vec4 cr) {\n    cr.xy = (p.x > 0.0) ? cr.xy : cr.zw;\n    cr.x  = (p.y > 0.0) ? cr.x  : cr.y;\n    vec2 q = abs(p) - b + cr.x;\n    return min(max(q.x, q.y), 0.0) + distance(vec2(0), max(q, 0.0)) - cr.x;\n  }\n", "\n      ").concat("\n  float ellipseSD(vec2 p, vec2 ab) {\n    p = abs( p ); // symmetry\n\n    // find root with Newton solver\n    vec2 q = ab*(p-ab);\n    float w = (q.x<q.y)? 1.570796327 : 0.0;\n    for( int i=0; i<5; i++ ) {\n      vec2 cs = vec2(cos(w),sin(w));\n      vec2 u = ab*vec2( cs.x,cs.y);\n      vec2 v = ab*vec2(-cs.y,cs.x);\n      w = w + dot(p-u,v)/(dot(p-u,u)+dot(v,v));\n    }\n    \n    // compute final point and distance\n    float d = length(p-ab*vec2(cos(w),sin(w)));\n    \n    // return signed distance\n    return (dot(p/ab,p/ab)>1.0) ? d : -d;\n  }\n", "\n\n      vec4 blend(vec4 top, vec4 bot) { // blend colors with premultiplied alpha\n        return vec4( \n          top.rgb + (bot.rgb * (1.0 - top.a)),\n          top.a   + (bot.a   * (1.0 - top.a)) \n        );\n      }\n\n      vec4 distInterp(vec4 cA, vec4 cB, float d) { // interpolate color using Signed Distance\n        // scale to the zoom level so that borders don't look blurry when zoomed in\n        // note 1.5 is an aribitrary value chosen because it looks good\n        return mix(cA, cB, 1.0 - smoothstep(0.0, 1.5 / uZoom, abs(d))); \n      }\n\n      void main(void) {\n        if(vVertType == ").concat(0, ") {\n          // look up the texel from the texture unit\n          ").concat(r2.map(function(e3) {
              return "if(vAtlasId == ".concat(e3, ") outColor = texture(uTexture").concat(e3, ", vTexCoord);");
            }).join("\n	else "), "\n        } \n        else if(vVertType == ").concat(3, ") {\n          // mimics how canvas renderer uses context.globalCompositeOperation = 'destination-out';\n          outColor = blend(vColor, uBGColor);\n          outColor.a = 1.0; // make opaque, masks out line under arrow\n        }\n        else if(vVertType == ").concat(4, " && vBorderWidth == vec2(0.0)) { // simple rectangle with no border\n          outColor = vColor; // unit square is already transformed to the rectangle, nothing else needs to be done\n        }\n        else if(vVertType == ").concat(4, " || vVertType == ").concat(7, " \n          || vVertType == ").concat(5, " || vVertType == ").concat(6, ") { // use SDF\n\n          float outerBorder = vBorderWidth[0];\n          float innerBorder = vBorderWidth[1];\n          float borderPadding = outerBorder * 2.0;\n          float w = vTopRight.x - vBotLeft.x - borderPadding;\n          float h = vTopRight.y - vBotLeft.y - borderPadding;\n          vec2 b = vec2(w/2.0, h/2.0); // half width, half height\n          vec2 p = vPosition - vec2(vTopRight.x - b[0] - outerBorder, vTopRight.y - b[1] - outerBorder); // translate to center\n\n          float d; // signed distance\n          if(vVertType == ").concat(4, ") {\n            d = rectangleSD(p, b);\n          } else if(vVertType == ").concat(7, " && w == h) {\n            d = circleSD(p, b.x); // faster than ellipse\n          } else if(vVertType == ").concat(7, ") {\n            d = ellipseSD(p, b);\n          } else {\n            d = roundRectangleSD(p, b, vCornerRadius.wzyx);\n          }\n\n          // use the distance to interpolate a color to smooth the edges of the shape, doesn't need multisampling\n          // we must smooth colors inwards, because we can't change pixels outside the shape's bounding box\n          if(d > 0.0) {\n            if(d > outerBorder) {\n              discard;\n            } else {\n              outColor = distInterp(vBorderColor, vec4(0), d - outerBorder);\n            }\n          } else {\n            if(d > innerBorder) {\n              vec4 outerColor = outerBorder == 0.0 ? vec4(0) : vBorderColor;\n              vec4 innerBorderColor = blend(vBorderColor, vColor);\n              outColor = distInterp(innerBorderColor, outerColor, d);\n            } \n            else {\n              vec4 outerColor;\n              if(innerBorder == 0.0 && outerBorder == 0.0) {\n                outerColor = vec4(0);\n              } else if(innerBorder == 0.0) {\n                outerColor = vBorderColor;\n              } else {\n                outerColor = blend(vBorderColor, vColor);\n              }\n              outColor = distInterp(vColor, outerColor, d - innerBorder);\n            }\n          }\n        }\n        else {\n          outColor = vColor;\n        }\n\n        ").concat(e2.picking ? "if(outColor.a == 0.0) discard;\n             else outColor = vIndex;" : "", "\n      }\n    "), i2 = function(e3, t3, n3) {
              var r3 = jd(e3, e3.VERTEX_SHADER, t3), a3 = jd(e3, e3.FRAGMENT_SHADER, n3), i3 = e3.createProgram();
              if (e3.attachShader(i3, r3), e3.attachShader(i3, a3), e3.linkProgram(i3), !e3.getProgramParameter(i3, e3.LINK_STATUS)) throw new Error("Could not initialize shaders");
              return i3;
            }(t2, n2, a2);
            i2.aPosition = t2.getAttribLocation(i2, "aPosition"), i2.aIndex = t2.getAttribLocation(i2, "aIndex"), i2.aVertType = t2.getAttribLocation(i2, "aVertType"), i2.aTransform = t2.getAttribLocation(i2, "aTransform"), i2.aAtlasId = t2.getAttribLocation(i2, "aAtlasId"), i2.aTex = t2.getAttribLocation(i2, "aTex"), i2.aPointAPointB = t2.getAttribLocation(i2, "aPointAPointB"), i2.aPointCPointD = t2.getAttribLocation(i2, "aPointCPointD"), i2.aLineWidth = t2.getAttribLocation(i2, "aLineWidth"), i2.aColor = t2.getAttribLocation(i2, "aColor"), i2.aCornerRadius = t2.getAttribLocation(i2, "aCornerRadius"), i2.aBorderColor = t2.getAttribLocation(i2, "aBorderColor"), i2.uPanZoomMatrix = t2.getUniformLocation(i2, "uPanZoomMatrix"), i2.uAtlasSize = t2.getUniformLocation(i2, "uAtlasSize"), i2.uBGColor = t2.getUniformLocation(i2, "uBGColor"), i2.uZoom = t2.getUniformLocation(i2, "uZoom"), i2.uTextures = [];
            for (var o2 = 0; o2 < this.batchManager.getMaxAtlasesPerBatch(); o2++) i2.uTextures.push(t2.getUniformLocation(i2, "uTexture".concat(o2)));
            return i2;
          }, "value") }, { key: "_createVAO", value: /* @__PURE__ */ __name(function() {
            var e2 = [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1];
            this.vertexCount = e2.length / 2;
            var t2 = this.maxInstances, n2 = this.gl, r2 = this.program, a2 = n2.createVertexArray();
            return n2.bindVertexArray(a2), function(e3, t3, n3, r3) {
              var a3 = i(Zd(e3, t3), 2), o2 = a3[0], s2 = a3[1], l2 = $d(e3, s2, r3), u2 = e3.createBuffer();
              e3.bindBuffer(e3.ARRAY_BUFFER, u2), e3.bufferData(e3.ARRAY_BUFFER, l2, e3.STATIC_DRAW), s2 === e3.FLOAT ? e3.vertexAttribPointer(n3, o2, s2, false, 0, 0) : s2 === e3.INT && e3.vertexAttribIPointer(n3, o2, s2, 0, 0), e3.enableVertexAttribArray(n3), e3.bindBuffer(e3.ARRAY_BUFFER, null);
            }(n2, "vec2", r2.aPosition, e2), this.transformBuffer = function(e3, t3, n3) {
              for (var r3 = new Float32Array(9 * t3), a3 = new Array(t3), i2 = 0; i2 < t3; i2++) {
                var o2 = 9 * i2 * 4;
                a3[i2] = new Float32Array(r3.buffer, o2, 9);
              }
              var s2 = e3.createBuffer();
              e3.bindBuffer(e3.ARRAY_BUFFER, s2), e3.bufferData(e3.ARRAY_BUFFER, r3.byteLength, e3.DYNAMIC_DRAW);
              for (var l2 = 0; l2 < 3; l2++) {
                var u2 = n3 + l2;
                e3.enableVertexAttribArray(u2), e3.vertexAttribPointer(u2, 3, e3.FLOAT, false, 36, 12 * l2), e3.vertexAttribDivisor(u2, 1);
              }
              return e3.bindBuffer(e3.ARRAY_BUFFER, null), s2.getMatrixView = function(e4) {
                return a3[e4];
              }, s2.setData = function(e4, t4) {
                a3[t4].set(e4, 0);
              }, s2.bufferSubData = function() {
                e3.bindBuffer(e3.ARRAY_BUFFER, s2), e3.bufferSubData(e3.ARRAY_BUFFER, 0, r3);
              }, s2;
            }(n2, t2, r2.aTransform), this.indexBuffer = Jd(n2, t2, "vec4", r2.aIndex), this.vertTypeBuffer = Jd(n2, t2, "int", r2.aVertType), this.atlasIdBuffer = Jd(n2, t2, "int", r2.aAtlasId), this.texBuffer = Jd(n2, t2, "vec4", r2.aTex), this.pointAPointBBuffer = Jd(n2, t2, "vec4", r2.aPointAPointB), this.pointCPointDBuffer = Jd(n2, t2, "vec4", r2.aPointCPointD), this.lineWidthBuffer = Jd(n2, t2, "vec2", r2.aLineWidth), this.colorBuffer = Jd(n2, t2, "vec4", r2.aColor), this.cornerRadiusBuffer = Jd(n2, t2, "vec4", r2.aCornerRadius), this.borderColorBuffer = Jd(n2, t2, "vec4", r2.aBorderColor), n2.bindVertexArray(null), a2;
          }, "value") }, { key: "buffers", get: /* @__PURE__ */ __name(function() {
            var e2 = this;
            return this._buffers || (this._buffers = Object.keys(this).filter(function(e3) {
              return ue(e3, "Buffer");
            }).map(function(t2) {
              return e2[t2];
            })), this._buffers;
          }, "get") }, { key: "startFrame", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ch.SCREEN;
            this.panZoomMatrix = e2, this.renderTarget = t2, this.batchDebugInfo = [], this.wrappedCount = 0, this.simpleCount = 0, this.startBatch();
          }, "value") }, { key: "startBatch", value: /* @__PURE__ */ __name(function() {
            this.instanceCount = 0, this.batchManager.startBatch();
          }, "value") }, { key: "endFrame", value: /* @__PURE__ */ __name(function() {
            this.endBatch();
          }, "value") }, { key: "_isVisible", value: /* @__PURE__ */ __name(function(e2, t2) {
            return !!e2.visible() && (!t2 || !t2.isVisible || t2.isVisible(e2));
          }, "value") }, { key: "drawTexture", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var a2 = this.atlasManager, o2 = this.batchManager, s2 = a2.getRenderTypeOpts(n2);
            if (this._isVisible(e2, s2) && (!e2.isEdge() || this._isValidEdge(e2))) {
              if (this.renderTarget.picking && s2.getTexPickingMode) {
                var l2 = s2.getTexPickingMode(e2);
                if (l2 === dh) return;
                if (l2 == hh) return void this.drawPickingRectangle(e2, t2, n2);
              }
              var u2, c2 = r(a2.getAtlasInfo(e2, n2));
              try {
                for (c2.s(); !(u2 = c2.n()).done; ) {
                  var d2 = u2.value, h2 = d2.atlas, f2 = d2.tex1, p2 = d2.tex2;
                  o2.canAddToCurrentBatch(h2) || this.endBatch();
                  for (var v2 = o2.getAtlasIndexForBatch(h2), g2 = 0, y2 = [[f2, true], [p2, false]]; g2 < y2.length; g2++) {
                    var m2 = i(y2[g2], 2), b2 = m2[0], x2 = m2[1];
                    if (0 != b2.w) {
                      var w2 = this.instanceCount;
                      this.vertTypeBuffer.getView(w2)[0] = 0, Kd(t2, this.indexBuffer.getView(w2)), this.atlasIdBuffer.getView(w2)[0] = v2;
                      var E2 = this.texBuffer.getView(w2);
                      E2[0] = b2.x, E2[1] = b2.y, E2[2] = b2.w, E2[3] = b2.h;
                      var k2 = this.transformBuffer.getMatrixView(w2);
                      this.setTransformMatrix(e2, k2, s2, d2, x2), this.instanceCount++, x2 || this.wrappedCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                    }
                  }
                }
              } catch (e3) {
                c2.e(e3);
              } finally {
                c2.f();
              }
            }
          }, "value") }, { key: "setTransformMatrix", value: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            var a2 = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], i2 = 0;
            if (n2.shapeProps && n2.shapeProps.padding && (i2 = e2.pstyle(n2.shapeProps.padding).pfValue), r2) {
              var o2 = r2.bb, s2 = r2.tex1, l2 = r2.tex2, u2 = s2.w / (s2.w + l2.w);
              a2 || (u2 = 1 - u2);
              var c2 = this._getAdjustedBB(o2, i2, a2, u2);
              this._applyTransformMatrix(t2, c2, n2, e2);
            } else {
              var d2 = n2.getBoundingBox(e2), h2 = this._getAdjustedBB(d2, i2, true, 1);
              this._applyTransformMatrix(t2, h2, n2, e2);
            }
          }, "value") }, { key: "_applyTransformMatrix", value: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            var a2, i2;
            nh(e2);
            var o2 = n2.getRotation ? n2.getRotation(r2) : 0;
            if (0 !== o2) {
              var s2 = n2.getRotationPoint(r2);
              rh(e2, e2, [s2.x, s2.y]), ah(e2, e2, o2);
              var l2 = n2.getRotationOffset(r2);
              a2 = l2.x + (t2.xOffset || 0), i2 = l2.y + (t2.yOffset || 0);
            } else a2 = t2.x1, i2 = t2.y1;
            rh(e2, e2, [a2, i2]), ih(e2, e2, [t2.w, t2.h]);
          }, "value") }, { key: "_getAdjustedBB", value: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            var a2 = e2.x1, i2 = e2.y1, o2 = e2.w, s2 = e2.h;
            t2 && (a2 -= t2, i2 -= t2, o2 += 2 * t2, s2 += 2 * t2);
            var l2 = 0, u2 = o2 * r2;
            return n2 && r2 < 1 ? o2 = u2 : !n2 && r2 < 1 && (a2 += l2 = o2 - u2, o2 = u2), { x1: a2, y1: i2, w: o2, h: s2, xOffset: l2, yOffset: e2.yOffset };
          }, "value") }, { key: "drawPickingRectangle", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = this.atlasManager.getRenderTypeOpts(n2), a2 = this.instanceCount;
            this.vertTypeBuffer.getView(a2)[0] = 4, Kd(t2, this.indexBuffer.getView(a2)), Hd([0, 0, 0], 1, this.colorBuffer.getView(a2));
            var i2 = this.transformBuffer.getMatrixView(a2);
            this.setTransformMatrix(e2, i2, r2), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
          }, "value") }, { key: "drawNode", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = this.simpleShapeOptions.get(n2);
            if (this._isVisible(e2, r2)) {
              var a2 = r2.shapeProps, i2 = this._getVertTypeForShape(e2, a2.shape);
              if (void 0 === i2 || r2.isSimple && !r2.isSimple(e2)) this.drawTexture(e2, t2, n2);
              else {
                var o2 = this.instanceCount;
                if (this.vertTypeBuffer.getView(o2)[0] = i2, 5 === i2 || 6 === i2) {
                  var s2 = r2.getBoundingBox(e2), l2 = this._getCornerRadius(e2, a2.radius, s2), u2 = this.cornerRadiusBuffer.getView(o2);
                  u2[0] = l2, u2[1] = l2, u2[2] = l2, u2[3] = l2, 6 === i2 && (u2[0] = 0, u2[2] = 0);
                }
                Kd(t2, this.indexBuffer.getView(o2)), Hd(e2.pstyle(a2.color).value, e2.pstyle(a2.opacity).value, this.colorBuffer.getView(o2));
                var c2 = this.lineWidthBuffer.getView(o2);
                if (c2[0] = 0, c2[1] = 0, a2.border) {
                  var d2 = e2.pstyle("border-width").value;
                  if (d2 > 0) {
                    Hd(e2.pstyle("border-color").value, e2.pstyle("border-opacity").value, this.borderColorBuffer.getView(o2));
                    var h2 = e2.pstyle("border-position").value;
                    if ("inside" === h2) c2[0] = 0, c2[1] = -d2;
                    else if ("outside" === h2) c2[0] = d2, c2[1] = 0;
                    else {
                      var f2 = d2 / 2;
                      c2[0] = f2, c2[1] = -f2;
                    }
                  }
                }
                var p2 = this.transformBuffer.getMatrixView(o2);
                this.setTransformMatrix(e2, p2, r2), this.simpleCount++, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
              }
            }
          }, "value") }, { key: "_getVertTypeForShape", value: /* @__PURE__ */ __name(function(e2, t2) {
            switch (e2.pstyle(t2).value) {
              case "rectangle":
                return 4;
              case "ellipse":
                return 7;
              case "roundrectangle":
              case "round-rectangle":
                return 5;
              case "bottom-round-rectangle":
                return 6;
              default:
                return;
            }
          }, "value") }, { key: "_getCornerRadius", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            var r2 = n2.w, a2 = n2.h;
            if ("auto" === e2.pstyle(t2).value) return _n(r2, a2);
            var i2 = e2.pstyle(t2).pfValue, o2 = r2 / 2, s2 = a2 / 2;
            return Math.min(i2, s2, o2);
          }, "value") }, { key: "drawEdgeArrow", value: /* @__PURE__ */ __name(function(e2, t2, n2) {
            if (e2.visible()) {
              var r2, a2, i2, o2 = e2._private.rscratch;
              if ("source" === n2 ? (r2 = o2.arrowStartX, a2 = o2.arrowStartY, i2 = o2.srcArrowAngle) : (r2 = o2.arrowEndX, a2 = o2.arrowEndY, i2 = o2.tgtArrowAngle), !(isNaN(r2) || null == r2 || isNaN(a2) || null == a2 || isNaN(i2) || null == i2)) {
                if ("none" !== e2.pstyle(n2 + "-arrow-shape").value) {
                  var s2 = e2.pstyle(n2 + "-arrow-color").value, l2 = e2.pstyle("opacity").value * e2.pstyle("line-opacity").value, u2 = e2.pstyle("width").pfValue, c2 = e2.pstyle("arrow-scale").value, d2 = this.r.getArrowWidth(u2, c2), h2 = this.instanceCount, f2 = this.transformBuffer.getMatrixView(h2);
                  nh(f2), rh(f2, f2, [r2, a2]), ih(f2, f2, [d2, d2]), ah(f2, f2, i2), this.vertTypeBuffer.getView(h2)[0] = 3, Kd(t2, this.indexBuffer.getView(h2)), Hd(s2, l2, this.colorBuffer.getView(h2)), this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                }
              }
            }
          }, "value") }, { key: "drawEdgeLine", value: /* @__PURE__ */ __name(function(e2, t2) {
            if (e2.visible()) {
              var n2 = this._getEdgePoints(e2);
              if (n2) {
                var r2 = e2.pstyle("opacity").value, a2 = e2.pstyle("line-opacity").value, i2 = e2.pstyle("width").pfValue, o2 = e2.pstyle("line-color").value, s2 = r2 * a2;
                if (n2.length / 2 + this.instanceCount > this.maxInstances && this.endBatch(), 4 == n2.length) {
                  var l2 = this.instanceCount;
                  this.vertTypeBuffer.getView(l2)[0] = 1, Kd(t2, this.indexBuffer.getView(l2)), Hd(o2, s2, this.colorBuffer.getView(l2)), this.lineWidthBuffer.getView(l2)[0] = i2;
                  var u2 = this.pointAPointBBuffer.getView(l2);
                  u2[0] = n2[0], u2[1] = n2[1], u2[2] = n2[2], u2[3] = n2[3], this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                } else for (var c2 = 0; c2 < n2.length - 2; c2 += 2) {
                  var d2 = this.instanceCount;
                  this.vertTypeBuffer.getView(d2)[0] = 2, Kd(t2, this.indexBuffer.getView(d2)), Hd(o2, s2, this.colorBuffer.getView(d2)), this.lineWidthBuffer.getView(d2)[0] = i2;
                  var h2 = n2[c2 - 2], f2 = n2[c2 - 1], p2 = n2[c2], v2 = n2[c2 + 1], g2 = n2[c2 + 2], y2 = n2[c2 + 3], m2 = n2[c2 + 4], b2 = n2[c2 + 5];
                  0 == c2 && (h2 = 2 * p2 - g2 + 1e-3, f2 = 2 * v2 - y2 + 1e-3), c2 == n2.length - 4 && (m2 = 2 * g2 - p2 + 1e-3, b2 = 2 * y2 - v2 + 1e-3);
                  var x2 = this.pointAPointBBuffer.getView(d2);
                  x2[0] = h2, x2[1] = f2, x2[2] = p2, x2[3] = v2;
                  var w2 = this.pointCPointDBuffer.getView(d2);
                  w2[0] = g2, w2[1] = y2, w2[2] = m2, w2[3] = b2, this.instanceCount++, this.instanceCount >= this.maxInstances && this.endBatch();
                }
              }
            }
          }, "value") }, { key: "_isValidEdge", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2._private.rscratch;
            return !t2.badLine && null != t2.allpts && !isNaN(t2.allpts[0]);
          }, "value") }, { key: "_getEdgePoints", value: /* @__PURE__ */ __name(function(e2) {
            var t2 = e2._private.rscratch;
            if (this._isValidEdge(e2)) {
              var n2 = t2.allpts;
              if (4 == n2.length) return n2;
              var r2 = this._getNumSegments(e2);
              return this._getCurveSegmentPoints(n2, r2);
            }
          }, "value") }, { key: "_getNumSegments", value: /* @__PURE__ */ __name(function(e2) {
            return Math.min(Math.max(15, 5), this.maxInstances);
          }, "value") }, { key: "_getCurveSegmentPoints", value: /* @__PURE__ */ __name(function(e2, t2) {
            if (4 == e2.length) return e2;
            for (var n2 = Array(2 * (t2 + 1)), r2 = 0; r2 <= t2; r2++) if (0 == r2) n2[0] = e2[0], n2[1] = e2[1];
            else if (r2 == t2) n2[2 * r2] = e2[e2.length - 2], n2[2 * r2 + 1] = e2[e2.length - 1];
            else {
              var a2 = r2 / t2;
              this._setCurvePoint(e2, a2, n2, 2 * r2);
            }
            return n2;
          }, "value") }, { key: "_setCurvePoint", value: /* @__PURE__ */ __name(function(e2, t2, n2, r2) {
            if (!(e2.length <= 2)) {
              for (var a2 = Array(e2.length - 2), i2 = 0; i2 < a2.length; i2 += 2) {
                var o2 = (1 - t2) * e2[i2] + t2 * e2[i2 + 2], s2 = (1 - t2) * e2[i2 + 1] + t2 * e2[i2 + 3];
                a2[i2] = o2, a2[i2 + 1] = s2;
              }
              return this._setCurvePoint(a2, t2, n2, r2);
            }
            n2[r2] = e2[0], n2[r2 + 1] = e2[1];
          }, "value") }, { key: "endBatch", value: /* @__PURE__ */ __name(function() {
            var e2 = this.gl, t2 = this.vao, n2 = this.vertexCount, a2 = this.instanceCount;
            if (0 !== a2) {
              var i2 = this.renderTarget.picking ? this.pickingProgram : this.program;
              e2.useProgram(i2), e2.bindVertexArray(t2);
              var o2, s2 = r(this.buffers);
              try {
                for (s2.s(); !(o2 = s2.n()).done; ) {
                  o2.value.bufferSubData(a2);
                }
              } catch (e3) {
                s2.e(e3);
              } finally {
                s2.f();
              }
              for (var l2, u2, c2 = this.batchManager.getAtlases(), d2 = 0; d2 < c2.length; d2++) c2[d2].bufferIfNeeded(e2);
              for (var h2 = 0; h2 < c2.length; h2++) e2.activeTexture(e2.TEXTURE0 + h2), e2.bindTexture(e2.TEXTURE_2D, c2[h2].texture), e2.uniform1i(i2.uTextures[h2], h2);
              e2.uniform1f(i2.uZoom, (l2 = this.r, u2 = l2.pixelRatio, l2.cy.zoom() * u2)), e2.uniformMatrix3fv(i2.uPanZoomMatrix, false, this.panZoomMatrix), e2.uniform1i(i2.uAtlasSize, this.batchManager.getAtlasSize());
              var f2 = Hd(this.bgColor, 1);
              e2.uniform4fv(i2.uBGColor, f2), e2.drawArraysInstanced(e2.TRIANGLES, 0, n2, a2), e2.bindVertexArray(null), e2.bindTexture(e2.TEXTURE_2D, null), this.debug && this.batchDebugInfo.push({ count: a2, atlasCount: c2.length }), this.startBatch();
            }
          }, "value") }, { key: "getDebugInfo", value: /* @__PURE__ */ __name(function() {
            var e2 = this.atlasManager.getDebugInfo(), t2 = e2.reduce(function(e3, t3) {
              return e3 + t3.atlasCount;
            }, 0), n2 = this.batchDebugInfo, r2 = n2.reduce(function(e3, t3) {
              return e3 + t3.count;
            }, 0);
            return { atlasInfo: e2, totalAtlases: t2, wrappedCount: this.wrappedCount, simpleCount: this.simpleCount, batchCount: n2.length, batchInfo: n2, totalInstances: r2 };
          }, "value") }]);
        }(), ph = {};
        function vh(e2, t2) {
          var n2 = e2._private.rscratch;
          return ht(n2, "labelWrapCachedLines", t2) || [];
        }
        __name(vh, "vh");
        ph.initWebgl = function(e2, t2) {
          var n2 = this, a2 = n2.data.contexts[n2.WEBGL];
          e2.bgColor = function(e3) {
            var t3 = e3.cy.container(), n3 = t3 && t3.style && t3.style.backgroundColor || "white";
            return ye(n3);
          }(n2), e2.webglTexSize = Math.min(e2.webglTexSize, a2.getParameter(a2.MAX_TEXTURE_SIZE)), e2.webglTexRows = Math.min(e2.webglTexRows, 54), e2.webglTexRowsNodes = Math.min(e2.webglTexRowsNodes, 54), e2.webglBatchSize = Math.min(e2.webglBatchSize, 16384), e2.webglTexPerBatch = Math.min(e2.webglTexPerBatch, a2.getParameter(a2.MAX_TEXTURE_IMAGE_UNITS)), n2.webglDebug = e2.webglDebug, n2.webglDebugShowAtlases = e2.webglDebugShowAtlases, n2.pickingFrameBuffer = function(e3) {
            var t3 = e3.createFramebuffer();
            e3.bindFramebuffer(e3.FRAMEBUFFER, t3);
            var n3 = e3.createTexture();
            return e3.bindTexture(e3.TEXTURE_2D, n3), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_MIN_FILTER, e3.LINEAR), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_WRAP_S, e3.CLAMP_TO_EDGE), e3.texParameteri(e3.TEXTURE_2D, e3.TEXTURE_WRAP_T, e3.CLAMP_TO_EDGE), e3.framebufferTexture2D(e3.FRAMEBUFFER, e3.COLOR_ATTACHMENT0, e3.TEXTURE_2D, n3, 0), e3.bindFramebuffer(e3.FRAMEBUFFER, null), t3.setFramebufferAttachmentSizes = function(t4, r2) {
              e3.bindTexture(e3.TEXTURE_2D, n3), e3.texImage2D(e3.TEXTURE_2D, 0, e3.RGBA, t4, r2, 0, e3.RGBA, e3.UNSIGNED_BYTE, null);
            }, t3;
          }(a2), n2.pickingFrameBuffer.needsDraw = true, n2.drawing = new fh(n2, a2, e2);
          var o2 = /* @__PURE__ */ __name(function(e3) {
            return function(t3) {
              return n2.getTextAngle(t3, e3);
            };
          }, "o"), s2 = /* @__PURE__ */ __name(function(e3) {
            return function(t3) {
              var n3 = t3.pstyle(e3);
              return n3 && n3.value;
            };
          }, "s"), l2 = /* @__PURE__ */ __name(function(e3) {
            return function(t3) {
              return t3.pstyle("".concat(e3, "-opacity")).value > 0;
            };
          }, "l"), u2 = /* @__PURE__ */ __name(function(e3) {
            return "yes" === e3.pstyle("text-events").strValue ? hh : dh;
          }, "u"), c2 = /* @__PURE__ */ __name(function(e3) {
            var t3 = e3.position(), n3 = t3.x, r2 = t3.y, a3 = e3.outerWidth(), i2 = e3.outerHeight();
            return { w: a3, h: i2, x1: n3 - a3 / 2, y1: r2 - i2 / 2 };
          }, "c");
          n2.drawing.addAtlasCollection("node", { texRows: e2.webglTexRowsNodes }), n2.drawing.addAtlasCollection("label", { texRows: e2.webglTexRows }), n2.drawing.addTextureAtlasRenderType("node-body", { collection: "node", getKey: t2.getStyleKey, getBoundingBox: t2.getElementBox, drawElement: t2.drawElement }), n2.drawing.addSimpleShapeRenderType("node-body", { getBoundingBox: c2, isSimple: Wd, shapeProps: { shape: "shape", color: "background-color", opacity: "background-opacity", radius: "corner-radius", border: true } }), n2.drawing.addSimpleShapeRenderType("node-overlay", { getBoundingBox: c2, isVisible: l2("overlay"), shapeProps: { shape: "overlay-shape", color: "overlay-color", opacity: "overlay-opacity", padding: "overlay-padding", radius: "overlay-corner-radius" } }), n2.drawing.addSimpleShapeRenderType("node-underlay", { getBoundingBox: c2, isVisible: l2("underlay"), shapeProps: { shape: "underlay-shape", color: "underlay-color", opacity: "underlay-opacity", padding: "underlay-padding", radius: "underlay-corner-radius" } }), n2.drawing.addTextureAtlasRenderType("label", { collection: "label", getTexPickingMode: u2, getKey: gh(t2.getLabelKey, null), getBoundingBox: yh(t2.getLabelBox, null), drawClipped: true, drawElement: t2.drawLabel, getRotation: o2(null), getRotationPoint: t2.getLabelRotationPoint, getRotationOffset: t2.getLabelRotationOffset, isVisible: s2("label") }), n2.drawing.addTextureAtlasRenderType("edge-source-label", { collection: "label", getTexPickingMode: u2, getKey: gh(t2.getSourceLabelKey, "source"), getBoundingBox: yh(t2.getSourceLabelBox, "source"), drawClipped: true, drawElement: t2.drawSourceLabel, getRotation: o2("source"), getRotationPoint: t2.getSourceLabelRotationPoint, getRotationOffset: t2.getSourceLabelRotationOffset, isVisible: s2("source-label") }), n2.drawing.addTextureAtlasRenderType("edge-target-label", { collection: "label", getTexPickingMode: u2, getKey: gh(t2.getTargetLabelKey, "target"), getBoundingBox: yh(t2.getTargetLabelBox, "target"), drawClipped: true, drawElement: t2.drawTargetLabel, getRotation: o2("target"), getRotationPoint: t2.getTargetLabelRotationPoint, getRotationOffset: t2.getTargetLabelRotationOffset, isVisible: s2("target-label") });
          var d2 = _e(function() {
            console.log("garbage collect flag set"), n2.data.gc = true;
          }, 1e4);
          n2.onUpdateEleCalcs(function(e3, t3) {
            var r2 = false;
            t3 && t3.length > 0 && (r2 |= n2.drawing.invalidate(t3)), r2 && d2();
          }), function(e3) {
            var t3 = e3.render;
            e3.render = function(n4) {
              n4 = n4 || {};
              var r2 = e3.cy;
              e3.webgl && (r2.zoom() > cd ? (!function(e4) {
                var t4 = e4.data.contexts[e4.WEBGL];
                t4.clear(t4.COLOR_BUFFER_BIT | t4.DEPTH_BUFFER_BIT);
              }(e3), t3.call(e3, n4)) : (!function(e4) {
                var t4 = /* @__PURE__ */ __name(function(t5) {
                  t5.save(), t5.setTransform(1, 0, 0, 1, 0, 0), t5.clearRect(0, 0, e4.canvasWidth, e4.canvasHeight), t5.restore();
                }, "t");
                t4(e4.data.contexts[e4.NODE]), t4(e4.data.contexts[e4.DRAG]);
              }(e3), xh(e3, n4, ch.SCREEN)));
            };
            var n3 = e3.matchCanvasSize;
            e3.matchCanvasSize = function(t4) {
              n3.call(e3, t4), e3.pickingFrameBuffer.setFramebufferAttachmentSizes(e3.canvasWidth, e3.canvasHeight), e3.pickingFrameBuffer.needsDraw = true;
            }, e3.findNearestElements = function(t4, n4, a4, o4) {
              return function(e4, t5, n5) {
                var a5, o5, s3, l3 = function(e5, t6, n6) {
                  var r2, a6, o6, s4, l4 = qd(e5), u4 = l4.pan, c4 = l4.zoom, d4 = function(e6, t7, n7, r3, a7) {
                    var i2 = r3 * n7 + t7.x, o7 = a7 * n7 + t7.y;
                    return [i2, o7 = Math.round(e6.canvasHeight - o7)];
                  }(e5, u4, c4, t6, n6), h2 = i(d4, 2), f2 = h2[0], p2 = h2[1], v2 = 6;
                  if (r2 = f2 - v2 / 2, a6 = p2 - v2 / 2, s4 = v2, 0 === (o6 = v2) || 0 === s4) return [];
                  var g2 = e5.data.contexts[e5.WEBGL];
                  g2.bindFramebuffer(g2.FRAMEBUFFER, e5.pickingFrameBuffer), e5.pickingFrameBuffer.needsDraw && (g2.viewport(0, 0, g2.canvas.width, g2.canvas.height), xh(e5, null, ch.PICKING), e5.pickingFrameBuffer.needsDraw = false);
                  var y2 = o6 * s4, m2 = new Uint8Array(4 * y2);
                  g2.readPixels(r2, a6, o6, s4, g2.RGBA, g2.UNSIGNED_BYTE, m2), g2.bindFramebuffer(g2.FRAMEBUFFER, null);
                  for (var b2 = /* @__PURE__ */ new Set(), x2 = 0; x2 < y2; x2++) {
                    var w2 = Gd(m2.slice(4 * x2, 4 * x2 + 4)) - 1;
                    w2 >= 0 && b2.add(w2);
                  }
                  return b2;
                }(e4, t5, n5), u3 = e4.getCachedZSortedEles(), c3 = r(l3);
                try {
                  for (c3.s(); !(s3 = c3.n()).done; ) {
                    var d3 = u3[s3.value];
                    if (!a5 && d3.isNode() && (a5 = d3), !o5 && d3.isEdge() && (o5 = d3), a5 && o5) break;
                  }
                } catch (e5) {
                  c3.e(e5);
                } finally {
                  c3.f();
                }
                return [a5, o5].filter(Boolean);
              }(e3, t4, n4);
            };
            var a3 = e3.invalidateCachedZSortedEles;
            e3.invalidateCachedZSortedEles = function() {
              a3.call(e3), e3.pickingFrameBuffer.needsDraw = true;
            };
            var o3 = e3.notify;
            e3.notify = function(t4, n4) {
              o3.call(e3, t4, n4), "viewport" === t4 || "bounds" === t4 ? e3.pickingFrameBuffer.needsDraw = true : "background" === t4 && e3.drawing.invalidate(n4, { type: "node-body" });
            };
          }(n2);
        };
        var gh = /* @__PURE__ */ __name(function(e2, t2) {
          return function(n2) {
            var r2 = e2(n2), a2 = vh(n2, t2);
            return a2.length > 1 ? a2.map(function(e3, t3) {
              return "".concat(r2, "_").concat(t3);
            }) : r2;
          };
        }, "gh"), yh = /* @__PURE__ */ __name(function(e2, t2) {
          return function(n2, r2) {
            var a2 = e2(n2);
            if ("string" == typeof r2) {
              var i2 = r2.indexOf("_");
              if (i2 > 0) {
                var o2 = Number(r2.substring(i2 + 1)), s2 = vh(n2, t2), l2 = a2.h / s2.length, u2 = l2 * o2, c2 = a2.y1 + u2;
                return { x1: a2.x1, w: a2.w, y1: c2, h: l2, yOffset: u2 };
              }
            }
            return a2;
          };
        }, "yh");
        function mh(e2, t2) {
          var n2 = e2.canvasWidth, r2 = e2.canvasHeight, a2 = qd(e2), i2 = a2.pan, o2 = a2.zoom;
          t2.setTransform(1, 0, 0, 1, 0, 0), t2.clearRect(0, 0, n2, r2), t2.translate(i2.x, i2.y), t2.scale(o2, o2);
        }
        __name(mh, "mh");
        function bh(e2, t2, n2) {
          var r2 = e2.drawing;
          t2 += 1, n2.isNode() ? (r2.drawNode(n2, t2, "node-underlay"), r2.drawNode(n2, t2, "node-body"), r2.drawTexture(n2, t2, "label"), r2.drawNode(n2, t2, "node-overlay")) : (r2.drawEdgeLine(n2, t2), r2.drawEdgeArrow(n2, t2, "source"), r2.drawEdgeArrow(n2, t2, "target"), r2.drawTexture(n2, t2, "label"), r2.drawTexture(n2, t2, "edge-source-label"), r2.drawTexture(n2, t2, "edge-target-label"));
        }
        __name(bh, "bh");
        function xh(e2, t2, n2) {
          var a2;
          e2.webglDebug && (a2 = performance.now());
          var i2 = e2.drawing, o2 = 0;
          if (n2.screen && e2.data.canvasNeedsRedraw[e2.SELECT_BOX] && function(e3, t3) {
            e3.drawSelectionRectangle(t3, function(t4) {
              return mh(e3, t4);
            });
          }(e2, t2), e2.data.canvasNeedsRedraw[e2.NODE] || n2.picking) {
            var s2 = e2.data.contexts[e2.WEBGL];
            n2.screen ? (s2.clearColor(0, 0, 0, 0), s2.enable(s2.BLEND), s2.blendFunc(s2.ONE, s2.ONE_MINUS_SRC_ALPHA)) : s2.disable(s2.BLEND), s2.clear(s2.COLOR_BUFFER_BIT | s2.DEPTH_BUFFER_BIT), s2.viewport(0, 0, s2.canvas.width, s2.canvas.height);
            var l2 = function(e3) {
              var t3 = e3.canvasWidth, n3 = e3.canvasHeight, r2 = qd(e3), a3 = r2.pan, i3 = r2.zoom, o3 = th();
              rh(o3, o3, [a3.x, a3.y]), ih(o3, o3, [i3, i3]);
              var s3 = th();
              !function(e4, t4, n4) {
                e4[0] = 2 / t4, e4[1] = 0, e4[2] = 0, e4[3] = 0, e4[4] = -2 / n4, e4[5] = 0, e4[6] = -1, e4[7] = 1, e4[8] = 1;
              }(s3, t3, n3);
              var l3, u3, c3, d3, h3, f3, p3, v3, g3, y3, m3, b3, x2, w2, E2, k2, T2, C2, P2, S2, B2, D2 = th();
              return l3 = D2, c3 = o3, d3 = (u3 = s3)[0], h3 = u3[1], f3 = u3[2], p3 = u3[3], v3 = u3[4], g3 = u3[5], y3 = u3[6], m3 = u3[7], b3 = u3[8], x2 = c3[0], w2 = c3[1], E2 = c3[2], k2 = c3[3], T2 = c3[4], C2 = c3[5], P2 = c3[6], S2 = c3[7], B2 = c3[8], l3[0] = x2 * d3 + w2 * p3 + E2 * y3, l3[1] = x2 * h3 + w2 * v3 + E2 * m3, l3[2] = x2 * f3 + w2 * g3 + E2 * b3, l3[3] = k2 * d3 + T2 * p3 + C2 * y3, l3[4] = k2 * h3 + T2 * v3 + C2 * m3, l3[5] = k2 * f3 + T2 * g3 + C2 * b3, l3[6] = P2 * d3 + S2 * p3 + B2 * y3, l3[7] = P2 * h3 + S2 * v3 + B2 * m3, l3[8] = P2 * f3 + S2 * g3 + B2 * b3, D2;
            }(e2), u2 = e2.getCachedZSortedEles();
            if (o2 = u2.length, i2.startFrame(l2, n2), n2.screen) {
              for (var c2 = 0; c2 < u2.nondrag.length; c2++) bh(e2, c2, u2.nondrag[c2]);
              for (var d2 = 0; d2 < u2.drag.length; d2++) bh(e2, d2, u2.drag[d2]);
            } else if (n2.picking) for (var h2 = 0; h2 < u2.length; h2++) bh(e2, h2, u2[h2]);
            i2.endFrame(), n2.screen && e2.webglDebugShowAtlases && (function(e3) {
              var t3 = e3.data.contexts[e3.NODE];
              t3.save(), mh(e3, t3), t3.strokeStyle = "rgba(0, 0, 0, 0.3)", t3.beginPath(), t3.moveTo(-1e3, 0), t3.lineTo(1e3, 0), t3.stroke(), t3.beginPath(), t3.moveTo(0, -1e3), t3.lineTo(0, 1e3), t3.stroke(), t3.restore();
            }(e2), function(e3) {
              var t3 = /* @__PURE__ */ __name(function(t4, n4, r2) {
                for (var a3 = t4.atlasManager.getAtlasCollection(n4), i3 = e3.data.contexts[e3.NODE], o3 = a3.atlases, s3 = 0; s3 < o3.length; s3++) {
                  var l3 = o3[s3].canvas;
                  if (l3) {
                    var u3 = l3.width, c3 = l3.height, d3 = u3 * s3, h3 = l3.height * r2;
                    i3.save(), i3.scale(0.4, 0.4), i3.drawImage(l3, d3, h3), i3.strokeStyle = "black", i3.rect(d3, h3, u3, c3), i3.stroke(), i3.restore();
                  }
                }
              }, "t"), n3 = 0;
              t3(e3.drawing, "node", n3++), t3(e3.drawing, "label", n3++);
            }(e2)), e2.data.canvasNeedsRedraw[e2.NODE] = false, e2.data.canvasNeedsRedraw[e2.DRAG] = false;
          }
          if (e2.webglDebug) {
            var f2 = performance.now(), p2 = Math.ceil(f2 - a2), v2 = i2.getDebugInfo(), g2 = ["".concat(o2, " elements"), "".concat(v2.totalInstances, " instances"), "".concat(v2.batchCount, " batches"), "".concat(v2.totalAtlases, " atlases"), "".concat(v2.wrappedCount, " wrapped textures"), "".concat(v2.simpleCount, " simple shapes")].join(", ");
            console.log("WebGL (".concat(n2.name, ") - frame time ").concat(p2, "ms")), console.log("Totals:"), console.log("  ".concat(g2)), console.log("Texture Atlases Used:");
            var y2, m2 = r(v2.atlasInfo);
            try {
              for (m2.s(); !(y2 = m2.n()).done; ) {
                var b2 = y2.value;
                console.log("  ".concat(b2.type, ": ").concat(b2.keyCount, " keys, ").concat(b2.atlasCount, " atlases"));
              }
            } catch (e3) {
              m2.e(e3);
            } finally {
              m2.f();
            }
            console.log("");
          }
          e2.data.gc && (console.log("Garbage Collect!"), e2.data.gc = false, i2.gc());
        }
        __name(xh, "xh");
        for (var wh = { drawPolygonPath: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
          var o2 = r2 / 2, s2 = a2 / 2;
          e2.beginPath && e2.beginPath(), e2.moveTo(t2 + o2 * i2[0], n2 + s2 * i2[1]);
          for (var l2 = 1; l2 < i2.length / 2; l2++) e2.lineTo(t2 + o2 * i2[2 * l2], n2 + s2 * i2[2 * l2 + 1]);
          e2.closePath();
        }, "drawPolygonPath"), drawRoundPolygonPath: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          o2.forEach(function(t3) {
            return zc(e2, t3);
          }), e2.closePath();
        }, "drawRoundPolygonPath"), drawRoundRectanglePath: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
          var o2 = r2 / 2, s2 = a2 / 2, l2 = "auto" === i2 ? _n(r2, a2) : Math.min(i2, s2, o2);
          e2.beginPath && e2.beginPath(), e2.moveTo(t2, n2 - s2), e2.arcTo(t2 + o2, n2 - s2, t2 + o2, n2, l2), e2.arcTo(t2 + o2, n2 + s2, t2, n2 + s2, l2), e2.arcTo(t2 - o2, n2 + s2, t2 - o2, n2, l2), e2.arcTo(t2 - o2, n2 - s2, t2, n2 - s2, l2), e2.lineTo(t2, n2 - s2), e2.closePath();
        }, "drawRoundRectanglePath"), drawBottomRoundRectanglePath: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2) {
          var o2 = r2 / 2, s2 = a2 / 2, l2 = "auto" === i2 ? _n(r2, a2) : i2;
          e2.beginPath && e2.beginPath(), e2.moveTo(t2, n2 - s2), e2.lineTo(t2 + o2, n2 - s2), e2.lineTo(t2 + o2, n2), e2.arcTo(t2 + o2, n2 + s2, t2, n2 + s2, l2), e2.arcTo(t2 - o2, n2 + s2, t2 - o2, n2, l2), e2.lineTo(t2 - o2, n2 - s2), e2.lineTo(t2, n2 - s2), e2.closePath();
        }, "drawBottomRoundRectanglePath"), drawCutRectanglePath: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2) {
          var s2 = r2 / 2, l2 = a2 / 2, u2 = "auto" === o2 ? 8 : o2;
          e2.beginPath && e2.beginPath(), e2.moveTo(t2 - s2 + u2, n2 - l2), e2.lineTo(t2 + s2 - u2, n2 - l2), e2.lineTo(t2 + s2, n2 - l2 + u2), e2.lineTo(t2 + s2, n2 + l2 - u2), e2.lineTo(t2 + s2 - u2, n2 + l2), e2.lineTo(t2 - s2 + u2, n2 + l2), e2.lineTo(t2 - s2, n2 + l2 - u2), e2.lineTo(t2 - s2, n2 - l2 + u2), e2.closePath();
        }, "drawCutRectanglePath"), drawBarrelPath: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2) {
          var i2 = r2 / 2, o2 = a2 / 2, s2 = t2 - i2, l2 = t2 + i2, u2 = n2 - o2, c2 = n2 + o2, d2 = Mn(r2, a2), h2 = d2.widthOffset, f2 = d2.heightOffset, p2 = d2.ctrlPtOffsetPct * h2;
          e2.beginPath && e2.beginPath(), e2.moveTo(s2, u2 + f2), e2.lineTo(s2, c2 - f2), e2.quadraticCurveTo(s2 + p2, c2, s2 + h2, c2), e2.lineTo(l2 - h2, c2), e2.quadraticCurveTo(l2 - p2, c2, l2, c2 - f2), e2.lineTo(l2, u2 + f2), e2.quadraticCurveTo(l2 - p2, u2, l2 - h2, u2), e2.lineTo(s2 + h2, u2), e2.quadraticCurveTo(s2 + p2, u2, s2, u2 + f2), e2.closePath();
        }, "drawBarrelPath") }, Eh = Math.sin(0), kh = Math.cos(0), Th = {}, Ch = {}, Ph = Math.PI / 40, Sh = 0 * Math.PI; Sh < 2 * Math.PI; Sh += Ph) Th[Sh] = Math.sin(Sh), Ch[Sh] = Math.cos(Sh);
        wh.drawEllipsePath = function(e2, t2, n2, r2, a2) {
          if (e2.beginPath && e2.beginPath(), e2.ellipse) e2.ellipse(t2, n2, r2 / 2, a2 / 2, 0, 0, 2 * Math.PI);
          else for (var i2, o2, s2 = r2 / 2, l2 = a2 / 2, u2 = 0 * Math.PI; u2 < 2 * Math.PI; u2 += Ph) i2 = t2 - s2 * Th[u2] * Eh + s2 * Ch[u2] * kh, o2 = n2 + l2 * Ch[u2] * Eh + l2 * Th[u2] * kh, 0 === u2 ? e2.moveTo(i2, o2) : e2.lineTo(i2, o2);
          e2.closePath();
        };
        var Bh = {};
        function Dh(e2) {
          var t2 = e2.indexOf(",");
          return e2.substr(t2 + 1);
        }
        __name(Dh, "Dh");
        function _h(e2, t2, n2) {
          var r2 = /* @__PURE__ */ __name(function() {
            return t2.toDataURL(n2, e2.quality);
          }, "r");
          switch (e2.output) {
            case "blob-promise":
              return new Hr(function(r3, a2) {
                try {
                  t2.toBlob(function(e3) {
                    null != e3 ? r3(e3) : a2(new Error("`canvas.toBlob()` sent a null value in its callback"));
                  }, n2, e2.quality);
                } catch (e3) {
                  a2(e3);
                }
              });
            case "blob":
              return function(e3, t3) {
                for (var n3 = atob(e3), r3 = new ArrayBuffer(n3.length), a2 = new Uint8Array(r3), i2 = 0; i2 < n3.length; i2++) a2[i2] = n3.charCodeAt(i2);
                return new Blob([r3], { type: t3 });
              }(Dh(r2()), n2);
            case "base64":
              return Dh(r2());
            default:
              return r2();
          }
        }
        __name(_h, "_h");
        Bh.createBuffer = function(e2, t2) {
          var n2 = document.createElement("canvas");
          return n2.width = e2, n2.height = t2, [n2, n2.getContext("2d")];
        }, Bh.bufferCanvasImage = function(e2) {
          var t2 = this.cy, n2 = t2.mutableElements().boundingBox(), r2 = this.findContainerClientCoords(), a2 = e2.full ? Math.ceil(n2.w) : r2[2], i2 = e2.full ? Math.ceil(n2.h) : r2[3], o2 = G(e2.maxWidth) || G(e2.maxHeight), s2 = this.getPixelRatio(), l2 = 1;
          if (void 0 !== e2.scale) a2 *= e2.scale, i2 *= e2.scale, l2 = e2.scale;
          else if (o2) {
            var u2 = 1 / 0, c2 = 1 / 0;
            G(e2.maxWidth) && (u2 = l2 * e2.maxWidth / a2), G(e2.maxHeight) && (c2 = l2 * e2.maxHeight / i2), a2 *= l2 = Math.min(u2, c2), i2 *= l2;
          }
          o2 || (a2 *= s2, i2 *= s2, l2 *= s2);
          var d2 = document.createElement("canvas");
          d2.width = a2, d2.height = i2, d2.style.width = a2 + "px", d2.style.height = i2 + "px";
          var h2 = d2.getContext("2d");
          if (a2 > 0 && i2 > 0) {
            h2.clearRect(0, 0, a2, i2), h2.globalCompositeOperation = "source-over";
            var f2 = this.getCachedZSortedEles();
            if (e2.full) h2.translate(-n2.x1 * l2, -n2.y1 * l2), h2.scale(l2, l2), this.drawElements(h2, f2), h2.scale(1 / l2, 1 / l2), h2.translate(n2.x1 * l2, n2.y1 * l2);
            else {
              var p2 = t2.pan(), v2 = { x: p2.x * l2, y: p2.y * l2 };
              l2 *= t2.zoom(), h2.translate(v2.x, v2.y), h2.scale(l2, l2), this.drawElements(h2, f2), h2.scale(1 / l2, 1 / l2), h2.translate(-v2.x, -v2.y);
            }
            e2.bg && (h2.globalCompositeOperation = "destination-over", h2.fillStyle = e2.bg, h2.rect(0, 0, a2, i2), h2.fill());
          }
          return d2;
        }, Bh.png = function(e2) {
          return _h(e2, this.bufferCanvasImage(e2), "image/png");
        }, Bh.jpg = function(e2) {
          return _h(e2, this.bufferCanvasImage(e2), "image/jpeg");
        };
        var Ah = { nodeShapeImpl: /* @__PURE__ */ __name(function(e2, t2, n2, r2, a2, i2, o2, s2) {
          switch (e2) {
            case "ellipse":
              return this.drawEllipsePath(t2, n2, r2, a2, i2);
            case "polygon":
              return this.drawPolygonPath(t2, n2, r2, a2, i2, o2);
            case "round-polygon":
              return this.drawRoundPolygonPath(t2, n2, r2, a2, i2, o2, s2);
            case "roundrectangle":
            case "round-rectangle":
              return this.drawRoundRectanglePath(t2, n2, r2, a2, i2, s2);
            case "cutrectangle":
            case "cut-rectangle":
              return this.drawCutRectanglePath(t2, n2, r2, a2, i2, o2, s2);
            case "bottomroundrectangle":
            case "bottom-round-rectangle":
              return this.drawBottomRoundRectanglePath(t2, n2, r2, a2, i2, s2);
            case "barrel":
              return this.drawBarrelPath(t2, n2, r2, a2, i2);
          }
        }, "nodeShapeImpl") }, Mh = Ih, Rh = Ih.prototype;
        function Ih(e2) {
          var t2 = this, n2 = t2.cy.window().document;
          e2.webgl && (Rh.CANVAS_LAYERS = t2.CANVAS_LAYERS = 4, console.log("webgl rendering enabled")), t2.data = { canvases: new Array(Rh.CANVAS_LAYERS), contexts: new Array(Rh.CANVAS_LAYERS), canvasNeedsRedraw: new Array(Rh.CANVAS_LAYERS), bufferCanvases: new Array(Rh.BUFFER_COUNT), bufferContexts: new Array(Rh.CANVAS_LAYERS) };
          var r2 = "-webkit-tap-highlight-color", a2 = "rgba(0,0,0,0)";
          t2.data.canvasContainer = n2.createElement("div");
          var i2 = t2.data.canvasContainer.style;
          t2.data.canvasContainer.style[r2] = a2, i2.position = "relative", i2.zIndex = "0", i2.overflow = "hidden";
          var o2 = e2.cy.container();
          o2.appendChild(t2.data.canvasContainer), o2.style[r2] = a2;
          var s2 = { "-webkit-user-select": "none", "-moz-user-select": "-moz-none", "user-select": "none", "-webkit-tap-highlight-color": "rgba(0,0,0,0)", "outline-style": "none" };
          d && d.userAgent.match(/msie|trident|edge/i) && (s2["-ms-touch-action"] = "none", s2["touch-action"] = "none");
          for (var l2 = 0; l2 < Rh.CANVAS_LAYERS; l2++) {
            var u2 = t2.data.canvases[l2] = n2.createElement("canvas"), c2 = Rh.CANVAS_TYPES[l2];
            t2.data.contexts[l2] = u2.getContext(c2), t2.data.contexts[l2] || nt("Could not create canvas of type " + c2), Object.keys(s2).forEach(function(e3) {
              u2.style[e3] = s2[e3];
            }), u2.style.position = "absolute", u2.setAttribute("data-id", "layer" + l2), u2.style.zIndex = String(Rh.CANVAS_LAYERS - l2), t2.data.canvasContainer.appendChild(u2), t2.data.canvasNeedsRedraw[l2] = false;
          }
          t2.data.topCanvas = t2.data.canvases[0], t2.data.canvases[Rh.NODE].setAttribute("data-id", "layer" + Rh.NODE + "-node"), t2.data.canvases[Rh.SELECT_BOX].setAttribute("data-id", "layer" + Rh.SELECT_BOX + "-selectbox"), t2.data.canvases[Rh.DRAG].setAttribute("data-id", "layer" + Rh.DRAG + "-drag"), t2.data.canvases[Rh.WEBGL] && t2.data.canvases[Rh.WEBGL].setAttribute("data-id", "layer" + Rh.WEBGL + "-webgl");
          for (l2 = 0; l2 < Rh.BUFFER_COUNT; l2++) t2.data.bufferCanvases[l2] = n2.createElement("canvas"), t2.data.bufferContexts[l2] = t2.data.bufferCanvases[l2].getContext("2d"), t2.data.bufferCanvases[l2].style.position = "absolute", t2.data.bufferCanvases[l2].setAttribute("data-id", "buffer" + l2), t2.data.bufferCanvases[l2].style.zIndex = String(-l2 - 1), t2.data.bufferCanvases[l2].style.visibility = "hidden";
          t2.pathsEnabled = true;
          var h2 = Jt(), f2 = /* @__PURE__ */ __name(function(e3) {
            return { x: -e3.w / 2, y: -e3.h / 2 };
          }, "f"), p2 = /* @__PURE__ */ __name(function(e3) {
            return e3[0]._private.nodeKey;
          }, "p"), v2 = /* @__PURE__ */ __name(function(e3) {
            return e3[0]._private.labelStyleKey;
          }, "v"), g2 = /* @__PURE__ */ __name(function(e3) {
            return e3[0]._private.sourceLabelStyleKey;
          }, "g"), y2 = /* @__PURE__ */ __name(function(e3) {
            return e3[0]._private.targetLabelStyleKey;
          }, "y"), m2 = /* @__PURE__ */ __name(function(e3, n3, r3, a3, i3) {
            return t2.drawElement(e3, n3, r3, false, false, i3);
          }, "m"), b2 = /* @__PURE__ */ __name(function(e3, n3, r3, a3, i3) {
            return t2.drawElementText(e3, n3, r3, a3, "main", i3);
          }, "b"), x2 = /* @__PURE__ */ __name(function(e3, n3, r3, a3, i3) {
            return t2.drawElementText(e3, n3, r3, a3, "source", i3);
          }, "x"), w2 = /* @__PURE__ */ __name(function(e3, n3, r3, a3, i3) {
            return t2.drawElementText(e3, n3, r3, a3, "target", i3);
          }, "w"), E2 = /* @__PURE__ */ __name(function(e3) {
            return e3.boundingBox(), e3[0]._private.bodyBounds;
          }, "E"), k2 = /* @__PURE__ */ __name(function(e3) {
            return e3.boundingBox(), e3[0]._private.labelBounds.main || h2;
          }, "k"), T2 = /* @__PURE__ */ __name(function(e3) {
            return e3.boundingBox(), e3[0]._private.labelBounds.source || h2;
          }, "T"), C2 = /* @__PURE__ */ __name(function(e3) {
            return e3.boundingBox(), e3[0]._private.labelBounds.target || h2;
          }, "C"), P2 = /* @__PURE__ */ __name(function(e3, t3) {
            return t3;
          }, "P"), S2 = /* @__PURE__ */ __name(function(e3) {
            return { x: ((t3 = E2(e3)).x1 + t3.x2) / 2, y: (t3.y1 + t3.y2) / 2 };
            var t3;
          }, "S"), B2 = /* @__PURE__ */ __name(function(e3, t3, n3) {
            var r3 = e3 ? e3 + "-" : "";
            return { x: t3.x + n3.pstyle(r3 + "text-margin-x").pfValue, y: t3.y + n3.pstyle(r3 + "text-margin-y").pfValue };
          }, "B"), D2 = /* @__PURE__ */ __name(function(e3, t3, n3) {
            var r3 = e3[0]._private.rscratch;
            return { x: r3[t3], y: r3[n3] };
          }, "D"), _2 = /* @__PURE__ */ __name(function(e3) {
            return B2("", D2(e3, "labelX", "labelY"), e3);
          }, "_"), A2 = /* @__PURE__ */ __name(function(e3) {
            return B2("source", D2(e3, "sourceLabelX", "sourceLabelY"), e3);
          }, "A"), M2 = /* @__PURE__ */ __name(function(e3) {
            return B2("target", D2(e3, "targetLabelX", "targetLabelY"), e3);
          }, "M"), R2 = /* @__PURE__ */ __name(function(e3) {
            return f2(E2(e3));
          }, "R"), I2 = /* @__PURE__ */ __name(function(e3) {
            return f2(T2(e3));
          }, "I"), N2 = /* @__PURE__ */ __name(function(e3) {
            return f2(C2(e3));
          }, "N"), L2 = /* @__PURE__ */ __name(function(e3) {
            var t3 = k2(e3), n3 = f2(k2(e3));
            if (e3.isNode()) {
              switch (e3.pstyle("text-halign").value) {
                case "left":
                  n3.x = -t3.w - (t3.leftPad || 0);
                  break;
                case "right":
                  n3.x = -(t3.rightPad || 0);
              }
              switch (e3.pstyle("text-valign").value) {
                case "top":
                  n3.y = -t3.h - (t3.topPad || 0);
                  break;
                case "bottom":
                  n3.y = -(t3.botPad || 0);
              }
            }
            return n3;
          }, "L"), z2 = t2.data.eleTxrCache = new fd(t2, { getKey: p2, doesEleInvalidateKey: /* @__PURE__ */ __name(function(e3) {
            var t3 = e3[0]._private;
            return !(t3.oldBackgroundTimestamp === t3.backgroundTimestamp);
          }, "doesEleInvalidateKey"), drawElement: m2, getBoundingBox: E2, getRotationPoint: S2, getRotationOffset: R2, allowEdgeTxrCaching: false, allowParentTxrCaching: false }), O2 = t2.data.lblTxrCache = new fd(t2, { getKey: v2, drawElement: b2, getBoundingBox: k2, getRotationPoint: _2, getRotationOffset: L2, isVisible: P2 }), V2 = t2.data.slbTxrCache = new fd(t2, { getKey: g2, drawElement: x2, getBoundingBox: T2, getRotationPoint: A2, getRotationOffset: I2, isVisible: P2 }), F2 = t2.data.tlbTxrCache = new fd(t2, { getKey: y2, drawElement: w2, getBoundingBox: C2, getRotationPoint: M2, getRotationOffset: N2, isVisible: P2 }), X2 = t2.data.lyrTxrCache = new vd(t2);
          t2.onUpdateEleCalcs(function(e3, t3) {
            z2.invalidateElements(t3), O2.invalidateElements(t3), V2.invalidateElements(t3), F2.invalidateElements(t3), X2.invalidateElements(t3);
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r3 = t3[n3]._private;
              r3.oldBackgroundTimestamp = r3.backgroundTimestamp;
            }
          });
          var j2 = /* @__PURE__ */ __name(function(e3) {
            for (var t3 = 0; t3 < e3.length; t3++) X2.enqueueElementRefinement(e3[t3].ele);
          }, "j");
          z2.onDequeue(j2), O2.onDequeue(j2), V2.onDequeue(j2), F2.onDequeue(j2), e2.webgl && t2.initWebgl(e2, { getStyleKey: p2, getLabelKey: v2, getSourceLabelKey: g2, getTargetLabelKey: y2, drawElement: m2, drawLabel: b2, drawSourceLabel: x2, drawTargetLabel: w2, getElementBox: E2, getLabelBox: k2, getSourceLabelBox: T2, getTargetLabelBox: C2, getElementRotationPoint: S2, getElementRotationOffset: R2, getLabelRotationPoint: _2, getSourceLabelRotationPoint: A2, getTargetLabelRotationPoint: M2, getLabelRotationOffset: L2, getSourceLabelRotationOffset: I2, getTargetLabelRotationOffset: N2 });
        }
        __name(Ih, "Ih");
        Rh.CANVAS_LAYERS = 3, Rh.SELECT_BOX = 0, Rh.DRAG = 1, Rh.NODE = 2, Rh.WEBGL = 3, Rh.CANVAS_TYPES = ["2d", "2d", "2d", "webgl2"], Rh.BUFFER_COUNT = 3, Rh.TEXTURE_BUFFER = 0, Rh.MOTIONBLUR_BUFFER_NODE = 1, Rh.MOTIONBLUR_BUFFER_DRAG = 2, Rh.redrawHint = function(e2, t2) {
          var n2 = this;
          switch (e2) {
            case "eles":
              n2.data.canvasNeedsRedraw[Rh.NODE] = t2;
              break;
            case "drag":
              n2.data.canvasNeedsRedraw[Rh.DRAG] = t2;
              break;
            case "select":
              n2.data.canvasNeedsRedraw[Rh.SELECT_BOX] = t2;
              break;
            case "gc":
              n2.data.gc = true;
          }
        };
        var Nh = "undefined" != typeof Path2D;
        Rh.path2dEnabled = function(e2) {
          if (void 0 === e2) return this.pathsEnabled;
          this.pathsEnabled = !!e2;
        }, Rh.usePaths = function() {
          return Nh && this.pathsEnabled;
        }, Rh.setImgSmoothing = function(e2, t2) {
          null != e2.imageSmoothingEnabled ? e2.imageSmoothingEnabled = t2 : (e2.webkitImageSmoothingEnabled = t2, e2.mozImageSmoothingEnabled = t2, e2.msImageSmoothingEnabled = t2);
        }, Rh.getImgSmoothing = function(e2) {
          return null != e2.imageSmoothingEnabled ? e2.imageSmoothingEnabled : e2.webkitImageSmoothingEnabled || e2.mozImageSmoothingEnabled || e2.msImageSmoothingEnabled;
        }, Rh.makeOffscreenCanvas = function(e2, t2) {
          var n2;
          "undefined" !== ("undefined" == typeof OffscreenCanvas ? "undefined" : l(OffscreenCanvas)) ? n2 = new OffscreenCanvas(e2, t2) : ((n2 = this.cy.window().document.createElement("canvas")).width = e2, n2.height = t2);
          return n2;
        }, [xd, Pd, Rd, Nd, Ld, Od, Xd, ph, wh, Bh, Ah].forEach(function(e2) {
          ge(Rh, e2);
        });
        var Lh = [{ type: "layout", extensions: uc }, { type: "renderer", extensions: [{ name: "null", impl: cc }, { name: "base", impl: id }, { name: "canvas", impl: Mh }] }], zh = {}, Oh = {};
        function Vh(e2, t2, n2) {
          var r2 = n2, a2 = /* @__PURE__ */ __name(function(n3) {
            at("Can not register `" + t2 + "` for `" + e2 + "` since `" + n3 + "` already exists in the prototype and can not be overridden");
          }, "a");
          if ("core" === e2) {
            if (Eu.prototype[t2]) return a2(t2);
            Eu.prototype[t2] = n2;
          } else if ("collection" === e2) {
            if (Ol.prototype[t2]) return a2(t2);
            Ol.prototype[t2] = n2;
          } else if ("layout" === e2) {
            for (var i2 = function(e3) {
              this.options = e3, n2.call(this, e3), K(this._private) || (this._private = {}), this._private.cy = e3.cy, this._private.listeners = [], this.createEmitter();
            }, o2 = i2.prototype = Object.create(n2.prototype), s2 = [], l2 = 0; l2 < s2.length; l2++) {
              var u2 = s2[l2];
              o2[u2] = o2[u2] || function() {
                return this;
              };
            }
            o2.start && !o2.run ? o2.run = function() {
              return this.start(), this;
            } : !o2.start && o2.run && (o2.start = function() {
              return this.run(), this;
            });
            var c2 = n2.prototype.stop;
            o2.stop = function() {
              var e3 = this.options;
              if (e3 && e3.animate) {
                var t3 = this.animations;
                if (t3) for (var n3 = 0; n3 < t3.length; n3++) t3[n3].stop();
              }
              return c2 ? c2.call(this) : this.emit("layoutstop"), this;
            }, o2.destroy || (o2.destroy = function() {
              return this;
            }), o2.cy = function() {
              return this._private.cy;
            };
            var d2 = /* @__PURE__ */ __name(function(e3) {
              return e3._private.cy;
            }, "d"), h2 = { addEventFields: /* @__PURE__ */ __name(function(e3, t3) {
              t3.layout = e3, t3.cy = d2(e3), t3.target = e3;
            }, "addEventFields"), bubble: /* @__PURE__ */ __name(function() {
              return true;
            }, "bubble"), parent: /* @__PURE__ */ __name(function(e3) {
              return d2(e3);
            }, "parent") };
            ge(o2, { createEmitter: /* @__PURE__ */ __name(function() {
              return this._private.emitter = new nl(h2, this), this;
            }, "createEmitter"), emitter: /* @__PURE__ */ __name(function() {
              return this._private.emitter;
            }, "emitter"), on: /* @__PURE__ */ __name(function(e3, t3) {
              return this.emitter().on(e3, t3), this;
            }, "on"), one: /* @__PURE__ */ __name(function(e3, t3) {
              return this.emitter().one(e3, t3), this;
            }, "one"), once: /* @__PURE__ */ __name(function(e3, t3) {
              return this.emitter().one(e3, t3), this;
            }, "once"), removeListener: /* @__PURE__ */ __name(function(e3, t3) {
              return this.emitter().removeListener(e3, t3), this;
            }, "removeListener"), removeAllListeners: /* @__PURE__ */ __name(function() {
              return this.emitter().removeAllListeners(), this;
            }, "removeAllListeners"), emit: /* @__PURE__ */ __name(function(e3, t3) {
              return this.emitter().emit(e3, t3), this;
            }, "emit") }), xo.eventAliasesOn(o2), r2 = i2;
          } else if ("renderer" === e2 && "null" !== t2 && "base" !== t2) {
            var f2 = Fh("renderer", "base"), p2 = f2.prototype, v2 = n2, g2 = n2.prototype, y2 = /* @__PURE__ */ __name(function() {
              f2.apply(this, arguments), v2.apply(this, arguments);
            }, "y"), m2 = y2.prototype;
            for (var b2 in p2) {
              var x2 = p2[b2];
              if (null != g2[b2]) return a2(b2);
              m2[b2] = x2;
            }
            for (var w2 in g2) m2[w2] = g2[w2];
            p2.clientFunctions.forEach(function(e3) {
              m2[e3] = m2[e3] || function() {
                nt("Renderer does not implement `renderer." + e3 + "()` on its prototype");
              };
            }), r2 = y2;
          } else if ("__proto__" === e2 || "constructor" === e2 || "prototype" === e2) return nt(e2 + " is an illegal type to be registered, possibly lead to prototype pollutions");
          return be({ map: zh, keys: [e2, t2], value: r2 });
        }
        __name(Vh, "Vh");
        function Fh(e2, t2) {
          return xe({ map: zh, keys: [e2, t2] });
        }
        __name(Fh, "Fh");
        function Xh(e2, t2, n2, r2, a2) {
          return be({ map: Oh, keys: [e2, t2, n2, r2], value: a2 });
        }
        __name(Xh, "Xh");
        function jh(e2, t2, n2, r2) {
          return xe({ map: Oh, keys: [e2, t2, n2, r2] });
        }
        __name(jh, "jh");
        var Yh = /* @__PURE__ */ __name(function() {
          return 2 === arguments.length ? Fh.apply(null, arguments) : 3 === arguments.length ? Vh.apply(null, arguments) : 4 === arguments.length ? jh.apply(null, arguments) : 5 === arguments.length ? Xh.apply(null, arguments) : void nt("Invalid extension access syntax");
        }, "Yh");
        Eu.prototype.extension = Yh, Lh.forEach(function(e2) {
          e2.extensions.forEach(function(t2) {
            Vh(e2.type, t2.name, t2.impl);
          });
        });
        var qh = /* @__PURE__ */ __name(function() {
          if (!(this instanceof qh)) return new qh();
          this.length = 0;
        }, "qh"), Wh = qh.prototype;
        Wh.instanceString = function() {
          return "stylesheet";
        }, Wh.selector = function(e2) {
          return this[this.length++] = { selector: e2, properties: [] }, this;
        }, Wh.css = function(e2, t2) {
          var n2 = this.length - 1;
          if (W(e2)) this[n2].properties.push({ name: e2, value: t2 });
          else if (K(e2)) for (var r2 = e2, a2 = Object.keys(r2), i2 = 0; i2 < a2.length; i2++) {
            var o2 = a2[i2], s2 = r2[o2];
            if (null != s2) {
              var l2 = yu.properties[o2] || yu.properties[oe(o2)];
              if (null != l2) {
                var u2 = l2.name, c2 = s2;
                this[n2].properties.push({ name: u2, value: c2 });
              }
            }
          }
          return this;
        }, Wh.style = Wh.css, Wh.generateStyle = function(e2) {
          var t2 = new yu(e2);
          return this.appendToStyle(t2);
        }, Wh.appendToStyle = function(e2) {
          for (var t2 = 0; t2 < this.length; t2++) {
            var n2 = this[t2], r2 = n2.selector, a2 = n2.properties;
            e2.selector(r2);
            for (var i2 = 0; i2 < a2.length; i2++) {
              var o2 = a2[i2];
              e2.css(o2.name, o2.value);
            }
          }
          return e2;
        };
        var Uh = /* @__PURE__ */ __name(function(e2) {
          return void 0 === e2 && (e2 = {}), K(e2) ? new Eu(e2) : W(e2) ? Yh.apply(Yh, arguments) : void 0;
        }, "Uh");
        return Uh.use = function(e2) {
          var t2 = Array.prototype.slice.call(arguments, 1);
          return t2.unshift(Uh), e2.apply(null, t2), this;
        }, Uh.warnings = function(e2) {
          return rt(e2);
        }, Uh.version = "3.33.1", Uh.stylesheet = Uh.Stylesheet = qh, Uh;
      });
    }
  });

  // docs/assets/debug/sentinel.js
  var require_sentinel = __commonJS({
    "docs/assets/debug/sentinel.js"() {
      (function(g) {
        g = g || (typeof window !== "undefined" ? window : globalThis);
        g.CLD_SAFE = g.CLD_SAFE || {};
        g.getCy = g.getCy || function() {
          return g.CLD_SAFE && g.CLD_SAFE.cy;
        };
        try {
          const root = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : g;
          if (!("CLD_SAFE" in root)) {
            root.CLD_SAFE = g.CLD_SAFE;
          }
        } catch (_) {
        }
        let warnCount = 0;
        g.CLD_SAFE.safeAddClass = function(target, cls, direct) {
          try {
            if (!target) throw new Error("null target");
            if (typeof direct === "function") return direct.call(target, cls);
            if (typeof target.addClass === "function") return target.addClass(cls);
            if (target.classList && typeof target.classList.add === "function") return target.classList.add(cls);
            if (Array.isArray(target) || target.length >= 0 && typeof target !== "string") {
              for (let i = 0; i < target.length; i++) {
                g.CLD_SAFE.safeAddClass(target[i], cls);
              }
              return;
            }
            throw new Error("unsupported target");
          } catch (e) {
            if (++warnCount % 10 === 1) console.debug("[CLD_SAFE] safeAddClass fallback:", e.message);
          }
        };
        function mark(cls) {
          var el = document && (document.documentElement || document.body);
          if (el) g.CLD_SAFE.safeAddClass(el, cls);
        }
        __name(mark, "mark");
        function detect() {
          if (!document || !document.createElement) {
            return;
          }
          var ok = !!(window.cytoscape && window.elk && window.dagre && window.Chart && window.exprEval && window.tippy && window.Popper);
          mark(ok ? "vendor-ok" : "vendor-missing");
        }
        __name(detect, "detect");
        function logState() {
          var _a, _b, _c;
          try {
            var cyEl = document.getElementById("cy");
            var info = {
              kernel: !!g.kernel,
              nodes: ((_c = (_b = (_a = g.kernel) == null ? void 0 : _a.graph) == null ? void 0 : _b.nodes) == null ? void 0 : _c.length) || 0,
              storeGraph: !!(g.graphStore && g.graphStore.graph),
              cy: !!cyEl,
              width: (cyEl == null ? void 0 : cyEl.offsetWidth) || 0,
              height: (cyEl == null ? void 0 : cyEl.offsetHeight) || 0
            };
            console.table(info);
            if (cyEl && (info.width === 0 || info.height === 0)) {
              g.CLD_SAFE.safeAddClass(cyEl, "cy-force-size");
            }
          } catch (e) {
            console.warn("[sentinel] logState", e);
          }
        }
        __name(logState, "logState");
        if (g.kernelReady && typeof g.kernelReady.then === "function") {
          g.kernelReady.then(logState);
        }
        if (typeof document === "undefined") {
          return;
        }
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", detect, { once: true });
        } else {
          detect();
        }
      })(typeof window !== "undefined" ? window : globalThis);
    }
  });

  // docs/assets/graph-store.js
  var require_graph_store = __commonJS({
    "docs/assets/graph-store.js"() {
      (function() {
        if (window.__GRAPH_STORE__) return;
        window.__GRAPH_STORE__ = true;
        "use strict";
        function Evt() {
          this._ = /* @__PURE__ */ Object.create(null);
        }
        __name(Evt, "Evt");
        Evt.prototype.on = function(k, fn) {
          (this._[k] || (this._[k] = [])).push(fn);
          return fn;
        };
        Evt.prototype.off = function(k, fn) {
          var a = this._[k];
          if (!a) return;
          var i = a.indexOf(fn);
          if (i > -1) a.splice(i, 1);
        };
        Evt.prototype.emit = function(k, p) {
          var a = this._[k] || [];
          for (var i = 0; i < a.length; i++) {
            try {
              a[i](p);
            } catch (_) {
            }
          }
        };
        var ev = new Evt();
        var cy = null;
        var st = "BOOT";
        var q = [];
        var rdy = [];
        var graph = { nodes: [], edges: [] };
        function setStatus(s) {
          st = s;
          ev.emit("status", s);
        }
        __name(setStatus, "setStatus");
        function hasBatch() {
          return cy && typeof cy.startBatch === "function" && typeof cy.endBatch === "function";
        }
        __name(hasBatch, "hasBatch");
        function safeRun(fn, opt) {
          if (cy) {
            if (opt && opt.batch && hasBatch()) {
              try {
                cy.startBatch();
              } catch (_) {
              }
            }
            var out;
            try {
              out = fn(cy);
            } catch (_) {
            }
            if (opt && opt.batch && hasBatch()) {
              try {
                cy.endBatch();
              } catch (_) {
              }
            }
            return out;
          }
          q.push({ fn, opt: opt || {} });
        }
        __name(safeRun, "safeRun");
        function flush() {
          if (!cy) return;
          for (var i = 0; i < q.length; i++) {
            var t = q[i];
            try {
              safeRun(t.fn, t.opt);
            } catch (_) {
            }
          }
          q.length = 0;
          while (rdy.length) {
            try {
              rdy.shift()(cy);
            } catch (_) {
            }
          }
        }
        __name(flush, "flush");
        function watchFactory() {
          if (!window.cytoscape || window.cytoscape.__GRAPH_STORE_WRAPPED__) return;
          var factory = window.cytoscape;
          window.cytoscape = function() {
            var inst = factory.apply(this, arguments);
            try {
              adopt(inst);
            } catch (_) {
            }
            return inst;
          };
          window.cytoscape.__GRAPH_STORE_WRAPPED__ = true;
        }
        __name(watchFactory, "watchFactory");
        function adopt(inst) {
          if (!inst || inst === cy) return;
          cy = inst;
          setStatus("CY_READY");
          ev.emit("cy", cy);
          window.CLD_SAFE = window.CLD_SAFE || {};
          window.CLD_SAFE.cy = cy;
          if (!window._cyDom) {
            try {
              Object.defineProperty(window, "cy", {
                configurable: true,
                get: /* @__PURE__ */ __name(function() {
                  return cy;
                }, "get"),
                set: /* @__PURE__ */ __name(function(v) {
                  try {
                    adopt(v);
                  } catch (_) {
                  }
                }, "set")
              });
            } catch (_) {
              window.cy = cy;
            }
          }
          flush();
        }
        __name(adopt, "adopt");
        var api = {
          init: /* @__PURE__ */ __name(function(opts) {
            if (cy && opts && opts.container) {
              try {
                cy.destroy();
              } catch (_) {
              }
              cy = null;
            }
            if (!cy && typeof window.cytoscape === "function" && opts && opts.container) {
              try {
                adopt(window.cytoscape(opts));
              } catch (_) {
              }
            }
            return this;
          }, "init"),
          destroy: /* @__PURE__ */ __name(function() {
            if (!cy) return this;
            try {
              cy.destroy();
            } catch (_) {
            }
            cy = null;
            setStatus("BOOT");
            return this;
          }, "destroy"),
          restore: /* @__PURE__ */ __name(function(json) {
            if (!json) return this;
            return safeRun(function(cy2) {
              if (typeof cy2.json === "function" && json && json.elements) {
                try {
                  if (hasBatch()) cy2.startBatch();
                  cy2.elements().remove();
                  cy2.json({ elements: json.elements });
                } finally {
                  if (hasBatch()) try {
                    cy2.endBatch();
                  } catch (_) {
                  }
                }
              } else if (Array.isArray(json)) {
                if (hasBatch()) cy2.startBatch();
                try {
                  cy2.add(json);
                } finally {
                  if (hasBatch()) try {
                    cy2.endBatch();
                  } catch (_) {
                  }
                }
              }
            }, { batch: false }), this;
          }, "restore"),
          run: /* @__PURE__ */ __name(function(fn, opt) {
            return safeRun(fn, opt);
          }, "run"),
          get: /* @__PURE__ */ __name(function() {
            return cy;
          }, "get"),
          on: /* @__PURE__ */ __name(function(k, fn) {
            return ev.on(k, fn);
          }, "on"),
          off: /* @__PURE__ */ __name(function(k, fn) {
            return ev.off(k, fn);
          }, "off"),
          status: /* @__PURE__ */ __name(function() {
            return st;
          }, "status"),
          ready: /* @__PURE__ */ __name(function() {
            return new Promise(function(res) {
              if (cy) res(cy);
              else rdy.push(res);
            });
          }, "ready"),
          setGraph: /* @__PURE__ */ __name(function(g) {
            graph = g || { nodes: [], edges: [] };
            this.graph = graph;
            try {
              window.kernel = window.kernel || {};
              window.kernel.graph = graph;
            } catch (_) {
            }
            return graph;
          }, "setGraph"),
          getGraph: /* @__PURE__ */ __name(function() {
            return graph;
          }, "getGraph"),
          graph
        };
        window.graphStore = window.graphStore || api;
        var initCy = getCy();
        if (initCy) adopt(initCy);
        document.addEventListener("cy:ready", function(e) {
          try {
            adopt(e && e.detail && e.detail.cy);
          } catch (_) {
          }
        });
        document.addEventListener("cld:ready", function(e) {
          try {
            adopt(e && e.detail && e.detail.cy);
          } catch (_) {
          }
        });
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", watchFactory, { once: true });
        } else {
          watchFactory();
        }
      })();
    }
  });

  // docs/assets/water-cld.cy-stub.js
  var require_water_cld_cy_stub = __commonJS({
    "docs/assets/water-cld.cy-stub.js"() {
      typeof window !== "undefined" && !getCy() && function() {
        if (window.__CY_STUB__) return;
        window.__CY_STUB__ = true;
        "use strict";
        var noop = /* @__PURE__ */ __name(function() {
        }, "noop");
        var toArr = /* @__PURE__ */ __name(function(a) {
          return Array.prototype.slice.call(a || []);
        }, "toArr");
        var queue = [];
        function enqueue(kind, method, args, selectorRef) {
          queue.push({ kind, method, args: toArr(args), selectorRef: selectorRef || null });
        }
        __name(enqueue, "enqueue");
        function makeSelectorRef(base) {
          var val = base.value;
          if (base.type === "id") {
            val = val != null ? String(val) : void 0;
          } else if (base.type === "elements" || base.type === "query") {
            val = typeof val === "string" ? val : void 0;
          }
          return { type: base.type, value: val, ops: [] };
        }
        __name(makeSelectorRef, "makeSelectorRef");
        function resolveBase(real, ref) {
          if (!ref) return real.elements();
          if (ref.type === "id") return real.getElementById(ref.value);
          if (ref.type === "query") return real.$(ref.value);
          return real.elements(ref.value);
        }
        __name(resolveBase, "resolveBase");
        function applyOps(coll, ops) {
          var cur = coll;
          for (var i = 0; i < (ops || []).length; i++) {
            var op = ops[i];
            if (cur && typeof cur[op.method] === "function") {
              cur = cur[op.method].apply(cur, toArr(op.args));
            }
          }
          return cur;
        }
        __name(applyOps, "applyOps");
        function flush(real) {
          if (!real || !queue.length) return;
          try {
            for (var i = 0; i < queue.length; i++) {
              var op = queue[i];
              if (op.kind === "cy") {
                var fnCy = real[op.method];
                if (typeof fnCy === "function") fnCy.apply(real, op.args);
              } else if (op.kind === "collection") {
                var base = resolveBase(real, op.selectorRef);
                var coll = applyOps(base, op.selectorRef && op.selectorRef.ops || []);
                var fnCo = coll && coll[op.method];
                if (typeof fnCo === "function") fnCo.apply(coll, op.args);
              }
            }
          } catch (_) {
          }
          queue.length = 0;
        }
        __name(flush, "flush");
        function makeCollectionProxy(selectorRef) {
          var api = {};
          var chainOps = ["filter"];
          for (var i = 0; i < chainOps.length; i++) {
            (function(m) {
              api[m] = function() {
                var sel = typeof arguments[0] === "string" ? arguments[0] : void 0;
                selectorRef.ops.push({ method: m, args: [sel] });
                return api;
              };
            })(chainOps[i]);
          }
          var actionOps = [
            "add",
            "remove",
            "addClass",
            "removeClass",
            "toggleClass",
            "style",
            "data",
            "animate",
            "layout",
            "move"
          ];
          for (var j = 0; j < actionOps.length; j++) {
            (function(m) {
              api[m] = function() {
                enqueue("collection", m, arguments, selectorRef);
                return api;
              };
            })(actionOps[j]);
          }
          api.forEach = noop;
          api.map = function() {
            return [];
          };
          try {
            Object.defineProperty(api, "length", { get: /* @__PURE__ */ __name(function() {
              return 0;
            }, "get") });
          } catch (_) {
            api.length = 0;
          }
          api[0] = api;
          try {
            Object.defineProperty(api, 1, { get: /* @__PURE__ */ __name(function() {
              return api;
            }, "get") });
            Object.defineProperty(api, 2, { get: /* @__PURE__ */ __name(function() {
              return api;
            }, "get") });
          } catch (_) {
          }
          return api;
        }
        __name(makeCollectionProxy, "makeCollectionProxy");
        var realCy = null;
        var cyStub = {
          // selectors
          elements: /* @__PURE__ */ __name(function(sel) {
            return makeCollectionProxy(makeSelectorRef({ type: "elements", value: sel }));
          }, "elements"),
          nodes: /* @__PURE__ */ __name(function(sel) {
            return makeCollectionProxy(makeSelectorRef({ type: "elements", value: sel }));
          }, "nodes"),
          edges: /* @__PURE__ */ __name(function(sel) {
            return makeCollectionProxy(makeSelectorRef({ type: "elements", value: sel }));
          }, "edges"),
          getElementById: /* @__PURE__ */ __name(function(id) {
            return makeCollectionProxy(makeSelectorRef({ type: "id", value: id }));
          }, "getElementById"),
          $: /* @__PURE__ */ __name(function(query) {
            return makeCollectionProxy(makeSelectorRef({ type: "query", value: query }));
          }, "$"),
          // events & batching
          on: noop,
          off: noop,
          startBatch: noop,
          endBatch: noop,
          batch: /* @__PURE__ */ __name(function(fn) {
            try {
              if (typeof fn === "function") fn.call(this);
            } catch (_) {
            }
          }, "batch"),
          // cy-level ops (queued)
          fit: /* @__PURE__ */ __name(function() {
            enqueue("cy", "fit", arguments);
          }, "fit"),
          add: /* @__PURE__ */ __name(function() {
            enqueue("cy", "add", arguments);
          }, "add"),
          remove: /* @__PURE__ */ __name(function() {
            enqueue("cy", "remove", arguments);
          }, "remove"),
          addClass: /* @__PURE__ */ __name(function() {
            enqueue("cy", "addClass", arguments);
          }, "addClass"),
          removeClass: /* @__PURE__ */ __name(function() {
            enqueue("cy", "removeClass", arguments);
          }, "removeClass"),
          style: /* @__PURE__ */ __name(function() {
            enqueue("cy", "style", arguments);
          }, "style"),
          reset: /* @__PURE__ */ __name(function() {
            enqueue("cy", "reset", arguments);
          }, "reset"),
          layout: /* @__PURE__ */ __name(function() {
            enqueue("cy", "layout", arguments);
          }, "layout")
        };
        cyStub.graph = { meta: { synonymToId: /* @__PURE__ */ new Map(), nodes: /* @__PURE__ */ new Map(), edges: /* @__PURE__ */ new Map() } };
        window.CLD_SAFE = window.CLD_SAFE || {};
        if (!window.CLD_SAFE.cy) window.CLD_SAFE.cy = cyStub;
        function setReal(v) {
          realCy = v;
          window.CLD_SAFE.cy = v;
          flush(realCy);
        }
        __name(setReal, "setReal");
        document.addEventListener("cy:ready", function(e) {
          var inst = e && e.detail && e.detail.cy;
          if (inst) {
            try {
              setReal(inst);
            } catch (_) {
            }
          }
        });
        document.addEventListener("cld:ready", function(e) {
          var inst = e && e.detail && e.detail.cy;
          if (inst) {
            try {
              setReal(inst);
            } catch (_) {
            }
          }
        });
        setTimeout(function() {
          try {
            var c = getCy();
            if (c && c !== cyStub) flush(c);
          } catch (_) {
          }
        }, 200);
      }();
    }
  });

  // docs/assets/water-cld.cy-addclass-patch.js
  var require_water_cld_cy_addclass_patch = __commonJS({
    "docs/assets/water-cld.cy-addclass-patch.js"() {
      (function() {
        if (window.__CLD_ADDCLASS_PATCH__) return;
        window.__CLD_ADDCLASS_PATCH__ = true;
        function patch() {
          try {
            var proto = window.cytoscape && window.cytoscape.Collection && window.cytoscape.Collection.prototype;
            if (!proto || proto.__CLD_ADDCLASS_PATCHED__) return;
            var orig = proto.addClass;
            proto.addClass = function(cls) {
              try {
                if (window.CLD_SAFE && typeof window.CLD_SAFE.safeAddClass === "function") {
                  window.CLD_SAFE.safeAddClass(this, cls, orig);
                } else {
                  orig.call(this, cls);
                }
              } catch (_) {
              }
              return this;
            };
            proto.__CLD_ADDCLASS_PATCHED__ = true;
          } catch (_) {
          }
        }
        __name(patch, "patch");
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", patch, { once: true });
        } else {
          patch();
        }
        document.addEventListener("cy:ready", patch);
      })();
    }
  });

  // docs/assets/water-cld.cy-batch-guard.js
  var require_water_cld_cy_batch_guard = __commonJS({
    "docs/assets/water-cld.cy-batch-guard.js"() {
      (function() {
        if (window.__CY_BATCH_GUARD__) return;
        window.__CY_BATCH_GUARD__ = true;
        function ensureBatchOnProto() {
          if (!window.cytoscape || !window.cytoscape.Core) return false;
          const P = window.cytoscape.Core.prototype;
          if (typeof P.startBatch !== "function") P.startBatch = function() {
            this.___batched = true;
          };
          if (typeof P.endBatch !== "function") P.endBatch = function() {
            this.___batched = false;
          };
          return true;
        }
        __name(ensureBatchOnProto, "ensureBatchOnProto");
        function ensureBatchOnInstance(cy) {
          if (!cy) return;
          if (typeof cy.startBatch !== "function") cy.startBatch = function() {
            this.___batched = true;
          };
          if (typeof cy.endBatch !== "function") cy.endBatch = function() {
            this.___batched = false;
          };
        }
        __name(ensureBatchOnInstance, "ensureBatchOnInstance");
        function wrapFactory() {
          if (!window.cytoscape || window.cytoscape.__BATCH_WRAPPED__) return;
          const orig = window.cytoscape;
          window.cytoscape = function(...args) {
            const inst = orig.apply(this, args);
            try {
              ensureBatchOnProto();
              ensureBatchOnInstance(inst);
            } catch (_) {
            }
            try {
              document.dispatchEvent(new CustomEvent("cy:ready", { detail: { cy: inst } }));
            } catch (_) {
            }
            return inst;
          };
          window.cytoscape.__BATCH_WRAPPED__ = true;
        }
        __name(wrapFactory, "wrapFactory");
        function patchAll() {
          ensureBatchOnProto();
          var c = getCy();
          if (c) ensureBatchOnInstance(c);
          wrapFactory();
        }
        __name(patchAll, "patchAll");
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", patchAll, { once: true });
        } else {
          patchAll();
        }
        document.addEventListener("cy:ready", function(e) {
          ensureBatchOnProto();
          ensureBatchOnInstance(e && e.detail && e.detail.cy);
        });
        document.addEventListener("cld:ready", function(e) {
          ensureBatchOnProto();
          ensureBatchOnInstance(e && e.detail && e.detail.cy);
        });
      })();
    }
  });

  // docs/assets/water-cld.cy-collection-guard.js
  var require_water_cld_cy_collection_guard = __commonJS({
    "docs/assets/water-cld.cy-collection-guard.js"() {
      (function() {
        if (window.__CY_COLL_GUARD__) return;
        window.__CY_COLL_GUARD__ = true;
        function install(cy) {
          if (!cy || cy.__SAFE_COLL_INSTALLED__) return;
          const pending = [];
          function ensureListeners() {
            if (cy.__SAFE_COLL_LISTENERS__) return;
            cy.on("add", "*", function() {
              try {
                if (!pending.length) return;
                for (let i = pending.length - 1; i >= 0; i--) {
                  const p = pending[i];
                  const sel = p.selectorPath.join("");
                  const coll = cy.$(sel);
                  if (coll.length > 0) {
                    const fn = coll[p.method];
                    if (typeof fn === "function") try {
                      fn.apply(coll, p.args);
                    } catch (_) {
                    }
                    pending.splice(i, 1);
                  }
                }
              } catch (_) {
              }
            });
            cy.__SAFE_COLL_LISTENERS__ = true;
          }
          __name(ensureListeners, "ensureListeners");
          function wrapCollection(coll, selectorPath) {
            if (!coll) coll = cy.collection();
            if (coll.__SAFE_WRAPPED__) return coll;
            selectorPath = selectorPath || [""];
            const actions = ["add", "remove", "addClass", "removeClass", "toggleClass", "style", "data", "animate", "layout", "move"];
            const chainers = ["filter"];
            const handler = {
              get(target, prop) {
                if (typeof prop === "string" && /^\d+$/.test(prop)) {
                  const singular = {};
                  actions.forEach((m) => {
                    singular[m] = function() {
                      if (target.length > 0) {
                        const els = target;
                        const fn = els[m];
                        if (typeof fn === "function") return fn.apply(els, arguments);
                      } else {
                        pending.push({ selectorPath, method: m, args: Array.prototype.slice.call(arguments) });
                        ensureListeners();
                      }
                      return singular;
                    };
                  });
                  return singular;
                }
                if (actions.includes(prop)) {
                  return function() {
                    if (target.length > 0) {
                      const fn = target[prop];
                      if (typeof fn === "function") return fn.apply(target, arguments);
                    } else {
                      pending.push({ selectorPath, method: prop, args: Array.prototype.slice.call(arguments) });
                      ensureListeners();
                    }
                    return wrapCollection(target, selectorPath);
                  };
                }
                if (chainers.includes(prop)) {
                  return function() {
                    const args = Array.prototype.slice.call(arguments);
                    const selToken = typeof args[0] === "string" ? args[0] : "";
                    const nextPath = selectorPath.concat([selToken]);
                    const next = target[prop].apply(target, args);
                    return wrapCollection(next, nextPath);
                  };
                }
                const val = target[prop];
                return typeof val === "function" ? val.bind(target) : val;
              }
            };
            const proxy = new Proxy(coll, handler);
            proxy.__SAFE_WRAPPED__ = true;
            return proxy;
          }
          __name(wrapCollection, "wrapCollection");
          const orig = {
            elements: cy.elements.bind(cy),
            nodes: cy.nodes.bind(cy),
            edges: cy.edges.bind(cy),
            $: cy.$.bind(cy),
            getElementById: cy.getElementById.bind(cy),
            collection: cy.collection.bind(cy)
          };
          cy.elements = function(sel) {
            const s = typeof sel === "string" ? sel : void 0;
            return wrapCollection(orig.elements(s), [s || ""]);
          };
          cy.nodes = function(sel) {
            const s = typeof sel === "string" ? sel : void 0;
            return wrapCollection(orig.nodes(s), [s || ""]);
          };
          cy.edges = function(sel) {
            const s = typeof sel === "string" ? sel : void 0;
            return wrapCollection(orig.edges(s), [s || ""]);
          };
          cy.$ = function(q) {
            const s = typeof q === "string" ? q : void 0;
            return wrapCollection(orig.$(s), [s || ""]);
          };
          cy.getElementById = function(id) {
            return wrapCollection(orig.getElementById(id), ["[#" + id + "]"]);
          };
          cy.__SAFE_COLL_INSTALLED__ = true;
        }
        __name(install, "install");
        function tryInstall() {
          try {
            const c = getCy();
            if (c) install(c);
            if (window.cytoscape && !window.cytoscape.__SAFE_WRAP_COLLECTIONS__) {
              const orig = window.cytoscape;
              window.cytoscape = function() {
                const inst = orig.apply(this, arguments);
                try {
                  install(inst);
                } catch (_) {
                }
                return inst;
              };
              window.cytoscape.__SAFE_WRAP_COLLECTIONS__ = true;
            }
          } catch (_) {
          }
        }
        __name(tryInstall, "tryInstall");
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", tryInstall, { once: true });
        } else {
          tryInstall();
        }
        document.addEventListener("cy:ready", function(e) {
          try {
            install(e && e.detail && e.detail.cy);
          } catch (_) {
          }
        });
        document.addEventListener("cld:ready", function(e) {
          try {
            install(e && e.detail && e.detail.cy);
          } catch (_) {
          }
        });
      })();
    }
  });

  // docs/assets/water-cld.cy-safe-add.js
  var require_water_cld_cy_safe_add = __commonJS({
    "docs/assets/water-cld.cy-safe-add.js"() {
      (function() {
        if (window.__CY_SAFE_ADD__) return;
        window.__CY_SAFE_ADD__ = true;
        function install(cy) {
          if (!cy || cy.__SAFE_ADD_INSTALLED__) return;
          const orig = {
            add: cy.add.bind(cy),
            json: cy.json.bind(cy),
            $: cy.$.bind(cy),
            id: /* @__PURE__ */ __name((id) => cy.getElementById ? cy.getElementById(id) : cy.$("#" + id), "id")
          };
          const pendingEdges = [];
          function existsNode(id) {
            if (id === void 0 || id === null) return false;
            const col = orig.id(String(id));
            return !!(col && col.length && col.length > 0);
          }
          __name(existsNode, "existsNode");
          function isNode(el) {
            return el && (el.group === "nodes" || el.data && el.data.id && !el.data.source && !el.data.target);
          }
          __name(isNode, "isNode");
          function isEdge(el) {
            return el && (el.group === "edges" || el.data && el.data.source && el.data.target);
          }
          __name(isEdge, "isEdge");
          function normalize(input) {
            if (typeof input === "string") return { passthrough: input };
            if (Array.isArray(input)) return splitArray(input);
            if (input && input.elements) return splitArray(input.elements);
            if (input && (isNode(input) || isEdge(input))) return splitArray([input]);
            return { passthrough: input };
          }
          __name(normalize, "normalize");
          function splitArray(arr) {
            const nodes = [], edges = [];
            for (const el of arr || []) {
              if (isEdge(el)) edges.push(clone(el));
              else if (isNode(el)) nodes.push(clone(el));
            }
            return { nodes, edges };
          }
          __name(splitArray, "splitArray");
          function clone(el) {
            try {
              return JSON.parse(JSON.stringify(el));
            } catch (_) {
              return el;
            }
          }
          __name(clone, "clone");
          function dedupe(list) {
            const out = [], seen = /* @__PURE__ */ new Set();
            for (const el of list || []) {
              const id = el && el.data && el.data.id;
              if (id && !seen.has(id)) {
                seen.add(id);
                out.push(el);
              }
            }
            return out;
          }
          __name(dedupe, "dedupe");
          function addNodes(nodes) {
            if (!nodes || !nodes.length) return cy.collection();
            const fresh = nodes.filter((n) => !existsNode(n && n.data && n.data.id));
            if (!fresh.length) return cy.collection();
            try {
              cy.startBatch && cy.startBatch();
            } catch (_) {
            }
            const out = orig.add(fresh);
            try {
              cy.endBatch && cy.endBatch();
            } catch (_) {
            }
            return out;
          }
          __name(addNodes, "addNodes");
          function tryAddEdges(edges) {
            if (!edges || !edges.length) return cy.collection();
            const ready = [], wait = [];
            for (const e of edges) {
              const s = e && e.data && e.data.source;
              const t = e && e.data && e.data.target;
              existsNode(s) && existsNode(t) ? ready.push(e) : wait.push(e);
            }
            let added = cy.collection();
            if (ready.length) {
              try {
                cy.startBatch && cy.startBatch();
              } catch (_) {
              }
              added = orig.add(ready);
              try {
                cy.endBatch && cy.endBatch();
              } catch (_) {
              }
            }
            if (wait.length) {
              pendingEdges.push.apply(pendingEdges, wait);
              setTimeout(function() {
                if (!pendingEdges.length) return;
                try {
                  cy.startBatch && cy.startBatch();
                } catch (_) {
                }
                const copy = pendingEdges.splice(0, pendingEdges.length);
                const r2 = [], w2 = [];
                for (const e of copy) {
                  const s = e && e.data && e.data.source;
                  const t = e && e.data && e.data.target;
                  existsNode(s) && existsNode(t) ? r2.push(e) : w2.push(e);
                }
                if (r2.length) try {
                  orig.add(r2);
                } catch (_) {
                }
                if (w2.length) pendingEdges.push.apply(pendingEdges, w2);
                try {
                  cy.endBatch && cy.endBatch();
                } catch (_) {
                }
              }, 0);
            }
            return added;
          }
          __name(tryAddEdges, "tryAddEdges");
          function attachReplayOnce() {
            if (cy.__SAFE_ADD_REPLAY__) return;
            cy.on("add", "node", function() {
              if (!pendingEdges.length) return;
              try {
                cy.startBatch && cy.startBatch();
              } catch (_) {
              }
              const copy = pendingEdges.splice(0, pendingEdges.length);
              tryAddEdges(copy);
              try {
                cy.endBatch && cy.endBatch();
              } catch (_) {
              }
            });
            cy.__SAFE_ADD_REPLAY__ = true;
          }
          __name(attachReplayOnce, "attachReplayOnce");
          cy.add = function(input) {
            const pack = normalize(input);
            if (pack.passthrough !== void 0) return orig.add(pack.passthrough);
            const nodes = dedupe(pack.nodes);
            const edges = dedupe(pack.edges);
            const col1 = addNodes(nodes);
            const col2 = tryAddEdges(edges);
            attachReplayOnce();
            return col1.union(col2);
          };
          cy.json = function(obj) {
            if (obj && obj.elements) {
              const pack = normalize(obj);
              const nodes = dedupe(pack.nodes);
              const edges = dedupe(pack.edges);
              try {
                cy.startBatch && cy.startBatch();
              } catch (_) {
              }
              cy.elements().remove();
              addNodes(nodes);
              tryAddEdges(edges);
              try {
                cy.endBatch && cy.endBatch();
              } catch (_) {
              }
              attachReplayOnce();
              return orig.json({ elements: cy.elements().jsons() });
            }
            return orig.json(obj);
          };
          cy.__SAFE_ADD_INSTALLED__ = true;
        }
        __name(install, "install");
        function tryInstall() {
          try {
            const c = getCy();
            if (c) install(c);
            if (window.cytoscape && !window.cytoscape.__SAFE_ADD_WRAP__) {
              const factory = window.cytoscape;
              window.cytoscape = function() {
                const inst = factory.apply(this, arguments);
                try {
                  install(inst);
                } catch (_) {
                }
                return inst;
              };
              window.cytoscape.__SAFE_ADD_WRAP__ = true;
            }
          } catch (_) {
          }
        }
        __name(tryInstall, "tryInstall");
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", tryInstall, { once: true });
        } else {
          tryInstall();
        }
        document.addEventListener("cy:ready", function(e) {
          try {
            install(e && e.detail && e.detail.cy);
          } catch (_) {
          }
        });
        document.addEventListener("cld:ready", function(e) {
          try {
            install(e && e.detail && e.detail.cy);
          } catch (_) {
          }
        });
      })();
    }
  });

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
        function define2() {
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
        __name(define2, "define");
        define2();
        document.addEventListener("cy:ready", define2);
        document.addEventListener("cld:ready", define2);
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
      var import_cytoscape_min = __toESM(require_cytoscape_min());
      var import_sentinel = __toESM(require_sentinel());
      var import_graph_store = __toESM(require_graph_store());
      var import_water_cld_cy_stub = __toESM(require_water_cld_cy_stub());
      var import_water_cld_cy_addclass_patch = __toESM(require_water_cld_cy_addclass_patch());
      var import_water_cld_cy_batch_guard = __toESM(require_water_cld_cy_batch_guard());
      var import_water_cld_cy_collection_guard = __toESM(require_water_cld_cy_collection_guard());
      var import_water_cld_cy_safe_add = __toESM(require_water_cld_cy_safe_add());
      var import_water_cld_runtime_guards = __toESM(require_water_cld_runtime_guards());
      var import_water_cld_cy_alias = __toESM(require_water_cld_cy_alias());
      var import_water_cld = __toESM(require_water_cld());
      (async () => {
        await (window.__WATER_CLD_READY__ || Promise.resolve());
        const cy = window.CLD_SAFE && window.CLD_SAFE.cy || window.cy;
        window.CLD_SAFE = window.CLD_SAFE || {};
        window.CLD_SAFE.cy = cy;
        if (!window._cyDom) window.cy = cy;
        document.dispatchEvent(new CustomEvent("cld:ready", { detail: { cy } }));
      })();
    }
  });
  require_watercld_entry();
})();
//# sourceMappingURL=water-cld.bundle.js.map
