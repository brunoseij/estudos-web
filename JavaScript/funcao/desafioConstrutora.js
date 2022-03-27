function criarPessoa(nome) {
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p1 = new criarPessoa('João')
p1.falar()
const p2 = new criarPessoa('Bruno')
p2.falar()
p1.falar()


/*
usando this.nome, poderá ter acesso à variável e mudar ela
function criarPessoa(nome) {
    this.nome = nome
    this.falar = () => console.log(`Meu nome é ${this.nome}`)
}
*/