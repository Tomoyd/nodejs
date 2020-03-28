// Node js是被设计用来高效处理I/O操作的，子进程和父进程，父进程可以监控，控制子进程，父子进程可以进行通信
// 执行外部命令，当需要shell命令或者可执行文件时，可以使用child_process模块,不允许通信
/*var child_process=require("child_process");
// child_process.exec(command,options,callback)
var exec=child_process.exec
let options={
    timeout:10000,
    killSignal:"SIGKILL"
}
exec("npm -v",function (err,stdout,stderr) {
    if(err){throw err}
    console.log(stdout)
})*/

/*
* 生成子进程
* child_process.spawn
* */
var spawn=require("child_process").spawn;
var child=spawn("node",[require('path').resolve(__dirname,'print.js')]);
setInterval(function () {
    let number=Math.floor(Math.random()*10000);
    child.stdin.write(number+"\n");
    if(number>7000){
        child.kill("SIGHUP")
    }
},1000)
child.stdout.on("data",function (data) {
    console.log("node output:"+data.toString());
});
child.stderr.on("data",function (data) {
    console.log("node error data:",data.toString())
});
child.on("exit",function (code) {
    console.log("terminated with code "+code);
})
