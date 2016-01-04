var Readable=require("stream").Readable;
var util=require("util");
var fs=require("fs");
var writer=fs.createWriteStream("write.txt")
util.inherits(Counter,Readable)
function Counter(opts){
    Readable.call(this,opts);
    this._max=100000;
    this._index=1;
}
Counter.prototype._read=function(){
    var i=this._index++;
    if(i>this._max){
        this.push(null)
    }else{
        var str="love"+i;
        var buf=new Buffer(str,"utf8");
        this.push(buf);
    }
}
var counter=new Counter();
counter.pipe(writer)


