// The code in add.js handles what happens when the user clicks the "Add a book" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();console.log("Does this work?")
  // Make a newRecipe object
  var Recipe = {
    name: $("#name").val().trim(),
    ingredients: $("#ingredients").val().trim(),
    category: $("#category").val().trim(),
    content: $("#content").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", Recipe)
    // On success, run the following code
    .then(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#ingredients").val("");
  $("#category").val("");
  $("#content").val("");

});