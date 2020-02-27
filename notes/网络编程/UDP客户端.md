#### 创建UDP客户端

1. 引入dgram模块

2. 创建套接字 createSocket("udp4")
3. 调用send()方法传输数据
4. 挂载各个套接字事件监听

```javascript
let dgram = require("dgram");
let message=new Buffer("深入浅出Node.js","utf-8");
let client=dgram.createSocket("udp4");
client.send(message,0,message.length,8000,"localhost",(err,bytes)=>{
    client.close();
})
```

#### 服务端

1. 引入dgram模块

2. 创建套接字 createSocket("udp4")
3. 挂载各个套接字事件监听
4. bind 方法绑定端口

```javascript
let dgram=require("dgram");
let server=dgram.createSocket("udp4");

server.on("message",(msg,rinfo)=>{
    console.log(msg,rinfo)
    server.send("exit",rinfo.port,rinfo.address)
});
server.on("listening",()=>{
    console.log("正在监听中")
});
server.on("close",()=>{
    console.log("socket正在监听中...")
});
server.on("error",(err)=>{
    console.log(err)
});
server.bind("8000");
```

#### UDP套接字事件

message:接收到消息时触发该事件，触发携带的数据为消息Buffer对象加一些远程信息

listening：当UDP套接字开始侦听时，触发该事件

close：但调用close()触发该事件，不再触发message事件

error：发生错误时触发该事件