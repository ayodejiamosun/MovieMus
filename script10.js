  function displayMovieInfo() {

   var movie = $("#search-input").val();
   var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=6f8c5e73";

 // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
      // Store retrieved data as "respnse"
    }).then(function(response) {
        
        console.log(response);
        
        // Hide container
        $(".container").addClass("hide");
        // Loop through response and append attributes
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
    });
  }
// Event listener for search button click
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    $("#test").empty();
    displayMovieInfo();
    $("#search-input").val("");

});
// Event listener for Movie poster
$("#test").click(function(){
  console.log(event.target.id)
  var movieMusic = $("#movieNmusic");
  var movie = event.target.id;
  var results = JSON.parse(localStorage.getItem(movie));
  console.log(results);
  var music = results.Title;
  var albums = $("#justMusic");
  console.log(music);
  
  // Add Title "SoundTracks"
  sTitle = $("<h1>").text("SoundTracks")
  albums.append(sTitle);
  $("#test").addClass("hide");

  // Show hidden divs
  movieMusic.removeClass("hide");
  albums.removeClass("hide");
 
    var posterURL = results.Poster;
    var pPoster = $("<img>").attr("src", posterURL);
    movieMusic.append(pPoster);

    var queryURL = "https://itunes.apple.com/search?term="+music+"&limit=6&entity=album";
// Second AJAX call for movie soundtrack data
  $.ajax({
    url: queryURL,
      method: "GET",
  }).then(function(response){
    results1 = JSON.parse(response);
    musicRes = results1.results;
    console.log(musicRes);

for(var i=0;i<6;i++){
    var albumURL = musicRes[i].artworkUrl100;
    var albumCover = $("<img>").addClass("soundTrackImg").attr("src", albumURL);
    
    var albumNam = musicRes[i].collectionName;
    var albumName = $("<h4>").text("Album Name: " + albumNam);

    var albumArt = musicRes[i].artistName;
    var albumArtist = $("<h6>").text("Artist: " + albumArt);

    // var albumY = musicRes[i].releaseDate;
    // var albumYear = $("<h6>").text("Year: " + albumY);

    albums.append(albumName, albumArtist, albumCover);
  }
  })
});
