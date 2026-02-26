
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('jobs.json', 'utf8'));
if (data.jobs && data.jobs.length > 0) {
    data.jobs.forEach(job => {
        console.log(`Job: ${job.name}`);
        console.log(`Status: ${job.status}`);
        console.log(`Conclusion: ${job.conclusion}`);
        if (job.steps) {
            job.steps.forEach(step => {
                if (step.conclusion === 'failure') {
                    console.log(`FAILED STEP: ${step.name}`);
                }
            });
        }
    });
} else {
    console.log('No jobs found.');
}
