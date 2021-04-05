var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('style.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
});