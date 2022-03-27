function pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++ // pega o contexto da função exterior também (contexto léxico (?))
        console.log(this.idade)
    }, 1000) // this não varia com quem ta chamando em uma função arrow
}

new pessoa