// Make a get request to our api route that will return every book
$.get("/api/all", function(data) {
  // For each book that our server sends us back
  for (var i = 0; i < data.length; i++) {
    // Create a parent div to hold book data
    var section = $("<div>");
    // Add a class to this div: 'well'
    section.addClass("well");
    // Add an id to the well to mark which well it is
    section.attr("id", "book-well-" + i);
    // Append the well to the well section
    $("#well-section").append(section);

    // Now  we add our book data to the well we just placed on the page
    $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].name + "</h2>");
    $("#book-well-" + i).append("<h3>Author: " + data[i].ingredients + "</h4>");
    $("#book-well-" + i).append("<h3>Genre: " + data[i].category + "</h4>");
    $("#book-well-" + i).append("<h3>Pages: " + data[i].content + "</h4>");
  }
});