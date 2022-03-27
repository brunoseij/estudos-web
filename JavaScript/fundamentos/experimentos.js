var a = 3
console.log(global.a)
console.log(this.a)


this.c = 5
this.d = 'variavel d'
this.e = false
console.log(module.exports === this) // no navegador, this === window, evitar criar variáveis nesse escopo, pois é acessivel para o usuario final
console.log(module.exports)


// evitar o uso de variáveis globais
global.b = 4
console.log(global.b)

abc = 3 // não fazer isso
console.log(global.abc)