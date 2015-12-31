var fs=require("fs");
fs.unlink("line1.txt",function(err){
    console.log(err)
})