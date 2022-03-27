// praticamente qualquer coisa pode se comportar como boolean, se for requerido 

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

console.log(!!isAtivo) // ao usar !!, será mostrado o valor boolean do que for passado (pode ser string, number...)

console.log('Os verdadeiros:')
console.log(!!3)
console.log(!!-1)
console.log(!!Infinity)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!(isAtivo = true))

console.log('Os falsos:')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log("Pra finalizar")
console.log(!!('' || null || 0 || ' ')) // || = ou  (printa valor verdade da expressão)

let nome = 'Lucas'
console.log(nome || 'Desconhecido') // printa o valor true da expressão se o nome for uma string vazia, ele printa a string preenchida
