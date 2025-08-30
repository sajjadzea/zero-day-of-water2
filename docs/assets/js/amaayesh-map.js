(function(){
  const labelFa = p => (p?.['name:fa'] || p?.['alt_name:fa'] || p?.name || '—');

  const map = L.map('map', { preferCanvas:true, zoomControl:true });
  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
  map.setView([36.3, 59.6], 7);

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

    L.control.layers({'OpenStreetMap':base}, {
      'مرز شهرستان‌ها': boundary, 'پُرشدگی شهرستان‌ها': polyFill, 'شهرها/نقاط': pointLayer
    }, {collapsed:false}).addTo(map);
    document.getElementById('info').textContent = 'پایه نقشه بارگذاری شد.';
  })().catch(()=>{ /* بدون خطا روی UI */ });
})();
