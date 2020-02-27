const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    fs.readFile(__dirname+"/index.html",'utf-8',(err,data)=>{
        if(err){
           res.setHeader("Content-type","text/plain") ;
           res.statusCode=404;
           res.end("Not Found");
        }else{
            res.setHeader("Content-type","text/html") ;
            res.statusCode=200;
            res.end(data);
        }
    })
});
const port=3000;
const hostname="127.0.0.1"
server.listen(port,hostname,()=>{
    console.log("Server running at http://"+hostname+":"+port)
});
