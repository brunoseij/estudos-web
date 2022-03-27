function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), tempo)
    })
}

// esperarPor()
//     .then(() => console.log('promise 1'))
//     .then(esperarPor)
//     .then(() => console.log('promise 2'))
//     .then(esperarPor)
//     .then(() => console.log('promise 3'))


async function esperando() {
    let valor = await retornarValor()

    await esperarPor() // sem o uso do await, todas as promises vão ser resolvidas de forma sincrona
    console.log(`Async/await ${valor}`)
    await esperarPor()
    console.log(`Async/await ${valor + 1}`)
    await esperarPor()
    console.log(`Async/await ${valor + 2}`)

    return valor
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(10)
        }, 5000)
    })
}

async function executarDeVerdade(){
    const valor = await esperando()
    console.log(valor)
}

executarDeVerdade()

// esperando()
//     .then(valor => console.log(valor))

async function retornarValorRapido() {
    return 20
}

retornarValorRapido()
    .then(valor => console.log(valor))
