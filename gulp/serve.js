var gulp = require('gulp');
var browserSync = require('browser-sync');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');
var port = process.env.PORT || config.defaultPort;

gulp.task('serve:dev', function() {
  log('serving development environment');

  var isDev = true;
  var options = {
    script: config.nodeServer,
    exec: './node_modules/.bin/babel-node --presets es2015,stage-0',
    env: {
      PORT: port,
      NODE_ENV: isDev ? 'development' : 'production'
    },
    watch: [config.server]
  };
  return $$.nodemon(options)
    .on('restart', function(event) {
      log('====== Nodemon restarted =======');
      log('files changed on restart:\n' + event);

      setTimeout(function() {
        browserSync.notify('reloading now');
        browserSync.reload({stream: false});
      }, config.broserReloadDelay);
    })
    .on('start', function() {
      log('====== Nodemon started =======');
      startBrowserSync();
    })
    .on('crash', function() {
      log('====== Nodemon crashed =======');
    })
    .on('exit', function() {
      log('====== Nodemon exited cleanly =======');
    });
});

function changeEvent(event) {
  var srcPattern = new RegExp('/.*(?=/' + config.source + ')/');
  log('File ' + event.path.replace(srcPattern, '') + ' ' + event.type);
}

function startBrowserSync() {
  if (browserSync.active) {
    return;
  }

  log('starting Browser Sync on port' + port);

  gulp.watch([config.styles.styl], ['styles:dev'])
    .on('change', function(event) {
      changeEvent(event);
    });

  var options = {
    proxy: 'localhost:' + port,
    port: 8000,
    files: [config.app + '**/*.*', '!' + config.styles.scss, config.styles.dev + '**/*.css'],
    ghostMode: {
      clicks: true,
      location: false,
      forms: true,
      scroll: true
    },
    injectChanges: true,
    logFilesChanes: true,
    logLevel: 'debug',
    logPrefix: 'search-LastFM',
    notify: true,
    reladDelay: 1000
  };
  browserSync(options);
}
