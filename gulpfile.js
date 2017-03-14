var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpBrowserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    // connect = require('gulp-connect'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    open = require('gulp-open');

var browserify = require('browserify');
var gutil = require('gulp-util');
var tap = require('gulp-tap');
var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');


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

// gulp.task('js:common', function () {
//     gulp.src('src/common.js')
//         .pipe(plumber())
//         .pipe(gulpBrowserify({
//             insertGlobals: true,
//             transform: ['babelify', 'aliasify'],
//             debug: true
//         }))
//         .pipe(gulp.dest('./' + distPath + 'js/'))
//         .pipe(livereload());
// });


var browserifyConfig = {
    debug: true,
    cache: {},
    packageCache: {},
    transform: ['reactify'],
    extensions: ['.jsx'],
    plugin: [watchify]
};


//https://gist.github.com/ramasilveyra/b4309edf809e55121385
var gulpLoadPlugins = require('gulp-load-plugins');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash').assign;
var glob = require('glob');
var es = require('event-stream');
var path = require('path');
var reactify = require('reactify');

let isWatchify = true;
const $ = gulpLoadPlugins();
var createBundle = options => {
    const opts = assign({}, watchify.args, {
        entries: options.entries,
        extensions: options.extensions,
        debug: true
    });

    let b = browserify(opts);

    const rebundle = () =>
        b
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        // log errors if they happen
        .on('error', $.util.log.bind($.util, 'Browserify Error'))
        .pipe(source(options.output))
        .pipe(buffer())
        .pipe(rename(function (path) {
            path.extname = ".bundle.js";
        }))
        .pipe($.sourcemaps.init({
            loadMaps: true
        }))
        // .pipe($.uglify())
        .pipe($.sourcemaps.write('../js/maps'))
        .pipe(gulp.dest(options.destination))
        .pipe(livereload());

    if (isWatchify) {
        b = watchify(b);
        b.on('update', rebundle);
        b.on('log', $.util.log);
    }

    return rebundle();
};

gulp.task('js:bundle', function () {
    glob('./src/*.js', function (err, files) {

        if (err) done(err);
        // console.log(files);

        files.forEach(function (entry) {
            var pathSplit = entry.split('/');
            var outputName = path.basename(entry)

            // var outputName = pathSplit.slice( pathSplit.length -2 ,pathSplit.length - 1 );
            createBundle({
                entries: [entry],
                output: outputName,
                extensions: ['.jsx'],
                destination: './public/js'
            });

        });
    });
});

// gulp.task('js:bundle', ['js:bundle', 'js:components'], function () {});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/scss/**/*.scss', '!src/scss/**/_*.scss'], ['css:sass']);

    gulp.watch(['views/**/*.jade'], function () {
        gulp.src('views/**/*.jade')
            .pipe(livereload())
            .pipe(notify('Reloading views'));
    });
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