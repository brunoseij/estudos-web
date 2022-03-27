const bissexto = ano => {
    if (ano % 4 == 0){
        return true
    } else {
        return false
    }
}

console.log(bissexto(2000))
console.log(bissexto(400))
console.log(bissexto(2022))
console.log(bissexto(2024))