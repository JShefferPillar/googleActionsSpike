const dialogflow = require('dialogflow');

const projectId = 'pillar-voice';

const intentsClient = new dialogflow.IntentsClient();

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
        text: "tips plz"
    }]
};

const message = {
    text: {
        text: [
            "don't use so much power",
            "unplug some stuff for a bit"
        ]
    }
};

const intentToCreate = {
    displayName: "energy tips",
    trainingPhrases: [
        trainingPhrase1,
        trainingPhrase2
    ],
    messages: [message]
};

const createIntentRequest = {
    parent: intentsClient.projectAgentPath(projectId),
    intent: intentToCreate,
};
console.log("😱");
console.log(createIntentRequest);
intentsClient.createIntent(createIntentRequest).then(responses => {
    console.log(`Intent ${responses[0].name} created`);
})
.catch(err => {
    console.error('ERROR:', err);
});
