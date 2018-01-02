var gulp = require('gulp');
var sass = require('gulp-sass');
var flatten = require('gulp-flatten');

gulp.task('styles', function() {
	gulp.src('assets/styles/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('assets/styles/css'))
});

gulp.task('default', function() {
	gulp.watch('assets/styles/sass/*.scss', ['styles']);
});