import { readFile, writeFile, mkdir, copyFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

function stripBOM(s = '') {
  return s.charCodeAt(0) === 0xfeff ? s.slice(1) : s;
}

function normalizeHeader(h = '') {
  return h
    .trim()
    .replace(/\u200c/g, ' ')
    .replace(/[يى]/g, 'ی')
    .replace(/[كﮎﮏﮐﮑ]/g, 'ک')
    .replace(/\([^)]*\)/g, '')
    .replace(/[،٬,؛]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

function normalizeFa(s = '') {
  return s
    .replace(/\u200c/g, ' ')
    .replace(/[يى]/g, 'ی')
    .replace(/[كﮎﮏﮐﮑ]/g, 'ک')
    .replace(/\s+/g, ' ')
    .trim();
}

function toEnDigits(s = '') {
  return s
    .replace(/[\u06F0-\u06F9]/g, d => String(d.charCodeAt(0) - 0x06f0))
    .replace(/[\u0660-\u0669]/g, d => String(d.charCodeAt(0) - 0x0660))
    .replace(/\u066B/g, '.')
    .replace(/[\u066C\u060C]/g, '')
    .replace(/\s+/g, '');
}

function parseNum(s) {
  if (s == null) return null;
  const t = toEnDigits(String(s));
  if (t === '') return null;
  const n = Number(t);
  return Number.isNaN(n) ? null : n;
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

function parseClasses(text = '', defaultN = 0) {
  const res = { c1: 0, c2: 0, c3: 0 };
  if (!text) return res;
  const normalized = normalizeFa(text.replace(/<br\s*\/?>/gi, '\n'));
  const parts = normalized.split(/\n|,|؛/).map(p => p.trim()).filter(Boolean);
  for (const part of parts) {
    const clean = toEnDigits(part);
    let m = clean.match(/(\d+)سایتکلاس(\d)/);
    if (m) {
      const cnt = Number(m[1]);
      const cls = Number(m[2]);
      if (cls >= 1 && cls <= 3) res[`c${cls}`] += cnt;
      continue;
    }
    m = clean.match(/کلاس(\d)/);
    if (m) {
      const cls = Number(m[1]);
      if (cls >= 1 && cls <= 3) res[`c${cls}`] += defaultN;
    }
  }
  return res;
}

async function main() {
  const tablePath = path.join(root, 'data', 'table8_counties.csv');
  const rawPath = path.join(root, 'data', 'wind_sites_raw.csv');
  const tText = stripBOM(await readFile(tablePath, 'utf8'));
  const rText = stripBOM(await readFile(rawPath, 'utf8'));

  const t = csvParse(tText);
  const r = csvParse(rText);

  const headerMap = {};
  t.headers.forEach((h, i) => {
    headerMap[normalizeHeader(h)] = i;
  });

  const pickHeader = aliases => {
    for (const a of aliases) {
      const idx = headerMap[normalizeHeader(a)];
      if (idx !== undefined) return idx;
    }
    return -1;
  };

  const idx = {
    county: pickHeader(['دستگاهمقترح', 'شهرستان', 'county']),
    n_sites: pickHeader(['تعدادسایت', 'nsites']),
    area_ha: pickHeader(['مساحتصایت', 'sitearea', 'siteareaha']),
    cap_mw: pickHeader(['ظرفیتهواییبادیمگاوات', 'ظرفیتمگاوات', 'capacitymw', 'capacity']),
    classes: pickHeader(['کلاس بادی', 'کلاسبادی', 'classes', 'classmix'])
  };

  if (idx.county === -1) throw new Error('county header not found');

  const rawHeaderMap = {};
  r.headers.forEach((h, i) => {
    rawHeaderMap[normalizeHeader(h)] = i;
  });
  const rawCountyIdx = rawHeaderMap['county'];
  const countByCounty = {};
  if (rawCountyIdx !== undefined) {
    for (const row of r.rows) {
      const name = normalizeFa(row[rawCountyIdx] || '');
      if (!name) continue;
      countByCounty[name] = (countByCounty[name] || 0) + 1;
    }
  }

  const rows = [];
  for (const cols of t.rows) {
    if (!cols || cols.length === 0) continue;
    const county = normalizeFa(cols[idx.county] || '');
    if (!county) continue;
    if (county === 'مجموع' || county.includes('مجموع')) continue;

    const nSitesRaw = idx.n_sites !== -1 ? parseNum(cols[idx.n_sites]) : null;
    const cls = parseClasses(idx.classes !== -1 ? cols[idx.classes] : '', nSitesRaw || 0);
    const n_sites = nSitesRaw != null ? Math.round(nSitesRaw) : (cls.c1 + cls.c2 + cls.c3);
    const site_area_ha = idx.area_ha !== -1 ? parseNum(cols[idx.area_ha]) : null;
    const capacity_mw = idx.cap_mw !== -1 ? parseNum(cols[idx.cap_mw]) : null;
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
  for (const rRow of rows) {
    const rawCount = countByCounty[rRow.county] || 0;
    if (Math.abs(rawCount - rRow.n_sites) > 1) {
      console.warn(`WARN ${rRow.county}: table8=${rRow.n_sites} raw=${rawCount}`);
    }
    if (rRow.n_sites === 0 && rRow.capacity_mw == null) emptyCount++;
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

  for (const rRow of rows) {
    rRow.cap_norm = rRow.capacity_mw != null && capRange > 0 ? (rRow.capacity_mw - capMin) / capRange : 0;
    rRow.mwha_norm = rRow.mw_per_ha != null && mwhaRange > 0 ? (rRow.mw_per_ha - mwhaMin) / mwhaRange : 0;
    rRow.w_avg = 0.6 * (rRow.cap_norm || 0) + 0.3 * (rRow.suitability_avg || 0) + 0.1 * (rRow.mwha_norm || 0);
    rRow.sum_w = rRow.w_avg * rRow.n_sites;
  }

  if (capVals.length && rows.every(r => r.w_avg === 0)) {
    throw new Error('Normalization failed; check Persian digit/decimal parsing.');
  }

  const regressions = [
    { name: 'خواف', n: 10, w: 0.8842, wTol: 0.02, s: 8.8420, sTol: 0.05 },
    { name: 'زیرنجفام', n: 4, w: 0.7315, wTol: 0.02, s: 2.9260, sTol: 0.05 },
    { name: 'تایباد', n: 3, w: 0.4492, wTol: 0.03, s: 1.3475, sTol: 0.08 },
    { name: 'مشهد', n: 1, w: 0.4211, wTol: 0.03, s: 0.4211, sTol: 0.05 },
    { name: 'زاوه', n: 2, w: 0.2400, wTol: 0.05, s: 0.4800, sTol: 0.10 }
  ];

  for (const chk of regressions) {
    const norm = normalizeFa(chk.name);
    const rRow = rows.find(r => r.county === norm);
    if (!rRow) {
      console.warn(`WARN missing regression county ${chk.name}`);
      continue;
    }
    if (
      rRow.n_sites !== chk.n ||
      Math.abs(rRow.w_avg - chk.w) > chk.wTol ||
      Math.abs(rRow.sum_w - chk.s) > chk.sTol
    ) {
      throw new Error(
        `Regression failed for ${chk.name}: expected n_sites=${chk.n}, w_avg≈${chk.w}, sum_w≈${chk.s}; got n_sites=${rRow.n_sites}, w_avg=${rRow.w_avg.toFixed(4)}, sum_w=${rRow.sum_w.toFixed(4)}`
      );
    }
  }

  const outDir = path.join(root, 'docs', 'amaayesh', 'data');
  await mkdir(outDir, { recursive: true });

  const fmtInt = n => (n == null ? '' : String(Math.round(n)));
  const fmt4 = n => (n == null ? '' : (Math.round(n * 1e4) / 1e4).toFixed(4));

  const header = 'county,n_sites,class1,class2,class3,site_area_ha,capacity_mw,cap_per_site,mw_per_ha,suitability_avg,cap_norm,mwha_norm,w_avg,sum_w';
  const lines = [header];
  for (const rRow of rows) {
    lines.push([
      rRow.county,
      fmtInt(rRow.n_sites),
      fmtInt(rRow.class1),
      fmtInt(rRow.class2),
      fmtInt(rRow.class3),
      fmt4(rRow.site_area_ha),
      fmt4(rRow.capacity_mw),
      fmt4(rRow.cap_per_site),
      fmt4(rRow.mw_per_ha),
      fmt4(rRow.suitability_avg),
      fmt4(rRow.cap_norm),
      fmt4(rRow.mwha_norm),
      fmt4(rRow.w_avg),
      fmt4(rRow.sum_w)
    ].join(','));
  }
  lines.push('');

  await writeFile(path.join(outDir, 'wind_weights_by_county.csv'), lines.join('\n'), 'utf8');
  await copyFile(rawPath, path.join(outDir, 'wind_sites_raw.csv'));

  console.log(
    `wind_weights_by_county.csv: ${rows.length} rows ✓ | with weights>0: ${rows.filter(r => r.w_avg > 0).length}`
  );

  if (process.env.AMA_CI_DEBUG === '1') {
    console.log('headers', idx);
    console.log('sample', rows.slice(0, 2).map(r => ({ county: r.county, n_sites: r.n_sites, capacity_mw: r.capacity_mw })));
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

