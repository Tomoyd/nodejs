## HTTP服务

Node提供了http模块和https模块用于HTTP和HTTPS的封装

1. 引入http模块
2. 使用createServer方法,回调函数中传入req，res对象
3. 服务监听 listen(port,hostname,callbackFunc)

#### HTTP

> HTTP 超文本传输协议，在HTTP两端是服务器和浏览器，即著名的B/S模式

1. HTTP报文：报文头和报文体

#### HTTP模块

Node中继承TCP服务器(net模块)，能够与多个客户端保持连接，由于采用事件驱动的形式，并不为每个连接创建额外的线程或进程，保持很低的内存占用，

在开启keep-alive之后，一个TCP会话可以用于多次请求和响应，TCP服务以Connection为单位进行服务，HTTP服务以request为单位进行服务，http模块将connectio和request的过程进行了封装

1. HTTP请求

   对于TCP连接的读操作，HTTP模块将其封装为ServerRequest对象，报文头部会通过http_parser进行解析

2. 报文头的第一行为 方法  请求路径 请求协议版本

   - req.method属性：请求方法
   - req.url属性
   - req.httpVersion属性

   其余报文头是：key：value属性，被放到req.headers属性上

   报文体部分则抽象为一个只读流对象，如果业务逻辑需要读取报文体中的数据则要这个数据流结束后才能进行操作

   所以有data和end事件

3. HTTP响应

   HTTP响应头相对简单，封装了对低层连接的写操作，可以看成一个可写的流对象

   响应头部信息的API为 res.setHeader() res.writeHead();

   可以进行setHeader进行多次设置，但只有调用writeHead后，才写入连接中，http模块也会自动设置一些头信息

   报文体部分：

   调用，res.write()和res.end()实现

   res.end会先调用write写数据，然后告诉结束这次响应

   响应结束后，HTTP服务器可能将当前的连接用于下一个请求或者关闭连接，

   **值得注意的是：报头是在报文体发送前发送的，一旦开始了数据的发生，writeHead setHead不再生效**，结束时务必关闭连接，可以通过延时res.end实现客户端与服务器之间的长连接

4. Http服务的事件：

   - connection：在HTTP请求和响应前，客户端与服务器需要建立底层的TCP连接，这个连接建立时触发一次connection事件

   - request事件：当数据发送到服务端，在解析出HTTP请求头后将会触发该事件，res.end()后

     TCP连接可能将用于下一次请求响应

   - close：调用server.close()方法停止接受新的连接，当已有的连接都断开时，触发该事件，可以给server.close()方法传递一个回调函数快速注册该事件

   - connect：事件当客户端发起Connect时，触发，如果不监听，发起该请求的连接将会关闭

   - checkContinue：事件

   - upgrade事件，当客户端要求升级协议时会触发该事件

   - clientError事件：连接的客户端触发erro事件，这个错误传递到服务端，会触发该事件

#### HTTP客户端

http模块提供了一个底层的模块，

http.request(options,connect),用户构建HTTP客户端

option字段：hostname,port,path,method，localAddress，socketPath domain套接字路径，headers,auth

connect 回调函数监听返回的数据

报文体通过，request.write和request.end()实现

客户端的end() 结束请求

1. HTTP响应

   在CilentRequest对象中，事件叫做response，已解析响应报头就开始触发response事件，同时传递一个响应对象以供操作ClientResponse,后续响应报文体以只读流的形式提供

2. HTTP代理

   http模块包含一个默认代理对象，对每个服务器端创建的连接进行了管理，默认情况下，Client对象对同一服务器端发起的HTTP请求最多可以创建5个连接

3. 客户端事件

   - response事件：得到响应时触发该事件
   - socket事件当底层连接分配到当前对象时
   - connet：当前客户端向服务器发送connect前期时，如果响应了200状态码，客户端将会触发该事件
   - upgrade事件：客户端向服务器发起Upgrade请求，是服务器响应了101 状态，会触发该事件
   - continue：客户端向服务器端发送Expect：100-contineur试图发送大数据时，如果服务器响应了100 Continue状态 客户端将会触发该事件

   

