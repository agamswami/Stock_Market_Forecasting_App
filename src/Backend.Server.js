var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

const uri = "mongodb+srv://test1:test1@cluster0.o8cemqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){});





