// destructuring aplicado em listas
const lista = [1,2,3,4,5,6,7]
console.log(lista)

const [n1, , ,n4, ,n6, ,n8 = 0] = lista
console.log(n1, n4, n6, n8)

const [,[,nota]] = [[1,2],[3,4,5]]
console.log(nota)
// é possivel também acessar listas dentro de listas