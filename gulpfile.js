var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var zip = require("gulp-zip");
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
  // postcss plugins
  var cssnext = require('postcss-cssnext');
  var cssimport = require('postcss-import');
  var rgbaTohex = require('postcss-rgba-hex');
  var customProperties = require('postcss-custom-properties');
  var colorFunction = require('postcss-color-function');
  var perfectionist = require('postcss-perfectionist');

gulp.task('compile', function(done) {
  var plugins = [
        cssimport(),
        cssnext({browserslist:['> 0.2%']}),
        rgbaTohex({silent:true}),
        perfectionist({format:'compact'})
    ];
    return gulp.src(['./src/*.css','!./src/common-colors--vars.css'])
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'));
});

gulp.task('build-vars', function () {
  var plugins = [
        customProperties({preserve:true}),
        colorFunction(),
        rgbaTohex({silent:true}),
        perfectionist()
    ];
    return gulp.src('src/common-colors--vars.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'));
});

gulp.task('minify', ['compile'], function() {
    return gulp.src(['./css/*.css','!./css/common-colors--vars.css'])
        .pipe(cleanCSS({level: 1}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css/min/'));
});

gulp.task('dist', function() {
    return gulp.src(['./css/common*.css','./css/min/common*.css'])
        .pipe(zip('common-colors-lastest.zip'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build', ['compile','minify','build-vars']);
