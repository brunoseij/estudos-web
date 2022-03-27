Array.prototype.forEach2 = function (f){ // a função forEach recebe como parâmetro uma função (chamei de f)
    for (let i = 0; i <= this.length - 1; i++){ // laço for para percorrer o array
        f(this[i], i, this) // aplicando a função nos elementos do array (passa como valor o nome, o indice e o proprio array, como na função forEach original)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel', 'Victor']

aprovados.forEach((nome, indice) => {
    console.log(`${indice + 1}: ${nome}`) 
})
