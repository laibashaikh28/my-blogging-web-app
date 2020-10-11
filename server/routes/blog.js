const express = require('express');
const mysql = require('mysql');
var bodyParser = require('body-parser');

const router = express.Router();
const cors = require("cors");
router.use(cors());

router.use(bodyParser.json());
router.use(
    bodyParser.urlencoded({
        extended:false
    })
)

  const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: '28082000',
    database: 'mydb'
  });

  mysqlConnection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "CREATE TABLE IF NOT EXISTS blogs(blog_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, content TEXT)";
    mysqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  router.post('/done', (req, res) => {
  
    var blog={
      content: req.body.content,
      type: req.body.type,
      date: new Date()
  
  } 
    console.log(req.body);

    var sql = "INSERT INTO blogs( `content`,`type`, `date`) values('"+ blog.content +"', '"+ blog.type +"', '"+ blog.date +"')";
    mysqlConnection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("blog inserted");
    });
})
  module.exports = router;