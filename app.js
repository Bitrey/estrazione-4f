var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var socket = require("socket.io");
require("dotenv").config();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
    res.render("index");
});

const PORT = Number(process.env.PORT) || 3000;
const IP = process.env.IP || "127.0.0.1";

app.listen(PORT, IP, function () {
    console.log("Server Started!");
});
