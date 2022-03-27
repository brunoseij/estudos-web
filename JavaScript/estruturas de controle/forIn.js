const notas = [6.5, 3.2, 1.7, 8.6, 7.7]
// sempre utilizar o let, para a variável não ficar acessivel fora do loop

for (let i in notas) { // i é o index de cada um dos itens da lista
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'jones',
    sobrenome: 'laureano',
    idade: 20,
    peso: 30,
}


for (let atributo in pessoa) {
    console.log(typeof atributo)
    console.log(`${atributo} = ${pessoa[atributo]}`)
}