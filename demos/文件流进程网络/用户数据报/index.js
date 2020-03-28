/*
* 对于事件敏感的应用程序，使用用户报的使用
* UDP是无状态的适合小查询
* UDP支持数据包的广播和多播
* 常见的应用程序：DNS，流媒体应用程序
* */
/*
* 构建数据包服务器
* 模块：dgram
*udp4 IPV4 上的UDP
* 关闭套接字 close
* */
let dgram=require("dgram");
let server=dgram.createSocket("udp4");
server.on("message",function (message,rinfo) {
    console.log("server got a message: ",message.toString(),rinfo.port,rinfo.address)
    server.send(message,0,message.length,rinfo.port,rinfo.address)
});
server.on("listening",function () {
    let address=server.address()
    console.log("4000 udp "+address.address+":"+address.port)

});
server.bind(4000)
