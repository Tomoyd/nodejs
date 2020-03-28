let fs=require("fs");
let https=require("https");
let path=require("path");
const options ={
    key:fs.readFileSync(path.join(__dirname,"keys","server_key.pem")),
    cert:fs.readFileSync(path.join(__dirname,"keys","server_cert.pem")),
    requestCert:true,
    // rejectUnauthorized:true,
};
let server=https.createServer(options,function (req,res) {
    console.log(req.socket.authorized)
    console.log(req.socket.getPeerCertificate())
    res.end("hello world")
});
server.listen(4000,function () {
    console.log("https://localhost:4000")
})
