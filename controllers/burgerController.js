// create routes here
var express = require("express")
var router = express.Router()

let burger = require("../models/burger.js")


//get (/)
router.get("/", (req, res) => {
    burger.read(data => {
      var burgerlist = {
        burger: data
      };
      console.log(burgerlist);
      res.render("index", burgerlist);
    })
});

//post (/api/burgers)
router.post("/api/burgers", (req, res) => {
    burger.create([
      "burger", "eaten"
    ], [
      req.body.burger, req.body.eaten
    ], result => {
      
      res.json({ id: result.insertId });
    });
});

//put/update (/api/burgers/:id)
router.put("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      eaten: req.body.eaten
    }, condition, result => {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

//delete (/api/burgers/:id)
router.delete("/api/burgers/:id", (req, res) => {
    var condition = "id = " + req.params.id;
  
    burger.delete(condition, result => {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

module.exports = router