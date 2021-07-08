# Numeric Expressions
x = 1 + 1 # Addition
print(x)
x = 5 - 1 # Subtraction
print(x)
x = 2 * 2 # Multiplication
print(x)
x = 2 / 2 # Division
print(x)
x = 4 ** 3 # Power The power (or exponent) of a number says how many times to use the number in a multiplication. Tvyal depqum 4-i xoranard
print(x)
x = 21 % 5 # Remainder is what is left after dividing 21/5. In other words, how many times can 5 fit into 21, and the remainder 1 is what is left.
print(x)
# Types
# There is no need to specifically define a type. Python knows the type automatically.
# For strings  + would concatenate, and for numbers it would add
x = "JUK" + " ev bloch"
y = 5 + 5
print(x)
print(y)
#We may detect the type through the type() function
print(type(x))
# We may not add a string to a number
z = 5 #Integer  Whole numbers
s = -1 # Integer Whole numbers
q = 1.0 #Floating Point Number
t = -0.25 #Floating Point Number
print(type(z)) #int
print(type(s)) #int
print(type(q)) #float
print(type(t)) #float

#Type Conversion
############### NUMERIC CONVERSIONS #############
############### int(), float() ###################
print(int(q)) #Converts float into integer, but does not mutate the variable. Returns 1
print(q) #Will again return 1.0
print(float(z)) #Converts integer into float, but does not mutate the variable. Returns 5.0
print(z) #Will again return 5
#Integer division returns a floating point result
print(6/2) #Returns 3.0
############Strings can be converted into numeric data via int() or float()
print(int("123"))
print(float("123"))
############# Converting into string ################
print(type(str(123))) #Will return string, as we have converted the number into strring
print(str(123) + " JUK")# Will work and return a string:123 JUK
######### Read more about operators here https://www.w3schools.com/python/python_operators.asp