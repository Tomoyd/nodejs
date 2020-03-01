let express=require("express");
let path=require("path");

// 引入API 路由
let apiRouter=require("./routers/api_router");
let app=express();
let staticPath=path.resolve(__dirname,"static");
app.use(express.static(staticPath));
app.use("/api",apiRouter);
app.use(function (req,res) {
    res.send("Homepage")
})
app.listen(3000,()=>{console.log("http://localhost:3000")})
