// UTF-8编码格式的字符串创建缓冲区，编码格式指定第二个参数即可
var bufferU8=new Buffer("hello world");
// base64 编码的缓冲区
var buffer64=new Buffer("8d75fde","base64");
// 指定一个1024 字节的缓冲区，缓冲区包含的数据是一些随机数
var bufLength=new Buffer(1024);
//在缓冲区中获取数据。或者创建数据,
console.log(bufferU8[10],bufLength[1])
//获取缓冲区长度
console.log(bufferU8.length)
//切分缓冲区，slice属性，并没有分配新的内存和任何复制，只是引用了父缓冲区不同的起始和结束位置
let child=bufferU8.slice(1,5)
console.log(child[0])
bufferU8[1]=200;
console.log(child[0]);
// 复制缓冲区
bufferU8.copy(bufLength,0,0,10);
console.log(bufLength.toString())
//缓冲区解码
console.log(bufferU8.toString("base64"));
