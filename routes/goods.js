var express = require('express');
var router = express.Router();
require('dotenv').config();  //引用env文件
var mysql = require('mysql'); //引用数据库文件
const db_host = process.env.DB_HOST
const db_name = process.env.DB_NAME
const db_user = process.env.DB_USER
const db_pwd = process.env.DB_PASSWORD
const request = require('request'); //引用发送请求
//数据库参数
// var connection = mysql.createConnection({
//     host: db_host,
//     user: db_user,
//     password:db_pwd,
//     database: db_name,
// });
// //数据库连接
// connection.connect();
// connection.query("select * from user",function(err,result){
//         if(err){
//             console.log("失败");
//         }
//         console.log(result)
// });

/* GET users listing. */
router.get('/', function(req, res, next) {

});

router.get('/list', function(req, res, next) {
    //请求shop接口
    var url = "http://local.shop1.com/api/goods";
    var options = {
        headers: {'user-agent': 'node.js'}
    };
    //发送get请求
    request(url,options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});
router.get('/detail', function(req, res, next) {
    console.log(req.query.id);
    //请求shop接口
    var url = "http://local.shop1.com/api/goodsdetail?id="+req.query.id;
    //发送get请求
    request(url,function (error, response,body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});
module.exports = router;
