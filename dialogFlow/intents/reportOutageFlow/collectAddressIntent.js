const {outageContext, addressGivenContext} = require('../../contexts/outageContexts.js');
const finalConfirmIntent = require('./finalConfirmIntent');
const repeatAddressIntent = require('./repeatAddressIntent');

const trainingText = [
    "yeah",
    "yes",
    "ok",
    "correct",
    "sure",
    "okay",
    "sounds correct",
    "that works",
    "yep that\u0027s ok",
    "yes that\u0027s alright",
    "I think so",
    "sg",
    "yes I agree",
    "I don\u0027t mind",
    "I agree",
    "yes I do",
    "for sure",
    "ok",
    "yes that\u0027t ok",
    "that one works",
    "yes you can do it",
    "perfect",
    "yes",
    "why not",
    "of course",
    "yep that\u0027s right",
    "okay I will",
    "exactly",
    "sure why not",
    "absolutely",
    "it\u0027s okay",
    "it\u0027s fine",
    "go ahead",
    "confirm",
    "sounds good",
    "alright",
    "yeah",
    "yup",
    "yes please",
    "do it",
    "yes I can",
    "it looks perfect",
    "that\u0027s correct",
    "right",
    "alright why not",
    "yep"
];

const uuids = [
    "2caf7bfa-1506-4279-a921-38120c19e01",
    "2caf7bfa-1506-4279-a921-38120c19e02",
    "2caf7bfa-1506-4279-a921-38120c19e03",
    "2caf7bfa-1506-4279-a921-38120c19e04",
    "2caf7bfa-1506-4279-a921-38120c19e05",
    "2caf7bfa-1506-4279-a921-38120c19e06",
    "2caf7bfa-1506-4279-a921-38120c19e07",
    "2caf7bfa-1506-4279-a921-38120c19e08",
    "2caf7bfa-1506-4279-a921-38120c19e09",
    "2caf7bfa-1506-4279-a921-38120c19e10",
    "2caf7bfa-1506-4279-a921-38120c19e11",
    "2caf7bfa-1506-4279-a921-38120c19e12",
    "2caf7bfa-1506-4279-a921-38120c19e13",
    "2caf7bfa-1506-4279-a921-38120c19e14",
    "2caf7bfa-1506-4279-a921-38120c19e15",
    "2caf7bfa-1506-4279-a921-38120c19e16",
    "2caf7bfa-1506-4279-a921-38120c19e17",
    "2caf7bfa-1506-4279-a921-38120c19e18",
    "2caf7bfa-1506-4279-a921-38120c19e19",
    "2caf7bfa-1506-4279-a921-38120c19e20",
    "2caf7bfa-1506-4279-a921-38120c19e21",
    "2caf7bfa-1506-4279-a921-38120c19e22",
    "2caf7bfa-1506-4279-a921-38120c19e23",
    "2caf7bfa-1506-4279-a921-38120c19e24",
    "2caf7bfa-1506-4279-a921-38120c19e25",
    "2caf7bfa-1506-4279-a921-38120c19e26",
    "2caf7bfa-1506-4279-a921-38120c19e27",
    "2caf7bfa-1506-4279-a921-38120c19e28",
    "2caf7bfa-1506-4279-a921-38120c19e29",
    "2caf7bfa-1506-4279-a921-38120c19e30",
    "2caf7bfa-1506-4279-a921-38120c19e31",
    "2caf7bfa-1506-4279-a921-38120c19e32",
    "2caf7bfa-1506-4279-a921-38120c19e33",
    "2caf7bfa-1506-4279-a921-38120c19e34",
    "2caf7bfa-1506-4279-a921-38120c19e35",
    "2caf7bfa-1506-4279-a921-38120c19e36",
    "2caf7bfa-1506-4279-a921-38120c19e37",
    "2caf7bfa-1506-4279-a921-38120c19e38",
    "2caf7bfa-1506-4279-a921-38120c19e39",
    "2caf7bfa-1506-4279-a921-38120c19e40",
    "2caf7bfa-1506-4279-a921-38120c19e41",
    "2caf7bfa-1506-4279-a921-38120c19e42",
    "2caf7bfa-1506-4279-a921-38120c19e43",
    "2caf7bfa-1506-4279-a921-38120c19e44",
    "2caf7bfa-1506-4279-a921-38120c19e45"
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