//import express
var express = require("express");
//import body-parser
var bodyparser = require("body-parser");
//create the Rest API
var app = express();
//Enable the CORS.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", 
                "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//set the json as MIME Type
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));
//import login module
var login = require("./login/login");
app.use("/login",login);
//import about module
var about = require("./about/about");
app.use("/about",about);
//import the contact module
var contact = require("./contact/contact");
app.use("/contact",contact);
//import portfolio module
var portfolio = require("./portfolio/portfolio");
app.use("/portfolio",portfolio);

/*
var users = require("./users/users");
app.use("/users",users);
*/ 

//assign the port no.
app.listen(8083);
console.log("KT Listening the port no.8083");