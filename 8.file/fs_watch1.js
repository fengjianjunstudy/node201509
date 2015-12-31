/**
 * Created by fengjj on 2015/12/30.
 */
var fs=require("fs");
var watcher=fs.watch("fs_rmdir.js",function(event,filename){
    console.log(event);
    console.log(filename)
})
setTimeout(function(){
    watcher.close();
},5000)