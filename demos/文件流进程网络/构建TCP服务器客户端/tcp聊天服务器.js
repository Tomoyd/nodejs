let net=require("net");
let server=net.createServer();
let sockets=[]
server.on("connection",function (socket) {
    sockets.push(socket)
    socket.on("data",function (data) {
        console.log(data.toString());
        sockets.filter(socketItem=>{return socketItem!==socket}).forEach(socketItem=>{
            socketItem.write(data)
        })
    })
    socket.on("exit",function () {
        sockets.splice(sockets.indexOf(socket),1)
    })
})
server.listen(4001,function () {
    console.log(4001)
});
server.on("error",function (err) {
    console.log(err)
})
