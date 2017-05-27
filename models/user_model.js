var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema ({
     fullname : { type : String, require : true  },
     username : { type : String, require : true  },
     email : { type : String, require : true  },
     pasword : { type : String, require : true  },
     role : { type : String, require : true  }     
})

var User = mongoose.model('User', userSchema);

module.exports = User;
