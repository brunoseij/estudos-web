// o objeto aponta pra um endereço de memória, e esse endereço q é constante

const pessoa = {nome: 'Jõao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// nesse caso, foi tentado mudar o endereço de memória, logo, por ser uma constante, não é possivel
// pessoa = {nome: 'Maria'}

// pra ter um objeto constante
Object.freeze(pessoa)
pessoa.nome = 'Maria'
console.log(pessoa)

delete pessoa.nome
console.log(pessoa)