const alunos = [
    { nome: 'Maria', nota: 7.2},
    { nome: 'João', nota: 8.9}
]

// tirar a média das notas dos alunos

// abordagem imperativa
let total = 0
for (let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length)

// abordagem declarativa
// preferível utilizar essa abordagem, visto que existe uma maior possibilidade de reutilização de código
const obterNotas = aluno => aluno.nota
const somar = (acumulador, atual) => acumulador + atual

const total1 = alunos.map(obterNotas).reduce(somar)
console.log(total1 / alunos.length)