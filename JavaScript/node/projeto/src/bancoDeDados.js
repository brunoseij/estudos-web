const produtos = {}

const contador = {
    _id: Object.keys(produtos).length + 1,
    get id(){
        return this._id ++
    },
    set id(id){
        if (id > this.id){
            this._id = id
        }
    }
}

function salvarObjeto(produto) {
    if (!produto.id) { // se não existir o id no objeto passado
        produto.id = contador.id
    }
    produtos[produto.id] = produto
    return produto
}

function consultarObjetos() {
    return produtos
}

function consultarObjeto(id){
    return produtos[id] || {}
}

function deletarObjeto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = {salvarObjeto, consultarObjeto, consultarObjetos, deletarObjeto}