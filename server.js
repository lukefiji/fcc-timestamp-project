var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.end("Hello World") 
}).listen(8080);