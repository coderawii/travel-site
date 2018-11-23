var gulp = require("gulp"),
imagemin = require('gulp-imagemin');

gulp.task('optimizeImages', function(){
    return gulp.src([ './app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
        .pipe(imagemin({
            progressive: true, // optimizuje jpeg image
            interlaced: true, // optimize gif image
            multipass: true // optimize svg files
        }))
        .pipe(gulp.dest('./dist/assets/images'));
});

gulp.task('build', ['optimizeImages']);