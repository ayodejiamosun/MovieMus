  // Here we grab the text from the input box
  var movie = $("#search-input").val().trim();

  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

//This is the function that will display the movie typed
function displayMovieInfo(){
  
 // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })
//store all of the retrieved data in object "response"
    .then(function(response) {

//console out the object "response"
      console.log(response);

//Hide featured sound tracks
  $(".container").addClass("hide");
        
//for loop to go through all the options
  for (var i = 0; i < response.Search.length; i++) {

    //Retrieving the URL for the image
    var posterURL = response.Search[i].Poster;
    //create an element to hold the image
    var pPoster = $("<img>").attr("src", posterURL);

    //Retrieve the URL for the title
    var title = response.Search[i].Title
    //create an element to hold the title
    var pTitle = $("<p>").text("Title: " + title);

    //Ass
    $("#test").append(pPoster, pTitle);

}   
 
// Appending the image
 $("#movie-view").prepend(image);
 
// $(".suggestedMovies").addClass("hide");
   
});
}
//---------------------------------------

//on click starts movie search
$("#searchBt").on("click", function(event) { 
 event.preventDefault();

 //clear previous searches
 $("#test").empty();
 //show movie and info
 displayMovieInfo();
 //
 $("#search-input").val("");
});