## Typing Memory Game

This the first MERN stack app I have written.

Click on the Start Game button and you have 3 seconds the memorise the number.
Type the number in the box and click the submit button or hit enter.
The number will increase in length by one digit each time you get it right.
You will also have an extra second to memorise the longer number.

The scoreboard displays the top 10 all time scores

## Game Component

Because a new random number is added to the string each time, I have to ensure that the current version of it was stored in state. 
The purpose of the Do While loop was to ensure that there were never two consecutive digits that are the same.
Each time the string gets longer by a character, the player gets an extra second to memorise it.
I had the issue whereby I did not want the player to be able to copy and paste the number. I therefore learnt how to use the tCtx canvas library to turn it into an image. Of course, this does not stop the player taking a screenshot, but I ran out of ideas as to how to stop that!
![image](https://user-images.githubusercontent.com/18460931/166291132-11a96216-e8fe-484f-978c-b249d4766c56.png)

This part of the code simply retrieves the scoreboard and looks at the lowest current score to see whether the new attempt is good enough to feature in it.
![image](https://user-images.githubusercontent.com/18460931/166292215-ad7e45b0-fd12-41c6-a884-8099fec2777a.png)

## Scoreboard Component
I don't have much to say about this except I enjoyed learning how to use the key attribute when mapping over a list. I think it was also the first time I had used an HTML table for quite a long time!

![image](https://user-images.githubusercontent.com/18460931/166292554-dd35650c-7fdf-4ba1-9645-1c3a2b91bbac.png)

## Scoreboard Model
Just a simple model with two fields. One of the reasons I liked this project was that there were certain elements that could be kept very simple whilst I practiced other skills such as routing and mapping the data from the database.

![image](https://user-images.githubusercontent.com/18460931/166292889-7a43c04c-1ab5-4ffe-af14-ac7187e84cf9.png)

## Scoreboard Route
Again, not too much to say other than it was a thrill to see the save function work for the first time and see the data appear in the back end. I decided to apply the limit of 10 here, rather than permanently storing all of the scores and filtering out the 10 highest. I recognise that a more complex game with user accounts would likely require their game history to be fully stored. But for the purposes of this project I was happy just to store the 10 highest scores and remove any that got knocked off the bottom.

![image](https://user-images.githubusercontent.com/18460931/166292981-91e8d3f8-fe27-4d8a-84c3-695e41f0bd55.png)

## Conclusion
As a game, it's unlikely to take the world by storm and it looks pretty terrible... but it achieved its objective in allowing me to take what I had learnt about Node.js, Express & Mongoose and adapt them into my own project. There were some interesting unexpected challenges along the way, like turning the number into an image and working out when to enable and disable buttons, as well as working how to to detect when the enter key was pushed! These little extra tasks that appear are what make such a project more worthwhile than always sticking to tutorials.

## To Do List

Improve the design of the app. - Not done. Will it ever be..?<br />
Improve the scoreboard to include the date of the score. - Done<br />
Better messages to explain whether the user achieved a high score or didn't. - Done<br />
Redirect the user to the scoreboard page if they achieve a high score. - Done<br />
Ensure that the same digit is not used consecutively when generating the number. - Done<br />
