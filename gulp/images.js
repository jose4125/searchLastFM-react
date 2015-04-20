'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var pngquant = require('imagemin-pngquant');
var config = require('../gulp.config')();
var log = require('./log');

gulp.task('images', function () {
  log('Copying and minify PNG, JPEG, GIF and SVG images');

  gulp.src(config.images.app)
    .pipe($$.cache($$.imagemin({
      optimizationLevel: 4,
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()()]
    })))
    .pipe(gulp.dest(config.images.dist));
});
