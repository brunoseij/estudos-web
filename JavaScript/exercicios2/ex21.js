const menorNumero = (a) => {
    return a.sort((a, b) => a < b? -1 : 1)[0]
}

console.log(menorNumero([4, 3, 5, 2, 9, 0]))