# While Loops are pretty much similar to the js while loop
i = 1
########################## THIS WILL RUN INFINATELY AS i is always greater than 0
# while i>0:
#     print(i)
############################# BREAKING THE LOOP ###################
while i>0:
    print(i)
    break ######## Breaks the loop

while i>0:
    print(i)
    i+=-1 ########### Assign and Adds -1 to i at the same time. Therefore, the code will run once, because we won't be meeting the if condition the next time

################### CONTINUE, ELSE and BREAK are used similar to the For loops, which you may see in our docs. ################
