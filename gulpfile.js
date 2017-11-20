var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    cssnano = require('gulp-cssnano'),
    pug = require('gulp-pug'),
    rename = require("gulp-rename"),
    concat = require('gulp-concat');


gulp.task('css', function() {
    return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 4 version'))
    .pipe(gulp.dest('public/assets/css'))
    .pipe(cssnano())
    .pipe(gulp.dest('public/assets/css'))
});


gulp.task('js', function() {
  gulp.src('src/js/*.js')
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/assets/js'))
});


gulp.task('templates', function buildHTML() {
  return gulp.src('src/**/*.pug')
  .pipe(pug())
  .on('error', gutil.log)
  .pipe(gulp.dest('./public'));
});


gulp.task('img', function() {
   gulp.src('src/img/*')
   .pipe(gulp.dest('public/assets/img'));
});


gulp.task('renamepug', function() {
   gulp.src('src/views/**/*.pug')
   .pipe(rename (function (path) {
     path.extname = ".twig"
   }))
   .pipe(gulp.dest("./src"));
});


gulp.task('moveToMamp', function() {
  gulp.src('public/assets/**/*')
  .pipe(gulp.dest('../../../../../../:c/MAMP/htdocs/assets'));
});


gulp.task('default', ['css', 'js', 'templates', 'img'], function () {
    gulp.watch("src/scss/**/*.scss", ['css']);
    gulp.watch("src/js/*.js", ['js']);
    gulp.watch("src/views/**/.pug", ['templates']);
    gulp.watch("src/img/*", ['img']);
});
