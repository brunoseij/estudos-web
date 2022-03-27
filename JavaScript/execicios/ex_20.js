function trocoEficiente(valor) {
    const quantidade = calculadoraNotas(valor)
    for (i in quantidade) {
        if (quantidade[i] > 0){
            switch (i){
                case '0':
                    console.log(`${quantidade[i]} nota(s) de 100 reais`)
                    break
                case '1':
                    console.log(`${quantidade[i]} nota(s) de 50 reais`)
                    break
                case '2':
                    console.log(`${quantidade[i]} nota(s) de 20 reais`)
                    break
                case '3':
                    console.log(`${quantidade[i]} nota(s) de 10 reais`)
                    break
                case '4':
                    console.log(`${quantidade[i]} nota(s) de 5 reais`)
                    break
                case '5':
                    console.log(`${quantidade[i]} nota(s) de 1 real`)
                    break
            }
        }
    }
}


function calculadoraNotas(valor){
    const quantidade = [0, 0, 0, 0, 0, 0] // cada numéro representa a quantidade de notas (100, 50, 20, 10, 5, 1)
    
    while (valor != 0) {
        if (valor >= 100){
            quantidade[0] += 1
            valor -= 100
        } else if (valor >= 50) {
            quantidade[1] += 1
            valor -= 50
        } else if (valor >= 20) {
            quantidade[2] += 1
            valor -= 20
        } else if (valor >= 10){
            quantidade[3] += 1
            valor -= 10
        } else if (valor >= 5) {
            quantidade[4] += 1
            valor -= 5
        } else {
            quantidade[5] += 1
            valor -= 1
        }
    }
    return quantidade
}

trocoEficiente(18)