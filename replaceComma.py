import sys

ssmlMediumBreak = " <break time = '0.3s' /> ";
ssmlSmallBreak = " <break time = '0.15s' /> ";
def makeAlexaFriendly(inputText):
    myText = "";
    for char in inputText:
        if(char == '\n'):
            continue;
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
            print("\n-----------------------\n");
            print(friendly);
            print("\n-----------------------\n")
        else:
            print("Check text please!");

flow();
