const p = new Promise((resolve, reject) => {
    resolve(['Ana', 'Pedro', 'Jones'])
})

const primeiroElemento = arrrayOuString => arrrayOuString[0]
p
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(console.log)