
# AlexaSpeakingTest
Alexa Speaking Test repository. To see how the information needs to be structured for users to understand the information only via voice


# Program Flow:

The program uses the normal flow of any Alexa based JS Skill

However the two intents in this system are particularly designed to test out the 
different ways or systems of presenting information only through audio.

The two systems are:

1) Large paragraphs with obvious gaps
2) Large paragraphs with no gaps
3) Smaller lines with prompt's asking to continue


This allows us to test the different structures in a **co-design** session and 
help spark ideas for different structures to work with for presenting such information


# Instructions to use:

## Invocation

The invocation name is `Big Historian`, you can ask for help (`Alexa ask Big historian for help`) to get instructions, but the gist of it is
that you can do two invocations,

`Ask Big Historian loads` :
which returns the large paragraph with obvious gaps, and 

`Ask Big historian for something little`:
 which returns the smaller lines with prompts to continue, to which you say 
 
 `Ask Big Historian for the next one`. 

To reset the flow of the program, say **`Alexa Ask Big Historian to reset my history`** This would force alexa to reset the variables for shortIntent logic.

## Debugging

If you hear **"Something Went Wrong"** that means the logic for the smaller lines has failed, and might need to take a look at the debug outputs available on AWS lambda

## Program Documentation:

The program uses variables inside the code to keep track of which sentence should be said for the `Short Intents`. We use the following intents.

1. **ShortIntent** : Flow for the program to do the small sentences and use the variables for logic for which variable goes next.
2. **VerboseIntent** : This allows for the longer paragraph in the program to run, and does not have any logic in it.
3. **ResetValuesIntent**: This allows for the program to reset the logic values for `ShortIntent`.
4. **NextIntent**: Frontend doesn't implement this yet, but this is an example of how to make one intent call another.
5. **HelloIntent**: Quick intent for testing, an example of the `.listen()` is added to allow testing for constant alexa conversation for this app.

We also use the program **`replaceComma.py`** This program is to take a long text, and add pauses and breaks to make it more speech friendly. These timings on it are based on testing and some talk with the Co-Design partners at BIG.

## Installation:
To install the program, upload the frontend.json as the **Interaction Model** for the Alexa Developer skill.
For the **AWS Lambda** we upload these files, and you can use the script `publish.sh` that will zip all the relavant files and upload them

**Publish.sh**: in `publish.sh` you might need to change the name of the function name `explanationTests` to the matching function name from AWS Lambda

**DO NOT FORGET**: Do not forget to do npm install in the project to have the relevant node_modules that are needed for this project.



# About:

This is part of a Co-design system for the University of Bristol's Bristol Interaction Group focused on HCI research

### Observations:

This part is to be filled once the experiment has been completed.

But an observation made during the production of this system is that 
**Users having to say `Alexa Ask Big Historian ...` is quite verbose, and this can cause interruptions while using the program. However this idea of using `Alexa` to trigger the device and `Big Historian` to specify the app is needed
by users to allow them to talk to each other during a group activity.**

**For a single user, the implementation could be changed to use a `.listen("...")` at the end of each `.speak("...")` to trigger Alexa to keep the conversation going, however as we're unsure whether this will be a group experiment or 
a solo experiment, the `.listen()` has been ommited except for the example in the `HelloIntent` invocation. This can be raised by saying "Alexa ask big historian hello" .**


# Support: 
For any support on this, ask [Sunny Miglani](https://github.com/sunnyMiglani). 