const http = require('http');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');
const assert = require('assert');

function serveDocs(){
  const root = path.join(__dirname, '..', 'docs');
  const server = http.createServer((req,res)=>{
    const urlPath = req.url.split('?')[0];
    let filePath = path.join(root, urlPath);
    if (filePath.endsWith('/')) filePath = path.join(filePath, 'index.html');
    fs.readFile(filePath, (err,data)=>{
      if(err){ res.statusCode = 404; res.end('not found'); } else { res.end(data); }
    });
  });
  return new Promise(resolve=>{ server.listen(0, ()=> resolve(server)); });
}

(async () => {
  const server = await serveDocs();
  const port = server.address().port;
  const browser = await puppeteer.launch({args:['--no-sandbox'], headless:'new'});
  const page = await browser.newPage();
  await page.goto(`http://localhost:${port}/test/water-cld.html`, { waitUntil: 'networkidle2' });
  await page.waitForFunction(() => window.__WATER_CLD_READY__, { timeout: 15000 });
  await page.evaluate(() => window.__WATER_CLD_READY__);
  const n = await page.evaluate(() => (window.cy && window.cy.nodes().length) || 0);
  assert(n > 0);
  await browser.close();
  server.close();
  console.log('e2e-cld.test passed');
})();
