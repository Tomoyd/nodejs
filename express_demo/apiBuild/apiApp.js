let express=require("express");
let app=express();
let api1=require("./api1");
let api2=require("./api2");
app.use("/v1",api1);
app.use("/v2",api2);
app.use(function (req,res) {
    res.end("homepage")
});
app.listen(3000,()=>{
    console.log("http://localhost:3000")
});
