const trainingPhrases = require('../trainingPhrases.js');

const trainingText = [
    "My energy bill is too high. Help!",
    "tips please"
];

const message = {
    text: {
        text: [
            "don't use so much power",
            "unplug some stuff for a bit",
            "Well if your electricity is running.  Then you better go catch it",
            "Grab some blankets and turn off the heat",
            "What should they do to gas guzzlers? Lock them up in a fuel cell.",
            "You can grow your own power plant by planting a. Light Bulb",
            "Kilometers are shorter than miles.  Save gas, take your next trip in kilometers",
            "If you need something done, call an electrician – they conduit.",
            "To save money you can cut all the electricity. You will soon be in the black.",
            "If you turn off all your lights you will be de-lighted.",
            "Consider hibernating through the cold months to save on heat",
            "Many birds migrate seasonally to avoid high heading/cooling bills.",
            "Time travel to 1878"
        ]
    }
};

const energyTipsIntent = {
    displayName: "energy_tips",
    trainingPhrases: trainingPhrases.trainingPhrasesFromStrings(trainingText),
    messages: [message]
};

module.exports = {
    dialogFlowIntent: energyTipsIntent
};
