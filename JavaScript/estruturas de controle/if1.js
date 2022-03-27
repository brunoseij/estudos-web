function soNoticiaBoa (nota) {
    if (nota >= 7){
        console.log(`aprovado com ${nota}`)
    }
}

soNoticiaBoa(7)
soNoticiaBoa(8)
soNoticiaBoa(6)

function seForVerdadeEuFalo (valor) {
    if (valor){
        console.log(`${valor} é verdade...`)
    }
}

seForVerdadeEuFalo('')
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo('sim')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})