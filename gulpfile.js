
//gulp本体の読み込み
var gulp = require('gulp');
//sassをコンパイルするぷらぐいん読み込み
var sass = require('gulp-sass');
//watchぷらぐいん読み込み
var watch = require('gulp-watch');

gulp.task('sass',function(){
	gulp.src('css/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./css/'));
});

gulp.task('default',function(){
	gulp.watch('css/*.scss',['sass']);
});