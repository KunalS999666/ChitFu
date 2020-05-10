//import the db_connection
var conn = require("../config/db_connection");
//import generateToken
var g_token = require("../token/generateToken");
//import db_properties to store the token
var prop = require("../config/db_properties");
//import the express
var express = require("express");
//create the Router Instance
//Router Used to create the Modules
var router = express.Router();
//create the connection object
var connection = conn.getConnection();
//connect to database 
connection.connect();
//create the post request
router.post("/",function(req,res){ 
    var uname = req.body.kunal;
    var upwd = req.body.upwd;
    console.log(uname,upwd);
    connection.query("select AdName from mcpadmin where AdName='"+uname+"' and AdPassword='"+upwd+"'",
                function(err,recordsArray,fields){
                    console.log(recordsArray);
        if(recordsArray.length>0 && recordsArray!=undefined){
            var token = g_token(uname,
                                upwd,
                                'kunal@gmail.com');
            prop.token = token; 
            res.send({status:"success",
                     token:prop.token,
                     ResponseArray:recordsArray});                   
        }else{
            res.send({status:"fail"});
        }
    });
});
module.exports = router;



