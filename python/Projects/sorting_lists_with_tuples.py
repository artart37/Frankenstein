############### Sorting by Keys ##############

d = {"a":1,"r": 5, "b": 89}
print(d.items()) # Will return dict_items([('a', 1), ('r', 5), ('b', 89)])
print(sorted(d.items())) # Will sort, based on keys: [('a', 1), ('b', 89), ('r', 5)]

############### Sorting by Values ##############

d = {"a":7456,"t": 123, "v": 789}
temporarylist = list()

for k, v in d.items():
    temporarylist.append((v,k)) # Reversing the places of our dict's values and keys within the list
print(temporarylist)
temporarylist = sorted(temporarylist, reverse=True) # Reverse =  true makes sorting descending. The sorted function works as usual, it simply is looking into the first item
print(temporarylist)