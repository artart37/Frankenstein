########################### FUNTCTIONS ##############################
##################### A function is a block of code which ONLY RUNS WHEN IT IS CALLED ####################################
##################### def ############ keyword defines a function
################# You can pass data, known as PARAMETRES (Arguments), into a function. ####################



def myfunction():
    print("I am coming from your function")
################# AGAIN, THE FUNCTION WON'T RUN UNLESS IS CALLED
######### Now, it is called
myfunction()

# Parameters or Arguments?
# The terms parameter and argument can be used for the same thing: information that are passed into a function.
# From a function's perspective:
# A parameter is the variable listed inside the parentheses in the function definition.
# An argument is the value that is sent to the function when it is called.


################################ Arguments ##############################\

# Arguments are seperated with a comma, can can be added as much as we want
############################### Arguments belong only to the  Function ############## We can't have a variable
############################### Arguments belong only to the Function. these are block scoped variables.
name = "John"
def fwitharg(myargument):
    print(myargument, "Smith")
fwitharg(name)
# ################################## Arbitrary Arguments, *args ######################################## #
# If you do not know how many arguments that will be passed into your function, add a * before the parameter name in the function definition.

#################### This way the function will receive a TUPLE of arguments, and can access the items accordingly: ####################

def my_f(*arg):
    print("John", arg[2])
my_f("Lewis", "Stevenson", "Carvalio", "Roberts")

############################################# Keyword Arguments ###########################
# You can also send arguments with the key = value syntax.
def k_arg_f(child1, child2, child3):
    print(child2)
k_arg_f(child1 = "john", child2="Bob", child3="Juk")

# ########################### Arbitrary Keyword Arguments, **kwargs #######################
# If you do not know how many keyword arguments that will be passed into your function, add two asterisk: ** before the parameter name in the function definition.
# This way the function will receive a DICTIONARY of arguments, and can access the items accordingly:

def k_wargs(**kids):
    print("The second child is", kids["skid"])

k_wargs(fkid="First kid", skid="second kid")

############################################ Default Parameter Value
# The following example shows how to use a default parameter value.
# If we call the function without argument, it uses the default value:

def d_val_f(country="Sweden"):
    print("The country is", country)

d_val_f("Norway")
d_val_f()

# ################################################ Passing a List as an Argument
# You can send any data types of argument to a function (string, number, list, dictionary etc.), and it will be treated as the same data type inside the function.
def p_lt(lt):
    for i in lt:
        print(i)
mijat = ["JUK","BLOCH"]
p_lt(mijat)
##################################################  The pass Statement
# Function definitions cannot be empty, but if you for some reason have a function definition with no content, put in the pass statement to avoid getting an error.

def juk():
    pass
# ################################## Recursion
# Python also accepts function recursion, which means a defined function can call itself.
############# TOO COMPLEX AT THIS STAGE. DEBUGGING CAN HELP #############
def rec_f(a):
    if a>0:
        result = a + rec_f(a-1)
        print(result)
    else:
        result = 0
    return result

print("Recursion Example Results")
rec_f(5)
#################### Return #####################
def jk(a, b):
    added = a + b
    return added
g = jk(2,2)
print(g)