const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray[0])

// Object.defineProperty(quaseArray, 'toString', {
//     value: function() {return Object.values(this)}, 
//     enumerable: false
// })
// console.log(quaseArray[0])

Object.prototype.array = function() {
    return Object.values(this) // Object.values() retorna um array com todos os valores do objeto
}

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(meuArray, quaseArray.array())