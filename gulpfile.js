var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested');

gulp.task('default', function(){
    console.log('Woohoo, kreirala si gulp task!');
});

gulp.task('html', function(){
    console.log("Zamisli da je nesto korisno uradjeno sa tvojim HTML-om ovde.");
});

gulp.task('styles', function(){
    console.log("Zamisli da se SASS ili PostCSS running ovde");
    return gulp.src("./app/assets/styles/styles.css")
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles')); // return je jer je gulp.src() asinhrona f-ja, zelimo da gulp postane svestan kada je ova funkcija gotova
});

gulp.task('watch',function(){
    watch("./app/index.html", function(){
        gulp.start('html');
    });

    watch("./app/assets/styles/**/*.css", function(){
       gulp.start('styles');
    });
});