    function searchForGif(){var queryURL = "https://api.giphy.com/v1/gifs/search?q="

       var queryParams = {"api-key": "i5u86hxDFgUmIDDbuFDZ6vsL4wBLI8B6"};
  
       queryParams.q = $("#search-term")
       .val()
       .trim();

     console.log("---------------\nURL: " + queryURL + "\n---------------");
     console.log(queryURL + $.param(queryParams));
     return queryURL + $.param(queryParams);
   }
   
    // @param {object} GiphyData 
   function updatePage(GiphyData) {
     
     var numGiphys = $("#Giphys-count").val();
   
     
     console.log(GiphyData);
     console.log("------------------------------------");
   
     for (var i = 0; i < numGiphys; i++) {

       var Giphys = GiphyData.response.docs[i];

       var GiphysCount = i + 1;

       var $GiphysList = $("<ul>");
       $GiphysList.addClass("list-group");

       $("#Giphys-section").append($GiphysList);
       console.log(Giphys.web_url);
       $GiphysList.append($GiphysListItem);
     }
   }
   
   // Function to empty out the Giphyss
   function clear() {
     $("#Giphys-section").empty();
   }
   
   // CLICK HANDLERS
   // ==========================================================
   
   
   $("#run-search").on("click", function(event) {
     
     event.preventDefault();
   
     
     clear();
   
     
     var queryURL = buildQueryURL();
   
     
     $.ajax({
       url: queryURL,
       method: "GET"
     }).then(updatePage);
   });
   
 
   $("#clear-all").on("click", clear);