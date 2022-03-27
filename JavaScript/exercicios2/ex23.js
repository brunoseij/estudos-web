String.prototype.contaPalavras = function(){
    return this.split(' ').length
}

console.log('sou uma frase'.contaPalavras())
console.log("Me divirto aprendendo a programar".contaPalavras())