module.exports = app => {
    const clients = require("../controllers/client.controller.js");
    
    
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

    // Get Version Routes

    var d = Date()

    app.get("/devapi/GetVersion", (req, res) => {
      res.json({ message: "Version 1.0 of webservice, " + d});
    });

    app.post("/devapi/GetVersion", (req, res) => {
      res.json({ message: "Version 1.0 of webservice, " + d});
    });

    // REST API Routes
    /*
    app.post("/devapi/CreateClient", (req, res) => {
      res.json({ message: "Create client route" });
    });

    app.get("/devapi/ShowClients", (req, res) => {
      res.json({ message: "Show clients route" });
    });

    app.get('/devapi/FindClient/:id', (req, res) => {
      res.json({ message: 'Find client route with id : ' + req.params.id});
    });

    app.put('/devapi/UpdateClient/:id', (req, res) => {
      res.json({ message: 'Update client route with id : ' + req.params.id});
    });

    app.delete('/devapi/DeleteClient/:id', (req, res) => {
      res.json({ message: 'Delete client route with id : ' + req.params.id});
    });
    */
  };
