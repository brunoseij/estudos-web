// Object.preventExtensions como o próprio nome ja diz, previne a criação de novos atributos pra um dado objeto (permite a modificação de dados)

const obj1 = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: 1.99, 
    tag: 'promocao'
})

console.log(Object.isExtensible(obj1))
obj1.teste = 'aaaaa'
console.log(obj1)
delete obj1.tag // utilizando o prevent extensions, ainda permite a remoção de atributos
console.log(obj1)

// Object.seal não permite adição, nem exclusão de atributos (permite a modificação de dados)

const obj2 = Object.seal({
    nome: 'AAAAA', 
    preco: 3.99, 
    tag: 'promocao'
})

obj2.teste = 'testando'
delete obj2.nome
console.log(Object.isSealed(obj2))

console.log(obj2)

// Object.freeze não permite nem adição, nem remoção, nem mudança de dados

const obj3 = Object.freeze({
    nome: 'AAAAA', 
    preco: 3.99, 
    tag: 'promocao'
})

obj3.teste = 'testando'
delete obj3.nome
console.log(Object.isFrozen(obj3))
obj3.nome = 'Adalberto'
console.log(obj3)