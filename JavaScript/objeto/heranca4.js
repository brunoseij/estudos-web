function MeuObjeto(){}

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ == obj2.__proto__)
console.log(obj1.__proto__ == MeuObjeto.prototype)

MeuObjeto.prototype.nome = 'Lariane'
MeuObjeto.prototype.falar = function(){
    return `Meu nome é ${this.nome}`
}

console.log(obj1.falar())
obj2.nome = 'Jones'
console.log(obj2.falar())

const obj3 = {__proto__: MeuObjeto.prototype}
console.log(obj3.falar())


console.log((MeuObjeto.__proto__) === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)