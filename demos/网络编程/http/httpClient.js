let http=require("http");
let client=http.request({
    hostname:"localhost",
    port:4000,
    method:"GET",
    path:"/"
},(res)=>{
    res.setEncoding("utf8");
    res.on("data",(data)=>{
        console.log(data)
    })

});
client.write("999")
client.end()

