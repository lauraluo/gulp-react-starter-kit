var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    gulpBrowserify = require('gulp-browserify'),
    sass = require('gulp-sass'),
    clean = require('gulp-clean'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    open = require('gulp-open');
var browserify = require('browserify');
var aliasify = require('aliasify');
var gutil = require('gulp-util');
var tap = require('gulp-tap');
// var buffer = require('gulp-buffer');
var sourcemaps = require('gulp-sourcemaps');
var watchify = require('watchify');
var runSequence = require('run-sequence');
var gulpif = require('gulp-if');
var parseArgs = require('minimist');
var extend = require('extend');
var header = require('gulp-header');
var dateFormat = require('dateformat');
var notifier = require('node-notifier');
var cache = require('gulp-cached');
var chalk = require('chalk');
var sourcePath = "src/";
var distPath = "public/";

var styleConsole = {
    info: chalk.white.bgBlue,
    error: chalk.white.bgRed,
    warn: chalk.red.bgYellow
};

var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

var eslint = require('gulp-eslint');
var jshint = require('gulp-jshint');

var config = extend({
    env: process.env.NODE_ENV
}, parseArgs(process.argv.slice(2)));

var onError = function(err) {
    notify({ title: 'Gulp Task Error', message: 'Check the console.' }).write(err);
    console.log(styleConsole.error(err.toString()));
    this.emit('end');
}

var browserifyConfig = {
    debug: true,
    cache: {},
    packageCache: {},
    transform: ['reactify'],
    extensions: ['.jsx'],
    plugin: [watchify]
};

// https://gist.github.com/ramasilveyra/b4309edf809e55121385
// https://medium.com/@elisechant/how-to-train-your-gulpfile-to-know-about-envir
// o nment-configurations-1367a2f8b0da#.bxrhjeav6

var gulpLoadPlugins = require('gulp-load-plugins');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash').assign;
var glob = require('glob');
var es = require('event-stream');
var path = require('path');
var reactify = require('reactify');

const $ = gulpLoadPlugins();

var createBundle = (options, attachedWithBundle) => {
    let env = process.env.NODE_ENV;
    let isWatchify = process.env.IS_WATCHIFY;

    // console.log('NODE_ENV : ' + config.env);

    const opts = assign({}, watchify.args, {
        entries: options.entries,
        extensions: options.extensions,
        debug: config.env === 'development' ? true : false
    });

    var b = browserify(opts);


    b.transform("babelify", {
        presets: [
            "es2015", "react"
        ],
        "plugins": ["transform-class-properties"]
    });

    if (config.env === 'production') {
        let aliasifyConfig = {
            replacements: {
                "(\\w+)/MockProvider": function(alias, regexMatch, regexObject) {
                    console.log(alias);
                    console.log(regexMatch);
                    return './src/components/core/ReplaceMockProvider.jsx'; // default behavior - won't replace
                }
            }
        };

        b.transform(aliasify, aliasifyConfig);
    }


    if (typeof attachedWithBundle == 'function') {
        attachedWithBundle(b);
    }

    const rebundle = () => b
        .bundle()
        .on('error', $.util.log.bind($.util, 'Browserify Error'))
        .pipe(source(options.output))
        .pipe(buffer())
        .pipe(rename(function(path) {
            path.extname = ".bundle.js"
        }))
        .pipe($.sourcemaps.init({
            loadMaps: config.env === 'development' ? true : false
        }))
        .pipe(gulpif(config.env === 'development', $.sourcemaps.write('../js/maps')))
        // .pipe($.sourcemaps.init({ loadMaps: true }))
        // .pipe($.sourcemaps.write('../js/maps'))
        .pipe(gulpif(config.env === 'production', $.uglify()))
        .pipe(gulpif(config.env === 'production', $.header('/* publish time ${Date}*/', {
            Date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
        })))
        .pipe(gulp.dest(options.destination))
        .pipe(livereload());

    if (config.env === 'development') {
        b = watchify(b);
        b.on('update', rebundle);
        b.on('log', $.util.log);
    }

    return rebundle();

};

gulp.task('js:components', function() {
    glob('./src/*.jsx', function(err, files) {

        if (err)
            done(err);

        files
            .forEach(function(entry) {
                var outputName = path.basename(entry)

                createBundle({
                    entries: [entry],
                    output: outputName,
                    extensions: ['.jsx'],
                    destination: './public/js'
                }, function(b) {
                    b.external('react');
                    b.external('react-dom');
                    b.external('reflux');
                    b.external('jquery');
                    b.external('mockjs');
                    b.external('lodash');
                });
            });
    });
});

gulp.task('js:common', function() {
    createBundle({
        output: 'common.js',
        extensions: ['.jsx'],
        destination: './public/js'
    }, function(b) {
        b.require('react');
        b.require('react-dom');
        b.require('reflux');
        b.require('jquery');
        b.require('mockjs');
        b.require('lodash');
    });
});

gulp.task('js:bundle', [
    'js:common', 'js:components'
], function() {});

gulp.task('css:sass', function() {
    gulp
        .src(['src/scss/**/*.scss', '!src/scss/**/_*.scss'])
        .pipe(plumber({ errorHandle: onError }))
        .pipe(sass({ errLogToConsole: true, includePaths: ['src/scss/**/**'] }))
        .pipe(autoprefixer({
            browsers: [
                "last 4 versions", "Firefox >= 27", "Blackberry >= 7", "IE 8", "IE 9"
            ],
            cascade: false
        }))
        .pipe(gulp.dest(distPath + 'css/'))
        .pipe(livereload());
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch([
        'src/scss/**/*.scss', '!src/scss/**/_*.scss'
    ], ['css:sass']);

    // gulp.watch(['src/**/*.js','src/**/*.jsx'], ['js:lint']);

    gulp.watch(['views/**/*.jade'], function() {
        gulp
            .src('views/**/*.jade')
            .pipe(livereload())
            .pipe(notify('Reloading views'));
    });
});

gulp.task('js:lint', () => {
    //config 檔在 .eslintrc
    return gulp
        .src(['src/**/*.js', 'src/**/*.jsx'])
        .pipe(eslint())
        .pipe(eslint.format('codeframe'));
});

gulp.task('lint-watch', () => {
    // Lint only files that change after this watch starts
    const lintAndPrint = eslint();
    // format results with each file, since this stream won't end.
    lintAndPrint.pipe(eslint.formatEach());

    return gulp.watch([
        'src/**/*.js', 'src/**/*.jsx'
    ], event => {
        if (event.type !== 'deleted') {
            gulp
                .src(event.path)
                .pipe(lintAndPrint, { end: false });
        }
    });
});

gulp.task('set-dev-node-env', function() {
    return process.env.NODE_ENV = config.env = 'development';
});

gulp.task('set-prod-node-env', function() {
    return process.env.NODE_ENV = config.env = 'production';
});


gulp.task('clean', function() {
    return gulp.src(['public/css', 'public/js'], { read: false })
        .pipe($.clean());
});

gulp.task('build', [
    'js:lint', 'js:bundle', 'css:sass', 'watch', 'lint-watch'
], function() {
    nodemon({
            "script": 'server.js',
            "nodeArgs": ['--inspect'],
            "ignore": [
                "public/**/*.*",
                "test/**/*.*",
                "src/**/*.*",
                ".git",
                "gulpfile.js",
                "node_modules/**/node_modules"
            ]
        })
        .on('start', function() {
            console.info(styleConsole.info('The server start at port 3002, http://localhost:3002'));
        })
        .on('restart', function() {
            gulp
                .src('server.js')
                .pipe(livereload())
                .pipe(notify('Reloading server, please wait...'));
        });
});

gulp.task('develop', ['set-dev-node-env', 'clean'], function() {
    return runSequence('build');
});

gulp.task('deploy', ['set-prod-node-env', 'clean'], function() {
    return runSequence('build');
});