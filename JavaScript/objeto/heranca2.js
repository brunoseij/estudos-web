// cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 0 // evitar de fazer isso pois afeta todos os objetos
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'D'}
const filho = {__proto__: pai, attr3: 'C'} // vale o ultimo

console.log(filho)
console.log(filho.attr0, filho.attr1, filho.attr2)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta) {
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `Velocidade: ${this.velAtual}, Velocidade Máxima: ${this.velMax}`
    }

}


const ferrari = {
    modelo: 'F40',
    velMax: 324, // shadowing
}

const volvo = {
    __proto__: carro,
    modelo: 'V40',
    velMax: 220,
    status() {
        return `${this.modelo}: ${super.status()}` // o super faz com que seja possivel acessar atributos do protótipo
    }
}

Object.setPrototypeOf(ferrari, carro)

console.log(ferrari) // abstração de atributos do protótipo
ferrari.acelerar(30)
console.log(ferrari.status())

console.log(volvo)
volvo.acelerar(500)
console.log(volvo.status())

console.log(ferrari.attr0)