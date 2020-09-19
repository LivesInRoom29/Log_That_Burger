// Import the DAL (via the manaegr file) which interacts with the db
const dbManager = require('../config/burgersDbManager');

// create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
    all: function() {
        return dbManager.selectAll('burgers');
    },
    create: function(columns, values) {
        return dbManager.insertOne('burgers', columns, values);
    },
    update: function(columnEqlVal, condition) {
        return dbManager.updateOne('burgers', columnEqlVal, condition);
    },
    delete: function(condition) {
        return dbManager.deleteOne('burgers', condition);
    }
};

//Export at the end of the burger.js file.

module.exports = burger;