#### TCP

> 全名为传输控制协议，在OSI模型(由七层组成，应用层，表示层，会话层，传输层，网络层，数据链路层，物理层)中属于传输层协议，许多应用层协议基于TCP构建，典型的比如HTTP，SMTP，IMAP协议

面向连接的协议，典型的特征是需要3次握手

###### 创建TCP服务器端

1. 引入模块 net
2. 调用`createServer()`方法创建服务端，传入回调函数，形参为socket，在回调函数中可以挂载相关socket事件
3. 服务端监听端口，listen()方法
4. 服务端事件挂载，如connection事件

```javascript
let net=require("net");
let server=net.createServer(function(socket){
    socket.on("data",function(data){
        socket.write("你好")
    })；
    socket.on("end",function(){
        	console.log("断开连接")；
    })；
    socket.write("hello nodejs\n")
});
server.listen(9000,function(){
    console.log("server bound")
})
```

###### 创造客户端

1. 引入net模块
2. net模块调用connect方法，连接端口和主机 path和port属性，第二个参数是连接后的回调，返回客户端套接字
3. 客户端挂载各个事件

```javascript
let net=require("net");
let client=net.connect({port:9000},function () {
    console.log("client connect")
});
client.on("data",function (data) {
    console.log(data.toString("utf-8"));
    client.end();
});
client.on("end",function () {
    console.log("client disconnected")
})
```

- 服务器事件：

  - listening：在调用server.listen()绑定断开或者Domain Socket后触发

    通过listen的第二个参数传入

  - connection：每有客户端套接字连接到服务器端时触发，简洁写法可以通过`createServer`最后一个参数传递

  - close：服务器关闭时触发，如在调用server.close()方法，停止新连接，保持当前存在的连接，等待所有连接都断开后，触发该事件

  - error事件，当服务器发生异常时触发该事件，不侦听error事件将会报出异常

- 连接事件：

  - data：当一段调用write()方法向另一端发送数据时
  - end：当连接中的任意一端发送FIN数据时，将触发该事件
  - connect：用于客户端，当套接字与服务器连接成功时会触发
  - drain：当任意一端调用write()发送数据时，该端会触发该事件
  - error：发生异常时触发
  - close：套接字完全关闭时触发
  - timeout：一定事件不活跃时，该事件触发

- TCP套接字是可读可写的Stream对象，可以利用pipe(）方法巧妙的使用pipe()方法实现管道操作

- 可以调用socket.setNoDelay(true)去掉Nagle算
  法