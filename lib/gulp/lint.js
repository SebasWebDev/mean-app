var gulp = require('gulp'),
  config = require('./config.js'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

/*
 * JSLint to check JS syntax errors.
 */
gulp.task('lint', function () {
  gulp.src(config.filesets.jsall)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});