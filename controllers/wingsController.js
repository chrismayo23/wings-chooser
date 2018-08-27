var express = require("express");

var router = express.Router();

// Import the model (wing.js) to use its database functions.
var wing = require("../models/wing.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  wing.all(function(data) {
    var hbsObject = {
      wings: data
    };
    res.render("index", hbsObject);
  });
});

router.get("/api/wings", function(req, res) {
  wing.all(function(data) {
    var hbsObject = {
      wings: data
    };
    res.json(hbsObject);
  });
});

router.post("/api/wings", function(req, res) {
  wing.create([
    "flavor", "devoured"
  ], [
    req.body.flavor, req.body.devoured
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/wings/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  wing.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/wings/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  wing.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
