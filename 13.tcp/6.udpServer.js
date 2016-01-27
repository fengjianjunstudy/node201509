var dgram = require('dgram');
var socket = dgram.createSocket('udp4');
socket.on('message',function(msg,rinfo){
  console.log(msg.toString());
  console.log(rinfo);
    socket.send(msg,0,msg.length,rinfo.port,rinfo.address);
});
socket.on("close",function(){
    console.log("close")
})
socket.on("listening",function(){
    console.log("start listening")
})
socket.bind(41234,'localhost');
