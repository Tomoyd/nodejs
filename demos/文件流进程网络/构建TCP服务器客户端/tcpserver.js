/*
* require的net模块
* 传输控制协议(transmission control protocol)
* tcp 套接字对象
*
* telnet localhost 4001 测试
* 设置超时时间可以再超时时触发超时事件
*
* 设置延时和非延时 setNoDelay()
* 设置保持运行：setKeepAlive()
* 关闭服务器 server.close()
* 监听错误 on("err",function(error))
* 未能捕获的使用 process.on("uncaughtException",handler)
* */

let fs=require("fs");
let path=require("path");
let filepath=path.resolve(__dirname,"../外部进程/print.js");
let rs=fs.createReadStream(filepath)
let server=require("net").createServer(function (socket) {
    let str="";
    socket.setTimeout(50000,function () {
        socket.end("idle timeout, disconnecting,bye")
    });
    socket.on("timeout", ()=>{
        console.log(909)
    })
    socket.on("data",function (data) {
        console.log(data.toString())
        str+=data.toString()
        if(data.toString().includes("\n")){
            if(str.includes("quit")){
                socket.end()
            }
            socket.write("Hello "+ str)
        }
    });
    socket.on("end",function (data) {
        server.close()
        console.log("end",data)
    });
    // rs.pipe(socket,{end:false})
    // socket.write("some thing")
    // socket.end()
}).listen(4000);
// server.on("connection",function (socket) {
//     console.log(socket)
// });
server.on("listening",()=>{
    console.log("正在监听 4000")
});
server.on("error",err=>{
    console.log(err)
});
server.on("close",()=>{
    console.log("close")
})
