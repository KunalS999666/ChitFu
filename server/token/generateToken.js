var jwt = require("jwt-simple");
module.exports = function(arg1,arg2,password){
    return jwt.encode({'uname':arg1,'upwd':arg2},
                      password);
};