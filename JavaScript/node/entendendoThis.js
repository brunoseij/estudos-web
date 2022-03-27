console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

function qualquerUma(){
    console.log('dentro de uma função...')
    console.log(this === module.exports)
    console.log(this === global)
    this.atributo = 'Olá'
}

qualquerUma()
console.log(global.atributo)