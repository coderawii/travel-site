var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del'),
svg2png = require('gulp-svg2png');

var config = {
    // shape: {
    //     spacing: {
    //         padding: 1
    //     }
    // },
    mode: {
        css: {
            variables: {
                replaceSvgWithPng: function(){
                    return function(sprite, render){
                        return render(sprite).split('.svg').join('.png');
                    }
                }
            },
            sprite: 'sprite.svg', // ovim uklanjamo .css iz file imena za background-image: url('/temp/sprite/css/svg/sprite-69f19c2e.svg'); (dakle bilo je sprite.css-......)
            render: {
                css: {
                    template: './gulp/templates/sprite.css'
                }
           } 
        }
    }
}

gulp.task('beginClean', function() {
    return del(['./app/temp/sprite', './app/assets/images/srpites']);
});

gulp.task('createSprite', ['beginClean'], function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svgSprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('createPngCopy', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.svg')
        .pipe(svg2png())
        .pipe(gulp.dest('./app/temp/sprite/css'));
});

gulp.task('copySpriteGraphic', ['createPngCopy'],  function() { // ovo ['createSrpite'] ubaceno ovde znaci da je on dependency ovom tasku, tj copySpriteGraphic zavisi od createSprite 
    return gulp.src('./app/temp/sprite/css/**/*.{svg, png}')
        .pipe(gulp.dest('./app/assets/images/sprites'));
});

gulp.task('copySpriteCss', ['createSprite'], function(){ // ovo ['createSprite'] smo dodali da se ovaj task copySpriteCss ne krene izvrsavati pre nego se ovaj createSprite def ne zavrsi/izvrsi
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCss'], function() {
    return del('./app/temp/sprite');
});

// bilo bi idealno kada bi umesto ova 2 taska pokretali zapravo samo jedan koji sadrzi oba ova taska
gulp.task('icons', ['beginClean', 'createSprite','createPngCopy',  'copySpriteGraphic', 'copySpriteCss', 'endClean']); // dakle prvo ce da se izvrsava createSprite, i onda ce ovaj copySpriteCss da ceka sve dok se ovaj createSprite ne izvrsi