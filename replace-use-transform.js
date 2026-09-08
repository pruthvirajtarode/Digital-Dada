const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // If the file uses useTransform but doesn't import useSafeTransform yet
  if (content.includes('useTransform') && !content.includes('useSafeTransform')) {
    
    // Add import
    const importRegex = /import\s+{[^}]*}\s+from\s+["']framer-motion["'];?/;
    content = content.replace(importRegex, match => {
      return match + '\nimport { useSafeTransform } from "@/lib/useSafeTransform";';
    });

    // Replace function calls
    content = content.replace(/useTransform\(/g, 'useSafeTransform(');
    
    fs.writeFileSync(filePath, content);
    console.log('Replaced in', filePath);
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
