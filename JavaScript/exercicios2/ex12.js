function removerPropriedade (obj, prop){
    delete obj[prop]
    return obj
}

const objeto = { 
    id: 20, 
    nome: "caneta", 
    descricao: "Não preenchido" 
}

console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2} 
console.log(removerPropriedade(objeto, "descricao")) // retornará {id: 20, nome: "caneta"}

console.log(Object.is(removerPropriedade(objeto, "descricao"), objeto))