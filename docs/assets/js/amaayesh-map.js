;(function(){
  const BID = document.querySelector('meta[name="build-id"]')?.content || String(Date.now());
  window.__AMA_UI_VERSION = 'dock-probe-v1';
  window.__AMA_BUILD_ID = BID;
  console.info('[AMA:UI]', window.__AMA_UI_VERSION, 'build=', BID, 'path=', location.pathname);
  // tiny top-left badge for visual confirmation (removable later)
  try {
    const el = document.createElement('div');
    el.id = 'ama-ui-probe';
    el.style.cssText = 'position:fixed;left:8px;top:8px;z-index:9999;background:#111;color:#0ff;padding:4px 8px;border-radius:8px;font:12px/1 Vazirmatn,system-ui';
    el.textContent = 'AMA UI • ' + window.__AMA_UI_VERSION;
    document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(el));
    setTimeout(()=>{ const n=document.getElementById('ama-ui-probe'); n && n.remove(); }, 3000);
  } catch(e){}
})();

// ===== BEGIN WIND DIAG BASICS =====
window.AMA_DEBUG = ((new URLSearchParams(location.search)).get('ama_debug')==='1') || localStorage.getItem('AMA_DEBUG')==='1';
window.AMA_BUILD_ID = window.__AMA_BUILD_ID;
window.__WIND_DATA_READY = false;
window.__WIND_WEIGHTS_MISSING = false;

function normalizeFaName(s){ if(!s) return ''; return String(s).replace(/\u200c/g,' ')
    .replace(/ي/g,'ی').replace(/ك/g,'ک')
    .replace(/[^\p{L}\p{N}\s]/gu,'')  // drop punctuation
    .replace(/\s+/g,' ').trim(); }
function normalizeKey(s){ return normalizeFaName(s).replace(/\s+/g,''); }
const COUNTY_ALIASES = { 'تربتجام':'تربت‌جام', 'مهولات':'مه‌ولات', 'مشهد':'مشهد', 'نیشابور':'نیشابور' };
async function resolveDataUrl(file){
  const bases = ['data/','./data/','amaayesh/data/','/amaayesh/data/'];
  for(const b of bases){
    const url = `${b}${file}?v=${window.AMA_BUILD_ID}`;
    try{ const r = await fetch(url,{method:'GET',cache:'no-store'}); if(r.ok){ if(window.AMA_DEBUG) console.info('[resolve]',file,'→',url); return url; } }catch{}
  }
  if(window.AMA_DEBUG) console.warn('[resolve] NOT FOUND:', file);
  return null;
}
function isPolyFeature(f){ if(!f||!f.geometry) return false; const t=f.geometry.type; return t==='Polygon'||t==='MultiPolygon'; }
function featureHasCountyProp(f){ const p=f.properties||{}; return !!(p.county||p.name_fa||p.name); }
function collectGeoJsonLayersDeep(root){
  const out=[]; function dfs(l){ if(!l) return;
    if(l instanceof L.GeoJSON) out.push(l);
    if(typeof l.getLayers==='function') l.getLayers().forEach(dfs);
  }
  if(root && root._layers) Object.values(root._layers).forEach(dfs);
  dfs(root); return out;
}
function pickBestCountiesLayer(map){
  const cands = collectGeoJsonLayersDeep(map).map(l=>{
    let total=0, named=0;
    if(typeof l.eachLayer==='function') l.eachLayer(sl=>{
      if(sl.feature && isPolyFeature(sl.feature)){ total++; if(featureHasCountyProp(sl.feature)) named++; }
    });
    return {layer:l,total,named};
  }).filter(x=>x.total>0);
  cands.sort((a,b)=>(b.named-a.named)||(b.total-a.total));
  return cands[0]?.layer||null;
}
function ensureCountiesLayer(map){
  if(!window.__countiesLayer){
    const best = pickBestCountiesLayer(map);
    if(best){ window.__countiesLayer = best; if(window.AMA_DEBUG){ let n=0; best.eachLayer(l=>{ if(l.feature&&isPolyFeature(l.feature)) n++; }); console.info('[counties pick] features:', n); } }
  }
}
function eachPolyFeatureLayer(root, fn){
  function walk(l){
    if(!l) return;
    if(typeof l.getLayers==='function'){ l.getLayers().forEach(walk); return; }
    if(l.feature && isPolyFeature(l.feature)) fn(l);
  }
  walk(root);
}
// expose active KPI (default)
window.__activeWindKPI = localStorage.getItem('ama-wind-metric') || 'wind_wDensity';
window.setActiveWindKPI = function(k){
  window.__activeWindKPI = k; localStorage.setItem('ama-wind-metric', k);
  if(window.__countiesLayer){ eachPolyFeatureLayer(window.__countiesLayer, leaf=>leaf.setStyle(styleForCounty(leaf.feature))); }
  if(typeof renderLegend==='function') renderLegend();
  if(typeof __AMA_renderTop10==='function') __AMA_renderTop10();
};
// ===== END WIND DIAG BASICS =====

async function fetchCSVResolved(file){
  const u = await resolveDataUrl(file); if(!u) return null;
  const r = await fetch(u,{cache:'no-store'}); if(!r.ok) return null;
  return await r.text();
}
function parseCSV(text){
  if(!text) return [];
  const lines = text.replace(/^\uFEFF/,'').split(/\r?\n/).filter(Boolean);
  const headers = lines.shift().split(',').map(h=>h.trim());
  return lines.map(line=>{
    const cols = line.split(',');
    const row = {};
    headers.forEach((h,i)=> row[h] = (cols[i]||'').trim());
    return row;
  });
}

function styleForCounty(feature){
  // Uses ACTIVE KPI, with clear zero/NoData behavior
  const k = window.__activeWindKPI || 'wind_wDensity';
  const has = !!feature.properties.__hasWindData;
  const v = feature.properties[k];
  if(!has) return {fillOpacity:.15, color:'#666', weight:.8, dashArray:'3', fillColor:'#ddd'};
  if(v===0 || v===0.0) return {fillOpacity:.8, color:'#555', weight:.8, fillColor:'#f2f2f2'};
  // simple 5-classes ramp (replace with your jenks if available)
  const ramps = ['#e0f2fe','#bae6fd','#7dd3fc','#38bdf8','#0ea5e9'];
  const breaks = feature.properties.__windBreaks || [0.2,0.4,0.6,0.8];  // fallback
  let idx = 0; if(v>breaks[0]) idx=1; if(v>breaks[1]) idx=2; if(v>breaks[2]) idx=3; if(v>breaks[3]) idx=4;
  return {fillOpacity:.85, color:'#555', weight:.8, fillColor:ramps[idx]};
}

window.runWindSelfCheck = function(){
  try{
    if(!window.__countiesLayer){ if(window.AMA_DEBUG) console.warn('no countiesLayer'); return; }
    const rows=[]; let has=0, nod=0;
    eachPolyFeatureLayer(window.__countiesLayer, l=>{
      const f=l.feature||{}; const p=f.properties||{};
      const nm = normalizeFaName(p.county || p.name_fa || p.name || '');
      const hd = !!p.__hasWindData;
      if(hd) has++; else nod++;
      rows.push({name:nm, has:hd, N:p.wind_N, sumW:p.wind_sumW, wD:p.wind_wDensity, dN:p.wind_density, avgW:p.wind_avgW});
    });
    window.__WIND_SELF_CHECK = {mapCount:rows.length, hasData:has, noData:nod};
    if(window.AMA_DEBUG){ console.group('WIND SELF-CHECK'); console.table(rows.slice(0,12)); console.log(window.__WIND_SELF_CHECK); console.groupEnd(); }
  }catch(e){ if(window.AMA_DEBUG) console.error('runWindSelfCheck', e); }
};

async function joinWindWeightsOnAll(){
  try{
    const u = await resolveDataUrl('wind_weights_by_county.csv');
    if(!u){ window.__WIND_WEIGHTS_MISSING=true; if(window.AMA_DEBUG) console.warn('[join] weights CSV not found'); return; }
    const txt = await fetch(u,{cache:'no-store'}).then(r=>r.ok?r.text():null);
    if(!txt){ window.__WIND_WEIGHTS_MISSING=true; if(window.AMA_DEBUG) console.warn('[join] empty CSV'); return; }

    const lines = txt.replace(/^\uFEFF/,'').split(/\r?\n/).filter(Boolean);
    const headers = lines.shift().split(',').map(h=>h.trim());
    const idx = Object.create(null);
    lines.forEach(line=>{
      const cols = line.split(',');
      const row={}; headers.forEach((h,i)=>row[h]=(cols[i]||'').trim());
      const raw = row['county']; const k = normalizeKey(raw);
      const alias = COUNTY_ALIASES[k] || raw;
      idx[ normalizeKey(alias) ] = row;
    });
    window.__weightsIdx = idx;

    const layer = window.__countiesLayer;
    if(!layer){ if(window.AMA_DEBUG) console.warn('[join] no counties layer'); return; }

    let mapCount=0, hasData=0, noData=0;
    const onlyInMap=[], onlyInIdx=[], mapNames=[];
    function eachDeep(l,fn){ if(!l) return;
      if(typeof l.getLayers==='function'){ l.getLayers().forEach(sl=>eachDeep(sl,fn)); return; }
      if(l.feature && isPolyFeature(l.feature)) fn(l);
    }
    eachDeep(layer, leaf=>{
      const f=leaf.feature, p=f.properties||(f.properties={}); mapCount++;
      const rawName = p.county || p.name_fa || p.name || '';
      const key = normalizeKey(rawName);
      mapNames.push(key);
      const w = idx[key];
      if(w){
        const n=+w.n_sites||0, s=+w.sum_w||0, avg=+w.w_avg||0;
        p.wind_N=n; p.wind_sumW=s; p.wind_avgW=avg;
        const a = p.area_km2>0 ? p.area_km2 : 0;
        p.wind_density = a? (n/a):0; p.wind_wDensity = a? (s/a):0;
        p.__hasWindData=true; hasData++;
      }else{
        p.wind_N=p.wind_sumW=p.wind_avgW=0; p.wind_density=p.wind_wDensity=0; p.__hasWindData=false; noData++; onlyInMap.push(rawName);
      }
      if(typeof styleForCounty==='function') leaf.setStyle(styleForCounty(f));
    });
    Object.keys(idx).forEach(k=>{ if(!mapNames.includes(k)) onlyInIdx.push(idx[k].county); });

    window.__WIND_DATA_READY = true;
    window.__WIND_SELF_CHECK = { mapCount, hasData, noData, onlyInMap, onlyInIdx };
    if(window.AMA_DEBUG){ console.group('[join report]'); console.log(window.__WIND_SELF_CHECK); console.groupEnd(); }
    if(typeof renderLegend==='function') renderLegend();
    if(typeof __AMA_renderTop10==='function') __AMA_renderTop10();
  }catch(e){
    window.__WIND_WEIGHTS_MISSING=true;
    if(window.AMA_DEBUG) console.error('[join error]', e);
  }
}

// Debug flag and fetch logger
window.AMA_DEBUG = window.AMA_DEBUG || /\b(ama_debug|debug)=1\b/.test(location.search);
if (window.AMA_DEBUG && typeof window.fetch === 'function') {
  const _origFetch = window.fetch;
  window.fetch = async function(...args){
    const url = typeof args[0] === 'string' ? args[0] : (args[0]?.url || '');
    const t0 = performance.now();
    try {
      const res = await _origFetch.apply(this, args);
      const dt = Math.round(performance.now() - t0);
      console.log('[ama:fetch]', res.status, url, `${dt}ms`);
      return res;
    } catch (e) {
      const dt = Math.round(performance.now() - t0);
      console.warn('[ama:fetch-err]', url, e?.message, `${dt}ms`);
      throw e;
    }
  };
}

window.addEventListener('unhandledrejection', e => {
  const msg = e?.reason?.message || e?.reason || '';
  if (/message channel closed/i.test(String(msg))) {
    if (window.AMA_DEBUG) console.warn('[ama-ignore-ext]', msg);
    e.preventDefault();
  }
});
window.addEventListener('error', e => {
  const msg = e?.message || e?.error?.message || '';
  if (/message channel closed/i.test(String(msg))) {
    if (window.AMA_DEBUG) console.warn('[ama-ignore-ext]', msg);
    e.preventDefault();
  }
});

// (IIFE wrapper) — must be async to allow top-level await inside
(async function(){
  const labelFa = p => (p?.['name:fa'] || p?.['alt_name:fa'] || p?.name || '—');

    const map = L.map('map', { preferCanvas:true, zoomControl:true });
    const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
    // move attribution to bottom-left to avoid colliding with legend
    if (map.attributionControl && typeof map.attributionControl.setPosition === 'function') {
      map.attributionControl.setPosition('bottomleft');
    }
    map.setView([36.3, 59.6], 7);

    const ToolDock = L.Control.extend({
      options:{ position:'topleft' },
      onAdd: function(){
        const c = L.DomUtil.create('div','ama-dock');
        c.innerHTML = `
        <button class="btn" aria-label="لایه‌ها"    data-act="layers">🗂</button>
        <button class="btn" aria-label="ابزارها"    data-act="tools">🛠</button>
        <button class="btn" aria-label="جستجو"     data-act="search">🔎</button>
        <button class="btn" aria-label="دانلود"    data-act="download">⬇️</button>
        <button class="btn" aria-label="بازنشانی"  data-act="reset">↺</button>
        `;
        // stop map drag
        L.DomEvent.disableClickPropagation(c); L.DomEvent.disableScrollPropagation(c);
        // temp handlers
        c.addEventListener('click',(e)=>{
          const b = e.target.closest('button'); if(!b) return;
          const act = b.dataset.act;
          if(act==='reset' && window.__countiesLayer && window.__mapBounds){ map.fitBounds(window.__mapBounds); }
          if(window.AMA_DEBUG) console.info('[dock]', act);
        });
        return c;
      }
    });
    // remember map bounds once (to use with reset)
    if(!window.__mapBounds) setTimeout(()=>{ try{ window.__mapBounds = map.getBounds(); }catch{} }, 500);
    map.addControl(new ToolDock());

    if (window.AMA_DEBUG && map) {
      map.on('zoomend', () => console.log('[ama:event] zoomend =>', map.getZoom()));
      map.on('moveend', () => console.log('[ama:event] moveend =>', map.getCenter()));
    }

    const SuperclusterCtor = window?.Supercluster || null;

  let searchLayer = L.layerGroup().addTo(map);
  let boundary;
  let countiesGeo = null;
  let windSitesGeo = null;
  let __focused = null;
  let sidepanelEl = null;
  const currentSort = { key:'P0', dir:'desc' };
  let p0RankMap = {};

  // wind weights / KPI state
  let windKpiKey = localStorage.getItem('ama-kpi') || 'wind_wDensity';
  const windKpiLabels = {
    wind_N: 'N',
    wind_sumW: 'Σw',
    wind_density: 'N/km²',
    wind_wDensity: 'Σw/km²',
    wind_avgW: 'avgW'
  };
  let windSitesRaw = [];

  // === AMAAYESH DATA LOADER (path-robust) ===
  function normalizeName(name){
    // 1) حذف ./ و / اضافی در ابتدا
    let s = String(name).replace(/^\.\//,'').replace(/^\/+/,'');
    // 2) حذف پیشوندهای قدیمی که ممکن است از مانیفست آمده باشد
    s = s.replace(/^amaayesh\/data\//, '')
         .replace(/^data\/amaayesh\//, '')
         .replace(/^data\//, '')
         .replace(/^amaayesh\//, '');
    return s; // فقط filename.geojson
  }

  function resolveCandidates(name, kind) {
    if (kind === 'manifest') {
      return ['/amaayesh/layers.config.json', '/layers.config.json'];
    }
    if (kind === 'data') {
      const n = String(name).replace(/^\/+/,'');
      return ['/amaayesh/data/' + n, '/data/amaayesh/' + n];
    }
    return [name];
  }

  async function fetchJSONWithFallback(name, opt={}) {
    const { kind } = opt;
    if(kind==='data'){
      const u = await resolveDataUrl(name);
      if(!u) return null;
      try{
        const r = await fetch(u,{cache:'no-store'});
        if(r.ok){ if(window.AMA_DEBUG) console.log('[ama-probe] GET', u, r.status); return r.json(); }
      }catch(e){ if(window.AMA_DEBUG) console.log('[ama-probe] GET err', u, e.message || e); }
      return null;
    }
    const candidates = resolveCandidates(name, kind);
    for (const url of candidates) {
      try {
        const r = await fetch(url, { cache:'no-store' });
        if (r.ok) { if (window.AMA_DEBUG) console.log('[ama-probe] GET', url, r.status); return r.json(); }
      } catch (e) {
        if (window.AMA_DEBUG) console.log('[ama-probe] GET err', url, e.message || e);
      }
    }
    if (window.AMA_DEBUG) console.warn('[ama-data] failed to load:', name, 'candidates tried:', candidates);
    return null;
  }

  async function fetchCSV(name){
    const u = await resolveDataUrl(name);
    if(!u) throw new Error('CSV not found: '+name);
    try{
      const r = await fetch(u,{cache:'no-cache'});
      if(r.ok){
        const text = await r.text();
        if(window.AMA_DEBUG) console.log('[ama:data] CSV OK', u);
        return text;
      }
    }catch(e){ if(window.AMA_DEBUG) console.warn('[ama:data] CSV err', u, String(e)); }
    throw new Error('CSV not found: '+name);
  }

  window.__inspectDataPath = async function(name){
    const kind = name === 'layers.config.json' ? 'manifest' : 'data';
    const candidates = resolveCandidates(name, kind);
    const rows = [];
    if (!window.AMA_DEBUG) return rows;
    for (const url of candidates){
      let res = null;
      try { res = await fetch(url, { method:'GET', cache:'no-store' }); } catch (_) { }
      rows.push({
        url,
        method:'GET',
        status: res ? res.status : 'ERR',
        ok: res ? res.ok : false,
        redirected: res ? res.redirected : false,
      });
    }
    if (window.AMA_DEBUG) console.table(rows);
    return rows;
  };

  window.__amaRCA = async function(){
    const rows = [];
    const names = ['layers.config.json', 'counties.geojson', 'wind_sites.geojson'];
    for (const name of names) {
      const kind = name === 'layers.config.json' ? 'manifest' : 'data';
      const candidates = resolveCandidates(name, kind);
      for (const url of candidates) {
        let res = null;
        try { res = await fetch(url, { method:'GET', cache:'no-store' }); } catch (_) {}
        rows.push({
          name,
          url,
          method:'GET',
          status: res ? res.status : 'ERR',
          ok: res ? res.ok : false,
          redirected: res ? res.redirected : false,
          finalUrl: res ? res.url : ''
        });
      }
    }

    const manifestRow = rows.find(r => r.name === 'layers.config.json' && r.ok);
    const manifestUrl = manifestRow ? manifestRow.finalUrl : null;
    let manifestJson = null;
    try {
      if (manifestUrl) {
        const r = await fetch(manifestUrl, { cache:'no-store' });
        if (r.ok) manifestJson = await r.json();
      }
    } catch (_) {}

    const manifestFiles = Array.isArray(manifestJson?.files) ? manifestJson.files : [];
    const manifestSet = Array.from(window.__LAYER_MANIFEST || []);
    const boundaryOnMap = !!(boundary && map && map.hasLayer(boundary));
    const windSitesOnMap = !!(window.windSitesLayer && map && map.hasLayer(window.windSitesLayer));

    const symbols = [];
    const hasReeval = typeof (window.reevaluateLegendPosition || window.reEvaluateLegendPosition) === 'function';
    symbols.push({ name:'reevaluateLegendPosition', ok: hasReeval });
    if (!hasReeval && window.AMA_DEBUG) {
      console.error('[ama:rca] missing symbol: reevaluateLegendPosition at applyMode');
    }

    if (window.AMA_DEBUG) {
      console.groupCollapsed('AMA · RCA');
      console.table(rows);
      console.groupEnd();
    }

    return {
      rows,
      symbols,
      manifest: {
        exists: !!manifestUrl,
        url: manifestUrl,
        __LAYER_MANIFEST: manifestSet,
        files: manifestFiles,
        boundaryOnMap,
        windSitesOnMap
      }
    };
  };

  // --- manifest ---
  let __LAYER_MANIFEST = window.__LAYER_MANIFEST = (window.__LAYER_MANIFEST instanceof Set ? window.__LAYER_MANIFEST : new Set());

  function inManifest(name){
    const S = window.__LAYER_MANIFEST;
    if (!S || typeof S.has !== 'function') return false;
    const norm = normalizeName(name);
    return S.has(norm);
  }

  async function loadLayerManifest() {
    let set = new Set();
    window.__LAYER_MANIFEST = set;
    __LAYER_MANIFEST = set;
    try {
      // ✅ ابتدا به‌طور صریح مسیر /amaayesh/ را امتحان کن؛ سپس fallbackهای لودر فعال‌اند
      const man = await fetchJSONWithFallback('layers.config.json', { kind:'manifest' });
      set = new Set(Array.isArray(man?.files) ? man.files : []);
      window.__LAYER_MANIFEST = set;
      __LAYER_MANIFEST = set;
      if (set.size) {
        if (window.AMA_DEBUG) console.log('[ama-data] manifest loaded with', set.size, 'files');
      } else {
        if (window.AMA_DEBUG) console.warn('[ama-data] no manifest.files; will skip optional layers.');
      }
    } catch(e) {
      if (window.AMA_DEBUG) console.warn('[ama-data] manifest not found; will skip optional layers.');
      set = new Set();
      window.__LAYER_MANIFEST = set;
      __LAYER_MANIFEST = set;
      if (window.AMA_DEBUG) {
        console.warn('[ama:rca] manifest not loaded; __LAYER_MANIFEST is', !!window.__LAYER_MANIFEST);
      }
    }
    window.__amaManifestSnapshot = {
      files: Array.from(set || []),
      origin: null
    };
  }
  await loadLayerManifest();

  window.__dumpAmaState = function(){
    if (!window.AMA_DEBUG) return;
    const manifest = Array.from(window.__LAYER_MANIFEST || []);
    const scriptEl = document.querySelector('script[type="module"][src*="amaayesh-map"]') || document.currentScript;
    const scriptSrc = scriptEl ? scriptEl.src : '';
    const servedFromAma = /\/amaayesh\//.test(new URL(scriptSrc, location.href).pathname);
    console.group('[ama-dump]');
    console.log('pathname:', window.location.pathname);
    console.log('__LAYER_MANIFEST size:', manifest.length);
    console.log('__LAYER_MANIFEST list:', manifest);
    console.log('inManifest("counties.geojson"):', inManifest('counties.geojson'));
    console.log('inManifest("wind_sites.geojson"):', inManifest('wind_sites.geojson'));
    console.log('AMA_DATA_BASE:', window.AMA_DATA_BASE);
    console.log('script src:', scriptSrc);
    console.log('served from /amaayesh/?', servedFromAma);
    console.groupEnd();
  };
  if (window.AMA_DEBUG) {
    window.__dumpAmaState();
    window.__inspectDataPath('counties.geojson');
    window.__inspectDataPath('wind_sites.geojson');
  }

  // load a GeoJSON file only if manifest allows it
  async function optionalGeoJSONFile(file, opts = {}) {
    if (!inManifest(file)) {
      if (window.AMA_DEBUG) console.info('[ama-layer] skip (not in manifest):', file);
      return null;
    }
    const geo = await fetchJSONWithFallback(file, { kind:'data' });
    if (!geo?.features?.length) {
      if (window.AMA_DEBUG) console.warn('[ama-layer] missing or empty:', file);
      return null;
    }
    return L.geoJSON(geo, opts);
  }

  // لودر مقاوم با هندل 404 و فهرست fallbackها
  async function loadJSON(relOrList, { layerKey, fallbacks = [], kind } = {}) {
    const rels = Array.isArray(relOrList) ? relOrList : [relOrList];
    for (const rel of [...rels, ...fallbacks]) {
      const j = await fetchJSONWithFallback(rel, { kind });
      if (j) return j;
    }
    if (layerKey) disableLayerToggle(layerKey);
    if (window.AMA_DEBUG) console.info('⛔️ Dataset not found:', rels[0], '→ tried:', rels.concat(fallbacks));
    return null;
  }

  function disableLayerToggle(layerKey) {
    const el = document.querySelector(`[data-layer-key="${layerKey}"]`);
    if (el) {
      el.disabled = true;
      el.checked = false;
      el.title = 'فایل داده در این دیپلوی موجود نیست';
      el.closest('label')?.classList.add('is-disabled');
    }
  }

  // === Sidepanel helpers ===
  let sidepanelOverlay = null;
  function createSidepanel(){
    if(sidepanelEl) return;
    sidepanelOverlay = document.createElement('div');
    sidepanelOverlay.id = 'ama-sp-overlay';
    sidepanelOverlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.3);display:none;z-index:999;';
    document.body.appendChild(sidepanelOverlay);
    sidepanelOverlay.addEventListener('click', closeSidepanel);

    const div = document.createElement('div');
    div.id = 'ama-sidepanel';
    div.className = 'ama-sidepanel';
    div.innerHTML = `<header><h3 id="ama-sp-name"></h3><button class="close-btn" aria-label="بستن">×</button></header><div id="ama-sp-body"></div>`;
    document.body.appendChild(div);
    sidepanelEl = div;
    div.querySelector('.close-btn').addEventListener('click', closeSidepanel);
    document.addEventListener('keydown', e=>{ if(e.key==='Escape') closeSidepanel(); });
  }

  function closeSidepanel(){
    if(sidepanelOverlay) sidepanelOverlay.style.display='none';
    sidepanelEl?.classList.remove('open');
  }

  function openSidepanel(p){
    if(!sidepanelEl) createSidepanel();
    if(!sidepanelEl) return;
    const name = p.county || p.name || '—';
    const body = sidepanelEl.querySelector('#ama-sp-body');
    const kpiHtml = `<div class="kpi-grid">
        <div>N</div><div>${p.wind_N!=null?__AMA_fmtNumberFa(p.wind_N,{digits:0}):'—'}</div>
        <div>Σw</div><div>${p.wind_sumW!=null?__AMA_fmtNumberFa(p.wind_sumW,{digits:3}):'—'}</div>
        <div>N/km²</div><div>${p.wind_density!=null?__AMA_fmtNumberFa(p.wind_density,{digits:3}):'—'}</div>
        <div>Σw/km²</div><div>${p.wind_wDensity!=null?__AMA_fmtNumberFa(p.wind_wDensity,{digits:3}):'—'}</div>
        <div>avgW</div><div>${p.wind_avgW!=null?__AMA_fmtNumberFa(p.wind_avgW,{digits:3}):'—'}</div>
      </div>`;
    const sites = (windSitesRaw||[]).filter(r=> (r.county||'')===name).slice(0,8);
    const list = sites.map(s=>`<li>${s.name_fa||'—'} <small>(${(+s.lon).toFixed(2)},${(+s.lat).toFixed(2)})</small> <span>${s.source||''}</span> <button data-lat="${s.lat}" data-lon="${s.lon}" data-name="${s.name_fa}">نمایش روی نقشه</button></li>`).join('');
    body.innerHTML = `${kpiHtml}${sites.length?`<div><b>سایت‌های این شهرستان:</b><ul class="sp-sites">${list}</ul></div>`:''}<div style="margin-top:8px"><button id="ama-sp-dl">دانلود CSV شهرستان</button></div>`;
    sidepanelEl.querySelector('#ama-sp-name').textContent = name;
    sidepanelEl.classList.add('open');
    if(sidepanelOverlay) sidepanelOverlay.style.display='block';
    const btn = sidepanelEl.querySelector('.close-btn');
    btn.focus();
    sidepanelEl.onkeydown = e=>{
      if(e.key==='Tab'){
        const focusable = sidepanelEl.querySelectorAll('button,a');
        if(!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length-1];
        if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
      }
    };
    body.querySelectorAll('button[data-lat]').forEach(b=>{
      b.addEventListener('click', ()=>{
        const lat=+b.dataset.lat, lon=+b.dataset.lon; const nm=b.dataset.name||'';
        searchLayer.clearLayers();
        const m=L.marker([lat,lon]).addTo(searchLayer); m.bindPopup(nm).openPopup();
        map.setView([lat,lon],11);
      });
    });
    const dlBtn = body.querySelector('#ama-sp-dl');
    if(dlBtn){ dlBtn.addEventListener('click', ()=>{
      const csv = 'name_fa,lon,lat,source\n'+sites.map(s=>`${s.name_fa},${s.lon},${s.lat},${s.source}`).join('\n');
      downloadBlob(`${name}.csv`, csv);
    }); }
  }

  function focusCountyByName(name){
    let targetLayer=null;
    (windChoroplethLayer||boundary)?.eachLayer?.(l=>{ if((l.feature?.properties?.county||'')===name) targetLayer=l; });
    if(targetLayer){
      map.fitBounds(targetLayer.getBounds(), {maxZoom:11});
      targetLayer.fire('click');
      targetLayer.setStyle({weight:2});
      setTimeout(()=>{ if(__focused===targetLayer) targetLayer.setStyle({weight:1.2}); },800);
    }
  }
  window.__AMA_focusCountyByName = focusCountyByName;

  function makeTopCSV(rows){
    const header = 'rank,county,capacity_mw,MW_per_ha,P0';
    const lines = rows.map((p,i)=>[i+1,p.county||'',p.capacity_mw||'',p.MW_per_ha||'',p.P0||''].join(','));
    return [header,...lines].join('\n');
  }
  function downloadBlob(name, text){
    const blob = new Blob([text],{type:'text/csv'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; a.click();
    setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function openTopModal(rows){
    const modal = document.createElement('div');
    modal.className = 'ama-modal';
    modal.innerHTML = `<div class="ama-modal-content" dir="rtl"><div id="ama-modal-body"></div><div style="text-align:center;margin-top:10px"><button class="close-btn">بستن</button></div></div>`;
    document.body.appendChild(modal);
    const body = modal.querySelector('#ama-modal-body');
    body.innerHTML = rows.map((p,i)=>`<div class="ama-row" data-county="${p.county||''}"><div class="c">${__AMA_fmtNumberFa(i+1)}</div><div class="n">${p.county||'—'}</div><div class="m">${__AMA_fmtNumberFa(p.capacity_mw||0,{digits:0})}</div><div class="h">${__AMA_fmtNumberFa(p.MW_per_ha||0,{digits:2})}</div><div class="s">${__AMA_fmtNumberFa(p.P0||0,{digits:2})}</div></div>`).join('');
    body.querySelectorAll('.ama-row').forEach(r=>r.onclick=()=>{focusCountyByName(r.dataset.county); close();});
    function close(){ modal.remove(); }
    modal.addEventListener('click', e=>{ if(e.target===modal || e.target.classList.contains('close-btn')) close(); });
  }


  // لایه‌ها در پن‌های جدا برای کنترل z-index
  map.createPane('polygons'); map.createPane('boundary'); map.createPane('points');

  (async () => {
    const cfg = await fetchJSONWithFallback('layers.config.json', { kind:'manifest' });
    const combined = await fetchJSONWithFallback('khorasan_razavi_combined.geojson', { kind:'data' });
    if(!combined?.features?.length){ return; }

    const damsPath = cfg?.baseData?.dams;
    const damsRel = damsPath ? normalizeName(damsPath) : null;
    const damsGeojson = damsRel ? await loadJSON(damsRel, { layerKey:'dams', kind:'data' }) : null;

    const polys = { type:'FeatureCollection', features:[] }, points = { type:'FeatureCollection', features:[] };
    for(const f of combined.features){
      const t = f.geometry?.type;
      if(t==='Polygon' || t==='MultiPolygon') polys.features.push(f);
      else if(t==='Point') points.features.push(f);
    }

    const solarLegendCfg = {
      key:'solar', icon:'☀️', title:'ظرفیت تجمیعی خورشیدی', unit:'MW', type:'choropleth',
      period:'۱۴۰۳', method:'Jenks',
      classes:[
        {min:10, max:38,  color:'#f3f4f6', label:'۱۰–۳۸'},
        {min:38, max:74,  color:'#e9d5ff', label:'۳۸–۷۴'},
        {min:74, max:233, color:'#c4b5fd', label:'۷۴–۲۳۳'},
        {min:233,max:774, color:'#8b5cf6', label:'۲۳۳–۷۷۴'},
        {min:774,max:1200,color:'#5b21b6', label:'۷۷۴–۱۲۰۰'},
      ],
      source:'ساتبا (برآورد استانی)', confidence:'متوسط'
    };
    const windLegendCfg = {
      key:'wind', icon:'🌬️', title:'کلاس بادی', unit:'کلاس', type:'choropleth',
      classes:[
        {min:1,max:1,color:'#bdbdbd',label:'کلاس ۱'},
        {min:2,max:2,color:'#f6c945',label:'کلاس ۲'},
        {min:3,max:3,color:'#29cc7a',label:'کلاس ۳'},
      ],
      source:'جدول ۸', confidence:'متوسط'
    };
    const damsLegendCfg = {
      key:'dams', icon:'🟦', title:'سدها', type:'dams',
      classes:[
        {min:0,  max:20,  color:'#ef4444', label:'۰–۲۰٪'},
        {min:20, max:40,  color:'#fb923c', label:'۲۰–۴۰٪'},
        {min:40, max:60,  color:'#f59e0b', label:'۴۰–۶۰٪'},
        {min:60, max:80,  color:'#84cc16', label:'۶۰–۸۰٪'},
        {min:80, max:100, color:'#22c55e', label:'۸۰–۱۰۰٪'},
      ],
      samples:[{v:50,r:8},{v:200,r:14},{v:800,r:20}],
      source:'پایش لحظه‌ای آب', confidence:'پایین'
    };
    const tabs = [];
    const scaleSolar = v => {
      const cls = solarLegendCfg.classes.find(c=>v>=c.min && v<=c.max);
      return cls?cls.color:'#f3f4f6';
    };
    const solarLayer = L.geoJSON(polys, {
      pane:'polygons',
      style: f => ({ color:'#374151', weight:1, fillColor:scaleSolar(f.properties.solar_mw), fillOpacity:0.35, opacity:0.7 }),
      onEachFeature: (f,l)=> l.bindTooltip(labelFa(f.properties), {sticky:true, direction:'auto', className:'label'})
      }).addTo(map);
    ensureCountiesLayer(map);
    solarLayer.eachLayer(l=>l.feature.properties.__legend_value = l.feature.properties.solar_mw);
    tabs.push(solarLegendCfg);

    const windLayer = L.geoJSON(polys, {
      pane:'polygons',
      style: f => ({ fillColor: ({1:'#bdbdbd',2:'#f6c945',3:'#29cc7a'})[f.properties.wind_class_num] || '#9e9e9e',
                      fillOpacity:0.35, color:'rgba(39,48,63,.4)', weight:.8 }),
      onEachFeature: (f,l)=> l.bindTooltip(labelFa(f.properties), {sticky:true, direction:'auto', className:'label'})
      }).addTo(map);
    ensureCountiesLayer(map);
    windLayer.eachLayer(l=>l.feature.properties.__legend_value = l.feature.properties.wind_class_num);
    tabs.push(windLegendCfg);

    let damsLayer = null;
    let windChoroplethLayer = null;
    let windSitesLayer = null;
    if(damsGeojson){
      const fillColorByPct = p => p<=20?'#ef4444':p<=40?'#fb923c':p<=60?'#f59e0b':p<=80?'#84cc16':'#22c55e';
      const rByMCM = v => Math.max(6, Math.sqrt(v||1)/2);
      damsLayer = L.geoJSON(damsGeojson, {
        pointToLayer:(f,latlng)=>{
          const p=f.properties, pct=+p.dam_fill_pct||0, mcm=+p.dam_storage_mcm||0;
          const marker=L.circleMarker(latlng,{ radius:rByMCM(mcm), color:'#0a0a0a', weight:1,
            fillColor:fillColorByPct(pct), fillOpacity:.85 });
          p.__legend_value = pct;
          marker.bindPopup(`<b>${p.name||'سد'}</b><br>پرشدگی: ${pct}% | ظرفیت: ${mcm} میلیون m³`);
          return marker;
        }
      }).addTo(map);
      ensureCountiesLayer(map);
      tabs.push(damsLegendCfg);
    }

    boundary = L.geoJSON(polys, { pane:'boundary', style:{ color:'rgba(31,41,55,.6)', weight:1.2, fill:false } }).addTo(map);
    ensureCountiesLayer(map);
    map.fitBounds(boundary.getBounds(), { padding:[12,12] });

    // === Province focus & toggle ===
    map.setMaxBounds(boundary.getBounds().pad(0.25));
    boundary.setStyle({ className: 'neon-edge' });

    (function(){
      const ctl = L.control({position:"topleft"});
      ctl.onAdd = function() {
        const div = L.DomUtil.create("div","ama-modes");
        div.innerHTML = `
          <button class="chip active" id="btn-prov">استان</button>
          <button class="chip" id="btn-nat">کشور</button>`;
        L.DomEvent.disableClickPropagation(div);
        const toProv = ()=>{
          map.fitBounds(boundary.getBounds(), { padding:[12,12] });
          map.setMaxBounds(boundary.getBounds().pad(0.25));
          div.querySelector("#btn-prov").classList.add("active");
          div.querySelector("#btn-nat").classList.remove("active");
        };
        const toNat = ()=>{
          map.setMaxBounds(null);
          div.querySelector("#btn-nat").classList.add("active");
          div.querySelector("#btn-prov").classList.remove("active");
        };
        div.querySelector("#btn-prov").addEventListener("click", toProv);
        div.querySelector("#btn-nat").addEventListener("click", toNat);
        return div;
      };
      ctl.addTo(map);
    })();

    // === WIND: load computed datasets (counties.geojson + wind_sites.geojson) ===
    {
      const classColors = {1:'#bdbdbd', 2:'#f6c945', 3:'#29cc7a'};
      const fmt = (x, d=1) => (x==null || isNaN(x)) ? '—' : Number(x).toFixed(d);
      const radiusFromMW = mw => Math.max(5, 1.6*Math.sqrt(Math.max(0, mw||0)));


      // counties
      if (inManifest('counties.geojson')) {
        const polysFC = await fetchJSONWithFallback('counties.geojson', { kind:'data' });
        if (window.AMA_DEBUG) console.log('[ama-data] counties features =', Array.isArray(polysFC?.features) ? polysFC.features.length : 0);
        countiesGeo = polysFC;
        if (polysFC?.features?.length) {
          createSidepanel();

          function restyle(){
            if(!window.__countiesLayer) return;
            eachPolyFeatureLayer(window.__countiesLayer, l=>{
              l.feature.properties.__legend_value = l.feature.properties[windKpiKey];
              l.setStyle(styleForCounty(l.feature));
            });
            if(__focused){ __focused.setStyle({...styleForCounty(__focused.feature), color:'#22d3ee', weight:1.2, fillOpacity:0.75}); }
          }

          windChoroplethLayer = L.geoJSON(polysFC, {
            pane:'polygons',
            style: f => styleForCounty(f),
            onEachFeature:(f,l)=> l.bindTooltip((f.properties?.county || f.properties?.name || '—'), {sticky:true, direction:'auto', className:'label'})
          }).addTo(map);
          ensureCountiesLayer(map);
          map.removeLayer(windLayer);
          window.windChoroplethLayer = windChoroplethLayer;

          if (boundary) map.removeLayer(boundary);
          boundary = L.geoJSON(polysFC, { pane:'boundary', style:{ color:'rgba(31,41,55,.6)', weight:1.2, fill:false } }).addTo(map);
          ensureCountiesLayer(map);
          map.fitBounds(boundary.getBounds(), { padding:[12,12] });
          map.setMaxBounds(boundary.getBounds().pad(0.25));
          boundary.setStyle({ className: 'neon-edge' });

          map.getPane('polygons')?.classList.add('ama-polygons');
          windChoroplethLayer.eachLayer(l=>{
            const el=l.getElement();
            if(el){ el.setAttribute('tabindex','0'); el.addEventListener('keydown',ev=>{ if(ev.key==='Enter'||ev.key===' ') l.fire('click'); }); }
            l.on('mouseover', ()=>{
              const p=l.feature.properties||{};
              if(__focused!==l) l.setStyle({...styleForCounty(l.feature), color:'#22d3ee', weight:1.2, fillOpacity:0.65});
              const name=p.county||p.name||'—';
              if(!p.__hasWindData){ showInfo(`<b>${name}</b><div>بدون داده</div>`); }
              else {
                showInfo(`<b>${name}</b><div>N: ${__AMA_fmtNumberFa(p.wind_N,{digits:0})}</div><div>Σw: ${__AMA_fmtNumberFa(p.wind_sumW,{digits:3})}</div><div>N/km²: ${__AMA_fmtNumberFa(p.wind_density,{digits:3})}</div><div>Σw/km²: ${__AMA_fmtNumberFa(p.wind_wDensity,{digits:3})}</div><div>avgW: ${__AMA_fmtNumberFa(p.wind_avgW,{digits:3})}</div>`);
              }
            });
            l.on('mouseout', ()=>{ if(__focused!==l) l.setStyle(styleForCounty(l.feature)); hideInfo(); });
            l.on('click', ()=>{
              __focused=l;
              windChoroplethLayer.eachLayer(x=>x.setStyle(styleForCounty(x.feature)));
              l.setStyle({...styleForCounty(l.feature), color:'#22d3ee', weight:1.2, fillOpacity:0.75});
              openSidepanel(l.feature.properties||{});
            });
          });
          function clearFocus(){
            if(__focused){ windChoroplethLayer.eachLayer(x=>x.setStyle(styleForCounty(x.feature))); __focused=null; }
            hideInfo();
            closeSidepanel();
          }
          map.on('click', (e)=>{ if(!e.layer) clearFocus(); });
          document.addEventListener('keydown', e=>{ if(e.key==='Escape') clearFocus(); });

          // KPI switcher
          const kpiCtl = L.control({position:'topright'});
          kpiCtl.onAdd = function(){
            const div=L.DomUtil.create('div','ama-kpi-switch');
            div.innerHTML = Object.entries(windKpiLabels).map(([k,v])=>`<label><input type="radio" name="ama-kpi" value="${k}" ${k===windKpiKey?'checked':''}/><span class="chip">${v}</span></label>`).join('');
            if(!window.__WIND_DATA_READY) { div.classList.add('is-disabled'); div.title='داده باد آماده نیست'; }
            L.DomEvent.disableClickPropagation(div);
            div.addEventListener('change', e=>{
              if(e.target && e.target.value){
                windKpiKey=e.target.value;
                localStorage.setItem('ama-kpi', windKpiKey);
                window.setActiveWindKPI(windKpiKey);
                map.fire('kpi:change', {kpi: windKpiKey});
              }
            });
            return div;
          };
          kpiCtl.addTo(map);

          // load raw site CSV for sidepanel
          try { const rawTxt = await fetchCSV('wind_sites_raw.csv'); windSitesRaw = parseCSV(rawTxt); } catch(_) { windSitesRaw = []; }

          // Top-10 panel
          window.__AMA_topPanel = L.control({position:"topright"});
          window.__AMA_topPanel.onAdd = function(){ const wrap=L.DomUtil.create("div","ama-panel"); wrap.innerHTML = `<div class="ama-panel-hd">Top-10 باد</div><div class="ama-panel-bd"><div id="ama-top10"></div></div>`; return wrap; };
          window.__AMA_renderTop10 = function(){ const panel=document.querySelector('.ama-panel'); if(window.__WIND_WEIGHTS_MISSING){ if(panel) panel.style.display='none'; return; } if(panel) panel.style.display='block'; const rows=polysFC.features.map(f=>f.properties).filter(p=>p.__hasWindData); rows.sort((a,b)=>(b[windKpiKey]||0)-(a[windKpiKey]||0)); const top=rows.slice(0,10); const el=document.getElementById('ama-top10'); if(!el) return; el.innerHTML = top.map((p,i)=>`<div class="ama-row" data-county="${p.county||''}"><div class="c">${__AMA_fmtNumberFa(i+1)}</div><div class="n">${p.county||'—'}</div><div class="m">${__AMA_fmtNumberFa(p[windKpiKey]||0,{digits:3})}</div></div>`).join(''); el.querySelectorAll('.ama-row').forEach(r=>{ r.addEventListener('click',()=>{ const n=r.getAttribute('data-county'); focusCountyByName(n); openSidepanel(polysFC.features.find(f=>f.properties.county===n)?.properties||{}); }); }); };
          window.__AMA_topPanel.addTo(map);
          window.__AMA_renderTop10();

          map.on('kpi:change', ()=>{
            restyle();
            window.__AMA_renderTop10?.();
          });

          joinWindWeightsOnAll().then(()=>{
            const kc = kpiCtl.getContainer ? kpiCtl.getContainer() : null;
            if(kc){ kc.classList.remove('is-disabled'); kc.removeAttribute('title'); }
            map.fire('kpi:change', {kpi: windKpiKey});
          });
        } else {
          const infoEl = document.getElementById('info');
          if(infoEl) infoEl.textContent = 'داده شهرستان‌ها در دسترس نیست.';
        }
      }

      // wind sites

      // wind sites
      if (inManifest('wind_sites.geojson')) {
        const windSitesFC = await fetchJSONWithFallback('wind_sites.geojson', { kind:'data' });
        if (window.AMA_DEBUG) console.log('[ama-data] wind_sites features =', Array.isArray(windSitesFC?.features) ? windSitesFC.features.length : 0);
        windSitesGeo = windSitesFC;
        if (windSitesFC?.features?.length) {
          const pointToLayer = (f, latlng) => {
            const p = f.properties || {};
            const low = (p.quality === 'low');
            return L.circleMarker(latlng, {
              radius: radiusFromMW(p.capacity_mw_est),
              weight: 1.5, color:'#111827', opacity:1,
              fillColor:'#111827', fillOpacity:.85,
              dashArray: low ? '2 4' : null
            });
          };
          const onEachFeature = (f, layer) => {
            const p = f.properties || {};
            const badge = `<span style="background:#fee2e2;color:#991b1b;padding:0 6px;border-radius:6px;font-size:11px;">برآوردی</span>`;
            layer.bindPopup(
`<div dir="rtl" style="min-width:220px">
            <div style="font-weight:700">${p.name_fa || '—'}</div>
            <div>شهرستان: ${p.county || '—'} | کلاس: ${p.wind_class ?? '—'}</div>
            <div>~MW/سایت: ${fmt(p.capacity_mw_est)} ${badge}</div>
            <div>کیفیت مختصات: ${p.quality || '—'}</div>
            <div style="opacity:.8;font-size:12px">منبع: ${p.source || '—'}</div>
          </div>`, {maxWidth: 320});
            layer.bindTooltip(p.name_fa || '', {direction:'top', permanent:true, opacity:0, className:'site-label'});
          };

          windSitesLayer = L.geoJSON(windSitesFC, {
            pane: 'points',
            pointToLayer,
            onEachFeature
          });
          window.windSitesLayer = windSitesLayer;

          const Z_SITES_ON = 9;
          function syncZoomVisibility(){
            const z = map.getZoom();
            if (window.windSitesLayer) {
              if (z >= Z_SITES_ON) {
                if (!map.hasLayer(window.windSitesLayer)) map.addLayer(window.windSitesLayer);
              } else {
                if (map.hasLayer(window.windSitesLayer))  map.removeLayer(window.windSitesLayer);
              }
              window.windSitesLayer.eachLayer(l=>{ const tt=l.getTooltip(); if(tt) tt.setOpacity(z>=11?0.9:0); });
            }
          }
          map.on('zoomend', syncZoomVisibility);
          syncZoomVisibility();

          function updateSiteOpacity(){
            const op = map.hasLayer(windChoroplethLayer) ? 0.4 : 0.85;
            window.windSitesLayer?.eachLayer(l=>l.setStyle({opacity:op, fillOpacity:op}));
          }
          map.on('overlayadd overlayremove', updateSiteOpacity);
          updateSiteOpacity();
        }
      }

    }

    // === Local search & geolocate ===
    const searchCtl = L.control({position:'topleft'});
    searchCtl.onAdd = function(){
      const div = L.DomUtil.create('div','ama-search');
      div.innerHTML = `<input type="text" placeholder="جستجوی شهرستان/سایت…"/><button title="یافتن موقعیت من">📍</button><div class="ama-suggestions" style="display:none"></div>`;
      L.DomEvent.disableClickPropagation(div);
      const input = div.querySelector('input');
      const sugg = div.querySelector('.ama-suggestions');
      let items=[], idx=-1;
      const update = ()=>{
        const q = input.value.trim();
        sugg.innerHTML=''; idx=-1;
        if(!q){ sugg.style.display='none'; return; }
        const list=[];
        if(countiesGeo?.features) countiesGeo.features.forEach(f=>{ const n=f.properties?.county||f.properties?.name||''; if(n.includes(q)) list.push({type:'county',name:n}); });
        if(windSitesGeo?.features) windSitesGeo.features.forEach(f=>{ const n=f.properties?.name_fa||''; if(n.includes(q)) list.push({type:'site',name:n,latlng:f.geometry?.coordinates?.slice().reverse(),props:f.properties}); });
        if(!list.length){ sugg.innerHTML='<div>داده‌ای برای جستجو موجود نیست.</div>'; sugg.style.display='block'; return; }
        items = list.slice(0,10);
        sugg.innerHTML = items.map((it,i)=>`<div data-i="${i}" data-type="${it.type}">${it.name}</div>`).join('');
        sugg.style.display='block';
        sugg.querySelectorAll('div').forEach(d=> d.addEventListener('click', ()=> select(items[+d.dataset.i])));
      };
      const deb = debounce(update,300);
      input.addEventListener('input', deb);
      input.addEventListener('keydown', e=>{
        if(e.key==='ArrowDown'){ e.preventDefault(); move(1); }
        else if(e.key==='ArrowUp'){ e.preventDefault(); move(-1); }
        else if(e.key==='Enter'){ if(idx>=0) select(items[idx]); }
      });
      function move(dir){ if(!items.length) return; idx=(idx+dir+items.length)%items.length; sugg.querySelectorAll('div').forEach((d,i)=>d.classList.toggle('active',i===idx)); }
      function select(it){ sugg.style.display='none'; input.value=''; if(!it) return; if(it.type==='county'){ focusCountyByName(it.name); } else if(it.type==='site'){ searchLayer.clearLayers(); const m=L.circleMarker(it.latlng,{radius:6,color:'#22d3ee'}).addTo(searchLayer); m.bindPopup(it.props?.name_fa||'').openPopup(); map.setView(it.latlng,12); } }
      const btn = div.querySelector('button');
      btn.addEventListener('click', ()=>{
        if(!navigator.geolocation){ toast('مرورگر از موقعیت‌یابی پشتیبانی نمی‌کند'); return; }
        navigator.geolocation.getCurrentPosition(pos=>{
          const ll=[pos.coords.latitude,pos.coords.longitude];
          searchLayer.clearLayers();
          L.marker(ll).addTo(searchLayer).bindPopup('موقعیت من').openPopup();
          map.setView(ll,12);
        }, err=>{ toast(err.code===1?'مجوز دسترسی به موقعیت رد شد':'یافتن موقعیت ممکن نشد'); }, {enableHighAccuracy:false, timeout:8000});
      });
      return div;
    };
    searchCtl.addTo(map);

    function debounce(fn,ms){ let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn.apply(this,args),ms); }; }
    function toast(msg){ const info=document.getElementById('info'); if(info){ info.textContent=msg; setTimeout(()=>{info.textContent='';},3000); } }

    // جایی که datasetهای دیگر را می‌خواندی (مثلاً برق/آب/گاز/نفت):
    let electricityLinesLayer = null;
    if (__LAYER_MANIFEST.has('electricity_lines.geojson')) {
      electricityLinesLayer = await optionalGeoJSONFile('electricity_lines.geojson', { style: f => ({ color:'#22c55e', weight: 2 }) });
    }
    let waterMainsLayer = null;
    if (__LAYER_MANIFEST.has('water_mains.geojson')) {
      waterMainsLayer      = await optionalGeoJSONFile('water_mains.geojson',        { style: f => ({ color:'#3b82f6', weight: 2 }) });
    }
    let gasTransmissionLayer = null;
    if (__LAYER_MANIFEST.has('gas_transmission.geojson')) {
      gasTransmissionLayer = await optionalGeoJSONFile('gas_transmission.geojson',   { style: f => ({ color:'#f59e0b', weight: 2 }) });
    }
    let oilPipelinesLayer = null;
    if (__LAYER_MANIFEST.has('oil_pipelines.geojson')) {
      oilPipelinesLayer    = await optionalGeoJSONFile('oil_pipelines.geojson',      { style: f => ({ color:'#ef4444', weight: 2 }) });
    }

    // Infra drawer control
    const infraCtl = L.control({position:'topleft'});
    infraCtl.onAdd = function(){
      const d = L.DomUtil.create('div','ama-infra');
      d.innerHTML = `
        <button class="chip" id="btn-infra">زیرساخت ▾</button>
        <div id="infra-box" class="box" style="display:none">
          <label><input type="checkbox" data-layer="electricity"> خطوط انتقال برق</label>
          <label><input type="checkbox" data-layer="water"> شبکه آب‌رسانی</label>
          <label><input type="checkbox" data-layer="gas"> خطوط انتقال گاز</label>
          <label><input type="checkbox" data-layer="oil"> خطوط لوله نفت</label>
        </div>`;
      L.DomEvent.disableClickPropagation(d);
      d.querySelector('#btn-infra').onclick = ()=> {
        const el = d.querySelector('#infra-box');
        el.style.display = (el.style.display==='none'?'block':'none');
      };
      d.querySelectorAll('input[type=checkbox]').forEach(ch=>{
        ch.addEventListener('change', ()=>{
          const LAY = { electricity:electricityLinesLayer, water:waterMainsLayer, gas:gasTransmissionLayer, oil:oilPipelinesLayer }[ch.dataset.layer];
          if (!LAY) return;
          if (ch.checked) map.addLayer(LAY); else map.removeLayer(LAY);
        });
      });
      return d;
    };
    infraCtl.addTo(map);

      // ===== LegendDock =====
      function LegendDock(){
        const div = L.DomUtil.create('div','legend-dock'); div.dir='rtl';
        div.innerHTML = `<div class="legend-tabs"></div><div class="legend-body"></div>`;
        if(localStorage.getItem('ama-legend-collapsed')==='1') div.classList.add('collapsed');
        let groups = [], onFilter = null;
        function renderTabs(){
          const tabs = div.querySelector('.legend-tabs');
          tabs.innerHTML = groups.map((g,i)=>`<button class="chip" data-k="${g.key}">${g.icon||''} ${g.title}</button>`).join('');
          tabs.querySelectorAll('.chip').forEach(t=>t.onclick=()=>activate(t.dataset.k));

          // add collapse/expand toggle
          const toggle = document.createElement('button');
          toggle.className = 'chip';
          toggle.type = 'button';
          toggle.setAttribute('aria-expanded', String(!div.classList.contains('collapsed')));
          toggle.textContent = div.classList.contains('collapsed') ? 'باز کردن' : 'جمع کردن';
          toggle.onclick = () => {
            div.classList.toggle('collapsed');
            const isCol = div.classList.contains('collapsed');
            toggle.textContent = isCol ? 'باز کردن' : 'جمع کردن';
            toggle.setAttribute('aria-expanded', String(!isCol));
            localStorage.setItem('ama-legend-collapsed', isCol ? '1' : '0');
          };
          tabs.appendChild(toggle);
        }
        function activate(key){
          const tabs = div.querySelectorAll('.legend-tabs .chip[data-k]');
          tabs.forEach(t=>t.classList.toggle('active', t.dataset.k===key));
          const g = groups.find(x=>x.key===key), body = div.querySelector('.legend-body');
          if(!g){ body.innerHTML=''; return; }
          if(g.type==='choropleth'){
            const fmt = n => window.__AMA_fmtNumberFa ? __AMA_fmtNumberFa(n,{digits:0}) : n;
            const k = Array.isArray(g.classes) ? g.classes.length : 0;
            const periodChip = g.period?`<span class="chip muted">${g.period}</span>`:'';
            const methodChip = g.method?`<span class="chip muted">${g.method}<span class="info" title="روش طبقه‌بندی: ${g.method} (k=${k})">ⓘ</span></span>`:'';
            const classChip = `<span class="chip">کلاس‌ها: ${fmt(k)}</span>`;
            body.innerHTML = `
        <div class="legend-head"><b>${g.title}</b>${g.unit?`<span class="unit">${g.unit}</span>`:''}${periodChip}${methodChip}${classChip}</div>
        <ul class="swatches">${g.classes.map(c=>`
          <li data-min="${c.min}" data-max="${c.max}" aria-label="از ${fmt(c.min)} تا ${fmt(c.max)}">
            <span class="sw" style="background:${c.color}"></span>
            <span class="lbl">${c.label || (`${fmt(c.min)}–${fmt(c.max)}`)}</span>
          </li>`).join('')}
        </ul>`;
          }
          if(g.type==='dams'){
            body.innerHTML = `
        <div class="legend-head"><b>${g.title}</b></div>
        <div class="subhead">رنگ = درصد پرشدگی</div>
        <ul class="swatches">${g.classes.map(c=>`
          <li data-min="${c.min}" data-max="${c.max}">
            <span class="sw" style="background:${c.color}"></span><span class="lbl">${c.label}</span>
          </li>`).join('')}
        </ul>
        <div class="subhead" style="margin-top:8px">اندازه = ظرفیت مخزن (میلیون m³)</div>
        <div class="bubbles">${g.samples.map(s=>`<span class="bubble" style="width:${s.r*2}px;height:${s.r*2}px"></span><span class="lbl">${s.v}</span>`).join('')}</div>`;
          }
          const meta = `<div class="legend-meta"><span>منبع: ${g.source||'—'}</span><span>اعتماد داده: ${g.confidence||'—'}</span></div>`;
          body.insertAdjacentHTML('beforeend', meta);
          div.querySelectorAll('.swatches li').forEach(li=>{
            li.onclick = ()=>{
              div.querySelectorAll('.swatches li').forEach(x=>x.classList.remove('active'));
              li.classList.add('active');
              onFilter?.(g.key, {min:+li.dataset.min, max:+li.dataset.max});
            };
            li.ondblclick = ()=>{
              div.querySelectorAll('.swatches li').forEach(x=>x.classList.remove('active'));
              li.classList.add('active');
              onFilter?.(g.key, {min:+li.dataset.min, max:+li.dataset.max, isolate:true});
            };
          });
        }
        return {
          el: div,
          set(newGroups, filterCb){
            groups = newGroups; onFilter = filterCb; renderTabs(); activate(groups[0]?.key);
          },
          reset(){
            div.querySelectorAll('.swatches li').forEach(li=>li.classList.remove('active'));
            groups.forEach(g=> onFilter?.(g.key, null));
          }
        };
      }
      const legend = new LegendDock();
      const legendCtl = L.control({position:'bottomright'});
      legendCtl.onAdd = ()=> legend.el;
      legendCtl.addTo(map);

      function setLegendPosition(pos){
        legendCtl.setPosition(pos);
        try { localStorage.setItem('ama-legend-pos', pos); } catch(_){ }
      }
      function reevaluateLegendPosition(){
        const topVisible = !!(window.__AMA_topPanel && window.__AMA_topPanel._map);
        const desired = (window.innerWidth < 768 || topVisible) ? 'bottomleft' : 'bottomright';
        const current = legendCtl.getPosition ? legendCtl.getPosition() : null;
        if(current !== desired) setLegendPosition(desired);
      }
      window.reevaluateLegendPosition = window.reevaluateLegendPosition || reevaluateLegendPosition;
      window.reEvaluateLegendPosition = window.reEvaluateLegendPosition || window.reevaluateLegendPosition || (() => {});
      const storedPos = localStorage.getItem('ama-legend-pos');
      if(storedPos) legendCtl.setPosition(storedPos);
      {
        const _re = window.reevaluateLegendPosition || window.reEvaluateLegendPosition;
        if (typeof _re === 'function') { try { _re(); } catch(_){} }
      }
      window.addEventListener('resize', reevaluateLegendPosition);
      map.on('overlayadd overlayremove', reevaluateLegendPosition);

      // === InfoChip: کارت اطلاعات سریع هنگام Hover ===
      const infoCtl = L.control({position:'topleft'});
      infoCtl.onAdd = function(){
        const div = L.DomUtil.create('div','ama-infox');
        div.style.cssText = 'background:rgba(17,24,39,.9);color:#e5e7eb;padding:8px 10px;border-radius:10px;font:12px Vazirmatn, sans-serif;display:none;backdrop-filter:blur(2px)';
        div.setAttribute('dir','rtl');
        return (infoCtl._div = div);
      };
      infoCtl.addTo(map);
      function showInfo(html){ if(infoCtl._div){ infoCtl._div.innerHTML = html; infoCtl._div.style.display='block'; } }
      function hideInfo(){ if(infoCtl._div){ infoCtl._div.style.display='none'; infoCtl._div.innerHTML=''; } }

    if(tabs.length){
        function filterLayer(layer, get, range) {
          layer?.eachLayer?.(l=>{
            if(!range){ layer.resetStyle?.(l); return; }
            const v = get(l); const inRange = (v>=range.min && v<=range.max);
            l.setStyle?.({ fillOpacity: range.isolate ? (inRange?0.75:0.05) : (inRange?0.6:0.25), opacity:1 });
          });
        }
        function applyLegend(){
          legend.set(tabs, (key,range)=>{
            if(key==='solar') filterLayer(solarLayer, l=>l.feature.properties.__legend_value, range);
            if(key==='wind')  filterLayer(windChoroplethLayer || windLayer,  l=>l.feature.properties.__legend_value, range);
            if(key==='dams')  filterLayer(damsLayer,  l=>l.feature.properties.__legend_value, range);
          });
        }
        applyLegend();
        map.on('kpi:change', ()=>{ applyLegend(); });
        if(window.__WIND_WEIGHTS_MISSING){
          const warn = document.createElement('div');
          warn.className = 'ama-legend-warning';
          warn.setAttribute('aria-live','polite');
          warn.textContent = 'داده وزن‌ها در دسترس نیست';
          legend.el.querySelector('.legend-body')?.appendChild(warn);
        }
      }

      function markerRadiiForZoom(z){
        // بازه‌ی منطقی برای سایزها: در زوم 7 کوچک، در زوم 12 بزرگ‌تر
        const clamp = (v,min,max)=>Math.max(min,Math.min(max,v));
        const inner = clamp(1.5 + (z-7)*0.9, 2, 8);
        const outer = clamp(inner*1.8, 4, 16);
        return {inner, outer};
      }
      const pointLayer = L.geoJSON(points, {
        pane:'points',
        pointToLayer: (f, latlng) => {
          const {inner, outer} = markerRadiiForZoom(map.getZoom());
          const innerM = L.circleMarker(latlng, { radius: inner, color:'#0ea5e9', weight:2, fillColor:'#0ea5e9', fillOpacity:1 });
          const outerM = L.circleMarker(latlng, { radius: outer, color:'#0ea5e9', weight:2, fill:false });
          return L.layerGroup([outerM, innerM]);
        },
        onEachFeature: (f,l)=> {
          const name = labelFa(f.properties);
          l.bindTooltip(`مرکز شهرستان: ${name}`, {sticky:true, direction:'auto', className:'label'});
        }
      }).addTo(map);
      ensureCountiesLayer(map);

      // به‌روزرسانی اندازه‌ی مارکرها هنگام تغییر زوم
      function updatePointMarkerSizes(){
        const {inner, outer} = markerRadiiForZoom(map.getZoom());
        pointLayer.eachLayer(group=>{
          if (!group || !group.getLayers) return;
          const [outerM, innerM] = group.getLayers();
          outerM?.setStyle?.({radius: outer});
          innerM?.setStyle?.({radius: inner});
        });
      }
      // نمایش/عدم‌نمایش در زوم مناسب
      function togglePointsByZoom(){
        const z = map.getZoom();
        const shouldShow = z >= 8;
        if (shouldShow && !map.hasLayer(pointLayer)) map.addLayer(pointLayer);
        if (!shouldShow && map.hasLayer(pointLayer)) map.removeLayer(pointLayer);
      }
      map.on('zoomend', ()=>{ updatePointMarkerSizes(); togglePointsByZoom(); });
      // اجرا در بار اول
      togglePointsByZoom();

      const overlayEntries = [
        ['مرز شهرستان‌ها', boundary],
        ['ظرفیت تجمیعی خورشیدی', solarLayer],
        ['کلاس بادی (Choropleth)', window.windChoroplethLayer ?? (typeof windLayer!=='undefined'? windLayer : null)],
        ['سایت‌های بادی (برآوردی)', window.windSitesLayer],
        ['سدها', damsLayer],
        ['شهرها/نقاط', pointLayer],
      ];
      const missing = [];
      for(const th of (cfg?.themes || [])){
        const file = th.file;
        const layer = inManifest(file)
          ? await optionalGeoJSONFile(file, { pane:'polygons', style: th.style || {color:'#ef4444',weight:3} })
          : null;
        if(layer){
          overlayEntries.push([th.title, layer]);
          layer.addTo(map);
          ensureCountiesLayer(map);
        } else if(inManifest(file)){
          missing.push(th.title);
        }
      }
      const overlays = Object.fromEntries(overlayEntries.filter(([_, layer]) => !!layer));
      ensureCountiesLayer(map);
      // original Leaflet layers control kept for debugging only
      const __defaultLayersCtl = L.control.layers({'OpenStreetMap':base}, overlays, { position:'topleft', collapsed:false }).addTo(map);

      // --- Custom Layers Dock Control ---
      const LayersDock = L.Control.extend({
        options: { position:'topleft', dir:'rtl' },
        onAdd: function(m){
          const container = L.DomUtil.create('div', 'layers-dock leaflet-control');
          container.setAttribute('dir', this.options.dir);

          const tabsEl = L.DomUtil.create('div', 'ld-tabs', container);
          tabsEl.setAttribute('role','tablist');

          const tabDataBtn = L.DomUtil.create('button', 'ld-tab active', tabsEl);
          tabDataBtn.type = 'button';
          tabDataBtn.setAttribute('role','tab');
          tabDataBtn.textContent = 'لایه‌ها';
          tabDataBtn.setAttribute('aria-selected','true');

          const tabDispBtn = L.DomUtil.create('button', 'ld-tab', tabsEl);
          tabDispBtn.type = 'button';
          tabDispBtn.setAttribute('role','tab');
          tabDispBtn.textContent = 'نمایش';
          tabDispBtn.setAttribute('aria-selected','false');
          tabDispBtn.tabIndex = -1;

          const body = L.DomUtil.create('div', 'ld-body', container);
          const dataPane = L.DomUtil.create('div', 'ld-pane', body);
          const displayPane = L.DomUtil.create('div', 'ld-pane', body);
          displayPane.style.display = 'none';

          function makeSwitch(parent, label, layer, disabled){
            const lbl = L.DomUtil.create('label', '', parent);
            if(disabled){ lbl.classList.add('is-disabled'); lbl.title='غیرفعال'; }
            const inp = L.DomUtil.create('input', '', lbl);
            inp.type='checkbox';
            inp.setAttribute('role','switch');
            if(disabled){ inp.disabled=true; }
            else {
              const init = m.hasLayer(layer);
              inp.checked = init; inp.setAttribute('aria-checked', init);
              inp.addEventListener('change', ()=>{
                const ch = inp.checked; inp.setAttribute('aria-checked', ch);
                ch ? m.addLayer(layer) : m.removeLayer(layer);
              });
              const sync = e => { if(e.layer===layer){ const p=m.hasLayer(layer); inp.checked=p; inp.setAttribute('aria-checked',p); } };
              m.on('layeradd', sync); m.on('layerremove', sync);
              m.on('overlayadd', sync); m.on('overlayremove', sync);
            }
            const span = L.DomUtil.create('span', '', lbl); span.textContent = label;
          }

          // data overlays (exclude boundary)
          overlayEntries.filter(([t,_])=>t!=='مرز شهرستان‌ها').forEach(([t,l])=>{
            makeSwitch(dataPane, t, l, !l);
          });

          // display/basemap tab
          makeSwitch(displayPane, 'مرز شهرستان‌ها', boundary, !boundary);
          makeSwitch(displayPane, 'شبکه راهنما', window.gridLayer, !window.gridLayer);
          makeSwitch(displayPane, 'برچسب‌ها', window.labelsLayer, !window.labelsLayer);

          function activate(which){
            const isData = which==='data';
            tabDataBtn.classList.toggle('active', isData);
            tabDispBtn.classList.toggle('active', !isData);
            tabDataBtn.setAttribute('aria-selected', isData?'true':'false');
            tabDispBtn.setAttribute('aria-selected', !isData?'true':'false');
            tabDataBtn.tabIndex = isData?0:-1;
            tabDispBtn.tabIndex = !isData?0:-1;
            dataPane.style.display = isData?'block':'none';
            displayPane.style.display = isData?'none':'block';
          }
          tabDataBtn.addEventListener('click', ()=>activate('data'));
          tabDispBtn.addEventListener('click', ()=>activate('disp'));

          L.DomEvent.disableClickPropagation(container);
          L.DomEvent.disableScrollPropagation(container);
          return container;
        }
      });

      new LayersDock().addTo(map);
      if (__defaultLayersCtl && typeof __defaultLayersCtl.remove === 'function') {
        __defaultLayersCtl.remove();
      }
      // --- end custom layers dock ---

      L.control.scale({ metric:true, imperial:false }).addTo(map);

      if (L.Control && L.Control.geocoder) {
        const geocoder = L.Control.geocoder({ defaultMarkGeocode:false }).addTo(map);
        geocoder.on('markgeocode', e => {
          const center = e.geocode.center;
          const name = e.geocode.name;
          searchLayer.clearLayers();
          searchLayer.addLayer(L.circleMarker(center, {
            radius: 7, color: '#22d3ee', weight: 2, fillColor: '#22d3ee', fillOpacity: 1
          }).bindTooltip(name, {direction:'top', offset:[0,-10]}));
          if (e.geocode.bbox) {
            map.fitBounds(e.geocode.bbox);
          } else {
            map.setView(center, 14);
          }
        });
      }

      // اگر لایه گاز موجود است، جلوه‌های اضافه اعمال شود
      const gasLayer = gasTransmissionLayer;
      const gasEffects = L.layerGroup();
      if (gasLayer) {
        const halo = L.geoJSON(gasLayer.toGeoJSON(), { style:{ color:'#ffe0d6', weight:8, opacity:1 } });
        gasEffects.addLayer(halo);
      gasLayer.bringToFront();

      if (L && L.polylineDecorator && L.Symbol && L.Symbol.arrowHead) {
        gasEffects.addLayer(L.polylineDecorator(gasLayer, {
          patterns: [{ offset: 0, repeat: '80px',
            symbol: L.Symbol.arrowHead({ pixelSize: 8, pathOptions: { color: '#ef476f', weight: 1 }})
          }]
        }));
      }

      if (typeof turf !== 'undefined') {
        try{
          const unioned = gasLayer.toGeoJSON().features.reduce((acc,f)=> acc? turf.union(acc,f) : f, null);
          const distancesKm = [10,30,50];
          let prev = null;
          distancesKm.forEach((km,i)=>{
            const b = turf.buffer(unioned, km, {units:'kilometers'});
            const ring = prev ? turf.difference(b, prev) : b;
            prev = b;
            if(ring) gasEffects.addLayer(L.geoJSON(ring, { style:{ fillColor:'#ffd0cc', fillOpacity:0.25, color:'#e06b5f', weight:1 } }));
          });
        }catch(e){ /* اگر Turf در دسترس نبود یا داده نبود، سکوت */ }
      }

      if (map.hasLayer(gasLayer)) gasEffects.addTo(map);
      map.on('layeradd', e => { if (e.layer === gasLayer) gasEffects.addTo(map); });
      map.on('layerremove', e => { if (e.layer === gasLayer) map.removeLayer(gasEffects); });
    }

    window.__AMA__combined = combined;
    window.__AMA__windSitesFC = windSitesGeo || {};
    window.__AMA__boundary = boundary || null;
    __amaHealthReport(map);
    map.on('layeradd', e => {
      if (e.layer === boundary || e.layer === window.windSitesLayer || e.layer === window.windChoroplethLayer) {
        __amaHealthReport(map);
      }
    });

    document.getElementById('info').innerHTML = missing.length
      ? `لایه‌های در صف بارگذاری: ${missing.join('، ')}`
      : 'همه‌ی لایه‌ها بارگذاری شدند.';
  })().catch(()=>{ /* بدون خطا روی UI */ });

  function __amaHealthReport(mapCtx){
    if (!window.AMA_DEBUG) return;
    const h = {};
    try { h.manifest_loaded = !!(window.__LAYER_MANIFEST && window.__LAYER_MANIFEST.size); } catch(_) { h.manifest_loaded = false; }
    try { h.manifest_files = window.__LAYER_MANIFEST ? Array.from(window.__LAYER_MANIFEST) : []; } catch(_) { h.manifest_files = []; }
    try { h.counties_features = (window.__AMA__combined?.features?.length) || 0; } catch(_) { h.counties_features = 0; }
    try { h.wind_sites_features = (window.__AMA__windSitesFC?.features?.length) || 0; } catch(_) { h.wind_sites_features = 0; }
    try { h.boundary_layer = !!window.__AMA__boundary; } catch(_) { h.boundary_layer = false; }
    try { h.points_layer_present = !!window.windSitesLayer; } catch(_) { h.points_layer_present = false; }
    try { h.points_layer_on_map = h.points_layer_present && mapCtx && mapCtx.hasLayer(window.windSitesLayer); } catch(_) { h.points_layer_on_map = false; }
    try { h.panes = mapCtx ? Object.keys(mapCtx._panes||{}) : []; } catch(_) { h.panes = []; }
    try { h.zoom = mapCtx ? mapCtx.getZoom() : null; } catch(_) { h.zoom = null; }
    console.group('%cAMA · Health','color:#0bf'); console.table(h); console.groupEnd();
  }
  window.__amaHealthReport = __amaHealthReport;

  // === Persona mode chips (owner/edu/invest/ind) ===
  (function(){
    // ابزار فرمت عدد: 12345.6 -> "۱۲٬۳۴۶"
    function toFaDigits(str){ return String(str).replace(/[0-9]/g, d=>'۰۱۲۳۴۵۶۷۸۹'[+d]); }
    function fmtNumberFa(n, {digits=0}={}) {
      const x = isFinite(+n) ? (+n).toFixed(digits) : '0';
      const parts = x.split('.');
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,'٬');
      return toFaDigits(parts.join(parts[1] ? '٫' : ''));
    }
    window.__AMA_fmtNumberFa = fmtNumberFa;

    const modes = [
      {id:'owner',  icon:'👤', label:'شهروند'},
      {id:'edu',    icon:'🎓', label:'یادگیری'},
      {id:'invest', icon:'💼', label:'سرمایه‌گذار'},
      {id:'ind',    icon:'🏭', label:'صنعت'},
    ];
    let currentMode = localStorage.getItem('ama-mode') || 'owner';

    const ctl = L.control({position:'topleft'});
    ctl.onAdd = function() {
      const div = L.DomUtil.create('div','ama-modes');
      div.innerHTML = modes.map(m=>
        `\n      <button class="chip ${m.id===currentMode?'active':''}" data-mode="${m.id}" title="${m.label}">\n        <span class="i">${m.icon}</span><span class="l">${m.label}</span>\n      </button>`).join('');
      L.DomEvent.disableClickPropagation(div);
      div.querySelectorAll('.chip').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          currentMode = btn.getAttribute('data-mode');
          if (window.AMA_DEBUG) console.log('[ama:mode]', currentMode);
          localStorage.setItem('ama-mode', currentMode);
          div.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active', b===btn));
          applyMode();
        });
      });
      return div;
    };
    ctl.addTo(map);

      function applyMode(){
        const wantTop = (currentMode==='invest' || currentMode==='ind');
        // Top-10 control
        if (wantTop) {
          if (window.__AMA_topPanel && !window.__AMA_topPanel._map) window.__AMA_topPanel.addTo(map);
          window.__AMA_renderTop10?.();
        } else {
          if (window.__AMA_topPanel && window.__AMA_topPanel._map) map.removeControl(window.__AMA_topPanel);
        }
        const _re = window.reevaluateLegendPosition || window.reEvaluateLegendPosition;
        if (typeof _re === 'function') { try { _re(); } catch(_){} }

        // layer presets (minimal defaults)
        const show = (layer, yes) => { if (!layer) return; if (yes && !map.hasLayer(layer)) map.addLayer(layer); if (!yes && map.hasLayer(layer)) map.removeLayer(layer); };
        switch (currentMode) {
          case 'owner':     // 👤: پاسخ سریع و ساده
            show(window.windChoroplethLayer, true);
            show(window.windSitesLayer,     false);
            show(boundary,                  true);
            break;
          case 'edu':       // 🎓: آزمودن آستانه‌ها
            show(window.windChoroplethLayer, true);
            show(window.windSitesLayer,      true);
            show(boundary,                   true);
            break;
          case 'invest':    // 💼: غربال سریع + Top-10
          case 'ind':       // 🏭: مشابه
            show(window.windChoroplethLayer, true);
            show(window.windSitesLayer,      true);
            show(boundary,                   true);
            break;
        }
      }

      function resetAll(){
        if(boundary?.getBounds) map.fitBounds(boundary.getBounds(), {padding:[12,12]});
        else map.setView([36.3,59.6],7);

        currentMode = 'owner';
        localStorage.setItem('ama-mode', currentMode);
        const modeDiv = ctl.getContainer ? ctl.getContainer() : null;
        modeDiv?.querySelectorAll('.chip').forEach(b=>b.classList.toggle('active', b.dataset.mode==='owner'));
        applyMode();

        legend?.reset?.();
        searchLayer?.clearLayers?.();
        currentSort.key='P0'; currentSort.dir='desc';
        window.__AMA_renderTop10?.();
      }

      applyMode();

      // === Tool Dock ===
      function makePanel(title, bodyHtml){
        const ctl = L.control({position:'topleft'});
        ctl.onAdd = function(){
          const wrap=L.DomUtil.create('div','ama-panel');
          wrap.innerHTML=`<div class="ama-panel-hd">${title}<button class="close-btn" aria-label="بستن">×</button></div><div class="ama-panel-bd">${bodyHtml}</div>`;
          const close=wrap.querySelector('.close-btn');
          close.onclick=()=>{ map.removeControl(ctl); };
          wrap.addEventListener('keydown',e=>{ if(e.key==='Escape'){ map.removeControl(ctl); }});
          L.DomEvent.disableClickPropagation(wrap);
          return wrap;
        };
        return ctl;
      }

      const panels={
        layers: makePanel('لایه‌ها','<div id="ama-layer-panel"></div>'),
        tools: makePanel('ابزارها','<div id="ama-tools-panel"></div>'),
        search: makePanel('جستجو','<div class="ama-search"><input id="ama-search-input" type="text" aria-label="نام شهرستان"/><button id="ama-search-go">🔍</button></div>'),
        download: makePanel('دانلود','<button id="ama-dl-csv">دانلود CSV</button>')
      };

      const dockCtl=L.control({position:'topleft'});
      dockCtl.onAdd=function(){
        const div=L.DomUtil.create('div','tool-dock');
        div.innerHTML=`<button class="dock-btn" data-panel="layers" aria-label="لایه‌ها">🗂</button>
        <button class="dock-btn" data-panel="tools" aria-label="ابزارها">🛠</button>
        <button class="dock-btn" data-panel="search" aria-label="جستجو">🔍</button>
        <button class="dock-btn" data-panel="download" aria-label="دانلود">⬇</button>
        <button class="dock-btn dock-reset" data-action="reset" aria-label="بازنشانی">↺</button>`;
        return div;
      };
      dockCtl.addTo(map);
      const dockEl=dockCtl.getContainer();
      dockEl.querySelectorAll('button[data-panel]').forEach(btn=>{
        btn.addEventListener('click',()=>{
          const key=btn.dataset.panel; const p=panels[key];
          if(!p._map) p.addTo(map); else map.removeControl(p);
        });
      });
      dockEl.querySelector('button[data-action="reset"]').addEventListener('click',e=>{e.preventDefault(); resetAll();});

      panels.search.onAdd = (function(orig){ return function(){ const wrap=orig.call(this); setTimeout(()=>{wrap.querySelector('#ama-search-input')?.focus();},0); const btn=wrap.querySelector('#ama-search-go'); btn?.addEventListener('click',()=>{ const val=wrap.querySelector('#ama-search-input').value.trim(); if(!val) return; const site = windSitesRaw.find(s=>s.name_fa===val); if(site){ map.setView([+site.lat,+site.lon],11); } else { focusCountyByName(val); } }); return wrap; }; })(panels.search.onAdd);
      panels.layers.onAdd = (function(orig){ return function(){ const wrap=orig.call(this); const body=wrap.querySelector('.ama-panel-bd'); body.innerHTML='<label><input type="checkbox" data-layer="wind" checked/> لایه باد</label><label><input type="checkbox" data-layer="sites" checked/> سایت‌ها</label>'; body.querySelectorAll('input[data-layer]').forEach(ch=>{ ch.addEventListener('change',()=>{ const lay=ch.dataset.layer; const LAY = lay==='wind'?window.windChoroplethLayer:window.windSitesLayer; if(LAY){ if(ch.checked) map.addLayer(LAY); else map.removeLayer(LAY);} });}); return wrap; }; })(panels.layers.onAdd);
      panels.download.onAdd = (function(orig){ return function(){ const wrap=orig.call(this); const btn=wrap.querySelector('#ama-dl-csv'); btn?.addEventListener('click',()=>{ const rows=polysFC.features.map(f=>f.properties); const csv=makeTopCSV(rows); downloadBlob('kpi.csv',csv); }); return wrap; }; })(panels.download.onAdd);
    })();
})();
