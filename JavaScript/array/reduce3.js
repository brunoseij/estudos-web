Array.prototype.reduce2 = function (callback, inicio) {
    const indiceInicial = inicio ? 0 : 1
    let acumulador = inicio || this[0]

    for (let i = indiceInicial; i < this.length; i++) {
        acumulador = callback(acumulador, this[i], i, this)
    }
    
    return acumulador
}


const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: false },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: false }
]

//d0
console.log(alunos.map(a => a.nota))
const resultado0 = alunos.map(a => a.nota).reduce2((acumulador, atual) => acumulador + atual, 0)
console.log(resultado0)

//d1
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
const resultado1 = alunos.map(a => a.bolsista).reduce2(todosBolsistas)
console.log(resultado1)

//d2
const algumBolsista = (resultado, bolsista) => resultado || bolsista
const resultado2 = alunos.map(a => a.bolsista).reduce2(algumBolsista, true)
console.log(resultado2)

