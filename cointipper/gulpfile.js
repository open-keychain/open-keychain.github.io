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
  livereload   = require('gulp-livereload');

// CSS
gulp.task('css', function() {
  var stream = gulp
    .src('src/less/jquery.cointipper.less')
    .pipe(sourcemaps.init())
    .pipe(less().on('error', notify.onError(function (error) {
      return 'Error compiling LESS: ' + error.message;
    })))
    .pipe(sourcemaps.write());

  return stream
    .pipe(gulp.dest('dist/css'))
    .pipe(minifycss())
    .pipe(rename('jquery.cointipper.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Successfully compiled LESS' }));
});

// JS
gulp.task('js', function() {
  var scripts = [
    'src/components/bootstrap/js/modal.js',
    'src/components/jquery-qrcode/src/jquery.qrcode.js',
    'src/components/jquery-qrcode/src/qrcode.js',
    'src/js/jquery.cointipper.js'
  ];

  var stream = gulp
    .src(scripts)
    .pipe(concat('jquery.cointipper-pack.js'));

  return stream
    .pipe(gulp.dest('dist/js'))
    .pipe(uglify({ outSourceMap: true }))
    .pipe(rename(function (path) {
      if(path.extname === '.js') {
        path.basename += '.min';
      }
    }))
    .pipe(gulp.dest('dist/js'))
    .pipe(notify({ message: 'Successfully compiled JavaScript' }));
});


// Rimraf
gulp.task('rimraf', function() {
  return gulp
    .src(['dist/css', 'dist/js'], {read: false})
    .pipe(rimraf());
});

// Default task
gulp.task('default', ['rimraf'], function() {
  gulp.start('css', 'js');
});

// Watch
gulp.task('watch', function() {

  // Watch .less files
  gulp.watch('src/less/**/*.less', ['css']);

  // Watch .js files
  gulp.watch('src/js/**/*.js', ['js']);

  // Livereload
  livereload.listen();
  gulp.watch('dist/**/*').on('change', livereload.changed);
  
});
