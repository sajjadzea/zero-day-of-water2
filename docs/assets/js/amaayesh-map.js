(function(){
  const labelFa = p => (p?.['name:fa'] || p?.['alt_name:fa'] || p?.name || '—');

  const map = L.map('map', { preferCanvas:true, zoomControl:true });
  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
  map.setView([36.3, 59.6], 7);

  let searchLayer = L.layerGroup().addTo(map);

  // کشف base path از مسیر صفحه (مثلاً /amaayesh/ یا /deploy-preview-XXX/amaayesh/)
  const BASE_PATH = (() => {
    const p = location.pathname;
    return p.endsWith('/') ? p : p.replace(/\/[^\/]*$/, '/');
  })();

  // پاک‌سازی ورودی و ساخت مسیر نهایی: /<base>/data/<rel-clean>
  function dataUrl(rel) {
    // حذف هر / اول، و هر data/ اول، و هر ./ اول
    const clean = String(rel).replace(/^(\/+|\.\/)/, '').replace(/^data\//, '');
    return `${BASE_PATH}data/${clean}`;
  }

  // لودر مقاوم با هندل 404 و فهرست fallbackها
  async function loadJSON(relOrList, { layerKey, fallbacks = [] } = {}) {
    const rels = Array.isArray(relOrList) ? relOrList : [relOrList];
    const urls = [...rels.map(dataUrl), ...fallbacks];
    for (const u of urls) {
      try {
        const res = await fetch(u, { cache: 'no-cache' });
        if (res.ok) return await res.json();
        if (res.status === 404) continue;
      } catch (e) { /* try next */ }
    }
    if (layerKey) disableLayerToggle(layerKey);
    console.info('⛔️ Dataset not found:', rels[0], '→ tried:', urls);
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

  // helper: robust JSON loader (tries /data, ./data, ../data)
  async function loadJSONSmart(name){
    const candidates = [
      name.startsWith('/data/') ? name : `/data/${name}`,
      name.startsWith('./data/') ? name : `./data/${name}`,
      new URL(`../data/${name}`, location).toString()
    ];
    for (const url of candidates){
      try { const r = await fetch(url); if (r.ok) return r.json(); } catch(e){}
    }
    console.warn('[amaayesh] cannot load', name);
    return null;
  }

  // لایه‌ها در پن‌های جدا برای کنترل z-index
  map.createPane('polygons'); map.createPane('boundary'); map.createPane('points');

  (async () => {
    const cfg = await loadJSON('../layers.config.json');
    const combinedPath = cfg?.baseData?.combined;

    if(!combinedPath){ return; }

    const combinedRel = combinedPath.replace(/^\//,'').replace(/^data\//,'');
    const combined = await loadJSON(combinedRel, { layerKey:'province' });
    if(!combined || !Array.isArray(combined.features) || combined.features.length===0){ return; }

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
                      fillOpacity:0.30, color:'#0a0a0a', weight:1 }),
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

    const boundary = L.geoJSON(polys, { pane:'boundary', style:{ color:'#111827', weight:2.4, fill:false } }).addTo(map);
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
      const radiusFromMW = mw => Math.max(6, 1.8*Math.sqrt(Math.max(0, mw||0)));

      const countiesGeo = await loadJSONSmart('counties.geojson');
      const windSitesGeo = await loadJSONSmart('wind_sites.geojson');

      if (countiesGeo?.features?.length){
        windChoroplethLayer = L.geoJSON(countiesGeo, {
          pane: 'polygons',
          style: f => ({
            fillColor: classColors[ +f.properties?.wind_class ] || '#9e9e9e',
            fillOpacity: 0.30, color:'#0a0a0a', weight:1
          }),
          onEachFeature: (f,l)=> l.bindTooltip(
            (f.properties?.county || f.properties?.name || '—'),
            {sticky:true, direction:'auto', className:'label'}
          )
        }).addTo(map);
        windChoroplethLayer.eachLayer(l=>l.feature.properties.__legend_value = l.feature.properties.wind_class);
        map.removeLayer(windLayer);
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
            <div class="c">${idx+1}</div>
            <div class="n">${p.county||"—"}</div>
            <div class="m">MW: ${Number(p.capacity_mw||0).toFixed(0)}</div>
            <div class="h">MW/ha: ${Number(p.MW_per_ha||0).toFixed(2)}</div>
            <div class="s">P0: ${Number(p.P0||0).toFixed(2)}</div>
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

      if (windSitesGeo?.features?.length){
        windSitesLayer = L.geoJSON(windSitesGeo, {
          pane: 'points',
          pointToLayer: (f, latlng) => {
            const p = f.properties || {};
            const low = (p.quality === 'low');
            return L.circleMarker(latlng, {
              radius: radiusFromMW(p.capacity_mw_est),
              weight: 1.5, color:'#111827', opacity:1,
              fillColor:'#111827', fillOpacity:.85,
              dashArray: low ? '2 4' : null
            });
          },
          onEachFeature: (f, layer) => {
            const p = f.properties || {};
            const badge = `<span style="background:#fee2e2;color:#991b1b;padding:0 6px;border-radius:6px;font-size:11px;">برآوردی</span>`;
            layer.bindPopup(`
          <div dir="rtl" style="min-width:220px">
            <div style="font-weight:700">${p.name_fa || '—'}</div>
            <div>شهرستان: ${p.county || '—'} | کلاس: ${p.wind_class ?? '—'}</div>
            <div>~MW/سایت: ${fmt(p.capacity_mw_est)} ${badge}</div>
            <div>کیفیت مختصات: ${p.quality || '—'}</div>
            <div style="opacity:.8;font-size:12px">منبع: ${p.source || '—'}</div>
          </div>
        `, {maxWidth: 320});
          }
        }).addTo(map);
      }
    }

      // ===== LegendDock =====
      function LegendDock(){
        const div = L.DomUtil.create('div','legend-dock'); div.dir='rtl';
        div.innerHTML = `<div class="legend-tabs"></div><div class="legend-body"></div><div class="legend-meta"></div>`;
        let groups = [], onFilter = null;
        function renderTabs(){
          const tabs = div.querySelector('.legend-tabs');
          tabs.innerHTML = groups.map((g,i)=>`<button class="chip ${i?'':'active'}" data-k="${g.key}">${g.icon||''} ${g.title}</button>`).join('');
          tabs.querySelectorAll('.chip').forEach(t=>t.onclick=()=>activate(t.dataset.k));
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

      const pointLayer = L.geoJSON(points, {
      pane:'points',
      pointToLayer: (f, latlng) => {
        const inner = L.circleMarker(latlng, { radius:4, color:'#0ea5e9', weight:2, fillColor:'#0ea5e9', fillOpacity:1 });
        const outer = L.circleMarker(latlng, { radius:8, color:'#0ea5e9', weight:2, fill:false });
        return L.layerGroup([outer, inner]);
      },
      onEachFeature: (f,l)=> l.bindPopup(`<b>${labelFa(f.properties)}</b>`)
      }).addTo(map);

      const overlays = {
        'مرز شهرستان‌ها': boundary,
        'ظرفیت تجمیعی خورشیدی': solarLayer,
        'کلاس بادی (Choropleth)': windChoroplethLayer || windLayer
      };
      if (windSitesLayer) overlays['سایت‌های بادی (برآوردی)'] = windSitesLayer;
      if (damsLayer) overlays['سدها'] = damsLayer;
      overlays['شهرها/نقاط'] = pointLayer;
    const missing = [];
    for(const th of (cfg?.themes || [])){
      const rel = th.file.replace(/^\//,'').replace(/^data\//,'');
      const j = await loadJSON(rel, { layerKey: th.key });
      if(!j){ missing.push(th.title); continue; }
      const layer = L.geoJSON(j,{ pane:'polygons', style: th.style || {color:'#ef4444',weight:3} });
      overlays[th.title] = layer; layer.addTo(map);
    }
    L.control.layers({'OpenStreetMap':base}, overlays, {collapsed:false}).addTo(map);
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
      const gasLayer = overlays['گاز'];
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
      map.on('overlayadd', e => { if (e.layer === gasLayer) gasEffects.addTo(map); });
      map.on('overlayremove', e => { if (e.layer === gasLayer) map.removeLayer(gasEffects); });
    }

    document.getElementById('info').innerHTML = missing.length
      ? `لایه‌های در صف بارگذاری: ${missing.join('، ')}`
      : 'همه‌ی لایه‌ها بارگذاری شدند.';
  })().catch(()=>{ /* بدون خطا روی UI */ });

  // === Persona mode chips (owner/edu/invest/ind) ===
  (function(){
    const modes = [
      {id:'owner',  icon:'👤', label:'مالک'},
      {id:'edu',    icon:'🎓', label:'یادگیری'},
      {id:'invest', icon:'💼', label:'سرمایه‌گذار'},
      {id:'ind',    icon:'🏭', label:'صنایع'},
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
      if (wantTop) {
        if (!window.__AMA_topPanel._map) {
          window.__AMA_topPanel.addTo(map);
          window.__AMA_renderTop10?.();
        } else {
          window.__AMA_renderTop10?.();
        }
      } else {
        if (window.__AMA_topPanel._map) map.removeControl(window.__AMA_topPanel);
      }
      // TODO: در صورت نیاز اینجا CTAهای خاص هر مود یا فیلتر کلاس‌ها را هم سوییچ کن
    }
    applyMode();
  })();
})();
