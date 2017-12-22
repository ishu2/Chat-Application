var express=require('express');
var socket=require('socket.io');

// app setup
var app=express();
var server=app.listen(4000,function(){
    console.log('listening to port 2000');
});

// static files acces
app.use(express.static('public'));

// socket setup
var io=socket(server);
io.on('connection',function(socket){
    console.log('socket connection is established',socket.id)

    socket.on('chat',function(data){
        io.sockets.emit('chat',data);
    })

    socket.on('typing',function(data){
        socket.broadcast.emit('typing',data)
    })

});