let stocks = {
  Fruits: ["straw", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[fruit_name]} was selected`);
    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");
    setTimeout(() => {
      console.log(`the fruit has been chopped`);
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);
        setTimeout(() => {
          console.log(`the machine has started`);
          setTimeout(() => {
            console.log(`the icecream was placed on ${stocks.holder[0]}`);
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added`);
              setTimeout(() => {
                console.log(`Icecream is served`);
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0);
};

order(0, production);
