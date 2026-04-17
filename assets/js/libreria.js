$("button").click(function () {
   var numproductos = parseInt($("#numproductos").html()) + 1;
   $("#numproductos").html(numproductos);
   alert("agregaste un producto a tu carrito");
   });

