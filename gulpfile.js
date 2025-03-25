const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

// Задача для компиляции SCSS
function compileSass() {
  return src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('css/'))
    .pipe(browserSync.stream()); // Инжектим CSS без перезагрузки
}

// Задача для запуска сервера
function serve() {
  browserSync.init({
    server: {
      baseDir: './' // Корневая директория сервера
    }
  });

  watch('scss/*.scss', compileSass);
  watch(['*.html', 'js/*.js']).on('change', browserSync.reload); // Перезагружаем при изменении HTML/JS
}

// Экспортируем задачи
exports.sass = compileSass;
exports.serve = serve;
exports.default = series(compileSass, serve);