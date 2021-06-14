module.exports = app => {
    const clients = require("../controllers/client.controller.js");
    
    
    // Create a new Client
    app.post("devapi/CreateClient", (req, res) => { 
      connection.query("SELECT * FROM client", function (err, result, fields){
        if (err) throw err;
        res.json(result);
      });
    });
  
    // Retrieve all clients
    app.get("devapi/ShowClients", (req, res) => { 
      connection.query("SELECT * FROM client", function (err, result, fields){
        if (err) throw err;
        res.json(result);
      });
    });
  
    // Retrieve a single Client with ClientId
    app.get("devapi/FindClient/:id", (req, res) => { 
      connection.query("SELECT * FROM client WHERE id_client = " + req.params.id, function (err, result, fields){
        if (err) throw err;
        res.json(result);
      });
    });
  
    // Update a Client with ClientId
    app.put("devapi/UpdateClient/:id/:name/:user_psw", (req, res) => { 
      connection.query("UPDATE client SET name = " + req.params.name + "," + "user_psw = " + req.params.user_psw + " WHERE id_client = " + req.params.id, function (err, result, fields){
        if (err) throw err;
        res.json(result);
      });
    });
  
    // Delete a Client with ClientId
    app.delete("devapi/DeleteClient/:id", (req, res) => { 
      connection.query("DELETE * FROM client WHERE id_client = " + req.params.id, function (err, result, fields){
        if (err) throw err;
        res.json(result);
      });
    });
  
    // Delete all Clients
    app.delete("devapi/DeleteClients", (req, res) => { 
      connection.query("DELETE * FROM client", function (err, result, fields){
        if (err) throw err;
        res.json(result);
      });
    });

    // Get Version Routes

    var d = Date()

    app.get("/devapi/GetVersion", (req, res) => {
      res.json({ message: "Version 1.0 of webservice, " + d});
    });

    app.post("/devapi/GetVersion", (req, res) => {
      res.json({ message: "Version 1.0 of webservice, " + d});
    });
  };
