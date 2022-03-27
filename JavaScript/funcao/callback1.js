const fabricantes = ['BMW', 'Mercedes', 'Audi', 'Fiat', 'Chevrolet']

const imprimir = function (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) // forEach é um método para arrays, onde para cada um dos itens da lista, ele chama uma função (faz um callback) passando o nome e o indice do item (nessa ordem)

// é a mesma coisa que

fabricantes.forEach(function (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
})

fabricantes.forEach((fabricante, indice) => console.log(`${indice + 1}. ${fabricante}`))

fabricantes.forEach(function (a) {
    console.log(a)
})