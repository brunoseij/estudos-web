Array.prototype.calcularMedia = function() {
    return this.reduce((acumulador, atual) => acumulador + atual) / this.length
}
console.log([0, 10].calcularMedia())
console.log([1, 2, 3, 4, 5].calcularMedia())