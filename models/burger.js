const orm = require('../config/orm.js');

//orm function
let burger = {

  all: function(cb){
    orm.selectAll("burgers", function(res) {
      cb(res);
    })
  },

  devour: function(id, cb) {
    orm.updateOne("burgers", "devoured", id, function(res){
      cb(res);
    })
  }



}

module.exports = burger;
