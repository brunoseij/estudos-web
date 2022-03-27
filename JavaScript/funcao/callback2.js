const notas = [8.3, 5.2, 3.6, 9.9, 10, 6.4, 7]

// sem callback
const notasBaixas1 = []
for (let i in notas){
    if (notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)


const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7) // util caso seja necessário a reutilização do código
console.log(notasBaixas4)