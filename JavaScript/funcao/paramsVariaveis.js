function soma() {
    let soma = 0
    console.log(typeof arguments)
    for (i in arguments){ // arguments é um array interno da função
        soma += arguments[i]
    }
    return soma
}
console.log(soma())
console.log(soma(3, 4, 5, 6, 'cu'))