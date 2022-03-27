const fs = require('fs')
const path = require('path')
function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, 'utf-8', (err, arq) => {
            try {
                resolve(arq.split('\n'))
            }catch(e) {
                reject(err)
            }
        })
    })
}

const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(console.log)
    .catch(e => console.log(e.message))