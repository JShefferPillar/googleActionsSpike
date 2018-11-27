const {outageContext} = require('../../contexts/outageContexts.js');

const trainingText = [
    "no",
    "no thanks",
    "stop"
];

const uuids = [
    "ac7e44fd-ae13-4308-bc78-9261d59a819d",
    "97b00714-93bd-493e-99e6-1f636e1ea7ca",
    "f65c2835-5cd2-4cd0-897a-f5c4a84c4f61"
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
            "Ok, anything else?"
        ]
    }
};

const intent = {
    displayName: "report_outage_decline",
    trainingPhrases: trainingPhrases,
    messages: [message],
    inputContextNames: [outageContext.name]
};

module.exports = {
    dialogFlowIntent: intent
};

