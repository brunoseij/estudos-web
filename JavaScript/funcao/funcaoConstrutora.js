function Carro(velocidadeMaxima = 200, delta = 5) {
    // criando uma variável privada
    let velocidadeAtual = 0

    // criando metodos publicos através do this.
    this.acelerar = function () {
        if (velocidadeAtual < velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    this.frear = function () {
        if (velocidadeAtual > 0){
            velocidadeAtual -= delta
        } else {
            velocidadeAtual = 0
        }
    }

    this.velocidade = () => velocidadeAtual
}

const ferrari = new Carro(300, 25)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
ferrari.frear()
console.log(ferrari.velocidade())

console.log(typeof Carro) // função construtora é uma função que constrói objetos (contém atributos, métodos, etc)
console.log(typeof ferrari)