const paresEImpares = function (numeros) {
    let pares = 0
    let impares = 0
    numeros.forEach(n => {
        if (n % 2 == 0){
            pares ++
        } else {
            impares ++
        }
    })
    return `${pares} numeros pares, ${impares} numeros impares`
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(paresEImpares(vetor))