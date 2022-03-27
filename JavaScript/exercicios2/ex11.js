Array.prototype.receberPrimeiroEUltimoElemento = function(){
    return [this.shift(), this.pop()]
}

console.log([7,14,"olá"].receberPrimeiroEUltimoElemento())
console.log([-100, "aplicativo", 16].receberPrimeiroEUltimoElemento())

