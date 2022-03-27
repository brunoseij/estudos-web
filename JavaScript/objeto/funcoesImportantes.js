const pessoa = {
    nome: 'Jones',
    idade: 20,
    peso: 50,
}

// Métodos que geram listas
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa)) // gera uma lista que contem listas de chave/valor

Object.entries(pessoa).forEach(([atributo, valor]) =>{
    console.log(`O atributo ${atributo} é ${valor}`)
})

// Método para criar/transformar em constante/ocultar atributos
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true, // se for false, a chave não aparecerá quando chamarmos Object.keys(pessoa)
    writable: false, // se for true, dataNascimento será uma variável
    value: '02/02/2002'
})
console.log(pessoa)
console.log(Object.keys(pessoa))
pessoa.dataNascimento = 'tentando mudar'
console.log(pessoa.dataNascimento)


// Concatenação de objetos
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // o ultimo sobrescreverá se houver chaves repetidas nos objetos concatenados
console.log(obj)