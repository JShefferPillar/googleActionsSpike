const {addressGivenContext} = require('../../contexts/outageContexts.js');

const trainingText = [
    "no",
    "no thanks",
    "stop"
];

const uuids = [
    "2f4116e6-4ec4-44e9-88c6-100bb9889590",
    "c727f0e8-f116-4e0c-8f39-abd3a1bfa08e",
    "94d6294e-b1d0-4308-964b-32db9074b18a"
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
    trainingPhrases: trainingPhrases,
    messages: [message],
    parameters: [addressParameter],
    inputContextNames: [addressGivenContext.name],
    outputContexts: [addressGivenContext]
};

module.exports = {
    dialogFlowIntent: intent
};