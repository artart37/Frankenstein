# emptydict = dict()
# listofname = ["John", "john", "Steve", "Bob", "Marlin", "Jacob", "Bob", "Steve", "Francis", "Steve", "Marlin", "John"]
# for names in listofname:                      # For each name item in the list
#     if names not in emptydict:                # If the name item is not already in the dictionary
#         emptydict[names] = 1                  # Add it as a key and assign a value 1
#     else:                                     # Else
#         emptydict[names] +=1                  # If the name item is already there, add 1 to the value and assign it back
# print(emptydict)                              # Now we know which item name repeats how many times: {'John': 2, 'john': 1, 'Steve': 3, 'Bob': 2, 'Marlin': 2, 'Jacob': 1, 'Francis': 1}

# Using get to shorten the code

emptydict = dict()
listofname = ["John", "john", "Steve", "Bob", "Marlin", "Jacob", "Bob", "Steve", "Francis", "Steve", "Marlin", "John"]
for names in listofname:                           # For each name item in the list
    emptydict[names] = emptydict.get(names, 0) +1  # If the name item is already there, add 1 to it, else, if its not there add 1 to the default 0 value
print(emptydict)                                   # Now we know which item name repeats how many times: {'John': 2, 'john': 1, 'Steve': 3, 'Bob': 2, 'Marlin': 2, 'Jacob': 1, 'Francis': 1}

# get()
# Definition and Usage
# The get() method returns the value of the item with the specified key.

# Syntax
# dictionary.get(keyname, value)

# keyname	Required. The keyname of the item you want to return the value from
# value	Optional. A value to return if the specified key does not exist.
# Default value None
for i in range(1433):
    print("Vachik")