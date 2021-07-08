################# MODES ###################

# r: Opens the file in read-only mode. Starts reading from the beginning of the file and is the default mode for the open() function.
# rb: Opens the file as read-only in binary format and starts reading from the beginning of the file. While binary format can be used for different purposes, it is usually used when dealing with things like images, videos, etc.
# r+: Opens a file for reading and writing, placing the pointer at the beginning of the file.
# w: Opens in write-only mode. The pointer is placed at the beginning of the file and this will overwrite any existing file with the same name. Creates the file if it does not exist. It will create a new file if one with the same name doesn't exist.
# wb: Opens a write-only file in binary mode. Creates the file if it does not exist.
# w+: Opens a file for writing and reading.
# wb+: Opens a file for writing and reading in binary mode.
# a: Opens a file for appending new information to it. The pointer is placed at the end of the file. A new file is created if one with the same name doesn't exist, , creates the file if it does not exist
# ab: Opens a file for appending in binary mode,, creates the file if it does not exist
# a+: Opens a file for both appending and reading.
# ab+: Opens a file for both appending and reading in binary mode.

###########################################################################
# In addition you can specify if the file should be handled as binary or text mode
############################################################################
# "t" - Text - Default value. Text mode

# "b" - Binary - Binary mode (e.g. images)
############################################################################

# ########################### Write to an Existing File ########################

# To write to an existing file, you must add a parameter to the open() function:

# "a" - Append - will append to the end of the file
# "w" - Write - will overwrite any existing content
filename = "d:/Angular/my-app/python/textn.txt"

# append = open(filename, "at")
# append.write("\n" + "My new line")
# append.close()

arandomlist = ["Jay Jay Tucker: jjt@jjt.com", "Vame TurnamLvametur@vam.com", "A New line", "Another line", "Something else", "Yo you bro!", "Hey you bro!"]

# append = open(filename, "rt")
# print(append.read())
# append.close()
############################# WITH write appending ##################################

# with open(filename, "rt") as rappend: ##### Open the file for reading
#     index = len(rappend.readlines())-5                  # Calculate the number of the last added item
#     aappend = open(filename, "at")                      # Reopen it for appending. We may change the mode dynamically instead of reopening. Search the web. Also https://www.tutorialspoint.com/python/os_chmod.htm
#     if index<=len(arandomlist)-1:                       # Check if the index is within our arandomlist list's index
#         aappend.write("\n" + arandomlist[index])        # Add a new line from the list
#         aappend.flush()                                 # Flush the data from the buffer memory, so that we see the updated txt when reading
#     elif len(arandomlist) == index:                     # If we reach the item in the list
#         aappend.write("\n" + "Thats it, we are done!")  # Write the last text
#         aappend.close()                                 # Close the appendable fileobject instance
#     else:
#         quit()                                          # Quit python execution
    
#     try:
#         rappend.seek(0)                                 # Go back to the first position
#         print(rappend.read())                           # Read the text
#     except:
#         print("No idea what went wrong")

############################# A Better version of the above with at+ mode #######################

# with open(filename, "at+") as rappend:                  ##### Open the file for reading and appending
#     rappend.seek(0)                                     # Set the position for reading lines
#     index = len(rappend.readlines())-5                  # Calculate the number of the last added item
#     if index<=len(arandomlist)-1:                       # Check if the index is within our arandomlist list's index
#         rappend.write("\n" + arandomlist[index])        # Add a new line from the list
#     elif len(arandomlist) == index:                     # If we reach the item in the list
#         rappend.write("\n" + "Thats it, we are done!")  # Write the last text
#     else:
#         quit()                                          # Quit python execution
#     try:
#         rappend.seek(0)                                 # Go back to the first position
#         print(rappend.read())                           # Read the text
#     except:
#         print("No idea what went wrong")

############################# append writelines  ##################################

randarr = ["First line of code", "Second line of code", "Third line of code"]
filename2 = "d:/Angular/my-app/python/randy.txt"

with open(filename2, "at") as rambo:
    for i in randarr:
        i = "\n" + i # Adding enter - new line for each iterable
        rambo.writelines(i) # The rambo appendable object closes with with automatically. therefore, no need to close it manually
with open(filename2,"rt") as rrambo:
    print(rrambo.read())

########################## Map Operator ##########################
# ######################## Definition and Usage ####################

# The map() function EXECUTES a specified function for EACH ITEM in an ITERABLE. The ITEM is sent to the function as a parameter.
# map() function RETURNS a map object(which is an iterator) of the results after applying the given function to each item of a given iterable (list, tuple etc.)

def addnewline(n):
  return "\n" + n # We must RETURN  a map object (iterator) of th results.

filename3 = "d:/Angular/my-app/python/atext.txt"
arandlist = ["Some sort of a line", "Another Sort of a line"]
with open(filename3, "at+") as johny: #################### at+ mode opens the file object both for reading and appending
    johny.writelines(map(addnewline, arandlist)) # We may add the list itself or the items of the list through for.
    johny.seek(0)
    print(johny.read())

################ Write ###################
foldername = "c:/Users/Robbie Williams/Desktop/"
filename = input("Please enter the file name")
path = foldername + filename + ".txt"

with open(path, "wt+") as doc:
    doc.write("A Random text") # Because we dont have a text file, it will be created at the specified directory

############################################ Removing files ###################################
############################################ For Removing we need to import the os module ################
import os
try:
    os.remove(foldername + "text.txt") ######### I fthe file is not found, ython will raise an exception
except FileNotFoundError:
    print("Your file doesn't exist")