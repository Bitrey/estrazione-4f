var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var socket = require("socket.io");
require('dotenv').config()

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("index");
});

app.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server Started!");
  });