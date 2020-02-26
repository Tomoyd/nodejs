let net = require('net');
let server = net.createServer();
let sockets = [];
server.on('connection',function (socket) {
    console.log('got a new connection');
    sockets.push(socket)
    socket.on("data",function (data) {

        console.log("got data:",data);
        sockets.forEach(function (otherSocket) {
            if(otherSocket!==socket){
                otherSocket.write(data);
            }
        })
    });
    socket.on('close',function () {
        sockets=sockets.filter((item)=>{item!=socket})
    })
});
server.on('error',function(err){
    console.log('Server error',err.message)
});
server.on('close',function () {
    console.log('Server closed');

});
server.listen(4001);
