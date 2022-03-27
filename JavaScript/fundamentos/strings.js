const escola = "Cod3r"

// ambos mostram o caractere na posição dada
console.log(escola[4])
console.log(escola.charAt(2))

console.log(escola.charCodeAt(3)) // retorna o código ascii do caractere na posição 3 da string escola
console.log(escola.indexOf('3')) // retorna o index do caractere 3 na string escola

console.log(escola.substring(1)) // retorna uma string a partir de outra (começa no index passado à função)
console.log(escola.substring(0, 3)) // retorna uma substring q começa do index 0 da string passada (uma string de 3 caracteres pra frente)

// ambos concatenam strings
console.log('Escola '.concat(escola).concat("!"))
console.log("Escola " + escola + "!")

// funcionam de maneira identica ao equivalente em python
console.log(escola.replace(3,'e'))
console.log('Ana,Maria,Pedro'.split(','))