// User search for single recipe
$("#search-btn").on("click", function(event) {
  event.preventDefault();
  var recipeSearch= $("#recipe-search").val().trim();
// AJAX get request to our api, including the user's recipe in the url
  $.get("/api/recipes/" + recipeSearch, function(data) {
    console.log(data);
    renderRecipes(data);
  });
});

// When user hits the author-search-btn
$("ingredient-search-btn").on("click", function(event) {
  event.preventDefault();
  var ingredientSearch = $("#ingredient-search").val().trim();
// Make an AJAX get request to our api, including the user's author in the url
  $.get("/api/recipes/" + ingredientSearch, function(data) {
    console.log(data);
    renderRecipes(data);
    });
});

// When user hits the genre-search-btn
$("#category-search-btn").on("click", function() {
  
  var categorySearch = $("#category-search").val().trim();
// Make an AJAX get request to our api, including the user's genre in the url
  $.get("/api/recipes/" + categorySearch, function(data) {
      console.log(data);
// Call our renderBooks function to add our books to the page
    renderRecipes(data);
    });
});

function renderRecipes(data) {
  // if (data.length !== 0) {

    // $("#stats").empty();
    $("#stats").show();

    for (var i = 0; i < data.length; i++) {

      var div = $("<div>");

      div.append("<h2>" + data[i].name + "</h2>");
      div.append("<p>Author: " + data[i].ingredient + "</p>");
      div.append("<p>Genre: " + data[i].category + "</p>");
      div.append("<p>Pages: " + data[i].content + "</p>");
      div.append("<button class='delete' data-id='" + data[i].id + "'>DELETE BOOK</button>");

      $("#stats").append(div);

    }

    $(".delete").click(function() {
      event.preventDefault();
      $.ajax({
        method: "DELETE",
        url: "/api/recipes/" + $(this).attr("data-id")
      })
      .then(function() {
        console.log("Deleted Successfully!");
      });

      $(this).closest("div").remove();

    });

  }
// }
