function juroSimples(cap, juro, tempo) {
    let montante = cap
    for (let i = 0; i < tempo; i++) {
        montante += cap * juro
    }
    return `R$ ${montante.toFixed(2)}`
}

console.log(juroSimples(1000, 0.1, 12))


const jurosCompostos = function (cap, juro, tempo){
    let montante = cap
    for (let i = 0; i < tempo; i++) {
        montante += montante * juro
    }
    return `R$ ${montante.toFixed(2)}`
}

console.log(jurosCompostos(1000, 0.1, 12))