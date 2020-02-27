let net=require("net");
let client=net.connect({port:9000},function () {
    console.log("client connect")
});
client.on("data",function (data) {
    console.log(data.toString("utf-8"));
    client.end();
});
client.on("end",function () {
    console.log("client disconnected")
})
