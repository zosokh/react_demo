var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js', function() {
  browserify(['./js/react.js'])
    .transform(reactify)
    .bundle()
    .on('error', function(err) {
      console.log(err.message);
      this.emit('end');
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./gulpbuild/'));
});

gulp.task('watch', function() {
  gulp.watch(['js/*.js'], ['js']);
});
