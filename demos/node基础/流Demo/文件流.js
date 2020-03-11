var path=require("path");
var fs=require("fs");
// 第二个参数可以是一个可选配置项，文件的起始和结束位置，编码格式标志位以及缓冲区大小 encoding ，fd，
/*
* encoding
* fd
* start
* bufferSize；块的大小
* end
* */
// var rs=fs.createReadStream(path.resolve(__dirname,"data","text.txt"));
var filepath = path.resolve(__dirname,"../data/test.txt");
// console.log(filepath)
//stream pipe() 继承可写可读流
// fs.open(filepath,"r",function (err,fd) {
    let rs=fs.createReadStream(filepath);
    let ws=fs.createWriteStream(path.resolve(__dirname,"data.txt"));
    rs.pipe(ws)
    // rs.on("data",function (data) {
    //     console.log(data)
    //     ws.write(data)
    // })

// })
