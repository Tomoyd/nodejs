const http=require("http");
const fs=require("fs");
const ejs=require("ejs")
const qs=require("querystring")
const posts=[]
const template=fs.readFileSync(__dirname+"/hello.ejs","utf-8")
const server=http.createServer((req,res)=>{
    if(req.method.toUpperCase()==="POST"){
        req.data="";
        req.on("readable",()=>{
            let chr=req.read();
            if(chr){
                req.data+=chr
            }
        })
        req.on("end",()=>{
            posts.push(qs.parse(req.data).content)
            showForm(posts,res)
        })
    }else{
        showForm(posts,res)
    }
});
const port=3000;
const hostname="127.0.0.1"
server.listen(port,hostname,()=>{
    console.log("Server running at http://"+hostname+":"+port)
});
function showForm(_posts,res) {
    let data=ejs.render(template,{
        title:"hello ejs",
        posts:_posts
    })
    res.setHeader("Content-type","text/html") ;
    res.statusCode=200;
    res.end(data);
}
