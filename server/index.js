var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "PW"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to PW!");
});

connection.end()