# TweetFeed
A project that will display Tweets in a Feed when I finished it :) 
Sadly, it does not completely work yet :( 
But it will soon! Pinky-Promise! 

## Prerequisites
You need to have mongoDB, nodemon and npm installed on your local machine. 
Make sure that you started your mongodb service. For me (Ubuntu 18.04) this works via 
`sudo systemctl start mongod`

## How to
This was tested on a Ubuntu System. The commands for Windows or MacOs might be different. 

`git clone` repository or check out master branch

### Backend

`cd TweetFeed`
`cd server`
`npm install`
`nodemon index.js`

Nodemon is a great tool for developing purposes. It restarts the server every time you make changes to the server + save them. That way you don't have to restart the server manually every time you save up some changes :) 

Please keep this terminal open. If you close it, nodemon will stop and your server will stop. You could open it in the background but you probably want to read Error Messages logged to the console here. 

You can check if the database is running by going to your browser and visiting "localhost:34576". If the page displays "Hello World!", you're good to go. 

### Frontend

In a new Terminal: 

`cd Tweetfeed`
`cd tweetfeed`
`npm install`
`npm start`

This should open a new tab in the browser with the frontend. If it doesn't, open a new tab and go to "localhost:34573". 
Browser should open.
Prototype should be working. 

## What to expect / How it works / The Vision

At the moment you will see a navbar with several items. 
`Mockup` is the page where you can access the database at the moment. You can upload the .txt-Files here and Drop the entire Database for debugging purposes. This page will also show you a table with all the users in the Database and a Link to their User-Profile. 

`User` is the Page for the User-Profile. At some point in the near future it will show you the UserId, UserName, the content of the "Follows"-Array and the own Tweets of the user. It will be possible to add new Users to the Follows-Array and remove them. It will also be possible to edit & delete your own Tweets, as well as post a new Tweet. 

`Follows` will contain a list of every person you are following at the moment. It will list their names, as well as a link to their user profiles. For the (working) MVP it will contain a DropDown with all the Users in the Database (considering that for MVP purposes I don't expect more than 20 people max. to be contained in the database). In future versions this DropDown should be swapped for a search bar. 

`Feed` is the center piece. It will fulfill the requirements of the excercise and show you your own Tweets, as well as the Tweets of the persons in your follows-Array in descending order. After completing the MVP I'd like to implement an option for infinite scrolling instead of using a table. 

## Future Improvements
Keep a look out into the "Issues" of this GitHub-Repo. I will raise new issues for improvement ideas there and update the open issues when I worked on the codebase. 

