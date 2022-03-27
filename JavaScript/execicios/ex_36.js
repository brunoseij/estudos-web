function multArray(vetor, multiplicador, minimo = 5) {
    let i = 0
    vetor.forEach(n => {
        n = n * multiplicador
        if (n >= 5){
            vetor[i] = n
        }
        i++
    });

    return vetor
}

console.log(multArray([1,2,3,4,5], 3))