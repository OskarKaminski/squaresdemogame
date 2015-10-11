var gulp = require('gulp');
var ts = require('gulp-typescript');

var paths = {
    typeScript: ['./src/**/*.ts']
};

gulp.task('default', ['compileTypescript', 'watch']);

gulp.task('watch', function () {
    gulp.watch(paths.typeScript, ['compileTypescript']);
});

gulp.task('compileTypescript', function () {
    return gulp.src([
        'typings/tsd.d.ts',
        './src/**/*.ts'
    ]).pipe(ts({
        noImplicitAny: true
    })).pipe(gulp.dest('./dist'));
});