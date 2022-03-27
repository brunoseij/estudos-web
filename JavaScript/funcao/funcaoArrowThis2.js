let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}

comparaComThis = comparaComThis.bind(obj)

comparaComThis(obj)
comparaComThis(global)

let comparaComThisArrow = param => console.log(param === this)

comparaComThisArrow(global)
comparaComThisArrow(module.exports) // cada arquivo do node representa um módulo, a função foi escrita dentro de um arquivo => this == modulo

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // bind não funciona com arrow functions