function multiplicar(n1, n2){
    let result = 0
    for (let i = 0; i < n1; i++){
        result += n2
    }
    return result
}

console.log(multiplicar(5, 5)) // retornará 25 
console.log(multiplicar(0, 7)) // retornará 0