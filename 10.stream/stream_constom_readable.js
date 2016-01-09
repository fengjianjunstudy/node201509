var Readable=require("stream").Readable;
var util=require("util");
util.inherits(SourceWrapper,Readable)
function SourceWrapper(opts){
    Readable.call(this,opts)
    this._source={};
    var self=this;
    this._source.ondata=function(chunk){
        if(!self.push(chunk)){
            self._source.readStop();
        }
    }
    this._source.onend=function(){
        self.push(null)
    }
}
SourceWrapper.prototype._read=function(){
    this._source.readStart();
}