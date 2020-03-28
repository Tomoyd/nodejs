let buffer=new Buffer("Hello world","ascii");
console.log(buffer[1])
console.log(buffer[1])
let bufferNull=new Buffer(10);
console.log(bufferNull)
bufferNull[0]=277
bufferNull[100]=10
console.log(bufferNull)
// 切分缓冲区
// buffer.slice(1,3)[1]=8
//复制缓冲区
buffer.copy(bufferNull,0,0,1000)
let str=bufferNull.toString()
console.log(str)

