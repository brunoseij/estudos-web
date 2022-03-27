// código ilegivel e imprático
const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, (res) => {
        let resultado = ''
        res.on('data', dados => resultado += dados)

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}


let listaAlunos = []
getTurma('A', (alunos) => {
    listaAlunos = listaAlunos.concat(alunos.map(aluno => `A: ${aluno.nome}`))
    getTurma('B', alunos => {
        listaAlunos = listaAlunos.concat(alunos.map(aluno => `B: ${aluno.nome}`))
        getTurma('C', alunos => {
            listaAlunos = listaAlunos.concat(alunos.map(aluno => `C: ${aluno.nome}`))
            console.log(listaAlunos)
        })
    })
})

