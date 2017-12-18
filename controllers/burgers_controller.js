const express = require('express');
const burger = require('../models/burger.js');

let router = express.Router();


router.get("/", function(req, res) {
  burger.all(function(data){
    let hbsObject = {
      burgers: data
    };
    console.log("getting /");
    console.log(hbsObject);
    res.render("index", hbsObject);
  });

});

router.post("/", function(req, res) {
  // console.log(req);
  // console.log(`Post Request`);
  // console.log(req.body.id);
  burger.devour(req.body.id, function(res){
  });
});
module.exports = router;
