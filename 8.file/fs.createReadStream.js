/**
 * Created by fengjj on 2015/12/30.
 */
var fs =require("fs");
var opts={
    encoding:"utf8",
    autoClose:true,
    start:3
}
var readStream=fs.createReadStream("mes.txt",opts);
console.log(readStream.toString())