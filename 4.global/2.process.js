process.argv.forEach(function(val,index,array){
    console.log(val,index,array);
});
var pid=process.pid;
process.kill(pid);