/*
* net模块的 connect方法或者createConnect
* */
var net=require("net");
var port=4001;
var host="localhost";
function connectionListener(socket) {
    console.log("We have a new connection")
}
var conn=net.createConnection(port,host,connectionListener);
conn.once("connect",connectionListener);
conn.on("data",function (data) {
    conn.write("hello")
});
conn.on("end",function () {
    conn.write("bye","utf8")
});
conn.on("error",function (err) {
    console.error("error:"+err.message)
})




