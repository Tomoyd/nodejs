let express=require("express");
let path=require("path");
let fs=require("fs");
let logger=require("morgan")
let app=express();

// 自己编写的日志中间件
/*
app.use(function (req,res,next) {
    console.log(req.method,req.url,new Date());
    next();
});
*/


// 使用Morgan 日志中间件
app.use(logger("dev"))


// 自己编写的静态文件中间件
// app.use(function (req,res,next) {
//     let filepath=path.join(__dirname,"static",req.url);
//     console.log(filepath);
//     fs.exists(filepath,exists =>{
//         if(exists){
//             res.sendFile(filepath)
//         }else{
//             next()
//         }
//     })
// });


// 使用express 内置的静态文件中间件
app.use(express.static(path.resolve(__dirname,"static")))
app.use(function (req,res) {
    res.status(404).send("File not Found")
});
app.use(function (req,res,next,err) {
    res.status(500).send("Server Error")
});
app.listen(3000,()=>{
    console.log("http://localhost:3000")
})
