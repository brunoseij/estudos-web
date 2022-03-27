const valorPlano = idade => {
    const idoso = 130
    const adulto = 95
    const jovem = 50
    const crianca = 80
    if (idade > 60){
        return 100 + idoso
    } else if (idade > 30) {
        return 100 + adulto
    } else if (idade >= 10) {
        return 100 + jovem
    } else {
        return 100 + crianca
    }
}
console.log(valorPlano(8))
console.log(valorPlano(77))