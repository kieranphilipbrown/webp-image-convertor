const gulp = require("gulp");
const { series } = require("gulp");
const gic = require("gulp-imgconv");

function convertImages(cb) {
    gulp.src('src/images/*')
        .pipe(gic(gic
            .begin()
            .toFormat('webp', {
                quality: 80
            })
            .commit()
        ))
        .pipe(gulp.dest('dist/'));
    cb();
}

exports.convert = series(convertImages);
