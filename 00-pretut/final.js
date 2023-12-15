const { reject } = require("async");

let stocks = {
  Fruits: ["straw", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(0);
    console.log("start the production");

    await time(2000);
    console.log("cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("cut the fruit");

    await time(2000);
    console.log("start the machine");

    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);

    await time(2000);
    console.log("server ice cream");


  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("day is closed");
  }
}

kitchen();
