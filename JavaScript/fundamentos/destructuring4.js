function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const num = Math.random() * (max - min) + min
    return Math.ceil(num)
}
const lista = [4,50]
console.log(rand(lista))