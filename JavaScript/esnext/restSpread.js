// Operador ... rest (juntar), spread(espalhar)
// usar rest como um parametro de uma função

function juntarArray(...array){
    console.log(array)
}
juntarArray(1, 2, 3, 4, 5, 6)

// usar spread em um objeto
const funcionario = {nome: 'Maria', salario: 1234.56}
const clone = {...funcionario, ativo: true} // fazer mudanças no clone não alterará o objeto original
console.log(clone)

// usar spread em um array
const numeros = [1, 2, 3, 4]
const letras = ['a', 'b', 'c', 'd']

const letrasNumeros = [...letras, ...numeros]
console.log(letrasNumeros)