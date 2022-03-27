function paresIndicePares(array) {
    const resultado = array.filter((e, i) => i % 2 == 0 && e % 2 == 0)
    return resultado
}
console.log(paresIndicePares([1, 2, 3, 4]))
console.log(paresIndicePares([10, 70, 22, 43]))