const escola = [{
    nome: 'Turma A',
    alunos: [{
        aluno: 'João',
        nota: 8.2
    },{
        aluno: 'Maria',
        nota: 6.2
    }]
},{
    nome: 'Turma B',
    alunos: [{
        aluno: 'Victor',
        nota: 3.4
    },{
        aluno: 'Joana',
        nota: 9.3
    }]
}]

// gerar um array com as notas dos alunos
const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

// gerar um array sem arrays dentro, contendo as notas dos alunos
console.log(escola.flatMap(getNotasDaTurma))

// fazendo o flatMap
Array.prototype.flatMap2 = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}
const notas2 = escola.flatMap2(getNotasDaTurma)
console.log(notas2)