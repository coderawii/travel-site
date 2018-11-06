var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function(){

    browserSync.init({
        notify: false, // da se vise ne bi prikazivao black block sa strane u browseru kada god sejvujemo neki fajl u text-editoru
        server: {
           baseDir: "app"
        } 
    });

    watch("./app/index.html", function(){
        // gulp.start('html');
        browserSync.reload();
    });

    watch("./app/assets/styles/**/*.css", function(){
    //    gulp.start('style');
       gulp.start('cssInject');
        
    });

});

gulp.task('cssInject',['styles'] , function(){
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});