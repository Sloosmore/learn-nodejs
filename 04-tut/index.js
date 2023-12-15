const logEvents = require(`./logEvents`);

const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
// init
const myEmitter = new MyEmitter();

//add listener
myEmitter.on("log", (msg) => logEvents(msg));

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "log event emitted");
}, 2000);
