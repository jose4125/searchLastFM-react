'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config.js')();
var args = require('yargs').argv;
var log = require('./log');

gulp.task('lintJs', function() {
  log('lint Js files with jshint and jscs');
  var files = [].concat(config.allJs, config.gulpTasks);
  return gulp.src(files)
    .pipe($$.plumber())
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.jshint('.jshintrc'))
    .pipe($$.jshint.reporter('jshint-stylish'))
    .pipe($$.jshint.reporter('fail'))
    .pipe($$.jscs());
});
