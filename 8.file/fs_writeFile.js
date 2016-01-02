/**
 * Created by fengjj on 2015/12/30.
 */
var fs=require("fs");
fs.writeFile("mes.txt","hello work",function(err){
    console.log("write success")
})