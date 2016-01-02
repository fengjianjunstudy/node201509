/**
 * Created by fengjj on 2015/12/30.
 */
var fs=require("fs");
fs.watchFile("fs_rmdir.js",function(curr,prev){
    console.log(curr);
    console.log(prev)
})