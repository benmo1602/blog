// express_cookie.js 文件

// 使用中间件向 Node.js 服务器发送 cookie 信息
var express = require("express");
var cookieParser = require("cookie-parser");
var util = require("util");

var app = express();
app.use(cookieParser());

app.get("/", function(req, res) {
  console.log("Cookies: " + util.inspect(req.cookies));
});

app.listen(8081);
