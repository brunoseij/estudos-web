// objetos é diferente de json
// '{"produto": "camisa", "preco": 79.90 }' formato do json

const prod1 = {}
prod1.nome = "Celular Samsung"
prod1.preco = 1500
prod1['desconto'] = 0.4

console.log(prod1)

const prod2 ={
    nome: "Camiseta",
    preco: 50
}

console.log(prod2)