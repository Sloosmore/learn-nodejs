const { reject } = require("async");
const { resolve } = require("path");

let stocks = {
  Fruits: ["straw", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shop_open = true;
/*
let order = () => {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      resolve();
    } else {
      resolve();
    }
  });
};

order.then().then().catch().finally();
*/
async function order() {
  try {
    await abc;
  } catch (error) {
    console.log(`abc doesn't exsist`, error);
  } finally {
    console.log(`end of processs`);
  }
}

order();
