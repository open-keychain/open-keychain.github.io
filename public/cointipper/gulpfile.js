// ======================
// GULPFILE
// jquery.cointipper
// ======================

// Load plugins
var
  gulp         = require('gulp'),
  less         = require('gulp-less'),
  minifycss    = require('gulp-minify-css'),
  uglify       = require('gulp-uglify'),
  rimraf       = require('gulp-rimraf'),
  concat       = require('gulp-concat'),
  notify       = require('gulp-notify'),
  cache        = require('gulp-cache'),
  rename       = require('gulp-rename'),
  path         = require('path'),
  sourcemaps   = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  livereload   = require('gulp-livereload');

var paths = {
  bower: 'bower_components',
  src: 'src',
  build: 'dist'
}

// CSS
gulp.task('css', function() {
  return gulp
    .src(paths.src + '/less/jquery.cointipper.less')
    .pipe(sourcemaps.init())
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build + '/css'))
    .pipe(minifycss())
    .pipe(rename(function (path) {
      if(path.extname === '.css') {
        path.basename += '.min';
      }
    }))
    .pipe(gulp.dest(paths.build + '/css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// JS
gulp.task('js', function() {
  var scripts = [
    paths.bower + '/bootstrap/js/modal.js',
    paths.bower + '/jquery-qrcode/src/jquery.qrcode.js',
    paths.bower + '/jquery-qrcode/src/qrcode.js',
    paths.src + '/js/jquery.cointipper.js'
  ];

  return gulp
    .src(scripts)
    .pipe(concat('jquery.cointipper-pack.js'))
    .pipe(gulp.dest(paths.build + '/js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(rename(function (path) {
      if(path.extname === '.js') {
        path.basename += '.min';
      }
    }))
    .pipe(gulp.dest(paths.build + '/js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});


// Rimraf
gulp.task('rimraf', function() {
  return gulp
    .src([
        paths.build + '/css',
        paths.build + '/js'
      ], {read: false})
    .pipe(rimraf());
});

// Default task
gulp.task('default', ['rimraf'], function() {
  gulp.start('css', 'js');
});

// Watch
gulp.task('watch', function() {

  // Watch .less files
  gulp.watch(paths.src + '/less/**/*.less', ['css']);

  // Watch .js files
  gulp.watch(paths.src + '/js/**/*.js', ['js']);

  // Livereload
  livereload.listen();
  gulp.watch(paths.build + '/**/*').on('change', livereload.changed);

});
