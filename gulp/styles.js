'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var sass = require('gulp-sass');
var rsass = require('gulp-ruby-sass');
var log = require('./log');
var args = require('yargs').argv;

gulp.task('styles:lint', function() {
  log('lint scss with scss-lint');
  return gulp.src(config.styles.scss)
    .pipe($$.plumber())
    .pipe($$.cached('scssLinting'))
    .pipe($$.scssLint());
});

gulp.task('styles', function() {
  log('compile scss to css');

  return gulp.src(config.styles.scss)
    .pipe($$.plumber())
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.sourcemaps.init())
    .pipe(sass())
    .pipe($$.sourcemaps.write())
    .pipe(gulp.dest(config.styles.dist));
});
