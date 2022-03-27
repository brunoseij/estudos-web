function esperarPor(tempo = 2000) {
    return new Promise((resolve, reject) => {
        console.log('Executando timeout')
        setTimeout(() => { 
            resolve()
        }, tempo)
    })
}

esperarPor()
    .then(() => esperarPor())
    .then(esperarPor)