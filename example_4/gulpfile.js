var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    return gulp.src('assets/styles/less/*.less')  // only compile the entry file
        .pipe(less())
        .pipe(gulp.dest('assets/styles/css'))
});
gulp.task('watch', function() {
    gulp.watch('assets/styles/less/*.less', ['less']);  // Watch all the .less files, then run the less task
});

gulp.task('default', ['watch']); // Default will run the 'entry' watch task