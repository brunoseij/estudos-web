const bodyParser = require('body-parser')
const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({extended: true})) // faz com que o corpo do formulario seja lido e transformado em json

app.get('/usuario', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    res.send('<h1>Parabéns, cadastrado com get!!</h1>')
})

app.post('/formulario', (req, res) => { // o caminho é definido no html do formulário
    console.log(req.body)
    res.send('<h1>Parabéns</h1>')
})

app.post('/formulario/:id', (req, res) => { // para trocar um usuario
    console.log(req.params.id)
    console.log(req.body)
    res.send('<h1>Parabéns, usuário modificado</h1>')
})

app.listen(3003, () => console.log('Executando...'))