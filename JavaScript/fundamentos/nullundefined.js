let a = {nome: "Pedro"}
let b = a
console.log(a,b)

b.nome = "João"
console.log(a,b) // atribuição por referencia (tanto a como b referenciam um espaço na memória)

// isso só acontece para objetos

let n1 = 3
let n2 = n1
console.log(n1,n2)

n2 = 4
console.log(n1,n2)

let valor
console.log(valor) // valor não foi definido ainda

valor = null // valor foi definido como uma ausência de valor
console.log(valor) // evitar atribuir undefined

let produto = {}
produto.preco = null // definindo como um produto sem preço especificado ainda

console.log(produto)

delete produto.preco
console.log(produto)