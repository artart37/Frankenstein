filepath = "D:/Angular/my-app/python/Projects/"
filename = input("Enter the file name")
fullpath = filepath + filename +".txt"
emptydict = dict()                                                         
import re                                                                  

try:                                                                       
    with open(fullpath,"rt") as file_object:                               
        for lines in file_object:                                          
            lines=re.sub(r'[^\w\s]','',lines.rstrip().casefold())          
            wordslist=lines.split()                                        
            if len(wordslist)<1:                                           
                continue
            else:                                                          
                for items in wordslist:                                    
                    emptydict[items] = emptydict.get(items,0)+1            
except FileNotFoundError:                                                  
    print("File not found")
    quit()

lst = list()


############# A Longer Version ##########
# for key, value in emptydict.items():                                  
#     newtuple = (value, key)
#     lst.append(newtuple)
#     lst = sorted(lst, reverse=True)
############ A shorter version via list comprehesnion ###########
lst = sorted([(value, key) for key, value in emptydict.items()], reverse=True)
#################################################################
for k, v in lst[:10]:
    print(k,v)