    var Giphys;
    
   // Function to empty out the Giphyss
   function clear() {
     $("#Giphys-section").empty();
   }
   
   // CLICK HANDLERS
   // ==========================================================
   
   
   $("#run-search").on("click", function(event) {
     
     event.preventDefault();
     var searchTerm = $("#search-term").val().trim();
     console.log(searchTerm)
   
     
     clear();

     $.ajax({
      url: "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=i5u86hxDFgUmIDDbuFDZ6vsL4wBLI8B6",
      method: "GET"
    }).then(function (response) {
      var searchLimit = $(".custom-select").val()
      for (let i = 0; i < searchLimit; i++) {
      console.log(response.data[i].images)
      var searchImg = response.data[i].images.downsized_medium.url
      var img = $("<img>");
      img.attr("src",searchImg) 
      $("#Giphys-section").append(img)

      }
    });
    
     
   });
   
 
   $("#clear-all").on("click", clear);
  