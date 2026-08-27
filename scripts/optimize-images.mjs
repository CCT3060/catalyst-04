import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const QUALITY = 80;
const MAX_WIDTH = 1920;

// Directories to process
const DIRS = [
  { src: './src/assets', backup: './src/assets_original' },
];

// Also process public folder images (but keep them in public)
const PUBLIC_DIRS = [
  './public/sectors',
];

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png'];

async function optimizeFile(filePath, outputPath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!IMAGE_EXTS.includes(ext) && ext !== '.webp') return null;

  const webpPath = outputPath.replace(/\.(jpg|jpeg|png|webp)$/i, '.webp');

  try {
    const metadata = await sharp(filePath).metadata();
    let pipeline = sharp(filePath);

    // Resize if wider than MAX_WIDTH
    if (metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    await pipeline.webp({ quality: QUALITY }).toFile(webpPath);

    const origSize = fs.statSync(filePath).size;
    const newSize = fs.statSync(webpPath).size;
    const saved = ((1 - newSize / origSize) * 100).toFixed(1);
    console.log(`  ✓ ${path.basename(filePath)} → ${path.basename(webpPath)}  (${(origSize/1024/1024).toFixed(2)}MB → ${(newSize/1024/1024).toFixed(2)}MB, -${saved}%)`);
    return { orig: origSize, optimized: newSize };
  } catch (err) {
    console.error(`  ✗ ${path.basename(filePath)}: ${err.message}`);
    return null;
  }
}

async function processAssetsDir(srcDir, backupDir) {
  console.log(`\n📁 Processing: ${srcDir}`);

  // Create backup
  if (backupDir && !fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
  }

  const files = fs.readdirSync(srcDir);
  let totalOrig = 0, totalNew = 0, count = 0;

  for (const file of files) {
    const filePath = path.join(srcDir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Handle subdirectories like certificate/
      const subFiles = fs.readdirSync(filePath);
      const subBackup = backupDir ? path.join(backupDir, file) : null;
      if (subBackup && !fs.existsSync(subBackup)) {
        fs.mkdirSync(subBackup, { recursive: true });
      }

      for (const subFile of subFiles) {
        const subFilePath = path.join(filePath, subFile);
        const subStat = fs.statSync(subFilePath);
        if (subStat.isFile()) {
          const ext = path.extname(subFile).toLowerCase();
          if (IMAGE_EXTS.includes(ext)) {
            // Backup original
            if (subBackup) {
              fs.copyFileSync(subFilePath, path.join(subBackup, subFile));
            }
            // Optimize in place
            const result = await optimizeFile(subFilePath, subFilePath);
            if (result) {
              totalOrig += result.orig;
              totalNew += result.optimized;
              count++;
              // Remove original after webp is created
              const webpName = subFile.replace(/\.(jpg|jpeg|png)$/i, '.webp');
              if (webpName !== subFile && fs.existsSync(path.join(filePath, webpName))) {
                fs.unlinkSync(subFilePath);
              }
            }
          }
        }
      }
      continue;
    }

    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTS.includes(ext)) continue;

    // Backup original
    if (backupDir) {
      fs.copyFileSync(filePath, path.join(backupDir, file));
    }

    // Optimize in place
    const result = await optimizeFile(filePath, filePath);
    if (result) {
      totalOrig += result.orig;
      totalNew += result.optimized;
      count++;
      // Remove original after webp is created
      const webpName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      if (webpName !== file && fs.existsSync(path.join(srcDir, webpName))) {
        fs.unlinkSync(filePath);
      }
    }
  }

  console.log(`\n  📊 ${count} images: ${(totalOrig/1024/1024).toFixed(1)}MB → ${(totalNew/1024/1024).toFixed(1)}MB (-${((1 - totalNew/totalOrig) * 100).toFixed(1)}%)`);
  return { totalOrig, totalNew, count };
}

async function processPublicDir(dir) {
  console.log(`\n📁 Processing public: ${dir}`);

  const files = fs.readdirSync(dir);
  let totalOrig = 0, totalNew = 0, count = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (!stat.isFile()) continue;

    const ext = path.extname(file).toLowerCase();
    if (!IMAGE_EXTS.includes(ext)) continue;

    const result = await optimizeFile(filePath, filePath);
    if (result) {
      totalOrig += result.orig;
      totalNew += result.optimized;
      count++;
      // Remove original after webp is created
      const webpName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      if (webpName !== file && fs.existsSync(path.join(dir, webpName))) {
        fs.unlinkSync(filePath);
      }
    }
  }

  if (count > 0) {
    console.log(`\n  📊 ${count} images: ${(totalOrig/1024/1024).toFixed(1)}MB → ${(totalNew/1024/1024).toFixed(1)}MB (-${((1 - totalNew/totalOrig) * 100).toFixed(1)}%)`);
  }
  return { totalOrig, totalNew, count };
}

async function main() {
  console.log('🚀 Starting image optimization...\n');

  let grandOrig = 0, grandNew = 0, grandCount = 0;

  for (const { src, backup } of DIRS) {
    const r = await processAssetsDir(src, backup);
    grandOrig += r.totalOrig;
    grandNew += r.totalNew;
    grandCount += r.count;
  }

  for (const dir of PUBLIC_DIRS) {
    const r = await processPublicDir(dir);
    grandOrig += r.totalOrig;
    grandNew += r.totalNew;
    grandCount += r.count;
  }

  console.log(`\n${'='.repeat(60)}`);
  console.log(`✅ TOTAL: ${grandCount} images optimized`);
  console.log(`   ${(grandOrig/1024/1024).toFixed(1)}MB → ${(grandNew/1024/1024).toFixed(1)}MB (-${((1 - grandNew/grandOrig) * 100).toFixed(1)}%)`);
  console.log(`${'='.repeat(60)}`);
}

main();
