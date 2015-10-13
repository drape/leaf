var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', routes.index);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res) {
  res.render('badroute', {
    title: 'Bad route'
  });
});

io.on('connection', function(socket) {
  console.log('User connected');
  socket.on('disconnect', function(){
    console.log('User disconnected')
  });
});

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
    console.log('message ' + msg);
  });
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function() {
  console.log('Listening on *:3000');
});
