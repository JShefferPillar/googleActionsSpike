const {ContextsClient} = require('dialogflow');

const contextClient = new ContextsClient();

const projectId = "pillar-voice";
const sessionId = "some-session-id";

const outageContext = {
    name: contextClient.contextPath(projectId, sessionId, "outage-context"),
    lifespanCount: 1
};

module.exports = {
    outageContext
};