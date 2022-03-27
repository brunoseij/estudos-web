Array.prototype.filter2 = function(callback) {
    let novoArray = []
    for (let i = 0; i <= this.length - 1; i++){
        if(callback(this[i], i, this)){
            novoArray.push(this[i])
        }
    }
    return novoArray
}


const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

const caro = p => p.preco >= 500
const fragil = p => p.fragil == true

console.log(produtos.filter2(caro).filter2(fragil))