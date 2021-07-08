# A text file vcan be thought of as a sequence of lines
# ################ To Read a file we need to call the open() function ##################

# ################################ open() returns a "file handle" ###############
####################### NEWLINE \n
x = "a\nb"
print(x)
print(len(x))  # \n counts is a charachter, tehrefore the lebgth of x is 3

############## open() synatx is )open(filename, mode) ###############
file_object = open("d:/Angular/my-app/python/randomtext.txt", "rt") ########## rt stand for reading and text
# ################################ open() returns afile object ###############
print(file_object)
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

########################################################
# "t" - Text - Default value. Text mode
# "b" - Binary - Binary mode (e.g. images)

###################### Reading a file ################
print(file_object.read()) # Reading with the file object's in built read function  # you've reached the end of the file 
print(file_object.tell()) # give my current position at file
file_object.seek(0) # Go back to the starting position
print(file_object.read(1))

# ##################### Read Lines #####################
# You can return one line by using the readline() method:
file_object.seek(0) # Go back to the starting position
print(file_object.readline()) # Reads the line at the specified position. In our case, the position is zero due to file_object.seek(0)
file_object.seek(0) # Go back to the starting position

# ######################## Python File readlines() Method #########################
# Return all lines in the file, as a list where each line is an item in the list object:
print(file_object.readlines())

# Do not return the next line if the total number of returned bytes ar more than 33
file_object.seek(0) # Go back to the starting position
print(file_object.readlines(33))
file_object.seek(0) # Go back to the starting position
#################### Loop through lines #################
for x in file_object:
       print(x.rstrip()) # Th Print statement adds a new line /n. We therefore use rstrip to strip the blank space from right

######################## WITH ######################
# The with statement clarifies code that previously would use try...finally blocks to ensure that clean-up code is executed.
# In this section, I’ll discuss the statement as it will commonly be used. In the next section,
# I’ll examine the implementation details and show how to write objects for use with this statement.
# We do not need to manually close the file when using with

with open("d:/Angular/my-app/python/atext.txt", "rt") as atext:
  for i in atext:
    if not i.startswith("Your"):
      continue # If the line does not start with Your skip it and check for others
    print(i.rstrip())

with open("d:/Angular/my-app/python/textn.txt", "rt") as textn:
  for i in textn:
    if "@" in i:
      i = i.replace("@"," at ")
      print(i.rstrip())
################## WITH AUTOMATICALLY CLOSES THE FILES AFTER ITS BLOCK IS DONE ############
################## Reopening and doing other stuff ##############################
countjohns = 0
with open (textn.name, "rt") as jukovski:
  for i in jukovski:
    i = i.rstrip()
    if not "John" in i: 
      continue # If John is not in the line, skip it and move to other lines
    countjohns+=1
    print(countjohns, i)

# ############### Close Files #################
# It is a good practice to always close the file when you are done with it.

# If we are not using with, we have to manually close the fileobject

file_object.close()

####################### ERROR HANDLING ######################

inp = input("Enter a file name")
try:
  of = open("d:/Angular/my-app/python/" + inp + ".txt", "rt")
  for i in of:
    print(i.rstrip())
except:
  print("We didn't find your file")
  # quit() # Terminates the entire python programm. We want dont want want to print juk regardless if there is an error.

print("JUK")