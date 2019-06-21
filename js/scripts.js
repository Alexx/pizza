const pizzaSizes = [["Small", 8], ["Medium", 10], ["Large", 12], ["X-Large", 14]];
const pizzaToppings = [["Pepperoni", 1], ["Sausage", 1], ["Chicken", 1.5], ["Bacon", 2], ["Black Olives", 0.5], ["Mushrooms", 1], ["Green Peppers", 1]];

//Business logic
function Order(usersName) {
  this.usersName = usersName;
  this.pizzas = [];
  this.totalPrice = 0;
};

Order.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

Order.prototype.getOrderPrice = function() {
  let totalOrderPrice = 0;
  this.pizzas.forEach(function(pizza) {
    totalOrderPrice += pizza.price;
  });
  this.totalPrice = totalOrderPrice;
};

function Pizza() {
  this.size = "";
  this.toppings = [];
  this.price = 0;
};

Pizza.prototype.getSize = function(inputSize) {
  for (var i = 0; i < pizzaSizes.length; i++) {
    if(pizzaSizes[i][0] === inputSize) {
      this.size = pizzaSizes[i];
    }
  }
};

Pizza.prototype.addTopping = function(topping) {
  for (var i = 0; i < pizzaToppings.length; i++) {
    if(pizzaToppings[i][0] === topping) {
      topping = pizzaToppings[i];
      console.log(topping);
    }
  }
  this.toppings.push(topping);
};

Pizza.prototype.getPrice = function() {
  let totalPrice = this.size[1];
  this.toppings.forEach(function(topping) {
    totalPrice += topping[1];
  });
  this.price = totalPrice;
};

//User-interface logic
$(document).ready(function(){
  let usersOrder = new Order;

  $("#orderPizza").submit(function(event) {
    event.preventDefault();
    let usersPizza = new Pizza();
    let pizzaSize = $("#pizzaSize").val();
    usersPizza.getSize(pizzaSize);


    $("input:checkbox[name=toppings]:checked").each(function() {
      let toppingChoice = $(this).val();
      usersPizza.addTopping(toppingChoice);
    });
    usersPizza.getPrice();
    usersOrder.addPizza(usersPizza);
    usersOrder.getOrderPrice();
    $("#orderPizza")[0].reset();
    console.log(usersOrder);
  });

});
