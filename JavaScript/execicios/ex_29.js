Array.prototype.entre = function(inicio = 10, final = 20){
    let dentro = 0
    let fora = 0
    this.forEach(n => {
        if (n >= inicio && n <= final){
            dentro++
        } else {
            fora++
        }
    })
    return `${dentro} dentro, ${fora} fora`
}

vetor = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
console.log(vetor.entre())