/**
 * Created by fengjj on 2015/12/30.
 */
var fs=require("fs");
fs.open("mes.txt","r",function(err,fd){
    fs.open("line.txt","a",function(err,fd1){
        var buf=new Buffer(3)
        var pos=0;
        var pos1=10;
        read_write()
        function read_write(){
            fs.read(fd,buf,0,3,pos,function(err,bytesRead,buffer){
                if(err){
                    console.error(err);
                }
                /*console.log(bytesRead);
                console.log(buf);
                console.log(buf.toString())*/
                if(bytesRead>0){
                    fs.write(fd1,buf,0,bytesRead,pos1,function(err,written,buffer){

                        if(bytesRead>0){
                            pos+=bytesRead;
                            pos1+=bytesRead;
                            read_write();
                        }else{
                            fs.fsync(fd1)
                            fs.close(fd1)
                        }
                    })
                }else{

                    fs.close(fd)
                }
            })
        }
    })
})