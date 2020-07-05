//Home page music and movies

//Top releases
var queryURL = "https://itunes.apple.com/search?term=soundtracks&limit=5&entity=album";

  $.ajax({
    url: queryURL,
      method: "GET",
  }).then(function(response){
    results1 = JSON.parse(response);
    musicRes = results1.results;

for(var i=0;i<6;i++){
    var artist = musicRes[i].collectionName;
    var topRated = $("<div>").attr("class","card");
    var albumURL = musicRes[i].artworkUrl100;
    var body = $("<div>").attr("class","card-body");
    var albumName = $("<h6>").attr("class","card-title").text(artist)
    var iTunes = $("<a>").attr({
      href: musicRes[i].collectionViewUrl,
      target: "_blank"
  })
     
     var image = iTunes.prepend($("<img>").attr({
                src: albumURL,
                class: ["card-img-top"+" "+"albums"],
                alt: artist
                }));

    topRated.prepend(image)

    
    body.append(albumName);

    topRated.append(body)
    $(".topRated").append(topRated)
  }
  });

// ================================

  //Disney releases
  var queryURL = "https://itunes.apple.com/search?term=disney&limit=5&entity=album";

  $.ajax({
    url: queryURL,
      method: "GET",
  }).then(function(response){
    results1 = JSON.parse(response);
    musicRes = results1.results;

for(var i=0;i<6;i++){
    var artist = musicRes[i].collectionName;
    var topRated = $("<div>").attr("class","card");
    var albumURL = musicRes[i].artworkUrl100;
    var body = $("<div>").attr("class","card-body");
    var albumName = $("<h6>").attr("class","card-title").text(artist)
    var iTunes = $("<a>").attr({
      href: musicRes[i].collectionViewUrl,
      target: "_blank"
  })
     
     var image = iTunes.prepend($("<img>").attr({
                src: albumURL,
                class: ["card-img-top"+" "+"albums"],
                alt: artist
                }));

    topRated.prepend(image)

    
    body.append(albumName);

    topRated.append(body)
    $(".disney").append(topRated)
  }
  });

  // ================================

  //Instrumental releases
  var queryURL = "https://itunes.apple.com/search?term=soundtrack+movie+instrumental&limit=5&entity=album";

  $.ajax({
    url: queryURL,
      method: "GET",
  }).then(function(response){
    results1 = JSON.parse(response);
    musicRes = results1.results;

for(var i=0;i<6;i++){
    var artist = musicRes[i].collectionName;
    var topRated = $("<div>").attr("class","card");
    var albumURL = musicRes[i].artworkUrl100;
    var body = $("<div>").attr("class","card-body");
    var albumName = $("<h6>").attr("class","card-title").text(artist)
    var iTunes = $("<a>").attr({
      href: musicRes[i].collectionViewUrl,
      target: "_blank"
  })
     
     var image = iTunes.prepend($("<img>").attr({
                src: albumURL,
                class: ["card-img-top"+" "+"albums"],
                alt: artist
                }));

    topRated.prepend(image)

    
    body.append(albumName);

    topRated.append(body)
    $(".instrument").append(topRated)
  }
  });

// ================================

//Movie Search
function displayMovieInfo() {

    var movie = $("#search-input").val();
    var queryURL = "https://www.omdbapi.com/?s=" + movie + "&apikey=6f8c5e73";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
  
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
  }}
)};

// ================================

// Search button for movie
$("#searchBtn").on("click", function(event) {
    event.preventDefault();
    $("#movieNmusic").empty();
    $("#justMusic").empty();
    $("#test").removeClass("hide");
    localStorage.clear();
    $("#test").empty();
    displayMovieInfo();
    $("#search-input").val("");
});

// SoundTrack search after clicking poster
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

 // Hide Test div
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

    var artist = musicRes[i].collectionName;
    var albumName = $("<h5>").attr("class","card-title").text(artist)

    var iTunes = $("<a>").attr({
      href: musicRes[i].collectionViewUrl,
      target: "_blank"
  })
     
     var albumCover = iTunes.prepend($("<img>").attr({
                src: albumURL,
                class: ["albums"],
                alt: artist
                }));


    albums.append(albumName, albumArtist, albumCover);
  }})
});