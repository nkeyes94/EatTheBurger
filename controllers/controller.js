var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers")

});

router.get("/burgers", function (req, res) {
  // express callback response by calling burger.selectAllBurger
  burger.selectAll(function (burgerDee) {
    // wrapper for orm.js that using MySQL query callback will return burger_data, render to index with handlebar
    res.render("index", { burgerData: burgerDee });
  });
});

// post route -> back to index
router.post("/burgers/create", function (req, res) {
  burger.create(
    req.body.burgerNames,
    function (result) {
      // Send back the ID of the new quote
      //   res.json({ id: result.insertId });
      console.log(result);
      res.redirect("/");
    });
});

// put route -> back to index
router.put("/burgers/:id", function (req, res) {

  burger.update(
    req.params.id
    , function (result) {
      // if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
      //   return res.status(404).end();
      // } else {

      console.log(result);

      res.sendStatus(200);
      
    });
});


module.exports = router;