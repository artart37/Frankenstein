for x in "John Smith": # It will loop even through a string
    print(x)

y = ("John", "Doe")
op = ["BBC", "CNN", "ABC"]

for z in y: #Looping through a tuple
    print(z)

for w in op: # Looping through a list
    print(w)

############ With an If statement
for w in op:
    if w == "CNN":
        break #################### In Order to break the loop we use break. As Soon as break is met, the loop will stop.
  #      print("Found CNN") This will be unreachable.

for w in op:
    if w == "CNN":
        continue #################### Opposite to break, With the continue statement we can stop the current iteration of the loop, and continue with the next iterable.
   #     print("Found CNN") Will again be unreachable, because as soon as CNN is met, the iteration will stop, but continue again from the begining.


################### Using ELSE with for
# The else keyword in a for loop specifies a block of code to be executed when the loop is finished:
b = range(5)
for i in b:
    print(i)
else:
    print("Finally Finished")

# Nested Loops
# A nested loop is a loop inside a loop.
# The "inner loop" will be executed ONE time for EACH iteration of the "outer loop":
colour = ["red", "yellow"]
fruits = ["apple", "banana"]
for i in colour:
    for y in fruits:
        print(i, y) # So We will have red apple, red banana, yellow apple, yellow banana

# ########################################## The pass Statement
# for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.
for i in ["a", "b"]:
    pass

############ JUST A RANDOM TEST CODE ###############
e = ["abc","John","Steve", "Bob"]

for i in e:
    print(e.index(i), i)