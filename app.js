require('dotenv').config();

var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    flash           = require("connect-flash"),
    cloudinary      = require("cloudinary"),
    ejs             = require("ejs"),
    multer          = require("multer"),
    methodOverride  = require("method-override");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());

app.get('/', function(req, res){
    res.render("home");
});

app.get('*', function(req, res){
    res.redirect("back");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started...");
});