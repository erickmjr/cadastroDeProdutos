const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');

function compileSass() {
    return gulp
        .src("./src/styles/main.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('./build/styles'))
}

exports.default = function() {
    gulp.watch('./src/styles/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
}