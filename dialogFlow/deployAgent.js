const {reset, createIntents, createContexts} = require('./dialogFlowFunctions.js');
const energyTipsIntent = require('./intents/energyTipsIntent.js');
const reportOutageIntent = require('./intents/reportOutageFlow/reportOutageIntent.js');
const outageContexts = require('./contexts/outageContexts.js');

const projectId = 'pillar-voice';
const projectPath = `projects/${projectId}`;

const emptyAgentFilename = "./empty-agent.zip";

const allIntents = [
    energyTipsIntent,
    reportOutageIntent
];

const allContexts = [
    outageContexts.outageContext,
    outageContexts.addressGivenContext
];

console.log(`Preparing to nuke agent ${projectPath}`);

reset(projectPath, emptyAgentFilename).then(() => {
    console.log(`💥 💥  ${projectPath} successfully nuked from ${emptyAgentFilename}`);
    console.log('Preparing to create contexts');
    return createContexts(projectId, "some-session-id", allContexts)
}).then(() => {
    console.log('🐙  All contexts created successfully');
    console.log('Preparing to create intents');
    return createIntents(projectId, allIntents)
}).then(() => {
    console.log("🎉 🎉  SUCCESS: successfully deployed everything")
}).catch((err) => {
    console.log("🚨  Finished with errors:");
    console.error(err)
});
