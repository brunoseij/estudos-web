// Serve para tratar template strings

function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const nome = 'Arthur'
const stat = 'Aprovado'
console.log(tag `${nome} está ${stat}`)