const pgp = require('pg-promise')();

console.log('db config file loaded');

const connectionOptions = {
  host: 'localhost',
  port: 5432,
  database: 'postgres',
  user: 'postgres',
  password: process.env.POSTGRES_DB_PW,
};

const db = pgp(connectionOptions);

module.exports = db;
