const gulp = require('gulp')
const { series, parallel } = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb){
    gulp.src('src/**/*.js')
        .pipe(babel({ 
            comments: false,
            presets: ["env"] // pega tudo de mais moderno do javascript e converte
        }))
        .on('error', err => console.log(err))
        .pipe(uglify())
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build/js'))
        
    return cb()
}

function fim(cb){
    console.log('fim')
    return cb()
}

module.exports.default = parallel(transformacaoJS, fim)