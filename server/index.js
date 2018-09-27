var express = require('express');
var mysql = require('mysql');

var app = express();

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//Get all albums from db
app.get("/getAlbums", (req, res, next) => {
  makeSQLRequest('SELECT * FROM albums').then((results) => {
    res.json(results);
  });
});

//Get all photos from an album
app.get("/getPhotos/:id", (req, res, next) => {
  makeSQLRequest('SELECT * FROM photos WHERE album = ' + req.params.id).then((results) => {
    res.json(results);
  });
});

//SQL related code below (maybe separate into different file)
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "PW"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to SQL...");
});

async function makeSQLRequest (query) {
  var promise = new Promise(function (resolve, reject) {
    connection.query(query, function (error, results) {
      if (error) throw error;
      resolve(results);
    });
  });
  return promise;
}

//Handle ctrl + C exits
process.on( 'SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  connection.end();
  process.exit( );
})