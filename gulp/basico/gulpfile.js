// gulpfile é o arquivo lido por padrão quando o comando gulp é executado no terminal
const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Antes 2')
    return cb()
}

function copiar(callback){
    // gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt']) // seleção dos arquivos
    gulp.src('pastaA/**/*.txt') // todos os arquivos .txt da pastaA
        .pipe(gulp.dest('pastaB')) // destino dos arquivos
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())
        // .pipe(transformacaoC())
    return callback() // a callback vai notificar ao gulp que a tarefa foi finalizada (o próprio gulp passa a callback como parâmetro)
}

const fim = cb => {
    console.log('Fim')
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2), // antes1 e antes2 serão iniciados juntos
    copiar,
    fim,
) // por padrão, o gulp espera receber uma tarefa com o nome de default