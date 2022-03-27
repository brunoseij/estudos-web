function Aula(nome, videoID) {
    this.nome = nome,
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 234)

console.log(aula1, aula2)

//simulando a função new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Aula 3', 03)
console.log(aula3)