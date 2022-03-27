function checarAnoBissexto(ano) {
    return ano % 4 == 0 && ano % 100 != 0
}

console.log(checarAnoBissexto(2020))
console.log(checarAnoBissexto(2100))