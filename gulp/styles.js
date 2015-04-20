'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');
var args = require('yargs').argv;

gulp.task('styles:lint', function() {
  log('lint scss with scss-lint');
  return gulp.src(config.styles.scss)
    .pipe($$.plumber())
    .pipe($$.cached('scssLinting'))
    .pipe($$.scssLint());
});

gulp.task('styles:dev', function() {
  log('compile scss to css');

  return gulp.src(config.styles.scss)
    .pipe($$.plumber())
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.sourcemaps.init())
    .pipe($$.sass())
    .pipe($$.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe($$.csso())
    .pipe($$.sourcemaps.write())
    .pipe(gulp.dest(config.styles.dev));
});

gulp.task('styles:prod', function() {
  log('compile scss to css');

  return gulp.src(config.styles.scss)
    .pipe($$.plumber())
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.sourcemaps.init())
    .pipe($$.sass())
    .pipe($$.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe($$.csso())
    .pipe($$.sourcemaps.write())
    .pipe(gulp.dest(config.styles.dist));
});
