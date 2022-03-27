function bhaskara(a, b, c) {
    const delta = b ** 2 - 4 * a * c
    const resultado = []

    if (delta >= 0) {
        resultado.push((-b + Math.sqrt(delta)) / (2 * a))
        resultado.push((-b - Math.sqrt(delta)) / (2 * a))
        
        return resultado
    } else {
        return 'Delta negativo'
    }
}

console.log(bhaskara(2, 12, -14))