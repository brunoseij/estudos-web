const pa = (n, a1, r) => {
    const resultado = []
    for (let i = 1; i < n + 1; i++){
        resultado.push(a1 + (i - 1) * r)
    }
    return resultado
}

console.log(pa(10, 2, 4))


const pg = (n, a1, r) => {
    const resultado = []
    for (i = 1; i < n + 1; i++) {
        resultado.push(a1 * r ** (i -1))
    }
    return resultado
}
console.log(pg(10, 2, 4))