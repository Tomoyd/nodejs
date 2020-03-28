let util=require("util");
let EventEmitter=require("events").EventEmitter;
let Ticker=function () {
  let self=this;
  setInterval(function () {
      self.emit("tick")
  },1000)
};
util.inherits(Ticker,EventEmitter);
let ticker= new Ticker();
let num=0
ticker.on("tick",function () {
    console.log(num)
   if(num++>10){
       this.removeAllListeners("tick")
   }
});
