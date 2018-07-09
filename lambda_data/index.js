"use strict";
const Alexa = require('alexa-sdk');
const ssmlMediumBreak = "<break time = '0.3s'/>";

var firstTime = true;

var startValue = 0;

var verboseIntentSpeech =  "There were approximately 45 million Protestants and 22 million Catholic Christians in Germany in 1933 <break time = '0.3s' /> Hitler saw Christianity as a threat and a potential source of opposition to Nazism because it emphasised peace <break time = '0.3s' /> The Nazis tried to control the Churches with policies and bargaining <break time = '0.3s' /> \
A state Reich Church under the leadership of the Nazi Bishop Ludwig Müller was established to unify the different branches of Protestantism <break time = '0.3s' /> This enabled the Nazis to use a group called the ‘German Christians’ within the Reich Church to promote Nazi ideas <break time = '0.3s' /> \
In 1933 Hitler agreed a Concordat with the Pope <break time = '0.15s' /> which said that he would not interfere in the running of the Catholic Church if it stayed out of political matters <break time = '0.3s' /> Hitler didn’t keep his side of the bargain <break time = '0.15s' /> however <break time = '0.15s' /> as the Nazis attempted to infiltrate the Church and spread their propaganda <break time = '0.3s' /> \
The Reich Church attempted to ban the use of the Old Testament in religious services as it was considered a ‘Jewish book’ <break time='0.3s' />  Eight hundred Pastors of the Confessional Church <break time = '0.15s' /> a non - conforming Protestant group <break time = '0.15s' /> were arrested and sent to concentration camps <break time = '0.3s' /> ";


var handlers = {

  'LaunchRequest': function () {
    this.response.speak("Hello! Welcome to Big Historian! You can ask me to give you information in three different ways <break time = '0.3s' /> <break time = '0.3s' /> Ask for help for a more detailed explanation\
    ").listen("You can say things like help if you're stuck!");
    this.emit(':responseReady');
  },

  'HelloIntent': function () {
    this.response.speak("Hello! Welcome to big historian <break time = '0.3s' />  <break time = '0.3s' />  Ask me to give you a large or small explanation <break time = '0.3s' />  <break time = '0.3s' />  This should help me learn what's the best way to communicate!").listen("If you're not sure, ask me for help by saying Alexa Ask Big historian for help ");
    this.emit(':responseReady');
  },

  'AMAZON.HelpIntent': function () {
    this.response.speak("Hello! Welcome to Big Historian <break time = '0.3s' />  I've been created to help understand what is the best method of communication <break time = '0.3s' />  <break time = '0.3s' /> \
    You can say <break time = '0.3s' />   Alexa ask Big Historian to tell me loads <break time = '0.3s' />  <break time = '0.3s' />  Or Alexa ask big historian to tell me something small <break time = '0.3s' />  <break time = '0.3s' />. If you have problems using me, say <break time = '0.3s' /> Alexa ask big historian to reset my history  <break time = '0.3s' /> ");
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
    
    const shortIntentSpeechA = "There were approximately 45 million Protestants and 22 million Catholic Christians in Germany in 1933 <break time = '0.3s' /> \
    Hitler saw Christianity as a threat and a potential source of opposition to Nazism because it emphasised peace <break time = '0.10s' /> so, he tried to control the Churches with policies and bargaining <break time = '0.3s' /> \
    "
    
    const shortIntentSpeechB = " A state Reich Church under the leadership of the Nazi Bishop Ludwig Müller was established to unify the different branches of Protestantism <break time = '0.3s' />  \
    This enabled the Nazis to use a group called the ‘German Christians’ within the Reich Church to promote Nazi ideas <break time='0.3s' /> \
     "
    
    const shortIntentSpeechC = "In 1933 Hitler agreed a Concordat with the Pope <break time = '0.15s' /> which said that he would not interfere in the running of the Catholic Church if it stayed out of political matters <break time = '0.3s' /> Hitler didn’t keep his side of the bargain <break time = '0.15s' /> \
     however <break time = '0.15s' /> as the Nazis attempted to infiltrate the Church and spread their propaganda <break time = '0.3s' /> \
    "
    
    const shortIntentSpeechD = " The Reich Church attempted to ban the use of the Old Testament in religious services as it was considered a ‘Jewish book’ <break time='0.3s' /> \
    Eight hundred Pastors of the Confessional Church <break time = '0.15s' /> a non conforming Protestant group <break time = '0.15s' /> were arrested and sent to concentration camps <break time = '0.3s' /> \
    "
    
    /* This is to handle any bugs with the logic */
    var speakingString = "Problem occured!";

    console.log(startValue);
    
    if(startValue === 0 || startValue > 3){
      
      var shortIntentFirstSpeech = "I am going to break down a paragraph about Germany in World War 2 <break time = '0.15s' /> and only continue once you're ready <break time = '0.3s' /> Here I go!" + ssmlMediumBreak + shortIntentSpeechA + ssmlMediumBreak + "If you would like to hear more, say Alexa, ask\
      big historian for the next part";
      speakingString = shortIntentSpeechA;
      startValue  = 1;      
      this.response.speak(shortIntentFirstSpeech);
      this.emit(":responseReady");
      return;
    }
    else if(startValue === 1){
      startValue += 1;
      speakingString = shortIntentSpeechB;
    }
    else if(startValue === 2){
      startValue += 1;
      speakingString = shortIntentSpeechC;
    }
    else if (startValue === 3) {
      startValue += 1;
      speakingString = shortIntentSpeechD;
    }

    console.log(startValue);
    var shortIntentSpeech = ssmlMediumBreak + speakingString + ssmlMediumBreak + "If you would like to hear more , say Alexa, ask big historian for the next part";

    this.response.speak(shortIntentSpeech);
    this.emit(':responseReady');

  },

  'ResetValuesIntent' : function(){
    firstTime = true;
    startValue = 0;

    this.response.speak("Resetting the values!");
    this.emit(":responseReady");
  },

  'NextIntent': function(){
    this.emit("ShortIntent");
  }

};


exports.handler = function (event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
