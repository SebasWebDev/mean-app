/*global require*/
var gulp = require('gulp'),
  config = require('./lib/gulp/config.js'),
  requireDir = require('require-dir'),
  del = require('del');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

requireDir('./lib/gulp', { recurse: true });

/**
 *  Main Tasks
 */
// gulp.task('dev', ['open:dev']);
// gulp.task('test', ['test:ci']);
// gulp.task('tdd', ['autotest', 'watch:testtemplates']);

/**
 *  Development Sub Tasks
 */
/**
 * Assets
 */
gulp.task('assets', ['images', 'fonts']);
/**
 * Styles
 */
gulp.task('styles', ['styles:sass']);

gulp.task('dev:build', ['clean:assets', 'lint', 'copy:vendor', 'styles', 'assets', 'copy:index']);

gulp.task('clean:assets', function () {
  return del.sync([config.filesets.assets]);
});

gulp.task('watch', function () {
  gulp.watch(config.filesets.sass, ['styles:sass']);
  gulp.watch(config.filesets.css, ['styles:css']);
  // gulp.watch(config.filesets.ts, ["webpack:build-dev"]);
});