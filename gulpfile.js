const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Задача для компиляции SCSS
function compileSass() {
  return src('scss/*.scss')
    .pipe(sass().on('error', sass.logError)) // Компилируем SCSS
    .pipe(dest('css/')); // Сохраняем результат в папку css
}

// Задача для отслеживания изменений
function watchFiles() {
  watch('scss/*.scss', compileSass);
}

// Экспортируем задачи
exports.sass = compileSass;
exports.watch = watchFiles;
exports.default = series(compileSass, watchFiles);