const express = require("express");
const bodyParser = require("body-parser");
const http = require("http");
const fs = require('fs');
const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get("/", (req, res) => {
  res.json({ message: "Welcome to node webapplication." });
});
*/

var server = http.createServer(function(req, res){

  console.log(req.url + " is Requested.");
  res.writeHead(200, {'Content-Type': 'text/html'});
  var readStream = fs.createServer(__dirname + '/index.html', 'utf8');
});



// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
