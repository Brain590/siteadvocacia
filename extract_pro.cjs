const fs = require('fs');
const content = fs.readFileSync('reference_site.html', 'utf8');
// Look for youtube links in various formats and IDs that appear in JSON/Data structures
const patterns = [
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/g,
    /watch\?v=([a-zA-Z0-9_-]{11})/g,
    /youtu\.be\/([a-zA-Z0-9_-]{11})/g,
    /\"([a-zA-Z0-9_-]{11})\"/g // Generic 11 char strings in quotes often used for IDs in JS
];

let allIds = new Set();
patterns.forEach(p => {
    let match;
    while ((match = p.exec(content)) !== null) {
        allIds.add(match[1]);
    }
});

console.log('Found IDs:', Array.from(allIds));
