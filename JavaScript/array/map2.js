const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]

// retornar um array apenas com os preços
const paraObjeto = json => JSON.parse(json)
const pegarPreco = objeto => objeto.preco

let resultado = carrinho.map(paraObjeto).map(pegarPreco)
console.log(resultado)