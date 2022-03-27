const soma = function (x, y) {
    return x + y
}

const subtracao = function (x, y) {
    return x - y
}

const imprimirResultado = function (a, b, operacao = soma) { // recebe os dois números, e uma função (por padrão é a função soma)
    console.log(operacao(a, b)) // passa os dois números recebidos para a função recebida
}

imprimirResultado(2, 3)
imprimirResultado(50, 42, subtracao)
imprimirResultado(3, 2, function (x, y) {
    return x ** y
})
imprimirResultado(9, 3, (x, y) => x / y) // toda função arrow é anonima

const pessoa = {
    falar: function(){ // função anônima
        console.log('Olá')
    },
}
pessoa.falar()