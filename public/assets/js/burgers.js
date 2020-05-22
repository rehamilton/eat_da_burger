$(function() {
    $(".change-state").on("click", function(event) {
        //identify record to be targeted
       let id = $(this).data("id");
       let newEaten = $(this).data("newstate");

    
       let newEatenState = {
            eaten: newEaten
        };

        console.log(newEaten);
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function() {
            console.log("changed state to", newEaten);
            
            location.reload();
            }
        );
    });
  
    //Submit to POST
    $(".burger-form").on("submit", function(event) {
      
        event.preventDefault();
        //Get data to be sent to database
        let newBurger = {
            burger: $("#bu").val().trim(),
            eaten: 0
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
            console.log("created new burger");
            
            location.reload();
            }
        );
    });
  
    //Throw out button - DELETE
    $(".delete-burger").on("click", function(event) {
        //identify record to be targeted
        var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function() {
            console.log("deleted burger", id);
            // Reload
            location.reload();
            }
        );
    });
});
  