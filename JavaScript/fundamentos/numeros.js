// em javascript todo numero é do tipo number
const n1 = 1
const n2 = 1.1
const n3 = 2.0
console.log(typeof n1)
console.log(typeof n2)
console.log(typeof n3)


//mesmo colocando 2.0, o javascript reconhece que é um inteiro
console.log(Number.isInteger(n1))
console.log(Number.isInteger(n2))
console.log(Number.isInteger(n3))


const pi = Math.PI

console.log(pi.toFixed(2)) // print com duas casas decimais
console.log(pi.toString(2)) // em binário
console.log(typeof pi)