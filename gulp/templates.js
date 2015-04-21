'use strict';
var gulp = require('gulp');
var $$ = require('gulp-load-plugins')();
var config = require('../gulp.config')();
var log = require('./log');

gulp.task('templatecache', function() {
  log('Cachin angular templates');
  return gulp.src(config.views.templates)
    .pipe($$.minifyHtml({empty: true}))
    .pipe($$.angularTemplatecache(config.templates.file, config.templates.options))
    .pipe(gulp.dest(config.views.app));
});