'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');
var args = require('yargs').argv;

gulp.task('styles:lint', function() {
  log('lint styl with stylint');
  return gulp.src(config.styles.styl)
    .pipe($$.plumber())
    .pipe($$.cached('stylint'))
    .pipe($$.stylint());
});

gulp.task('styles:dev', function() {
  log('compile styl to css');

  return gulp.src(config.styles.styl)
    .pipe($$.plumber())
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.sourcemaps.init())
    .pipe($$.stylus())
    .pipe($$.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    .pipe($$.csso())
    .pipe($$.sourcemaps.write())
    .pipe(gulp.dest(config.styles.dev));
});

gulp.task('styles:prod', function() {
  log('compile styl to css');

  return gulp.src(config.styles.styl)
    .pipe($$.plumber())
    .pipe($$.if(args.verbose, $$.print()))
    .pipe($$.sourcemaps.init())
    .pipe($$.stylus())
    .pipe($$.autoprefixer({browsers: ['last 2 version', '> 5%']}))
    //.pipe($$.csso())
    .pipe($$.sourcemaps.write())
    .pipe(gulp.dest(config.styles.dist));
});
