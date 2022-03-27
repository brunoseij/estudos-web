// ifs errados

function teste1 (nota) {
    if (nota >=7) // só considera como parte do if, uma sentença
        console.log(`aprovado ${nota}`)
        console.log('Final')
}

teste1(8)
teste1(6)

function teste2 (nota) {
    if (nota >=7); { // cuidado com o ;
        console.log(`aprovado ${nota}`)
        console.log('Final')
    }
}

teste2(7)
teste2(6)