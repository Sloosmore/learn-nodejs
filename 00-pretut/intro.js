//sync
/*
console.log('I')
console.log('eat')
console.log('icecream')
console.log('with a')
console.log('spoon')*/

//asyc

const timeout = 3000;

console.log("I");
console.log("eat");
setTimeout(() => {
  console.log("icecream");
}, timeout);
console.log("with a");
console.log("spoon");
