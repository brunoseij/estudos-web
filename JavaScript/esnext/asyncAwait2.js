function gerarAleatorio(min, max, proibidos) {
    if (min > max) [min, max] = [max, min]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        if (proibidos.includes(aleatorio)){
            reject('Número proibido')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdNumeros, tentativas = 1){
    try {
        const numeros = []
        for (_ of Array(qtdNumeros).fill()) { // funciona de maneira semelhante ao range do python Array(10).fill() gera um array com 10 undefineds que será percorrido dentro do for
            numeros.push(await gerarAleatorio(1, 60, numeros)) // os numeros vão sendo adicionados e proibidos conforme vão sendo adicionados
        }
        return numeros
    } catch(e) {
        if (tentativas > 10){
            throw 'Não deu certo' // o erro será tratado aqui
        } else{
            return gerarMegaSena(qtdNumeros, tentativas + 1)
        }
    }
}

gerarMegaSena(20)
    .then(console.log)
    .catch(console.log)