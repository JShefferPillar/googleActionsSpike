const collectAddressIntent = require('./collectAddressIntent.js');
const reportOutageDecline = require('./reportOutageDecline.js');
const {outageContext} = require('../../contexts/outageContexts.js');
const trainingPhrases = require('../../trainingPhrases.js');

const trainingText = [
    "I'd like to report an outage",
    "My power is out",
    "It's dark in my house",
    "power outage",
    "power is out",
    "electricity is out",
    "I aint got no lights",
    "Powers out",
    "Lights don't work,",
    "Report outage",
    "Report power outage"

];

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
    trainingPhrases: trainingPhrases.trainingPhrasesFromStrings(trainingText),
    messages: [message],
    outputContexts: [outageContext]
};

module.exports = {
    dialogFlowIntent: intent,
    followupIntents: [
        collectAddressIntent,
        reportOutageDecline
    ]
};

