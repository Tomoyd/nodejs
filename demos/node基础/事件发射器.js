// Node提供的EventEmitter伪类
//事件发生器API
//使用addListener 或 on绑定回调函数，绑定多个事件监听器，第一个抛出错误时第二个就读不到
//removeListener移除事件监听器
// .once 最多执行一次，removeAllListeners 移除所有的事件监听器
//创建事件发射器
var util=require("util");
var EventEmitter=require("events").EventEmitter;
var MyClass=function () {

};
util.inherits(MyClass,EventEmitter);
MyClass.prototype.someMethod=function () {
    this.emit("custom event","arguments1","2");
};
var myInstance=new MyClass();
myInstance.on("custom event",function (arg1,arg2) {
    console.log(arg1,arg2)
});
myInstance.someMethod()
