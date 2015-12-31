/**
 * Created by fengjj on 2015/12/30.
 */
var fs=require("fs");
fs.unlink("../kong/1.txt",function(err){
 fs.rmdir("../kong",function(err){
 if(err){
 console.log(err);
 }
 console.log("delete directory successful!!!")
 })
})
