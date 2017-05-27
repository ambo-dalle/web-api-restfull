var User = require('../models/user_model');
const bcrypt = require('bcrypt')

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
          password : req.body.password,
          role : req.body.role || 'user'
          // bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
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

var updateUser = (req, res)=>{
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
     findAllUsers,
     findOneUser,
     insertUser,
     updateUser
}
