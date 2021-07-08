# Strings can be iterated as arrays

x = " John Smith "

for i in x:
    print(i)
print(x[0])
print(x[0:2])
print(x.lower())
print(x.upper())
print(len(x))
print(x.lstrip()) # Stripping whitespaces from the left.
print(x.rstrip()) # Stripping whitespaces from the right.
print(x.strip()) # Stripping whitespaces from both sides.

if x.startswith(" John"):
    print("Checked it, appears it starts with John")

# Finding the position of a charchater
pos = x.find("John")
poss = x.find("h") # Starts from left
print(pos)
print(poss)
print(x.replace("John","Bob")) # does not change the original string
print(x.replace("o","x")) # does not change the original string
r = "His working email: somemail@.co.uk is hosted with some hoster"
posat = r.find("@") # Finding the position of @
print(posat)
spaceafterat = r.find(" ", posat) # Find the first space after @'s position
print(spaceafterat)
hosterget = r[posat+1: spaceafterat] # Find the text following after @. Because the last string is excluded we dont do +1 in th elast string
print(hosterget)

hayeren = u"Հայոց լեզու" # Telling python its a unicode text
print(hayeren)



