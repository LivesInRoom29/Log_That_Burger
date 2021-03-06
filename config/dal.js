// Organize methods to apply SQL queries

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

    selectAll(tableInput) {
        return this.query(`SELECT * FROM ${tableInput}`);
    };

    insertOne(table, columns, values) {
        const queryString = `INSERT INTO ${table} (${columns}) VALUES (?)`
        return this.query(queryString, values);
    };

    updateOne(table, columnEqlVal, condition) {
        const queryString = `UPDATE ${table} SET ${columnEqlVal} WHERE id = ${condition}`;
        return this.query(queryString);
    };

    deleteOne(table, condition) {
        const queryString = `DELETE FROM ${table} WHERE id = ${condition}`;
        return this.query(queryString);
    };
}

module.exports = DAL;