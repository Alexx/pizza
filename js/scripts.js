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

Pizza.prototype.reset = function() {
  this.size = "";
  this.toppings = [];
};

//User-interface logic
$(document).ready(function(){
  let usersPizza = new Pizza();

  $("#orderPizza").submit(function(event) {
    event.preventDefault();
    usersPizza.reset();
    usersPizza.size = pizzaSizes[$("#pizzaSize").val()];
    $("input:checkbox[name=toppings]:checked").each(function() {
      let toppingChoice = $(this).val();
      usersPizza.addTopping(pizzaToppings[toppingChoice]);
    });
    console.log(usersPizza);
  });

});
