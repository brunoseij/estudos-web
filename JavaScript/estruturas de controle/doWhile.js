// estrutura muito pouco usada

function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

// let opcao = 32
let opcao

do { // a diferença, é q obrigatoriamente será executado uma vez, antes de entrar no loop while (então pode começar com o valor que torna o while falso) ou começar sem valor
    opcao = numeroAleatorio(0,50)
    console.log(`O número gerado foi: ${opcao}`)
} while (opcao != 32)
console.log('Final')