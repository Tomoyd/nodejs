/*
* TLS
* 传输层安全 Transport Layer Security
* SSL
* 安全套接字层 Secure Socket Layer
* 防止窃听和篡改的方式进行通信，
* TLS和SSL会在传输层上对网络连接进行加密
* */
/*
* 公钥加密：需要两个独立密钥的加密系统
* 一个密钥用来加密明文，另一个密钥解密已加密的消息
* 其中一个是公有的，一个是私有的
* 如果明文使用公钥加密，那么只能用私钥解密
* 如果明文用私钥加密，那么公钥可以对其进行解密，这种情况下系统会验证私钥拥有者在文档上的签名
* 公钥证书：使用数字签名绑定公钥和身份信息，文档会由认证中心进行签名，认证中心会完成验证匹配公钥的身份信息的过程
* 每台计算机都会定义一组根认证中心，在默认情况下用他们验证认证和认证链
*
* */

let tls=require("tls");
let fs=require("fs");
let path=require("path")

const serverOption={
    key:fs.readFileSync(path.join(__dirname,"keys","server_key.pem")),
    cert:fs.readFileSync(path.join(__dirname,"keys","server_cert.pem")),
    ca:[fs.readFileSync(path.join(__dirname,"keys","client_cert.pem"))],
    requestCert:true,
    rejectUnauthorized:true
};
let server=tls.createServer(serverOption);
server.listen(4000,function () {
    console.log("https://localhost:4000",server.address().port)
});
server.on("secureConnection",function (stream) {
    console.log(stream.authorized)
    stream.on("data",function (data) {
        console.log(data.toString())
    })
    // stream.write("Hello")
    // stream.end();
})
