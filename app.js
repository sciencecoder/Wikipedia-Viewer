$("button").on("click", function() {
   var input = $("#input").val(); 
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + input + "&limit=10&callback=?";
   $.getJSON(url, function(data) {
       $(".searchResult").html("");
 for(var i = 0; i < data[2].length; i++) {
       $(".searchResult").append("<div class='room col-md-12'>" + data[2][i] + "</div>");
       }
  
   })
   
})
