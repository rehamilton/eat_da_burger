// add to html here

$(function() {
    //PUT
    $(".change-state").on("click", function(event) {
        let id = $(this).data("id")
        const newState = $(this).data("newState")

        const newState = {
            eaten: newState
        }

        $.ajax("/api/burgers" + id, {
            type: "PUT",
            data: newState
        }).then(
            function() {
                console.log("changed state to " + newState);
                location.reload()
            }
        )
    })

    //POST
    $(".burger-form").on("submit", function(event) {
        event.PreventDefault()

        const newBurger = {
            burger: $("#bu").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        }

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created burger");

                location.reload()
            }
        )
    
    })

    //DELETE
    $(".delete-burger").on("click", function(event) {
        let id = $(this).data("id")

        $.ajax("/api/cats" + id, {
            type: "DELETE"
        }).then(
            function() {
                console.log("deleted burger " + id);

                location.reload()
            }
        )
    })
})