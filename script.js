
function displayMovieInfo() {

    var movie = $("#search-input").val();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=6f8c5e73";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        // $(".test").text(JSON.stringify(response));
        console.log(response);
        
        $(".container").addClass("hide");

        var rating = response.Rated;
        var pRating = $("<p>").text("Rating: " + rating);

        var release = response.Released;
        var pRelease = $("<p>").text("Release Date: " + release);

        var plot = response.Plot;
        var pPlot = $("<p>").text("Plot: " + plot);

        var posterURL = response.Poster
        var pPoster = $("<img>").attr("src", posterURL);
 
        $("#test").prepend(pPoster, pRating, pRelease, pPlot);

    });

  }



$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    $("#test").empty();
    displayMovieInfo();

});

