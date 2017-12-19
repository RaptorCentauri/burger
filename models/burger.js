const orm = require('../config/orm.js');

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
  },

  add: function(name, cb){
    orm.insertOne("burgers", "burger_name", name, function(res){
      cb(res);
    });
  }
}

module.exports = burger;
