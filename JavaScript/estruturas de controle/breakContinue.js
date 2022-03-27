const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// para a execução do for e executa o próximo código
for (x in nums){
    if (x == 5){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}
console.log('Final', x)


// pula a execução da condição, e continua o loop for
for (y in nums){
    if (y == 5){
        continue
    }
    console.log(`${y} = ${nums[y]}`)
}


externo: // evitar a utilização de rótulos dessa maneira
for (a in nums){
    for (b in nums){
        if (a == 2 && b == 3){
            break externo // ao invés de dar um break no loop mais próximo, deu um break no loop mais externo
        }
        console.log(a,b)
    }
}