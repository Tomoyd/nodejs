/*
* net 模块的createConnection(port,host,connectionListener)
*是套接字
* */
process.stdin.resume()
let conn=require("net").createConnection(4000,function (coon) {
    console.log("连接")
})
// conn.once("connect",function () {
//
// })
// conn.on("data",function (data) {
//     console.log("client",data.toString())
// })

conn.pipe(process.stdout,{end:false})//将conn的内容 标准输入流的在写到标准输出流
process.stdin.pipe(conn)
conn.write("hello\n","utf8")
conn.on("error",function (err) {
    console.log("发生错误",err)
})
