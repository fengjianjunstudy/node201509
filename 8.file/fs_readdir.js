var fs=require("fs");
var path=require("path");
fs.readdir("../",function(err,files){
    files.forEach(function(file){

        fs.realpath(path.join("../",file),function(err,rp){
            console.log(rp === path.resolve(path.join("../",file)))
            console.log(path.join("../",file))
            console.log(path.sep)
            console.log(path.delimiter)
            console.log(path.extname(path.join("../",file)))
            fs.utimes(rp,new Date(),new Date(),function(err){
                if(err){
                    console.log(err)
                }
            })
        })
        fs.stat(path.join("../",file),function(err,stats){
            console.log(file)
            console.log("isFile",stats.isFile())
            console.log("isDirectory",stats.isDirectory())
            console.log("isSymbolicLink",stats.isSymbolicLink())
            console.log("mode",stats.mode)
            console.log("nlink",stats.nlink)
            console.log("size",stats.size)
            console.log("atime",stats.atime)
            console.log("mtime",stats.mtime)
            console.log("ctime",stats.ctime)

        })
    });
})