// ao exportar um objeto, não pode utilizar o this, nem o exports apenas
module.exports = {
    tudoBem: 'Tudo bem?',
    saudacao(nome){
        return `Olá ${nome}`
    }
}
console.log(this)