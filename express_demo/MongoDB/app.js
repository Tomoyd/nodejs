let express=require("express");
let mongoose=require("mongoose");

let path=require("path");
let bodyParser=require("body-parser");
let cookieParser=require("cookie-parser");
let session=require("express-session");
let flash=require("connect-flash");
let passport = require("passport")
let routes=require("./routers");
let setuppassport=require("./setuppassport");

let app=express();
// 连接MongoDB 服务器的test数据库
mongoose.connect("mongodb://admin:admin123@127.0.0.1:27017/test",{useNewUrlParser: true});
setuppassport();

app.set("port",process.env.PORT||3000);
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use("/static",express.static(path.resolve(__dirname,"assets")))
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookieParser());
app.use(session({
    secret:"TKRv0IJs=HYqrvagQ#&!F!%V]Ww/4KiVs$s,<<MX",
    resave:true,
    saveUninitialized:true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(routes);
app.listen(app.get("port"),"192.168.8.107",function () {
    console.log("Server started at http://192.168.8.107:"+app.get("port"))
});
