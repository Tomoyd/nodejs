// let data=require("./data.json");
// console.log(data)
const events = require('events');
let emitter=new events.EventEmitter()
// 订阅
emitter.on("event1",(message)=>{
    console.log(message)
})
//发布
emitter.emit("event1","hello")
