function criarProduto(nome, preco) {
    const desconto = 0.1
    return {
        nome,
        preco,
        desconto
    }
}
console.log(criarProduto('detergente', 2.50))