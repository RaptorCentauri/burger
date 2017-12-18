const connection = require('./connection.js');

let tableName = 'burgers';

orm = {
  // selectAll
  selectAll: function(tableInput, cb){

    let queryString = `SELECT * FROM ${tableName}`;

    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
        cb(result);
    });
  },

  // insertOne: function(callback){
  //
  //   let query = `INSERT INTO ${tableName} VALUES `
  //
  //   connection.query(query, function(err, result){
  //     callback(result);
  //   });
  // },

  // updateOne: function(callback){
  //
  //   let query = //some sql querry;
  //
  //   connection.query(query, function(err, result){
  //     callback(result);
  //   });
  // },

  updateOne: function(tableInput, column, id, cb){

    let queryString = `UPDATE ${tableName} SET ${column} = 1 WHERE id=${id}`;

    connection.query(queryString, function(err, result){
      if (err){
        throw err;
      }
        cb(result);
    });
  },



}

module.exports = orm;
