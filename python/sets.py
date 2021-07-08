# https://www.w3schools.com/python/python_sets.asp

################## SETS ###############
# A set is a collection which is unordered and unindexed. In Python sets are written with curly brackets.

x= {"JUK", "BLOCH", "VOCHIL"}
# We may see that the set items are typed in an unordered way, i.e. the juk is not printed as the first item. We cant predict which item will be printed as the first item.
print(x)
print(type(x))

################################## Access Items ####################################
################################## You cannot access items in a set by referring to an index or a key. ################################

################################## Loop ############################
########################  You can loop through the set items using a for loop, or ask if a specified value is present in a set, by using the in keyword.

for i in x:
    print(i)

print("JUK" in x) # Will return true

# ##################################### Change Items ###########################
# Once a set is created, you CANNOT CHANGE its items, BUT you can ADD new items.

##################### ADD ITEMS #######################
x.add("TARAKAN")
print(x)

################## ADD MULTIPLE ITEMS ##################

x.update(["Valod", "MKO"])
print(x)

######################################## Remove Item ##############################
# To remove an item in a set, use the remove(), or the discard() method.

x.remove("Valod") ### If the item to be removed doesn't exist, remove() will raise an error
print(x)

x.discard("Valodik") ### On the other hand, if the item to be removed doesnt exist, discard will NOT raise an error
print(x)

####################### Remove a Random Item #####################
y = x.pop()
print(x)
print(y) # will return the removed item

####################### Clear sets #####################
x.clear() # Clears the set, but doesnt delet it
print(x) # will return an empty set
x.update(["Valod", "MKO"]) # Updates it with the given list
print(x)

################################### Join Two Sets
# There are several ways to join two or more sets in Python.
# You can use the union() method that returns a new set containing all items from both sets, or the update() method that inserts all the items from one set into another:

z = {"Apple", "Mapple"}
o = x.union(z)
print(o)
############## Join via update
t = {"Bum", "Bumik"}
o.update(t)
print(o)

# ######################################## Note: Both union() and update() will exclude any duplicate items. #############################


########################### set() constructor ##########################

tple = ("YO", "YUHA") ###############
r = set(tple)
print(type(tple))
print(type(r))


############ See more methods here https://www.w3schools.com/python/python_sets.asp