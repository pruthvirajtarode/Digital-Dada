const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Find <section ref={containerRef} className="... h-[XXXvh] ...">
  const sectionRegex = /<section\s+ref=\{containerRef\}\s+className="([^"]*h-\[(\d+)vh\][^"]*)"/g;
  
  content = content.replace(sectionRegex, (match, className, vh) => {
    changed = true;
    console.log(`Fixing ${filePath} with height ${vh}vh`);
    return `<section ref={containerRef} style={{ minHeight: "${vh}vh" }} className="${className}"`;
  });

  if (changed) {
    fs.writeFileSync(filePath, content);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    let fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  });
}

walkDir(path.join(__dirname, 'components'));
