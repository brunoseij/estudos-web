Number.prototype.entre = function (inicio,final){
    return this >= inicio && this <= final
}

const resultados = nota => {
    if (nota.entre(9, 10)){
        console.log('Menção Honrosa')
    }else if (nota.entre(7,8.99)){
        console.log('Aprovado')
    }else if (nota.entre(4, 6.99)){
        console.log('Recuperação')
    }else if (nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else{
        console.log('Entrada inválida')
    }
}

resultados(7)
resultados(4)
resultados(10)
resultados(11)
resultados(0)
resultados(-1)