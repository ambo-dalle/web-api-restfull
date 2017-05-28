var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema ({
     fullname : { type : String, require : true  },
     username : { type : String, require : true  },
     email : {type : String, match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please fill a valid email'], required : true},
     password : { type : String, require : true  },
     role : { type : String, require : true  }
})

var User = mongoose.model('User', userSchema);

module.exports = User;
