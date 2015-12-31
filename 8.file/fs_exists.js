/**
 * Created by fengjj on 2015/12/30.
 */
var fs=require("fs");
fs.exists("mes1.txt",function(exist){
    console.log(exist)
})