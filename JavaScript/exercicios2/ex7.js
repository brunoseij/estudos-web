const estaEntre = function (num, min, max, inclusivo = false) {
    return inclusivo? (num >= min && num <= max) : (num > min && num < max)
}

console.log(estaEntre(10, 50, 100)) // retornarĂ¡ false
console.log(estaEntre(16, 16, 100)) // retornarĂ¡ false 
console.log(estaEntre(3, 2, 10)) // retornarĂ¡ true 
console.log(estaEntre(3, 3, 150, true)) // retornarĂ¡ true