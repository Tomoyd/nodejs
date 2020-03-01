let express=require("express");
let api1=express.Router();
api1.get("/timezone",function(req,res){
    res.send("v1 timezone")
});
module.exports=api1
