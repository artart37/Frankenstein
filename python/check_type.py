####################### isinstance()
x = 1
if isinstance(x, int):
    print("Great! Our var is an ineteger")
elif isinstance(x, float):
    print("Great! Our var is a float")
else:
    print("I dont know what the heck this is.")
####################### Alternative approach
if type(x) == int:
    print("Hi, I am in inetegr")