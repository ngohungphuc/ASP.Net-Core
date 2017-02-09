/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean', function (callback) {
    rimraf.sync('./wwwroot/app', {}, callback);
});

gulp.task('clean-thirdparty', function (callback) {
    rimraf.sync('./wwwroot/node_modules', {}, callback);
});

gulp.task('thirdparty', function () {
    gulp.src('./node_modules/core-js/**/*.js*')
        .pipe(gulp.dest('./wwwroot/node_modules/core-js'));
    gulp.src(['./node_modules/@angular/**/*.js*', './node_modules/@angular/**/*.ts'])
        .pipe(gulp.dest('./wwwroot/node_modules/@angular'));
    gulp.src('./node_modules/zone.js/**/*.js*')
        .pipe(gulp.dest('./wwwroot/node_modules/zone.js'));
    gulp.src('./node_modules/systemjs/**/*.js*')
        .pipe(gulp.dest('./wwwroot/node_modules/systemjs'));
    gulp.src(['./node_modules/reflect-metadata/*.js*', './node_modules/reflect-metadata/*.ts'])
        .pipe(gulp.dest('./wwwroot/node_modules/reflect-metadata'));
    gulp.src('./node_modules/rxjs/**/*.js*')
        .pipe(gulp.dest('./wwwroot/node_modules/rxjs'));
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./wwwroot/node_modules/bootstrap'));
    gulp.src('./node_modules/bootstrap/dist/**/*.*')
        .pipe(gulp.dest('./wwwroot/node_modules/bootstrap'));
    gulp.src('./node_modules/jquery/dist/*.*')
        .pipe(gulp.dest('./wwwroot/node_modules/jquery'));
    gulp.src('./node_modules/angular2-toaster/*.js')
         .pipe(gulp.dest('./wwwroot/node_modules/angular2-toaster'));
    gulp.src('./node_modules/angular2-toaster/lib/*.*')
       .pipe(gulp.dest('./wwwroot/node_modules/angular2-toaster/lib'));


});

gulp.task('copy', function () {
    gulp.src('./app/**/*.*')
        .pipe(gulp.dest('./wwwroot/app'));
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.*', ['copy']);
});

gulp.task('default', ['clean-thirdparty', 'clean', 'thirdparty', 'copy', 'watch']);