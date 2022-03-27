function funcionarOuNao(valor, chance) {
    return new Promise((resolve, reject) => {
        try {
            con.log('alo')
            if (Math.random() < chance) {
                reject('Ocorreu um erro')
            } else {
                resolve(valor)
            }
        } catch (e) {
            reject(e)
        }
    })
}

// preferencialmente colocar o catch ao final
funcionarOuNao('funcionou', 0.5)
    .then(
        valor => console.log(valor),
    )
    .catch(e => console.log(e.message))