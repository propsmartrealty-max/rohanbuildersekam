#!/usr/bin/env node

/**
 * Automated IndexNow Search Engine Dispatcher
 * Submits all sitemap URLs directly to IndexNow (Bing, Yandex, Seznam, Naver & Google partner networks)
 * Key: 89ee1144bc371c5c322b749de98dd2b5
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function submitIndexNow() {
  const sitemapPath = path.resolve(__dirname, '../public/sitemap.xml');
  const sitemapXml = fs.readFileSync(sitemapPath, 'utf8');

  // Extract all <loc> URLs
  const urlMatches = sitemapXml.match(/<loc>(https:\/\/[^<]+)<\/loc>/g);
  if (!urlMatches || urlMatches.length === 0) {
    console.error('No URLs found in sitemap.xml');
    process.exit(1);
  }

  const urlList = urlMatches.map(m => m.replace(/<\/?loc>/g, '').trim());
  console.log(`Extracted ${urlList.length} canonical URLs for IndexNow submission:`);
  urlList.forEach((u, i) => console.log(` [${i + 1}] ${u}`));

  const payload = {
    host: 'rohanbuildersekam.com',
    key: '89ee1144bc371c5c322b749de98dd2b5',
    keyLocation: 'https://rohanbuildersekam.com/89ee1144bc371c5c322b749de98dd2b5.txt',
    urlList: urlList
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow'
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\nDispatching to ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(payload)
      });

      console.log(`Status from ${endpoint}: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`Successfully dispatched ${urlList.length} URLs to ${endpoint}!`);
      } else {
        const text = await response.text();
        console.warn(`Response: ${text}`);
      }
    } catch (err) {
      console.error(`Error pinging ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow().catch(err => {
  console.error('IndexNow Dispatch Error:', err);
  process.exit(1);
});
