var gulp = require('gulp');

// cmd line 'gulp build' to build /src files to /css

var insert = require('gulp-insert');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
  // postcss plugins
  var cssimport = require('postcss-import');
  var rgbaTohex = require('postcss-rgba-hex');
  var customProperties = require('postcss-custom-properties');
  var colorFunction = require('postcss-color-function');
  var perfectionist = require('postcss-perfectionist');

function buildNumber() {
    // lazy build version number using YYMMDD date
    var now = new Date();
    var y = now.getFullYear().toString().substr(-2);
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + y + mm + dd;
}

var pckg = require('./package.json');
var version = pckg.version;

// edit header here
var header = `/*! commoncolors.css v.${version} Build #${buildNumber()} */  \n`;


function compile() {
  // process src files to /css
  var plugins = [
        cssimport(),
        customProperties({preserve:false}),
        colorFunction(),
        rgbaTohex({silent:true}),
        perfectionist({format:'compact'})
    ];
  return gulp.src(['./src/[^_]*.css','!./src/commoncolors--vars.css'])
  .pipe(insert.prepend(header))
  .pipe(postcss(plugins))
  .pipe(gulp.dest('./css'));
}

function compile_vars() {
  // process colors,  preserve css vars
  var plugins = [
        customProperties({preserve:true}),
        colorFunction(),
        rgbaTohex({silent:true}),
        perfectionist()
    ];
    return gulp.src('src/commoncolors--vars.css')
        .pipe(insert.prepend(header))
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./css'));
}

function minify() {
  // minified files.
  return gulp.src(['./css/*.css','!./css/commoncolors--vars.css'])
      .pipe(cleanCSS({level: 1}))
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('css/min/'));
}

var build = gulp.series(compile, gulp.parallel(minify, compile_vars));
gulp.task('build', build);
