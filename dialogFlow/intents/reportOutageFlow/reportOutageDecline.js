const {outageContext} = require('../../contexts/outageContexts.js');
const trainingPhrases = require('../../trainingPhrases.js');

const message = {
    text: {
        text: [
            "Ok, anything else?"
        ]
    }
};

const intent = {
    displayName: "report_outage_decline",
    trainingPhrases: trainingPhrases.no,
    messages: [message],
    inputContextNames: [outageContext.name]
};

module.exports = {
    dialogFlowIntent: intent
};

