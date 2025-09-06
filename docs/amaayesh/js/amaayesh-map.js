(function(){
  const MAP_ID = 'map';

  function dbg(){ if (window.AMA_DEBUG) console.log.apply(console, arguments); }

  async function fetchJsonSafe(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) { console.warn('[AMA] fetch failed', url, res.status); return null; }
      const text = await res.text();
      try { return JSON.parse(text); }
      catch(e){ console.warn('[AMA] invalid JSON', url); return null; }
    } catch (e) {
      console.warn('[AMA] network error', url, e);
      return null;
    }
  }

  async function ama_bootstrap(){
    // base map
    const map = L.map(MAP_ID, { zoomControl: true }).setView([35.6,59.0], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 18, attribution: '&copy; OpenStreetMap' }).addTo(map);

    // load manifest
    const manifest = await fetchJsonSafe('amaayesh/layers.config.json') ||
                     await fetchJsonSafe('layers.config.json'); // fallback
    if (!manifest || !manifest.files) {
      console.warn('[AMA] manifest missing; rendering base map only');
      return;
    }

    // boundaries
    const countiesUrl = manifest.files.counties;
    const provinceUrl = manifest.files.province;

    const counties = countiesUrl ? await fetchJsonSafe(countiesUrl) : null;
    const province = provinceUrl ? await fetchJsonSafe(provinceUrl) : null;

    if (counties && counties.type === 'FeatureCollection') {
      L.geoJSON(counties, {
        style: { color:'#111', weight:2, opacity:1, fillOpacity:0 }
      }).addTo(map);
    } else {
      console.warn('[AMA] counties boundary missing');
    }

    if (province && province.type === 'FeatureCollection') {
      L.geoJSON(province, {
        style: { color:'#6b7280', weight:3, dashArray:'4 4', fillOpacity:0 }
      }).addTo(map);
    }

    // overlays (lazy)
    const wind  = manifest.files.wind_sites  ? await fetchJsonSafe(manifest.files.wind_sites)  : null;
    const solar = manifest.files.solar_sites ? await fetchJsonSafe(manifest.files.solar_sites) : null;
    const dams  = manifest.files.dams        ? await fetchJsonSafe(manifest.files.dams)        : null;

    if (wind && wind.type === 'FeatureCollection') {
      L.geoJSON(wind, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, { radius:6, color:'#2563eb', fillOpacity:.6 })
      }).addTo(map);
    } else if (manifest.files.wind_sites) {
      console.warn('[AMA] wind_sites missing');
    }

    if (solar && solar.type === 'FeatureCollection') {
      L.geoJSON(solar, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, { radius:5, color:'#f59e0b', fillOpacity:.6 })
      }).addTo(map);
    }

    if (dams && dams.type === 'FeatureCollection') {
      L.geoJSON(dams, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, { radius:5, color:'#0ea5e9', fillOpacity:.6 })
      }).addTo(map);
    }

    dbg('bootstrap done');
  }

  // start after DOM is ready (guard against early execution)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ama_bootstrap, { once:true });
  } else {
    ama_bootstrap();
  }
})();
