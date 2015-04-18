'use strict';
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV;
var dist = 'dist';
var dev = 'src/app';
var root = '/';
var staticFiles;

app.set('port', port);
if (env === 'production') {
  staticFiles = dist;
  app.use(express.static(dist));
}else {
  staticFiles = + dev;
  app.use(express.static(dev));
}

var router = express.Router();
router.get(root, function (req, res) {
  res.sendFile(staticFiles);
});
app.use(router);
console.log('ENV = ', env);
console.log('PORT = ', port);
app.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});