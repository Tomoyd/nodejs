let http=require("http");
let fs=require("fs");
let path=require("path");

http.createServer(function (req,res) {

    req.setEncoding("utf8")
    let url=decodeURI(req.url)
    let filepath=path.join(__dirname,"static",path.normalize(url))
    if(fs.existsSync(filepath)){
      let stat= fs.statSync(filepath);
      if(stat.isDirectory()){
          res.writeHead(403);
          res.end("Forbidden")
      }else{
          let rs=fs.createReadStream(filepath);
          console.log(filepath)
          rs.on("error",()=>{res.writeHead(500);res.end("Internal Server Error")})
          res.writeHead(200)
          rs.pipe(res);
          res.on("end",()=>{
              console.log(end)
          })
      }
    }else{
        res.writeHead(404)
        res.end("NOT FOUND")
    }
}).listen(4000)
