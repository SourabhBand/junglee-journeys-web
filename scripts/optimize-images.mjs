#!/usr/bin/env node
import { readdir, stat, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const IMAGES_DIR = path.join(ROOT, 'public', 'images');

const HERO_FILES = new Set(['hero.jpg']);
const DESTINATION_PATTERNS = [
  'kanha', 'tadoba', 'ranthambore', 'bandhavgarh', 'pench',
  'satpura', 'corbett', 'kaziranga', 'manas', 'panna', 'gir',
];

// Quality candidates to try when generating WebP. We pick the smallest one
// that's still smaller than the original JPG. Hero gets tighter quality
// since it's the LCP element.
function configFor(filename) {
  if (HERO_FILES.has(filename)) {
    return { maxWidth: 1600, webpQualities: [72, 65, 58], jpgQuality: 72 };
  }
  const lower = filename.toLowerCase();
  if (DESTINATION_PATTERNS.some((p) => lower.includes(p))) {
    return { maxWidth: 1200, webpQualities: [78, 70, 62], jpgQuality: 76 };
  }
  return { maxWidth: 1400, webpQualities: [78, 70, 62], jpgQuality: 76 };
}

function fmtKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function processFile(absPath, filename) {
  const cfg = configFor(filename);
  const ext = path.extname(filename).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') return null;

  const base = filename.slice(0, filename.length - ext.length);
  const webpPath = path.join(path.dirname(absPath), `${base}.webp`);

  const inputBuffer = await readFile(absPath);
  const beforeSize = inputBuffer.length;

  const meta = await sharp(inputBuffer, { failOn: 'none' }).metadata();
  const targetWidth = meta.width && meta.width > cfg.maxWidth ? cfg.maxWidth : meta.width;

  // Generate WebP, trying lower qualities until we beat the original size.
  let webpBuffer = null;
  let webpQuality = null;
  for (const q of cfg.webpQualities) {
    const buf = await sharp(inputBuffer, { failOn: 'none' })
      .rotate()
      .resize({ width: targetWidth, withoutEnlargement: true })
      .webp({ quality: q, effort: 6 })
      .toBuffer();
    if (!webpBuffer || buf.length < webpBuffer.length) {
      webpBuffer = buf;
      webpQuality = q;
    }
    if (buf.length < beforeSize) {
      webpBuffer = buf;
      webpQuality = q;
      break;
    }
  }

  // Always write the WebP (it's the primary asset going forward).
  await writeFile(webpPath, webpBuffer);
  const webpSize = webpBuffer.length;

  // Re-encode JPG only if it produces a smaller file than the original.
  const newJpgBuffer = await sharp(inputBuffer, { failOn: 'none' })
    .rotate()
    .resize({ width: targetWidth, withoutEnlargement: true })
    .jpeg({ quality: cfg.jpgQuality, progressive: true, mozjpeg: true })
    .toBuffer();

  let afterJpgSize = beforeSize;
  if (newJpgBuffer.length < beforeSize) {
    await writeFile(absPath, newJpgBuffer);
    afterJpgSize = newJpgBuffer.length;
  }

  return {
    file: filename,
    before: beforeSize,
    afterJpg: afterJpgSize,
    afterWebp: webpSize,
    width: targetWidth,
    webpQuality,
  };
}

async function main() {
  const entries = await readdir(IMAGES_DIR);
  const results = [];

  for (const entry of entries) {
    const abs = path.join(IMAGES_DIR, entry);
    const s = await stat(abs);
    if (!s.isFile()) continue;
    const ext = path.extname(entry).toLowerCase();
    if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

    try {
      const r = await processFile(abs, entry);
      if (r) results.push(r);
    } catch (err) {
      console.error(`Failed on ${entry}:`, err.message);
    }
  }

  results.sort((a, b) => b.before - a.before);

  console.log('\nImage optimization results:\n');
  console.log(
    'File'.padEnd(38),
    'Width'.padStart(6),
    'Before'.padStart(11),
    'JPG'.padStart(11),
    'WebP'.padStart(11),
    'Q'.padStart(4),
    'Saved'.padStart(8),
  );
  for (const r of results) {
    const saved = (1 - r.afterWebp / r.before) * 100;
    console.log(
      r.file.padEnd(38),
      String(r.width).padStart(6),
      fmtKB(r.before).padStart(11),
      fmtKB(r.afterJpg).padStart(11),
      fmtKB(r.afterWebp).padStart(11),
      String(r.webpQuality).padStart(4),
      `${saved.toFixed(0)}%`.padStart(8),
    );
  }

  const totalBefore = results.reduce((acc, r) => acc + r.before, 0);
  const totalWebp = results.reduce((acc, r) => acc + r.afterWebp, 0);
  console.log(
    '\nTotal:',
    fmtKB(totalBefore),
    '→',
    fmtKB(totalWebp),
    `(${((1 - totalWebp / totalBefore) * 100).toFixed(0)}% smaller)`,
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
