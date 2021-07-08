# ############################  Dictionary
# A dictionary is a collection which is UNORDERED, CHANGEABLE and INDEXED. In Python dictionaries are written with curly brackets, and they have keys and values.

x = {
    "name": "John Smith",
    "position": "Lecturer",
    "status": "Single",
    "age": 30,
}

print(x)
print(x["name"])
print("name" in x) # Checks if keys exists

###################### There is also a method called get() that will give you the same result:
print(x.get("position"))

##########################  Change Values
# You can change the value of a specific item by referring to its key name:
x["age"] = 25
print(x)

######################### Loop Through a Dictionary
# You can loop through a dictionary by using a for loop.
# When looping through a dictionary, the return value are the keys of the dictionary, but there are methods to return the values as well.
for i in x:
    print(i) # Returns the keys

for i in x:
    print(x[i]) # Prints all the values

for i in x.values(): # Loops through vallues
    print(i)

for i in x.items():
    print(i) # Print bothe keys and values as tuples

# ############################ Adding Items ######################
# Adding an item to the dictionary is done by using a new index key and assigning a value to it:

x["salary"] = 5000 # Will adda new key and value to the dictionary
print(x)

# ##################### Removing Items ###################
# There are several methods to remove items from a dictionary:

x.pop("name") # Will delete the key name along with its value
print(x)

x.popitem() # Removes the last key value
print(x)

del x["position"] # Deletes the key position along with its values
print(x)

####################### del x ########## This delete the whole dictionary

############### Clear Dictionary ##############
x.clear() # Emties the dictionary
print(x)
# Adding to the dictionary
x["name"] = "John Smith" 
x["position"] = "Lecturer"
print(x)

################## Copy a Dictionary ###################
t = x.copy()
print(t)
######### OR through th ebuilt in function dict()
z = dict(t)
print(t)

################ Nested Dictionaries ##################
child1 = {
  "name" : "Emil",
  "year" : 2004
}
child2 = {
  "name" : "Tobias",
  "year" : 2007
}
child3 = {
  "name" : "Linus",
  "year" : 2011
}

myfamily = {
  "child1" : child1,
  "child2" : child2,
  "child3" : child3
}

print(myfamily["child1"]["year"]) # Will return the child1 keys year keys value

# ################## The dict() Constructor
# It is also possible to use the dict() constructor to make a new dictionary:

createdict = dict(brand="Ford", make="Juk", year=1964)
print(createdict)

################ SEE MORE METHODS https://www.w3schools.com/python/python_dictionaries.asp

###################### for loops ##############

qa = {
    "name": "John Smith",
    "position": "Lecturer",
    "status": "Single",
    "age": 30,
}

for i in qa:
  print(i) # Will print the keys

for i in qa.keys():
  print(i) # Will print the keys

for i in qa.values():
  print(i) # Will print values

for i in qa.items():
  print(i) # Will print both keys and values as tuples

for keys, values in qa.items(): # We may use two iterables within for which will correspond to keys and values
  print(keys, values)

################# Key Value pairs as Tuples with Dictionaries ################
yo = {"title":"Mr", "name":"John", "surname":"Smith", "position":"Head of Claims"}

for (k,v) in yo.items():
  print(k,v)
print(yo.items()) # Will return a list of key and value tuples
