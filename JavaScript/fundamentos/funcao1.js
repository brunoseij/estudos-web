// função sem retorno
function imprimirSoma(a, b = 0){
    console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2,3,6,8)
imprimirSoma(2)
imprimirSoma()

// função som retorno

function soma(a,b){
    return a+b
}
console.log(soma(2,4))
console.log(soma(2))