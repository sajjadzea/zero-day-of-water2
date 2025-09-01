(function(){
  const labelFa = p => (p?.['name:fa'] || p?.['alt_name:fa'] || p?.name || '—');

  const map = L.map('map', { preferCanvas:true, zoomControl:true });
  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{ attribution:'© OpenStreetMap' }).addTo(map);
  map.setView([36.3, 59.6], 7);

  let searchLayer = L.layerGroup().addTo(map);

  async function loadJSON(u){ const r = await fetch(u); if(!r.ok) throw new Error(u+' '+r.status); return r.json(); }

  // لایه‌ها در پن‌های جدا برای کنترل z-index
  map.createPane('polygons'); map.createPane('boundary'); map.createPane('points');

  (async () => {
    const cfg = await loadJSON('./layers.config.json').catch(()=>null);
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
    // --- Province focus (mask outside province) ---
    let maskLayer = null;
    const provinceBounds = boundary.getBounds();
    // keep user inside province by default
    map.setMaxBounds(provinceBounds.pad(0.25));

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

    const overlays = { 'مرز شهرستان‌ها': boundary, 'پُرشدگی شهرستان‌ها': polyFill, 'شهرها/نقاط': pointLayer };
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
})();
