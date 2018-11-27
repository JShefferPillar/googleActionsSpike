const {outageContext, addressGivenContext} = require('../../contexts/outageContexts.js');
const finalConfirmIntent = require('./finalConfirmIntent');
const repeatAddressIntent = require('./repeatAddressIntent');

const trainingText = [
    "yeah",
    "yes",
    "ok",
    "correct"
];

const uuids = [
    "a5a1b2ad-e681-4cfb-9d76-b5f1ac257e89",
    "53ef38eb-6a50-4714-a37b-0e6ddb557301",
    "7441efb6-a236-4507-8870-f64f8364579c",
    "3368c15c-39ef-46c1-b573-bc0d611e0bd4"
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
    trainingPhrases: trainingPhrases,
    messages: [message],
    parameters: [addressParameter],
    inputContextNames: [outageContext.name],
    outputContexts: [addressGivenContext]
};

module.exports = {
    dialogFlowIntent: intent,
    followupIntents: [finalConfirmIntent, repeatAddressIntent]
};