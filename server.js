// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of the express app
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 7070;

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


