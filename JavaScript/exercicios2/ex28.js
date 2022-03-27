const filtrarDigitos = function(array, digitos) {
    return array.filter(n => {
        return n.toString().length == digitos
    })
} 

console.log(filtrarDigitos([38, 2, 365, 10, 125, 11], 2))