let express=require("express");
let allowed_IPS=[
    "127.0.0.1"
];
let api=express.Router();
api.get("/users",function (req,res) {
    res.end("/users")
});
module.exports=api
