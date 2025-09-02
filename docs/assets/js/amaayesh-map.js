// Debug flag and fetch logger
window.AMA_DEBUG = /\b(ama_debug|debug)=1\b/.test(location.search);
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
    console.warn('[ama-ignore-ext]', msg);
    e.preventDefault();
  }
});
window.addEventListener('error', e => {
  const msg = e?.message || e?.error?.message || '';
  if (/message channel closed/i.test(String(msg))) {
    console.warn('[ama-ignore-ext]', msg);
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

    if (window.AMA_DEBUG && map) {
      map.on('zoomend', () => console.log('[ama:event] zoomend =>', map.getZoom()));
      map.on('moveend', () => console.log('[ama:event] moveend =>', map.getCenter()));
    }

    const SuperclusterCtor = window?.Supercluster || null;

  let searchLayer = L.layerGroup().addTo(map);
  let boundary;

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

  function resolveDataCandidates(name){
    const file = normalizeName(name);
    const canonical = `/data/amaayesh/${file}`;  // جدید
    const legacy    = `/amaayesh/data/${file}`;  // قدیمی
    const asIs      = `/${name.replace(/^\/+/,'')}`; // اگر کسی در مانیفست مسیر کامل داده باشد
    // لیست یکتا
    return Array.from(new Set([canonical, legacy, asIs]));
  }

  async function fetchJSONWithFallback(name){
    const candidates = resolveDataCandidates(name);
    let lastErr = null, okUrl = null;
    for (const url of candidates){
      try{
        // در دیباگ قبلش یک HEAD سبک برای وجود فایل
        if (window.AMA_DEBUG){
          const h = await fetch(url, { method:'HEAD', cache:'no-store' });
          if (!h.ok) { if (window.AMA_DEBUG) console.warn('[ama-probe] HEAD', url, h.status); throw new Error('HEAD not ok'); }
        }
        const r = await fetch(url, { cache:'no-cache' });
        if (r.ok){ okUrl = url; const json = await r.json();
          if (window.AMA_DEBUG) console.log('[ama:data] OK', url);
          return json;
        }
        lastErr = new Error(`GET ${r.status}`);
        if (window.AMA_DEBUG) console.warn('[ama:data] non-200:', url, r.status);
      }catch(e){
        lastErr = e;
        if (window.AMA_DEBUG) console.warn('[ama:data] fetch err:', url, String(e.message||e));
      }
    }
    console.warn('[ama:data] failed to load:', name, 'candidates tried:', candidates);
    if (lastErr) console.warn(lastErr);
    return null;
  }

  window.__inspectDataPath = async function(name){
    const candidates = resolveDataCandidates(name);
    const rows = [];
    if (!window.AMA_DEBUG) return rows;
    for (const url of candidates){
      let method = 'HEAD';
      let res = null;
      try {
        res = await fetch(url, { method:'HEAD', cache:'no-store' });
        if (res.status === 405) throw new Error('HEAD not allowed');
      } catch (_) {
        method = 'GET';
        try { res = await fetch(url, { method:'GET', cache:'no-store' }); } catch (_) { }
      }
      rows.push({
        url,
        method,
        status: res ? res.status : 'ERR',
        ok: res ? res.ok : false,
        redirected: res ? res.redirected : false,
      });
    }
    if (window.AMA_DEBUG) console.table(rows);
    return rows;
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
      const man = await fetchJSONWithFallback('/amaayesh/layers.config.json');
      set = new Set(Array.isArray(man?.files) ? man.files : []);
      window.__LAYER_MANIFEST = set;
      __LAYER_MANIFEST = set;
      if (set.size) {
        console.log('[ama-data] manifest loaded with', set.size, 'files');
      } else {
        console.warn('[ama-data] no manifest.files; will skip optional layers.');
      }
    } catch(e) {
      console.warn('[ama-data] manifest not found; will skip optional layers.');
      set = new Set();
      window.__LAYER_MANIFEST = set;
      __LAYER_MANIFEST = set;
    }
  }
  await loadLayerManifest();

  window.__dumpAmaState = function(){
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
      console.info('[ama-layer] skip (not in manifest):', file);
      return null;
    }
    const geo = await fetchJSONWithFallback(file);
    if (!geo?.features?.length) {
      console.warn('[ama-layer] missing or empty:', file);
      return null;
    }
    return L.geoJSON(geo, opts);
  }

  // لودر مقاوم با هندل 404 و فهرست fallbackها
  async function loadJSON(relOrList, { layerKey, fallbacks = [] } = {}) {
    const rels = Array.isArray(relOrList) ? relOrList : [relOrList];
    for (const rel of [...rels, ...fallbacks]) {
      const j = await fetchJSONWithFallback(rel);
      if (j) return j;
    }
    if (layerKey) disableLayerToggle(layerKey);
    console.info('⛔️ Dataset not found:', rels[0], '→ tried:', rels.concat(fallbacks));
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


  // لایه‌ها در پن‌های جدا برای کنترل z-index
  map.createPane('polygons'); map.createPane('boundary'); map.createPane('points');

  (async () => {
    const cfg = await loadJSON('/amaayesh/layers.config.json');
    const combined = await fetchJSONWithFallback('/data/amaayesh/khorasan_razavi_combined.geojson');
    if(!combined?.features?.length){ return; }

    const damsPath = cfg?.baseData?.dams;
    const damsRel = damsPath ? damsPath.replace(/^\//,'').replace(/^data\//,'') : null;
    const damsGeojson = damsRel ? await loadJSON(damsRel, { layerKey:'dams' }) : null;

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
    solarLayer.eachLayer(l=>l.feature.properties.__legend_value = l.feature.properties.solar_mw);
    tabs.push(solarLegendCfg);

    const windLayer = L.geoJSON(polys, {
      pane:'polygons',
      style: f => ({ fillColor: ({1:'#bdbdbd',2:'#f6c945',3:'#29cc7a'})[f.properties.wind_class_num] || '#9e9e9e',
                      fillOpacity:0.35, color:'rgba(39,48,63,.4)', weight:.8 }),
      onEachFeature: (f,l)=> l.bindTooltip(labelFa(f.properties), {sticky:true, direction:'auto', className:'label'})
      }).addTo(map);
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
      tabs.push(damsLegendCfg);
    }

    boundary = L.geoJSON(polys, { pane:'boundary', style:{ color:'rgba(31,41,55,.6)', weight:1.2, fill:false } }).addTo(map);
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

      let countiesGeo = null;
      let windSitesGeo = null;

      // counties
      if (inManifest('counties.geojson')) {
        const polysFC = await fetchJSONWithFallback('counties.geojson');
        console.log('[ama-data] counties features =', Array.isArray(polysFC?.features) ? polysFC.features.length : 0);
        countiesGeo = polysFC;
        if (polysFC?.features?.length) {
          windChoroplethLayer = L.geoJSON(polysFC, {
            pane: 'polygons',
            style: f => ({
              fillColor: classColors[ +f.properties?.wind_class ] || '#9e9e9e',
              fillOpacity: 0.45, color:'rgba(39,48,63,.4)', weight:.8
            }),
            onEachFeature: (f,l)=> l.bindTooltip(
              (f.properties?.county || f.properties?.name || '—'),
              {sticky:true, direction:'auto', className:'label'}
            )
          }).addTo(map);
          windChoroplethLayer.eachLayer(l=>l.feature.properties.__legend_value = l.feature.properties.wind_class);
          map.removeLayer(windLayer);
          window.windChoroplethLayer = windChoroplethLayer;

          if (boundary) map.removeLayer(boundary);
          boundary = L.geoJSON(polysFC, { pane:'boundary', style:{ color:'rgba(31,41,55,.6)', weight:1.2, fill:false } }).addTo(map);
          map.fitBounds(boundary.getBounds(), { padding:[12,12] });
          map.setMaxBounds(boundary.getBounds().pad(0.25));
          boundary.setStyle({ className: 'neon-edge' });

          let __focused = null;
          const hoverLayer = window.windChoroplethLayer || windLayer;
          const baseStyle = { fillOpacity:0.22, color:'rgba(39,48,63,.4)', weight:.8 };
          hoverLayer?.eachLayer?.(l=>{
            l.setStyle(baseStyle);
            l.on('mouseover', ()=>{
              const p = l.feature?.properties || {};
              if (__focused !== l) l.setStyle({ fillOpacity:0.45, color:'#22d3ee', weight:1.2 });
              const name = p.county || p.name || '—';
              const cap = (p.capacity_mw!=null) ? __AMA_fmtNumberFa(p.capacity_mw,{digits:0})+' مگاوات' : '—';
              const dens = (p.MW_per_ha!=null) ? __AMA_fmtNumberFa(p.MW_per_ha,{digits:2})+' MW/ha' : '—';
              const p0 = (p.P0!=null) ? __AMA_fmtNumberFa(p.P0,{digits:2}) : '—';
              showInfo(`<b>${name}</b><div>ظرفیت: ${cap}</div><div>بازده: ${dens}</div><div>P0: ${p0}</div>`);
            });
            l.on('mouseout', ()=>{
              if (__focused !== l) l.setStyle(baseStyle);
              hideInfo();
            });
          });
          window.windChoroplethLayer.eachLayer(l=>{
            l.on('click', ()=>{
              __focused = l;
              window.windChoroplethLayer.eachLayer(x=>{
                x.setStyle({ fillOpacity:(x===l?0.65:0.08), color:(x===l?'#22d3ee':'rgba(39,48,63,.4)') });
              });
            });
          });
          map.on('click keydown', (e)=>{
            if (e.key && e.key !== 'Escape') return;
            if (__focused){
              window.windChoroplethLayer.eachLayer(x=> x.setStyle(baseStyle));
              __focused = null;
              hideInfo();
            }
          });
        }
      }

      // wind sites
      if (inManifest('wind_sites.geojson')) {
        const windSitesFC = await fetchJSONWithFallback('wind_sites.geojson');
        console.log('[ama-data] wind_sites features =', Array.isArray(windSitesFC?.features) ? windSitesFC.features.length : 0);
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
            }
          }
          map.on('zoomend', syncZoomVisibility);
          syncZoomVisibility();
        }
      }

      // === Top-10 panel (by P0) ===
      window.__AMA_topPanel = L.control({position:"topright"});
      window.__AMA_topPanel.onAdd = function() {
        const wrap = L.DomUtil.create("div", "ama-panel");
        wrap.innerHTML = `<div class="ama-panel-hd">Top-10 پتانسیل (P0)</div><div class="ama-panel-bd"><div id="ama-top10"></div></div>`;
        return wrap;
      };

      window.__AMA_renderTop10 = function(){
        const geo = countiesGeo;
        if (!geo?.features?.length) return;
        const rows = geo.features
          .map(f => f.properties || {})
          .filter(p => typeof p.P0 === 'number')
          .sort((a,b) => (b.P0||0) - (a.P0||0))
          .slice(0,10);
        const el = document.getElementById("ama-top10");
        if (!el) return;
        el.innerHTML = rows.map((p,idx)=>`
          <div class="ama-row" data-county="${p.county||""}">
            <div class="c">${__AMA_fmtNumberFa(idx+1)}</div>
            <div class="n">${p.county||"—"}</div>
            <div class="m">ظرفیت: ${__AMA_fmtNumberFa(p.capacity_mw||0, {digits:0})} مگاوات</div>
            <div class="h">بازده: ${__AMA_fmtNumberFa(p.MW_per_ha||0, {digits:2})} MW/ha</div>
            <div class="s">P0: ${__AMA_fmtNumberFa(p.P0||0, {digits:2})}</div>
          </div>`).join("");
        el.querySelectorAll(".ama-row").forEach(row=>{
          row.addEventListener("click", ()=>{
            const name = row.getAttribute("data-county");
            let targetLayer = null;
            (window.windChoroplethLayer || boundary)?.eachLayer?.(l=>{
              if ((l.feature?.properties?.county||"") === name) targetLayer = l;
            });
            if (targetLayer) map.fitBounds(targetLayer.getBounds(), {maxZoom: 11});
          });
        });
      };

      window.__AMA_topPanel.addTo(map);
      window.__AMA_renderTop10();
    }

    // جایی که datasetهای دیگر را می‌خواندی (مثلاً برق/آب/گاز/نفت):
    let electricityLinesLayer = null;
    if (__LAYER_MANIFEST.has('electricity_lines.geojson')) {
      electricityLinesLayer = await optionalGeoJSONFile('data/electricity_lines.geojson', { style: f => ({ color:'#22c55e', weight: 2 }) });
    }
    let waterMainsLayer = null;
    if (__LAYER_MANIFEST.has('water_mains.geojson')) {
      waterMainsLayer      = await optionalGeoJSONFile('data/water_mains.geojson',        { style: f => ({ color:'#3b82f6', weight: 2 }) });
    }
    let gasTransmissionLayer = null;
    if (__LAYER_MANIFEST.has('gas_transmission.geojson')) {
      gasTransmissionLayer = await optionalGeoJSONFile('amaayesh/gas_transmission.geojson',   { style: f => ({ color:'#f59e0b', weight: 2 }) });
    }
    let oilPipelinesLayer = null;
    if (__LAYER_MANIFEST.has('oil_pipelines.geojson')) {
      oilPipelinesLayer    = await optionalGeoJSONFile('amaayesh/oil_pipelines.geojson',      { style: f => ({ color:'#ef4444', weight: 2 }) });
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
        div.innerHTML = `<div class="legend-tabs"></div><div class="legend-body"></div><div class="legend-meta"></div>`;
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
            toggle.textContent = div.classList.contains('collapsed') ? 'باز کردن' : 'جمع کردن';
            toggle.setAttribute('aria-expanded', String(!div.classList.contains('collapsed')));
          };
          tabs.appendChild(toggle);
        }
        function activate(key){
          const tabs = div.querySelectorAll('.chip');
          tabs.forEach(t=>t.classList.toggle('active', t.dataset.k===key));
          const g = groups.find(x=>x.key===key), body = div.querySelector('.legend-body');
          if(!g){ body.innerHTML=''; return; }
          if(g.type==='choropleth'){
            body.innerHTML = `
        <div class="legend-head"><b>${g.title}</b>${g.unit?`<span class="unit">${g.unit}</span>`:''}
          ${g.period?`<span class="chip">${g.period}</span>`:''}${g.method?`<span class="chip">${g.method}</span>`:''}
        </div>
        <ul class="swatches">${g.classes.map(c=>`
          <li data-min="${c.min}" data-max="${c.max}">
            <span class="sw" style="background:${c.color}"></span>
            <span class="lbl">${c.label || (c.min+'–'+c.max)}</span>
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
          div.querySelector('.legend-meta').innerHTML = `<span>منبع: ${g.source||'—'}</span><span>اعتماد داده: ${g.confidence||'—'}</span>`;
          div.querySelectorAll('.swatches li').forEach(li=>{
            li.onclick = ()=> onFilter?.(g.key, {min:+li.dataset.min, max:+li.dataset.max});
            li.ondblclick = ()=> onFilter?.(g.key, {min:+li.dataset.min, max:+li.dataset.max, isolate:true});
          });
        }
        return {
          el: div,
          set(newGroups, filterCb){
            groups = newGroups; onFilter = filterCb; renderTabs(); activate(groups[0]?.key);
          }
        };
      }
      const legend = new LegendDock();
      const legendCtl = L.control({position:'bottomright'});
      legendCtl.onAdd = ()=> legend.el;
      legendCtl.addTo(map);

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
        function filterLayer(layer, get, {min,max,isolate}) {
          layer?.eachLayer?.(l=>{
            const v = get(l); const inRange = (v>=min && v<=max);
            l.setStyle?.({ fillOpacity: isolate ? (inRange?0.75:0.05) : (inRange?0.6:0.25), opacity:1 });
          });
        }
        legend.set(tabs, (key,range)=>{
          if(key==='solar') filterLayer(solarLayer, l=>l.feature.properties.__legend_value, range);
          if(key==='wind')  filterLayer(windChoroplethLayer || windLayer,  l=>l.feature.properties.__legend_value, range);
          if(key==='dams')  filterLayer(damsLayer,  l=>l.feature.properties.__legend_value, range);
        });
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
        } else if(inManifest(file)){
          missing.push(th.title);
        }
      }
      const overlays = Object.fromEntries(overlayEntries.filter(([_, layer]) => !!layer));
      L.control.layers({'OpenStreetMap':base}, overlays, { position:'topleft', collapsed:false }).addTo(map);
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
    applyMode();
  })();
})();
