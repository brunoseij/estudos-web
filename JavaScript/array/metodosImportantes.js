const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // retira o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // insere um elemento na ultima posição
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // insere um elemento na primeira posição
console.log(pilotos)

// splice pode adicionar ou remover elementos do array

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // (index, quantos deseja remover, elementos adicionados)
console.log(pilotos)

//remover
pilotos.splice(3, 1) // removeu um elemento a partir do indice 3
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // cria um array com os elementos a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // cria um array com os elementos a partir do 1 (inclue o 1) até o indice 4 (não inclue o 4)
console.log(algunsPilotos2)