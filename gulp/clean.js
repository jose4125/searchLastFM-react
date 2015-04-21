'use strict';
var gulp = require('gulp');
var del = require('del');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');

gulp.task('clean', function(done) {
  var files = [].concat(config.dist);
  clean(files, done);
});

gulp.task('clean:fonts', function(done) {
  clean(config.fonts.dist, done);
});

gulp.task('clean:images', function(done) {
  clean(config.images.dist, done);
});

gulp.task('clean:code', function(done) {
  var files = [].concat(config.dist + '**/*.html', config.build + 'scripts/**/*.js');
  clean(files, done);
});

function clean(files, done) {
  log('Cleaning: ' + $$.util.colors.blue(files));
  del(files, done);
}
