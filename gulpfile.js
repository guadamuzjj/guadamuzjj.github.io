var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function () {
    gulp.src('scss/style.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["*.html", "dist/css/*.css", "dist/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});