function impares(inicio = 0, fim = 100) {
    if (inicio > fim){
        [inicio, fim] = [fim, inicio]
    }
    for (let i = inicio; i < fim + 1; i++){
        if ((i % 2) != 0){
            console.log(i)
        }
    }
}

impares(101, 1)