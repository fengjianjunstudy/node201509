/**
 * Created by fengjj on 2015/12/31.
 */
var fs=require("fs");
fs.rename("./fs_watch.js","./fs_watch1.js",function(err){
    if(err){
        console.log(err);
    }
})