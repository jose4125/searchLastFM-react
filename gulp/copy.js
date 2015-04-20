'use strict';
var gulp = require('gulp');
var config = require('../gulp.config')();
var log = require('./log');

gulp.task('copy:index', function() {
  log('copy index to dist');
  return gulp.src(config.app + 'index.html')
    .pipe(gulp.dest(config.dist));
});

gulp.task('fonts', function() {
  log('copy fonts');
  gulp.src(config.fonts.bower)
    .pipe(gulp.dest(config.fonts.dist));
});
