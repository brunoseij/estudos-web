function calcularNota (codigo, n1, n2, n3) {
    const notas = []
    notas.push(n1)
    notas.push(n2)
    notas.push(n3)
    console.log(notas)
    notas.sort((a, b) => a > b ? 1 : -1) // compare
    console.log(notas)

    const notaFinal = (4*(notas[2]) + 3*(notas[0] + notas[1])) / 12
    const resultado = nota => nota >= 5 ? 'Aprovado':'Reprovado'
    return `Código do Aluno: ${codigo}. Notas: ${n1}, ${n2}, ${n3}. ${resultado(notaFinal)}`
}

console.log(calcularNota(218, 10, 7, 8))

// Se compare(a, b) for menor que zero, o método sort() classifica a para um índice menor que b. Ou seja, o a virá antes de b.
// Se compare(a, b) for maior que zero, o método sort() classificará b com um índice menor que a, ou seja, b virá primeiro.
// Se compare(a, b) retornar zero, o método sort() considera a igual a b e deixa suas posições inalteradas.