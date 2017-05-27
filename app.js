const express = require ('express');
const app = express();

var memo = require('./routes/memo')
var users = require('./routes/users')


app.use('/memo', memo);
app.use('/users', users);



app.listen(3000, ()=>{
     console.log('live on');
})
