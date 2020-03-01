var express=require("express");
var http=require("http");
var logger=require("morgan");
var path=require("path");
var bodyParser=require("body-parser")
var app=express();
var publicPath=path.resolve(__dirname,"public");
var viewPath=path.resolve(__dirname,"views");
app.set("views",viewPath)
// 可以直接访问请求静态文件
app.use(express.static(publicPath));
//设置视图引擎
app.set("view engine","ejs");
//设置全局变量
var entries=[]
app.locals.entries=entries

app.use(logger("dev"));
app.use(bodyParser.urlencoded({extends :false}))
app.use(function (request,response,next) {
    console.log(request.method,request.url,request.httpVersion);
    next()
});
// app.use(function (request,response,next) {
//     var mimute=(new Date()).getMinutes();
//     if((mimute%2===0)){
//         next()
//     }else{
//         response.statusCode=403;
//         response.end("Not authorized");
//     }
//     console.log(mimute)
// });



app.get("/",function(request,response){
    response.render("index",{
        message:"Hey everyone! This is my webpage"
    })
    // response.end("Welcome to My Homepage")
});
app.get("/about",function (request,response) {
    response.end("about")
});
app.get("/about/:word",function (request,response) {
    response.setHeader("Content-Type","text/plain;charset=utf-8")
    response.end("about带有匹配的"+request.params.word)
});
app.get("/weather",function (request,response) {
    response.end("weather")
});
app.use(function (request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.end("Hello world 404");
});
http.createServer(app).listen(3000,()=>{
    console.log("http://localhost:"+3000)
});
