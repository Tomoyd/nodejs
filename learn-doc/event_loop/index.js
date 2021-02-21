setTimeout(() => {
  console.log("setTimeout");
}, 0);
setImmediate(() => {
  console.log("setImmediate");
});

new Promise((resolve) => {
  console.log("start :>> ");
  resolve(8);
}).then((re) => {
  console.log("promise :>> ", re);
});

process.nextTick(() => {
  console.log("nextTick");
});

// nextTick
// promise :>>  8
// setTimeout
// setImmediate

// timers 定时器
// pending 挂起到时的callback
// idle 和prepare 内部的
// poll 轮询IO 队列
// check setImmediate
// close 一些关闭事件的 callback
