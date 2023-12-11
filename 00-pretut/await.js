const { error } = require("console");
const { resolve } = require("path");

let stocks = {
  Fruits: ["straw", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shop_open = true;

let toppings_choice = () => {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      setTimeout(() => {
        resolve(console.log("which topping would you love?"));
      }, 3000);
    } else {
      reject(console.log(error));
    }
  });
};

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppings_choice();

  console.log("D");
  console.log("E");
}

kitchen();

console.log("cleaning the dishes");
console.log("dishes");
console.log("takes order");
