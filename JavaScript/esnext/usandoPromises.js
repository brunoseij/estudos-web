// com promises
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



Promise.all([getAlunosTurma('A'), getAlunosTurma('B'), getAlunosTurma('C')]) // espera todas as promises serem resolvidas
    .then(turmas => [].concat(...turmas)) // utilização do operador spread para concatenar todos os elementos em um array 1d
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e => console.log(e.message))
