//import mysql
var mysql = require("mysql");
//import db_properties
var prop = require("./db_properties");
//export json object
module.exports = {
    getConnection : function(){
        return mysql.createConnection({
            host:prop.host,
            user:prop.user,
            password:prop.password,
            database:prop.database
        });
    }
};