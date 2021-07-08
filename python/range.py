# Syntax
# range(start, stop, step)
# Parameter Values
# Parameter	Description
# start	Optional. An integer number specifying at which position to start. Default is 0
# stop	Required. An integer number specifying at which position to stop (not included).
# step	Optional. An integer number specifying the incrementation. Default is 1

x= range(6)
y = range(1,5)
q = range(1,8,2)
# Create a sequence of numbers from 0 to 5, and print each item in the sequence:
for i in x:
    print(i)
# Create a sequence of numbers from 0 to 5, and print each item in the sequence:
for i in y:
    print(i)
# Create a sequence of numbers from 1 to 8, iterate by two, and print each item in the sequence:
for t in q:
    print(t)
############################# Range returns a List. so we may access it a s a list.

w = range(5)
print(w[-1]) ######### Returns the last value: 4, because 5 is excluded