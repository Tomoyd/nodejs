/*
* 处理文件路径
* Node中path模块帮助规范化,连接和解析路径
* 1.规划化路径 path模块的normalize()
* 2.连接路径: path.join()
* 3.解析路径:解析路径 好像挨个的 cd操作，与cd不同的是可以是文件
* 4.绝对路径之间的相对路径:path.relative() 从一个绝对路径跳转到另一个绝对路径的相对位置
* 5.提取路径的组成部分:dirname basename extname
* 6.确定路径是否存在:path.exits() 判断路径是否存在 已被fs替代
* */
let path=require("path");
// 规范化路径
// console.log(path.normalize("/hello/name/oo/.."));  //=>\hello\name
// 连接路径
// console.log(path.join(__dirname,"/name","//gender"));//F:\learnRepository\nodejs\nodejs\demos\文件流进程网络\读写文件\name\gender
// 解析路径
// console.log(path.resolve(__dirname,"/name","hello"));//F:\name\hello
// 相对路径
//console.log(path.relative("/name/hello","/yy/name"));//..\..\yy\name
//路径的组成部分
// let filepath=path.join("/name/hello.js");
// console.log(path.basename(filepath),path.dirname(filepath),path.extname(filepath));//hello.js \name .js
//确定路径是否存在
let fs=require("fs")
// console.log(fs.existsSync("/name/hello"));
// console.log(fs.existsSync(__dirname));

/*
* fs 模块：查询文件的统计信息：stat
* 打开文件open(filepath,flag,function(err,fd)) fd 文件描述符
* */
// console.log(fs.statSync(path.resolve(__dirname)))
fs.open(path.resolve(__dirname,"text.txt"),"a+",function (err,fd) {
    console.log(fd)
    if(err) {throw err}
    let readBuffer=new Buffer(1024);
    fs.write(fd,new Buffer("hello"),0,5,null,function (fd,written) {
        if(err) {throw err};
        console.log("write "+written+" bytes")
    })
    fs.read(fd,readBuffer,0,1024,0,function (err,readBytes) {
        if(err) { fs.close(fd,function () {
            throw err
        })};
        console.log("just read "+readBytes+" bytes")
        if(readBytes>0){
            console.log(readBuffer.slice(0,readBytes))
        }
    })
});
