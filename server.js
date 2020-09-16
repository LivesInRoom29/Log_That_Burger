// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Create an instance of the express app
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 7070;

app.use(express.static("/public")); // this is the folder it's going to look in for if it exists (for html script and style links)

// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give server access to them
const routes = require('./controllers/burgers_controller.js');

app.use(routes);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


