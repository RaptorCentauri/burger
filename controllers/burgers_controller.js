const express = require('express');
const burger = require('../models/burger.js');

let router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data){
    let hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/eatburger", function(req, res) {
  burger.devour(req.body.id, function(){
    res.json(true);
  });
});

router.post("/api/addburger", function(req, res) {
  burger.add(req.body.burger_name, function(){
    res.json(true);
  });
});

module.exports = router;
