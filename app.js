const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

var url = 'mongodb:/localhost/web-api-restfull'


var memo = require('./routes/memo')
var users = require('./routes/users')


app.use('/memo', memo);
app.use('/users', users);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false}))

app.listen(3000, ()=>{
     console.log('live on');
})
