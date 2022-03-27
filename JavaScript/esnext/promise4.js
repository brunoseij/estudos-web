function gerarAleatorio(min, max, tempo) {
    if (min > max) [min, max] = [max, min]

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator + min)
            resolve(aleatorio)
        }, tempo)
    })
}

function gerarVariosNumeros() {
    return Promise.all([
        gerarAleatorio(1, 60, 4000),
        gerarAleatorio(10, 50, 1000),
        gerarAleatorio(10, 50, 3000),
        gerarAleatorio(10, 50, 2000),
        gerarAleatorio(10, 50, 500)
    ])
}

console.time('promise')

gerarVariosNumeros()
    .then(console.log)
    .then(() => console.timeEnd('promise'))