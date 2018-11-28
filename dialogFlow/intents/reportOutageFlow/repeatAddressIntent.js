const {addressGivenContext} = require('../../contexts/outageContexts.js');
const trainingPhrases = require('../../trainingPhrases.js');

const addressParameter = {
    name: "7707442b-ee35-478c-ade6-0cb469027722",
    displayName: "address",
    value: "$address",
    entityTypeDisplayName: "@sys.address",
    mandatory: true,
    prompts: [
        "Ok, lets try that again. What's your address?"
    ]
};

const message = {
    text: {
        text: [
            "I have your address as $address. Is that correct?",
        ]
    }
};

const intent = {
    displayName: "repeat_address",
    trainingPhrases: trainingPhrases.no,
    messages: [message],
    parameters: [addressParameter],
    inputContextNames: [addressGivenContext.name],
    outputContexts: [addressGivenContext]
};

module.exports = {
    dialogFlowIntent: intent
};