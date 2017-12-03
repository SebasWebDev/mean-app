var gulp = require('gulp'),
  config = require('./config.js'),
  bowerFiles = require('main-bower-files');

gulp.task('copy:vendor', function () {
  return gulp.src(bowerFiles(), {base: 'bower_components'})
    .pipe(gulp.dest(config.paths.vendor_dev))
});

gulp.task('copy:index', function () {
    return gulp.src('app/index.html')
        .pipe(gulp.dest(config.paths.assets))
});
