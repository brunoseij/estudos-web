// retorno direto do objeto faz com que o node crie um cache dos dados
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')


// com a utilização de uma função factory, é possivel instanciar um modulo importado varias vezes
const contadorC = require('./instanciaNova')() // instanciaNova exporta uma função
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)