module.exports = app => {
    const clients = require("../controllers/client.controller.js");
  
    // Create a new Client
    app.post("/clients", clients.create);
  
    // Retrieve all clients
    app.get("/clients", clients.findAll);
  
    // Retrieve a single Client with ClientId
    app.get("/clients/:ClientId", clients.findOne);
  
    // Update a Client with ClientId
    app.put("/clients/:ClientId", clients.update);
  
    // Delete a Client with ClientId
    app.delete("/clients/:ClientId", clients.delete);
  
    // Create a new Client
    app.delete("/clients", clients.deleteAll);
  };