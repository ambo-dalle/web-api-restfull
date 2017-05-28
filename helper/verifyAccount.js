var jwt = require('jsonwebtoken');

var verifyAdminOnly = (req,res,next) => {
     var token = req.headers.token;
     var decode = jwt.verify(token, 'process.env.JWT_SECRET')
     console.log(decode.role);
     if(decode.role == 'admin') {
          next();
     } else {
          res.send('YOU ARE NOT ADMIN')
     }
}

var verifyAminUser =(req,res,next) =>{
     var token = req.headers.token;
     var decode = jwt.verify(token, 'process.env.JWT_SECRET' )
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
