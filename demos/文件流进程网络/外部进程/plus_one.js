process.stdin.resume();
process.stdin.on("data",function (data) {
    var number;
    try{
        number=parseInt(data.toString(),10)
        number+=1
        process.stdout.write(number+"")
    }catch (e) {
        process.stderr.write(e.message)
    }
})
process.on("SIGTERM",function () {
    console.log("HELLo")
})
require("http").createServer(function (req,res) {

}).listen(3000)
