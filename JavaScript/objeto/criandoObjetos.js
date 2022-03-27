// criando objetos de forma literal
const obj = {}
console.log(obj)

// object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)


// Funções construtoras
function Produto(nome, preco, desconto) {
    this.nome = nome
    this.getPrecoDescontado = () =>{
        return preco * (1- desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.1)
const p2 = new Produto('Notebook', 5499.99, 0.2)

console.log(p1.getPrecoDescontado())
console.log(p2.getPrecoDescontado())


// Função factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        salario() {
            return ((salarioBase/30) * (30 - faltas))
        }
    }
}

const funcionario1 = criarFuncionario('João', 3000, 5)
console.log(funcionario1.salario())
const funcionario2 = criarFuncionario('Ana', 10000, 2)
console.log(funcionario2.salario())   


// Object.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha.nome)

// JSON para objeto
const objJson = JSON.parse('{"nome": "joão"}')
console.log(objJson.nome)