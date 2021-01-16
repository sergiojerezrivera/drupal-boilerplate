const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//New way Gulp v4.0 of writting tasks.
//Task to Compile Sass.
function style() {
//1. Where is  my 'main.SCSS' file to look at for compile
    return gulp.src("src/scss/main.scss")
//2. Pass that file trough sass compiler
    .pipe(sass().on("error", sass.logError))
//3. Where Do I save the compiled  CSS?
    .pipe(gulp.dest("src/css"))
//4. Stream changes to all browsers
    .pipe(browserSync.stream());
}

//Watch SASS function
function watch() {
    browserSync.init({
        // server: {
        //     // baseDir: "./",
        // }

        //Use the next line for local environment
        proxy: "http://localhost:8080/multifunction-project-D9/"
    });
    gulp.watch("src/scss/**/*.scss", style);
    gulp.watch("templates/**/*.html.twig").on("change", browserSync.reload);
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
    // gulp.watch("src/js/**/*.js", jschanges);
}


//The OLD WAY

// gulp.task('sass', () => {
//   return gulp.src([
//     'node_modules/bootstrap/scss/bootstrap.scss',
//     'src/scss/*.scss'
//   ])
//   .pipe(sass({outputStyle: 'compressed'}))
//   .pipe(gulp.dest('src/css'))
//   .pipe(browserSync.stream());
// });

// gulp.task('js', () => {
//   return gulp.src([
//     'node_modules/bootstrap/dist/js/bootstrap.min.js',
//     'node_modules/jquery/dist/jquery.min.js',
    // 'node_modules/popper.js/dist/umd/popper.min.js'
//   ])
//   .pipe(gulp.dest('src/js'))
//   .pipe(browserSync.stream());
// });

// gulp.task('serve', gulp.series('sass', () => {
//   browserSync.init({
//     server: './src'
//   });

//   gulp.watch([
//     'node_modules/bootstrap/scss/bootstrap.scss',
//     'src/scss/*.scss'
//   ], ['sass']);

//   gulp.watch('src/*.html').on('change', browserSync.reload);

// }));

// gulp.task('font-awesome', () => {
//   return gulp.src('node_modules/font-awesome/css/font-awesome.min.css')
//   .pipe(gulp.dest('src/css'));
// })

// gulp.task('fonts', () => {
//   return gulp.src('node_modules/font-awesome/fonts/*')
//     .pipe(gulp.dest('src/fonts'));
// });

// gulp.task('default', gulp.series('js', 'serve', 'font-awesome', 'fonts'))

exports.style = style;
exports.watch = watch;