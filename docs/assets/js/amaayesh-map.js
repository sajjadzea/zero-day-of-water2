(function(){
  const labelFa = p => (p?.['name:fa'] || p?.['alt_name:fa'] || p?.name || '—');

  const map = L.map('map', { preferCanvas:true, zoomControl:true });
  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
  map.setView([36.3, 59.6], 7);

  let searchLayer = L.layerGroup().addTo(map);

  // base path = پوشه‌ای که index.html در آن است
  const BASE_PATH = (()=>{
    const p = location.pathname;
    return p.endsWith('/') ? p : p.replace(/\/[^\/]*$/, '/');
  })();
  // ساخت URL دیتا با توجه به BASE_PATH
  const dataUrl = rel => `${BASE_PATH}data/${rel}`;

  // لودر مقاوم با fallback و هندل خطا
  async function loadJSON(rel, {fallbacks=[]}={}){
    const urls = [ dataUrl(rel), ...fallbacks ];
    for (const u of urls){
      try{
        const res = await fetch(u, {cache:'no-cache'});
        if(res.ok) return await res.json();
        if(res.status===404) continue;
      }catch(e){ /* ignore and try next */ }
    }
    console.info('Layer not available:', rel);
    return null;
  }
  // ابزار غیرفعال‌کردن سوییچ UI لایه در صورت نبودن دیتا
  function disableLayerToggle(layerKey){
    const el = document.querySelector(`[data-layer-key="${layerKey}"]`);
    if(el){ el.disabled = true; el.title = 'داده در این دیپلوی موجود نیست'; el.checked = false; }
  }

  // لایه‌ها در پن‌های جدا برای کنترل z-index
  map.createPane('polygons'); map.createPane('boundary'); map.createPane('points');

  (async () => {
    const cfg = await loadJSON('../layers.config.json', {fallbacks:['layers.config.json']});
    const combinedPath = cfg?.baseData?.combined;

    if(!combinedPath){ return; }

    const combinedRel = combinedPath.replace(/^\//,'');
    const combined = await loadJSON(combinedRel.startsWith('data/') ? combinedRel.replace(/^data\//,'') : combinedRel);
    if(!combined || !Array.isArray(combined.features) || combined.features.length===0){ return; }

    const damsPath = cfg?.baseData?.dams;
    const damsRel = damsPath ? damsPath.replace(/^\//,'') : null;
    const damsGeojson = damsRel ? await loadJSON(damsRel.startsWith('data/') ? damsRel.replace(/^data\//,'') : damsRel) : null;

    const polys = { type:'FeatureCollection', features:[] }, points = { type:'FeatureCollection', features:[] };
    for(const f of combined.features){
      const t = f.geometry?.type;
      if(t==='Polygon' || t==='MultiPolygon') polys.features.push(f);
      else if(t==='Point') points.features.push(f);
    }

    const solarLegendCfg = {
      key:'solar', icon:'☀️', title:'ظرفیت تجمیعی خورشیدی', unit:'MW', type:'choropleth',
      period:'۱۴۰۳', method:'Jenks', help:'طبقه‌بندی Jenks روی توزیع درون‌استانی.',
      classes:[
        {min:10, max:38,  color:'#f3f4f6'},
        {min:38, max:74,  color:'#e9d5ff'},
        {min:74, max:233, color:'#c4b5fd'},
        {min:233,max:774, color:'#8b5cf6'},
        {min:774,max:1200,color:'#5b21b6'},
      ],
      source:'ساتبا + برآورد استان', confidence:'متوسط'
    };
    const windLegendCfg = {
      key:'wind', icon:'🌬️', title:'کلاس بادی', unit:'کلاس', type:'choropleth',
      classes:[
        {min:1, max:1, color:'#bdbdbd'},
        {min:2, max:2, color:'#f6c945'},
        {min:3, max:3, color:'#29cc7a'},
      ],
      source:'گزارش استان/جدول ۸', confidence:'متوسط'
    };
    const damsLegendCfg = {
      key:'dams', icon:'🟦', title:'سدها', type:'dams',
      classes:[
        {min:0,  max:20, label:'۰–۲۰٪',  color:'#ef4444'},
        {min:20, max:40, label:'۲۰–۴۰٪', color:'#fb923c'},
        {min:40, max:60, label:'۴۰–۶۰٪', color:'#f59e0b'},
        {min:60, max:80, label:'۶۰–۸۰٪', color:'#84cc16'},
        {min:80, max:100,label:'۸۰–۱۰۰٪',color:'#22c55e'},
      ],
      samples:[ {v:50, r:8}, {v:200, r:14}, {v:800, r:20} ],
      source:'شرکت آب منطقه‌ای/پایش لحظه‌ای', confidence:'پایین'
    };
    const scaleSolar = v => {
      const cls = solarLegendCfg.classes.find(c=>v>=c.min && v<=c.max);
      return cls?cls.color:'#f3f4f6';
    };
    const solarLayer = L.geoJSON(polys, {
      pane:'polygons',
      style: f => ({ color:'#374151', weight:1, fillColor:scaleSolar(f.properties.solar_mw), fillOpacity:0.35, opacity:0.7 }),
      onEachFeature: (f,l)=> l.bindTooltip(labelFa(f.properties), {sticky:true, direction:'auto', className:'label'})
    }).addTo(map);
    solarLayer.eachLayer(l => { l.feature.properties.__legend_value = l.feature.properties.solar_mw; });

    const windLayer = L.geoJSON(polys, {
      pane:'polygons',
      style: f => ({ fillColor: ({1:'#bdbdbd',2:'#f6c945',3:'#29cc7a'})[f.properties.wind_class_num] || '#9e9e9e',
                      fillOpacity:0.30, color:'#0a0a0a', weight:1 }),
      onEachFeature: (f,l)=> l.bindTooltip(labelFa(f.properties), {sticky:true, direction:'auto', className:'label'})
    }).addTo(map);
    windLayer.eachLayer(l => { l.feature.properties.__legend_value = l.feature.properties.wind_class_num; });

    const fillColorByPct = p => p<=20?'#ef4444':p<=40?'#fb923c':p<=60?'#f59e0b':p<=80?'#84cc16':'#22c55e';
    const rByMCM = v => Math.max(6, Math.sqrt(v)/2);
    const damsLayer = L.geoJSON(damsGeojson || {type:'FeatureCollection',features:[]},{
      pointToLayer:(f,latlng)=>{
        const p=f.properties, pct=p.dam_fill_pct||0, mcm=p.dam_storage_mcm||10;
        const marker=L.circleMarker(latlng,{ radius:rByMCM(mcm), color:'#0a0a0a', weight:1,
          fillColor:fillColorByPct(pct), fillOpacity:.85 });
        p.__legend_value = pct; // for filterChoro
        marker.bindPopup(`<b>${p.name||'سد'}</b><br>پرشدگی: ${pct}% | ظرفیت: ${mcm} میلیون مترمکعب`);
        return marker;
      }
    }).addTo(map);

    const boundary = L.geoJSON(polys, { pane:'boundary', style:{ color:'#111827', weight:2.4, fill:false } }).addTo(map);
    map.fitBounds(boundary.getBounds(), { padding:[12,12] });

    // ===== LegendDock (reusable) =====
    function LegendDock(){
      const div = L.DomUtil.create('div','legend-dock'); div.dir='rtl';
      div.innerHTML = `<div class="legend-tabs"></div><div class="legend-body"></div><div class="legend-meta"></div>`;
      const set = (groups,onFilter)=>{
        const tabs = div.querySelector('.legend-tabs');
        tabs.innerHTML = groups.map((g,i)=>`<button class="chip ${i?'':'active'}" data-k="${g.key}">${g.icon||''} ${g.title}</button>`).join('');
        const activate = (key)=>{
          tabs.querySelectorAll('.chip').forEach(t=>t.classList.toggle('active', t.dataset.k===key));
          const g = groups.find(x=>x.key===key); const body = div.querySelector('.legend-body');
          if(g.type==='choropleth'){
            body.innerHTML = `
          <div class="legend-head">
            <b>${g.title}</b><span class="unit">${g.unit||''}</span>
            ${g.period?`<span class="chip">${g.period}</span>`:''}
            ${g.method?`<span class="chip">${g.method}</span>`:''}
            <a class="help" title="${g.help||''}">؟</a>
          </div>
          <ul class="swatches">${g.classes.map(c=>`
            <li data-min="${c.min}" data-max="${c.max}">
              <span class="sw" style="background:${c.color}"></span>
              <span class="lbl">${c.min}–${c.max}</span>
            </li>`).join('')}
          </ul>`;
          }
          if(g.type==='dams'){
            body.innerHTML = `
          <div class="legend-head"><b>${g.title}</b></div>
          <div class="subhead">رنگ = درصد پرشدگی</div>
          <ul class="swatches">${g.classes.map(c=>`
            <li data-min="${c.min}" data-max="${c.max}">
              <span class="sw" style="background:${c.color}"></span>
              <span class="lbl">${c.label}</span>
            </li>`).join('')}
          </ul>
          <div class="subhead" style="margin-top:8px">اندازه = ظرفیت مخزن (میلیون m³)</div>
          <div class="bubbles">${g.samples.map(s=>`
            <span class="bubble" style="width:${s.r*2}px;height:${s.r*2}px"></span>
            <span class="lbl">${s.v}</span>`).join('')}</div>`;
          }
          if(g.type==='size'){
            body.innerHTML = `
          <div class="legend-head"><b>${g.title}</b><span class="unit">${g.unit||''}</span></div>
          <div class="bubbles">${g.samples.map(s=>`
            <span class="bubble" style="width:${s.r*2}px;height:${s.r*2}px"></span>
            <span class="lbl">${s.v}</span>`).join('')}</div>`;
          }
          div.querySelector('.legend-meta').innerHTML =
            `<span>منبع: ${g.source||'—'}</span><span>اعتماد داده: ${g.confidence||'—'}</span>`;
          // interactions
          div.querySelectorAll('.swatches li').forEach(li=>{
            li.onclick = ()=> onFilter?.(g.key, {min:+li.dataset.min, max:+li.dataset.max});
            li.ondblclick = ()=> onFilter?.(g.key, {min:+li.dataset.min, max:+li.dataset.max, isolate:true});
          });
        };
        tabs.querySelectorAll('.chip').forEach(t=>t.onclick=()=>activate(t.dataset.k));
        activate(groups[0].key);
      };
      return { el:div, set };
    }

    // add control to map
    const legend = new LegendDock();
    const legendCtl = L.control({position:'bottomright'});
    legendCtl.onAdd = ()=> legend.el;
    legendCtl.addTo(map);

    // helper to dim/iso choropleth layers by value range
    function filterChoro(layer, key, range){
      // expects feature.properties[keyField] or equivalent mapping; adapt inside switch if needed
      const {min,max,isolate} = range||{};
      layer.eachLayer(l=>{
        const v = l.feature?.properties?.__legend_value ?? l.feature?.properties?.value ?? l.options?.value;
        const inRange = (v>=min && v<=max);
        const on = isolate ? inRange : true;
        l.setStyle({ fillOpacity: isolate ? (inRange?0.75:0.05) : (inRange?0.6:0.25), opacity: 1 });
        if(!on && !isolate){ /* no-op */ }
      });
    }
    document.querySelector('.legend-floating')?.remove();
    legend.set([ solarLegendCfg, windLegendCfg, damsLegendCfg ], (key,range)=>{
      if(key==='solar') filterChoro(solarLayer,key,range);
      if(key==='wind')  filterChoro(windLayer,key,range);
      if(key==='dams')  filterChoro(damsLayer,key,range); // uses __legend_value = dam_fill_pct
    });
    // --- Province focus (mask outside province) ---
    let maskLayer = null;
    const provinceBounds = boundary.getBounds();
    // keep user inside province by default
    map.setMaxBounds(provinceBounds.pad(0.25));

    // --- Focus helpers ---
    function focusOnProvince(){
      if(maskLayer && !map.hasLayer(maskLayer)) map.addLayer(maskLayer);
      map.setMaxBounds(provinceBounds.pad(0.25));
      map.fitBounds(provinceBounds, { padding:[12,12] });
    }
    function showNationalContext(){
      if(maskLayer && map.hasLayer(maskLayer)) map.removeLayer(maskLayer);
      map.setMaxBounds(null);
    }

    // Build a world polygon with holes = county rings (province union as holes)
    const worldRing = [[-180,-85],[-180,85],[180,85],[180,-85],[-180,-85]];
    const holes = [];
    polys.features.forEach(f=>{
      const g = f.geometry;
      if(!g) return;
      if(g.type==='Polygon') holes.push(g.coordinates[0]);
      if(g.type==='MultiPolygon') g.coordinates.forEach(r=>holes.push(r[0]));
    });
    const maskFeature = { type:'Feature', geometry:{ type:'Polygon', coordinates:[worldRing, ...holes] } };

    // own pane so it sits above basemap and below boundaries
    map.createPane('mask'); map.getPane('mask').style.zIndex = 350;
    maskLayer = L.geoJSON(maskFeature, {
      pane:'mask', interactive:false,
      style:{ fillColor:'#0a0f1c', fillOpacity:0.55, stroke:false }
    }).addTo(map);

    // glow/halo on province edge for a modern feel
    boundary.setStyle({ color:'#00e5ff', weight:2.6, fill:false, className:'neon-edge' });
    (function(){
      const s = document.createElement('style');
      s.textContent = `.neon-edge{filter:drop-shadow(0 0 6px rgba(0,229,255,.55))}`;
      document.head.appendChild(s);
    })();
    map.on('zoomend', ()=> boundary.setStyle({ weight: map.getZoom()>=10 ? 3.2 : 2.4 }));

    const pointLayer = L.geoJSON(points, {
      pane:'points',
      pointToLayer: (f, latlng) => {
        const inner = L.circleMarker(latlng, { radius:4, color:'#0ea5e9', weight:2, fillColor:'#0ea5e9', fillOpacity:1 });
        const outer = L.circleMarker(latlng, { radius:8, color:'#0ea5e9', weight:2, fill:false });
        return L.layerGroup([outer, inner]);
      },
      onEachFeature: (f,l)=> l.bindPopup(`<b>${labelFa(f.properties)}</b>`)
    }).addTo(map);

    const overlays = { 'مرز شهرستان‌ها': boundary, 'ظرفیت تجمیعی خورشیدی': solarLayer, 'کلاس بادی': windLayer, 'سدها': damsLayer,
      'شهرها/نقاط': pointLayer };
    const missing = [];
    for(const th of (cfg?.themes || [])){
      const rel = th.file.replace(/^\//,'');
      const j = await loadJSON(rel.startsWith('data/') ? rel.replace(/^data\//,'') : rel);
      if(!j){ disableLayerToggle(th.key); missing.push(th.title); continue; }
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

    // --- UI control (Leaflet bar) ---
    const focusCtl = L.control({ position:'topleft' });
    focusCtl.onAdd = function(){
      const div = L.DomUtil.create('div','leaflet-bar');
      div.style.direction = 'rtl';
      div.innerHTML = `
        <a href="#" title="استان‌محور" id="btn-focus-on" style="padding:0 8px">استان</a>
        <a href="#" title="زمینه کشور" id="btn-focus-off" style="padding:0 8px;border-top:1px solid #ccc">کشور</a>
      `;
      // prevent map drag/zoom on click
      L.DomEvent.disableClickPropagation(div);
      L.DomEvent.on(div.querySelector('#btn-focus-on'),'click',(e)=>{ e.preventDefault(); focusOnProvince(); });
      L.DomEvent.on(div.querySelector('#btn-focus-off'),'click',(e)=>{ e.preventDefault(); showNationalContext(); });
      return div;
    };
    focusCtl.addTo(map);

    // default: province focus
    focusOnProvince();

    document.addEventListener('keydown', (e)=>{
      if(e.key==='1') focusOnProvince();
      if(e.key==='2') showNationalContext();
    });

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
})();
