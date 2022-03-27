const resultado = nota => {
    if (nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

resultado(6)
resultado(7)
resultado(10)
resultado('alo') // cuidado