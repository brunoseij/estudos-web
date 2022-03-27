let contador = 1
while (contador <= 10) {
    console.log(`contador: ${contador}`)
    contador ++
}

console.log('Usando for')
for (let i = 1; i <= 10; i++) {
    console.log(`contador: ${i}`)
}

const notas = [6.5, 3.2, 1.7, 8.6, 7.7]

for (let i = 0; i < notas.length; i++) {
    console.log(`nota: ${notas[i]}`)
}