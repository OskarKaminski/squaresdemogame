var gulp = require('gulp');
var ts = require('gulp-typescript');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

var paths = {
    typeScript: ['./src/**/*.ts', 'typings/tsd.d.ts'],
    html: ['./src/**/*.html'],
    styles: ['./src/**/*.scss'],
    libs: ['./bower_components/angular/angular.min.js',
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/angular-ui-router/release/angular-ui-router.min.js']
};

gulp.task('default', ['compileTypescript', 'copyHtml', 'copyLibs', 'compileScss', 'watch']);

gulp.task('watch', function () {
    gulp.watch(paths.typeScript, ['compileTypescript']);
    gulp.watch(paths.html, ['copyHtml']);
    gulp.watch(paths.styles, ['compileScss']);
});

gulp.task('webserver', function () {
    gulp.src('./dist/')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 3000
        }));
});

gulp.task('compileTypescript', function () {
    return gulp.src(paths.typeScript).pipe(ts({
        noImplicitAny: true
    })).pipe(gulp.dest('./dist'));
});

gulp.task('copyHtml', function () {
    return gulp.src(paths.html).pipe(gulp.dest('./dist'));
});

gulp.task('copyLibs', function () {
    return gulp.src(paths.libs).pipe(gulp.dest('./dist/lib/'));
});

gulp.task('compileScss', function () {
    return gulp.src(paths.styles).pipe(sass()).pipe(gulp.dest('./dist'));
});