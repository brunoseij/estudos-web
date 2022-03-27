let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1
console.log(num1)

console.log(++num1 === num2--) // a subtração no segundo número foi feita após a comparação
// evitar a utilização de operadores unários em comparações
console.log(num1 == num2)