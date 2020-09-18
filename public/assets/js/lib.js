$(document).ready(function() {
    $(".devour").click(function(event) {
        const id = $(this).data("id");
        //need to change the devoured property to true
    })

    // To create new burger when form is submitted
    $(".create-burger").on("submit", function(event) {
        console.log(`submitted`);
        //prevent default on submit
        event.preventDefault();

        const newBurger = {
            burger_name: $("#bname").val().trim()
            // don't set devoured - that's false by default
        }

        //send the POST request
        $.ajax("index/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log(`New burger - ${newBurger} - was created!`);
                location.reload(); // if time, find a better way to do this?
            }
        );
    });


});