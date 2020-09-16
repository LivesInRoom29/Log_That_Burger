const DAL = require('./dal');
const connection = require('./connection');

module.exports = new DAL(connection);