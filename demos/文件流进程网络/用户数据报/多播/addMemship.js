let server=require("dgram").createSocket("udp4");
server.on("message",function (message,rinfo) {
    console.log(message.toString())
});
server.bind(4000,()=>{
    server.addMembership("230.1.2.3")
});

