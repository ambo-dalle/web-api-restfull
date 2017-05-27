const express = require ('express');
const app = express();
var bodyParser = require('body-parser')


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose_crud', ()=>{
     console.log('connect to Database');
});

var memo = require('./routes/memo')
var users = require('./routes/users')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}))


app.use('/memo', memo);
app.use('/users', users);



app.listen(3000, ()=>{
     console.log('live on');
})
