import { readFile, writeFile, mkdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function stripBOM(s = '') {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

function toEnDigits(s = '') {
  return s
    .replace(/[\u06F0-\u06F9]/g, d => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0) - 0x0660))
    .replace(/\u066B/g, '.')
    .replace(/[\u060C\u066C]/g, '')
    .replace(/\s+/g, ' ');
}

function normalizeFa(s = '') {
  return s
    .replace(/\u200c/g, ' ')
    .replace(/[يى]/g, 'ی')
    .replace(/[كﮎﮏﮐﮑ]/g, 'ک')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseNum(s) {
  if (s == null) return null;
  const t = toEnDigits(String(s)).replace(/[,\s]/g, '');
  if (t === '') return null;
  const n = Number(t);
  return Number.isNaN(n) ? null : n;
}

function parseClasses(text = '', defaultN = 0) {
  const res = { c1: 0, c2: 0, c3: 0 };
  if (!text) return res;
  const clean = normalizeFa(toEnDigits(text.replace(/<br\s*\/?>/gi, '\n')));
  const parts = clean.split(/\n|,|؛/).map(p => p.trim()).filter(Boolean);
  for (const part of parts) {
    let m = part.match(/(\d+)\s*سایت\s*کلاس\s*(\d)/);
    if (m) {
      const cnt = Number(m[1]);
      const cls = Number(m[2]);
      if (cls >= 1 && cls <= 3) res[`c${cls}`] += cnt;
      continue;
    }
    m = part.match(/کلاس\s*(\d)/);
    if (m) {
      const cls = Number(m[1]);
      const cnt = defaultN || 0;
      if (cls >= 1 && cls <= 3) res[`c${cls}`] += cnt;
    }
  }
  return res;
}

function csvParse(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
    } else {
      if (ch === '"') {
        inQuotes = true;
      } else if (ch === ',') {
        row.push(field);
        field = '';
      } else if (ch === '\n') {
        row.push(field);
        rows.push(row);
        row = [];
        field = '';
      } else if (ch === '\r') {
        // ignore
      } else {
        field += ch;
      }
    }
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  const headers = rows.shift() || [];
  return { headers, rows };
}

function findIndex(headers, aliases) {
  const normHeaders = headers.map(h => normalizeFa(h).replace(/\s+/g, '').toLowerCase());
  for (const alias of aliases) {
    const normAlias = normalizeFa(alias).replace(/\s+/g, '').toLowerCase();
    const idx = normHeaders.indexOf(normAlias);
    if (idx !== -1) return idx;
  }
  return -1;
}

async function main() {
  const tablePath = path.join(root, 'data', 'table8_counties.csv');
  const rawPath = path.join(root, 'data', 'wind_sites_raw.csv');
  const t8Text = stripBOM(await readFile(tablePath, 'utf8'));
  const rawText = stripBOM(await readFile(rawPath, 'utf8'));

  const t8 = csvParse(t8Text);
  const raw = csvParse(rawText);

  const aliases = {
    county: ['county', 'شهرستان', 'name_fa', 'name_std'],
    n_sites: ['n_sites', 'تعداد سایت', 'تعدادسایت'],
    area_ha: ['site_area_ha', 'مساحت سایت (هکتار)', 'مساحت سایت', 'مساحت(هکتار)'],
    cap_mw: ['capacity_mw', 'ظرفیت تخمینی انرژی بادی (مگاوات)', 'ظرفیت (مگاوات)', 'ظرفیت'],
    classes: ['کلاس بادی', 'classes', 'ترکیب کلاس']
  };

  const idx = {
    county: findIndex(t8.headers, aliases.county),
    n_sites: findIndex(t8.headers, aliases.n_sites),
    area_ha: findIndex(t8.headers, aliases.area_ha),
    cap_mw: findIndex(t8.headers, aliases.cap_mw),
    classes: findIndex(t8.headers, aliases.classes)
  };

  const idxRawCounty = findIndex(raw.headers, aliases.county);
  const countSitesByCounty = {};
  if (idxRawCounty >= 0) {
    for (const r of raw.rows) {
      const c = normalizeFa(r[idxRawCounty] || '');
      if (!c) continue;
      countSitesByCounty[c] = (countSitesByCounty[c] || 0) + 1;
    }
  }

  const rows = [];
  for (const cols of t8.rows) {
    if (!cols || cols.every(c => !c || String(c).trim() === '')) continue;
    const county = normalizeFa(cols[idx.county] || '');
    if (!county) continue;
    const nSitesRaw = idx.n_sites >= 0 ? parseNum(cols[idx.n_sites]) : null;
    const cls = parseClasses(idx.classes >= 0 ? cols[idx.classes] : '', nSitesRaw || 0);
    let n_sites = nSitesRaw != null ? Math.round(nSitesRaw) : cls.c1 + cls.c2 + cls.c3;
    if (!n_sites) n_sites = 0;
    const site_area_ha = idx.area_ha >= 0 ? parseNum(cols[idx.area_ha]) : null;
    const capacity_mw = idx.cap_mw >= 0 ? parseNum(cols[idx.cap_mw]) : null;
    const suitability_avg = n_sites > 0 ? (cls.c1 * 1 + cls.c2 * 0.8 + cls.c3 * 0.6) / n_sites : 0;
    const cap_per_site = capacity_mw != null && n_sites > 0 ? capacity_mw / n_sites : null;
    const mw_per_ha = capacity_mw != null && site_area_ha ? capacity_mw / site_area_ha : null;
    rows.push({
      county,
      n_sites,
      class1: cls.c1,
      class2: cls.c2,
      class3: cls.c3,
      site_area_ha,
      capacity_mw,
      cap_per_site,
      mw_per_ha,
      suitability_avg
    });
  }

  if (rows.length === 0) throw new Error('No rows parsed from table8_counties.csv');

  let emptyCount = 0;
  for (const r of rows) {
    const rawCount = countSitesByCounty[r.county] || 0;
    if (Math.abs(rawCount - r.n_sites) > 1) {
      console.warn(`WARN ${r.county}: table8=${r.n_sites} raw=${rawCount}`);
    }
    if (r.n_sites === 0 && r.capacity_mw == null) emptyCount++;
  }
  if (emptyCount / rows.length > 0.8) {
    throw new Error('Header aliasing failed; check input headers/encoding.');
  }

  const capVals = rows.map(r => r.capacity_mw).filter(v => v != null);
  const capMin = capVals.length ? Math.min(...capVals) : 0;
  const capMax = capVals.length ? Math.max(...capVals) : 0;
  const capRange = capMax - capMin;

  const mwhaVals = rows.map(r => r.mw_per_ha).filter(v => v != null);
  const mwhaMin = mwhaVals.length ? Math.min(...mwhaVals) : 0;
  const mwhaMax = mwhaVals.length ? Math.max(...mwhaVals) : 0;
  const mwhaRange = mwhaMax - mwhaMin;

  for (const r of rows) {
    r.cap_norm = r.capacity_mw != null && capRange > 0 ? (r.capacity_mw - capMin) / capRange : 0;
    r.mwha_norm = r.mw_per_ha != null && mwhaRange > 0 ? (r.mw_per_ha - mwhaMin) / mwhaRange : 0;
    r.w_avg = 0.6 * (r.cap_norm || 0) + 0.3 * (r.suitability_avg || 0) + 0.1 * (r.mwha_norm || 0);
    r.sum_w = r.w_avg * r.n_sites;
  }

  if (capVals.length && rows.every(r => r.w_avg === 0)) {
    throw new Error('Normalization failed; check Persian digit/decimal parsing.');
  }

  const checks = {
    'خواف': { w_avg: 0.8842, sum_w: 8.8420, n_sites: 10 },
    'زیرنجفام': { w_avg: 0.7315, sum_w: 2.9260, n_sites: 4 },
    'تایباد': { w_avg: 0.4492, sum_w: 1.3475, n_sites: 3 },
    'مشهد': { w_avg: 0.4211, sum_w: 0.4211, n_sites: 1 },
    'زاوه': { w_avg: 0.2400, sum_w: 0.4800, n_sites: 2 }
  };
  for (const [name, exp] of Object.entries(checks)) {
    const r = rows.find(rr => rr.county === normalizeFa(name));
    if (!r) continue;
    const wDiff = Math.abs(r.w_avg - exp.w_avg);
    const sDiff = Math.abs(r.sum_w - exp.sum_w);
    if (r.n_sites !== exp.n_sites || wDiff > 0.05 || sDiff > 0.05) {
      throw new Error(`Regression failed for ${name}: expected n_sites=${exp.n_sites}, w_avg≈${exp.w_avg}, sum_w≈${exp.sum_w}; got n_sites=${r.n_sites}, w_avg=${r.w_avg.toFixed(4)}, sum_w=${r.sum_w.toFixed(4)}`);
    } else if (wDiff > 0.02 || sDiff > 0.02) {
      console.warn(`WARN regression drift for ${name}: w_avg diff=${wDiff.toFixed(4)}, sum_w diff=${sDiff.toFixed(4)}`);
    }
  }

  const outDir = path.join(root, 'docs', 'amaayesh', 'data');
  await mkdir(outDir, { recursive: true });

  const fmtInt = n => (n == null ? '' : String(Math.round(n)));
  const fmt4 = n => (n == null ? '' : (Math.round(n * 1e4) / 1e4).toFixed(4));

  const header = 'county,n_sites,class1,class2,class3,site_area_ha,capacity_mw,cap_per_site,mw_per_ha,suitability_avg,cap_norm,mwha_norm,w_avg,sum_w';
  const lines = [header];
  for (const r of rows) {
    lines.push([
      r.county,
      fmtInt(r.n_sites),
      fmtInt(r.class1),
      fmtInt(r.class2),
      fmtInt(r.class3),
      fmt4(r.site_area_ha),
      fmt4(r.capacity_mw),
      fmt4(r.cap_per_site),
      fmt4(r.mw_per_ha),
      fmt4(r.suitability_avg),
      fmt4(r.cap_norm),
      fmt4(r.mwha_norm),
      fmt4(r.w_avg),
      fmt4(r.sum_w)
    ].join(','));
  }
  lines.push('');

  await writeFile(path.join(outDir, 'wind_weights_by_county.csv'), lines.join('\n'), 'utf8');
  await copyFile(rawPath, path.join(outDir, 'wind_sites_raw.csv'));

  console.log(`wind_weights_by_county.csv: ${rows.length} rows ✓  | with weights: ${rows.filter(r => r.w_avg > 0).length} rows`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

