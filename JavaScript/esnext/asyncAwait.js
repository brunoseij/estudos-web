// ES8
// Objetivo de simplificar (fazer com que pareça sincrono)
const http = require('http')

function getAlunosTurma(letra){
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
        return new Promise((resolve, reject) => {
            http.get(url, res => {
                let resultado = ''
                res.on('data', dados => resultado += dados)
                
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(resultado))
                    } catch (e){
                        reject(e)
                    }
                })
        })
    })
}

const obterAlunos = async () => {
    const turmaA = await getAlunosTurma('A')
    const turmaB = await getAlunosTurma('B')
    const turmaC = await getAlunosTurma('C')

    return [].concat(turmaA, turmaB, turmaC)
} // retorna um objeto AsyncFunction

obterAlunos()
    .then(alunos => console.log(alunos.map(aluno => aluno.nome)))