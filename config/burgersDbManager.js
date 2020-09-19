const DAL = require('./dal');
var connection = require('./connection');

module.exports = new DAL(connection);