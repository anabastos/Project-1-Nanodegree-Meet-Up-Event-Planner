var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});

var browserSync = require('browser-sync').create();
 browserSync.init({
     server: "./"
 });
 browserSync.stream();
 