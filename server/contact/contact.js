//import the express
var express = require("express");
//import mongodb
var mongodb = require("mongodb");
//import db_properties
var prop = require("../config/db_properties");
//create the Router
var router = express.Router();
//create the MongoClient
var KTconnect = mongodb.MongoClient;
//create the Post Rest API.
router.post("/",function(req,res){
    var token = req.body.token;
    if(token == prop.token){
        KTconnect.connect("mongodb://localhost:27017/poc",
                    function(err,db){
            db.collection("products")
                    .find()
                    .toArray(function(err,array){
                res.send(array);
            });
        });
    }else{
        res.send("UnAuthorized User !");
    }
});
//export the router
module.exports = router;