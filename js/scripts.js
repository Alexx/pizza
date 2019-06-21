function Pizza(size) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.price = function() {

}

$(document).ready(function(){
  var myPizza = new Pizza("Medium");
  console.log(myPizza);
});
