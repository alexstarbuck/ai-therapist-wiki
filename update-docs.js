// update-docs.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SOURCE_DIR = path.join(process.env.HOME, 'Documents/cicely_ak/zeraxo/gajger/docs');
const DEST_DIR = path.join(__dirname, 'docs');

function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.md')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

function copyMarkdownFiles() {
  if (!fs.existsSync(SOURCE_DIR)) throw new Error('❌ Source directory does not exist.');
  if (!fs.existsSync(DEST_DIR)) fs.mkdirSync(DEST_DIR, { recursive: true });

  const srcFiles = getAllMarkdownFiles(SOURCE_DIR);

  // Clean DEST_DIR first
  fs.rmSync(DEST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DEST_DIR, { recursive: true });

  for (const srcPath of srcFiles) {
    const relPath = path.relative(SOURCE_DIR, srcPath);
    const destPath = path.join(DEST_DIR, relPath);
    const destFolder = path.dirname(destPath);
    fs.mkdirSync(destFolder, { recursive: true });
    fs.copyFileSync(srcPath, destPath);
  }
}

function rewriteLinks() {
  const mdFiles = getAllMarkdownFiles(DEST_DIR);
  const attachmentRegex = /\[([^\]]+)\]\(([^)]+\.(?:png|jpe?g|pdf))\)/gi;

  for (const file of mdFiles) {
    let content = fs.readFileSync(file, 'utf-8');

    // Fix double slashes in "Back to MoC" style links
    content = content.replace(/\]\(\/docs\/\/+\)/g, '](/docs/)');

    // Comment out attachment links (e.g., .png, .jpg, .jpeg, .pdf)
    content = content.replace(attachmentRegex, (_match) => `<!-- ${_match} -->`);

    fs.writeFileSync(file, content, 'utf-8');
  }
}

function buildDocusaurus() {
  console.log('🛠️  Building Docusaurus site...');
  execSync('npm run build', { stdio: 'inherit' });
}

function main() {
  console.log('🔍 Reading slugs...');
  console.log('📁 Copying markdown files...');
  copyMarkdownFiles();

  console.log('✏️ Rewriting internal links...');
  rewriteLinks();

  buildDocusaurus();
}

main();

