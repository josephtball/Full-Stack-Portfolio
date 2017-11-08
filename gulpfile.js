'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', function() {
	return gulp.src('./app/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./app/public/css'))
});

gulp.task('watch', function() {
	gulp.watch('./app/scss/**/*.scss', ['sass'])
});

gulp.task('default', ['watch']);