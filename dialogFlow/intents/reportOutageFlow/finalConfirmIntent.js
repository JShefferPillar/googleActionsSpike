const {addressGivenContext} = require('../../contexts/outageContexts.js');

const trainingText = [
    "yeah",
    "yes",
    "ok",
    "correct"
];

const uuids = [
    "58f58699-a5f1-4dfe-a3b2-a0a8b60814ee",
    "7993d2e8-7a9c-4849-940e-540a2c452b2e",
    "0c8c334d-9bae-4b16-9344-0f47c3e6fe12",
    "d34f7bfa-1506-4279-a921-38120c19e0a8"
];

const trainingPhrases = trainingText.map( (text, index) => {
    return {
        name: uuids[index],
        type: "TEMPLATE",
        parts: [{
            text
        }]
    }
});

const addressParameter = {
    name: "fbdd3636-dcd4-449e-933e-9d61008f3556",
    displayName: "address",
    value: "#address-given-context.address",
    entityTypeDisplayName: "@sys.address"
};

const intent = {
    displayName: "final_confirm",
    trainingPhrases: trainingPhrases,
    parameters: [addressParameter],
    inputContextNames: [addressGivenContext.name],
    webhookState: "WEBHOOK_STATE_ENABLED"
};

module.exports = {
    dialogFlowIntent: intent
};