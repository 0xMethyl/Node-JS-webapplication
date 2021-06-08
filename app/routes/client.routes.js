module.exports = app => {
    const clients = require("../controllers/client.controller.js");
    
    /*
    // Create a new Client
    app.post("devapi/CreateClient", clients.create);
  
    // Retrieve all clients
    app.get("devapi/ShowClients", clients.findAll);
  
    // Retrieve a single Client with ClientId
    app.get("devapi/FindClient/:id", clients.findOne);
  
    // Update a Client with ClientId
    app.put("devapi/UpdateClient/:id", clients.update);
  
    // Delete a Client with ClientId
    app.delete("devapi/DeleteClient/:id", clients.delete);
  
    // Delete all Clients
    app.delete("devapi/Deleteclients", clients.deleteAll);
    */

    app.post('/devapi/CreateClient', function(req, res) {
      res.send('Create client route');
    });

    app.get('/devapi/ShowClients', function(req, res) {
      res.send('Show clients route');
    });

    app.get('/devapi/FindClient/:id', function(req, res) {
      res.send('Find client route with id : ' + req.params.id);
    });

    app.put('/devapi/UpdateClient/:id', function(req, res) {
      res.send('Update client route with id : ' + req.params.id);
    });

    app.delete('/devapi/DeleteClient/:id', function(req, res) {
      res.send('Delete client route with id : ' + req.params.id);
    });

    app.get('/devapi/ShowClients', function(req, res) {
      res.send('Delete clients route');
    });

  };