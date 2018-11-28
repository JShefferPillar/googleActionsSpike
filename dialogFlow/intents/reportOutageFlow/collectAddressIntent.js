const {outageContext, addressGivenContext} = require('../../contexts/outageContexts.js');
const finalConfirmIntent = require('./finalConfirmIntent');
const repeatAddressIntent = require('./repeatAddressIntent');
const trainingPhrases = require('../../trainingPhrases.js');

const addressParameter = {
    name: "2c8d5d2f-50b7-4999-b1bb-75d9ebc8e83b",
    displayName: "address",
    value: "$address",
    entityTypeDisplayName: "@sys.address",
    mandatory: true,
    prompts: [
        "What address do you want to report an outage for?",
        "What is the address of the outage?"
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
    displayName: "collect_address",
    trainingPhrases: trainingPhrases.yes,
    messages: [message],
    parameters: [addressParameter],
    inputContextNames: [outageContext.name],
    outputContexts: [addressGivenContext]
};

module.exports = {
    dialogFlowIntent: intent,
    followupIntents: [finalConfirmIntent, repeatAddressIntent]
};