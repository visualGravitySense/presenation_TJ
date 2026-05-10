/**
 * Screenshots each entry in index.html → GALLERY_ITEMS into portfolio-previews/{slug}.jpg
 * Keeps slug logic in sync with portfolioPreviewSlug() in index.html
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

function portfolioPreviewSlug(file) {
  return (
    String(file || '')
      .trim()
      .replace(/\.html?$/i, '')
      .replace(/\//g, '__')
      .replace(/[:*?"<>|]/g, '-')
      .replace(/[()]/g, '')
      .replace(/\s+/g, '_')
      .replace(/_+/g, '_')
      .replace(/^_|_$/g, '') || 'preview'
  );
}

function parseGalleryFiles(indexHtml) {
  const files = [];
  const re = /\bfile:\s*'([^']+)'/g;
  let m;
  while ((m = re.exec(indexHtml))) {
    files.push(m[1].trim());
  }
  return [...new Set(files)].filter(Boolean);
}

const settleMs = 2200;

async function main() {
  const indexPath = path.join(ROOT, 'index.html');
  const galleryIndex = fs.readFileSync(indexPath, 'utf8');
  const files = parseGalleryFiles(galleryIndex);
  const outDir = path.join(ROOT, 'portfolio-previews');
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`${files.length} prototype(s) → ${outDir}`);

  const browser = await chromium.launch({ headless: true });
  const opts = [];
  try {
    for (const rel of files) {
      const slug = portfolioPreviewSlug(rel);
      const outFile = path.join(outDir, `${slug}.jpg`);
      const absolute = path.join(ROOT, ...rel.replace(/\\/g, '/').split('/'));

      if (!fs.existsSync(absolute)) {
        console.warn(`skip (missing): ${rel}`);
        continue;
      }

      const page = await browser.newPage({
        viewport: { width: 1280, height: 720 },
        deviceScaleFactor: 1,
      });

      try {
        const url = pathToFileURL(absolute).href;
        await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120_000 });
        await page.evaluate(() => window.scrollTo(0, 0));
        await new Promise((r) => setTimeout(r, settleMs));
        await page.screenshot({
          path: outFile,
          type: 'jpeg',
          quality: 85,
        });
        console.log('ok', slug);
      } catch (err) {
        console.warn(`fail ${rel}:`, err.message || err);
        opts.push({ rel, slug, reason: String(err.message || err) });
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }

  if (opts.length) {
    const report = path.join(outDir, '_generation_errors.json');
    fs.writeFileSync(report, JSON.stringify(opts, null, 2));
    console.warn(`\n${opts.length} error(s); see ${report}`);
    process.exitCode = 1;
  }
}

main();
