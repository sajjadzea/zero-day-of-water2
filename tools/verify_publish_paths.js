const fs = require('fs');
const paths = [
  'docs/amaayesh/layers.config.json',
  'docs/amaayesh/data/counties.geojson',
  'docs/amaayesh/data/wind_sites.geojson',
  'docs/data/amaayesh/khorasan_razavi_combined.geojson'
];

const rows = paths.map(filePath => {
  const exists = fs.existsSync(filePath);
  const size = exists ? fs.statSync(filePath).size : 0;
  const urlExpected = filePath.startsWith('docs/') ? '/' + filePath.slice(5) : '';
  return { filePath, exists, size, urlExpected };
});

console.table(rows);
