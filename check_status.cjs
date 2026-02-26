
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('runs.json', 'utf8'));
if (data.workflow_runs && data.workflow_runs.length > 0) {
    const latestRun = data.workflow_runs[0];
    console.log('Latest Run Details:');
    console.log('ID:', latestRun.id);
    console.log('Status:', latestRun.status);
    console.log('Conclusion:', latestRun.conclusion);
    console.log('URL:', latestRun.html_url);
} else {
    console.log('No workflow runs found.');
}
