// function dobro(a) {
//     return a*2
// }
// console.log(dobro(Math.PI))

let dobro = function (a) {
    return a * 2
}
console.log(dobro(Math.PI))

dobro = (a) => {
    return a * 2
}
console.log(dobro(Math.PI))

dobro = a => a * 2 // retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá!'
}
console.log(ola())

ola = () => {
    return 'Olá!'
}
console.log(ola())

ola = _ => 'Olá!' // nesse caso, existe um paramêtro, porém pode ser simplesmente ignorado, ja q o retorno não tem nada a ver

console.log(ola())