const mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root1234",
        database: "burgers_db"
    });
};

connection.connect((err) => {
    if (err) {
        console.error(`Error connecting: ${err.stack}`);
    }
    console.log(`Connected to databse, connection id: ${connection.threadId}`);
});

module.exports = connection;