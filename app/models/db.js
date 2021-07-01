const mysql = require("mysql");
const dbConfig = require("../../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  multipleStatements: true,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  port: dbConfig.PORT
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
