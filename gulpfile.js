const gulp = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sync = require('browser-sync').create();
const del = require('del');

// Styles

const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemap = require('gulp-sourcemaps');

const paths = {
  root: './build',
  templates: {
    pages: 'source/templates/pages/*.pug',
    src: 'source/templates/**/*.pug',
    dest: 'build/'
  },
  styles: {
    src: 'source/styles/**/*.*',
    dest: 'build/app/styles/'
  },
  scripts: {
    src: 'source/scripts/**/*.*',
    dest: 'build/app/scripts/'
  },
  images: {
    src: 'source/images/**/*.*',
    dest: 'build/app/images/'
  },
  fonts: {
    src: 'source/fonts/**/*.*',
    dest: 'build/app/fonts/'
  }
}

//pug

function templates() {
  return gulp.src(paths.templates.pages)
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.root));
}

//sass

function styles() {
  return gulp.src("./source/styles/styles.scss")
    .pipe(sourcemap.init())
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(postcss([autoprefixer(['last 15 version', '> 1%', 'ie 8', 'ie 7'], { cascade: true })]))
    .pipe(sourcemap.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest))
}


//scripts

function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest));
}

//images

function images() {
  return gulp.src(paths.images.src)
    .pipe(gulp.dest(paths.images.dest));
}

//fonts

function fonts() {
  return gulp.src(paths.fonts.src)
    .pipe(gulp.dest(paths.fonts.dest));
}

function clean() {
	return del(paths.root);
}

//watch src

function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.scripts.src, scripts)
}

// Server build

function server() {
  sync.init({
    server: paths.root
  });
  sync.watch(paths.root + '/**/*.*', sync.reload)
}

exports.templates = templates;
exports.server = server;
exports.styles = styles;
exports.clean = clean;
exports.scripts = scripts;
exports.images = images;
exports.fonts = fonts;

gulp.task('default', gulp.series(
  gulp.parallel(styles, templates, images, scripts, fonts),
  gulp.parallel(watch, server)
));

gulp.task('build', gulp.parallel(
  clean,
  gulp.parallel(styles, templates, images, scripts, fonts)
));