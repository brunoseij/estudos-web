Object.prototype.objetoParaArray = function(){
    const arrayFinal = []
    Object.keys(this).forEach(e => {
        arrayFinal.push([e, this[e]])
    })
    return arrayFinal
}

const objeto = { 
    nome: "Maria", 
    profissao: "Desenvolvedora de software" 
}

const objeto2 = { 
    codigo: 11111, 
    preco: 12000 
}

console.log(objeto.objetoParaArray())
console.log(objeto2.objetoParaArray())