const {ContextsClient} = require('dialogflow');

const contextClient = new ContextsClient();

const projectId = "pillar-voice";
const sessionId = "some-session-id";
const contextId = "outage-context";

const contextPath = contextClient.contextPath(projectId, sessionId, contextId);

module.exports = {
    name: contextPath,
    lifespanCount: 1
};