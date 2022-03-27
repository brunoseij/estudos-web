function vaiPassar(altura1, taxa1, altura2, taxa2){
    const maior = altura1 > altura2 ? {altura: altura1, taxa: taxa1/100} : {altura: altura2, taxa: taxa2/100}
    const menor = maior.altura == altura1? {altura: altura2, taxa: taxa2/100} : {altura: altura1, taxa: taxa1/100}

    if (maior.altura != menor.altura){
        if (maior.taxa >= menor.taxa){
            console.log('Nunca passará, pois a taxa de crescimento da maior criança é maior ou igual a taxa de crescimento da menor criança') 
        } else {
            let anos = 0
            while ((maior.altura).toFixed(2) >= (menor.altura).toFixed(2)){
                maior.altura += maior.taxa
                menor.altura += menor.taxa
                anos++
            }
            if (maior.altura > 2.5 || menor.altura > 2.5 || anos > 100){
                console.log('Nunca passará')
            } else {
                console.log(`A menor criança passará a maior em ${anos} anos`)
            }
        }
    }
}


vaiPassar(1.7, 0.00005, 1.3, 0.0001)
vaiPassar(1.2, 1, 1.1, 4)
vaiPassar(1.6, 30, 1.4, 35)
vaiPassar(1.1, 5, 1.2, 5)