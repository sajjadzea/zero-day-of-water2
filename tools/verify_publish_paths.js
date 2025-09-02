const paths = [
  '/amaayesh/layers.config.json',
  '/data/amaayesh/counties.geojson',
  '/data/amaayesh/wind_sites.geojson'
];

const base = process.env.VERIFY_BASE || 'http://localhost:8888';

async function check(url){
  const full = base.replace(/\/$/, '') + url;
  try{
    const res = await fetch(full, { method:'HEAD' });
    return { url: full, status: res.status, ok: res.ok };
  }catch(e){
    return { url: full, status: 'ERR', ok: false };
  }
}

(async () => {
  const rows = [];
  for(const p of paths){ rows.push(await check(p)); }
  console.table(rows);
})();
