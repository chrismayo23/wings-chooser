// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devoured: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/wings/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed devour to", newDevour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newWing = {
      flavor: $("#wi").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/wings", {
      type: "POST",
      data: newWing
    }).then(
      function() {
        console.log("created new wing");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-wing").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/wings/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted wing", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
