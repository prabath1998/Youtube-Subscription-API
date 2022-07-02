const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/UserDBex'

const app = express();

mongoose.connect(url,{useNewUrlParser:true});
const con = mongoose.connection

con.on('open',()=>{
    console.log('Connected..');
})

const userRouter = require('./routes/users')
app.use('/users',userRouter)

app.listen(9000,()=>{
    console.log('Server started..');
})
