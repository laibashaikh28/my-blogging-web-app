const express = require('express');
const cors = require("cors");
const app = express();

app.use(cors());

var bodyParser = require('body-parser');
const mysql = require('mysql');
const pageRouter = require('./routes/blog');

// app.use(session({
// 	secret: 'secret',
// 	resave: true,
// 	saveUninitialized: true
// }));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}));

app.use('/static', express.static('public'))
app.use('/', pageRouter);


app.get('/',(req,res)=>{
    res.send('Hello from the product server');
})

app.listen(4000, () =>{
    console.log("Hello from the product server");
})

module.exports = app;
