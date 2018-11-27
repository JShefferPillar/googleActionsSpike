const collectAddressIntent = require('./collectAddressIntent.js');
const reportOutageDecline = require('./reportOutageDecline.js');

const trainingText = [
    "I'd like to report an outage",
    "My power is out",
    "It's dark in my house",
    "power outage",
    "power is out",
    "electricity is out"
];

const uuids = [
    "f497ee62-3c5e-432e-ba42-69349619365b",
    "e5ffd5a1-c8fc-4574-b213-510773817e86",
    "58f13348-4ead-4d7e-beb1-6abce24d2fc4",
    "6e293004-d4f3-45b2-a6e5-50d4bc3b0af9",
    "228d6c45-e0cc-4ee9-b31c-8ccdde009fe1",
    "c8801452-2aab-4a45-a637-6942d21d70ba"
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

const message = {
    text: {
        text: [
            "It sounds like you're trying to report an outage. Would you like to start?",
            "Would you like to report an outage?"
        ]
    }
};

const intent = {
    displayName: "report_outage",
    trainingPhrases: trainingPhrases,
    messages: [message]
};

module.exports = {
    dialogFlowIntent: intent,
    followupIntents: [
        collectAddressIntent,
        reportOutageDecline
    ]
};

