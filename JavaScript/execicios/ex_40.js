Number.prototype.entre = function (inicio, fim) {
    if (inicio > fim) {
        [inicio, fim] = [fim, inicio]
    }
    return this >= inicio && this <= fim
}

function conceitos(vetorNotas) {
    vetorNotas.forEach(nota => {
        if (nota.entre(0, 4.9)) {
            console.log(`${nota}: conceito D`)
        } else if (nota.entre(5, 6.9)) {
            console.log(`${nota}: conceito C`)
        } else if (nota.entre(7, 8.9)) {
            console.log(`${nota}: conceito B`)
        } else if (nota.entre(9, 10)) {
            console.log(`${nota}: conceito A`)
        } else {
            console.log('Nota inválida')
        }
    });
}

const notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8]
conceitos(notas)