module.exports = app => {
    const clients = require("../controllers/client.controller.js");
  
    // Create a new Client
    app.post("devapi/CreateClient", clients.create);
  
    // Retrieve all clients
    app.get("devapi/ShowClients", clients.findAll);
  
    // Retrieve a single Client with ClientId
    app.get("devapi/FindClient/:ClientId", clients.findOne);
  
    // Update a Client with ClientId
    app.put("devapi/UpdateClient/:ClientId", clients.update);
  
    // Delete a Client with ClientId
    app.delete("devapi/DeleteClient/:ClientId", clients.delete);
  
    // Delete all Clients
    app.delete("devapi/Deleteclients", clients.deleteAll);
  };