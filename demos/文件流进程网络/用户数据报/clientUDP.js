let dgram=require("dgram");
let client=dgram.createSocket("udp4")
client.on("listening",()=>{
    let address=client.address()
    console.log("udp "+address.address+":"+address.port)
})
client.bind(40001)
client.on("message",function (message,) {
    console.log("client:"+message.toString());
    // client.send(messgae,)
})
process.stdin.on("data",function(data){
    client.send(data,0,data.length,4000,"localhost")
})

let messgae=new Buffer("This is a udp4 client")

client.send(messgae,0,messgae.length,4000,"localhost")

