const {AgentsClient, IntentsClient} = require('dialogflow');
const fs = require('fs');

const agentClient = new AgentsClient();
const intentsClient = new IntentsClient();

function readZipFile(emptyAgentFilename) {
    return new Promise( (resolve, reject) => {
        fs.readFile(emptyAgentFilename, 'base64', (err, data) => {
            if (data) {
                resolve(data)
            } else {
                console.error(`🚨  ERROR: there was an error reading ${emptyAgentFilename}`);
                reject(err);
            }
        })
    })
}

function resetAgent(projectPath, emptyAgentFilename) {
    return readZipFile(emptyAgentFilename).then((data) => {
        const restoreAgentRequest = {
            parent: projectPath,
            agentContent: data
        };

        return agentClient.restoreAgent(restoreAgentRequest)
    });
}

function createIntent(projectId, intent) {
    const createIntentRequest = {
        parent: intentsClient.projectAgentPath(projectId),
        intent: intent.dialogFlowIntent,
    };

    return intentsClient.createIntent(createIntentRequest).then(responses => {
        console.log(`👍  Intent ${responses[0].displayName} created, with parent ${responses[0].parentFollowupIntentName || "none"}`);

        if (intent.followupIntents) {
            const intentName = responses[0].name;

            const followUpIntents = intent.followupIntents.map((followup) => {
                return {
                    dialogFlowIntent: {...followup.dialogFlowIntent, ...{parentFollowupIntentName: intentName} },
                    followupIntents: followup.followupIntents
                }
            });

            return createIntents(projectId, followUpIntents)
        }
    })
}

function createIntents(projectId, intents) {
    return Promise.all(intents.map(intent => {
        return createIntent(projectId, intent)
    }))
}

module.exports = {
    reset: resetAgent,
    createIntents
};