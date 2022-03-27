// recriando a função map
Array.prototype.map2 = function(callback) {
    let novoArray = []
    for (let i = 0; i < this.length; i++){
        novoArray.push(callback(this[i], i, this))
    }
    return novoArray
}


const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const pegarPreco = objeto => objeto.preco

let resultado = carrinho.map2(paraObjeto).map2(pegarPreco)
console.log(resultado)