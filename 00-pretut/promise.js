const { rejects } = require("assert");

let stocks = {
  Fruits: ["straw", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let shop_open = true;

let order = (timeout, work) => {
  return new Promise((resolve, reject) => {
    if (shop_open) {
      setTimeout(() => {
        resolve(work());
      }, timeout);
    } else {
      reject(console.log("our shop is closed"));
    }
  });
};

order(2000, () => console.log(`${stocks.Fruits[0]} was seclected`))
  .then(() => {
    return order(0, () => {
      console.log("production has started");
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log("the food was chopped");
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`);
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} `);
    });
  })

  .then(() => {
    return order(1000, () =>
      console.log(`icecream placed on ${stocks.holder[0]} `)
    );
  })

  .then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added`));
  })

  .then(() => {
    return order(3000, () => console.log(`icecream finished`));
  })

  .catch(() => {
    console.log('customer left')
  })

  .finally(() => {
    console.log("day ended shop is closed")
  })
