// armazenando uma função em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}
imprimirSoma(2, 3)


// função arrow
const soma = (a, b) => {
    return(a + b)
}
console.log(soma(2, 3))


// retorno implicito
const subtracao = (a, b) => a - b // quando não abre a chave, não precisa utilizar return
console.log(subtracao(2,3))


const imprimir = a => console.log(a)
imprimir('olá mundo')