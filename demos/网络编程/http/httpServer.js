let http=require("http");
let httpServer=http.createServer((req,res)=>{

    req.on("data",(data)=>{
        console.log("reqData")
    });
    req.on("end",()=>{
        console.log(888)
        res.writeHead(200,{'Content-Type':"text/plain"});
        res.end("1234")
    })
});
httpServer.listen(4000,"localhost",()=>{
    console.log("http://localhost:4000")
})
