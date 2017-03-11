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

gulp.task('js:common', function () {
    gulp.src('src/common.js')
        .pipe(plumber())
        .pipe(gulpBrowserify({
            insertGlobals: true,
            transform: ['babelify', 'aliasify'],
            debug: true
        }))
        .pipe(gulp.dest('./' + distPath + 'js/'))
        .pipe(livereload());
});


var browserifyConfig = {
    debug: true,
    cache: {},
    packageCache: {},
    transform: ['reactify'],
    extensions: ['.jsx'],
    plugin: [watchify]
};


var bundle = function () {
    // no need of reading file because browserify does.
    return gulp.src('src/components/*/index.js', {
            read: false
        })
        // transform file objects using gulp-tap plugin
        .pipe(tap(function (file) {
            gutil.log('bundling ' + file.path);
            // replace file contents with browserify's bundle stream
            var b = browserify(file.path, browserifyConfig);
            file.contents = b.bundle();
            b.on('update', function (ids) {
                console.log(ids);
            });
        }))
        .pipe(rename(function (path) {
            var folderName = path.dirname;
            path.basename = folderName;
            path.dirname = "";
            path.extname = ".js";
        }))
        .pipe(gulp.dest('public/js'))
        .pipe(livereload());
};

var  gulpLoadPlugins = require('gulp-load-plugins');
var  babelify = require('babelify');
var  source = require('vinyl-source-stream');
var  buffer = require('vinyl-buffer');
var  assign = require('lodash').assign;

let isWatchify = true;
const $ = gulpLoadPlugins();

const bundles = [
  {
    entries: ['./src/components/login/index.js'],
    output: 'login.js',
    extensions: ['.jsx'],
    destination: './public/js'
  }, {
    entries: ['./src/components/index/index.js'],
    output: 'index.js',
    extensions: ['.jsx'],
    destination: './public/js'
  }
];

var createBundle = options => {
    const opts = assign({}, watchify.args, {
        entries: options.entries,
        extensions: options.extensions,
        transform: ['reactify','babelify'],        
        debug: true
    });

    let b = browserify(opts);
    b.transform(babelify.configure({
        compact: false
    }));

    const rebundle = () =>
        b.bundle()
        // log errors if they happen
        .on('error', $.util.log.bind($.util, 'Browserify Error'))
        .pipe(source(options.output))
        .pipe(buffer())
        .pipe($.sourcemaps.init({
            loadMaps: true
        }))
        .pipe($.uglify())
        .pipe($.sourcemaps.write('../maps'))
        .pipe(gulp.dest(options.destination));

    if (isWatchify) {
        b = watchify(b);
        b.on('update', rebundle);
        b.on('log', $.util.log);
    }

    return rebundle();
};


gulp.task('js:components', function () {
    bundles.forEach(bundle =>
        createBundle({
            entries: bundle.entries,
            output: bundle.output,
            extensions: bundle.extensions,
            destination: bundle.destination
        }))
});


gulp.task('js:bundle', ['js:common', 'js:components'], function () {});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['src/scss/**/*.scss', '!src/scss/**/_*.scss'], ['css:sass']);

    gulp.watch(['views/**/*.jade'], function () {
        gulp.src('views/**/*.jade')
            .pipe(livereload())
            .pipe(notify('Reloading views, please wait...'));
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