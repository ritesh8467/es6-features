var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("task-babel", function () {
  return gulp.src("features/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task('watch', function() {
	gulp.watch(['features/*.js'], ['task-babel']);
});

gulp.task('default', ["task-babel", 'watch']);