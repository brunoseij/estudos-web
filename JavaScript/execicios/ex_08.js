const recorde = pontos => {
    const listaPontos = pontos.split(' ')
    let maior = listaPontos[0]
    let menor = listaPontos[0]
    let recordesBatidos = 0

    listaPontos.forEach(pontuacao => {
        pontuacao = Number(pontuacao)

        if (pontuacao > maior) {
            maior = pontuacao
            recordesBatidos++
        } else if (pontuacao <= menor){
            menor = pontuacao
        }
    })
    return [recordesBatidos, listaPontos.indexOf(String(menor)) + 1]
}

console.log(recorde('10 20 20 8 25 3 0 30 1'))