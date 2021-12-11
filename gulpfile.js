const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cssnano = require("gulp-cssnano");
const rename = require("gulp-rename");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();

const scssTask = () => {
  return src("./scss/main.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(rename("style.css"))
    .pipe(dest("css"))
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(dest("css", { sourcemaps: "." }))
    .pipe(browserSync.stream());
};

const browsersyncServe = (cb) => {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  cb();
};

const browserSyncReload = (cb) => {
  browserSync.reload();
  cb();
};

const watchTask = () => {
  watch("./index.html", browserSyncReload);
  watch("./js/app.js", browserSyncReload);
  watch("./scss/**/*.scss", scssTask);
};

exports.scss = scssTask;
exports.browserSync = browsersyncServe;
exports.default = series(scssTask, browsersyncServe, watchTask);
