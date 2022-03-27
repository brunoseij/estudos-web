const pessoa = {
    nome: 'Bruno',
    sobrenome: 'Seiji',
    idade: 20
}
console.log(JSON.stringify(pessoa))

const obj2 = JSON.parse('{"nome": "Jones", "masculino": true, "idade": 20, "obj": {}, "array": [] }')
console.log(obj2)