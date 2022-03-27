// notação simplificada para definir variáveis com valores que estão dentro de um objeto

const pessoa = {
    nome: 'Bruno',
    idade: 20,
    endereco: {
        logradouro: 'Avenida Benigno Carrera',
        numero: 639,
    }
}


// operador destructuring
const { nome, idade } = pessoa // nome = pessoa.nome; idade = pessoa.idade
console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log(n,i)

const {endereco: {logradouro, numero}} = pessoa
console.log(logradouro, numero)