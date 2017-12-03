var gulp = require('gulp'),
  compass = require('gulp-compass'),
  concat = require('gulp-concat'),
  cssnano = require('gulp-cssnano'),
  config = require('./config.js'),
  plumber = require('gulp-plumber');

gulp.task('styles:sass', function () {
  return gulp.src(config.filesets.sass)
    .pipe(plumber())
    .pipe(compass({
      project: config.paths.root,
      css: 'dist/css',
      sass: 'app/styles'
    }));
});

gulp.task('styles:css', function () {
  return gulp.src(config.filesets.css)
    .pipe(concat('aegon-styles.css'))
    .pipe(cssnano())
    .pipe(gulp.dest(config.paths.css))
});
