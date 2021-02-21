const EventEmitter = require("events");

const myEmitter = new EventEmitter();

const handleEvent = (...e) => {
  console.log("每次都执行", ...e);
  console.log(777);
  //   throw 888;
};
process.on("uncaughtException", (e) => {
  console.log(e);
  //   myEmitter.removeListener("event", handleEvent);
});

myEmitter.on("event", handleEvent);
myEmitter.once("event", () => {
  console.log("只是执行一次");
});

myEmitter.emit("event");
myEmitter.emit("event", "1234", 999);
