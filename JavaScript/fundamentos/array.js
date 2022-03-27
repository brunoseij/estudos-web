const valores = [1.1, 7.2, 6.5, 8.0]
console.log(valores[0],valores[3],valores[10])

valores[4] = 15.2
console.log(valores)
console.log(valores.length)

valores.push({id: 4}, false, null, "teste") // equivalente ao append
console.log(valores)

console.log(valores.pop('teste'))
delete valores[5]
console.log(valores)

console.log(typeof valores)