import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, '..', 'src');

// Match <img that doesn't have loading= attribute
function addLazyLoading(content) {
  // Match <img ... /> or <img ... > tags without loading attribute
  return content.replace(/<img\b(?![^>]*\bloading\b)([^>]*)\/?>/g, (match, attrs) => {
    // Don't add lazy to elements with data-no-reveal (hero images visible immediately)
    if (attrs.includes('data-no-reveal')) return match;
    // Add loading="lazy" after <img
    return match.replace('<img', '<img loading="lazy"');
  });
}

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const newContent = addLazyLoading(content);
  if (newContent !== content) {
    fs.writeFileSync(filePath, newContent, 'utf-8');
    const count = (newContent.match(/loading="lazy"/g) || []).length - (content.match(/loading="lazy"/g) || []).length;
    console.log(`  ✓ ${path.relative(srcDir, filePath)} (+${count} lazy images)`);
  }
}

function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules' && entry.name !== 'assets' && entry.name !== 'assets_original') {
      walkDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.jsx')) {
      processFile(fullPath);
    }
  }
}

console.log('🖼️  Adding loading="lazy" to off-screen images...\n');
walkDir(srcDir);
console.log('\n✅ Done!');
