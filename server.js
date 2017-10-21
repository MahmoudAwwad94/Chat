var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var request = require('request');

app.engine('jade', require('jade').__express);

app.use(express.static(__dirname + '/'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/dist', express.static(__dirname + '/dist'));

// app.use('/lib', express.static('bower_components'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
  'extended': 'true'
}));

app.use(bodyParser.json());
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));

app.use(methodOverride());

app.listen(8881);
console.log("Chat is listening on port 8881");
