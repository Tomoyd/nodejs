const WebSocket = require('ws');
let clientSocket=new WebSocket("ws://127.0.0.1:7000");
clientSocket.onopen=function () {
  clientSocket.send("hello,socketServer")
};
clientSocket.onmessage=function (data) {
    console.log(data)
}
