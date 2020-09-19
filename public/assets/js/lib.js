$(document).ready(function() {


    // To create new burger when form is submitted
    $(".create-burger").on("submit", function(event) {
        //prevent default on submit
        event.preventDefault();

        // create the new object to use in the query using the input from the form
        const newBurger = {
            burger_name: $("#bname").val().trim()
            // don't set devoured - that's false by default
        }

        //send the POST request
        $.ajax("index/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(() => {
                console.log(`New burger - ${newBurger} - was created!`);
                //reload the page to see the updated list
                location.reload(); // if time, find a better way to do this?
            }
        );
    });

    $(".devour").on("click", function(event) {
        console.log($(this).data("id"));
        const id = $(this).data("id");
        //need to change the devoured property to true
        const newDevouredState = "devoured = 1";

        $.ajax(`/index/api/burgers/${id}`, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log(`Burger with id ${id} was devoured! Yum!`);
            //reload the page to see the updated list
            location.reload();
        })
    });

    $(".make-again").on("click", function() {
        console.log(this);
        console.log($(this).data("id"));
        const id = $(this).data("id");
        //need to change the devoured property to true
        const newDevouredState = "devoured = 0";

        $.ajax(`/index/api/burgers-make-again/${id}`, {
            type: "PUT",
            data: newDevouredState
        }).then(() => {
            console.log(`Burger with id ${id} was devoured! Yum!`);
            //reload the page to see the updated list
            location.reload();
        })
    });

    $(".delete-burger").on("click", function() {
        const id = $(this).data("id");

        $.ajax(`/index/api/burgers/${id}`, {
            type: "DELETE"
        }).then(() => {
            console.log(`Burger with id ${id} was deleted.`)
            location.reload();
        })
    })



});