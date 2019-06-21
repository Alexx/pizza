function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.price = function() {
  let totalPrice = 0;
  totalPrice += this.size[1];
  this.toppings.forEach(function(topping) {
    totalPrice += topping[1];
  });
  return totalPrice;
};

$(document).ready(function(){
  let myPizza = new Pizza(["Small", 8]);
  console.log(myPizza);
  myPizza.addTopping(["Mayonnaise", 1]);
  console.log(myPizza);
  myPizza.addTopping(["Bacon", 2]);
  console.log(myPizza);
  console.log(myPizza.price());
});
