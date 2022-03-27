class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = "Professor") {
        super(sobrenome) // super serve para acessar os atributos herança
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva', 'Garimpeiro')
    }
}


const filho = new Filho

console.log(filho)