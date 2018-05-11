// var gulp = require('gulp');
// var inject = require('gulp-inject');
// var htmlclean = require('gulp-htmlclean');
// var cleanCSS = require('gulp-clean-css');
// var concat = require('gulp-concat');
// var imagemin = require('gulp-imagemin');
// var paths = {
//   src: 'src/**/*',
//   srcHTML: 'src/**/*.html',
//   srcCSS: 'src/**/*.css',
//   srcJS: 'src/**/*.js',
//   tmp: 'tmp',
//   tmpIndex: 'tmp/index.html',
//   tmpCSS: 'tmp/**/*.css',
//   tmpJS: 'tmp/**/*.js',
//   dist: 'dist',
//   distIndex: 'dist/index.html',
//   distCSS: 'dist/**/*.css',
//   distJS: 'dist/**/*.js'
// };

// gulp.task('html', function() {
//   return gulp.src(paths.srcHTML).pipe(htmlclean());
// });
// gulp.task('css', function() {
//   return gulp.src(paths.srcCSS).pipe(gulp.dest(paths.tmp));
// });

// gulp.task('html:dist', function() {
//   return gulp
//     .src(paths.srcHTML)
//     .pipe(htmlclean())
//     .pipe(gulp.dest(paths.dist));
// });
// gulp.task('css:dist', function() {
//   return gulp
//     .src(paths.srcCSS)
//     .pipe(concat('style.min.css'))
//     .pipe(cleanCSS())
//     .pipe(gulp.dest(paths.dist));
// });
// gulp.task('inject', function() {
//   var css = gulp.src(paths.tmpCSS);
//   var js = gulp.src(paths.tmpJS);
//   return gulp
//     .src(paths.tmpIndex)
//     .pipe(inject(css, { relative: true }))
//     .pipe(gulp.dest(paths.tmp));
// });

// gulp.task('inject:dist', function() {
//   var css = gulp.src(paths.distCSS);
//   return gulp
//     .src(paths.distIndex)
//     .pipe(inject(css, { relative: true }))
//     .pipe(gulp.dest(paths.dist));
// });

// gulp.task('default', gulp.series('html', 'css', 'inject'));
// gulp.task('build', gulp.series('html:dist', 'css:dist', 'inject:dist'));
