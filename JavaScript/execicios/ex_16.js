function calculadora(a, b, sinal) {
    switch (sinal){
        case '+':
            return a + b
        case '-':
            return a - b
        case '*':
            return a * b
        case '/':
            return a / b
        default:
            console.log('Operação inválida')
    }
}
console.log(calculadora(3, 2, '+'))
console.log(calculadora(3, 2, '-'))
console.log(calculadora(3, 2, '*'))
console.log(calculadora(3, 2, '/'))