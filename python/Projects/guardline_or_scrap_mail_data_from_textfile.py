mail_text_object = open("D:/Angular/my-app/python/Projects/mailboxdata.txt", "rt")
for line in mail_text_object:                           #For each line of text in the textfile
    line= line.rstrip()                                 # Strip the right space from the line and assign it back to the line
    listofwords = line.split()                          # Make a list of each word with the default space delimetre
    if len(listofwords) < 3 or listofwords[0] !="From": # The guardian line here checks whether our list of word for aparticular line contains at lest 3 word and if it starts with from.
        continue
    print(listofwords[0],listofwords[1])         

# The or statement checks thing from left to right, so if the left woul dbe true, it wouldn't check the right one anymore.