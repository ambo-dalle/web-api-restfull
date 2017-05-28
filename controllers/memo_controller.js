var Memo = require('../models/memo_model');
const bcrypt = require('bcrypt')

var findAllMemo = (req,res,next)=>{
     Memo.find({})
     .populate('user')
     .exec((err,docs)=>{
          if(err) {
               res.send(err.message)
          } else {
               res.send(docs)
          }
     })
}

var findOneMemo = (req,res,next)=>{
     Memo.findOne({_id : req.params.id})
     .populate('user')
     .exec((err, docs)=>{
          if(err) {
               res.send(err)
          } else {
               res.send(docs)
          }
     })
}

var insertMemo =  (req, res)=>{
		var insertMemo = new Memo({
			memo : req.body.memo,
			user : req.body._id
		})

		insertMemo.save((error, response)=>{
			if(!error){
				res.send(response)
			}else{
				res.send(error)
			}
		})
	}


var deleteMemo = (req,res,next) =>{
     Memo.remove({_id:req.params.id}, (err,docs)=>{
          if (err) {
               console.log(err.message);
          } else {
               res.send(docs)
          }
     })
}


var updateMemo = (req, res)=>{
		Memo.findById(req.params.id)
		.then(docs=>{
			Memo.updateOne({
				memo : req.body.memo || docs.memo,
				user : docs.user
			})
			.then(result=>{
				res.send(result)
			})
			.catch(error=>{
				res.send(error)
			})
		})
		.catch(err=>{
			res.send(err)
		})
	}



module.exports = {
     findAllMemo,
     findOneMemo,
     insertMemo,
     deleteMemo,
     updateMemo
}
