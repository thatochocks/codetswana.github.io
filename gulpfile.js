var gulp = require('gulp');
var livereload = require('gulp-livereload');
var tinylr = require('tiny-lr')();

gulp.task('reload', function() {
  gulp.src(['_site/*.html', 'css/main.css'])
    .pipe(livereload(tinylr));
});


gulp.task('default', function() {
  tinylr.listen(35729);
  gulp.watch(['_site/*.html', 'css/main.css'], ['reload']);
});
