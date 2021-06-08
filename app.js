const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("./app/routes/client.routes.js")(app); // Database Connection, routes, and REST API (db.js not linked !)

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to ENOVNOW webapplication." });
});

// set port, listen for requests
app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
