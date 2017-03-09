var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    // connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    open = require('gulp-open');

var sourcePath = "src/";
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
    gulp.src(['src/scss/**/*.scss', '!src/scss/**/_*.scss'])
        .pipe(plumber({
            errorHandle: onError
        }))
        .pipe(sass({
            errLogToConsole: true,
            includePaths: ['src/scss/**/**']
        }))
        .pipe(autoprefixer({
            browsers: ["last 4 versions", "Firefox >= 27", "Blackberry >= 7", "IE 8", "IE 9"],
            cascade: false
        }))
        .pipe(gulp.dest(distPath + 'css/'))
        .pipe(livereload());
});

gulp.task('js:common', function () {
    gulp.src('src/common.js')
        .pipe(plumber())
        .pipe(browserify({
            insertGlobals: true,
            transform: ['babelify', 'aliasify'],
            debug: true
        }))
        .pipe(gulp.dest('./' + distPath + 'js/'))
        .pipe(livereload());
});

// gulp.task('js:main', function () {
//     gulp.src(['src/main.js'])
//         .pipe(plumber())
//         .pipe(browserify({
//             insertGlobals: false,
//             transform: ['reactify'],
//             extensions: ['.jsx'],
//             debug: true
//         }))
//         .pipe(gulp.dest('./' + distPath + 'js/'))
//         .pipe(livereload());
// });

gulp.task('js:components', function () {
    gulp.src(['src/components/*/index.js'])
        .pipe(plumber())
        .pipe(browserify({
            insertGlobals: false,
            transform: ['reactify'],
            extensions: ['.jsx'],
            debug: true
        }))
        .pipe(rename(function (path) {
            var folderName = path.dirname;
            path.basename = folderName;
            path.dirname = "";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('./' + distPath + 'js/'))
        .pipe(livereload());
});

gulp.task('js:bundle', ['js:common', 'js:components'], function () {});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/components/*/index.js', 'src/components/**/*.jsx'], ['js:components'], function () {
        notify('Reloading main.js, please wait...')
    });
    gulp.watch(['src/scss/**/*.scss', '!src/scss/**/_*.scss'], ['css:sass']);
});

gulp.task('build', ['js:bundle', 'css:sass'], function () {});
gulp.task('dev', ['build', 'watch'], function () {
    nodemon({
        "script": 'server.js',
        "nodeArgs": ['--debug'],
        "ignore": [
            "public/**/*.*",
            "test/**/*.*",
            "src/**/*.*",
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

// var browserSync = require('browser-sync');
// var selenium = require('selenium-standalone');
// var mocha = require('gulp-mocha');

// gulp.task('serve:test', function (done) {
//     browserSync({
//         logLevel: 'silent',
//         notify: false,
//         open: false,
//         port: 9000,
//         server: {
//             baseDir: ['test']
//         },
//         ui: false
//     }, done);
// });

// gulp.task('selenium', function (done) {
//     selenium.install({
//         logger: function (message) {}
//     }, function (err) {
//         if (err) return done(err);

//         selenium.start(function (err, child) {
//             if (err) return done(err);
//             selenium.child = child;
//             done();
//         });
//     });
// });

// gulp.task('integration', ['serve:test', 'selenium'], function () {
//     return gulp.src('test/*.js', {
//             read: false
//         })
//         .pipe(mocha());
// });

// gulp.task('test', ['integration'], function () {
//     selenium.child.kill();
//     browserSync.exit();
// });