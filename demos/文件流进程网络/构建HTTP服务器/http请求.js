/*
* http.request(options handler) 返回一个ClientRequest对象
*on response 响应事件
* */

let request=require("http").request({method:"POST",host:"localhost",port:4000,path:"/Tomo.jpg"},function (response) {
    let wf=require("fs").createWriteStream(require("path").join(__dirname,"/Tomo.jpg"),{flags:"w+"})
    console.log(response.statusCode,response.httpVersion,response.headers,)
    response.pipe(wf)
    // response.on("data",function (data) {
    //     console.log(data.toString())
    // })
});
request.write("Hello");
request.end()
request.on("error",function (err) {
    console.log(err)
})
