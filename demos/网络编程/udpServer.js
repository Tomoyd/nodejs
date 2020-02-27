let dgram=require("dgram");
let server=dgram.createSocket("udp4");

server.on("message",(msg,rinfo)=>{
    console.log(msg,rinfo)
    server.send("exit",rinfo.port,rinfo.address)
});
server.on("listening",()=>{
    console.log("正在监听中")
});
server.on("close",()=>{
    console.log("socket正在监听中...")
});
server.on("error",(err)=>{
    console.log(err)
});
server.bind("8000");
