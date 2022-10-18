const mysql = require ('mysql2/promise');

require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 9193999,
  database: 'FullCycle',
});

module.exports = connection