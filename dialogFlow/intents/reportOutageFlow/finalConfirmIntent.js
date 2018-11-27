const {addressGivenContext} = require('../../contexts/outageContexts.js');

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
    "d34f7bfa-1506-4279-a921-38120c19e01",
    "d34f7bfa-1506-4279-a921-38120c19e02",
    "d34f7bfa-1506-4279-a921-38120c19e03",
    "d34f7bfa-1506-4279-a921-38120c19e04",
    "d34f7bfa-1506-4279-a921-38120c19e05",
    "d34f7bfa-1506-4279-a921-38120c19e06",
    "d34f7bfa-1506-4279-a921-38120c19e07",
    "d34f7bfa-1506-4279-a921-38120c19e08",
    "d34f7bfa-1506-4279-a921-38120c19e09",
    "d34f7bfa-1506-4279-a921-38120c19e10",
    "d34f7bfa-1506-4279-a921-38120c19e11",
    "d34f7bfa-1506-4279-a921-38120c19e12",
    "d34f7bfa-1506-4279-a921-38120c19e13",
    "d34f7bfa-1506-4279-a921-38120c19e14",
    "d34f7bfa-1506-4279-a921-38120c19e15",
    "d34f7bfa-1506-4279-a921-38120c19e16",
    "d34f7bfa-1506-4279-a921-38120c19e17",
    "d34f7bfa-1506-4279-a921-38120c19e18",
    "d34f7bfa-1506-4279-a921-38120c19e19",
    "d34f7bfa-1506-4279-a921-38120c19e20",
    "d34f7bfa-1506-4279-a921-38120c19e21",
    "d34f7bfa-1506-4279-a921-38120c19e22",
    "d34f7bfa-1506-4279-a921-38120c19e23",
    "d34f7bfa-1506-4279-a921-38120c19e24",
    "d34f7bfa-1506-4279-a921-38120c19e25",
    "d34f7bfa-1506-4279-a921-38120c19e26",
    "d34f7bfa-1506-4279-a921-38120c19e27",
    "d34f7bfa-1506-4279-a921-38120c19e28",
    "d34f7bfa-1506-4279-a921-38120c19e29",
    "d34f7bfa-1506-4279-a921-38120c19e30",
    "d34f7bfa-1506-4279-a921-38120c19e31",
    "d34f7bfa-1506-4279-a921-38120c19e32",
    "d34f7bfa-1506-4279-a921-38120c19e33",
    "d34f7bfa-1506-4279-a921-38120c19e34",
    "d34f7bfa-1506-4279-a921-38120c19e35",
    "d34f7bfa-1506-4279-a921-38120c19e36",
    "d34f7bfa-1506-4279-a921-38120c19e37",
    "d34f7bfa-1506-4279-a921-38120c19e38",
    "d34f7bfa-1506-4279-a921-38120c19e39",
    "d34f7bfa-1506-4279-a921-38120c19e40",
    "d34f7bfa-1506-4279-a921-38120c19e41",
    "d34f7bfa-1506-4279-a921-38120c19e42",
    "d34f7bfa-1506-4279-a921-38120c19e43",
    "d34f7bfa-1506-4279-a921-38120c19e44",
    "d34f7bfa-1506-4279-a921-38120c19e45"

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