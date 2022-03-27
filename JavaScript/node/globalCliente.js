require('./global') // não é necessário colocar const = global pois ja existe um objeto global

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'TESTE'
console.log(MinhaApp.nome)