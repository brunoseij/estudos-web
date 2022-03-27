const fatorial = function (n) {
    let resultado = 1
    while (n > 1) {
        resultado *= n
        n -= 1
    }
    return resultado
}

console.log(fatorial(4))
console.log(fatorial(5))
console.log(fatorial(1))
console.log(fatorial(0))