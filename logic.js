  // Here we grab the text from the input box
  var movie = $("#movie-input").val().trim();

  // Here we construct our URL
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";


function displayMovieInfo(){
 // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    })
//store all of the retrieved data in object "response"
    .then(function(response) {
        
 // Retrieving the URL for the image
  var imgURL = response.Poster;
  
 // Creating an element to hold the image
  var image = $("<img>").attr("src", imgURL);

// Appending the image
 $("#movie-view").prepend(image);

// $(".suggestedMovies").addClass("hide");
   
});
}
//on click starts movie search
$("#find-movie").on("click", function(event) { 
 event.preventDefault();
 
 displayMovieInfo();
});