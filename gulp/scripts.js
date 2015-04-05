'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config.js')();
var args = require('yargs').argv;

gulp.task('lintJs', function(done) {
  console.log('lint Js');
  var files = [].concat(config.allJs, config.gulpTasks);
  return gulp.src(files)
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.jshint('.jshintrc'))
    .pipe($$.jshint.reporter('jshint-stylish'))
    .pipe($$.jshint.reporter('fail'))
    .pipe($$.jscs());
});
