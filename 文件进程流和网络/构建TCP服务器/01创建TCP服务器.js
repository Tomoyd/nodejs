/**
 *使用net模块创建TCP服务器
 */
// require('net').createServer(function (socket) {
//     socket.on('data',function(data){
//         //获取连接
//     })
//     socket.on('end',function (data) {
//         //关闭连接
//     })
//     socket.write('Some string')
// }).listen(4001)
/**
 * 服务器对象也是一个事件发射器，在其生命周期内监听事件
 * .netServer发射以下事件:
 * 'listening'--当服务器在指定的端口和地址监听时
 * 'connection'--当有新的连接创建时。回调函数会接收对应的套接字对象
 * close--当服务器关闭时
 * error--当在服务层面出现错误时
 */
// let server =require('net').createServer();
// var port = 4001;
// server.on('listening',function () {
//     console.log('Server is listening on port',port);
//
// })
// server.on('connection',function (socket) {
//     console.log('Server has a new connection');
//     socket.end()
//     server.close();
// })
// server.on('close',function () {
//     console.log('Server is now closed');
// })
// server.on('error',function (err) {
//     console.log("error occurred",err.message)
// })
// server.listen(port)
/**
 * 1 使用套接字对象
 * 当获取"connection" 事件时也获得了一个套接字对象作为回调函数的第一参数
 * 套接字对象既可是可读流也可以是可写流，这意味着他获取数据包是会发射data事件
 * 当连接关闭时会发射end事件
 */
// let server = require('net').createServer(function (socket) {
//     console.log('new connect');
//     socket.setEncoding('utf8');
//     socket.write("Hello! You can start typing.Type 'quit' to exit.\n");
//     socket.on("data",function (data) {
//         console.log('got:',data.toString())
//         if(data.trim().toLowerCase()==='quit'){
//             socket.write('Bye bye!');
//             return socket.end();
//         }
//     })
//     socket.on("end",function(){
//         console.log('Client connect ended')
//     })
// }).listen(4001)
// let ws = require('fs').createWriteStream('mySocketDump.txt');
// require('net').createServer(function(socket){
//     socket.pipe(ws);
// }).listen(4001);
// require('net').createServer(function (socket) {
//     var rs=require('fs').createReadStream('mySocketDump.txt')
//     rs.pipe(socket,{end:false});
//     rs.on('end',function () {
//         socket.write('end')
//         socket.end()
//     })
// }).listen(4001);
/**
 *2.理解空闲套接字
 * 可以利用setTimeout(millisecond)方法设置定义超时时间
 * 也可以通过timeout事件监听超时事件
 */
// let timeout=5000;
// // let net= require('net');
// // net.createServer(function (socket) {
// //     // socket.setTimeout(timeout);
// //     // socket.on('timeout',function () {
// //     //     socket.write('idle timeout, disconnecting,bye!');
// //     //     socket.end();
// //     // })
// //     socket.setTimeout(timeout,function () {
// //         socket.end('idle timeout, disconnecting,bye!')
// //     })
// // }).listen(4001)
/**
 * 设置保持运行
 * 避免网络或者终端上出现超时
 * Node通过发送带有被打开的确认标志(Acknoowledgement ACK) 的空TCP包触发另一终端的空应答
 * 来的达到这一目的，这会使得两个终端的连接处于运行状态
 * 可以通过Socket.setKeepAlive(true)来激活
 * 还可以指定最后接收到的包与下一个保持运行包之间的延迟时间，可以设置第二个参数;
 * socket.setKeepAlive(true,10000)
 * 设置周期性发送空数据包以保持连接运行
 *
 */
/**
 * 应用延时或非延时
 * socket.setNoDelay(true)
 * 如果恢复延迟设置
 * socket.setNoDelay(false)
 */
/**
 * 5.监听连接
 * server.listen(port,host)
 * host是可选的，如果忽略，则服务器会接收任意IP地址的连接
 */
/**
 * 6.关闭服务器
 * server.close
 * server.on('close'，function(){}I)
 *
 */
/**
 * 处理错误在客户端上的套接字或者服务器是可以监听error事件来处理错误
 * 如果未能捕捉异常，并终止当前进程
 * process.on('uncaughtException',function(err){
 *     //do something
 * })
 */


