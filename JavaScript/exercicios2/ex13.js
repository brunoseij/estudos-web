Array.prototype.filtrarNumeros = function(){
    const resultado = this.filter(e => {
        return (typeof e == 'number')
    })
    return resultado
}

console.log(["Javascript", 1, "3", "Web", 20].filtrarNumeros())
console.log(["a", "c"].filtrarNumeros())