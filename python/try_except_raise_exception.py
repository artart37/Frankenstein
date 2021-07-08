# Exception Handling Same as Error Handling
# When an error occurs, or exception as we call it, Python will normally stop and generate an error message.
# These exceptions can be handled using the try statement:

########################## The try block lets you test a block of code for errors.
x = "John Smith"
########################## The try block lets you test a block of code for errors.
try:
    y = int(x)
    print(y)
########################## The except block lets you handle the error.
except:
    print("An exception occurred")

#################################################################################
# #########################  Many Exceptions
# You can define as many exception blocks as you want, e.g. if you want to execute a special block of code for a special kind of error:
t = "Stevie Wonder"
try:
    z = int(t)
    print(t)
except NameError: # This will be skipped, as our error is of a ValueError type
    print("A Name Error Occurred")
except ValueError: # You may find the error type during debugging, without error handling. For instance, a ValueError is raised when a function gets an argument of correct type but improper value.
    print("A Value Error Occurred")
except: # if Some other type of error occurs. will be skipped here, because we already know that the error is of a Value type
    print("Something else went wrong")

########################### Else
# ################# Using else within try catch
try:
  print("Hello")
except:
  print("Something went wrong")
else: ####################### Runs when no errors are detected. The try also runs.
  print("Nothing went wrong")
############################## Finally
#The finally block, if specified, will be executed regardless if the try block raises an error or not.
try:
    print(o)
except NameError:
    print("A NameError occurred")
finally:
    print("Run regardles of whether is an error or not")

################################## Raise an Exception ###############################
##################################The raise keyword is used to raise an exception.######################
# As a Python developer you can choose to throw an exception if a condition occurs.
x = 0.3
if isinstance(x, float): #isinstance is a type checking function. See in our docs
    raise Exception("WOW! Your variable", x, "is not of an integer type. We are going to raise an error." )
##################################### You can define what kind of error to raise, and the text to print to the user.

########################### IMPORTANT ##############################
########################### The Below example won't be called as python stops everything after an error is raised ######################
l = "JUK"
if isinstance(l, str):
    raise TypeError("Wow, a typeerror occured. Please enter an integer.")
########################################################################################################################