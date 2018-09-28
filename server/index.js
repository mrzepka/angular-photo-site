var express = require('express');
var mysql = require('mysql');

var app = express();

<<<<<<< HEAD
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

=======
>>>>>>> 53cc0efb7116a2bec2b685a82c513b9db739cd04
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

//Get all albums from db
<<<<<<< HEAD
app.get("/getAlbums", async (req, res) => {
  const results = await makeSQLRequest('SELECT * FROM albums');
  res.json(results);
});

//Get all photos from an album
app.get("/getPhotos/:id", async (req, res) => {
  const results = await makeSQLRequest('SELECT * FROM photos WHERE album = ' + req.params.id);
  res.json(results);
=======
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
>>>>>>> 53cc0efb7116a2bec2b685a82c513b9db739cd04
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
<<<<<<< HEAD
  return new Promise(function (resolve, reject) {
=======
  var promise = new Promise(function (resolve, reject) {
>>>>>>> 53cc0efb7116a2bec2b685a82c513b9db739cd04
    connection.query(query, function (error, results) {
      if (error) throw error;
      resolve(results);
    });
  });
<<<<<<< HEAD
=======
  return promise;
>>>>>>> 53cc0efb7116a2bec2b685a82c513b9db739cd04
}

//Handle ctrl + C exits
process.on( 'SIGINT', function() {
  console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
  // some other closing procedures go here
  connection.end();
  process.exit( );
})