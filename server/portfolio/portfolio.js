//import db_properties
var prop = require("../config/db_properties");
//import fs module
var fs = require("fs");
//import express module
var express = require("express");
//create the router instance
var router = express.Router();
//create the post Rest API.
router.post("/",function(req,res){ 
    var token = req.body.token;
    if(token == prop.token){
        fs.readFile("E:/POC/static/sample.json",
                        function(err,data){
            res.send(data);
        });
    }else{
        res.send("UnAuthorized User...!");
    }
});
//export the Router
module.exports = router;