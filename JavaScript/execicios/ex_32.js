Array.prototype.media = function() {
    let soma = 0
    this.forEach(n => {soma += n})
    return soma / (this.length)
}

const vetor = [1, 2, 3, 4, 5, 6, 7]
console.log(vetor.media())
