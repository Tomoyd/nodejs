let http=require("http");
http.request("http://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp",
function(res) {
    console.log(res)

     res.on("data",(data)=>{
        console.log(data)
    })
}).end();

