var  fs =require("fs");
var buf=new Buffer("我爱你");
fs.appendFile("mes.txt",buf,{encoding:"utf8"},function(err){
    if(err){
        console.error(err)
    }
})