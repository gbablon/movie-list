// Exercise 2: Define moviesArray here
var moviesArray;

/*
 * Clears out the list of movies shown on the web page. Then loops through
 * each movie in moviesArray and adds it to the web page by calling the 
 * showMovie() helper function.
 */
function showMovieList() {
    // Clear out the movie list first
    $("#movieListElement").empty();
    
    // Exercise 3: Loop through each movie in the array and show it
    // by calling the showMovie() function
}

/*
 * Takes a movie name as an argument, and removes that movie from moviesArray 
 * (if it's found there).
 */
function removeMovieFromList(movie) {
    // Exercise 4: Finish this function
}

function suggestMovie() {
    var randomIndex = Math.floor(Math.random() * moviesArray.length);
    alert("You should watch... " + moviesArray[randomIndex] + "!");
}

/* 
 * You shouldn't need to edit anything below this line, though you're more than
 * welcome to look through it to understand what's going on!
 */

function showMovie(movie) {
    var listElement = "<input type=\"checkbox\" class=\"sawMovieInput\" value=\"" + movie + "\">&nbsp;" + movie + "<br />";
    $("#movieListElement").append(listElement); 
}

$(document).ready(function() {
    showMovieList();
    
    $("#addMovieForm").on("submit", function(e) {
        // Prevent the form from reloading the page
        e.preventDefault();
        
        // Get the new movie name from the input box
        var movieName = $("#addMovieInput").val();
        
        // Check that the movie name isn't empty, then add it to the array, and refresh the list
        if(movieName != "") {
            moviesArray.push(movieName);
            $("#addMovieInput").val("");
            showMovieList();
        }
    });
    
    $("body").on("change", ".sawMovieInput", function(e) {
        if(e.target.checked) {
            removeMovieFromList($(e.target).val());
            showMovieList();
        } 
    });
    
    $("#suggestMovieButton").on("click", function() {
        suggestMovie();
    })
    
});