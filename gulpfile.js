const { watch, series } = require('gulp');
var gulp 		 			= require('gulp');
var rename 		 			= require('gulp-rename');
var stylus 		 			= require('gulp-stylus');
var min 		 				= require('gulp-minify-css');
var beautify     			= require('gulp-cssbeautify');
var prefix					= require('gulp-autoprefixer');
var pug						= require('gulp-pug');
var removeHtmlComments 	= require('gulp-remove-html-comments');


gulp.task('css', function(done) {

	gulp.src('./src/stylus/style.styl')
		.pipe(stylus({
			errorLogToConsole: true
		}))
		.on('error', console.error.bind(console))
		.pipe(beautify())
		.pipe(prefix('last 2 versions'))
		.pipe(min({processImport: false}))
		.pipe(rename('style.css'))
		.pipe(gulp.dest('./public/css/'))

	done();

});

gulp.task('pug', function(done) {

	gulp.src('./src/pug/form.pug')
		.pipe(pug({
			errorLogToConsole: true
		}))
		.on('error', console.error.bind(console))
		.pipe(pug({
            pretty: true
        }))
		.pipe(removeHtmlComments())
		.pipe(rename('index.html'))
		.pipe(gulp.dest('./public/'))

	done();

});

//Do everything once!
gulp.task('watch', function(){
   gulp.watch('./src/stylus/*.styl', gulp.series('css'))
   gulp.watch('./src/pug/*.pug', gulp.series('pug'))
});