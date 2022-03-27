function getPreco(imposto = 0, moeda = 'R$') {
    return (`${moeda} ${this.preco * (1 + imposto - this.desc)}`)
}

const produto = {
    nome: 'Notebook',
    preco: 5000,
    desc: 0.2,
    getPreco
}

console.log(produto.getPreco())

const carro = {
    nome: 'Clio',
    preco: 15000,
    desc: 0.2
}

console.log(getPreco.call(carro, 0.1, '$'))
console.log(getPreco.apply(carro, [0.1, '$']))