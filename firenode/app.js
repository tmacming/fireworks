var mysql  = require('mysql');  
var express = require('express');
var app = express();


var connection = mysql.createConnection({     
  host     : 'localhost',       
  user     : 'root',              
  password : '',       
  port: '3306',                   
  database: 'firewoks' 
}); 
 
connection.connect();


app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
    });

//产品路由
app.get('/data', function(req, res){
    connection.query('SELECT * FROM product', function (err, result) {	  
    if(err) throw err;
    res.send(result)
    });
});

//厂容厂貌路由
app.get('/looks', function(req, res){
    connection.query('SELECT * FROM looks', function (err, result) {	  
    if(err) throw err;
    res.send(result)
    });
});

//图片路由
app.get('/picture/*', function (req, res) {
    res.sendFile( __dirname + "/" + req.url );
});

//moban产品中心路由
app.get('/moban', function(req, res){
    id = req.query.id || 1;
    connection.query(`SELECT * FROM product where id=${id}`, function(err, result){
        if(err) throw err;
        res.send(result)
    })
});

//moban1厂容厂貌路由
app.get('/moban1', function(req, res){
    id = req.query.id || 1;
    connection.query(`SELECT * FROM looks where id=${id}`, function(err, result){
        if(err) throw err;
        res.send(result)
    })
});
app.listen(3000);