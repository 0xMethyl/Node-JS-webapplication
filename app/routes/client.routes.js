
  module.exports = app => {
    const Client = require("../controllers/client.controller.js");
  
    // Retrieve all Client
    app.get("/devapi/getClients", Client.findAllClients);
  
    // Retrieve all Orders
    app.get("/devapi/getOrders", Client.findAllOrders);

    // Add order with client id and Json
    /*
    app.get("/devapi/addOrder/:id", (req, res) => {
      if(isNaN(req.params.id)){
        console.log("NaN parameter on addOrder/" + req.params.id);
      } else{
        Client.addOrders;
      }
    });
    */

    // Get Version Routes

    var d = Date()

    app.get("/devapi/GetVersion", (req, res) => {
      res.json({ message: "Version 1.0 of webservice, " + d});
    });

    app.post("/devapi/GetVersion", (req, res) => {
      res.json({ message: "Version 1.0 of webservice, " + d});
    });

    // REST API Routes

    app.post("/devapi/CreateClient", (req, res) => {
      res.json({ message: "Create client route" });
    });

    app.get("/devapi/ShowClients", (req, res) => {
      res.json({ message: "Show clients route" });
    });

    app.get('/devapi/FindClient/:id', (req, res, next) => {
      var id = req.params.id;
      if(!isNaN(id)){
        next();
        return;
      }

      if(isNaN(id)){

        Client.findOne;
        
      }else{
          return;
        }
    });

    app.post('/devapi/addOrder', (req, res, next) => {
      var id = req.query.id_client;
      var ord_items = req.query.ord_items;
      if(!isNaN(id)){
        next();
        return;
      }
      console.log("test addOrder-route");
      console.log(ord_items);
      console.log(id);
    },
    Client.addOrders
    );

    app.get('/test', (req, res, next) => {
      var a = req.query.a;
      var b = req.query.b;

      console.log("parametre a = " + req.query.a);
      console.log("parametre b = " + req.query.b);
    })
    

    
    app.put('/devapi/UpdateClient/:id', (req, res) => {
      res.json({ message: 'Update client route with id : ' + req.params.id});
    });

    app.delete('/devapi/DeleteClient/:id', (req, res) => {
      res.json({ message: 'Delete client route with id : ' + req.params.id});
    });

  };