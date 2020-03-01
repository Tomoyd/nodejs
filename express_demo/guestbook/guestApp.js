let http=require("http");
let express=require("express");
let logger=require("morgan");
let bodyParser=require("body-parser");
let path=require("path");

let app=express();

// 设置模板引擎
let viewsPath=path.resolve(__dirname,"guestViews");
app.set("views",viewsPath);

app.set("view engine","ejs");

//设置全局变量
let entries=[];
app.locals.entries=entries;

// 使用morgan 进行日志记录
app.use(logger("dev"));
//设置解析表单提交中间间，所有的信息保存在req.body中
app.use(bodyParser.urlencoded({extends:false}));

// 设置路由主页
app.get("/",function (req,res) {
    res.render("index")
});
// 新留言页面
app.get("/new-entry",async function (req,res) {
     res.render("new-entry");
});
// POST新建路由
app.post("/new-entry",function (request,response) {
    if(!request.body.title||!request.body.body){
        response.status(400).send("Entries must have a title and a body")
        return
    }
//    添加新留言到 entries中
    entries.push({
        title:request.body.title,
        content:request.body.body,
        published:new Date()
    });
    response.redirect("/")
});

app.use(function (request,response) {
    response.status(404).render("404")
});
http.createServer(app).listen(4000,function () {
    console.log("site is at http://localhost:4000")
});
