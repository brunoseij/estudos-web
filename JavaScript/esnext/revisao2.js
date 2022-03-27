// Função Arrow

const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow function this
const lexico1 = () => console.log(this === module.exports)
const lexico2 = () => lexico1.bind({})() // com a função arrow, this é invariável

lexico1()
lexico2()


// Parâmetro default
function imprimirNome (nome = 'Anônimo'){
    console.log(nome)
}

imprimirNome()
imprimirNome('Jones')

// Operador rest

function total (...numeros){
    let total = 0
    numeros.forEach(n => total += n)
    return total
}

console.log(total(1, 2, 3, 4, 5, 6, 7, 8))