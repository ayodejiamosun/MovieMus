  function displayMovieInfo() {

   var movie = $("#search-input").val();
   var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=6f8c5e73";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        
        console.log(response);
        

        $(".container").addClass("hide");

        for (var i = 0; i < response.Search.length; i++) {
            var posterURL = response.Search[i].Poster;
            var pPoster = $("<img>").attr("src", posterURL);

            var title = response.Search[i].Title
            var pTitle = $("<p>").text("Title: " + title);

            $("#test").append(pPoster, pTitle);
   
        }   
    });
  }
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    $("#test").empty();
    displayMovieInfo();
    $("#search-input").val("");

});

$("#test").click(function(){
  console.log(event.targer.id)
  var movieMusic = $("#movieMusic");
  var movie = event.target.id;
  var results = JSON.parse(localStorage.getItem(movie));
  console.log(results);

  $("#test").addClass("hide");
  movieMusic.removeClass("hide");
 var posterURL = results.poster;
 var pPoster = $("<img>").attr("src", posterURL);
 movieMusic.append(pPoster);$("#test").append(pPoster, pTitle);
});
