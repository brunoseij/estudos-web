// função factory é uma função que retorna um objeto de forma literal

// exemplo simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa()) // diferentemente da função construtora, não é necessário utilizar o new