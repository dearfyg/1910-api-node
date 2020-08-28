var express = require('express');
var router = express.Router();
const request = require('request'); //引用发送请求
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
    //TODO 登录
    var url = "http://passport.shop1.com/api/mobileLogin";
    request.post({
        url:url,
        form:{user:req.body.user,user_pwd:req.body.user_pwd}},
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
    })
});
router.post('/reg', function(req, res, next) {
    //TODO 注册逻辑
    var url = "http://passport.shop1.com/api/mobileReg";
    request.post({
            url:url,
            form:{user_name:req.body.user_name,user_pwd:req.body.user_pwd,user_phone:req.body.phone}},
        function(error, response, body) {
            if (!error && response.statusCode == 200) {
                res.send(body);
            }
        })
});
module.exports = router;
