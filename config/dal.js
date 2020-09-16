//instructions:In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

// selectAll()
// insertOne()
// updateOne()

class DAL {
    // Import mySQL connection when class is instantiated
    connection;

    constructor(connection) {
        this.connection = connection
    }

    // query as a promise
    query = (queryString, values) => {
        return new Promise((resolve, reject) => {
            this.connection.query(queryString, values, function(err, result) {
                if (err) reject(err);
                resolve(result);
            });
        });
    };

    selectAll() {
        return this.query('SELECT * FROM burgers')
    };

    insertOne(burger) {
        const queryString = `INSERT INTO burgers (burger_name) VALUES (?)`
        return this.query(queryString, [burger]);
    };

    updateOne(id) {
        const queryString = `UPDATE burgers SET devoured = 1 WHERE ?`
        return this.query(queryString, [`id = ${id}`]);
    }
}

module.exports = DAL;