const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono (não recomendado, pois pode causar lentidão)
const arquivo = fs.readFileSync(caminho,'utf-8')
console.log(arquivo)

// assincrono, dessa maneira, quando tiver carregado, será mostrado o conteúdo (outras coisas podem ir carregando junto)
fs.readFile(caminho, 'utf-8', (err, arq) => {
    const config = JSON.parse(arq)
    console.log(`${config.db.host}:${config.db.port}`)
})

const arquivo2 = require('./arquivo.json') // dessa maneira, não é preciso converter o json para objeto, muito util caso for carregar algum banco de dados, e precise de alguma manipulação
console.log(arquivo2.db.user)


// lendo pastas
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})