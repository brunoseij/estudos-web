const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: false},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: todos os alunos são bolsistas?

const resultado = alunos.map(a => a.bolsista).reduce((anterior, atual) => {
    if (anterior == atual && anterior == true){
        return true
    } else {
        return false
    }
})
console.log(resultado)


// Desafio 2: algum aluno é bolsista?

const resultado2 = alunos.map(a => a.bolsista).reduce((anterior, atual) => {
    if (anterior || atual){
        return true
    } else {
        return false
    }
})
console.log(resultado2)

/*
//d1
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const resultado = alunos.map(a => a.bolsista).reduce(todosBolsistas)

//d2
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const resultado = alunos.map(a => a.bolsista).reduce(algumBolsista)
*/