Array.prototype.quantidadeNegativos = function(){
    let negativos = 0
    this.forEach(n => {
        if (n < 0){
            negativos++
        }
    })
    return negativos
}

const vetor = [-1, -2, -45, -212, 2, 3, 4]
console.log(vetor.quantidadeNegativos())