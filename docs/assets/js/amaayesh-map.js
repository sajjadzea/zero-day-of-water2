(function(){
  const labelFa = p => (p?.['name:fa'] || p?.['alt_name:fa'] || p?.name || '—');

  const map = L.map('map', { preferCanvas:true, zoomControl:true });
  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
  map.setView([36.3, 59.6], 7);

  // نمایش موقت نتیجهٔ جستجو
  let searchLayer = L.layerGroup().addTo(map);

  async function loadJSON(u){ const r = await fetch(u); if(!r.ok) throw new Error(u+' '+r.status); return r.json(); }

  // لایه‌ها در پن‌های جدا برای کنترل z-index
  map.createPane('polygons'); map.createPane('boundary'); map.createPane('points');

  (async () => {
    const cfg = await loadJSON('../amaayesh/layers.config.json').catch(()=>null);
    const combinedPath = cfg?.baseData?.combined;

    if(!combinedPath){ return; }

    const combined = await loadJSON(combinedPath).catch(()=>null);
    if(!combined || !Array.isArray(combined.features) || combined.features.length===0){ return; }

    const polys = { type:'FeatureCollection', features:[] }, points = { type:'FeatureCollection', features:[] };
    for(const f of combined.features){
      const t = f.geometry?.type;
      if(t==='Polygon' || t==='MultiPolygon') polys.features.push(f);
      else if(t==='Point') points.features.push(f);
    }

    const polyFill = L.geoJSON(polys, {
      pane:'polygons',
      style:{ color:'#374151', weight:1, fillColor:'#cfe8ff', fillOpacity:0.35, opacity:0.7 },
      onEachFeature: (f,l)=> l.bindTooltip(labelFa(f.properties), {sticky:true, direction:'auto', className:'label'})
    }).addTo(map);

    const boundary = L.geoJSON(polys, { pane:'boundary', style:{ color:'#111827', weight:2.4, fill:false } }).addTo(map);
    map.fitBounds(boundary.getBounds(), { padding:[12,12] });
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

    const overlays = { 'مرز شهرستان‌ها': boundary, 'پُرشدگی شهرستان‌ها': polyFill, 'شهرها/نقاط': pointLayer };
    if (typeof overlays === 'object') {
      overlays['نتیجه جستجو'] = searchLayer;
    }
    const missing = [];
    for(const th of (cfg?.themes || [])){
      try{
        const data = await loadJSON(th.file);
        const layer = L.geoJSON(data,{ pane:'polygons', style: th.style || {color:'#ef4444',weight:3} });
        overlays[th.title] = layer; layer.addTo(map);
      }catch(e){ missing.push(th.title); }
    }
    L.control.layers({'OpenStreetMap':base}, overlays, {collapsed:false}).addTo(map);
    L.control.scale({ metric:true, imperial:false }).addTo(map);
    if (L.Control && L.Control.geocoder) {
      const geocoderCtl = L.Control.geocoder({
        defaultMarkGeocode: false,
        placeholder: 'جستجو…'
      })
      .on('markgeocode', (e) => {
        const { center, bbox, name } = e.geocode;
        searchLayer.clearLayers();
        searchLayer.addLayer(L.marker(center, { title: name }));
        if (bbox) {
          const bounds = L.latLngBounds(bbox);
          map.fitBounds(bounds.pad(0.1));
        } else {
          map.setView(center, Math.max(map.getZoom(), 12));
        }
      })
      .addTo(map);
    }
    document.getElementById('info').innerHTML = missing.length
      ? `لایه‌های در صف بارگذاری: ${missing.join('، ')}`
      : 'همه‌ی لایه‌ها بارگذاری شدند.';
  })().catch(()=>{ /* بدون خطا روی UI */ });
})();
