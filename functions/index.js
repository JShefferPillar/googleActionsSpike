const functions = require('firebase-functions');
const {dialogflow} = require('actions-on-google');

const app = dialogflow({debug: true});

app.intent('final_confirm', (conv, {address}) => {
    conv.close(`Thank you, your power has been reported at ${address}.`);
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);