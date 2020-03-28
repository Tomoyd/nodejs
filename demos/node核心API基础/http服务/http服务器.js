/*
* http服务器 http
* httpRequest: url,method,headers,httpVersion
* httpResponse:
* setHeader()在 writeHead和end之前才有效
* 删除请求头：removeHeader()
* 写入主体：write()
* 以流的方式分块响应：
* Transfer-Encoding：chunked
* 传送文件：
* 首先创建流：利用pipe
* */

var fs=require("fs")
var http=require("http");
var resolve=require("path").resolve
var server=http.createServer();
server.on("request",function (req,res) {
    console.log(req.url,req.method,req.headers,req.httpVersion)
    var rs=fs.createReadStream(resolve(__dirname,"./video.flv"))
    res.writeHead(200,{"Content-Type":"video/flv"});
    rs.pipe(res)
    // rs.on("data",function (data) {
    //
    // });
    rs.on("drain",function (data) {
        res.end()
        server.close()
    })

    // res.write("hello world");
    // res.end();
});
server.listen(40001,()=>{
    console.log("http://localhost:40001")
});

