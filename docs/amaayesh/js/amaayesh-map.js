(function(){
  const MAP_ID = 'map';

  function dbg(){ if (window.AMA_DEBUG) console.log('[AMA]', ...arguments); }
  function warn(){ console.warn('[AMA]', ...arguments); }

  async function fetchJsonSafe(url) {
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      if (!res.ok) { warn('fetch failed', url, res.status); return null; }
      const ct = (res.headers.get('content-type') || '').toLowerCase();
      const text = await res.text();
      // Reject obvious HTML rewrites (e.g., 404 -> index.html)
      if (ct.includes('html') || text.trim().startsWith('<!DOCTYPE')) {
        warn('unexpected HTML for JSON', url);
        return null;
      }
      try { return JSON.parse(text); }
      catch(e){ warn('invalid JSON', url); return null; }
    } catch (e) {
      warn('network error', url, e);
      return null;
    }
  }

  // Global handles for debug
  const AMA = (window.AMA = window.AMA || {});
  AMA.layers = { wind:null, solar:null, dams:null };
  AMA.groups = { wind:L.layerGroup(), solar:L.layerGroup(), dams:L.layerGroup() };

  async function ama_bootstrap(){
    // 1) Base map
    const map = L.map(MAP_ID, { zoomControl:true }).setView([35.6, 59.0], 7);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      { maxZoom: 18, attribution: '&copy; OpenStreetMap' }).addTo(map);

    // 2) Manifest
    const manifest = await fetchJsonSafe('amaayesh/layers.config.json')
                   || await fetchJsonSafe('layers.config.json');
    if (!manifest || !manifest.files) {
      warn('manifest missing → only base map will render');
      return;
    }

    // 3) Boundaries
    const counties = manifest.files.counties ? await fetchJsonSafe(manifest.files.counties) : null;
    if (counties && counties.type === 'FeatureCollection') {
      L.geoJSON(counties, {
        style:{ color:'#111', weight:2, opacity:1, fillOpacity:0 }
      }).addTo(map);
      AMA.counties = counties;
    } else if (manifest.files.counties) warn('missing counties');

    const province = manifest.files.province ? await fetchJsonSafe(manifest.files.province) : null;
    if (province && province.type === 'FeatureCollection') {
      L.geoJSON(province, {
        style:{ color:'#6b7280', weight:3, dashArray:'4 4', fillOpacity:0 }
      }).addTo(map);
      AMA.province = province;
    }

    // 4) Overlays (point layers) + LayerGroups
    async function buildPoints(url, group, makeStyle){
      const gj = url ? await fetchJsonSafe(url) : null;
      if (!gj || gj.type !== 'FeatureCollection') return 'missing';
      L.geoJSON(gj, {
        pointToLayer: (f, latlng) => L.circleMarker(latlng, makeStyle(f))
      }).addTo(group);
      return 'ok';
    }

    const windState  = await buildPoints(manifest.files.wind_sites,  AMA.groups.wind,  () => ({ radius:6, color:'#2563eb', fillOpacity:.6 }));
    const solarState = await buildPoints(manifest.files.solar_sites, AMA.groups.solar, () => ({ radius:5, color:'#f59e0b', fillOpacity:.6 }));
    const damsState  = await buildPoints(manifest.files.dams,       AMA.groups.dams,  () => ({ radius:5, color:'#0ea5e9', fillOpacity:.6 }));

    dbg('OVERLAYS', { wind:windState, solar:solarState, dams:damsState });

    // 5) Wire checkboxes
    function bindToggle(id, group){
      const el = document.querySelector(id);
      if (!el) return;
      el.addEventListener('change', () => {
        if (el.checked) group.addTo(map); else map.removeLayer(group);
      }, { passive:true });
    }
    bindToggle('#chk-wind-sites',  AMA.groups.wind);
    bindToggle('#chk-solar-sites', AMA.groups.solar);
    bindToggle('#chk-dam-sites',   AMA.groups.dams);

    // Start with all off (UI decides)
    // (بگذارید کاربر خودش تیک بزند؛ تغییر اولیه نمی‌دهیم)

    dbg('bootstrap done');
  }

  if (document.readyState === 'loading')
    document.addEventListener('DOMContentLoaded', ama_bootstrap, { once:true });
  else
    ama_bootstrap();
})();
