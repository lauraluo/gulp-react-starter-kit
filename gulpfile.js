var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    // connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    open = require('gulp-open');

var distPath = "public/";

var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

console.log('NODE_ENV' + process.env.NODE_ENV);

var onError = function (err) {
    notify({
        title: 'Gulp Task Error',
        message: 'Check the console.'
    }).write(err);

    console.log(err.toString());

    this.emit('end');
}

gulp.task('css:sass', function () {
    gulp.src(['content/scss/**/*.scss', '!src/scss/**/_*.scss'])
        .pipe(plumber({ errorHandle: onError }))
        .pipe(sass({
            errLogToConsole: true,
            includePaths: ['content/scss/**/**']
        }))
        .pipe(autoprefixer({
            browsers: ["last 4 versions", "Firefox >= 27", "Blackberry >= 7", "IE 8", "IE 9"],
            cascade: false
        }))
        .pipe(gulp.dest(distPath + 'css/'))
        .pipe(livereload());
});

gulp.task('js:common', function () {
    gulp.src('content/common.js')
        .pipe(plumber())
        .pipe(browserify({
            insertGlobals: true,
            transform: ['babelify', 'aliasify'],
            debug: true
        }))
        .pipe(gulp.dest('./' + distPath + 'js/'))
        .pipe(livereload());
});

gulp.task('js:main', function () {
    gulp.src(['content/main.js', 'content/js/**/*.*', 'content/components/**/*.jsx'])
        .pipe(plumber())
        .pipe(browserify({
            insertGlobals: false,
            transform: ['reactify'],
            extensions: ['.jsx'],
            debug: true
        }))
        .pipe(gulp.dest('./' + distPath + 'js/'))
        .pipe(livereload());
});


gulp.task('js:bundle', ['js:common', 'js:main'], function () {});


gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['content/main.js', 'content/js/**/*.*', 'content/components/**/*.jsx'], ['js:main'], function () {
        notify('Reloading main.js, please wait...')
    });
    gulp.watch(['content/scss/**/*.scss', '!src/scss/**/_*.scss'], ['css:sass']);
});

gulp.task('build', ['js:bundle', 'css:sass'], function () {});
gulp.task('dev', ['build', 'watch'], function () {
    nodemon({
        "script": 'server.js',
        "ext": 'js',
        "nodeArgs": ['--debug'],
        "ignore": [
            "public/**/*.*",
            "content/**/*.*",
            ".git",
            "gulpfile.js",
            "node_modules/**/node_modules"
        ]
    }).on('restart', function () {
        gulp.src('server.js')
            .pipe(livereload())
            .pipe(notify('Reloading server, please wait...'));

    });
});