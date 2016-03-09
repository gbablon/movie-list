
#Exercise 1
First, notice how the project contains three code files:
- index.html is the actual web page
- js.js is where your Javascript code will live, to power the movie list
- styles.css is where your CSS styles will live
Start by linking the js.js and styles.css files from the index.html page.
Hint: You need to add to the <head> section of your HTML!

#Exercise 2
At the very top of the js.js file, define a new array called `moviesArray`.
Initialize the array so that it contains your three favorite movies.
To make sure things work properly, try printing your array with `console.log`. 

#Exercise 3
Let's start by actually showing our movies onto the web page!
First, take a look at the `showMovie()` function. What do you think it does?
Write down your answer here:
#
#
#

Next, finish the `showMovieList()` function so that it loops through each movie in `moviesArray`.
Inside the loop, call the `showMovie()` function, passing in the current movie
(ie. `moviesArray[i]`) as the argument to the function.

#Exercise 4
Next up, let's make it so that when a user clicks the checkbox next to a movie's name, 
that movie is removed from the list. To do this, finish the `removeMovieFromList()`
function.
Hint: You'll need to use the `indexOf()` and `splice()` Javascript functions. Look
them up if you're not sure how they work.

#Exercise 5:
Notice all the lines in the code that start with slashes, ie. `//` and `/*`? Those are comments. 
The computer ignores those lines when running your program. What do you think comments
are useful for? Write down your answer here:
#
#
#

#Exercise 6:
Sometimes, it's really hard to pick the right movie to watch! Maybe our program can help.
Finish the `suggestMovie()` function so that it picks a movie at random from `moviesArray`, 
and then use an `alert()` to show it to the user.
Hint: To pick a random movie, you need to generate a random number between 0 and 
the size of the array. Use `Math.random()` and `moviesArray.length`.

#BONUS:
Change the HTML & CSS to make your application look better! Think about changing the fonts, 
colors, and background. Or change your page heading, or add some text to it to make it yours.