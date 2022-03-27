{
    var a = 'a'
    let b = 'b'
}


try {
    console.log(a)
    console.log(b)
} catch (error) {
    console.log(error.message) // b tem escopo de bloco
}

// Template String
const nome = 'Jones'
console.log(`Olá, 
${nome} 
!!!`)

// Destructuring

const [l, e, ...tras] = 'Raul Laureano'
console.log(l, e, tras)

const [n1, , n3] = [1, 2, 3, 4]
console.log(n1, n3)

const {nome: n, idade} = {nome: 'Ana', idade: 20}

console.log(n, idade)