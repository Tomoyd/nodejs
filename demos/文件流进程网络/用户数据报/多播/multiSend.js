let dgram=require("dgram");
let client=dgram.createSocket("udp4");
// client.on("message",function (message) {
//     console.log("client: "+message.toString())
// });
// client.bind(4000)
// client.setMulticastTTL(10)
let buffer=new Buffer("1234");
client.send(buffer,0,buffer.length,4000,"230.1.2.3");
process.stdin.on("data",function (data) {
    client.send(data,0,data.length,4000,"230.1.2.3");
    console.log(data.toString())
    // client.close()
});
