var gulp = require("gulp"),
	terser = require("gulp-terser");
gulp.task("minify-js", function () {
	return gulp.src("*.js").pipe(terser()).pipe(gulp.dest("minified"));
}),
	gulp.task("default", gulp.series("minify-js"));
