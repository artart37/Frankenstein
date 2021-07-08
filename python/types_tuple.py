################Tuples################
# A tuple is a collection which is ordered and UNCHANGEABLE (IMMUTABLE). In Python tuples are written with round brackets.
# IT Is similar to javascript arrays.
# The main difference between tuples and python lists is that tuples are immutable
x = ("apple", 2, 3, 6, 5)
print(x)
print(x[0]) #Returns the first item from right
print(x[-1]) #Returns the first item from left
print(x[2:4]) #Return the third and  fourth item.
print(x[-3:-1]) # #This example returns the items from index -3 (included) to index -1 (excluded) #Output will be the same (3,6)
# x[0] = "JUK" # This won't work, but we may convert a tuple into a list and change the value, then reassign it
# Change Tuple Values
# Once a tuple is created, you cannot change its values. Tuples are unchangeable, or immutable as it also is called.
y = list(x)
y[0] = "banana"
x = tuple(y)
print(x)
##########We may though reassign the tuple value###############
x =("mango", 2, 3, 6, 5)
print(x)
###############Loop through a tuple#################
for i in x:
    print(i)
#Check if Item Exists
# To determine if a specified item is present in a tuple use the in keyword:
if 5 in x:
    print(5, "exists in the x tuple")
# Tuple Length
# To determine how many items a tuple has, use the len() method:
print(len(x)) # The length is 5

##############################ONCE A TUPLE IS CREATED, YOU CANNOT ADD or DELETE ITEMS FROM IT. TUPLES ARE UNCHANGEABLE.#####################
# Create Tuple With One Item
# To create a tuple with only one item, you have to add a COMMA after the item, otherwise Python will not recognize it as a tuple.
o = ("Item",)
print(type(o))
# Join Two Tuples
# To join two or more tuples you can use the + operator:
q = ("white", "blue")
w = x + q
print(w)
#Tuple Methods
# Python has two built-in methods that you can use on tuples.
####################count()#########################
#Returns the number of times a specified value occurs in a tuple
a = x.count("mango")
print(a)
####################index()#########################
#Searches the tuple for a specified value and returns the position of where it was found
c = x.index("mango")
print(c)
print(x[1:]) #Returns from the first (after 0th item) item to the end.
print(x[:4]) #Returns from the begining to the 4th item.

numbers = (1,2,3,4,5,6,7,8,9) # The max() function returns the item with the highest value, or the item with the highest value in an iterable.
print(max(numbers))           # If the values are strings, an alphabetically comparison is done.


################ Tuples with several variables on the left side ##################
(a,b,c) = (1,50,"John")
print(c)

############# Tuples are comparible ##############

# Python checks each item from left side from each tuple with each other
# In the below example, it first checks whether 0 is equal to 0, then 15 is eqaul to 15, but 789 is not equal to 4869. Therefore, it returns false

print((0, 15, 789) == (0, 15, 4869)) # Only if the items are equal, it will go on comparing the other times

print((0, 2, 780000009) < (0, 15, 4869)) # Will return true, as python stops comparing (if items are not equal)

print(("art", "sdf", "sdfsd") < ("asyt", "dSFsdf", "sdfsdsf")) # Will return true, because the r item (charachter) from art is less than s from asyt








