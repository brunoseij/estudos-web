// 0 = false
// qualquer numero inteiro = true

const divisivelPor3 = numero => {
    if (numero % 3){ // quando retorna algum numero diferente de 0, não cai nessa condicional, pois 0 é false
        return false
    } else {
        return true
    }
}

console.log(divisivelPor3(9))
console.log(divisivelPor3(3))
console.log(divisivelPor3(8))
console.log(divisivelPor3(12))