var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
  res.sendfile('index.html');
});
io.on('connection', function(socket){
  console.log('user connected');
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});
http.listen(3000, function(){
  console.log('listening on *:3000');
});
var app=angular.module('myApp',[]);
app.controller('mainController',['$scope',function($scope){
 var socket = io.connect();
 $scope.send = function(){
  socket.emit('chat message', $scope.message);
  $scope.message="";
 };
 socket.on('chat message', function(msg){
  var li=document.createElement("li");
  li.appendChild(document.createTextNode(msg));
  document.getElementById("messages").appendChild(li);
 });
}]);