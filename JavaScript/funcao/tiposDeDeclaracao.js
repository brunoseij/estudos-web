// as funções declaradas por meio do function declaration são carregadas antes da execução

console.log(soma(2, 3))
// console.log(sub(3, 2))
// console.log(mult(2, 3))


// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function (x, y) {
    return x - y
}
console.log(sub(3, 2))

// named function expression
// não é muito utilizada, porém pode apresentar vantagens ao debugar, se tiver algum erro aparece o nome da função
const mult = function mult(x, y) { 
    return x * y
}
console.log(mult(2, 3))