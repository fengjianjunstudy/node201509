var fs=require("fs");
var opts={
    flags:"r",
    start:1,
    end:6,
    autoClose:true
};
var file=fs.createReadStream("line.txt",opts)
file.on("open",function(err){
    console.log("开始读取文件")
})
file.on("data",function(data){
    console.log(data)
    console.log("读取到文件")
})
file.on("end",function(){
    console.log("文件已经全部读取完毕")
})
file.on("close",function(err){
    console.log("文件被关闭")
})
file.on("error",function(){
    console.log("读取文件失败")
})