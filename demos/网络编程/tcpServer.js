let net=require("net");
let server=net.createServer(function(socket){
    socket.on("data",function(data){
        socket.write("你好")
    });

    socket.on("end",function(){
        console.log("断开连接");
    });
    socket.write("hello nodejs\n")
});
server.on("connection",function(){
    console.log("新连接");
});
server.listen(9000,function(){
    console.log("server bound")
});
