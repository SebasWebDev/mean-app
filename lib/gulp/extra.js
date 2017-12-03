 var gulp = require('gulp'),
  	imagemin = require('gulp-imagemin'),
  	config = require('./config.js');
/**
 * Moves fonts to the corresponding folder.
 */
gulp.task('fonts', function () {
	return gulp.src(config.paths.app + '/fonts/**/*.{eot,svg,ttf,woff,woff2}')
  		.pipe(gulp.dest(config.paths.assets + '/fonts'));
});

/**
 * Images task
 */
gulp.task('images', function () {
	return gulp.src(config.paths.app + '/images/**/*.{gif,jpg,jpeg,png,svg,ico}')
	// .pipe(imagemin({
	// 	progressive: true,
	// 	interlaced: true,
	// 	svgoPlugins: [{removeViewBox: false}]
	// }))
	.pipe(gulp.dest(config.paths.assets + '/images'));
});