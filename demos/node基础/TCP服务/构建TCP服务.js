/*
* 1.创建TCP服务
* TCP传输协议
* net模块  http也是继承与net.Server
* createServer()
* */
var net=require("net");
var tcpServer=net.createServer(function (socket) {
    socket.on("data",function (data) {
        console.log(data)
    });
    socket.on("end",function (data) {
        console.log("end",data)
    });
    socket.write("Something")
}).listen(4001);
tcpServer.on("listening",function () {
    console.log("listening")
});
tcpServer.on("connection",function (sokect) {
    sokect.write("999")
    console.log()
});
tcpServer.on("close",function () {
    tcpServer.close()
    console.log("server is closed")
});
tcpServer.on("error",function (err) {
    console.log("err",err)
});
