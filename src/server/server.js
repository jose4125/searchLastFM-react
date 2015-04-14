var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV;
var dist = './dist/';
var root = '/';

app.use(express.static(dist));

var router = express.Router();
router.get('/', function (req, res) {
  res.sendFile(dist + 'index.html');
})
app.use(router);
app.listen(port);
//module.exports = app;
console.log('server run in ' + port);