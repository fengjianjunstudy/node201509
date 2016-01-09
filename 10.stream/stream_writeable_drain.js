var fs=require("fs");
var writer=fs.createWriteStream("write.txt");
function  writeOneMillionTimes(writer,data,enconding,callback){
    var i=1000;
    write();
    function write(){
        var ok=true;
        do{
            if(i===0){
                writer.write(data,enconding,callback)
            }else{
                ok=writer.write(data,enconding,callback)
            }
        }while(i>=0 && ok)
        if(i>0){
            writer.once("drain",write)
        }
    }
}
writeOneMillionTimes(writer,"i love you","utf-8",function(){console.log("写入完毕")})