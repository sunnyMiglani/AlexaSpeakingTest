# How to build this skill

This should be a relatively quick guide on how to build this type of very simple alexa skill!

The goals of this skill are to test the different methods of speaking with alexa:

1. Speaking continously with no gaps
2. Speaking with some gaps, quite obvious ones
3. Smaller lines, requiring the user to request the app to speak again.

There is an associated but independent script, `AlexaSpeechHelper` which just replaces grammar in the strings input with `ssml` (synthesized speech markup language) tags allowing for a more understandable speech system.

## Vocabulary of Alexa and AWS:

### AWS Lambda:

It's a `serverless` function instance. Essentially it just runs a small piece of code for you, often the size of a function or two.
Remember this is for **short** functions, and not meant to do large computation tasks as it gets quite expensive.

It is cheap to use, often stays in the `free-tier` of AWS' billing system.

### AWS Commandline
