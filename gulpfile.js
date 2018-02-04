const gulp = require('gulp'),
      concat = require('gulp-concat'),
      rename = require('gulp-rename'),
      babel = require('gulp-babel'),
      uglyfly = require('gulp-uglyfly');

// From ES6 to ES5, конкатенація і мініфікація скриптів
gulp.task('es6', () => {
    return gulp.src(['src/js/main.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('main.min.js'))
        .pipe(uglyfly())
        .pipe(gulp.dest('src/js'))
});

// Після першого запуску (команда gulp в консолі) виконуємо gulp watch,
// щоб слідити за змінами і автоматично збирати заново вихідні з урахуванням останніх змін
gulp.task('watch', ()=> {
    gulp.watch(['src/js/main.js'],['es6']);
});

// Виконуємо по-замовчуванню
gulp.task('default', () => {
    return gulp.start('es6');
});