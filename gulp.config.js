'use strict';
module.exports = function() {
  var root = './';
  var gulpTasks = './gulp/';
  var app = './src/app/';
  var dist = './deploy/';
  var config = {
    root: root,
    app: app,
    dist: dist,
    gulpTasks: gulpTasks + '**/*.js',
    allJs: ['./src/**/*.js', './*.js'],
    styles: {
      scss: app + 'styles/**/*.scss',
      dist: dist + 'styles/'
    }
  };
  return config;
};
