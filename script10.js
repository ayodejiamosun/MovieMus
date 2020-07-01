
function displayMovieInfo() {

    var movie = $("#search-input").val();
    var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=6f8c5e73";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        // $(".test").text(JSON.stringify(response));
        console.log(response);
        

        $(".container").addClass("hide");

        for (var i = 0; i < response.Search.length; i++) {
            var posterURL = response.Search[i].Poster;
            var pPoster = $("<img>").attr({
              src: posterURL,
              id: response.Search[i].Title+' '+response.Search[i].Year
            });

            var title = response.Search[i].Title
            var pTitle = $("<p>").text("Title: " + title);

            $("#test").append(pPoster, pTitle);

            localStorage.setItem(response.Search[i].Title+' '+response.Search[i].Year,JSON.stringify(response.Search[i]))

            
        }
        // var rating = response.Rated;
        // var pRating = $("<p>").text("Rating: " + rating);

        // var release = response.Released;
        // var pRelease = $("<p>").text("Release Date: " + release);

        // var plot = response.Plot;
        // var pPlot = $("<p>").text("Plot: " + plot);

        // var posterURL = response.Poster
        // var pPoster = $("<img>").attr("src", posterURL);
 
        // $("#test").prepend(pPoster, pRating, pRelease, pPlot);
        

    });

  }



$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    $("#test").empty();
    displayMovieInfo();
    $("#search-input").val("");

});

$("#test").click(function(){
  console.log(event.target.id)
  var movieMusic = $("#movieNmusic");
  var movie = event.target.id;
  var results = JSON.parse(localStorage.getItem(movie));
  console.log(results);
  var music = results.Title;
  var albums = $("#justMusic");
  console.log(music);

  $("#test").addClass("hide");
  movieMusic.removeClass("hide");
  albums.removeClass("hide");
    var posterURL = results.Poster;
    var pPoster = $("<img>").attr("src", posterURL);
    movieMusic.append(pPoster);

    var queryURL = "https://itunes.apple.com/search?term="+music+"&limit=6&entity=album";

  $.ajax({
    url: queryURL,
      method: "GET",
  }).then(function(response){
    results1 = JSON.parse(response);
    musicRes = results1.results;
    console.log(musicRes);

for(var i=0;i<6;i++){
    var albumURL = musicRes[i].artworkUrl100;
    var albumCover = $("<img>").attr("src", albumURL);
    albums.append(albumCover);
  }
  })
});