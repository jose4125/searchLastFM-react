'use strict';
module.exports = function() {
  var root = './';
  var gulpTasks = './gulp/';
  var app = './src/app/';
  var dist = './dist/';
  var server = './server/';
  var bower = './bower_components/';
  var config = {
    root: root,
    app: app,
    dist: dist,
    server: server,
    source: 'src/',
    gulpTasks: gulpTasks + '**/*.js',
    allJs: ['./src/scripts/**/*.js', './*.js'],
    styles: {
      styl: app + 'styles/**/*.styl',
      dist: dist + 'styles/',
      dev: app + 'styles/'
    },
    defaultPort: 3000,
    nodeServer: server + 'server.js' ,
    broserReloadDelay: 1000,
    fonts: {
      bower: bower + 'components-font-awesome/fonts/**/*.*',
      dist: dist + 'fonts/'
    },
    images: {
      app: app + 'images/',
      dist: dist + 'images/'
    },
    templates: {
      file: 'templates.js',
      options: {
        module: 'app.templates',
        standAlone: false,
        root: 'app/'
      }
    },
    views: {
      templates: './views/**/*.html',
      app: './views/templates/'

    }
  };
  return config;
};
