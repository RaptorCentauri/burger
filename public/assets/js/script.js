$(document).ready(function(){

$("#devourBtn").submit(function(event) {
  event.preventDefault();

  console.log("btn woprl");

  burger.devour($(this).data(id), function(res){
      cb(res);
    });
  });

// console.log(newName);

// $.post( "/api/friends", newName, "json").done(function(data) {
//   console.log(`Data Loaded: ${data}`);
// });

});
