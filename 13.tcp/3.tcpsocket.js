var net = require('net');
var util = require('util');
var fs = require('fs');
//net.Socket 双工流 Duplux
var ws = fs.createWriteStream('./socket.txt',"a");
var server = net.createServer({allowHalfOpen:true},function(socket){
  console.log(util.inspect(socket.address()));
  socket.on("data",function(data){
    console.log(data.toString())
  })
  socket.pipe(ws,{end:true});
  socket.on('end',function(){
    ws.end('再见');
    socket.unpipe(ws);
  });
})
server.on('error',function(err){
  console.log(err);
});
server.listen({
  host:"127.0.0.1",
  port:8088
},function(){
  console.log(util.inspect(server.address()));
});
