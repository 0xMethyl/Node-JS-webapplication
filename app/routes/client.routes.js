  module.exports = app => {
    const Client = require("../controllers/client.controller.js");
  
    // Retrieve all Client
    app.get("/devapi/getClients", Client.findAll);
  
    // Retrieve a single Client with ClientId
    app.get("/devapi/getOrders", Order.findAll);


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
