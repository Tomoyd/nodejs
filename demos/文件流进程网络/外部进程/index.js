/*
* 执行命令和子进程
* cpu密集的可能会阻塞事件循环
* 分配给另一个进程处理
* 父进程可以控制子进行，可以进行通信
* */
//执行外部命令 使用exec 模块
/*
* exec缺点：只能使用命令行参数或者环境变量通信
* 子进程的输出是被缓存的，无法对其进行流操作，可能耗尽内存
* */
/*let child_process=require("child_process");
let exec=child_process.exec;
exec("node printTask.js",{timeout:1000,cwd:__dirname,env:{number:1234,color:"{name:'blue'}"}},function (err,stdout,stderr) {
    if(err){console.log("err")}
    console.log(stdout)
})*/

/*
* 生成子进程：
* commond [参数]
* */
let spawn=require("child_process").spawn;
let children=spawn("node",["plus_one.js"],{cwd:__dirname});
let timer=setInterval(function () {
    let number=Math.floor(Math.random()*1000);
    children.stdin.write(number+"");
    children.stdout.once("data",function (data) {
        console.log("child replied to " + number +" with "+data)
        clearInterval(timer)
        children.kill("SIGTERM")
    })
},1000);

children.stderr.on("data",function (data) {
    process.stdout.write(data)
});
children.on("exit",function (code,signal) {
    console.log(code,signal)
});
// require("http").createServer(function (req,res) {
//
// }).listen(3000)
