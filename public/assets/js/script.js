$(document).ready(function(){

  $(".devourBtn").on("click", function(event) {
    event.preventDefault();

    burger = {
      id: $(this).data("id")
    }

    $.post( "/api/eatburger", burger, function(data){
      location.reload();
    }, "json");

    })


  $("#addBurgerBtn").on("click", function(event) {
    event.preventDefault();

    burger = {
      burger_name: $("#newBurger").val()
    }

    $.post( "/api/addburger", burger, function(data){
      location.reload();
    }, "json");

    })
});
