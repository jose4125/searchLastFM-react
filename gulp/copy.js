var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');

gulp.task('copy:index', function() {
  log('copy index to dist');
  return gulp.src(config.app + 'index.html')
    .pipe(gulp.dest(config.dist));
})