import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

// Regex to match import statements with image extensions
const importRegex = /from\s+"([^"]*\.(jpg|jpeg|png))"/g;

// Also match string literals for public folder image references (e.g. img: "/sectors/infrastructure.png")
const publicImgRegex = /"(\/sectors\/[^"]*\.(jpg|jpeg|png))"/g;
const publicImgRegex2 = /"(\/sectors\/[^"]*\.(jpg|jpeg|png))"/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Replace import paths
  const newContent = content.replace(importRegex, (match, importPath) => {
    const webpPath = importPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    changed = true;
    return `from "${webpPath}"`;
  });

  // Replace public folder string references
  const newContent2 = newContent.replace(publicImgRegex, (match, imgPath) => {
    const webpPath = imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    changed = true;
    return `"${webpPath}"`;
  });

  if (changed) {
    fs.writeFileSync(filePath, newContent2, 'utf-8');
    console.log(`  ✓ ${path.relative(srcDir, filePath)}`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'assets' && entry.name !== 'assets_original') {
      walkDir(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.jsx') || entry.name.endsWith('.js') || entry.name.endsWith('.tsx'))) {
      processFile(fullPath);
    }
  }
}

console.log('🔄 Updating import paths to .webp...\n');
walkDir(srcDir);
console.log('\n✅ Done!');
