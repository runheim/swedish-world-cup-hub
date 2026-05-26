const fs = require('fs');
const path = require('path');

const filesToCopy = ['index.html', 'index.css', 'app.js', 'data.js'];
const distFolder = path.join(__dirname, 'dist');

console.log('Starting Swedish World Cup Hub compilation build...');

try {
  // Create dist folder if it doesn't exist
  if (!fs.existsSync(distFolder)) {
    fs.mkdirSync(distFolder, { recursive: true });
    console.log('Created dist/ directory successfully.');
  } else {
    console.log('dist/ directory already exists.');
  }

  // Copy files
  filesToCopy.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(distFolder, file);
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied ${file} -> dist/${file}`);
    } else {
      console.warn(`Warning: Source file ${file} not found!`);
    }
  });

  console.log('Build completed successfully!');
} catch (err) {
  console.error('Build execution failed:', err);
  process.exit(1);
}
