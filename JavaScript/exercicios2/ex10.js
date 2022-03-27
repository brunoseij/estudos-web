const simboloMais = function(num) {
    var result = ''
    for (let i = 0; i < num; i++) {
        result += '+'
    }
    return result
}

console.log(simboloMais(2))
console.log(simboloMais(4))