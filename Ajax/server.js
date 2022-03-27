const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(express.static('.')) // provê todos os arquivos estáticos da pasta atual (todos os html, css, js)
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// por padrão, serve o arquivo index.html na página inicial

// app.get('/teste', (req, res) => {
//     res.send('OK')
// })

app.listen(8080, () => console.log('Executando'))