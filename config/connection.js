const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root1234",
    database: "burgers_db"
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to databse, connection id: ${connection.threadId}`);
});

module.exports = connection;