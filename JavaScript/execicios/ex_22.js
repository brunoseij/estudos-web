function valorAnuidade(mes = 1, base) {
    if (mes > 0 && mes < 13){
        const atraso = mes - 1
        for (let i = 0; i < atraso; i++){
            base += 0.05 * base
        }
        return `R$ ${base.toFixed(2)}`
    } else {
        return 'Mês inválido'
    }

}


console.log(valorAnuidade(12, 200))
console.log(valorAnuidade(12, 400))
console.log(valorAnuidade(0, 400))