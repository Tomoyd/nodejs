/*
* 流：可写流可读流
* 例如：套接字，和文件，可以对其进行按顺序追加读取
* 可以对其进行控制，通过暂停和恢复流来控制数据流动，并能够在流终止时，关闭它
* 流以块为单位发送数据，通过监听data事件，在每次提交一块数据时都可以接到通知
* 可以以缓冲区或字符串形式获取数据，取决于流的编码设置
* 1. 等待流：on(data)
* 2. 暂停与恢复流：stream.pause() stream.resume()
* 3. 使用可写流 通过向可写流传递缓冲区或字符串，可以将字符串写入其中
*    写入字符串需要制定字符编码格式，否则认为是base64编码，写入缓冲区可以不用
* 4. 等待流被清空
* 当流重新刷新挂起缓冲区时，就会发射drain事件
* */
/*
* 1.等待数据，字节缓冲区以原始形式传送数据
* 2.设置setEncoding函数定义流的编码格式，以某种字符串形式进行传送
* */
/*
* 文件流
* 1. 创建文件系统流
* 可读流
* createReadStream(filepath,option,)
* */
let path=require("path");
let filepath=path.resolve(__dirname,"../外部进程/printTask.js");
let fs=require("fs");
rs=fs.createReadStream(filepath);
let writeFilepath=path.resolve(__dirname,"../外部进程/print.js");
let ws=fs.createWriteStream(writeFilepath)
rs.on("data",(data)=>{
    if(!ws.write(data)){
        rs.pause()
    }
    console.log(data.toString())
});
ws.on("drain",()=>{
    rs.resume()
})
rs.on("end",()=>{
    ws.close()
    rs.close()
    console.log("结束")
});
/*
* 网络流
* 1. HTTP的请求对象是一个可读流
* 2.HTTP的响应对象是一个可写流
* 慢客户端问题
* > NODE在进行IO操作时不会产生阻塞，写入数据时，无法会写入核缓冲区，就会缓存数据
* 数据源是一个文件，写入流式浏览器的TCP连接，如果数据源是本地文件，写入流式快速的，而忘了连接时慢速的
* 可读流会快速产生data事件，同时发生到可写流，核缓冲区很快被填满不得不缓存数据
* 这些缓存的数据会造成内存增长问题，既有消费者又有生成这，生产者比消费者快就要缓存数据，所有要暂停生产者，直到数据销毁者赶来时为止
*
* 避免慢客户端问题：
* > 避免填满具有未刷新缓冲区的内存
* 暂停流和恢复流
* */
/*require("http").createServer(function (req,res) {
    let rs=fs.createReadStream(filepath);
    rs.on("data",function (data) {
        if(!res.write(data)){
            rs.pause()
        }
    });
    res.on("drain",()=>{
        rs.resume()
    });
    rs.on("end",()=>{
        res.end()
    })
}).listen(9000);*/
/*
* 应用pipe避免慢客户端问题，与使用pipe集成可读可写流
* 暂停可读流直到可写流赶上并在之后恢复可读流的过程是一种循环模式
* Node使用pipe可以实现这种模式
* 由传输源调用，并接受目标作为第一个参数第二个参数是options对象
* 可以设置第二个end:false 避免调用end()
* */
/*require("http").createServer(function (req,res) {
    let rs=fs.createReadStream(filepath);
    rs.pipe(res,{end:false});// 设置end:false 进制在可读流结束时，res调用end()
    rs.on("data",()=>{
        res.end()
    })
}).listen(3000);*/
