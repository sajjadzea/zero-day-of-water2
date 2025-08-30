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
    L.Control.geocoder({ defaultMarkGeocode:false }).addTo(map);

    // اگر لایه گاز موجود است، جلوه‌های اضافه اعمال شود
    const gasLayer = overlays && overlays['گاز'];
    if (gasLayer) {
      const gasEffects = L.layerGroup();

      // هاله
      const gasFC = gasLayer.toGeoJSON();
      L.geoJSON(gasFC, { style:{ color:'#ffe0d6', weight:8, opacity:1 } }).addTo(gasEffects);

      // فلِش جهت (اگر پلاگین Decorator موجود بود)
      if (typeof L !== 'undefined' && L.polylineDecorator && L.Symbol && L.Symbol.arrowHead) {
        const segs = [];
        gasLayer.eachLayer(l => { if (l && typeof l.getLatLngs === 'function') segs.push(l); });
        if (segs.length) {
          L.polylineDecorator(segs, {
            patterns: [{ offset:0, repeat:'80px',
              symbol: L.Symbol.arrowHead({ pixelSize:8, pathOptions:{ color:'#ef476f', weight:1 }})
            }]
          }).addTo(gasEffects);
        }
      }

      // بافر فاصله (اگر Turf موجود بود)
      if (typeof turf !== 'undefined') {
        const distancesKm = [10,30,50];
        let prev = null;
        for (let i=0; i<distancesKm.length; i++) {
          const b = turf.buffer(gasFC, distancesKm[i], { units:'kilometers' });
          const ring = prev ? turf.difference(b, prev) : b; prev = b;
          if (ring) L.geoJSON(ring, {
            style:{ fillColor:['#fff5ef','#ffe3d6','#ffc2a4'][i]||'#ffd0cc', fillOpacity:.25, color:'#e06b5f', weight:1 }
          }).addTo(gasEffects);
        }
      }

      // هم‌زمان‌سازی با کنترل لایه‌ها
      map.on('overlayadd',   e => { if (e.layer === gasLayer) { gasEffects.addTo(map); gasLayer.bringToFront(); } });
      map.on('overlayremove',e => { if (e.layer === gasLayer) map.removeLayer(gasEffects); });

      if (map.hasLayer(gasLayer)) { gasEffects.addTo(map); gasLayer.bringToFront(); }
    }

    document.getElementById('info').innerHTML = missing.length
      ? `لایه‌های در صف بارگذاری: ${missing.join('، ')}`
      : 'همه‌ی لایه‌ها بارگذاری شدند.';
  })().catch(()=>{ /* بدون خطا روی UI */ });
})();
