'use strict';
module.exports = function() {
  var root = './';
  var gulpTasks = './gulp/';
  var app = './src/app/';
  var dist = './dist/';
  var server = './src/server/';
  var config = {
    root: root,
    app: app,
    dist: dist,
    server: server,
    source: 'src/',
    gulpTasks: gulpTasks + '**/*.js',
    allJs: ['./src/**/*.js', './*.js'],
    styles: {
      scss: app + 'styles/**/*.scss',
      dist: dist + 'styles/',
      dev: app + 'styles/'
    },
    defaultPort: 3000,
    nodeServer: server + 'server.js',
    broserReloadDelay: 1000
  };
  return config;
};
