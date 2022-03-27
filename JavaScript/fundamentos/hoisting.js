// em javascript, quando se utiliza var, ocorre o chamado hoisting(içamento), onde a declaração de uma variável vai pro topo do código
console.log(`antes da declaração, a = ${a}`)
var a = 2
console.log(`depois da declaração, a = ${a}`)

/* equivalente à
    var a
    console.log(`antes da declaração, a = ${a}`)
    a = 2
    console.log(`depois da declaração, a = ${a}`)
*/

// o hoisting acontece também dentro de funções
function imprimevar() {
    console.log('Dentro de uma função:')
    console.log(`antes da declaração, c = ${c}`)
    var c = 3
    console.log(`depois da declaração, c = ${c}`)
}

imprimevar()
// console.log(c) gerará um erro fora da função, pois foge do escopo do var definido



// fazendo isso com let, gerará um erro
// console.log(`antes da declaração, b = ${b}`) 
// let b = 5
// console.log(`depois da declaração, b = ${b}`)
