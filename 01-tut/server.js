console.log("hello");

//console.log(global);
// 1 node runs on server
// 2 console has a terminal window
// 3 global object insted of window object
// 4 common core objects
// 5 commonJS modules insted of es6 imports
// 6 nodejs is missing js apis like fetch

const os = require("os");
const path = require("path");
const { add, subtract, mult, div } = require("./math");

console.log(add(2, 3));
console.log(subtract(2, 3));
console.log(mult(2, 3));
console.log(div(2, 3));

/*
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename));*/
