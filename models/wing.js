// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var wing = {
  all: function(cb) {
    orm.all("wings", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("wings", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("wings", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("wings", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (wingsController.js).
module.exports = wing;
