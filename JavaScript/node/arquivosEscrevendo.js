const fs = require('fs')

const produto = {
    nome: 'Leite condensado',
    preco: 3.49,
    categoria: 'Laticinios'
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})