'use strict';
module.exports = function() {
  var root = './';
  var gulpTasks = './gulp/';
  var config = {
    root: root,
    gulpTasks: gulpTasks + '**/*.js',
    allJs: ['./src/**/*.js', './*.js']

  };
  return config;
};
