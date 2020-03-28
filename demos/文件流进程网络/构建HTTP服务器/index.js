/*
* 1.服务器请求对象
* 属性：url，method，headers，
* 2.服务器响应对象
*  writeHead()
*  setHeader
*  removeHeader
*  write():字符串或者缓存区
*  end()
* */
/*let http=require("http");
server=http.createServer(function (req,res) {
    res.setHeader("language","zh-CN")
    res.removeHeader("language")
    res.writeHead(200,{"Content-Type":"text/plain",
        "Cache-Control":"max-age=3600"});


    res.end(require("util").inspect(req.headers))
}).listen(4000);*/
// 流的形式传送HTTP分块响应,若没有指定Content-Length响应头，否则NodeHTTP服务器向客户端发送 transfer-encoding：chunked
//传送文件
let fs=require("fs");

require("http").createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"image/png"})
    let rs=fs.createReadStream(require("path").resolve(__dirname,"Polaroid.png"))
    rs.pipe(res)
}).listen(4000);


