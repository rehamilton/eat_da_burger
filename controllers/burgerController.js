// create routes here
const express = require("express")
const router = express.Router()

const burger = require("../models/burger.js")


//get (/)
router.get("/", function(req, res) {
    burger.read(function(data) {
      const burgerlist = {
        burger: data
      };
      console.log(burgerlist);
      res.render("index", burgerlist);
    })
});

//post (/api/burgers)
router.post("/api/burgers", function(req, res) {
    burger.create([
      "burger", "eaten"
    ], [
      req.body.burger, req.body.eaten
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

//put/update (/api/burgers/:id)
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      eaten: req.body.eaten
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

//delete (/api/burgers/:id)
router.delete("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    cat.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router