const trainingPhrase1 = {
    name: "3f276794-59de-4483-b3aa-4713a5ebc762",
    type: "TEMPLATE",
    parts: [{
        text: "My energy bill is too high. Help!"
    }]
};

const trainingPhrase2 = {
    name: "02fd5b0a-cbe8-434b-be67-62a3180cf25b",
    type: "TEMPLATE",
    parts: [{
        text: "tips please"
    }]
};

const message = {
    text: {
        text: [
            "don't use so much power",
            "unplug some stuff for a bit",
            "Well if your electricity is running.  Then you better go catch it",
            "Grab some blankets and turn off the heat"
        ]
    }
};

const energyTipsIntent = {
    displayName: "energy_tips",
    trainingPhrases: [
        trainingPhrase1,
        trainingPhrase2
    ],
    messages: [message]
};

module.exports = {
    dialogFlowIntent: energyTipsIntent
};