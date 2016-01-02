var fs=require("fs");
var out=fs.createWriteStream("mes.txt");
for(var i=0;i<100000;i++){
    var flag=out.write(i.toString())
    console.log(flag)
}
out.on("drain",function(){
    console.log("全部输出")
})
