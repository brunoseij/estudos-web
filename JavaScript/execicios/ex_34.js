function caracUnicosIguais(string1, string2) {
    string1 = string1.toLowerCase()
    string2 = string2.toLowerCase()

    const cString1 = []
    let iguais = true

    // Coloca todos os caracteres unicos da string 1 em um array
    for (let i = 0; i < string1.length; i++) {
        if (!(cString1.includes(string1[i]))) {
            cString1.push(string1[i])
        }
    }

    // verifica se cada um dos caracteres da string2 estão presentes no 'dicionario' da string1
    for (i = 0; i < string2.length; i++) {
        if (!(cString1.includes(string2[i]))) { // se algum caractere não estiver presente => iguais = false
            iguais = false
        }
    }
    return iguais
}

console.log(caracUnicosIguais('asoas', 'soaso'))
console.log(caracUnicosIguais('sajsd', 'SAJSD'))
console.log(caracUnicosIguais('abc', 'cdabc1'))