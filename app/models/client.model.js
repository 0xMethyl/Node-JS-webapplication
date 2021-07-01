const sql = require("./db.js");
var url = require("url");

// constructor
const Client = function(Client) {
  this.name = Client.name;
  this.user_psw = Client.user_psw;
};

const Order = function(Order) {
  this.id_order= Order.id_order;
  this.id_client = Order.id_client;
  this.dt_order = Order.dt_order;
  this.dt_delivery = Order.dt_delivery;
  this.nb_items = Order.nb_items;
};


Client.findAllClients = result => {
  sql.query("SELECT * FROM client", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("clients: ", res);
    result(null, res);
  });
};

Order.findAllOrders = result => {
  sql.query("SELECT * FROM orders", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("clients: ", res);
    result(null, res);
  });
};

Client.addOrders = (id_client, ord_items, result) => {
  console.log("test addOrder-model");
  console.log("id_client requested : " + id_client);
  console.log("ord_items requested : " + ord_items); // %5B%7B%22code_barre%22%3A3%2C%20%22qty%22%3A12%7D%2C%20%7B%22code_barre%22%3A2%2C%20%22qty%22%3A13%7D%5D
  sql.query("call procAddOrd (" + id_client + ", '" + ord_items + "', @resultat); select @resultat;", (err, res) => { // id:1 [{"code_barre":3, "qty":12}, {"code_barre":2, "qty":13}]
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    result(null, res);
  });
};



Client.create = (newClient, result) => {
  sql.query("INSERT INTO client SET ?", newClient, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created Client: ", { id: res.insertId, ...newClient });
    result(null, { id: res.insertId, ...newClient });
  });
};

Client.findOne = (ClientId, result) => {
  sql.query(`SELECT * FROM client WHERE id_client = ${ClientId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      console.log("found Client: ", res[0]);
      result(null, res[0]);
      return;
    }
    // not found Client with the id
    result({ kind: "not_found" }, null);
  });
};


Client.updateById = (id, Client, result) => {
  sql.query(
    "UPDATE client SET name = ?, user_psw = ? WHERE id = ?",
    [Client.name, Client.user_psw, id],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found Client with the id
        result({ kind: "not_found" }, null);
        return;
      }

      
      console.log("Updated Client: ", { id: id, ...Client });
      result(null, { id: id, ...Client });
    }
  );
};

Client.remove = (id, result) => {
  sql.query("DELETE FROM client WHERE id_client = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Client with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("Deleted Client with id: ", id);
    result(null, res);
  });
};

Client.removeAll = result => {
  sql.query("DELETE FROM client", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`Deleted ${res.affectedRows} clients`);
    result(null, res);
  });
};

module.exports = Client;