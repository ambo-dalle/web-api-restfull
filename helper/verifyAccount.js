var jwt = require('jsonwebtoken');

var verifyAdminOnly = (req,res,next) => {
     var token = req.headers.token;
     var decode = jwt.verify(token, 'SECRETUSER')
     console.log(decode.role);
     if(decode.role == 'admin') {
          next();
     } else {
          res.send('YOU ARE NOT ADMIN')
     }
}

var verifyAminUser =(req,res,next) =>{
     var token = req.headers.token;
     var decode = jwt.verify(token, 'SECRETUSER' )
     if (decode.role  == 'admin' || decode.role  == 'user') {
          next();
     } else {
          res.send(' YOU ARE NOT AUTHORIZE ')
     }
}

module.exports = {
     verifyAdminOnly,
     verifyAminUser
}
