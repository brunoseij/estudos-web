const bodyParser = require('body-parser')
const multer = require('multer')
const express = require('express')

const app = express()


app.use(express.static('.')) // provê todos os arquivos estáticos da pasta atual (todos os html, css, js)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// por padrão, serve o arquivo index.html na página inicial

// personaliza a pasta em que o arquivo será armazenado e o nome do arquivo
// importante personalizar o nome do arquivo para que não haja uma sobrescrita de arquivos
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) // colocando como prefixo a data de upload, é garantido que não haverá arquivos com o mesmo nome
    },
})

const upload = multer({ storage }).single('arquivo')

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }
        res.end('Concluido com sucesso')
    })
})

app.get('/teste', (req, res) => {
    res.send('OK')
})

app.post('/formulario', (req, res) => {
    res.send({
        ...req.body,
        id: 1
    })
})

app.get('/parOuImpar', (req, res) => {
    // existem três formas de obter os dados:
    // req.body caso o método seja post
    // req.query caso o método seja get e os dados cheguem no formato /caminho?param=valor
    // req.params caso o método seja get e os dados cheguem no formato /caminho/:valor
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})

app.listen(8080, () => console.log('Executando'))