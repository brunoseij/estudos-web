Array.prototype.maiorEMenor = function() {
    console.log(this)
    const ordenado = this.sort((a,b) => a > b ? 1 : -1) // ordenando em ordem crescente
    // a função pega dois numeros que pertencem ao array, se o numero a for maior que o numero b, ele fica mais a frente do array (1)

    return [ordenado[0], ordenado[ordenado.length - 1]] // primeiro item é o menor, segundo item é o maior (ordenado.length -1 pois os index começam do 0)
}


vetor = [213, 3218, 192, 1923, 921, 192, 9, 129921]

console.log(vetor.maiorEMenor())