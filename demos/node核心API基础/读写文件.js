// 文件路径处理，normalize规范化路径
var path=require("path");
console.log(path.normalize("/foo/bar/b/.."));
// 连接路径 path.join
let joinPath=path.join("/foo","/bar","baz/buffer","files");
console.log(joinPath)
// 解析路径，将多个路径解析为一个规划化的绝对路径,会任务/开头的为根路径
let resolve=path.resolve("iii","bar","baz/buffer","files","txt.md");
console.log(resolve)
//查找两个绝对路径之间的相对路径
console.log(path.relative(resolve,path.resolve("iii","bar")));
//提取路径的组成部分
let dirname=path.dirname(resolve);
let basename=path.basename(resolve);
let basenameNoExt=path.basename(resolve,"md");
let extname=path.extname(resolve);
console.log(dirname,basename,basenameNoExt,extname);
//判断路径是否存在:path.exists(),fs.exists
require("fs").exists(resolve,(exists)=>{
    console.log(exists)
})
console.log(require("fs").existsSync(resolve))
// fs模块 存放所有文件查询和操作函数，可以进行文件统计信息，打开关闭文件等
var fs=require("fs");
let filepath=path.join(__dirname,"/data")
fs.stat(filepath,function (err,stats) {
    if(err){throw err}
    console.log(stats,stats.isFile(),stats.isDirectory(),stats.isBlockDevice(),stats.isSymbolicLink(),stats.isFIFO(),
        stats.isCharacterDevice(),stats.isSocket())

});
// 打开文件
let file=path.resolve(filepath,"test.txt");
fs.open(file,"w+",function (err,fd) {
//    获取文件描述符 fd
    fs.write(fd,new Buffer("I'm a grade boy"),0,10,null,function wrote(err,written) {
        if(err){throw err}
        console.log("wrote"+written+"bytes");
        fs.close(fd,function () {
            console.log("999")
        })
    })

});
