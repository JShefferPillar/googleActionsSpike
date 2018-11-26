const {AgentsClient} = require('dialogflow');
const fs = require('fs');
const {projectPath} = require('./constants.js');

const agentClient = new AgentsClient();

const emptyAgentFilename = "dialogFlow/empty-agent.zip";
console.log(`Preparing to nuke agent ${projectPath}`);

fs.readFile(emptyAgentFilename, 'base64', (err, data) => {

    if (err) {
        console.log(`🚨ERROR: there was an error reading ${emptyAgentFilename}`);
        console.log(err);
        return
    }

    const restoreAgentRequest = {
        parent: projectPath,
        agentContent: data
    };

    agentClient.restoreAgent(restoreAgentRequest).then(() => {
        console.log(`💥 💥  SUCCESS: ${projectPath} successfully restored from ${emptyAgentFilename}`);
    }).catch(err => {
        console.log(`🚨ERROR: there was an error nuking ${projectPath}`);
        console.log(err);
    })
});
