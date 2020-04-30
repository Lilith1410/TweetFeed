#!/usr/bin/env python3

from array import *

userContent = []
for line in open('user.txt', 'r'):
    userContent.append(line.readLine())

tweetContent = []
for line in open('tweet.txt', 'r'):
    tweetContent.append(line.readLine())

#Users
userSet = set()
for u in userContent:
    # ???
    userSet.add(userContent[u].partition(' follows ')[0])



# nochmal ganz neuer ansatz:
#!/usr/bin/env python3
from array import *

@dataclass
class User:
    name: str
    follows: List[str]

    def addFollows(self, element):
        self.follows.append(element)

@dataclass
class UL:
    userList: List[User]

    def addUser(self, element):
        self.userList.append(element)

@dataclass
class Tweet:
    author: str
    content: List[str]

    def addTweet(self, element):
        self.content.append(element)

@dataclass
class TL:
    tweetList: List[Tweet]

    def addTweet(self, element):
        self.tweetList.append(element)

userList = UL()
tweetList = TL()

for line in open('user.txt', 'r'):
    userString = line.partition(' follows ')
    user
    userList.addUser(user)

for u in userList:
    print(f'{u.name})

    for t in tweetList:
        if(t.author is in u.followsList || t.author == u.name):
            print(f'@{t.author}:{t.content})
