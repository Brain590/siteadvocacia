const fs = require('fs');
const content = fs.readFileSync('reference_site.html', 'utf8');
const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi;
const matches = [...content.matchAll(youtubeRegex)];
const ids = [...new Set(matches.map(m => m[1]))];
console.log(JSON.stringify(ids, null, 2));
