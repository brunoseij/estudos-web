const express = require('express')
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')
const porta = 3000

const app = express()

// app.use() faz com que todas as requisições get (qualquer caminho), passe pelo middleware do callback
app.use(bodyParser.urlencoded({extended : true}))

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.consultarObjetos()) // ja é convertido pra JSON
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.consultarObjeto(req.params.id))
})

app.post('/produtos', (req, res) => {
    const obj = bancoDeDados.salvarObjeto({name: req.body.name, preco: req.body.preco})
    res.send(obj)
})

app.put('/produtos/:id', (req, res) => {
    const obj = bancoDeDados.salvarObjeto({name: req.body.name, preco: req.body.preco, id : req.params.id})
    res.send(obj)
})

app.delete('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.deletarObjeto(req.params.id))
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})