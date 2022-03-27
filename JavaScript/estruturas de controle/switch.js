function resultado (nota){
    switch (Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Menção Honrosa') //por padrão, o javascript executa todos os cases abaixo do que foi satisfeito, por isso, utilizar o break
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')
            break
    }
}

resultado(9)
resultado(10)
resultado(11)
resultado(6)
resultado(3.5)
resultado(8)