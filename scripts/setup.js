const fs = require('fs');

// Create dist folder if it doesn't exist
if (!fs.existsSync('dist')) fs.mkdirSync('dist');

function handleError(err) {
  if (err) console.log('[scripts/setup.js] Error:', err);
}

// Copy files to dist folder
fs.copyFile('package.json', 'dist/package.json', handleError);
fs.copyFile('README.md', 'dist/README.md', handleError);
