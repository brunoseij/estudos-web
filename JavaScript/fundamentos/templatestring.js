// as template strings utilizam `` ao invés de '', facilitam na hora de introduzir variáveis em uma string

const nome = 'yoshi'
const concatenacao = 'Olá ' + nome + '!'

// além de facilitar a introdução de variáveis, as template strings aceitam quebras de linha e identação
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template)

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase() // up é uma função arrow, recebe um texto, e realiza texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`) // as template strings comportam funções dentro delas