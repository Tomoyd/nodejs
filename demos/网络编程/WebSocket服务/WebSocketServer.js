let http=require("http");
let server=http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain");
});
server.listen(7000);
server.on("upgrade",function (req,socket,upgradeHead) {
    let head=new Buffer(upgradeHead.length);
    upgradeHead.copy(head);
    let headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        'Sec-WebSocket-Accept:*',
        'Sec-WebSocket-Protocol:chat '
    ];
    socket.write(headers.concat('','').join('\r\n'))
    socket.onmessage=(data)=>{
        console.log(data)
        socket.send("456")
    }


});
