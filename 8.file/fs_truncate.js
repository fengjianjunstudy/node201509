var fs=require("fs");
fs.truncate("line.txt",10,function(err){
    if(err){
        console.log(err);
    }
    fs.stat("line.txt",function(err,stats){
        console.log(stats.size)
    })
})

