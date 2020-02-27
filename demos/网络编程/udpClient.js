let dgram = require("dgram");
let message=new Buffer("深入浅出Node.js","utf-8");
let client=dgram.createSocket("udp4");
client.send(message,0,message.length,8000,"localhost",(err,bytes)=>{
    // client.close();
});
client.on("message",(data)=>{
    console.log("message",data)
});
client.on("close",()=>{
    console.log("关闭")
});
client.on("error",(error)=>{
    console.log(error)
});

