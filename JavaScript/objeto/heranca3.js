const pai = {nome: 'Pedro', corCabelo: 'Preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(`nome: ${filha1.nome}, cor do cabelo: ${filha1.corCabelo}`)


const filha2 = Object.create(pai, {
    nome: {value:'Bia', writable: false, enumerable: true} // criando dessa maneira, é possivel a ocultação e determinação de atributos como constantes
})

console.log(Object.keys(filha1)) // mostra apenas os atributos próprios
console.log(Object.keys(filha2))

for (let key in filha2){
    filha2.hasOwnProperty(key)? console.log(`atributo proprio: ${key}`) : console.log(`atributo herdado: ${key}`)
}