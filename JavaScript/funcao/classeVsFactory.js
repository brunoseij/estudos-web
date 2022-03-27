// as duas funções fazem a mesma coisa
// no navegador, a função factory funciona, e a classe não, pois na função factory não é necessário utilizar o this

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Victor')
p2.falar()