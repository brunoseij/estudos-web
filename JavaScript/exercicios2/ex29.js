const segundoMaior = a => {
    return a.sort((a, b) => a > b? -1 : 1)[1]
}

console.log(segundoMaior([12, 16, 1, 5]))
console.log(segundoMaior([8, 4, 5, 6]))
