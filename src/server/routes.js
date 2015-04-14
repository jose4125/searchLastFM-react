'use strict';
module.exports = function (app, root) {
  app.get('/', function (req, res) {
    console.log('root');
    //res.send('holaaa');
  });

};