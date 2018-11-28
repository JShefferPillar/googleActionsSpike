const {addressGivenContext} = require('../../contexts/outageContexts.js');
const trainingPhrases = require('../../trainingPhrases.js');

const addressParameter = {
    name: "fbdd3636-dcd4-449e-933e-9d61008f3556",
    displayName: "address",
    value: "#address-given-context.address",
    entityTypeDisplayName: "@sys.address"
};

const intent = {
    displayName: "final_confirm",
    trainingPhrases: trainingPhrases.yes,
    parameters: [addressParameter],
    inputContextNames: [addressGivenContext.name],
    webhookState: "WEBHOOK_STATE_ENABLED"
};

module.exports = {
    dialogFlowIntent: intent
};