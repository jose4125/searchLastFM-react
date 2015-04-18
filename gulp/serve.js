'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');
var port = process.env.PORT || config.defaultPort;


gulp.task('serve:dev', function() {
  log('serving development environment');

  var isDev = true;
  var options = {
    script: config.nodeServer,
    env: {
      'PORT': port,
      'NODE_ENV': isDev ? 'development' : 'production'
    },
    watch: [config.server]
  };
  return $$.nodemon(options)
    .on('restart', function(event){
      log('====== Nodemon restarted =======');
      log('files changed on restart:\n' + event);
    })
    .on('start', function(){
      log('====== Nodemon started =======');
    })
    .on('crash', function(){
      log('====== Nodemon crashed =======');
    })
    .on('exit', function(){
      log('====== Nodemon exited cleanly =======');
    });
});