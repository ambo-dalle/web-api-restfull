var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var memoSchema = new Schema ({
     memo : {
          type : String,
          require : true
     },
     user : [{
          type : Schema.Types.ObjectId, ref : 'User'
     }]
})

var Memo = mongoose.model('Memo', memoSchema);

module.exports = Memo;
