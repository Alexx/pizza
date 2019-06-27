const pizzaSizes = [['Small', 8], ['Medium', 10], ['Large', 12], ['X-Large', 14]];
const pizzaToppings = [['Pepperoni', 1], ['Sausage', 1], ['Chicken', 1.5], ['Bacon', 2], ['Black Olives', 0.5], ['Mushrooms', 1], ['Green Peppers', 1]];

//Business logic
function Order() {
  this.pizzas = [];
  this.totalPrice = 0;
  this.currentID = 0;
};

Order.prototype.addPizza = function (pizza) {
  pizza.id = this.assignID();
  this.pizzas.push(pizza);
};

Order.prototype.assignID = function () {
  this.currentID += 1;
  return this.currentID;
};

Order.prototype.getOrderPrice = function () {
  let totalOrderPrice = 0;
  this.pizzas.forEach(function (pizza) {
    totalOrderPrice += pizza.price;
  });

  this.totalPrice = totalOrderPrice;
};

function Pizza(size, toppings, price, specialInstruction) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
  this.specialInstruction = specialInstruction;
};

function getSize(inputSize) {
  for (let i = 0; i < pizzaSizes.length; i++) {
    if (pizzaSizes[i][0] === inputSize) {
      return pizzaSizes[i];
    }
  }
};

function addTopping(topping) {
  for (let i = 0; i < pizzaToppings.length; i++) {
    if (pizzaToppings[i][0] === topping) {
      return pizzaToppings[i];
    }
  }
};

function getPrice(size, toppings) {
  let totalPrice = size[1];
  toppings.forEach(function (topping) {
    totalPrice += topping[1];
  });

  return totalPrice;
};

//User-interface logic
function displayPizza(order, pizzaID) {
  const pizza = order.pizzas[pizzaID - 1];
  $('#pizzaInfo').show();
  $('#pizzaSizeOutput').text(pizza.size[0]);
  $('#pizzaCostOutput').text(pizza.price);
  $('#instructionsOutput').text(pizza.specialInstruction);
  $('#pizzaToppingsOutput').empty();
  pizza.toppings.forEach(function (topping) {
    $('#pizzaToppingsOutput').append('<li>' + topping[0] + '</li>');
  });
};

function createPizzaListItem(order, pizza) {
  $('#pizzasOrdered').append('<li class=\'btn btn-primary circle\' id=' + pizza.id + '>' + 'Pizza #' + pizza.id + '</li>');
  $('#orderTotalOutput').text(order.totalPrice);
}

$(document).ready(function () {
  const usersOrder = new Order;

  $('#orderPizza').submit(function (event) {
    event.preventDefault();
    const pizzaSize = getSize($('#pizzaSize').val());
    const pizzaToppings = [];
    const pizzaInstructions = $('#pizzaInstructions').val();
    $('input:checkbox[name=toppings]:checked').each(function () {
      const toppingChoice = $(this).val();
      pizzaToppings.push(addTopping(toppingChoice));
    });

    const pizzaPrice = getPrice(pizzaSize, pizzaToppings);
    const usersPizza = new Pizza(pizzaSize, pizzaToppings, pizzaPrice, pizzaInstructions);

    usersOrder.addPizza(usersPizza);
    usersOrder.getOrderPrice();
    $('#orderPizza')[0].reset();

    createPizzaListItem(usersOrder, usersPizza);
  });

  $('#pizzasOrdered').on('click', 'li', function () {
    const pizzaID = this.id;
    displayPizza(usersOrder, pizzaID);
  });

});
