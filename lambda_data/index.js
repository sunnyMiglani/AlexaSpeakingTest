"use strict";
const Alexa = require('alexa-sdk');
const ssmlMediumBreak = "<break time = '0.3s' />";

var firstTime = true;

var verboseIntentSpeech = "The German people reacted to the outbreak of war with resignation <break time = '0.3s' />  <break time = '0.3s' /> \
In 1914 <break time = '0.3s' />  at the outbreak of World War One <break time = '0.3s' />  \
there had been much enthusiasm but not this time <break time = '0.3s' />  <break time = '0.3s' /> \
Germans in 1939 could still remember the pain of 1918 <break time = '0.3s' />  their surrender and the subsequent punishment at Versailles\
 <break time = '0.3s' />  <break time = '0.3s' /> However <break time = '0.3s' />  the vast majority of \
 Germans reluctantly supported the war and signed up to play their part in the war\
  effort <break time = '0.3s' />  <break time = '0.3s' /> \
"

var ShortIntentA = "The German people reacted to the outbreak of war with resignation <break time = '0.3s' />  <break time = '0.3s' /> \
In 1914 <break time = '0.3s' />  at the outbreak of World War One <break time = '0.3s' />  \
there had been much enthusiasm but not this time";

var ShortIntentB = "Germans in 1939 could still remember the pain of 1918 <break time = '0.3s' />  their surrender and the subsequent punishment at Versailles\
 <break time = '0.3s' />  <break time = '0.3s' /> However <break time = '0.3s' />  the vast majority of \
 Germans reluctantly supported the war and signed up to play their part in the war\
  effort";

var shortIntentFirstSpeech = "I am going to break down the paragraph and < break time = '0.3s' /> only continue once you're ready for the paragraph about Germany" + ssmlMediumBreak  + ShortIntentA + ssmlMediumBreak;

var shortIntentSecondSpeech = ShortIntentB;

var handlers = {

  'LaunchRequest': function () {
    this.response.speak("Hello! Welcome to Big Historian! You can ask me to give you information in three different ways <break time = '0.3s' /> <break time = '0.3s' /> Ask for help for a more detailed explanation\
    ").listen("You can say things like help if you're stuck!");
    this.emit(':responseReady');
  },

  'HelloIntent': function () {
    this.response.speak("Hello! Welcome to big historian <break time = '0.3s' />  <break time = '0.3s' />  Ask me to give you a large or small explanation <break time = '0.3s' />  <break time = '0.3s' />  This should help me learn what's the best way to communicate!").listen();
    this.emit(':responseReady');
  },

  'AMAZON.HelpIntent': function () {
    this.response.speak("Hello! Welcome to Big Historian <break time = '0.3s' />  I've been created to help understand what is the best method of communication <break time = '0.3s' />  <break time = '0.3s' /> \
     You can say <break time = '0.3s' />   Alexa ask Big Historian to tell me loads <break time = '0.3s' />  <break time = '0.3s' />  Or Alexa ask big historian to tell me something small <break time = '0.3s' />  <break time = '0.3s' /> ");
    this.emit(':responseReady');
  },

  'AMAZON.StopIntent': function () {
    this.response.speak("Goodbye from BIG Historian!");
    this.emit(':responseReady');
  },

  'VerboseIntent': function(){
    var verboseIntentSpeechLocal = "I am going to tell you about Germany and the World War 2" + ssmlMediumBreak + "Here I go!" + ssmlMediumBreak + verboseIntentSpeech;
    this.response.speak(verboseIntentSpeechLocal);
    this.emit(':responseReady');
  },

  'ShortIntent': function(){

    var ShortIntentA = "The German people reacted to the outbreak of world war 2 with resignation <break time = '0.3s' /> \
    In 1914 <break time = '0.3s' />  at the outbreak of World War One \
    there had been much enthusiasm but not this time";


    var shortIntentFirstSpeech = "I am going to break down a paragraph about Germany "+  ssmlMediumBreak +" and shall only continue with the second part of the paragraph when you're ready" + ssmlMediumBreak + ShortIntentA + ssmlMediumBreak;



    this.response.speak(shortIntentFirstSpeech);
    this.emit(':responseReady');

  },
};


exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
