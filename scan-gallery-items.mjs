#!/usr/bin/env node
/**
 * Optional helper: lists relative .html paths for pasting into GALLERY_ITEMS.
 * Usage (from this folder): node scan-gallery-items.mjs
 */
import { readdirSync, statSync } from 'fs';
import { join, relative } from 'path';

const ROOT = process.cwd();
const SKIP = new Set(['index.html']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, out);
    else if (name.endsWith('.html')) {
      const rel = relative(ROOT, full).replace(/\\/g, '/');
      if (!SKIP.has(rel)) out.push(rel);
    }
  }
  return out;
}

const files = walk(ROOT).sort();
console.log('// Paste into GALLERY_ITEMS in index.html:\n');
console.log(
  files.map((f) => `  { file: '${f}', badge: 'Block' },`).join('\n'),
);
