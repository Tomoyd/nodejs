let express=require("express");
let api2=express.Router();
api2.get("/timezone",function(req,res){
    res.send("v2 timezone")
});
module.exports=api2
