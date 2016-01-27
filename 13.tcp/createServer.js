var net = require('net');
var server = net.createServer(function(c) { // 'connection' 监听器
    console.log('服务器已连接');
    c.on('end', function() {
        console.log('服务器已断开');
    });
    c.write('hello\r\n');
    c.pipe(c);
    c.on("data",function(data){
        console.log(data.toString())
    })
});
server.listen(8188, function() { // 'listening' 监听器
    console.log('服务器已绑定');
});
