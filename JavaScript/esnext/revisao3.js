// ES8: Object.values, Object.entries
const obj1 = { a: 1, b: 2, c: 3 }

console.log(Object.values(obj1))
console.log(Object.entries(obj1))

// Melhorias na notação literal
nome = 'Victor'
const pessoa = {
    nome,
    ola(){
        return `Olá, meu nome é ${this.nome}`
    }
}

console.log(pessoa.ola())

// class

class Animal {
    reino = 'Animalia'
}
class Cachorro extends Animal{
    latir(){
        return 'Au au!'
    }
}

const dalmata = new Cachorro
console.log(dalmata.reino, dalmata.latir())