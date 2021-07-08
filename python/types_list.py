#################Lists###################
# A list is a collection which is ordered and CHANGEABLE. In Python lists are written with square brackets.
y=["apple", 2, 5,"banana"]
print(y)
print(y[0]) #Returns the first item from right
print(y[-1]) #Returns the first item from left
print(y[0:2]) #Returns the first value up to the 2nd value (excluded)
print(y[:2])  #This example returns the items from the 2. The same as above.
print(y[2:]) #This example returns from the second item (5) to the end
print(y[-3:-1]) # #This example returns the items from index -3 (included) to index -1 (excluded) #Output will be the same (2,5)

# #########################Change Item Value######################## #
#To change the value of a specific item, refer to the index number:
y[0] = "mango" # Now, after we have changed the item value, the list has been modified.
print(y)
# Loop Through a List
# You can loop through the list items by using a for loop:
for i in y:
    print(i)
############################ Check if Item Exists
# To determine if a specified item is present in a list use the in keyword:
if "mango" in y:
    print("The changed value is mango")
# ########################## List Length
# To determine how many items a list has, use the len() function:
print(len(y))
# ######################### Add Items
# To add an item to the end of the list, use the append() method:
y.append("juk")
print(y)
# ######################### To add an item at the specified index, use the insert() method:
y.insert(1, "bloch")
print(y)
# ######################### Remove Item
# There are several methods to remove items from a list:
y.remove("juk")
print(y)
# ################## Remove specific index
# The pop() method removes the specified index, (or the last item if index is not specified):
y.pop(1)
print(y)
#################### Delete the specific index or the entire list if index is not provided with del
del y[0]
print(y)
# del y # Will delete th entire y list
#################### Clear the entire list
y.clear()
print(y)
# ########################## Copy a List
# You cannot copy a list simply by typing list2 = list1, because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.
# There are ways to make a copy, one way is to use the built-in List method copy().
x = ["First Item", "Second Item", "Third Item", "Fourth Item", "Fifth Item", 6]
z = x.copy()
print(z)
############################## Another way to make a copy is to use the built-in method list().
u = list(z)
print(u)
# ############################ Join Two Lists
# There are several ways to join, or concatenate, two or more lists in Python.
# One of the easiest ways are by using the + operator.
s = x + z + u
print(s)
# Another way to join two lists are by appending all the items from list2 into list1, one by one:
for t in x:
    s.append(t)
print(s)
################################# You can use the extend() method, the purpose of which is to add elements from one list to another list:
p = ["some item", 5]
s.extend(p)
print(s)
################################ The list() Constructor to make a new list from a tuple
f = list(("abc", "dfg"))
print(f)

# ############################### SPLIT METHOD #############################

text = "Today is a wonderful day"
i = text.split() # By default, the sperator will space, but we may add optional separators
print(i) # Will return a list: ['Today', 'is', 'a', 'wonderful', 'day'] 

# Multiple spaces will be treated as one delimetre

a = text.split("d") # Using an optional delimetre
print(a) # Will return ['To', 'ay is a won', 'erful ', 'ay']

l = a[0].split("o") # We may further split the a list's first item with an o delimetre
l.pop() # Removing the last empty item
print(l)