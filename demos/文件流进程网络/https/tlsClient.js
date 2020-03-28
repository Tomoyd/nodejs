let tls=require("tls");
let fs=require("fs");
let path=require("path")
const serverOption={
    key:fs.readFileSync(path.join(__dirname,"keys","client_key.pem")),
    cert:fs.readFileSync(path.join(__dirname,"keys","client_cert.pem"))
};
process.stdin.resume()
let client=tls.connect(4000,"localhost",serverOption,function () {
    console.log("connect")
    process.stdin.pipe(client,{end:false})
    client.pipe(process.stdout)
})
