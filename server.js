// Dependencies
const mysql = require('mysql');
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

// ***** To be moved to a separate file
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: ""
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to databse, connection id: ${connection.threadId}`);
});
//************* */

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });


