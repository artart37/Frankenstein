filepath = "D:/Angular/my-app/python/Projects/"
filename = input("Enter the file name")
fullpath = filepath + filename +".txt"
emptydict = dict()                                                          # Defining an empty dictionary where each unique word is stroed and the number of times it is repeated is stored as its value
import re                                                                   # Importing regex for punctuation removal https://www.quora.com/How-do-I-remove-punctuation-from-a-Python-string

try:                                                                        # Try to see if we are having an error within open, due to the file not being found
    with open(fullpath,"rt") as file_object:                                # Defining the file object
        for lines in file_object:                                           # For each line in the file object
            lines=re.sub(r'[^\w\s]','',lines.rstrip().casefold())           # Strip the right space, ignore cases, remove punctuations via regex
            wordslist=lines.split()                                         # Make a list out of it
            if len(wordslist)<1:                                            # If our line list contains less than one word, continue the loop from th begining
                continue
            else:                                                           # Otherwise
                for items in wordslist:                                     # For each item in the wordslist
                    emptydict[items] = emptydict.get(items,0)+1             # If the name item is already there, add 1 to it, else, if its not there add 1 to the default 0 value
except FileNotFoundError:                                                   # If there is FileNotFoun error, print File not found and quit the programm
    print("File not found")
    quit()

largeword = None                                                            # Defining the the most frequent word variable with an initial value = None
largefrequency = None                                                       # Defining the largest frequency number with an initial value = 0

equaldict = dict()                                                          
equalresult = str()
for word, frequency in emptydict.items():                                   # For each item and value in the emtydict collection of words and values 
    if largefrequency is None or frequency > largefrequency:                # If the largefrequency is not yet assigned to or the given frequency in the collection of words is higher than the assigned largefrequency
        largefrequency = frequency                                          # Assign the given frequency to the largefrequency variable
        largeword = word                                                    # Assign the given word to the largestword variable
    elif frequency == largefrequency:                                       # If the given frequency is equal to the largefrequency variable 
        equaldict[word] = equaldict.get(word,frequency)                     # Add the given word to our collection (dictionary) and assign the given word's corresponding value, but if the word doesn't yet exist in the collection, add the given word's value

if len(equaldict) > 0 and largeword is not None and largefrequency is not None: # If we have a non empty collection (dictionary) of several largest words
    equaldict[largeword] = equaldict.get(largeword,largefrequency)              # Add the given largeword and its corresponding value to the dictionary of several largest words
    equallist = list(equaldict.keys())                                          # Making a list out o fthe dictionary's keys to be able to access the last item of the list
    equallist.insert(-1,"and")                                                  # Add and before the last item
    equalresult = ", ".join(equallist).replace(", and,", " and")                # Make a string via join method with a ", " deliemetre, and remove comma before and after and at the end of that string
    print("The most common words are", equalresult, "which repeat", largefrequency, "times.")
else:
    print("The most common word is", largeword, "which repeats", largefrequency, "times.")