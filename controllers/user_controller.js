var User = require('../models/user_model');
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
require('dotenv')

var SignUp = (req,res,next) =>{
     User.findOne({username : req.body.username})
     .then ((docs)=>{
          if(docs) {
               res.send('User name already exists')
          } else {
               User.findOne({email : req.body.email})
               .then((result)=>{
                    console.log(result);
                    if(result) {
                         res.send('This email already exists')
                    } else {
                         var insertUser = new User ({
                              fullname : req.body.fullname,
                              username : req.body.username,
                              email : req.body.email,
                              password : bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
                              role : req.body.role || 'user'
                         })
                         insertUser.save((err, response)=>{
                              if(err) {
                                   res.send(err.message)
                              } else {
                                   res.send(response);
                              }
                         })
                    }
               })
               .catch((err) => {
                    res.send(err.message)
               })
          }
     })
     .catch((err) => {
          res.send(err.message);
     })
}


var SignIn =  (req,res,next)=> {
  var getUser = User.findOne({username : req.body.username})
  getUser.exec(function(err, user){
    bcrypt.compare(req.body.password, user.password)
      .then((value)=>{
        if(value == true){
          let token = jwt.sign({username: user.username, name:user.name}, 'process.env.JWT_SECRET')
          res.send({
               token: token,
			msg : user.msg
          })
        }
        else{
          res.send('password tidak cocok')
        }
      })
  })
}

var findAllUsers = (req,res,next)=>{
     User.find({}, (err, docs)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     })
}

var findOneUser = (req,res,next)=>{
     User.findOne({_id : req.params.id}, (err,docs)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     })
}

var insertUser = (req,res,next)=>{
     var insert = new User ({
          fullname : req.body.fullname,
          username : req.body.username,
          email : req.body.email,
          password : req.body.bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10)),
          role : req.body.role || 'user'

     })
     insert.save((err, docs) =>{
          if (err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     })
}

var deleteUser = (req,res,next) =>{
     User.remove({_id:req.params.id}, (err,docs)=>{
          if (err) {
               console.log(err.message);
          } else {
               res.send(docs)
          }
     })
}

var updateUser = (req, res,next)=>{
  User.findById(req.params.id, (err, docs) => {
   if (err) res.send(err)
   User.updateOne({
      _id: docs._id
   }, {
      $set: {
           fullname : req.body.fullname || docs.fullname,
           username : req.body.username || docs.username,
           email : req.body.email || docs.email,
           password : req.body.password || docs.password,
           role : req.body.role || docs.role
      }
   }, (err, result) => {
      if (err) res.send(err)
      res.send(result)
   })
  })
}



module.exports = {
     SignUp,
     SignIn,
     findAllUsers,
     findOneUser,
     insertUser,
     updateUser,
     deleteUser
}
