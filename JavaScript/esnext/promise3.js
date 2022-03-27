function gerarAleatorio(min, max) {
    if (min > max) [min, max] = [max, min]

    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator + min)
        resolve(aleatorio)
    })
}

gerarAleatorio(10, 20)
    .then(n => `O número gerado vezes 100 é igual à ${n * 100}`)
    .then(console.log)