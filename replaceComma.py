import sys

ssmlMediumBreak = " <break time = '0.3s' /> ";
ssmlSmallBreak = " <break time = '0.15s' /> ";
def makeAlexaFriendly(inputText):
    myText = "";
    for char in inputText:
        appendChar = char;
        if(char == "," or char == ";"):
            appendChar = ssmlSmallBreak;
        if(char == "."):
            appendChar = ssmlMediumBreak;
        myText += appendChar;
    return myText;

def flow():
    print("Please enter the string you would like converted into Alexa friendly speech");
    for line in sys.stdin:
        if(line != ""):
            friendly = makeAlexaFriendly(line);    
            print("The alexa friendly text is : ");
            print(friendly);
            print("Restart the program if you'd like to convert again!");
        else:
            print("Check text please!");

flow();
