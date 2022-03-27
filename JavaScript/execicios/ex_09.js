function resultado(nota) {
    const divisao = Math.floor(nota / 5) + 1 // proximo multiplo
    const falta = (divisao * 5) - nota;

    // função que arredonda caso a diferença da nota e do proximo multiplo de 5 seja menor do que 3
    const arredondar = nota => {
        if (falta < 3) {
            return nota + falta
        } else {
            return nota
        }
    }

    if (arredondar(nota) < 40) {
        return `Reprovado, nota: ${arredondar(nota)}`
    } else {
        return `Aprovado, nota: ${arredondar(nota)}`
    }
}
console.log(resultado(37))