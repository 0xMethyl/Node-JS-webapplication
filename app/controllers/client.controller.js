const Client = require("../models/client.model.js");

// Create and Save a new Client
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Client
    const Client = new Client({
      name: req.body.name,
      user_psw: req.body.user_psw,
    });

    // Create a Order
    const Order = new Order({
      id_order: req.body.id_order,
      id_client: req.body.id_client,
      dt_order: req.body.dt_order,
      dt_delivery: req.body.dt_delivery,
      nb_items: req.body.nb_items
    });

  };

// Retrieve all clients from the database.
exports.findAll = (req, res) => {
  Client.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Clients."
      });
    else res.send(data);
  });
};

// Retrieve all Orders from the database.
exports.findAll = (req, res) => {
  Order.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Clients."
      });
    else res.send(data);
  });
};

// Update a Client identified by the ClientId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    Client.updateById(
      req.params.ClientId,
      new Client(req.body),
      (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Client with id ${req.params.ClientId}.`
            });
          } else {
            res.status(500).send({
              message: "Error updating Client with id " + req.params.ClientId
            });
          }
        } else res.send(data);
      }
    );
  };

// Delete a Client with the specified ClientId in the request

exports.delete = (req, res) => {
    Client.remove(req.params.ClientId, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Client with id ${req.params.ClientId}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Client with id " + req.params.ClientId
          });
        }
      } else res.send({ message: `Client was deleted successfully!` });
    });
  };

// Delete all clients from the database.

exports.deleteAll = (req, res) => {
    Client.removeAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Clients."
        });
      else res.send({ message: `All Clients were deleted successfully!` });
    });
}
