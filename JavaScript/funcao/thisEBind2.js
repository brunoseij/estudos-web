function Pessoa() {
    this.idade = 0

    const self = this // utilizando uma palavra não reservada para definir quem é o this
    setInterval(function(){ // setInterval executa uma função repetidas vezes, dado um intervalo (em ms)
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) // nesse caso, como a função não é executada pela própria função Pessoa, e sim por um temporizados, o this é diferente do esperado (diferente do objeto Pessoa)
}

new Pessoa