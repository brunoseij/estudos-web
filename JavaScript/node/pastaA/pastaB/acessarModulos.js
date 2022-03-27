// ../ volta para a pasta anterior
const moduloA = require('../../moduloA') // linux é case sensitive, então atentar às letras maiusculas
const saudacao = require('saudacao')
const pastaC = require('./pastaC')

console.log(moduloA.boaTarde)
console.log(saudacao.bomDia)
console.log(pastaC.ola2)


const http = require('http')
http.createServer((req, res) => {
    res.write('Bom dia')
    res.end()
}).listen(8080)