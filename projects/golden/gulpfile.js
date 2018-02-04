const gulp = require('gulp'),
      clean = require('gulp-clean'),
      cache = require('gulp-cache'),
      imagemin = require('gulp-imagemin'),
      sass = require('gulp-sass'),
      concat = require('gulp-concat'),
      minifyCSS = require('gulp-minify-css'),
      rename = require('gulp-rename'),
      babel = require('gulp-babel'),
      uglyfly = require('gulp-uglyfly'),
      sourcemaps = require('gulp-sourcemaps');


// Чистимо директорію призначення і робимо ребілд, щоб видалені з проекту файли не залишилися
gulp.task('clean', function() {
  return gulp.src(['dist/js', 'dist/css', 'dist/img'], {read: false})
    .pipe(clean());
});

// From SCSS to CSS, конкатенація і мініфікація стилів
// 1. expanded 2.compressed
gulp.task('sass', () => {
    return gulp.src(['app/scss/layout/*.scss'])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('main.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('dist/css'))
});


// Файл з анімацією
gulp.task('animate-css', () => {
  return gulp.src('app/css/animations.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
});


// Файл reset, для того аби скинути стилі по дефолту
gulp.task('file-reset', () => {
  return gulp.src('app/css/reset.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
});


// Файл animation, мініфікація
gulp.task('animate-js', () => {
    return gulp.src('app/js/**/css3-animate-it.js')
        .pipe(concat('css3-animate-it.min.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('dist/js'))
});


// From ES6 to ES5, конкатенація і мініфікація скриптів
gulp.task('es6', () => {
    return gulp.src(['app/js/**/*.js', '!app/js/**/css3-animate-it.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('dist/js'))
});


// Стиснення зображень (кешируєм, щоб стискати тільки змінені зображення)
// optimizationLevel - це кількість проходів, діапазон параметра 0-7 і починаючи з 1 включається компресія
gulp.task('img', () => {
    return gulp.src(['app/img/*', '!app/img/*.db'])
        .pipe(cache(imagemin({
        	optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/img'));
});


// Після першого запуску (команда gulp в консолі) виконуємо gulp watch,
// щоб слідити за змінами і автоматично збирати заново вихідні з урахуванням останніх змін
gulp.task('watch', ()=> {
    gulp.watch(['app/js/**/*.js'],['es6']);
    gulp.watch(['app/scss/**/*.scss'],['sass']);
    gulp.watch(['app/img/**/*'],['img']);
});

// Виконуємо по-замовчуванню (спочатку очищення і ребілд директорії призначення, а потім виконання інших завдань)
gulp.task('default', ['clean'], () => {
    return gulp.start('file-reset', 'animate-css', 'animate-js', 'sass', 'img', 'es6');
});