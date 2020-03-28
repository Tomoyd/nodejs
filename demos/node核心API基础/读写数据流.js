// 可读流

// 流以块的方式发生数据，每提交一块数据时，可以得到通知获取到数据，以字符串或缓冲区形式护耳器哦数据，取决于编码设置
/*
* stream.setEncoding("utf8")
* .on("data",function(data){})
* */
// 暂停与恢复流
/*
*
* stream.pause()
* stream.resume()
* .on("end",function(){})
* */
//使用可读流
/*
* 可写流也是一个文件也可能是TCP网络连接
* stream.write()
* 等待流被清空
* stream.on("drain",function(){})
* */

//文件流
