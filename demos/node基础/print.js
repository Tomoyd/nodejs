process.stdin.resume();
process.stdin.on("data",function (data) {
    var number;
    try{
        number=parseInt(data.toString(),10);
        console.log(number)
        number+=1
        process.stdout.write(number+"\n")
    }catch (e) {
        process.stderr.write(e.message+"\n")
    }
});
process.on("SIGHUP",function () {
    console.log("Got a SIGUSR2 signal")
})
console.log(999);
