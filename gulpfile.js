var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
  // postcss plugins
  var cssnext = require('postcss-cssnext');
  var cssimport = require('postcss-import');
  var rgbaTohex = require('postcss-rgba-hex');

gulp.task('compile', function(done) {
  var plugins = [
        cssimport(),
        cssnext({browserslist:['> 0.2%']}),
        rgbaTohex({silent:true})
    ];
    return gulp.src(['./src/*.css','!./src/palette-vars.css'])
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'));
});

gulp.task('copy-vars', function () {
    gulp.src('./src/palette-vars.css')
        .pipe(gulp.dest('./css'));
});

gulp.task('minify', ['compile'], function() {
    return gulp.src('./css/*.css')
        .pipe(cleanCSS({level: 1}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/min/'));
});

gulp.task('build', ['compile','minify','copy-vars']);
