var gulp = require('gulp');

// cmd line 'gulp build' to build /src files to /css
// cmd line 'gulp dist' to compile a distrib zip file in /dist

var insert = require('gulp-insert');
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

// edit header and version number here
var header = '/*! Common colors css v.1.0 | MIT License | https://github.com/juytter/common-colors-css */ \n';


function processing() {
  // process src/css files to dist/css with various plugins
  var plugins = [
        cssimport(),
        cssnext({browserslist:['> 0.2%']}),
        rgbaTohex({silent:true}),
        perfectionist({format:'compact'})
    ];
  return gulp.src(['./src/*.css','!./src/common-colors--vars.css'])
  .pipe(insert.prepend(header))
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./dist'));
}

function processing_vars() {
  // apply post css to src vars. (mainly, transform hsl to hex colors)
  var plugins = [
        customProperties({preserve:true}),
        colorFunction(),
        rgbaTohex({silent:true}),
        perfectionist()
    ];
    return gulp.src('src/common-colors--vars.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist'));
}

function minify() {
  // create-update  minified files.
  return gulp.src(['./dist/*.css','!./dist/common-colors--vars.css'])
      .pipe(cleanCSS({level: 1}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/min/'));
}

function distrib() {
  // create - update a .zip distribution file
  return gulp.src(['./dist/common*.css','./dist/min/common*.css'])
      .pipe(zip('common-colors-css-lastest.zip'))
      .pipe(gulp.dest('./'));
}

var build = gulp.series(processing, gulp.parallel(minify, processing_vars));
gulp.task('build', build);

var dist = gulp.series(build, distrib);
gulp.task('dist', dist);
