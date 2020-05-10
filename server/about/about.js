//import the db_connection
var conn = require("../config/db_connection");
//create the connection object
var connection = conn.getConnection();
//connect to database
connection.connect();
//import the express
var express = require("express");
//create the Router Instance
var router = express.Router();
//import db_properties for token
var prop = require("../config/db_properties");
//create the Post Request
router.post("/",function(req,res){
    var token = req.body.token;
    if(token == prop.token){
        connection.query("select * from mcpdetails",
                    function(err,recordsArray,fields){
            res.send(recordsArray);
        });
    }else{
        res.send("UnAunthorized User...!");
    }
});
//export the Router
module.exports = router;