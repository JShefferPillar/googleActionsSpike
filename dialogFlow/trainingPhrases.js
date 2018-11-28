const uuid = require('uuid/v4');

function trainingPhrasesFromStrings(phrases) {
    return phrases.map( text => {
        return {
            name: uuid(),
            type: "TEMPLATE",
            parts: [{
                text
            }]
        }
    });
}

const yes = trainingPhrasesFromStrings([
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
]);

const no = trainingPhrasesFromStrings([
    "don\u0027t",
    "nope not really",
    "no that\u0027s be all",
    "not right now",
    "thanks but no",
    "not",
    "no we are good",
    "nothing else",
    "not interested",
    "nah I\u0027m good",
    "definitely not",
    "no never",
    "never",
    "nah",
    "nothing",
    "no maybe next time",
    "I don\u0027t want that",
    "no not really",
    "no that\u0027s ok",
    "no no don\u0027t",
    "na",
    "no way no",
    "I can\u0027t",
    "no thanks",
    "not at all",
    "not really",
    "I don\u0027t",
    "no I cannot",
    "no that\u0027s okay",
    "nope",
    "I don\u0027t think so",
    "no it isn\u0027t",
    "thanks but not this time",
    "no that\u0027s fine thank you",
    "no don\u0027t",
    "don\u0027t do it",
    "I don\u0027t want",
    "not today",
    "I\u0027m not",
    "no way",
    "no",
    "I disagree",
    "not this time",
    "nothing else thanks"
]);

module.exports = {
    trainingPhrasesFromStrings,
    yes,
    no
};