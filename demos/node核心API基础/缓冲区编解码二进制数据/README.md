#### 创建缓冲区

二进制缓冲区Buffer伪类，长度以字节为计量单位

Buffer类数据占用的内存并不是分配在JavaScript的VM内存中，不会被垃圾收集算法处理，他会占据一个不会被修改的永久内存地址，这避免了因缓冲区内容的内存复制所造成的CPU浪费

new Buffer(string,codeType)

标识符：

ascii

utf8

base64

可以使用索引访问某个字节，也可以给某个字节进行复制，256取模，小数取整数，超出边界赋值操作不会影响什么

#### 切分缓冲区

可以通过指定起始结束位置来切分缓冲区

**新的缓存区的位置还是原来的缓存区的内存区域，不过引用了父缓冲区不同的起始或结束位置**

#### 复制缓冲区

将缓冲区的一部分复制到另一个缓存区中

source.copy(targetBuffer,targerStart,sourceStart,sourceEnd)

#### 缓存区解码

toString(encoding)