const pizzaSizes = [["Small", 8],
                    ["Medium", 10],
                    ["Large", 12],
                    ["X-Large", 14]];
const pizzaToppings = [["Pepperoni", 1],
                       ["Sausage", 1],
                       ["Chicken", 1.5],
                       ["Bacon", 2],
                       ["Mushrooms", 1],
                       ["Black Olives", 0.5],
                       ["Green Peppers", 1]];

//Business logic
function Pizza(size) {
  this.size = size;
  this.toppings = [];
};

Pizza.prototype.addTopping = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.price = function() {
  let totalPrice = this.size[1];
  this.toppings.forEach(function(topping) {
    totalPrice += topping[1];
  });
  return totalPrice;
};

//User-interface logic
$(document).ready(function(){
  let myPizza = new Pizza(["Large", 12]);
  console.log(myPizza);
  myPizza.addTopping(["Mayonnaise", 1]);
  console.log(myPizza);
  myPizza.addTopping(["Bacon", 2]);
  console.log(myPizza);
  console.log(myPizza.price());
});
