#!/usr/bin/env python3
from array import *

#open the user file
userFile=open("user.txt", "r")
if userFile.mode=='r':
    #read file content
    #userContent = userFile.read()
    #read single lines
    usersLine = userFile.readlines()
    #print "Name of file read: ", userFile.name
    for x in usersLine:
        users = str(x)
        print(users)
userFile.close()



userFile = open("user.txt", "r")
users = set()

if userFile.mode == 'r':
    usersLine = userFile.readlines()
    usersAndFollows = []
    i = 0
    for line in usersLine:
        tmp = line.partition(' follows ')
        if tmp[1] != '':
            usersAndFollows.insert(i, tmp)
            i++


users = {
    "userName" : "",
    "follows" : "",
    "tweets" : ""
}

usersList = []
i = 0

users_File = open("user.txt", "r")
user_Lines = users_File.readLines()

for line in user_Lines:
    subLine = line.partition(' follows ')
    users["userName"] = subLine[0]
    users["follows"] = subline[2]





removeDuplicateUsers(usersAndFollows)

def removeDuplicateUsers(listofElems):
    #remove duol

def checkIfDuplicates(listOfElems):
    #Check it given list contains duplicates
    if len(listOfElems) == len(set(listOfElems)):
        return False
    else:
        return true



T = [[1.1,1.2,1.3], [3.1, 3.2, 3.3], [4.1, 4.2, 4.3]]
T.insert(2, [2.1, 2.2, 2.3])

for r in T:
    for c in r:
        print(c, end = " ")
    print()




#open the tweet file
tweetFile=open("tweet.txt", "r")
if tweetFile.mode=='r':
    #read file content
    #tweetContent = tweetFile.read()
    #read single lines
    tweetContentsLine = tweetFile.readlines()
    #print "Name of file read: ", tweetFile.name
    for y in tweetContentsLine:
        tweets = str(y)
        print(tweets)
tweetFile.close()

# Arrays
#usersAndFollows = []

#usersAndFollos.sort()


# what to do:
# expected output

#Kent
#   @Michael: Flash loans are amazing
#   @Kent: Eth is the future
#   @Michael: DeFi will change the traditional banking system

#Michael
#   @Michael: Flash loans are amazing
#   @Michael: DefI will challenge the traditional banking system

#Veronica
