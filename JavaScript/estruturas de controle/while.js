// usar um loop while preferencialmente quando é necessário um número desconhecido de repetições

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

let opcao = 0

while (opcao != 32) {
    opcao = numeroAleatorio(0,50)
    console.log(`O número gerado foi: ${opcao}`)
}
console.log('Final')